function processFile(storage, callback) {
    var text = storage.content;
    var options = storage.options;
    var sep = options.separator;
    var quote = options.quoteMark;
    var hasHeaders = options.hasHeaders;
    var comment = options.commentCharacter;
    var skip = options.skipComments;

    var regexQuote = new RegExp(`${quote}([^${quote}]*)${quote}`);
    var regexComment = new RegExp(String.raw`^\s*${comment}|^\s+$`);
    var regexMultiline = new RegExp(`(${quote}[^${quote}]+[\r\n]+.*${quote})[\r\n]+`, 'm');
    var regexLines = new RegExp(`\n(?=[${quote}]+[\r]*)`);

    // http://markmintoff.com/2013/03/regex-split-by-comma-not-surrounded-by-quotes/
    var regexItems = new RegExp(`${sep}(?=(?:[^${quote}]*${quote}[^${quote}]*${quote})*[^${quote}]*$)`);

    function unquote(text) {
        if (text.length > 0) {
            var match = regexQuote.exec(text);
            return match ? match[1] : text;
        }
        return text;
    }

    function isComment(text) {
        return !skip ? false : ((text.length > 0) ? regexComment.exec(text) : true);
    }

    function getHeader(n) {
        if (header.length > n) {
            return header[n];
        }
        var h1 = Math.floor(n / 26);
        var h2 = n % 26;
        if (h1 > 0) {
            return String.fromCharCode(64 + h1) + String.fromCharCode(65 + h2);
        } else {
            return String.fromCharCode(65 + h2);
        }
    }

    var data = [], header = [];
    var content = Base64.decode(text);
    var multilineFields = content.split(regexMultiline).length > 1;
    var lines = multilineFields ? content.split(regexLines) : content.split("\n");
    var firstLine = hasHeaders;

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].replace("\r", "");
        if (!isComment(line)) {
            var items = line.split(regexItems);
            if (firstLine) {
                for (var j = 0; j < items.length; j++) {
                    header.push(unquote(items[j]));
                }
                firstLine = false;
            } else {
                var obj = {};
                for (var j = 0; j < items.length; j++) {
                    obj[getHeader(j)] = unquote(items[j]);
                }
                data.push(obj);
            }
        }
    }

    callback(data, options);
}

function renderFile(data, options) {
    var flex = new wijmo.grid.FlexGrid("#flex");

    flex.itemsSourceChanged.addHandler(function(s, e) {
        if (!options.capitalizeHeaders) {
            for (var i = 0; i < flex.columns.length; i++) {
                var c = flex.columns[i];
                c.header = c.name;
            }
        }
        var resize = options.resizeColumns;
        if (resize === "all") {
            flex.autoSizeColumns();
        } else if (resize === "first") {
            flex.autoSizeColumn(0);
        }
    });

    if (options.lineNumbers) {
        flex.itemFormatter = function(panel, r, c, cell) {
            if (panel.cellType == wijmo.grid.CellType.RowHeader) {
                cell.textContent = (r + 1).toString();
            }
        };
    }

    flex.isReadOnly = true;
    flex.itemsSource = data;
    flex.stickyHeaders = true;
    flex.allowDragging = wijmo.grid.AllowDragging.None;

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
            scrollPosition: flex.scrollPosition
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
