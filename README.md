# Excel Viewer
Powered by [Wijmo](http://www.wijmo.com/products/wijmo-5), this extension provides read-only viewers for CSV files and Excel spreadsheets within the current Visual Studio Code workspace. For a deep dive into the implementation details (written prior to the release of Visual Studio Code 1.3), see this [blog post](http://www.wijmo.com/?p=76123).

> This extension requires Visual Studio Code 1.9.1 Recovery Build or greater.

Version 2.0 no longer requires access to an external CDN, which prevented the extension from being used behind a firewall. This version also fixes issues where changes to CSV file structure were not immediately reflected in the preview window. See the changelog for details.  

## CSV Usage
For files with a .csv extension, use the explorer context menu or editor title menu to invoke the `Open Preview` command. The contents of the file will be displayed in a [FlexGrid](http://demos.wijmo.com/5/Angular/Explorer/Explorer/#/grid/intro) control, which supports sorting and filtering via its column headers.

![Image](./img/csv-preview-qt.gif)

For plain text files with different extensions, open the file in an editor and execute the `CSV: Open Preview` command from the command palette.

## Excel Usage
For files with an .xls or .xlsx extension, use the explorer context menu or editor title menu to invoke the `Open Preview` command. The contents of the file will be displayed in a [FlexSheet](http://wijmo.com/products/flexsheet) control. If multiple sheets are present, use the controls at the bottom of the view for navigation.

![Image](./img/excel-preview-qt.gif)

> As of version 1.1.8, executing the `Excel: Open Preview` command from the command palette no longer displays a dropdown list of Excel files in the current folder, since extensions can now add their own menu commands to the standard Visual Studio Code interface.

## Persistent Data
The extension automatically stores user customizations on a per-file, per-workspace basis. For CSV files, this includes column widths and sort/filter criteria. For Excel files, this includes filter criteria only. As of version 2.0.16, if the column structure of a CSV file changes, any persistent data is ignored for that file. This fixes issues where new columns were not displayed unless the file was moved or renamed.

To discard persistent data for a CSV or Excel file, execute the command `CSV: Clear Preview State`, then reopen the preview for the affected file to see the changes.

## Configuration
To change the default configuration settings for the Excel Viewer extension, edit the user or workspace settings as described [here](http://code.visualstudio.com/docs/customization/userandworkspace#_creating-user-and-workspace-settings). The available settings are as follows:

Setting | Type | Default Value | Description
------- | ---- | ------------- | -----------
csv-preview.separator | string | , (comma) | Specifies the separator used in a CSV file.
csv-preview.quoteMark | string | "&nbsp;(double&#8209;quote) | Specifies the optional character used to surround individual values in a CSV file.
csv-preview.hasHeaders | boolean | true | Specifies whether the first row in a CSV file represents column headers.
csv-preview.capitalizeHeaders | boolean | true | Specifies whether column headers in CSV files are capitalized.
csv-preview.resizeColumns | string | none | Specifies whether columns are automatically resized to fit the data for CSV files.
csv-preview.theme | string | cleandark | Specifies the Wijmo theme used to style the preview grid.

> As of version 1.1.9, any open CSV/Excel previews will automatically update to reflect the modified settings.

## References
* [About Wijmo](http://www.wijmo.com/products/wijmo-5)
* [FlexGrid API](http://wijmo.com/5/docs/topic/wijmo.grid.FlexGrid.Class.html)
* [FlexSheet API](http://wijmo.com/5/docs/topic/wijmo.grid.sheet.FlexSheet.Class.html)
