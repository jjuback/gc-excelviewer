function processFile(storage, callback) {
    var xhr = new XMLHttpRequest();    
    xhr.onload = function(e) {
        callback(xhr.response, storage.options);
    };
    xhr.open("GET", storage.content);
    xhr.responseType = "blob";
    xhr.send();
}

function renderFile(data, options) {
    var sheet = new wijmo.grid.sheet.FlexSheet("#sheet");
    wijmo.setCss(sheet.hostElement, { "font-family": "" });

    var nag = getNagLink();
    var busy = false, pending = false;
    
    function getState() {
        var state = {
            selectedSheetIndex: sheet.selectedSheetIndex,
            filterDefinition: sheet._filter.filterDefinition
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

    function applyState() {
        var json = options.state;
        if (json) {
            if (json.selectedSheetIndex || json.selectedSheetIndex == 0) {
                sheet.selectedSheetIndex = json.selectedSheetIndex;
            }
            sheet._filter.filterDefinition = json.filterDefinition;
        }
    }

    var menu = wijmo.getElement("[wj-part='context-menu']");
    menu.parentElement.removeChild(menu);

    var news = wijmo.getElement("[wj-part='new-sheet']");
    news.parentElement.removeChild(news);

    var filter = sheet._filter.apply;
    sheet._filter.apply = function () {
        filter.apply(sheet._filter);
        sheet._filter.onFilterApplied();
    };

    sheet.loaded.addHandler(() => {
        sheet.isReadOnly = true;
        applyState();

        sheet._filter.filterApplied.addHandler(() => {
            preserveState();
        });
    
        sheet.selectedSheetChanged.addHandler(() => {
            preserveState();
        });
    });

    sheet.load(data);
}

function resizeSheet() {
    var div = wijmo.getElement("#sheet");
    div.style.height = window.frameElement.offsetHeight.toString() + "px";
}
