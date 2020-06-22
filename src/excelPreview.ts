'use strict';
import { window, workspace, WebviewPanel, ExtensionContext, Uri, ViewColumn } from 'vscode';
import BasePreview from './basePreview';

export default class ExcelPreview extends BasePreview {

    static create(context: ExtensionContext, uri: Uri, viewColumn: ViewColumn): ExcelPreview {
        let preview = new ExcelPreview(context, uri, "excel-preview");
        preview.initWebviewPanel(viewColumn);
        preview.handleEvents();
        return preview;
    }

    static revive(context: ExtensionContext, uri: Uri, webviewPanel: WebviewPanel): ExcelPreview {
        let preview = new ExcelPreview(context, uri, "excel-preview");
        preview.attachWebviewPanel(webviewPanel);
        preview.handleEvents();
        return preview;
    }

    public getOptions(): any {
        return {
            uri: this.uri.toString(),
            previewUri: this.previewUri.toString(),
            state: this.state
        };
    }

    refresh(): void {
        let self = this;
        workspace.fs.readFile(this.uri).then(buffer => {
            self.webview.postMessage({
                refresh: true,
                content: buffer
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
        <script src="${this.extensionUrl}/controls/wijmo.grid.sheet.min.js" type="text/javascript"></script>
        <script src="${this.extensionUrl}/controls/wijmo.grid.xlsx.min.js" type="text/javascript"></script>
        <script src="${this.extensionUrl}/controls/wijmo.xlsx.min.js" type="text/javascript"></script>
        <script src="${this.extensionUrl}/jszip.min.js"></script>
        <script src="${this.extensionUrl}/excel.js"></script>
        <body style="padding:0px; overflow:hidden" onload="resizeSheet()" onresize="resizeSheet()">
            <div id="sheet"></div>
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
        return "gc-excelviewer-excel";
    }
}
