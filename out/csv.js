var sendMessage;

function initPage() {
    const vscode = acquireVsCodeApi();
    const options = getOptions();
    sendMessage = vscode.postMessage;

    var flex = new wijmo.grid.FlexGrid("#flex", {
        autoGenerateColumns: false,
        isReadOnly: !options.customEditor,
        allowDelete: options.customEditor,
        allowAddNew: options.customEditor,
        stickyHeaders: true,
        keyActionTab: wijmo.grid.KeyAction.Cycle,
        allowDragging: wijmo.grid.AllowDragging.None
    });

    var filter = new wijmo.grid.filter.FlexGridFilter(flex);

    function getState() {
        var state = {
            uri: options.uri,
            previewUri: options.previewUri,
            languageId: options.languageId,
            columnLayout: flex.columnLayout,
            filterDefinition: filter.filterDefinition,
            sortDescriptions: flex.collectionView.sortDescriptions.map(function (sd) {
                return {
                    property: sd.property,
                    ascending: sd.ascending
                }
            }),
            scrollPosition: flex.scrollPosition,
            version: "4.0.45"
        };
        return state;
    }

    function preserveState() {
        var state = getState();
        vscode.setState(state);
        vscode.postMessage({ save: true, state: state });
    }

    function layoutChanged(state, flex) {
        if (!state.version || state.version < "4.0.45") {
            return true;
        }
        var stateCols = JSON.parse(state.columnLayout).columns;
        var flexCols = JSON.parse(flex.columnLayout).columns;
        if (stateCols.length != flexCols.length) {
            return true;
        }
        for (var i = 0; i < stateCols.length; i++) {
            if (stateCols[i].header !== flexCols[i].header) {
                return true;
            }
        }
        return false;
    }
    
    function applyState() {
        if (ignoreState()) return;
        var json = vscode.getState() || options.state;
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

    var needRowResize = false;
    var emptyRange = new wijmo.grid.CellRange(0, 0);

    // http://jsfiddle.net/Wijmo5/2a20kqvr/
    function autoSizeVisibleRows(flex, force) {
        var rng = flex.viewRange;
        needRowResize = rng.equals(emptyRange);
        for (var r = rng.row; r <= rng.row2; r++) {
            if (force || flex.rows[r].height == null) {
                flex.autoSizeRow(r, false);
            }
        }
    }

    flex.updatedView.addHandler(function(s, e) {
        if (needRowResize) {
            autoSizeVisibleRows(s, true);
            needRowResize = false;
        }
    });

    flex.itemsSourceChanged.addHandler(function(s, e) {
        applyState();
        var resize = options.resizeColumns;
        if (resize === "all") {
            flex.autoSizeColumns();
        } else if (resize === "first") {
            flex.autoSizeColumn(0);
        }
        autoSizeVisibleRows(flex, true);
        preserveState();
        if (flex.collectionView) {
            flex.collectionView.collectionChanged.addHandler(() => {
                preserveState();
                autoSizeVisibleRows(flex, true);
            });
        }
    });

    flex.sortingColumn.addHandler(function(s, e) {
        preserveState();
        autoSizeVisibleRows(flex, true);
    });

    var numbersOrdinal = options.lineNumbers === "ordinal";
    var numbersSource = options.lineNumbers === "source";
    var lineNumbers = numbersOrdinal || numbersSource;

    flex.formatItem.addHandler(function(s, e) {
        if (lineNumbers) {
            if (e.panel.cellType == wijmo.grid.CellType.RowHeader) {
                var row = flex.rows[e.row];
                if (!(row instanceof wijmo.grid._NewRowTemplate)) {
                    if (numbersSource) {
                        var source = flex.collectionView.sourceCollection;
                        var n = source.indexOf(row.dataItem) + 1;
                        e.cell.textContent = n.toString();
                    } else if (numbersOrdinal) {
                        e.cell.textContent = (e.row + 1).toString();
                    }
                }
            }
        }
        if (options.capitalizeHeaders) {
            if (e.panel.cellType == wijmo.grid.CellType.ColumnHeader) {
                var html = e.cell.innerHTML;
                var text = e.cell.innerText.trim();
                var n = html.lastIndexOf(text);
                text = wijmo.toHeaderCase(text);
                if (n > 0) {
                    e.cell.innerHTML = html.slice(0, n) + text + html.slice(n + text.length);
                } else {
                    e.cell.innerHTML = text;
                }
            }
        }
    });

    flex.resizedColumn.addHandler(() => {
        preserveState();
        autoSizeVisibleRows(flex, true);
    });

    flex.scrollPositionChanged.addHandler(() => {
        preserveState();
        autoSizeVisibleRows(flex, false);
    });

    flex.cellEditEnding.addHandler(function(s, e) {
        var active = s.activeEditor.value;
        var dataItem = s.rows[e.row].dataItem;
        var binding = s.columns[e.col].binding;
        dataItem[binding] = active;
    });

    flex.cellEditEnded.addHandler(function(s, e) {
        var oldValue = e.data;
        var newValue = s.getCellData(e.row, e.col);
        if (oldValue !== newValue) {
            var row = s.rows[e.row];
            var source = s.collectionView.sourceCollection;
            vscode.postMessage({
                cellEditEnded: true,
                row: source.indexOf(row.dataItem),
                col: e.col,
                value: newValue
            });
        }
    });

    flex.pastedCell.addHandler(function(s, e) {
        var oldValue = e.data;
        var newValue = s.getCellData(e.row, e.col);
        if (oldValue !== newValue) {
            var row = s.rows[e.row];
            var source = s.collectionView.sourceCollection;
            vscode.postMessage({
                cellEditEnded: true,
                row: source.indexOf(row.dataItem),
                col: e.col,
                value: newValue
            });
        }
    });

    flex.rowEditEnded.addHandler(function(s, e) {
        vscode.postMessage({
            rowEditEnded: true,
            cancel: e.cancel
        });
    });

    flex.deletingRow.addHandler(function(s, e) {
        e.cancel = true;
        var sourceRows = [], indexRows = [];
        var source = s.collectionView.sourceCollection;
        for (var n = s.selection.topRow; n <= s.selection.bottomRow; n++) {
            var row = s.rows[n];
            sourceRows.push(source.indexOf(row.dataItem));
            indexRows.push(n);
        }
        indexRows.reverse();
        indexRows.forEach((n) => {
            s.editableCollectionView.removeAt(n);
        });
        vscode.postMessage({
            deleteRows: true,
            rows: sourceRows
        });
    });

    flex.rowAdded.addHandler(function(s, e) {
        vscode.postMessage({
            rowAdded: true,
            count: s.columns.length
        });
    });

    vscode.postMessage({ refresh: true });
}

function parseContent(text) {
    const options = getOptions();
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

    function isSep(text) {
        var line = text.replace(/ /g, "");
        var left = line.slice(0, 4).toLowerCase();
        var result = (left === "sep=");
        if (result && line.length == 5) {
            var escapes = `+*?^$\.[]{}()|/`;
            var char = line.slice(4);
            sep = (escapes.indexOf(char) >= 0) ? "\\".concat(char) : char;
            regexItems = new RegExp(`${sep}(?=(?:[^${quote}]*${quote}[^${quote}]*${quote})*[^${quote}]*$)`);
            sendMessage({
                separator: sep
            });    
        }
        return result;
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
    var lines = text.match(regexLines);
    var firstLine = hasHeaders;
    var maxLength = 0;

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].replace("\r", "");
        if (i == 0 && isSep(line)) {
            continue;
        }
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

    return {
        data: data,
        bindings: bindings
    }
}

function resizeGrid() {
    var div = wijmo.getElement("#flex");
    div.style.height = window.innerHeight.toString() + "px";
}

function handleEvents() {
    window.addEventListener("message", event => {
        if (event.data.refresh) {
            var flex = wijmo.Control.getControl("#flex");
            var content = parseContent(event.data.content);
            flex.beginUpdate();
            flex.columns.clear();
            content.bindings.forEach((b) => {
                flex.columns.push(new wijmo.grid.Column(b));
            });
            flex.itemsSource = content.data;
            flex.endUpdate();
        }
    });   
}
