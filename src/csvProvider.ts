'use strict';
import {workspace, window, commands, TextDocument, Uri} from 'vscode';
import * as base from './baseProvider';
var Base64 = require('js-base64').Base64;
var escapeStringRegexp = require('escape-string-regexp');

export class CsvDocumentContentProvider extends base.BaseDocumentContentProvider {

    createSnippet(uri): Thenable<string> {
        let file = uri.with({
            scheme: "file"
        });
        return workspace.openTextDocument(file).then(doc => {
            let lang = doc.languageId;
            if (lang !== 'csv' && lang !== 'plaintext') {
                return this.errorSnippet("Active editor doesn't show a CSV or plain text document.");
            }
            let t = doc.getText();
            let b = Base64.encode(t);
            let snip = this.snippet(b, this.theme, this.version);
            return snip;
        });
    }

    get separator(): string {
        return <string>workspace.getConfiguration('csv-preview').get("separator");
    }

    get quoteMark(): string {
        return <string>workspace.getConfiguration('csv-preview').get("quoteMark");
    }

    get hasHeaders(): boolean {
        return <boolean>workspace.getConfiguration('csv-preview').get("hasHeaders");
    }

    snippet(text: string, theme: string, ver: string): string {
        let sep = escapeStringRegexp(this.separator);
        let quote = escapeStringRegexp(this.quoteMark);
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
                <script src="http://cdn.wijmo.com/external/js-base64.js" type="text/javascript"></script>

                <body onload="resizeGrid()" onresize="resizeGrid()">
                    <div id="flex"></div>
                </body>

                <script type="text/javascript">

                function resizeGrid() {
                    var div = wijmo.getElement("#flex");
                    div.style.height = html.clientHeight.toString() + "px";
                }

                function unquote(text) {
                    if (text.length > 0) {
                        var regex = new RegExp(/${quote}([^${quote}]*)${quote}/);
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
                    var query = ['${this.uri}', state];
                    nag.href = encodeURI("command:_grapecity.storage?" + JSON.stringify(query));
                    nag.click();                    
                }

                var data = [], header = [];
                var content = Base64.decode('${text}');
                var regex = new RegExp(/^\s*${quote}/);
                var quoted = regex.exec(content);
                var lines = quoted ? content.split(/\\n(?=[${quote}]+[\\r]*)/) : content.split(/\\n/);

                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i].replace("\\r", "");
                    if (line.length > 0) {
                        // http://markmintoff.com/2013/03/regex-split-by-comma-not-surrounded-by-quotes/
                        var items = line.split(/${sep}(?=(?:[^${quote}]*${quote}[^${quote}]*${quote})*[^${quote}]*$)/);
                        if (i === 0 && ${this.hasHeaders}) {
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

                var html = wijmo.getElement("html");
                html.style.overflow = "hidden";
                
                var flex = new wijmo.grid.FlexGrid("#flex");
                flex.isReadOnly = true;
                flex.itemsSource = data;
                flex.stickyHeaders = true;
                flex.allowDragging = wijmo.grid.AllowDragging.None;
                
                var filter = new wijmo.grid.filter.FlexGridFilter(flex);
                
                var nag = wijmo.getElement("a");
                wijmo.setCss(nag.parentElement, { "display": "none" });
                
                flex.collectionView.collectionChanged.addHandler(() => {
                    setTimeout(invoke, 500);
                });

                flex.resizedColumn.addHandler(() => {
                    setTimeout(invoke, 500);
                });

                var json = ${this.state};
                
                if (json) {
                    flex.columnLayout = json.columnLayout;
                    filter.filterDefinition = json.filterDefinition;
                    json.sortDescriptions.forEach(function (item) {
                        var sd = new wijmo.collections.SortDescription(item.property, item.ascending);
                        flex.collectionView.sortDescriptions.push(sd);
                    });
                }
                </script>
                </html>`;
    }
}
