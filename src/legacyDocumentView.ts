'use strict';
import { window, workspace, WebviewPanel, ExtensionContext, ViewColumn } from 'vscode';
import { URI } from 'vscode-uri';
import BaseDocumentView from './baseDocumentView';
import { getLicenseKey } from './license';

export default class LegacyDocumentView extends BaseDocumentView {

    static revive(context: ExtensionContext, uri: URI, webviewPanel: WebviewPanel): LegacyDocumentView {
        let preview = new LegacyDocumentView(context, uri);
        preview.scheme = "csv-preview";
        preview.attachWebviewPanel(webviewPanel);
        preview.initialize();
        return preview;
    }

    refresh(): void {
    }

	getHtml(ignoreState: boolean = false): string {
		return `
        <!DOCTYPE html>
        <html>
        <body>
            <p>This preview was created with an earlier version of Excel Viewer, and cannot be restored.</p>
            <p>Please close this tab and reopen the preview as you normally would.</p>
            <p>Alternatively, you can open a custom editor as follows:</p>
            <ul>
            <li>For CSV files, right-click the filename and select <b>Open With</b>, then choose <b>CSV Viewer</b> when prompted.</li>
            <li>For Excel files, double-click the filename to open the custom editor directly.</li>
            </ul>
            <p>Excel Viewer now supports <b>Visual Studio Code for the Web</b>. To get started, go to <a href="https://vscode.dev">https://vscode.dev</a>.</p>
        </body>
        </html>`;
	}

    get viewType(): string {
        return "gc-excelviewer-csv";
    }

    get configurable(): boolean {
        return false;
    }
}
