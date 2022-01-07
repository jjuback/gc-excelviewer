'use strict';
import { window, workspace, WebviewPanel, ExtensionContext, ViewColumn, WorkspaceEdit, Range, TextDocument, Position } from 'vscode';
import { URI } from 'vscode-uri';
import BaseDocumentView from './baseDocumentView';
import { documentViewManager } from './documentViewManager';
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
    private separator: string;

	public getOptions(): any {
        let self = this;
		let config = workspace.getConfiguration('csv-preview');
        let sep = <string>config.get("separator");
        let lang = this.languageId;
        if (!lang) {
            let editor = window.activeTextEditor;
            if (editor && editor.document) {
                lang = editor.document.languageId;
                this.languageId = lang;
            }
        }
        if (!lang) {
            let document = workspace.textDocuments.find(document => {
                return document.uri.toString() === self.uri.toString();
            });
            if (document) {
                lang = document.languageId;
                this.languageId = lang;
            }
        }
        if (lang === 'tsv') {
            sep = "\t";
        } else if (lang === 'csv (semicolon)') {
            sep = ";";
        } else if (lang === 'csv (pipe)') {
            sep = "\\|";
        }
        if (this.separator) {
            sep = this.separator;
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

    private _wsEdit: WorkspaceEdit;
    private _document: TextDocument;
    private _currentRange: Range;
    private _currentRow: string[];

    private editRow(row: number) {
        let options = this.getOptions();
        let sep = options.separator;
        let quote = options.quoteMark;
        let offset = options.hasHeaders ? 1 : 0;
        if (this.separator) offset++;

        this._currentRange = new Range(row + offset, 0, row + offset + 1, 0);
        let line = this._document.getText(this._currentRange);

        // http://markmintoff.com/2013/03/regex-split-by-comma-not-surrounded-by-quotes/
        let regexItems = new RegExp(`${sep}(?=(?:[^${quote}]*${quote}[^${quote}]*${quote})*[^${quote}]*$)`);
        this._currentRow = line.split(new RegExp(regexItems));
    }

    private setCellValue(row: number, col: number, value: string) {
        let options = this.getOptions();
        let sep = options.separator;
        let quote = options.quoteMark;

        if (!this._currentRow) {
            this.editRow(row);
        }

        let regexSeparator = new RegExp(sep);
        this._currentRow[col] = regexSeparator.exec(value) ? `${quote}${value}${quote}` : value;
    }

    private deleteRows(rows: number[]) {
        let options = this.getOptions();
        let offset = options.hasHeaders ? 1 : 0;
        if (this.separator) offset++;
        
        rows.forEach((row: number) => {
            let lineRange = new Range(row + offset, 0, row + offset + 1, 0);
            this._wsEdit.delete(this.uri, lineRange);
        }, this);
    }

    private appendRow(columns: number) {
        let options = this.getOptions();
        let sep = options.separator;
        let empty = sep.repeat(columns - 1);
        let row = this._document.lineCount - 1;

        this._currentRange = new Range(row, 0, row, 0);
        this._currentRow = empty.split(new RegExp(options.separator));
    }

    private beginEdit() {
        if (!this._wsEdit) {
            this._wsEdit = new WorkspaceEdit();
        }
    }

    private async endEdit(refresh?: boolean) {
        if (this._wsEdit) {
            if (this._currentRow) {
                let sep = this.getOptions().separator;
                this._wsEdit.replace(this.uri, this._currentRange, this._currentRow.join(sep));
            }
            await workspace.applyEdit(this._wsEdit);
            this._wsEdit = undefined;
            this._currentRange = undefined;
            this._currentRow = undefined;
            if (refresh) {
                this.refresh();
            }
        }
    }

    public enableEditing(document: TextDocument) {
        this._document = document;
        this.webview.onDidReceiveMessage((e) => {
            if (e.cellEditEnded) {
                this.beginEdit();
                this.setCellValue(e.row, e.col, e.value);
            }
            else if (e.rowEditEnded) {
                this.endEdit();
            }
            else if (e.deleteRows) {
                this.beginEdit();
                this.deleteRows(e.rows);
                this.endEdit();
            }
            else if (e.separator) {
                this.separator = e.separator;
            }
            else if (e.rowAdded) {
                this.appendRow(e.count);
            }
        }, this, this._disposables);
    }

    refresh(): void {
        if (this._wsEdit)
            return;
        let self = this;
        workspace.openTextDocument(this.uri).then(document => {
            if (!self._disposed) {
                self.webview.postMessage({
                    refresh: true,
                    content: document.getText()
                });
            }
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
