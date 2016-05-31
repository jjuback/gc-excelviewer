# Excel Viewer
## View Excel spreadsheets and CSV files within Visual Studio code.
Powered by Wijmo, this extension provides read-only viewers for CSV files and Excel spreadsheets within the current workspace.
Open any file with a .csv extension, then execute the command CSV: Preview File.

![Image](./img/csv-command.png)

The preview grid supports sorting and filtering via its column headers.

![Image](./img/csv-preview.png)

Since Visual Studio Code does not support opening binary files, the steps are different for Excel spreadsheets.
First, execute the command Excel: Preview File. 

![Image](./img/excel-command.png)

You will be presented with a list of Excel files within the current workspace (including files in subfolders, if any).

![Image](./img/excel-filelist.png)

Select the desired file to open the spreadsheet viewer.

![Image](./img/excel-preview.png)

If multiple sheets are present, use the controls at the bottom of the view for navigation.

### For more information
* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)
