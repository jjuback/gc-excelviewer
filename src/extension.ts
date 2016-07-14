'use strict';
import {window, workspace, commands, ExtensionContext, Uri, ViewColumn} from 'vscode';
import * as csv from './csvProvider';
import * as excel from './excelProvider';
import * as path from 'path';

export function activate(context: ExtensionContext) {
    
    let version = "5.20162.188";
    let previewUri: Uri;
    let csvProvider = new csv.CsvDocumentContentProvider(version);
    let csvSubscription = workspace.registerTextDocumentContentProvider('csv-preview', csvProvider);
    let excelProvider = new excel.ExcelDocumentContentProvider(version);
    let excelSubscription = workspace.registerTextDocumentContentProvider('excel-preview', excelProvider);
    
    let csvCommand = commands.registerCommand('csv.preview', (uri) => {
        let resource = uri;
        let viewColumn = ViewColumn.One;
	    if (!(resource instanceof Uri)) {
		    if (window.activeTextEditor) {
    			resource = window.activeTextEditor.document.uri;
                viewColumn = window.activeTextEditor.viewColumn;
		    } else {
                window.showInformationMessage("Open a CSV file first to show a preview.");
                return;
            }
	    }
        previewUri = resource.with({
            scheme: "csv-preview"
        });
        let title = `Preview '${path.basename(resource.fsPath)}'`;
        return commands.executeCommand('vscode.previewHtml', previewUri, viewColumn, title).then((success) => {
        }, (reason) => {
            window.showErrorMessage(reason);
        });
    });
    
    let excelCommand = commands.registerCommand('excel.preview', (uri) => {
        let resource = uri;
        let viewColumn = ViewColumn.One;
	    if (!(resource instanceof Uri)) {
            window.showInformationMessage("Use the explorer context menu or editor title menu to preview Excel files.");
            return;
	    }
        previewUri = resource.with({
            scheme: "excel-preview"
        });
        let title = `Preview '${path.basename(resource.fsPath)}'`;
        return commands.executeCommand('vscode.previewHtml', previewUri, viewColumn, title).then((success) => {
        }, (reason) => {
            window.showErrorMessage(reason);
        });
    });
    
    context.subscriptions.push(csvProvider, csvCommand, csvSubscription);
    context.subscriptions.push(excelProvider, excelCommand, excelSubscription);
}

export function deactivate() {
}
