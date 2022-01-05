var sendMessage;

function initPage() {
    const vscode = acquireVsCodeApi();
    const options = getOptions();
    sendMessage = vscode.postMessage;

    var sheet = new wijmo.grid.sheet.FlexSheet("#sheet");
    wijmo.setCss(sheet.hostElement, { "font-family": "" });

    function getState() {
        var sorts = [];
        var items = sheet.sortManager.sortDescriptions.items;
        for (var i = 0; i < items.length; i++) {
            var desc = items[i];
            sorts.push({
                columnIndexvar: desc.columnIndex,
                ascending: desc.ascending
            });
        }
        var state = {
            uri: options.uri,
            previewUri: options.previewUri,
            selectedSheetIndex: sheet.selectedSheetIndex,
            filterDefinition: sheet.filter.filterDefinition,
            sortDescriptions: JSON.stringify(sorts),
            scrollPosition: sheet.scrollPosition,
            version: "4.0.45"
        };
        return state;
    }

    function preserveState() {
        var state = getState();
        vscode.setState(state);
        vscode.postMessage({ save: true, state: state });
    }

    function applyState() {
        if (ignoreState()) return;
        var json = vscode.getState() || options.state;
        if (json && json.version && json.version >= "4.0.45") {
            if (json.selectedSheetIndex >= 0) {
                sheet.selectedSheetIndex = json.selectedSheetIndex;
            }
            sheet.filter.filterDefinition = json.filterDefinition;
            if (json.sortDescriptions) {
                var sorts = JSON.parse(json.sortDescriptions);
                sorts = sorts.map((s) => {
                    return new wijmo.grid.sheet.ColumnSortDescription(s.columnIndex, s.ascending);
                });
                sheet.sortManager.sortDescriptions = new wijmo.collections.CollectionView(sorts);
            }
            if (json.scrollPosition) {
                sheet.scrollPosition = json.scrollPosition;
            }
        }
    }

    // http://jsfiddle.net/Wijmo5/2a20kqvr/
    function autoSizeVisibleRows(flex, force) {
        var rng = flex.viewRange;
        for (var r = rng.row; r <= rng.row2; r++) {
            if (force || flex.rows[r].height == null) {
                flex.autoSizeRow(r, false);
            }
        }
    }

    var news = wijmo.getElement("[wj-part='new-sheet']");
    news.parentElement.removeChild(news);

    sheet.hostElement.addEventListener("contextmenu", e => {
        if (!options.customEditor || e.target.tagName.toLowerCase() === "li") {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    sheet.loaded.addHandler(() => {
        sheet.columns.forEach(c => c.isContentHtml = c.multiLine = true);
        var style = getSheetStyle(sheet);
        sheet.sheets.forEach(s => {
            s.tables.forEach(t => {
                t.style = style;
            });
        });
        sheet.isReadOnly = !options.customEditor;
        sheet.showMarquee = false;
        applyState();
        preserveState();

        setTimeout(() => {
            sheet.autoSizeColumn(0, true);
            autoSizeVisibleRows(sheet, true);
        }, 0);

        sheet.filter.filterApplied.addHandler(() => {
            preserveState();
        });
    
        sheet.selectedSheetChanged.addHandler(() => {
            preserveState();
            sheet.autoSizeColumn(0, true);
        });

        sheet.sortManager.sortDescriptions.collectionChanged.addHandler(() => {
            preserveState();
        });

        sheet.scrollPositionChanged.addHandler(() => {
            preserveState();
        });
        
        sheet.sheets.collectionChanged.addHandler((s, e) => {
            vscode.postMessage({
                changed: true,
                reason: "Collection Changed"
            });
        });

        sheet.rowChanged.addHandler((s, e) => {
            vscode.postMessage({
                changed: true,
                reason: "Row Changed"
            });
        });

        sheet.columnChanged.addHandler((s, e) => {
            vscode.postMessage({
                changed: true,
                reason: "Column Changed"
            });
        });

        sheet.cellEditEnded.addHandler(function(s, e) {
            vscode.postMessage({
                changed: true,
                reason: "Cell Edited"
            });
        });
    });
    
    vscode.postMessage({ refresh: true });
}

function resizeSheet() {
    var div = wijmo.getElement("#sheet");
    div.style.height = window.innerHeight.toString() + "px";
}

function cssVar(name, value) {
    if (name.substr(0, 2) !== "--") {
        name = "--" + name;
    }
    if (value) {
        document.documentElement.style.setProperty(name, value)
    }
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}

function getSheetStyle(sheet) {
    var style = sheet.getBuiltInTableStyle("TableStyleLight1");
    style.wholeTableStyle.borderTopColor = cssVar("vscode-editor-foreground");
    style.wholeTableStyle.borderBottomColor = cssVar("vscode-editor-foreground");
    style.wholeTableStyle.color = cssVar("vscode-editor-foreground");
    style.wholeTableStyle.backgroundColor = cssVar("vscode-editor-background");
    style.firstBandedRowStyle.color = cssVar("vscode-sideBar-foreground");
    style.firstBandedRowStyle.backgroundColor = cssVar("vscode-sideBar-background");
    style.firstBandedColumnStyle.color = cssVar("vscode-sideBar-foreground");
    style.firstBandedColumnStyle.backgroundColor = cssVar("vscode-sideBar-background");
    style.headerRowStyle.color = cssVar("vscode-titleBar-activeForeground");
    style.headerRowStyle.backgroundColor = cssVar("vscode-titleBar-activeBackground");
    style.headerRowStyle.borderBottomColor = cssVar("vscode-tree-indentGuidesStroke");
    return style;
}

function handleEvents() {
    window.addEventListener("message", event => {
        var sheet = wijmo.Control.getControl("#sheet");
        if (event.data.refresh) {
            var data = event.data.content.data ?? event.data.content;
            var blob = new Blob([new Uint8Array(data)]);
            sheet.load(blob);
        }
        else if (event.data.type == "getData") {
            var workbook = sheet.save();
            var base64 = workbook.save();
            var binary = window.atob(base64);
            var len = binary.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary.charCodeAt(i);
            }
            sendMessage({
                response: true,
                requestId: event.data.requestId,
                body: bytes
            })
        }
        else if (event.data.undo) {
            sheet.undo();
        }
        else if (event.data.redo) {
            sheet.redo();
        }
    });
}
