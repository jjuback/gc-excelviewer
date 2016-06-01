'use strict';
import {workspace} from 'vscode';
import * as base from './baseProvider';

export class ExcelDocumentContentProvider extends base.BaseDocumentContentProvider {

    private _path = "dev/null";

    public setPath(path: string) {
        if (path.startsWith("\\")) {
            this._path = path.slice(1);
        } else {
            this._path = path;
        }
    }
    
    createSnippet() {
        let file = "file://" + workspace.rootPath + "/" + this._path;
        let snip = this.snippet(file, this.theme, this.version);
        return snip;
    }

    snippet(file: string, theme: string, ver: string): string {
        return `<link href="http://cdn.wijmo.com/${ver}/styles/wijmo.min.css" rel="stylesheet" type="text/css" />
                <link href="http://cdn.wijmo.com/${ver}/styles/themes/wijmo.theme.${theme}.min.css" rel="stylesheet" type="text/css" />
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.input.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.grid.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.grid.filter.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.grid.detail.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.grid.sheet.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.grid.xlsx.min.js" type="text/javascript"></script>
                <script src="http://cdn.wijmo.com/${ver}/controls/wijmo.xlsx.min.js" type="text/javascript"></script>
                <script src="http://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
                <body>
                    <div id="sheet"></div>
                </body>
                <script type="text/javascript">
                var file = '${file}';
                var sheet = new wijmo.grid.sheet.FlexSheet("#sheet");
                var nag = wijmo.getElement("a");
                wijmo.setCss(nag.parentElement, { "display": "none" });
                var menu = wijmo.getElement("[wj-part='context-menu']");
                menu.parentElement.removeChild(menu);
                var news = wijmo.getElement("[wj-part='new-sheet']");
                news.parentElement.removeChild(news);
                var xhr = new XMLHttpRequest();
                xhr.onload = function(e) {
                    sheet.load(xhr.response);
                    sheet.isReadOnly = true;
                    var q = wijmo.getElement(".wj-marquee");
                    q.style.display = "block";
                };
                xhr.open("GET", file);
                xhr.responseType = "blob";
                xhr.send();
                </script>`;
    }
}