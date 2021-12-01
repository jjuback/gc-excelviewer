import * as vscode from 'vscode';
import CsvDocumentView from './csvDocumentView';

export class CsvEditorProvider implements vscode.CustomTextEditorProvider {

	public static register(context: vscode.ExtensionContext): vscode.Disposable {
		const provider = new CsvEditorProvider(context);
		const providerRegistration = vscode.window.registerCustomEditorProvider(CsvEditorProvider.viewType, provider, {
			webviewOptions: {
				enableFindWidget: true,
				retainContextWhenHidden: true
			}
		});
		return providerRegistration;
	}

	private static readonly viewType = 'gc-excelviewer-csv-editor';

	constructor(private readonly context: vscode.ExtensionContext) {
	}

	public async resolveCustomTextEditor(
		document: vscode.TextDocument,
		webviewPanel: vscode.WebviewPanel,
		_token: vscode.CancellationToken
	): Promise<void> {
        let editor = new CsvDocumentView(this.context, document.uri);
        editor.languageId = document.languageId;
        editor.panel = webviewPanel;
        editor.initialize();
	}
}
