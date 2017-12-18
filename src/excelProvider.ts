'use strict';
import {workspace, Uri, ExtensionContext} from 'vscode';
import * as base from './baseProvider';
import LocalWebService from './localWebService';

export class ExcelDocumentContentProvider extends base.BaseDocumentContentProvider {

    private _service: LocalWebService;
    
    constructor(context: ExtensionContext) {
        super(context);
        // create local express server
        this._service = new LocalWebService(context);
        this._service.start();
    }
    
    createSnippet(uri) {
        let file = uri.with({
            scheme: "file"
        });
        let options = {
            uri: this.uri.toString(),
            state: this.state
        };
        this._service.init(file.toString(), options);
        return this.snippet();
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
                <script src="${this.serviceUrl}/controls/wijmo.grid.sheet.min.js" type="text/javascript"></script>
                <script src="${this.serviceUrl}/controls/wijmo.grid.xlsx.min.js" type="text/javascript"></script>
                <script src="${this.serviceUrl}/controls/wijmo.xlsx.min.js" type="text/javascript"></script>
                <script src="${this.serviceUrl}/jszip.min.js"></script>
                <script src="${this.serviceUrl}/common.js"></script>
                <script src="${this.serviceUrl}/excel.js"></script>
                <body onload="resizeSheet()" onresize="resizeSheet()">
                    <div id="sheet"></div>
                </body>                
                <script type="text/javascript">
                    loadFile("${this.serviceUrl}", renderFile);
                </script>
                </html>`;
    }
}