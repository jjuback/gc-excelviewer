function processFile(storage, callback) {
    var text = storage.content;
    var options = storage.options;
    var sep = options.separator;
    var quote = options.quoteMark;
    var hasHeaders = options.hasHeaders;

    function unquote(text) {
        if (text.length > 0) {
            var regex = new RegExp(`${quote}([^${quote}]*)${quote}`);
            var match = regex.exec(text);
            return match ? match[1] : text;
        }
        return text;
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
    var regexQuote = new RegExp(`^\s*${quote}`);
    var quoted = regexQuote.exec(content);
    var regexLines = new RegExp(`\n(?=[${quote}]+[\r]*)`);
    var lines = quoted ? content.split(regexLines) : content.split("\n");

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].replace("\r", "");
        if (line.length > 0) {
            // http://markmintoff.com/2013/03/regex-split-by-comma-not-surrounded-by-quotes/
            var regexItems = new RegExp(`${sep}(?=(?:[^${quote}]*${quote}[^${quote}]*${quote})*[^${quote}]*$)`);
            var items = line.split(regexItems);
            if (i === 0 && hasHeaders) {
                for (var j = 0; j < items.length; j++) {
                    header.push(unquote(items[j]));
                }
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

    flex.isReadOnly = true;
    flex.itemsSource = data;
    flex.stickyHeaders = true;
    flex.allowDragging = wijmo.grid.AllowDragging.None;

    var filter = new wijmo.grid.filter.FlexGridFilter(flex);
    var nag = getNagLink();

    function invoke() {
        var state = {
            columnLayout: flex.columnLayout,
            filterDefinition: filter.filterDefinition,
            sortDescriptions: flex.collectionView.sortDescriptions.map(function (sd) {
                return {
                    property: sd.property,
                    ascending: sd.ascending
                }
            })
        };
        postState(gcLocalServer, state);
    }

    flex.collectionView.collectionChanged.addHandler(() => {
        setTimeout(invoke, 500);
    });

    flex.resizedColumn.addHandler(() => {
        setTimeout(invoke, 500);
    });

    var json = options.state;
    if (json && !layoutChanged(json, flex)) {
        flex.columnLayout = json.columnLayout;
        filter.filterDefinition = json.filterDefinition;
        json.sortDescriptions.forEach(function (item) {
            var sd = new wijmo.collections.SortDescription(item.property, item.ascending);
            flex.collectionView.sortDescriptions.push(sd);
        });       
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

function resizeGrid() {
    var div = wijmo.getElement("#flex");
    var html = wijmo.getElement("html");
    div.style.width = html.clientWidth.toString() + "px";
    div.style.height = html.clientHeight.toString() + "px";
}
