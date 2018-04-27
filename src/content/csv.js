function processFile(storage, callback) {
    var text = storage.content;
    var options = storage.options;
    var sep = options.separator;
    var quote = options.quoteMark;
    var hasHeaders = options.hasHeaders;
    var comment = options.commentCharacter;
    var skip = options.skipComments;

    var regexQuote = new RegExp(`^${quote}(.*)${quote}$`);
    var regexDoubleQuote = new RegExp(`${quote}${quote}`, 'g');
    var regexComment = new RegExp(String.raw`^\s*${comment}|^\s+$`);
    var regexMultiline = new RegExp(`(${quote}[^${quote}]+[\r\n]+.*${quote})[\r\n]+`, 'm');
    var regexLines = new RegExp(`\n(?=[${quote}]+[\r]*)`);

    // http://markmintoff.com/2013/03/regex-split-by-comma-not-surrounded-by-quotes/
    var regexItems = new RegExp(`${sep}(?=(?:[^${quote}]*${quote}[^${quote}]*${quote})*[^${quote}]*$)`);

    function unquote(text) {
        if (text.length > 0) {
            var match = regexQuote.exec(text);
            return match ? dblquote(match[1]) : text;
        }
        return text;
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
    var multilineFields = content.split(regexMultiline).length > 1;
    var lines = multilineFields ? content.split(regexLines) : content.split("\n");
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
                    headers.push(unquote(items[j]));
                }
                firstLine = false;
            } else {
                var obj = {};
                for (var j = 0; j < items.length; j++) {
                    var value = unquote(items[j]);
                    var num = value.length ? Number(value) : NaN;
                    obj[getBinding(j)] = isNaN(num) ? value : num;
                }
                data.push(obj);
            }
        }
    }

    for (var i = 0; i < maxLength; i++) {
        var key = getBinding(i);
        var header = (headers.length > i) ? headers[i] : hasHeaders ? "" : key;
        bindings.push({
            binding: key,
            header: header
        });
    }

    callback(data, options, bindings);
}

function renderFile(data, options, bindings) {
    var flex = new wijmo.grid.FlexGrid("#flex", {
        autoGenerateColumns: false,
        columns: bindings,
        isReadOnly: true,
        stickyHeaders: true,
        allowDragging: wijmo.grid.AllowDragging.None
    });

    flex.itemsSourceChanged.addHandler(function(s, e) {
        var resize = options.resizeColumns;
        if (resize === "all") {
            flex.autoSizeColumns();
        } else if (resize === "first") {
            flex.autoSizeColumn(0);
        }
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
    });

    flex.formatItem.addHandler(function(s, e) {
        if (options.lineNumbers) {
            if (e.panel.cellType == wijmo.grid.CellType.RowHeader) {
                e.cell.textContent = (e.row + 1).toString();
            }
        }
        if (options.capitalizeHeaders) {
            if (e.panel.cellType == wijmo.grid.CellType.ColumnHeader) {
                e.cell.textContent = wijmo.toHeaderCase(e.cell.textContent);
            }
        }
    });

    flex.itemsSource = data;

    var filter = new wijmo.grid.filter.FlexGridFilter(flex);
    var nag = getNagLink();
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
            version: "2.0.21"
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
        if (!state.version) {
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

    flex.collectionView.collectionChanged.addHandler(() => {
        preserveState();
    });

    flex.resizedColumn.addHandler(() => {
        preserveState();
    });

    flex.scrollPositionChanged.addHandler(() => {
        preserveState();
    });

    applyState();
}

function resizeGrid() {
    var div = wijmo.getElement("#flex");
    div.style.height = window.frameElement.offsetHeight.toString() + "px";
}
