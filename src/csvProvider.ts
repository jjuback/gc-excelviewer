'use strict';
import {workspace, TextDocument, Uri, ExtensionContext} from 'vscode';
import * as base from './baseProvider';
import LocalWebService from './localWebService';
var Base64 = require('js-base64').Base64;

export class CsvDocumentContentProvider extends base.BaseDocumentContentProvider {

    private _service: LocalWebService;

    constructor(context: ExtensionContext) {
        super(context);
        // create local express server
        this._service = new LocalWebService(context);
        this._service.start();
    }

    createSnippet(uri): Thenable<string> {
        let file = uri.with({
            scheme: "file"
        });
        return workspace.openTextDocument(file).then(doc => {
            let lang = doc ? doc.languageId : null;
            if (lang !== 'csv' && lang !== 'tsv' && lang !== 'plaintext') {
                return this.errorSnippet("Active editor doesn't show a CSV or plain text document.");
            }
            let text = doc.getText();
            let base64 = Base64.encode(text);
            let options = {
                separator: (lang === 'tsv') ? "\t" : this.separator,
                quoteMark: this.quoteMark,
                hasHeaders: this.hasHeaders,
                capitalizeHeaders: this.capitalizeHeaders,
                resizeColumns: this.resizeColumns,
                uri: this.uri.toString(),
                state: this.state
            };
            this._service.init(base64, options);
            return this.snippet();
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

    get capitalizeHeaders(): boolean {
        return <boolean>workspace.getConfiguration('csv-preview').get("capitalizeHeaders");
    }

    get resizeColumns(): string {
        return <string>workspace.getConfiguration('csv-preview').get("resizeColumns");
    }

    get serviceUrl(): string {
        return this._service.serviceUrl;
    }

    snippet(): string {
        return `<!DOCTYPE html>
        <html>
        <head>
            <link href="${this.serviceUrl}/styles/wijmo.min.css" rel="stylesheet" type="text/css" />
            <link href="${this.serviceUrl}/styles/themes/wijmo.theme.${this.theme}.min.css" rel="stylesheet" type="text/css" />
        </head>
        <script src="${this.serviceUrl}/controls/wijmo.min.js" type="text/javascript"></script>
        <script src="${this.serviceUrl}/controls/wijmo.input.min.js" type="text/javascript"></script>
        <script src="${this.serviceUrl}/controls/wijmo.grid.min.js" type="text/javascript"></script>
        <script src="${this.serviceUrl}/controls/wijmo.grid.filter.min.js" type="text/javascript"></script>
        <script src="${this.serviceUrl}/js-base64.js"></script>
        <script src="${this.serviceUrl}/common.js"></script>
        <script src="${this.serviceUrl}/csv.js"></script>
        <body style="padding:0px; overflow:hidden" onload="resizeGrid()" onresize="resizeGrid()">
            <div id="flex"></div>
        </body>
        <script type="text/javascript">
            loadFile("${this.serviceUrl}", renderFile);
        </script>
        </html>`;
    }
}
