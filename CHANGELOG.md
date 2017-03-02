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
