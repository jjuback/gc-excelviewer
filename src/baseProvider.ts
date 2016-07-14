'use strict';
import {workspace, Disposable, Event, EventEmitter, Uri, TextDocumentContentProvider} from 'vscode';

export abstract class BaseDocumentContentProvider implements TextDocumentContentProvider {
    
    private _version: string;
    private _onDidChange = new EventEmitter<Uri>();

    constructor(version: string) {
        this._version = version;
    }
    
    dispose() {
        this._onDidChange.dispose();
    }
    
    get version(): string {
        return this._version;
    }
    
    get theme(): string {
        return <string>workspace.getConfiguration('csv-preview').get("theme");        
    }
    
    public provideTextDocumentContent(uri: Uri): string | Thenable<string> {
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
