'use strict';
import {window, workspace, commands, ExtensionContext, Uri, ViewColumn, TextDocument} from 'vscode';
import * as csv from './csvProvider';
import * as excel from './excelProvider';
import * as path from 'path';

export function activate(context: ExtensionContext) {
    
    let previewUri: Uri;
    let csvProvider = new csv.CsvDocumentContentProvider(context);
    let csvSubscription = workspace.registerTextDocumentContentProvider('csv-preview', csvProvider);
    let excelProvider = new excel.ExcelDocumentContentProvider(context);
    let excelSubscription = workspace.registerTextDocumentContentProvider('excel-preview', excelProvider);
    
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
        let viewColumn = getViewColumn();
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

    workspace.onDidSaveTextDocument(document => {
		if (isCsvFile(document)) {
            let resource: any = document.uri;
        	const uri = resource.with({
                scheme: 'csv-preview'
            });
			csvProvider.update(uri);
		}
	});

	workspace.onDidChangeConfiguration(() => {
		workspace.textDocuments.forEach(document => {
            let scheme = document.uri.scheme;
			if (scheme === 'csv-preview') {
				csvProvider.update(document.uri);
			} else if (scheme === 'excel-preview') {
				excelProvider.update(document.uri);
			}
		});
	});

    window.onDidChangeActiveTextEditor(editor => {
        if (!editor) {
            workspace.textDocuments.forEach(document => {
                let scheme = document.uri.scheme;
                if (scheme === 'csv-preview') {
                    csvProvider.update(document.uri);
                } else if (scheme === 'excel-preview') {
                    excelProvider.update(document.uri);
                }
            });
        }
    });

    let clearCommand = commands.registerCommand('csv.clearState', () => {
        if (previewUri && csvProvider.storage.get(previewUri.toString())) {
            csvProvider.storage.update(previewUri.toString(), null);
        }
    });

    context.subscriptions.push(clearCommand);
}

export function deactivate() {
}

function isCsvFile(document: TextDocument) {
    if (document) {
        let lang = document.languageId;
        return (lang === 'csv' || lang === 'tsv' || lang === 'plaintext') && document.uri.scheme !== 'csv-preview';
    }
    return false;
}

function getViewColumn(): ViewColumn {
	const active = window.activeTextEditor;
	return active ? active.viewColumn : ViewColumn.One;
}
