'use strict';
import { workspace, ExtensionContext, Uri, ViewColumn } from 'vscode';
import BasePreview from './basePreview';

export default class ExcelPreview extends BasePreview {
    
    constructor(context: ExtensionContext, uri: Uri, viewColumn: ViewColumn) {
        super(context, uri, "excel-preview", viewColumn);
        this.doUpdate();
    }

    private doUpdate(): void {
        let options = this.getOptions();
        this.update(this.uri.fsPath, options);
    }
    
    refresh(): void {
    }

    get html(): string {
        return `
        <!DOCTYPE html>
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
        <body style="padding:0px; overflow:hidden" onload="resizeSheet()" onresize="resizeSheet()">
            <div id="sheet"></div>
        </body>                
        <script type="text/javascript">
            const key = "GrapeCity-Internal-Use-Only,wijmo-designer-beta.azurewebsites.net,141832842148448#B0HbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TP7JGUpp4KqBnb7gGNndFNkhjd6UmUvkjaJBnWBNXOWJ6S9UXZhFlaxJDVUF4ZpRjeiNERXFVUMNlaRFVQItiNUJzdop4dKFTdCNVMaJzd4pXNCRVY8QkQx3Sev26dwE4amNVcvIjSiVle6RDZPRFSsZTNwgFWu9GU6UUM8R5djpEWnVUeJ3yaUplTy9EUQpXcwVDbJd7bIR4N9Q7bm9mY0ZGOa36cLZVaPJFVhhDRUlEUMtkQQdFO7MWOHhHWNFERqdWOVR4KzF7aRRmcjNmWD5kN5EGT6RTbkVUbvU5L4czcE9mN8dmYsRzKRZVatlnR5o6TOVXO8ZWOklERaVDNkRVaIBDcvp4V5g6av2WMRRTMzkWRycVQwUWaWZ6c9gkN9sSauJkc4syModlY4FXOY56a9E5Tt3UML3CMFFlVhBVSsBnb4Mla4Z4ZIZ5LuZUW4E7NBJUWiojITJCLiIkQCFzNBhTMiojIIJCL8QzMzgDMxQTO0IicfJye35XX3JSSwIjUiojIDJCLi86bpNnblRHeFBCI4VWZoNFelxmRg2Wbql6ViojIOJyes4nI5kkTRJiOiMkIsIibvl6cuVGd8VEIgIXZ7VWaWRncvBXZSBybtpWaXJiOi8kI1xSfis4N8gkI0IyQiwiIu3Waz9WZ4hXRgAydvJVa4xWdNBybtpWaXJiOi8kI1xSfiQjR6QkI0IyQiwiIu3Waz9WZ4hXRgACUBx4TgAybtpWaXJiOi8kI1xSfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1xSfiUFO7EkI0IyQiwiIu3Waz9WZ4hXRgACdyFGaDxWYpNmbh9WaGBybtpWaXJiOi8kI1tlOiQmcQJCLiITN8ITNwASMwMDM8EDMyIiOiQncDJCLiQXZu9yclRXazJWZ7Vmc5pXYuEGdlJWLyVmbnl6clRWLv5mapdnI0IyctRkIsIyajFmY5pEIuh6bKJiOiEmTDJCLigDN4gDNxIDN8IzM8EDNxIiOiQWSiwSfiEjd8EDMyIiOiIXZ6JLLcN";
            wijmo.setLicenseKey(key);
            loadFile("${this.serviceUrl}", renderFile);
        </script>
        </html>`;
    }
}
