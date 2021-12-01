import * as vscode from 'vscode';
import { Disposable, disposeAll } from './dispose';
import ExcelDocumentView from './excelDocumentView';

export class ExcelEditorProvider implements vscode.CustomReadonlyEditorProvider<ExcelDocument> {

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

    async openCustomDocument(
		uri: vscode.Uri,
		openContext: { backupId?: string },
		_token: vscode.CancellationToken
	): Promise<ExcelDocument> {
		const document: ExcelDocument = await ExcelDocument.create(uri, openContext.backupId, {
			getFileData: async () => {
				return new Uint8Array();
			}
		});

		const listeners: vscode.Disposable[] = [];
		document.onDidDispose(() => disposeAll(listeners));
        return document;
	}

    public async resolveCustomEditor(
		document: ExcelDocument,
		webviewPanel: vscode.WebviewPanel,
		_token: vscode.CancellationToken
	): Promise<void> {
        let editor = new ExcelDocumentView(this.context, document.uri);
		editor.panel = webviewPanel;
        editor.initialize();
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

	dispose(): void {
		this._onDidDispose.fire();
		super.dispose();
	}
}
