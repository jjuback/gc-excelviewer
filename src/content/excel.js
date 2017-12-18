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
    var nag = getNagLink();
    var json = options.state;
    
    function invoke() {
        var state = {
            filterDefinition: sheet._filter.filterDefinition
        };
        postState(gcLocalServer, state);
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

    sheet._filter.filterApplied.addHandler(() => {
        if (sheet.selectedSheetIndex === 0) {
            setTimeout(invoke, 500);
        }
    });

    sheet.loaded.addHandler(() => {
        sheet.isReadOnly = true;
        if (json) {
            sheet._filter.filterDefinition = json.filterDefinition;
        }
    });

    sheet.load(data);
}

function resizeSheet() {
    var div = wijmo.getElement("#sheet");
    var html = wijmo.getElement("html");
    html.style.overflow = "hidden";
    div.style.height = html.clientHeight.toString() + "px";
}
