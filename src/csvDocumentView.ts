'use strict';
import { window, workspace, WebviewPanel, ExtensionContext, ViewColumn } from 'vscode';
import { URI } from 'vscode-uri';
import BaseDocumentView from './baseDocumentView';
import { getLicenseKey } from './license';

export default class CsvDocumentView extends BaseDocumentView {

    static create(context: ExtensionContext, uri: URI, viewColumn: ViewColumn): CsvDocumentView {
        let preview = new CsvDocumentView(context, uri);
        preview.scheme = "csv-preview";
        preview.initWebviewPanel(viewColumn);
        preview.initialize();
        return preview;
    }

    static revive(context: ExtensionContext, uri: URI, webviewPanel: WebviewPanel): CsvDocumentView {
        let preview = new CsvDocumentView(context, uri);
        preview.scheme = "csv-preview";
        preview.attachWebviewPanel(webviewPanel);
        preview.initialize();
        return preview;
    }

    public languageId: string;

	public getOptions(): any {
		let config = workspace.getConfiguration('csv-preview');
        let sep = <string>config.get("separator");
        let lang = this.languageId;
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
            quoteMark: <string>config.get("quoteMark"),
            hasHeaders: <boolean>config.get("hasHeaders"),
            capitalizeHeaders: <boolean>config.get("capitalizeHeaders"),
            resizeColumns: <string>config.get("resizeColumns"),
            lineNumbers: <string>config.get("lineNumbers"),
            commentCharacter: <string>config.get("commentCharacter"),
            skipComments: <boolean>config.get("skipComments"),
            formatValues: <string>config.get("formatValues"),
            numberFormat: <string>config.get("numberFormat"),
            customEditor: this.hasCustomEditor,
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
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${this.webview.cspSource} 'unsafe-inline'; script-src ${this.webview.cspSource} 'unsafe-inline';">
            <link href="${this.scriptUri}/styles/wijmo.min.css" rel="stylesheet" type="text/css" />
            <link href="${this.scriptUri}/styles/vscode.css" rel="stylesheet" type="text/css" />
        </head>
        <script src="${this.scriptUri}/controls/wijmo.min.js" type="text/javascript"></script>
        <script src="${this.scriptUri}/controls/wijmo.input.min.js" type="text/javascript"></script>
        <script src="${this.scriptUri}/controls/wijmo.grid.min.js" type="text/javascript"></script>
        <script src="${this.scriptUri}/controls/wijmo.grid.filter.min.js" type="text/javascript"></script>
        <script src="${this.scriptUri}/csv.js"></script>
        <body style="padding:0px; overflow:hidden" onload="resizeGrid()" onresize="resizeGrid()">
            <div id="flex"></div>
        </body>
        <script type="text/javascript">
            wijmo.setLicenseKey("${getLicenseKey()}");
            function ignoreState() {
                return ${ignoreState};
            }
            function getOptions() {
                return ${JSON.stringify(this.getOptions())};
            }
            handleEvents();
            initPage();
        </script>
        </html>`;
	}

    get viewType(): string {
        return "gc-excelviewer-csv-preview";
    }

    get configurable(): boolean {
        return true;
    }
}
