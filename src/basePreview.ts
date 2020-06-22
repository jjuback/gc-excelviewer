'use strict';
import { window, ExtensionContext, Disposable, Uri, ViewColumn, Webview, WebviewPanel, Memento } from 'vscode';
import * as path from 'path';
import { previewManager } from './previewManager';

export default abstract class BasePreview {
    
    private _storage: Memento;
    private _uri: Uri;
    private _previewUri: Uri;
    private _extOutUri: Uri;
    private _title: string;
    private _panel: WebviewPanel;
    protected _disposables: Disposable[] = [];

    protected constructor(context: ExtensionContext, uri: Uri, scheme: string) {
        this._storage = context.workspaceState;
        this._uri = uri;
        this._previewUri = this._uri.with({
            scheme: scheme
        });
        this._extOutUri = Uri.file(path.join(context.extensionPath, 'out'));
        this._title = `Preview '${path.basename(this._uri.fsPath)}'`;
        previewManager.add(this);
    }

    protected initWebviewPanel(viewColumn: ViewColumn): BasePreview {
        let panel = window.createWebviewPanel(this.viewType, this._title, viewColumn, {
            enableScripts: true,
            enableCommandUris: true,
            enableFindWidget: true,
            retainContextWhenHidden: true
        });
        return this.attachWebviewPanel(panel);
    }

    protected attachWebviewPanel(webviewPanel: WebviewPanel): BasePreview {
        this._panel = webviewPanel;
        this._panel.onDidDispose(() => {
            this.dispose();
        }, this, this._disposables);
        return this;
    }

    protected handleEvents() {
        this.webview.onDidReceiveMessage((e) => {
            if (e.save) {
                this.saveState(e.state);
            }
            else if (e.refresh) {
                this.refresh();
            }
            else if (e.error) {
                window.showErrorMessage(e.error);
            }
        }, this, this._disposables);
        this.webview.html = this.getHtml();
    }

    public dispose() {
        previewManager.remove(this);
        this._panel.dispose();
        while (this._disposables.length) {
            const item = this._disposables.pop();
            if (item) {
                item.dispose();
            }
        }
    }

    public configure() {
        this.webview.html = this.getHtml();
    }
    
    public reload() {
        this.webview.html = this.getHtml(true);
    }
    
    public reveal() {
        this._panel.reveal();
    }
    
    get visible(): boolean {
        return this._panel.visible;
    }

    get webview(): Webview {
        return this._panel.webview;
    }

    get storage(): Memento {
        return this._storage;
    }
    
    get state(): any {
        let key = this.previewUri.toString();
        return this.storage.get(key, {});
    }
    
    get uri(): Uri {
        return this._uri;
    }

    get previewUri(): Uri {
        return this._previewUri;
    }

    get extensionUrl(): string {
        return this._panel.webview.asWebviewUri(this._extOutUri).toString();
    }

    public saveState(state: any) {
        this._storage.update(this.previewUri.toString(), state);
    }

    abstract get viewType(): string;
    abstract getHtml(ignoreState?: boolean): string;
    abstract refresh(): void;
}
