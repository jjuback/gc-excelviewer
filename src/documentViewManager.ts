'use strict';
import { Uri } from 'vscode';
import BaseDocumentView from './baseDocumentView';

export class DocumentViewManager {
    
    private static _instance: DocumentViewManager;
    private _views: BaseDocumentView[] = [];

    private constructor() {
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    public add(view: BaseDocumentView): void {
        this._views.push(view!);
    }

    public remove(view: BaseDocumentView): void {
        let found = this._views.indexOf(view!);
        if (found >= 0) {
            this._views.splice(found, 1);
        }
    }

    public find(uri: Uri): BaseDocumentView {   
        return this._views.find(p => p.previewUri.toString() === p.webview.asWebviewUri(uri).toString());
    }

    public filter(uri: Uri): BaseDocumentView[] {
        return this._views.filter(p => p.previewUri.toString() === p.webview.asWebviewUri(uri).toString());
    }

    public active(): BaseDocumentView {
        return this._views.find(p => p.visible);
    }
    
    public configure(): void {
        this._views.forEach(p => p.configure());
    }
}

export const documentViewManager = DocumentViewManager.Instance;
