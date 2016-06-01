# Excel Viewer
## View Excel spreadsheets and CSV files within Visual Studio code.
Powered by [Wijmo](http://www.wijmo.com/products/wijmo-5), this extension provides read-only viewers for CSV files and Excel spreadsheets within the current workspace.

### CSV Usage
Open any file with a .csv extension, then execute the command `CSV: Preview File`.
The contents of the file will be displayed in a [FlexGrid](http://demos.wijmo.com/5/Angular/Explorer/Explorer/#/grid/intro) control, which supports sorting and filtering via its column headers.

![Image](./img/csv-preview.gif)

### Excel Usage
Since Visual Studio Code does not support opening binary files, the steps are slightly different for Excel spreadsheets.
First, execute the command `Excel: Preview File`.
You will be presented with a list of Excel files within the current workspace (including files in subfolders, if any).
Select the desired file to view it in a [FlexSheet](http://wijmo.com/products/flexsheet) control.

![Image](./img/excel-preview.gif)

If multiple sheets are present, use the controls at the bottom of the view for navigation.

### For more information
* [FlexGrid API](http://wijmo.com/5/docs/topic/wijmo.grid.FlexGrid.Class.html)
* [FlexSheet API](http://wijmo.com/5/docs/topic/wijmo.grid.sheet.FlexSheet.Class.html)
