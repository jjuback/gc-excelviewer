'use strict';
import {window, workspace, commands, ExtensionContext, Uri, ViewColumn} from 'vscode';
import * as csv from './csvProvider';
import * as excel from './excelProvider';

export function activate(context: ExtensionContext) {
    
    let version = "5.20161.151";
    let previewUri: Uri;
    let csvProvider = new csv.CsvDocumentContentProvider(version);
    let csvSubscription = workspace.registerTextDocumentContentProvider('csv-preview', csvProvider);
    let excelProvider = new excel.ExcelDocumentContentProvider(version);
    let excelSubscription = workspace.registerTextDocumentContentProvider('excel-preview', excelProvider);
    
    let csvCommand = commands.registerCommand('csv.preview', () => {
        if (!window.activeTextEditor) {
            window.showInformationMessage("Open a CSV file first to show a preview.");
            return;
        }
        let file = window.activeTextEditor.document.fileName;
        if (file.startsWith("/")) {
            file = file.substring(1);
        }
        previewUri = Uri.parse(`csv-preview://preview/${file}`);
        return commands.executeCommand('vscode.previewHtml', previewUri, ViewColumn.One).then((success) => {
        }, (reason) => {
            window.showErrorMessage(reason);
        });
    });
    
    let excelCommand = commands.registerCommand('excel.preview', () => {
        var files = workspace.findFiles('**/*.xls*', '**/node_modules/**').then((value: Uri[]) => {
            var path = workspace.rootPath;
            var uris = value.map(function (u) {
                return u.path.slice(path.length + 1);
            });
            if (!path.startsWith("/")) {
                path = "/" + path;
            }
            window.showQuickPick(uris).then(sel => {
                if (sel.startsWith("/")) {
                    sel = sel.slice(1);
                }
                excelProvider.setPath(sel);
                previewUri = Uri.parse(`excel-preview://preview${path}/${sel}`);
                return commands.executeCommand('vscode.previewHtml', previewUri, ViewColumn.One).then((success) => {
                }, (reason) => {
                    window.showErrorMessage(reason);
                });                
            });
        });
    });
    
    context.subscriptions.push(csvProvider, csvCommand, csvSubscription);
    context.subscriptions.push(excelProvider, excelCommand, excelSubscription);
}

export function deactivate() {
}
