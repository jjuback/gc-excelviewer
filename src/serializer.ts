'use strict';
import { WebviewPanel, WebviewPanelSerializer, ExtensionContext, Uri } from 'vscode';
import CsvDocumentView from './csvDocumentView';
import ExcelDocumentView from './excelDocumentView';
import LegacyDocumentView from './legacyDocumentView';

export class CsvSerializer implements WebviewPanelSerializer {
    
    private _context: ExtensionContext;

    constructor(context: ExtensionContext) {
        this._context = context;
    }

    public async deserializeWebviewPanel(webviewPanel: WebviewPanel, state: any) {
        CsvDocumentView.revive(this._context, Uri.parse(state.uri), webviewPanel);
    }
}

export class ExcelSerializer implements WebviewPanelSerializer {
    
    private _context: ExtensionContext;

    constructor(context: ExtensionContext) {
        this._context = context;
    }

    public async deserializeWebviewPanel(webviewPanel: WebviewPanel, state: any) {
        ExcelDocumentView.revive(this._context, Uri.parse(state.uri), webviewPanel);
    }
}

export class LegacySerializer implements WebviewPanelSerializer {
    
    private _context: ExtensionContext;

    constructor(context: ExtensionContext) {
        this._context = context;
    }

    public async deserializeWebviewPanel(webviewPanel: WebviewPanel, state: any) {
        LegacyDocumentView.revive(this._context, Uri.parse(state.uri), webviewPanel);
    }
}
