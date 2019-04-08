function processFile(storage, callback) {
    var text = storage.content;
    var options = storage.options;
    var sep = options.separator;
    var quote = options.quoteMark;
    var hasHeaders = options.hasHeaders;
    var comment = options.commentCharacter;
    var skip = options.skipComments;
    var formatAlways = options.formatValues === "always";
    var formatUnquoted = options.formatValues === "unquoted";
    var format = options.numberFormat;

    var regexQuote = new RegExp(`^${quote}([\\S\\s]*)${quote}$`);
    var regexDoubleQuote = new RegExp(`${quote}${quote}`, 'g');
    var regexComment = new RegExp(String.raw`^\s*${comment}|^\s+$`);

    // based on https://softwareengineering.stackexchange.com/a/368124
    var regexLines = new RegExp(`((${quote}(?:[^${quote}]|)+${quote}|[^${quote}\n\r]+)+)`, 'g');

    // http://markmintoff.com/2013/03/regex-split-by-comma-not-surrounded-by-quotes/
    var regexItems = new RegExp(`${sep}(?=(?:[^${quote}]*${quote}[^${quote}]*${quote})*[^${quote}]*$)`);

    function unquote(cell) {
        if (cell.text.length > 0) {
            var match = regexQuote.exec(cell.text);
            if (match) {
                cell.quoted = true;
                return dblquote(match[1]);
            }
        }
        return cell.text;
    }

    function dblquote(text) {
        return text.length > 1 ? text.replace(regexDoubleQuote, `${quote}`) : text;
    }

    function isComment(text) {
        return !skip ? false : ((text.length > 0) ? regexComment.exec(text) : true);
    }

    function getBinding(n) {
        var h1 = Math.floor(n / 26);
        var h2 = n % 26;
        if (h1 > 0) {
            return String.fromCharCode(64 + h1) + String.fromCharCode(65 + h2);
        } else {
            return String.fromCharCode(65 + h2);
        }
    }

    var data = [], headers = [], bindings = [];
    var content = Base64.decode(text);
    var lines = content.match(regexLines);
    var firstLine = hasHeaders;
    var maxLength = 0;

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].replace("\r", "");
        if (!isComment(line)) {
            var items = line.split(regexItems);
            if (items.length > maxLength) {
                maxLength = items.length;
            }
            if (firstLine) {
                for (var j = 0; j < items.length; j++) {
                    var cell = { text: items[j] };
                    headers.push(unquote(cell));
                }
                firstLine = false;
            } else {
                var obj = {};
                for (var j = 0; j < items.length; j++) {
                    var cell = { text: items[j], quoted: false };
                    var value = unquote(cell);
                    if (formatAlways || (formatUnquoted && !cell.quoted)) {
                        var num = value.length ? Number(value) : NaN;
                        obj[getBinding(j)] = isNaN(num) ? value : num;
                    } else {
                        obj[getBinding(j)] = value;
                    }
                }
                if (line.length > 0 || (i < lines.length - 1)) {
                    data.push(obj);
                }
            }
        }
    }

    for (var i = 0; i < maxLength; i++) {
        var key = getBinding(i);
        var header = (headers.length > i) ? headers[i] : hasHeaders ? "" : key;
        bindings.push({
            binding: key,
            header: header.length > 0 ? header : " ",
            format: format,
            multiLine: true
        });
    }

    callback(data, options, bindings);
}

