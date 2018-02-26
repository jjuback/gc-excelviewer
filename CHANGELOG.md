## 2.0.20 (February 25, 2018)
Added the configuration option `csv-preview.lineNumbers` that lets you specify whether to display line numbers for CSV files (default: false).

Added two configuration options that let you exclude comment lines from the CSV preview. Use `csv-preview.commentCharacter` to specify the character used to mark comment lines (default: #). If the option `csv-preview.skipComments` is true (default: false), then lines that begin with the comment character will not be included in the preview. The comment character may be preceded by whitespace in the CSV file. To specify multiple comment characters, use a regular expression character set. For example, to use both % and @ as comment symbols, do this:

`"csv-preview.commentCharacter": "[%@]"`

## 2.0.19 (February 22, 2018)
Improved regular expression parsing for CSV files with Windows line endings (CR/LF).

## 2.0.18 (February 21, 2018)
Fixed the initial scroll bar display for CSV and Excel files.

Improved regular expression parsing for CSV files, particularly for fields that are surrounded by delimiters but span multiple lines. Such fields are displayed on a single line in the preview, but are now parsed correctly.

Relaxed the restriction for CSV files that the first field on each line must be enclosed in quotes if the header row begins with a quote.

For CSV files, the horizontal and vertical scroll bar positions are now persisted along with column widths and sort/filter criteria.

Added support for the .tsv file extension (like .csv except that a tab delimiter is assumed).

For Excel files, the selected sheet index is now persisted along with filter criteria for that sheet only.

Added support for the .xlsm file extension (Excel file with macros, which the extension ignores).

Fixed bug which caused the error message: Cannot read property 'languageId' of undefined.

Upgraded to use Wijmo build 5.20173.409.

## 2.0.17 (January 12, 2018)
Excel preview now uses the ambient font instead of switching to Arial, if present.

Removed references to .xls files in the extension manifest and documentation. Only .xlsx files are supported.

## 2.0.16 (December 18, 2017)
The extension no longer relies upon the Wijmo CDN for external file references. This fixes issues where the extension would not run behind a firewall or proxy server.

When previewing a CSV file, the extension now validates any saved settings (column widths, sort/filter criteria) before applying them. If the number of columns or any individual column binding has changed, then any persistent user data is ignored. This fixes issues where newly added columns were not dislayed unless the `CSV: Clear Preview State` command was first run. This command is still useful for discarding persistent data when the column layout has not changed.

Fixed error: Cannot read property '_freezeHiddenRowCnt' of undefined. 

Upgraded to use Wijmo build 5.20173.380.

## 1.1.15 (May 2, 2017)
Fixed Excel preview bug where the A1 cell was always highlighted.

Upgraded to use Wijmo build 5.20171.282.

## 1.1.14 (April 28, 2017)
Added the configuration option `csv-preview.capitalizeHeaders` that lets you specify whether column headers in CSV files are capitalized (default: true).

Added the configuration option `csv-preview.resizeColumns` that lets you specify which columns (all, first, none) are automatically resized to fit the data for CSV files (default: none).

Added the `CSV: Clear Preview State` command that discards persistent user data for the current file. For CSV files, this includes column widths and sort/filter criteria. For Excel files, this includes filter criteria only. Reopen the preview for the affected file to see the changes.

## 1.1.13 (March 1, 2017)
Fixed CSV regression with quoted values containing the separator character.

## 1.1.12 (March 1, 2017)
Fixed issue with Windows line endings and quoted values where the last column in a CSV file was rendered with quote marks.

Fixed bug where quoted values containing newline characters caused improper rendering of the affected lines. Note that multiline values are now displayed on a single line without line breaks. However, the other columns are now rendered correctly.

Moved version history from `README.md` to `CHANGELOG.md`.

## 1.1.11 (February 9, 2017)
Added a dependency on Visual Studio Code 1.9.1, which fixes issues with blank previews.

Virtual documents now contain well-formed HTML tags.

## 1.1.10 (August 26, 2016)
CSV preview now persists column widths and sort/filter criteria.

Excel preview now supports filtering via its column headers. Filter criteria are persisted, but column widths are not.

Upgraded to use Wijmo build 5.20162.198.

## 1.1.9 (July 25, 2016)
Fixed bug where the CSV preview did not update automatically when the associated text document was saved. For best results, the `files.autoSave` setting should be set to either `off` (the default) or `onFocusChange`.

Fixed bug where the CSV/Excel preview was always displayed in the left editor group, even if the active document was in the center or right group.

All open CSV/Excel previews now update automatically when the configuration settings are saved. Formerly, an explicit `Reload Window` command was required.

## 1.1.8 (July 14, 2016)
This version requires Visual Studio Code 1.3 or greater.

Fixed grid control layout issues that first surfaced in Visual Studio Code 1.3.

Renamed `Preview File` commands to `Open Preview` for consistency with the intrinsic Markdown extension.

CSV preview commands are now available in explorer context menus and editor title menus. This applies to files with .csv extensions only. To preview plain text files with different extensions, open the file in an editor, then execute the `CSV: Open Preview` command from the command palette.

Excel preview commands are now available in explorer context menus and editor title menus. This applies to files with .xls and .xlsx extensions only. Since Visual Studio Code extensions can now contribute menu commands to the standard interface, executing the `Excel: Open Preview` command from the command palette no longer presents a dropdown list of Excel files.

Removed unnecessary vertical scroll bar.

Upgraded to use Wijmo build 5.20162.188.

## 1.0.7 (June 13, 2016)
CSV files with double-byte characters are now handled correctly.

## 1.0.6 (June 7, 2016)
Relaxed the restriction that CSV files must have a .csv extension. The `CSV: Preview File` command now works with any plain text file.

Added the configuration option `csv-preview.quoteMark` that lets you specify the optional character used to surround individual data values in a CSV file (default: double-quote).

Added the configuration option `csv-preview.hasHeaders` that lets you specify whether the first row in a CSV file represents column headers (default: true).

Added enumerated values for the `csv-preview.theme` configuration option.

## 1.0.5 (June 2, 2016)
Fixed local path issues that prevented Excel files from being opened on Windows. If you downloaded an earlier version, please upgrade to version 1.0.5 or later.

@kmp1 added the configuration option `csv-preview.separator` that lets you specify the separator used when reading CSV files (default: comma).
