'use strict';
import { window, ExtensionContext, Disposable, ViewColumn, Webview, WebviewPanel, Memento, workspace } from 'vscode';
import { URI, Utils } from 'vscode-uri';
import { documentViewManager } from './documentViewManager';

export default abstract class BaseDocumentView {
    
    private _uri: URI;
    private _previewUri: URI;
    private _scriptUri: URI;
    private _storage: Memento;
    private _panel: WebviewPanel;
    private _customEditor: boolean = true;
    protected _disposed: boolean = false;
    protected _disposables: Disposable[] = [];

    constructor(context: ExtensionContext, uri: URI) {
        this._uri = uri;
        this._scriptUri = Utils.joinPath(context.extensionUri, 'out');
        this._storage = context.workspaceState;
        documentViewManager.add(this);
    }

    protected initWebviewPanel(viewColumn: ViewColumn): BaseDocumentView {
        let title = `Preview '${Utils.basename(this._uri)}'`;
        let panel = window.createWebviewPanel(this.viewType, title, viewColumn, {
            enableScripts: true,
            enableCommandUris: true,
            enableFindWidget: true,
            retainContextWhenHidden: true
        });
        return this.attachWebviewPanel(panel);
    }

    protected attachWebviewPanel(webviewPanel: WebviewPanel): BaseDocumentView {
        this._customEditor = false;
        this._panel = webviewPanel;
        this._previewUri = webviewPanel.webview.asWebviewUri(this._uri);
        this._scriptUri = webviewPanel.webview.asWebviewUri(this._scriptUri);
        this._panel.onDidDispose(() => {
            this.dispose();
        }, this, this._disposables);
        return this;
    }

    public initialize() {
        this.webview.onDidReceiveMessage((e) => {
            if (e.save) {
                this.state = e.state;
            }
            else if (e.refresh) {
                this.refresh();
            }
            else if (e.error) {
                window.showErrorMessage(e.error);
            }
        }, this, this._disposables);

        workspace.onDidChangeTextDocument((e) => {
			if (!this._disposed && e.document.uri.toString() === this.uri.toString()) {
				this.refresh();
			}
		}, this, this._disposables);

        this.webview.html = this.getHtml();
    }

    public dispose() {
        documentViewManager.remove(this);
        this._disposed = true;
        while (this._disposables.length) {
            const item = this._disposables.pop();
            if (item) {
                item.dispose();
            }
        }
    }

    public configure() {
        if (this.configurable) {
            this.webview.html = this.getHtml();
            this.refresh();
        }
    }
    
    public reload() {
        this.webview.html = this.getHtml(true);
    }
    
    public reveal() {
        this._panel.reveal();
    }
    
    get hasCustomEditor(): boolean {
        return this._customEditor;
    }

    get visible(): boolean {
        return this._panel.visible;
    }

    get webview(): Webview {
        return this._panel.webview;
    }

    get panel(): WebviewPanel {
        return this._panel;
    }

    set panel(value: WebviewPanel) {
        this._previewUri = value.webview.asWebviewUri(this._uri);
        this._scriptUri = value.webview.asWebviewUri(this._scriptUri);
        this._panel = value;
        value.webview.options = {
			enableScripts: true,
			enableCommandUris: true
		};
        this._panel.onDidDispose(() => {
            this.dispose();
        }, this, this._disposables);
    }
    
    set scheme(value: string) {
        this._previewUri = this._uri.with({
            scheme: value
        });
    }

    get uri(): URI {
        return this._uri;
    }

    get previewUri(): URI {
        return this._previewUri;
    }

    get scriptUri(): URI {
        return this._scriptUri;
    }

    get state(): any {
        let key = this.previewUri.toString();
        return this._storage.get(key, null);
    }
    set state(value: any) {
        let key = this.previewUri.toString();
        this._storage.update(key, value);
    }

    public clearState() {
        this.state = null;
        this.reload();
        this.refresh();
    }
    
    abstract get viewType(): string;
    abstract getHtml(ignoreState?: boolean): string;
    abstract refresh(): void;
    abstract get configurable(): boolean;
}