function renderFile(data, options, bindings) {
    const vscode = acquireVsCodeApi();
    var flex = new wijmo.grid.FlexGrid("#flex", {
        autoGenerateColumns: false,
        columns: bindings,
        isReadOnly: true,
        stickyHeaders: true,
        keyActionTab: wijmo.grid.KeyAction.Cycle,
        allowDragging: wijmo.grid.AllowDragging.None
    });

    window.addEventListener("message", event => {
        if (event.data.refresh) {
            loadFile(gcLocalServer, refreshFile);
        }
    });    

    flex.itemsSourceChanged.addHandler(function(s, e) {
        var resize = options.resizeColumns;
        if (resize === "all") {
            flex.autoSizeColumns();
        } else if (resize === "first") {
            flex.autoSizeColumn(0);
        }
        autoSizeVisibleRows(flex, true);
    });

    flex.sortingColumn.addHandler(function(s, e) {
        var shift = s._mouseHdl._eMouse.shiftKey;
        if (shift) {
            e.cancel = true;
            var binding = s.columns[e.col].binding;
            var sorts = s.collectionView.sortDescriptions;
            var index = -1;
            for (var i = 0; i < sorts.length; i++) {
                if (sorts[i].property === binding) {
                    index = i;
                    break;
                }
            }
            var asc = (index === -1) ? true : !sorts[index].ascending;
            var desc = new wijmo.collections.SortDescription(binding, asc);
            if (index === -1) {
                sorts.push(desc);
            } else {
                sorts.setAt(index, desc);
            }
        }
        autoSizeVisibleRows(flex, true);
    });

    var numbersOrdinal = options.lineNumbers === "ordinal";
    var numbersSource = options.lineNumbers === "source";
    var lineNumbers = numbersOrdinal || numbersSource;

    flex.formatItem.addHandler(function(s, e) {
        if (lineNumbers) {
           if (e.panel.cellType == wijmo.grid.CellType.RowHeader) {
                if (numbersSource) {
                    var row = flex.rows[e.row];
                    var source = flex.collectionView.sourceCollection;
                    var n = source.indexOf(row.dataItem) + 1;
                    e.cell.textContent = n.toString();
                } else if (numbersOrdinal) {
                    e.cell.textContent = (e.row + 1).toString();
                }
            }
        }
        if (options.capitalizeHeaders) {
            if (e.panel.cellType == wijmo.grid.CellType.ColumnHeader) {
                var html = e.cell.innerHTML;
                var n = html.indexOf("&nbsp;");
                if (n > 0) {
                    var text = wijmo.toHeaderCase(html.slice(0, n));
                    e.cell.innerHTML = text + html.slice(n);
                } else {
                    e.cell.innerHTML = wijmo.toHeaderCase(html);
                }
            }
        }
    });

    flex.itemsSource = data;

    var filter = new wijmo.grid.filter.FlexGridFilter(flex);
    var busy = false, pending = false;

    function getState() {
        var state = {
            columnLayout: flex.columnLayout,
            filterDefinition: filter.filterDefinition,
            sortDescriptions: flex.collectionView.sortDescriptions.map(function (sd) {
                return {
                    property: sd.property,
                    ascending: sd.ascending
                }
            }),
            scrollPosition: flex.scrollPosition,
            version: "2.1.27"
        };
        return state;
    }

    function preserveState() {
        if (!busy) {
            busy = true;
            var state = getState();
            postState(gcLocalServer, state, function() {
                busy = false;
                if (pending) {
                    pending = false;
                    preserveState();
                }
            })
        } else {
            pending = true;
        }
    }

    function layoutChanged(state, flex) {
        if (!state.version || state.version < "2.1.27") {
            return true;
        }
        var stateCols = JSON.parse(state.columnLayout).columns;
        var flexCols = JSON.parse(flex.columnLayout).columns;
        if (stateCols.length != flexCols.length) {
            return true;
        }
        for (var i = 0; i < stateCols.length; i++) {
            if (stateCols[i].name !== flexCols[i].name) {
                return true;
            }
        }
        return false;
    }
    
    function applyState() {
        var json = options.state;
        if (json && !layoutChanged(json, flex)) {
            flex.columnLayout = json.columnLayout;
            filter.filterDefinition = json.filterDefinition;
            json.sortDescriptions.forEach(function (item) {
                var sd = new wijmo.collections.SortDescription(item.property, item.ascending);
                flex.collectionView.sortDescriptions.push(sd);
            });
            if (json.scrollPosition) {
                flex.scrollPosition = json.scrollPosition;
            }
        }    
    }

    function refreshFile(data) {
        var flex = wijmo.Control.getControl("#flex");
        flex.beginUpdate();
        flex.columns.clear();
        bindings.forEach((b) => {
            flex.columns.push(new wijmo.grid.Column(b));
        });
        flex.itemsSource = data;
        autoSizeVisibleRows(flex, true);
        flex.autoSizeColumn(0, true);
        flex.endUpdate();
    }

    flex.collectionView.collectionChanged.addHandler(() => {
        preserveState();
        autoSizeVisibleRows(flex, true);
    });

    flex.resizedColumn.addHandler(() => {
        preserveState();
        autoSizeVisibleRows(flex, true);
    });

    flex.scrollPositionChanged.addHandler(() => {
        preserveState();
        autoSizeVisibleRows(flex, false);
    });

    flex.rowEditEnded.addHandler((s,e) => {
        let data = s.rows[e.row].dataItem;
        vscode.postMessage({
            event: "rowEditEnded",
            row: e.row,
            data: data
        }, "*");
    });

    flex.autoSizeColumn(0, true);
    applyState();
}

function resizeGrid() {
    var div = wijmo.getElement("#flex");
    div.style.height = window.innerHeight.toString() + "px";
}

// http://jsfiddle.net/Wijmo5/2a20kqvr/
function autoSizeVisibleRows(flex, force) {
    var rng = flex.viewRange;
    for (var r = rng.row; r <= rng.row2; r++) {
        if (force || flex.rows[r].height == null) {
            flex.autoSizeRow(r, false)
        }
    }
}
