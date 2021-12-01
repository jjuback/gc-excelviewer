'use strict';
import { window, workspace, commands, ExtensionContext, Uri, ViewColumn, TextDocument } from 'vscode';
import CsvDocumentView from './csvDocumentView';
import ExcelDocumentView from './excelDocumentView';
import { documentViewManager } from './documentViewManager';
import { Utils } from 'vscode-uri';
import { CsvSerializer, ExcelSerializer, LegacySerializer } from './serializer';
import { CsvEditorProvider } from './csvEditor';
import { ExcelEditorProvider } from './excelEditor';

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
        const csv = resource.with({
            scheme: 'csv-preview'
        });
        let preview = documentViewManager.find(csv);
        if (preview) {
            preview.reveal();
            return;
        }
        preview = CsvDocumentView.create(context, resource, viewColumn);
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
        const excel = resource.with({
            scheme: 'excel-preview'
        });
        let preview = documentViewManager.find(excel);
        if (preview) {
            preview.reveal();
            return;
        }
        preview = ExcelDocumentView.create(context, resource, viewColumn);
        return preview.webview;
    });
    
    // CSV: Clear Preview State
    let clearCommand = commands.registerCommand('csv.clearState', () => {
        let preview = documentViewManager.active();
        if (preview) {
            preview.clearState();
        }
    });

    // CSV: Refresh
    let refreshCommand = commands.registerCommand('csv.refresh', () => {
        let preview = documentViewManager.active();
        if (preview) {
            preview.refresh();
        }
    });
    
    // Add disposables to subscriptions array
    context.subscriptions.push(csvCommand);
    context.subscriptions.push(excelCommand);
    context.subscriptions.push(clearCommand);
    context.subscriptions.push(refreshCommand);
    context.subscriptions.push(CsvEditorProvider.register(context));
    context.subscriptions.push(ExcelEditorProvider.register(context));

    // Register serializers for persistent settings
    window.registerWebviewPanelSerializer("gc-excelviewer-csv", new LegacySerializer(context));
    window.registerWebviewPanelSerializer("gc-excelviewer-excel", new LegacySerializer(context));
    window.registerWebviewPanelSerializer("gc-excelviewer-csv-preview", new CsvSerializer(context));
    window.registerWebviewPanelSerializer("gc-excelviewer-excel-preview", new ExcelSerializer(context));

    // Reset all previews when the configuration changes
    workspace.onDidChangeConfiguration(() => {
        documentViewManager.configure();
    });

    // Automatically preview content piped from stdin (when VSCode is already open)
    workspace.onDidOpenTextDocument(document => {
        if (isStdinFile(document)) {
            commands.executeCommand('csv.preview', document.uri);
        }
    });

    // Automatically preview content piped from stdin (when VSCode first starts up)
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
    return (allowed && document) ? Utils.basename(document.uri).match("code-stdin-[^.]+.txt") : false;
}

function getViewColumn(): ViewColumn {
    const active = window.activeTextEditor;
    return active ? active.viewColumn : ViewColumn.One;
}
