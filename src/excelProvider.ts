'use strict';
import {workspace, commands, Uri} from 'vscode';
import * as base from './baseProvider';

export class ExcelDocumentContentProvider extends base.BaseDocumentContentProvider {

    createSnippet(uri) {
        let file = uri.with({
            scheme: "file"
        });
        let snip = this.snippet(file.toString(), this.theme, this.version);
        return snip;
    }

    snippet(file: string, theme: string, ver: string): string {
        return `<!DOCTYPE html>
                <html>
                <head>
                <link href="http://cdn.wijmo.com/${ver}/styles/wijmo.min.css" rel="stylesheet" type="text/css" />
                <link href="http://cdn.wijmo.com/${ver}/styles/themes/wijmo.theme.${theme}.min.css" rel="stylesheet" type="text/css" />
                </head>

                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.input.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.grid.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.grid.filter.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.grid.sheet.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.grid.xlsx.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.xlsx.min.js" type="text/javascript"></script>
                <script src="http://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
                
                <body onload="resizeSheet()" onresize="resizeSheet()">
                    <div id="sheet"></div>
                </body>
                
                <script type="text/javascript">
                
                function resizeSheet() {
                    var div = wijmo.getElement("#sheet");
                    div.style.height = html.clientHeight.toString() + "px";
                }
                
                function invoke() {
                    var state = {
                        filterDefinition: sheet._filter.filterDefinition
                    };
                    var query = ['${this.uri}', state];
                    nag.href = encodeURI("command:_grapecity.storage?" + JSON.stringify(query));
                    nag.click();                    
                }

                var file = '${file}';
                var sheet = new wijmo.grid.sheet.FlexSheet("#sheet");

                var html = wijmo.getElement("html");
                html.style.overflow = "hidden";

                var nag = wijmo.getElement("a");
                wijmo.setCss(nag.parentElement, { "display": "none" });

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
                    var q = wijmo.getElement(".wj-marquee");
                    q.style.display = "block";

                    if (json) {
                        sheet._filter.filterDefinition = json.filterDefinition;
                    }
                });

                var json = ${this.state};
                var xhr = new XMLHttpRequest();

                xhr.onload = function(e) {
                    sheet.load(xhr.response);
                };

                xhr.open("GET", file);
                xhr.responseType = "blob";
                xhr.send();
                </script>
                </html>`;
    }
}