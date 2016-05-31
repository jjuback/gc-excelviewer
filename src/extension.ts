'use strict';
import {window, workspace, commands, ExtensionContext, Uri, TextDocumentChangeEvent, ViewColumn} from 'vscode';
import * as base64 from './base64';
import * as csv from './csvProvider';
import * as excel from './excelProvider';

export function activate(context: ExtensionContext) {
    
    let version = "5.20161.151";
    let previewUri: Uri;
    let csvProvider = new csv.CsvDocumentContentProvider(version);
    let csvSubscription = workspace.registerTextDocumentContentProvider('csv-preview', csvProvider);
    let excelProvider = new excel.ExcelDocumentContentProvider(version);
    let excelSubscription = workspace.registerTextDocumentContentProvider('excel-preview', excelProvider);
    
    workspace.onDidChangeTextDocument((e: TextDocumentChangeEvent) => {
        if (e.document === window.activeTextEditor.document) {
            csvProvider.update(previewUri);
        }
    });
    
    let csvCommand = commands.registerCommand('csv.preview', () => {
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
                excelProvider.setPath(sel);
                previewUri = Uri.parse(`excel-preview://preview${path}/${sel}`);
                return commands.executeCommand('vscode.previewHtml', previewUri, ViewColumn.One).then((success) => {
                }, (reason) => {
                    window.showErrorMessage(reason);
                });                
            });
        });
    });
    
    context.subscriptions.push(csvCommand, csvSubscription);
    context.subscriptions.push(excelCommand, excelSubscription);
}

export function deactivate() {
}
