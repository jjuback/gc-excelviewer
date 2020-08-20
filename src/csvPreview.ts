'use strict';
import { window, workspace, WebviewPanel, ExtensionContext, Uri, ViewColumn } from 'vscode';
import BasePreview from './basePreview';

export default class CsvPreview extends BasePreview {

    static create(context: ExtensionContext, uri: Uri, viewColumn: ViewColumn): CsvPreview {
        let preview = new CsvPreview(context, uri, "csv-preview");
        preview.initWebviewPanel(viewColumn);
        preview.handleEvents();
        return preview;
    }

    static revive(context: ExtensionContext, uri: Uri, webviewPanel: WebviewPanel): CsvPreview {
        let preview = new CsvPreview(context, uri, "csv-preview");
        preview.attachWebviewPanel(webviewPanel);
        preview.handleEvents();
        return preview;
    }

    public getOptions(): any {
        let sep = this.separator;
        let document = workspace.textDocuments.find(document => {
            return document.uri.toString() === this.uri.toString();
        });
        let lang = document ? document.languageId : this.state.languageId;
        if (lang === 'tsv') {
            sep = "\t";
        } else if (lang === 'csv (semicolon)') {
            sep = ";";
        } else if (lang === 'csv (pipe)') {
            sep = "\\|";
        }
        return {
            separator: sep,
            languageId: lang,
            quoteMark: this.quoteMark,
            hasHeaders: this.hasHeaders,
            capitalizeHeaders: this.capitalizeHeaders,
            resizeColumns: this.resizeColumns,
            lineNumbers: this.lineNumbers,
            commentCharacter: this.commentCharacter,
            skipComments: this.skipComments,
            formatValues: this.formatValues,
            numberFormat: this.numberFormat,
            uri: this.uri.toString(),
            previewUri: this.previewUri.toString(),
            state: this.state
        };
    }

    refresh(): void {
        let self = this;
        workspace.openTextDocument(this.uri).then(document => {
            self.webview.postMessage({
                refresh: true,
                content: document.getText()
            })
        }, reason => {
            window.showInformationMessage(reason);
        });
    }

    getHtml(ignoreState: boolean = false): string {
        return `
        <!DOCTYPE html>
        <html>
        <head>
            <link href="${this.extensionUrl}/styles/wijmo.min.css" rel="stylesheet" type="text/css" />
            <link href="${this.extensionUrl}/styles/vscode.css" rel="stylesheet" type="text/css" />
        </head>
        <script src="${this.extensionUrl}/controls/wijmo.min.js" type="text/javascript"></script>
        <script src="${this.extensionUrl}/controls/wijmo.input.min.js" type="text/javascript"></script>
        <script src="${this.extensionUrl}/controls/wijmo.grid.min.js" type="text/javascript"></script>
        <script src="${this.extensionUrl}/controls/wijmo.grid.filter.min.js" type="text/javascript"></script>
        <script src="${this.extensionUrl}/csv.js"></script>
        <body style="padding:0px; overflow:hidden" onload="resizeGrid()" onresize="resizeGrid()">
            <div id="flex"></div>
        </body>
        <script type="text/javascript">
            const key = "GrapeCity, inc. (US),gc-excelviewer,152329924298793#B0IZhsnOiwmbBJye0ICRiwiI34TQZlmailEO79mWLhmYPtWQ9g7YpF4VxA7UWFzLTZzTVpkU0Vnb5UnY9kVYat6YudHNsFDblpXS8YUU7hGZGV7N8RnW7dEWSVndjRjekBVYOVWRv2CWqtSNoRlVFFDMzc4KwZnTMJDWQV4TRxmW6tGZ8QndjJlMUV7LOx6UJlzcsNkbv5GWihFO6p6ZGRndHRnWSl7ShtiUPt6b8tUaTVFb5dWUrl5R6g4Q8pGc03SNZdUQmNUM6NHT6d4Mq9kV8BXWrEXYr5EaaJFaHRUbGRUT0tmc8YjN4ZWdYpmTOZUZ7dXY0hVRMplbhNXOtpnRzcjN8R6NHx6TzF4TChEVnFXVaBHShp4YV5GcvtSUWFnbzplQDRnWwo5ZyhzQrIjZlVWZwB7SNF6VYxGcwIzRFxkZ4wkW8hWYaFXM0F7atRXTxR6QnF5KqJDStN5VkdVewcHaa36TmdmI0IyUiwiICFTODNURDRjI0ICSiwiM8ETOwMDN5UTM0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIiMxczM5ADI7ITNwAjMwIjI0ICdyNkIsIicldXZpZHblNGel5yYnJiOiMXbEJCLikyUVhCIuMmbpBCL9RXaDVGchJ7RiojIh94QiwiIzkzN8kjM4ITO9IzMyUTMiojIklkIs4nIzYnMyAjMiojIyVmdiwSZzxWYmpYIJN";
            wijmo.setLicenseKey(key);
            function ignoreState() {
                return ${ignoreState};
            }
            function getOptions() {
                return ${JSON.stringify(this.getOptions())};
            }
            initPage();
        </script>
        </html>`;
    }

    get viewType(): string {
        return "gc-excelviewer-csv";
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
