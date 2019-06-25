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
            <style>
                .wj-content {
                    background-color: var(--vscode-editor-background);
                    color: var(--vscode-editor-foreground);
                    border-radius: 0px;
                }
                .wj-header {
                    background-color: var(--vscode-titleBar-activeBackground);
                    color: var(--vscode-titleBar-activeForeground);
                }
                .wj-state-selected {
                    background-color: var(--vscode-editor-selectionBackground);
                    color: var(--vscode-editor-selectionForeground);
                }
                .wj-state-multi-selected {
                    background-color: var(--vscode-editor-inactiveSelectionBackground);
                    color: var(--vscode-inactiveSelectionForeground);
                }
                .wj-cell:not(.wj-header):not(.wj-group):not(.wj-alt):not(.wj-state-selected):not(.wj-state-multi-selected) {
                    background-color: var(--vscode-editor-background);
                    color: var(--vscode-editor-foreground);
                }
                .wj-alt:not(.wj-header):not(.wj-group):not(.wj-state-selected):not(.wj-state-multi-selected) {
                    background-color: var(--vscode-editor-background);
                    color: var(--vscode-editor-foreground);
                }
                .wj-columnfiltereditor .wj-control {
                    background-color: var(--vscode-input-background);
                    color: var(--vscode-input-foreground);
                }
            </style>
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
            const key = "GrapeCity-Internal-Use-Only,wijmo-designer-beta.azurewebsites.net,141832842148448#B0HbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TP7JGUpp4KqBnb7gGNndFNkhjd6UmUvkjaJBnWBNXOWJ6S9UXZhFlaxJDVUF4ZpRjeiNERXFVUMNlaRFVQItiNUJzdop4dKFTdCNVMaJzd4pXNCRVY8QkQx3Sev26dwE4amNVcvIjSiVle6RDZPRFSsZTNwgFWu9GU6UUM8R5djpEWnVUeJ3yaUplTy9EUQpXcwVDbJd7bIR4N9Q7bm9mY0ZGOa36cLZVaPJFVhhDRUlEUMtkQQdFO7MWOHhHWNFERqdWOVR4KzF7aRRmcjNmWD5kN5EGT6RTbkVUbvU5L4czcE9mN8dmYsRzKRZVatlnR5o6TOVXO8ZWOklERaVDNkRVaIBDcvp4V5g6av2WMRRTMzkWRycVQwUWaWZ6c9gkN9sSauJkc4syModlY4FXOY56a9E5Tt3UML3CMFFlVhBVSsBnb4Mla4Z4ZIZ5LuZUW4E7NBJUWiojITJCLiIkQCFzNBhTMiojIIJCL8QzMzgDMxQTO0IicfJye35XX3JSSwIjUiojIDJCLi86bpNnblRHeFBCI4VWZoNFelxmRg2Wbql6ViojIOJyes4nI5kkTRJiOiMkIsIibvl6cuVGd8VEIgIXZ7VWaWRncvBXZSBybtpWaXJiOi8kI1xSfis4N8gkI0IyQiwiIu3Waz9WZ4hXRgAydvJVa4xWdNBybtpWaXJiOi8kI1xSfiQjR6QkI0IyQiwiIu3Waz9WZ4hXRgACUBx4TgAybtpWaXJiOi8kI1xSfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1xSfiUFO7EkI0IyQiwiIu3Waz9WZ4hXRgACdyFGaDxWYpNmbh9WaGBybtpWaXJiOi8kI1tlOiQmcQJCLiITN8ITNwASMwMDM8EDMyIiOiQncDJCLiQXZu9yclRXazJWZ7Vmc5pXYuEGdlJWLyVmbnl6clRWLv5mapdnI0IyctRkIsIyajFmY5pEIuh6bKJiOiEmTDJCLigDN4gDNxIDN8IzM8EDNxIiOiQWSiwSfiEjd8EDMyIiOiIXZ6JLLcN";
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
