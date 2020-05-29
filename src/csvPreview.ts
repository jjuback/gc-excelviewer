'use strict';
import { workspace, window, ExtensionContext, Uri, ViewColumn, Disposable, TextDocument, TextLine, TextEdit, WorkspaceEdit } from 'vscode';
import BasePreview from './basePreview';
var Base64 = require('js-base64').Base64;

export default class CsvPreview extends BasePreview {

    private _pendingEdits = 0;
    private _langId = null;

    constructor(context: ExtensionContext, uri: Uri, viewColumn: ViewColumn) {
        super(context, uri, "csv-preview", viewColumn);
        this.handleEvents();
        this.doUpdate();
    }

    private handleEvents() {
        let self = this;
        this.webview.onDidReceiveMessage((e) => {
            if (e.event === "rowEditEnded") {
                let document = workspace.textDocuments.find(document => {
                    return document.uri.toString() === self.uri.toString();
                });
                if (document) {
                    let line = document.lineAt(e.row + 1);
                    let values = Object.keys(e.data).map(k => {
                        return '"' + e.data[k] + '"';
                    });
                    let edit = new WorkspaceEdit();
                    let edits = [
                        TextEdit.replace(line.range, values.join(","))
                    ];
                    edit.set(document.uri, edits);
                    self._pendingEdits++;
                    workspace.applyEdit(edit).then(value => {
                        self._pendingEdits--;
                    });
                }
            }
        }, null, this._disposables);
    }

    public getOptions(): any {
        let sep = this.separator;
        if (this._langId === 'tsv') {
            sep = "\t";
        } else if (this._langId === 'csv (semicolon)') {
            sep = ";";
        } else if (this._langId === 'csv (pipe)') {
            sep = "\\|";
        }
        return {
            separator: sep,
            quoteMark: this.quoteMark,
            hasHeaders: this.hasHeaders,
            capitalizeHeaders: this.capitalizeHeaders,
            resizeColumns: this.resizeColumns,
            lineNumbers: this.lineNumbers,
            commentCharacter: this.commentCharacter,
            skipComments: this.skipComments,
            formatValues: this.formatValues,
            numberFormat: this.numberFormat,
            uri: this.previewUri.toString(),
            state: this.state
        };
    }

    private async doUpdate(): Promise<void> {
        try {
            const document = await workspace.openTextDocument(this.uri);
            this._langId = document ? document.languageId.toLowerCase() : null;
            let text = document.getText();
            let base64 = Base64.encode(text);
            let options = this.getOptions();
            this.update(base64, options);
        } catch (error) {
            window.showInformationMessage(error.message);
        }
    }

    refresh(): void {
        if (this._pendingEdits > 0) return;
        let self = this;
        workspace.openTextDocument(this.uri).then(document => {
            let text = document.getText();
            let base64 = Base64.encode(text);
            let options = this.getOptions();
            this.update(base64, options);
            self.webview.postMessage({
                refresh: true
            });
        });
    }

    get html(): string {
        return `
        <!DOCTYPE html>
        <html>
        <head>
            <link href="${this.serviceUrl}/styles/wijmo.min.css" rel="stylesheet" type="text/css" />
            <link href="${this.serviceUrl}/styles/vscode.css" rel="stylesheet" type="text/css" />
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
            const key = "GrapeCity, inc. (US),gc-excelviewer,152329924298793#B0IZhsnOiwmbBJye0ICRiwiI34TQZlmailEO79mWLhmYPtWQ9g7YpF4VxA7UWFzLTZzTVpkU0Vnb5UnY9kVYat6YudHNsFDblpXS8YUU7hGZGV7N8RnW7dEWSVndjRjekBVYOVWRv2CWqtSNoRlVFFDMzc4KwZnTMJDWQV4TRxmW6tGZ8QndjJlMUV7LOx6UJlzcsNkbv5GWihFO6p6ZGRndHRnWSl7ShtiUPt6b8tUaTVFb5dWUrl5R6g4Q8pGc03SNZdUQmNUM6NHT6d4Mq9kV8BXWrEXYr5EaaJFaHRUbGRUT0tmc8YjN4ZWdYpmTOZUZ7dXY0hVRMplbhNXOtpnRzcjN8R6NHx6TzF4TChEVnFXVaBHShp4YV5GcvtSUWFnbzplQDRnWwo5ZyhzQrIjZlVWZwB7SNF6VYxGcwIzRFxkZ4wkW8hWYaFXM0F7atRXTxR6QnF5KqJDStN5VkdVewcHaa36TmdmI0IyUiwiICFTODNURDRjI0ICSiwiM8ETOwMDN5UTM0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIiMxczM5ADI7ITNwAjMwIjI0ICdyNkIsIicldXZpZHblNGel5yYnJiOiMXbEJCLikyUVhCIuMmbpBCL9RXaDVGchJ7RiojIh94QiwiIzkzN8kjM4ITO9IzMyUTMiojIklkIs4nIzYnMyAjMiojIyVmdiwSZzxWYmpYIJN";
            wijmo.setLicenseKey(key);
            loadFile("${this.serviceUrl}", renderFile);
        </script>
        </html>`;
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

    get lineNumbers(): string {
        return <string>workspace.getConfiguration('csv-preview').get("lineNumbers");
    }

    get commentCharacter(): string {
        return <string>workspace.getConfiguration('csv-preview').get("commentCharacter");
    }

    get skipComments(): boolean {
        return <boolean>workspace.getConfiguration('csv-preview').get("skipComments");
    }

    get formatValues(): string {
        return <string>workspace.getConfiguration('csv-preview').get("formatValues");
    }

    get numberFormat(): string {
        return <string>workspace.getConfiguration('csv-preview').get("numberFormat");
    }
}
