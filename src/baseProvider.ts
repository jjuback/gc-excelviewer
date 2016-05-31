'use strict';
import {workspace, Event, EventEmitter, Uri, TextDocumentContentProvider} from 'vscode';

export abstract class BaseDocumentContentProvider implements TextDocumentContentProvider {
    
    private _version: string;
    private _onDidChange = new EventEmitter<Uri>();

    constructor(version: string) {
        this._version = version;
    }
    
    get version(): string {
        return this._version;
    }
    
    get theme(): string {
        return <string>workspace.getConfiguration('csv-preview').get("theme");        
    }
    
    public provideTextDocumentContent(uri: Uri): string | Thenable<string> {
        return this.createSnippet();
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
    
    abstract createSnippet(): string;
    abstract snippet(text: string, theme: string, ver: string): string;
}
