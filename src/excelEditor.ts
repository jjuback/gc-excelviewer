import * as vscode from 'vscode';
import { Disposable, disposeAll } from './dispose';
import ExcelDocumentView from './excelDocumentView';
import { documentViewManager } from './documentViewManager';

export class ExcelEditorProvider implements vscode.CustomEditorProvider<ExcelDocument> {

	public static register(context: vscode.ExtensionContext): vscode.Disposable {
		const provider = new ExcelEditorProvider(context);
		const providerRegistration = vscode.window.registerCustomEditorProvider(ExcelEditorProvider.viewType, provider, {
			webviewOptions: {
				enableFindWidget: true,
				retainContextWhenHidden: true
			}
		});
		return providerRegistration;
	}

	private static readonly viewType = 'gc-excelviewer-excel-editor';

	constructor(private readonly context: vscode.ExtensionContext) {
	}

	private readonly _onDidChangeCustomDocument = new vscode.EventEmitter<vscode.CustomDocumentContentChangeEvent<ExcelDocument>>(); // CustomDocumentEditEvent
	public readonly onDidChangeCustomDocument = this._onDidChangeCustomDocument.event;

	saveCustomDocument(document: ExcelDocument, cancellation: vscode.CancellationToken): Thenable<void> {
		return document.save(cancellation);
	}
	
	saveCustomDocumentAs(document: ExcelDocument, destination: vscode.Uri, cancellation: vscode.CancellationToken): Thenable<void> {
		return document.saveAs(destination, cancellation);
	}
	
	revertCustomDocument(document: ExcelDocument, cancellation: vscode.CancellationToken): Thenable<void> {
		return document.revert(cancellation);
	}
	
	backupCustomDocument(document: ExcelDocument, context: vscode.CustomDocumentBackupContext, cancellation: vscode.CancellationToken): Thenable<vscode.CustomDocumentBackup> {
		return document.backup(context.destination, cancellation);
	}

    async openCustomDocument(
		uri: vscode.Uri,
		openContext: { backupId?: string },
		_token: vscode.CancellationToken
	): Promise<ExcelDocument> {
		const document: ExcelDocument = await ExcelDocument.create(uri, openContext.backupId, {
			getFileData: async () => {
				let view = documentViewManager.find(document.uri);
				let panel = view.panel;
				const response = await this.postMessageWithResponse<number[]>(panel, 'getData', {});
				return new Uint8Array(response);
			}
		});

		const listeners: vscode.Disposable[] = [];

		listeners.push(document.onDidChange(e => {
			// Tell VS Code that the document has been edited by the use.
			this._onDidChangeCustomDocument.fire({
				document,
				...e,
			});
		}));

		listeners.push(document.onDidChangeDocument(e => {
			// Update all webviews when the document changes
			for (const view of documentViewManager.filter(document.uri)) {
				view.panel.webview.postMessage({
					content: e.content,
				});
			}
		}));
		
		document.onDidDispose(() => disposeAll(listeners));
        return document;
	}

	private _requestId = 1;
	private readonly _callbacks = new Map<number, (response: any) => void>();

	private postMessageWithResponse<R = unknown>(panel: vscode.WebviewPanel, type: string, body: any): Promise<R> {
		const requestId = this._requestId++;
		const p = new Promise<R>(resolve => this._callbacks.set(requestId, resolve));
		panel.webview.postMessage({ type, requestId, body });
		return p;
	}

	public async resolveCustomEditor(
		document: ExcelDocument,
		webviewPanel: vscode.WebviewPanel,
		_token: vscode.CancellationToken
	): Promise<void> {
        let editor = new ExcelDocumentView(this.context, document.uri);
		editor.panel = webviewPanel;
        editor.initialize();
		editor.enableEditing(document);
        webviewPanel.webview.onDidReceiveMessage((e) => {
            if (e.response) {
				const callback = this._callbacks.get(e.requestId);
				callback?.(e.body);
            }
        });
	}
}

interface ExcelDocumentDelegate {
	getFileData(): Promise<Uint8Array>;
}

export class ExcelDocument extends Disposable implements vscode.CustomDocument {

	static async create(
		uri: vscode.Uri,
		backupId: string | undefined,
		delegate: ExcelDocumentDelegate,
	): Promise<ExcelDocument | PromiseLike<ExcelDocument>> {
		const dataFile = typeof backupId === 'string' ? vscode.Uri.parse(backupId) : uri;
		const fileData = await ExcelDocument.readFile(dataFile);
		return new ExcelDocument(uri, fileData, delegate);
	}

	private static async readFile(uri: vscode.Uri): Promise<Uint8Array> {
		if (uri.scheme === 'untitled') {
			return new Uint8Array();
		}
		return vscode.workspace.fs.readFile(uri);
	}

	private readonly _uri: vscode.Uri;
	public get uri() { return this._uri; }

	private _documentData: Uint8Array;
	public get documentData(): Uint8Array { return this._documentData; }

	private readonly _delegate: ExcelDocumentDelegate;

	private constructor(
		uri: vscode.Uri,
		initialContent: Uint8Array,
		delegate: ExcelDocumentDelegate
	) {
		super();
		this._uri = uri;
		this._documentData = initialContent;
		this._delegate = delegate;
	}

	private readonly _onDidDispose = this._register(new vscode.EventEmitter<void>());
	public readonly onDidDispose = this._onDidDispose.event;

	private readonly _onDidChangeDocument = this._register(new vscode.EventEmitter<{
		readonly content?: Uint8Array;
	}>());

	public readonly onDidChangeDocument = this._onDidChangeDocument.event;

	private readonly _onDidChange = this._register(new vscode.EventEmitter<{
		readonly label: string,
		undo(): void,
		redo(): void,
	}>());

	public readonly onDidChange = this._onDidChange.event;

	change(label: string) {
		let view = <ExcelDocumentView>documentViewManager.find(this.uri);
		this._onDidChange.fire({
			label: label,
			undo: async() => view.undo(),
			redo: async() => view.redo()
		});
	}

	async save(cancellation: vscode.CancellationToken): Promise<void> {
		await this.saveAs(this.uri, cancellation);
	}

	async saveAs(targetResource: vscode.Uri, cancellation: vscode.CancellationToken): Promise<void> {
		const fileData = await this._delegate.getFileData();
		if (cancellation.isCancellationRequested) {
			return;
		}
		await vscode.workspace.fs.writeFile(targetResource, fileData);
	}

	async revert(_cancellation: vscode.CancellationToken): Promise<void> {
		const diskContent = await ExcelDocument.readFile(this.uri);
		this._documentData = diskContent;
		this._onDidChangeDocument.fire({
			content: diskContent
		});
	}

	async backup(destination: vscode.Uri, cancellation: vscode.CancellationToken): Promise<vscode.CustomDocumentBackup> {
		await this.saveAs(destination, cancellation);

		return {
			id: destination.toString(),
			delete: async () => {
				try {
					await vscode.workspace.fs.delete(destination);
				} catch {
					// noop
				}
			}
		};
	}	
	
	dispose(): void {
		this._onDidDispose.fire();
		super.dispose();
	}
}
