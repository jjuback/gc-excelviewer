'use strict';
import {workspace, ExtensionContext, Disposable, Event, EventEmitter, Uri, TextDocumentContentProvider, Memento} from 'vscode';

export abstract class BaseDocumentContentProvider implements TextDocumentContentProvider {
    
    private _storage: Memento;
    private _uri: Uri;
    private _onDidChange = new EventEmitter<Uri>();

    constructor(context: ExtensionContext) {
        this._storage = context.workspaceState;
    }
    
    dispose() {
        this._onDidChange.dispose();
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
        return this.storage.get(this.uri.toString());
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
    abstract snippet(): string;
}
