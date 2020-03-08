'use strict';
import { workspace, window, ExtensionContext, Disposable, Uri, ViewColumn, Memento, Webview, WebviewPanel, WebviewPanelOnDidChangeViewStateEvent } from 'vscode';
import * as path from 'path';
import LocalWebService from './localWebService';
import { PreviewManager, previewManager } from './previewManager';

export default abstract class BasePreview {
    
    private _storage: Memento;
    private _uri: Uri;
    private _previewUri: Uri;
    private _title: string;
    private _panel: WebviewPanel;
    private _service: LocalWebService;
    protected _disposables: Disposable[] = [];

    constructor(context: ExtensionContext, uri: Uri, scheme: string, viewColumn: ViewColumn) {
        this._storage = context.workspaceState;
        this._uri = uri;
        this.initService(context);
        this.initWebview(scheme, viewColumn);
    }

    private initWebview(scheme: string, viewColumn: ViewColumn) {
        let self = this;
        this._previewUri = this._uri.with({
            scheme: scheme
        });
        this._title = `Preview '${path.basename(this._uri.fsPath)}'`;
        this._panel = window.createWebviewPanel("gc-excelwebviewer", this._title, viewColumn, <any>{
            enableScripts: true,
            enableCommandUris: true,
            enableFindWidget: true,
            portMapping: [{
                webviewPort: this._service.staticPort, 
                extensionHostPort: this._service.servicePort
            }]
        });
        this._panel.onDidDispose(() => {
            this.dispose();
        }, null, this._disposables);
        this._panel.onDidChangeViewState((e: WebviewPanelOnDidChangeViewStateEvent) => {
            //self._isActive = e.webviewPanel.visible;
            let active = e.webviewPanel.visible;
        }, null, this._disposables);
        this.webview.onDidReceiveMessage((e) => {
            if (e.error) {
                window.showErrorMessage(e.error);
            }
        }, null, this._disposables);
        previewManager.add(this);
    }

    private getLocalResourceRoots(): Uri[] {
        const folder = workspace.getWorkspaceFolder(this.uri);
        if (folder) {
            return [folder.uri];
        }
        if (!this.uri.scheme || this.uri.scheme === 'file') {
            return [Uri.file(path.dirname(this.uri.fsPath))];
        }
        return [];
    }
    
    private initService(context: ExtensionContext) {
        this._service = new LocalWebService(context);
        this._service.start();
    }

    public update(content: string, options: any) {
        this._service.init(content, options);
        this.webview.html = this.html;
    }

    public getOptions(): any {
        return {
            uri: this.previewUri.toString(),
            state: this.state
        };
    }

    public configure() {
        let options = this.getOptions();
        this.service.options = options;
        this.webview.html = this.html;
        this.refresh();
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
        return this.storage.get(this.previewUri.toString());
    }
    
    get uri(): Uri {
        return this._uri;
    }

    get previewUri(): Uri {
        return this._previewUri;
    }

    get serviceUrl(): string {
        return this._service.serviceUrl;
    }

    get service(): LocalWebService {
        return this._service;
    }
    
    abstract get html(): string;
    abstract refresh(): void;
}
