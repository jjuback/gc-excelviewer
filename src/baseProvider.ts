'use strict';
import {workspace, Disposable, Event, EventEmitter, Uri, TextDocumentContentProvider, Memento} from 'vscode';

export abstract class BaseDocumentContentProvider implements TextDocumentContentProvider {
    
    private _version: string;
    private _storage: Memento;
    private _uri: Uri;
    private _onDidChange = new EventEmitter<Uri>();

    constructor(version: string, storage?: Memento) {
        this._version = version;
        this._storage = storage;
    }
    
    dispose() {
        this._onDidChange.dispose();
    }
    
    get version(): string {
        return this._version;
    }
    
    get storage(): Memento {
        return this._storage;
    }
    
    get theme(): string {
        return <string>workspace.getConfiguration('csv-preview').get("theme");        
    }
    
    get uri(): any {
        return this._uri;
    }

    get state(): any {
        var s = this.storage.get(this.uri.toString());
        return s ? JSON.stringify(s) : null;
    }
    
    public provideTextDocumentContent(uri: Uri): string | Thenable<string> {
        this._uri = uri;
        return this.createSnippet(uri);
    }

    get onDidChange(): Event<Uri> {
        return this._onDidChange.event;
    }

    update(uri: Uri) {
        this._onDidChange.fire(uri);
    }
    
    errorSnippet(error: string): string {
        return `<body>
                ${error}
                </body>`;
    }
    
    abstract createSnippet(uri: Uri): string | Thenable<string>;
    abstract snippet(text: string, theme: string, ver: string): string;
}
