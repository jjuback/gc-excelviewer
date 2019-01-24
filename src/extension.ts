'use strict';
import { window, workspace, commands, ExtensionContext, Uri, ViewColumn, TextDocument, Webview } from 'vscode';
import CsvPreview from './csvPreview';
import ExcelPreview from './excelPreview';
import { PreviewManager, previewManager } from './previewManager';
import * as path from 'path';
import BasePreview from './basePreview';

export function activate(context: ExtensionContext) {
    
    // CSV: Open Preview
    let csvCommand = commands.registerCommand('csv.preview', (uri) => {
        let resource = uri;
        let viewColumn = getViewColumn();
        if (!(resource instanceof Uri)) {
            if (window.activeTextEditor) {
                resource = window.activeTextEditor.document.uri;
                viewColumn = window.activeTextEditor.viewColumn;
            } else {
                window.showInformationMessage("Open a CSV file first to show a preview.");
                return;
            }
        }
        let preview = new CsvPreview(context, resource, viewColumn);
        return preview.webview;
    });
    
    // Excel: Open Preview
    let excelCommand = commands.registerCommand('excel.preview', (uri) => {
        let resource = uri;
        let viewColumn = getViewColumn();
        if (!(resource instanceof Uri)) {
            window.showInformationMessage("Use the explorer context menu or editor title menu to preview Excel files.");
            return;
        }
        let preview = new ExcelPreview(context, resource, viewColumn);
        return preview.webview;
    });
    
    // CSV: Clear Preview State
    let clearCommand = commands.registerCommand('csv.clearState', () => {
        let preview = previewManager.active();
        if (preview) {
            let key = preview.previewUri.toString();
            if (preview.storage.get(key)) {
                preview.storage.update(key, null);
                preview.refresh();
            }
        }
    });

    // CSV: Refresh
    let refreshCommand = commands.registerCommand('csv.refresh', () => {
        let preview = previewManager.active();
        if (preview) {
            preview.webview.postMessage({
                refresh: true
            });
        }
    });
    
    // Add disposables to subscriptions array
    context.subscriptions.push(csvCommand);
    context.subscriptions.push(excelCommand);
    context.subscriptions.push(clearCommand);
    context.subscriptions.push(refreshCommand);

    // Refresh associated preview when a CSV file is saved
    workspace.onDidSaveTextDocument(document => {
        if (isCsvFile(document)) {
            let resource: any = document.uri;
            const uri = resource.with({
                scheme: 'csv-preview'
            });
            let preview = previewManager.find(uri);
            if (preview) {
                preview.refresh();
            }
        }
    });

    // Refresh associated preview when a CSV file changes
    workspace.onDidChangeTextDocument(args => {
        if (isCsvFile(args.document)) {
            let resource: any = args.document.uri;
            let scheme = resource.scheme;
            const uri = resource.with({
                scheme: 'csv-preview'
            });
            let preview = previewManager.find(uri);
            if (preview && args.contentChanges.length > 0) {
                preview.refresh();
            }
        }
    });

    // Reset all previews when the configuration changes
    workspace.onDidChangeConfiguration(() => {
        previewManager.configure();
    });

    // Automatically preview content piped from stdin (when VSCode is already open)
    workspace.onDidOpenTextDocument(document => {
        if (isStdinFile(document)) {
            commands.executeCommand('csv.preview', document.uri);
        }
    });

    // Automaticlly preview content piped from stdin (when VSCode first starts up)
    if (window.activeTextEditor) {
        let document = window.activeTextEditor.document;
        if (isStdinFile(document)) {
            commands.executeCommand('csv.preview', document.uri);
        }
    }
}

export function deactivate() {
}

function isCsvFile(document: TextDocument) {
    if (document) {
        let lang = document.languageId.toLowerCase();
        let allowed = ['csv', 'csv (semicolon)', 'csv (pipe)', 'tsv', 'plaintext'];
        return allowed.find(a => a === lang) && document.uri.scheme !== 'csv-preview';
    }
    return false;
}

function isStdinFile(document: TextDocument) {
    let allowed = <boolean>workspace.getConfiguration('csv-preview').get("openStdin");
    return (allowed && document) ? path.basename(document.fileName).match("code-stdin-[^.]+.txt") : false;
}

function getViewColumn(): ViewColumn {
    const active = window.activeTextEditor;
    return active ? active.viewColumn : ViewColumn.One;
}
