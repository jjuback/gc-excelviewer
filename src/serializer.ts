'use strict';
import { WebviewPanel, WebviewPanelSerializer, ExtensionContext, Uri } from 'vscode';
import CsvPreview from './csvPreview';
import ExcelPreview from './excelPreview';

export class CsvSerializer implements WebviewPanelSerializer {
    
    private _context: ExtensionContext;

    constructor(context: ExtensionContext) {
        this._context = context;
    }

    public async deserializeWebviewPanel(webviewPanel: WebviewPanel, state: any) {
        CsvPreview.revive(this._context, Uri.parse(state.uri), webviewPanel);
    }
}

export class ExcelSerializer implements WebviewPanelSerializer {
    
    private _context: ExtensionContext;

    constructor(context: ExtensionContext) {
        this._context = context;
    }

    public async deserializeWebviewPanel(webviewPanel: WebviewPanel, state: any) {
        ExcelPreview.revive(this._context, Uri.parse(state.uri), webviewPanel);
    }
}
