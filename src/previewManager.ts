'use strict';
import { Uri } from 'vscode';
import BasePreview from './basePreview';

export class PreviewManager {
    
    private static _instance: PreviewManager;
    private _previews: BasePreview[] = [];

    private constructor() {
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    public add(preview: BasePreview): void {
        this._previews.push(preview!);
    }

    public remove(preview: BasePreview): void {
        let found = this._previews.indexOf(preview!);
        if (found >= 0) {
            this._previews.splice(found, 1);
        }
    }

    public find(uri: Uri): BasePreview {        
        return this._previews.find(p => p.previewUri.toString() === uri.toString());
    }

    public active(): BasePreview {
        return this._previews.find(p => p.visible);
    }
    
    public configure(): void {
        this._previews.forEach(p => p.configure());
    }
}

export const previewManager = PreviewManager.Instance;
