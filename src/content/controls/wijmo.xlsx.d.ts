/*
    *
    * Wijmo Library 5.20181.436
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
declare var JSZip: any;
declare module wijmo.xlsx {
    /**
     * Defines a reference to JSZip module that will be used by the Wijmo xlsx export modules.
     *
     * This method should be used in npm modules based applications to provide wijmo.xlsx module
     * with a reference to the JSZip module retrieved using the ES6 import statement. For example:
     * <pre>import * as JSZip from 'jszip';
     * import * as wjcXlsx from 'wijmo/wijmo.xlsx';
     * wjcXlsx.useJSZip(JSZip);
     * </pre>
     *
     * @param jszip Reference to the JSZip constructor function.
     */
    function useJSZip(jszip: any): void;
    class _xlsx {
        private static _alphabet;
        private static _indexedColors;
        private static _numFmts;
        private static _tableColumnFunctions;
        private static _xmlDescription;
        private static _workbookNS;
        private static _relationshipsNS;
        private static _defaultFontName;
        private static _defaultFontSize;
        private static _macroEnabled;
        private static _sharedStrings;
        static readonly _defaultColorThemes: string[];
        private static _colorThemes;
        private static _styles;
        private static _sharedFormulas;
        private static _borders;
        private static _fonts;
        private static _fills;
        private static _contentTypes;
        private static _props;
        private static _xlRels;
        private static _worksheets;
        private static _tableStyles;
        private static _dxfs;
        private static _tables;
        static load(base64: string): any;
        static loadAsync(base64: string): any;
        static save(workbook: any): any;
        static saveAsync(workbook: any, onError?: (reason?: any) => any): any;
        private static _loadImpl(zipImpl, base64);
        private static _getZipStyle(zip, retChain, result);
        private static _getZipSharedString(zip, retChain, result);
        private static _saveWorkbookToZip(workbook, isAsync?);
        private static _getSharedString(sharedString);
        private static _getInlineString(cell);
        private static _getCoreSetting(coreSetting, result);
        private static _getWorkbook(workbook, result);
        private static _getTheme(theme);
        private static _getStyle(styleSheet);
        private static _getEdgeBorder(strBorder, edge);
        private static _getSheet(sheet, index, result);
        private static _getTable(table);
        private static _getTableColumn(column);
        private static _getSheetRelatedTable(rel);
        private static _getSheetRelatedHyperlink(rel, id, sheet);
        private static _getTableStyles(styleDefs, dxfs);
        private static _getTableStyleElement(dxf);
        private static _getTableStyleByName(styleName);
        private static _getHyperlink(sheet, hyperlinkPart);
        private static _getTextRunFont(item);
        private static _getTextOfTextRuns(textRuns);
        private static _isBuiltInStyleName(styleName);
        private static _generateRelsDoc();
        private static _generateThemeDoc();
        private static _generateClrScheme();
        private static _generateFontScheme();
        private static _generateFmtScheme();
        private static _generateFillScheme();
        private static _generateLineStyles();
        private static _generateEffectScheme();
        private static _generateBgFillScheme();
        private static _generateCoreDoc(file);
        private static _generateSheetGlobalSetting(index, worksheet, file);
        private static _generateCell(rowIndex, colIndex, styleIndex, type, val, formula);
        private static _generateMergeSetting(merges);
        private static _generateStyleDoc();
        private static _generateBorderStyle(borders, isTable?);
        private static _generateFontStyle(fontStyle, needScheme?);
        private static _generateFillStyle(patternType, fillColor, isTableStyle?);
        private static _generateCellXfs(numFmtId, borderId, fontId, fillId, style);
        private static _generateContentTypesDoc();
        private static _generateAppDoc(file);
        private static _generateWorkbookRels();
        private static _generateWorkbook(file);
        private static _generateWorkSheet(sheetIndex, file, xlWorksheets);
        private static _generateSharedStringsDoc();
        private static _generatePlainText(val);
        private static _generateTable(table, xlTables);
        private static _generateTableFilterSetting(ref, showTotalRow, columns);
        private static _generateHyperlinkRel(externalLinks);
        private static _getDxfs();
        private static _generateDxfs();
        private static _generateTableStyles();
        private static _isEmptyStyleEle(styleEle);
        private static _getTableFileName(tables, tableName);
        private static _getColor(s, isFillColor);
        private static _getThemeColor(theme, tint);
        private static _parseColor(color);
        private static _getsBaseSharedFormulas(sheet);
        private static _parseSharedFormulaInfo(cellRef, formula);
        private static _getSharedFormula(si, cellRef);
        private static _convertDate(input);
        private static _parseBorder(border, needDefaultBorder);
        private static _applyDefaultBorder(style);
        private static _resolveStyleInheritance(style);
        private static _parsePixelToCharWidth(pixels);
        private static _parseCharWidthToPixel(charWidth);
        private static _parseCharCountToCharWidth(charCnt);
        private static _numAlpha(i);
        private static _alphaNum(s);
        private static _typeOf(obj);
        private static _extend(dst, src);
        private static _isEmpty(obj);
        private static _cloneStyle(src);
        private static _cloneColumnsStyle(columns);
        private static _getSheetIndex(fileName);
        private static _checkValidMergeCell(merges, startRow, rowSpan, startCol, colSpan);
        private static _getAttr(s, attr);
        private static _getChildNodeValue(s, child);
        private static _getSheetIndexBySheetName(file, sheetName);
    }
}

/**
 * The module has a dependency on the <a href="https://stuk.github.io/jszip" target="_blank">JSZip</a>
 * library which can be referenced as follows:
 * <ul>
 * <li>In order to invoke the synchronous save and load methods, JSZip2 library should be
 * referenced in html page with the markup like this:
 * <pre>&lt;script src="http://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"&gt;&lt;/script&gt;</pre></li>
 * <li>In order to invoke the asynchronous save and load methods, JSZip3 library should be
 * referenced in html page with the markup like this:
 * <pre>&lt;script src="http://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"&gt;&lt;/script&gt;</pre></li>
 * <li>If application is constructed based on npm modules then you may prefer to load JSZip module by means of the ES6
 * <b>import</b> statement, instead of a script tag. In this case you should additionally provide wijmo.xlsx module
 * with a reference to the JSZip module using the @see:useJSZip function, with a code like shown below:
 * <pre>import * as JSZip from 'jszip';
 * import * as wjcXlsx from 'wijmo/wijmo.xlsx';
 * wjcXlsx.useJSZip(JSZip);
 * </pre>
 *
 * It's enough to call the @see:useJSZip function only once per application page, and the best place to do it
 * could be a some root module of the application.</li></ul>
*/
declare module wijmo.xlsx {
    /**
     * Represents an Excel workbook.
     */
    class Workbook implements IWorkbook {
        /**
         * Gets or sets the name of application that generated the file that appears in the file properties.
         */
        application: string;
        /**
         * Gets or sets the name of company that generated the file that appears in the file properties.
         */
        company: string;
        /**
         * Gets or sets the creator of the xlsx file.
         */
        creator: string;
        /**
         * Gets or sets the creation time of the xlsx file.
         */
        created: Date;
        /**
         * Gets or sets the last modifier of the xlsx file.
         */
        lastModifiedBy: string;
        /**
         * Gets or sets the last modified time of the xlsx file.
         */
        modified: Date;
        /**
         * Gets or sets the index of the active sheet in the xlsx file.
         */
        activeWorksheet: number;
        private _reservedContent;
        private _sheets;
        private _styles;
        private _definedNames;
        private _tableStyles;
        private _colorThemes;
        private static _alphabet;
        private static _formatMap;
        /**
         * Initializes a new instance of the @see:Workbook class.
         */
        constructor();
        /**
         * Gets the WorkSheet array of the workbook.
         */
        readonly sheets: WorkSheet[];
        /**
         * Gets the styles table of the workbook.
         */
        readonly styles: WorkbookStyle[];
        /**
         * Gets the defined name items of the workbook.
         */
        readonly definedNames: DefinedName[];
        /**
         * Gets the color of the workbook themes.
         */
        readonly colorThemes: string[];
        /**
         * Gets or sets the reserved content from xlsx file that flexgrid or flexsheet doesn't support yet.
         */
        reservedContent: any;
        /**
         * Saves the book to a file and returns a base-64 string representation of
         * the book.
         * This method works with JSZip 2.5.
         *
         * For example, this sample creates an xlsx file with a single cell:
         *
         * <pre>function exportXlsx(fileName) {
         *     var book = new wijmo.xlsx.Workbook(),
         *         sheet = new wijmo.xlsx.WorkSheet(),
         *         bookRow = new wijmo.xlsx.WorkbookRow(),
         *         bookCell = new wijmo.xlsx.WorkbookCell();
         *     bookCell.value = 'Hello, Excel!';
         *     bookRow.cells.push(bookCell);
         *     sheet.rows.push(bookRow);
         *     book.sheets.push(sheet);
         *     book.save(fileName);
         * }</pre>
         *
         * The file name is optional. If not provided, the method still returns
         * a base-64 string representing the book. This string can be used for
         * further processing on the client or on the server.
         *
         * @param fileName Name of the xlsx file to save.
         * @return A base-64 string that represents the content of the file.
         */
        save(fileName?: string): string;
        /**
         * Saves the book to a file asynchronously.
         * This method works with JSZip 3.0.
         *
         * @param fileName Name of the xlsx file to save.
         * @param onSaved This callback provides an approach to get the base-64 string
         * that represents the content of the saved workbook. Since this method is an
         * asynchronous method, user does not get the base-64 string immediately.
         * User has to get the base-64 string via this callback.
         * This has a single parameter, the base-64 string of the saved workbook.
         * It will be passed to user.
         * @param onError This callback catches error information when saving.
         * This has a single parameter, the failure reason.
         * Return value will be passed to user, if he wants to catch the save failure reason.
         *
         * For example:
         * <pre>
         * workbook.saveAsync('', function (base64){
         *      // User can access the base64 string in this callback.
         *      document.getElementByID('export').href = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' + 'base64,' + base64;
         * }, function (reason){
         *      // User can catch the failure reason in this callback.
         *      console.log('The reason of save failure is ' + reason);
         * });
         * </pre>
         */
        saveAsync(fileName?: string, onSaved?: (base64?: string) => any, onError?: (reason?: any) => any): void;
        /**
         * Loads from base-64 string or data url.
         * This method works with JSZip 2.5.
         *
         * For example:
         * <pre>// This sample opens an xlsx file chosen from Open File
         * // dialog and creates a workbook instance to load the file.
         * &nbsp;
         * // HTML
         * &lt;input type="file"
         *     id="importFile"
         *     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
         * /&gt;
         * &nbsp;
         * // JavaScript
         * var workbook, // receives imported IWorkbook
         *     importFile = document.getElementById('importFile');
         * &nbsp;
         * importFile.addEventListener('change', function () {
         *     loadWorkbook();
         * });
         * &nbsp;
         * function loadWorkbook() {
         *     var reader,
         *         workbook,
         *         file = importFile.files[0];
         *     if (file) {
         *         reader = new FileReader();
         *         reader.onload = function (e) {
         *            workbook = new wijmo.xlsx.Workbook(),
         *            workbook.load(reader.result);
         *         };
         *         reader.readAsDataURL(file);
         *     }
         * }</pre>
         *
         * @param base64 The base-64 string that contains the xlsx file content.
         */
        load(base64: string): void;
        /**
         * Loads from base-64 string or data url asynchronously.
         * This method works with JSZip 3.0.
         *
         * @param base64 base64 string that contains the xlsx file content.
         * @param onLoaded This callback provides an approach to get an instance of the loaded workbook.
         * Since this method is an asynchronous method, user is not able to get instance of
         * the loaded workbook immediately. User has to get the instance through this callback.
         * This has a single parameter, instance of the loaded workbook. It will be passed to user.
         * @param onError This callback catches error information when loading.
         * This has a single parameter, the failure reason. Return value is
         * be passed to user, if he wants to catch the load failure reason.
         *
         * For example:
         * <pre>
         * workbook.loadAsync(base64, function (workbook) {
         *      // User can access the loaded workbook instance in this callback.
         *      var app = worksheet.application ;
         *      ...
         * }, function (reason) {
         *      // User can catch the failure reason in this callback.
         *      console.log('The reason of load failure is ' + reason);
         * });
         * </pre>
         */
        loadAsync(base64: string, onLoaded: (workbook: Workbook) => void, onError?: (reason?: any) => any): void;
        _serialize(): IWorkbook;
        _deserialize(workbookOM: IWorkbook): void;
        _addWorkSheet(workSheet: WorkSheet, sheetIndex?: number): void;
        private _saveToFile(base64, fileName);
        private _getBase64String(base64);
        /**
         * Converts the wijmo date format to Excel format.
         *
         * @param format The wijmo date format.
         * @return Excel format representation.
         */
        static toXlsxDateFormat(format: string): string;
        /**
         * Converts the wijmo number format to xlsx format.
         *
         * @param format The wijmo number format.
         * @return Excel format representation.
         */
        static toXlsxNumberFormat(format: string): string;
        /**
         * Converts the xlsx multi-section format string to an array of corresponding wijmo formats.
         *
         * @param xlsxFormat The Excel format string, that may contain multiple format sections
         * separated by a semicolon.
         * @return An array of .Net format strings where each element corresponds to a separate
         * Excel format section.
         * The returning array always contains at least one element. It can be an empty string
         * in case the passed Excel format is empty.
         */
        static fromXlsxFormat(xlsxFormat: string): string[];
        static _parseCellFormat(format: string, isDate: boolean): string;
        static _parseExcelFormat(item: any): string;
        /**
         * Converts zero-based cell, row or column index to Excel alphanumeric representation.
         *
         * @param row The zero-based row index or a null value if only column index
         * is to be converted.
         * @param col The zero-based column index or a null value if only row index
         * is to be converted.
         * @param absolute True value indicates that absolute indices is to be returned
         * for both, row and column (like $D$7). The <b>absoluteCol</b> parameter allows
         * to redefine this value for the column index.
         * @param absoluteCol True value indicates that column index is absolute.
         * @return The alphanumeric Excel index representation.
        */
        static xlsxAddress(row: number, col: number, absolute?: boolean, absoluteCol?: boolean): string;
        /**
         * Convert Excel's alphanumeric cell, row or column index to the zero-based
         * row/column indices pair.
         *
         * @param xlsxIndex The alphanumeric Excel index that may include alphabetic A-based
         * column index and/or numeric 1-based row index, like "D15", "D" or "15". The
         * alphabetic column index can be in lower or upper case.
         * @return The object with <b>row</b> and <b>col</b> properties containing zero-based
         * row and/or column indices.
         * If row or column component is not specified in the alphanumeric index, then
         * corresponding returning property is undefined.
         */
        static tableAddress(xlsxIndex: string): ITableAddress;
        static _parseHAlignToString(hAlign: HAlign): string;
        static _parseStringToHAlign(hAlign: string): HAlign;
        static _parseVAlignToString(vAlign: VAlign): string;
        static _parseStringToVAlign(vAlign: string): VAlign;
        static _parseBorderTypeToString(type: BorderStyle): string;
        static _parseStringToBorderType(type: string): BorderStyle;
        static _escapeXML(s: any): string;
        static _unescapeXML(val: any): string;
        private static _numAlpha(i);
        private static _alphaNum(s);
        private static _b64ToUint6(nChr);
        static _base64DecToArr(sBase64: string, nBlocksSize?: number): Uint8Array;
        private static _uint6ToB64(nUint6);
        static _base64EncArr(aBytes: Uint8Array): string;
        private _serializeWorkSheets();
        private _serializeWorkbookStyles();
        private _serializeDefinedNames();
        private _serializeTableStyles();
        private _deserializeWorkSheets(workSheets);
        private _deserializeWorkbookStyles(workbookStyles);
        private _deserializeDefinedNames(definedNames);
        private _deserializeTableStyles(tableStyles);
    }
    /**
     * Represents the Workbook Object Model sheet definition that includes sheet
     * properties and data.
     *
     * The sheet cells are stored in row objects and are accessible using JavaScript
     * expressions like <b>sheet.rows[i].cells[j]</b>.
     */
    class WorkSheet implements IWorkSheet {
        /**
         * Gets or sets the sheet name.
         */
        name: string;
        /**
         *  Gets or sets the @see:WorkbookFrozenPane settings.
         */
        frozenPane: WorkbookFrozenPane;
        /**
         * Gets or sets a value indicating whether summary rows appear below or
         * above detail rows.
         */
        summaryBelow: boolean;
        /**
         * Gets or sets the worksheet visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the row style.
         *
         * The property defines the style for all cells in the worksheet, and
         * can be overridden by the specific cell styles.
         */
        style: WorkbookStyle;
        private _columns;
        private _rows;
        private _tables;
        /**
         * Initializes a new instance of the @see:WorkSheet class.
         */
        constructor();
        /**
         * Gets or sets an array of sheet columns definitions.
         *
         * Each @see:WorkbookColumn object in the array describes a column
         * at the corresponding position in xlsx sheet, i.e. the column with index 0
         * corresponds to xlsx sheet column with index A, object with
         * index 1 defines sheet column with index B, and so on. If certain column
         * has no description in xlsx file, then corresponding array element
         * is undefined for both export and import operations.
         *
         * If @see:WorkbookColumn object in the array doesn't specify the
         * <b>width</b> property value, then the default column width is applied.
         */
        readonly columns: WorkbookColumn[];
        /**
         * Gets an array of sheet rows definition.
         *
         * Each @see:WorkbookRow object in the array describes a row at the corresponding
         * position in xlsx sheet, i.e. the row with index 0 corresponds to excel sheet
         * row with index 1, object with index 1 defines sheet row with index 2, and so on.
         * If certain row has no properties and data in xlsx file, then corresponding array
         * element is undefined for both export and import operations.
         *
         * If @see:WorkbookRow object in the array doesn't specify the <b>height</b> property
         * value, then the default row height is applied.
         */
        readonly rows: WorkbookRow[];
        /**
         * Gets the name of tables refered in this worksheet.
         */
        readonly tables: WorkbookTable[];
        _serialize(): IWorkSheet;
        _deserialize(workSheetOM: IWorkSheet): void;
        _addWorkbookColumn(column: WorkbookColumn, columnIndex?: number): void;
        _addWorkbookRow(row: WorkbookRow, rowIndex?: number): void;
        private _serializeWorkbookColumns();
        private _serializeWorkbookRows();
        private _serializeTables();
        private _deserializeWorkbookColumns(workbookColumns);
        private _deserializeWorkbookRows(workbookRows);
        private _deserializeTables(tables);
        private _checkEmptyWorkSheet();
    }
    /**
     * Represents the Workbook Object Model column definition.
     */
    class WorkbookColumn implements IWorkbookColumn {
        /**
         * Gets or sets the width of the column in device-independent
         * (1/96th inch) pixels or characters.
         *
         * The numeric value defines the width in pixels. On import,
         * the widths are always expressed in pixels.
         *
         * The string value which is a number with the 'ch' suffix,
         * for example '10ch', defines the width in characters.
         * It has the same meaning as the column width defined through
         * Excel UI. The width can be specified in characters
         * for the export operations only.
         *
         * If width is not specified, then the default width is applied.
         */
        width: any;
        /**
         * Gets or sets the column visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the column style.
         *
         * The property defines the style for all cells in the column,
         * and can be overridden by the specific cell styles.
         */
        style: WorkbookStyle;
        /**
         * Gets or sets a value indicating whether the column width is
         * automatically adjusted to fit the content of its cells.
         */
        autoWidth: boolean;
        /**
         * Initializes a new instance of the @see:WorkbookColumn class.
         */
        constructor();
        _serialize(): IWorkbookColumn;
        _deserialize(workbookColumnOM: IWorkbookColumn): void;
        private _checkEmptyWorkbookColumn();
    }
    /**
     * Represents the Workbook Object Model row definition.
     */
    class WorkbookRow implements IWorkbookRow {
        /**
         * Gets or sets the row height in device-independent (1/96th inch) pixels.
         *
         * If height is not specified, then the default height is applied.
         */
        height: number;
        /**
         * Gets or sets the row visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the group level of the row.
         */
        groupLevel: number;
        /**
         * Gets or sets the row style.
         *
         * The property defines the style for all cells in the row,
         * and can be overridden by the specific cell styles.
         */
        style: WorkbookStyle;
        /**
         * Indicating if the row is in the collapsed outline state.
         */
        collapsed: boolean;
        private _cells;
        /**
         * Initializes a new instance of the @see:WorkbookRow class.
         */
        constructor();
        /**
         * Gets or sets an array of cells in the row.
         *
         * Each @see:WorkbookCell object in the array describes a cell
         * at the corresponding position in the row, i.e. a cell with
         * index 0 pertains to column with index A, a cell with index 1
         * defines cell pertaining to column with index B, and so on.
         * If a certain cell has no definition (empty) in xlsx file,
         * then corresponding array element is undefined for both export
         * and import operations.
         */
        readonly cells: WorkbookCell[];
        _serialize(): IWorkbookRow;
        _deserialize(workbookRowOM: IWorkbookRow): void;
        _addWorkbookCell(cell: WorkbookCell, cellIndex?: number): void;
        private _serializeWorkbookCells();
        private _deserializeWorkbookCells(workbookCells);
        private _checkEmptyWorkbookRow();
    }
    /**
     * Represents the Workbook Object Model cell definition.
     */
    class WorkbookCell implements IWorkbookCell {
        /**
         * Gets or sets the cell value.
         *
         * The type of the value can be String, Number, Boolean or Date.
         */
        value: any;
        /**
         * Indicates whether the cell value is date or not.
         */
        isDate: boolean;
        /**
         * Gets or sets the formula of cell.
         */
        formula: string;
        /**
         * Gets or sets the style of cell.
         */
        style: WorkbookStyle;
        /**
         * Gets or sets the colSpan setting of cell.
         */
        colSpan: number;
        /**
         * Gets or sets the rowSpan setting of cell.
         */
        rowSpan: number;
        /**
         * Gets or sets the hyperlink of cell.
         */
        link: string;
        /**
         * Gets or sets the text runs represent the rich text of cell.
         */
        textRuns: WorkbookTextRun[];
        /**
         * Initializes a new instance of the @see:WorkbookCell class.
         */
        constructor();
        _serialize(): IWorkbookCell;
        _deserialize(workbookCellOM: IWorkbookCell): void;
        private _serializeTextRuns();
        private _deserializeTextRuns(textRunOMs);
        private _checkEmptyWorkbookCell();
    }
    /**
     * Workbook frozen pane definition
     */
    class WorkbookFrozenPane implements IWorkbookFrozenPane {
        /**
         * Gets or sets the number of frozen rows.
         */
        rows: number;
        /**
         * Gets or sets the number of frozen columns.
         */
        columns: number;
        /**
         * Initializes a new instance of the @see:WorkbookFrozenPane class.
         */
        constructor();
        _serialize(): IWorkbookFrozenPane;
        _deserialize(workbookFrozenPaneOM: IWorkbookFrozenPane): void;
    }
    /**
     * Represents the Workbook Object Model style definition used
     * to style Excel cells, columns and rows.
     */
    class WorkbookStyle implements IWorkbookStyle {
        /**
         * Cell value format, defined using Excel format syntax.
         *
         * The description of Excel format syntax can be found
         * <a href="https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4" target="_blank">here</a>.
         *
         * You may use the <b>toXlsxNumberFormat</b> and <b>toXlsxDateFormat</b> static
         * functions of the @see:Workbook class to convert from .Net (@see:Globalize)
         * format to Excel format.
         */
        format: string;
        /**
         * Defines the base style that this style inherits.
         *
         * This property is applicable for the export operations only.
         * The style gets all the properties defined in the base style,
         * and can override or augment them by setting its own properties.
         */
        basedOn: WorkbookStyle;
        /**
         * Gets or sets the font of style.
         */
        font: WorkbookFont;
        /**
         * Gets or sets the horizontal alignment of text.
         */
        hAlign: HAlign;
        /**
         *  Gets or sets the vertical alignment of text.
         */
        vAlign: VAlign;
        /**
         * Gets or sets the indent setting of style.
         */
        indent: number;
        /**
         * Gets or sets the background setting.
         */
        fill: WorkbookFill;
        /**
         * Gets or sets the border setting.
         */
        borders: WorkbookBorder;
        /**
         * Gets or sets the word wrap setting of row.
         */
        wordWrap: boolean;
        /**
         * Initializes a new instance of the @see:WorkbookStyle class.
         */
        constructor();
        _serialize(): IWorkbookStyle;
        _deserialize(workbookStyleOM: IWorkbookStyle): void;
        private _checkEmptyWorkbookStyle();
    }
    /**
     * Represents the Workbook Object Model font definition.
     */
    class WorkbookFont implements IWorkbookFont {
        /**
         * Gets or sets the font family name.
         */
        family: string;
        /**
         * Gets or sets the font size in device-independent (1/96th inch) pixels.
         */
        size: number;
        /**
         * Indicates whether the current font is bold.
         */
        bold: boolean;
        /**
         * Indicates whether the current font has the italic style applied.
         */
        italic: boolean;
        /**
         * Indicates whether the current font is underlined.
         */
        underline: boolean;
        /**
         * Gets or sets the font color.
         *
         * For export, the color can be specified in any valid HTML format
         * like 6-character dash notation or rgb/rgba/hsl/hsla functional form.
         * In case of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character dash
         * notation, for example, "#afbfcf".
         */
        color: string;
        /**
         * Initializes a new instance of the @see:WorkbookFont class.
         */
        constructor();
        _serialize(): IWorkbookFont;
        _deserialize(workbookFontOM: IWorkbookFont): void;
        private _checkEmptyWorkbookFont();
    }
    /**
     * Represents the Workbook Object Model background fill definition.
     */
    class WorkbookFill implements IWorkbookFill {
        /**
         * Gets or sets the fill color.
         *
         * For export, the color can be specified in any valid HTML format
         * like 6-character dash notation or rgb/rgba/hsl/hsla functional form.
         * In case of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character dash
         * notation, for example, "#afbfcf".
         */
        color: string;
        /**
         * Initializes a new instance of the @see:WorkbookFill class.
         */
        constructor();
        _serialize(): IWorkbookFill;
        _deserialize(workbookFillOM: IWorkbookFill): void;
    }
    /**
     * Represents the Workbook Object Model border definition.
     */
    class WorkbookBorder implements IWorkbookBorder {
        /**
         * Gets or sets the top border setting.
         */
        top: WorkbookBorderSetting;
        /**
         * Gets or sets the bottom border setting.
         */
        bottom: WorkbookBorderSetting;
        /**
         * Gets or sets the left border setting.
         */
        left: WorkbookBorderSetting;
        /**
         * Gets or sets the right border setting.
         */
        right: WorkbookBorderSetting;
        /**
         * Gets or sets the diagonal border setting.
         */
        diagonal: WorkbookBorderSetting;
        /**
         * Initializes a new instance of the @see:WorkbookBorder class.
         */
        constructor();
        _serialize(): IWorkbookBorder;
        _deserialize(workbookBorderOM: IWorkbookBorder): void;
        private _checkEmptyWorkbookBorder();
    }
    /**
     * Represents the Workbook Object Model background setting definition.
     */
    class WorkbookBorderSetting implements IWorkbookBorderSetting {
        /**
         * Gets or sets the border color.
         *
         * For export, the color can be specified in any valid HTML format
         * like 6-character dash notation or rgb/rgba/hsl/hsla functional form.
         * In case of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character dash
         * notation, for example, "#afbfcf".
         */
        color: string;
        /**
         * Gets or sets the border type.
         */
        style: BorderStyle;
        /**
         * Initializes a new instance of the @see:WorkbookBorderSetting class.
         */
        constructor();
        _serialize(): IWorkbookBorderSetting;
        _deserialize(workbookBorderSettingOM: IWorkbookBorderSetting): void;
    }
    /**
     * Represents the Workbook Object Model Defined Name item definition.
     */
    class DefinedName implements IDefinedName {
        /**
         * The name of the defined name item.
         */
        name: string;
        /**
         * The value of the defined name item.
         * The value could be a formula, a string constant or a cell range.
         * For e.g. "Sum(1, 2, 3)", "test" or "sheet1!A1:B2"
         */
        value: any;
        /**
         * Indicates the defined name item works in which sheet.
         * If omitted, the defined name item works in workbook
         */
        sheetName: string;
        /**
         * Initializes a new instance of the @see:DefinedName class.
         */
        constructor();
        _serialize(): IDefinedName;
        _deserialize(definedNameOM: IDefinedName): void;
    }
    /**
     * Represents the WorkbookTable Object Model background setting definition.
     */
    class WorkbookTable implements IWorkbookTable {
        /**
         * The name of the table.  It is used to reference the table programmatically.
         */
        name: string;
        /**
         * The range on the relevant sheet that the table occupies expressed using A1 style referencing. i.e. "A1:D4".
         * The reference shall include the totals row if it is shown.
         */
        range: string;
        /**
         * Indicates whether show the header row for the table.
         */
        showHeaderRow: boolean;
        /**
         * Indicates whether show the total row for the table.
         */
        showTotalRow: boolean;
        /**
         * Indicating whether banded column formatting is applied.
         */
        showBandedColumns: boolean;
        /**
         * The table style to use with the table.
         */
        style: WorkbookTableStyle;
        /**
         * Indicating whether banded row formatting is applied.
         */
        showBandedRows: boolean;
        /**
         * Indicating whether the first column in the table should have the style applied.
         */
        alterFirstColumn: boolean;
        /**
         * Indicating whether the last column in the table should have the style applied.
         */
        alterLastColumn: boolean;
        private _columns;
        /**
         * The columns of the table.
         */
        readonly columns: WorkbookTableColumn[];
        /**
         * Initializes a new instance of the @see:WorkbookTable class.
         */
        constructor();
        _serialize(): IWorkbookTable;
        _deserialize(workbookTableOM: IWorkbookTable): void;
        private _serializeTableColumns();
        private _deserializeTableColumns(tableColumnOMs);
    }
    /**
     * Represents the WorkbookTableColumn Object Model background setting definition.
     */
    class WorkbookTableColumn implements IWorkbookTableColumn {
        /**
         * The name of the table column. It is referenced through functions.
         */
        name: string;
        /**
         * The string to show in the totals row cell for the column.
         */
        totalRowLabel: string;
        /**
         * The function to show in the totals row cell for this column.
         */
        totalRowFunction: string;
        /**
         * Indicating whether show filter button for the column.
         */
        showFilterButton: boolean;
        /**
         * Initializes a new instance of the @see:WorkbookTableColumn class.
         */
        constructor();
        _serialize(): IWorkbookTableColumn;
        _deserialize(workbookTableColumnOM: IWorkbookTableColumn): void;
    }
    /**
     * Represents the WorkbookTableStyle Object Model background setting definition.
     */
    class WorkbookTableStyle implements IWorkbookTableStyle {
        /**
         * The name of the table style.
         */
        name: string;
        /**
         * The whole table style.
         */
        wholeTableStyle: WorkbookTableCommonStyle;
        /**
         * The first column stripe style.
         */
        firstBandedColumnStyle: WorkbookTableBandedStyle;
        /**
         * The second column stripe style.
         */
        secondBandedColumnStyle: WorkbookTableBandedStyle;
        /**
         * The first row stripe style.
         */
        firstBandedRowStyle: WorkbookTableBandedStyle;
        /**
         * The second row stripe style.
         */
        secondBandedRowStyle: WorkbookTableBandedStyle;
        /**
         * The first column style.
         */
        firstColumnStyle: WorkbookTableCommonStyle;
        /**
         * The last column style.
         */
        lastColumnStyle: WorkbookTableCommonStyle;
        /**
         * The header row style.
         */
        headerRowStyle: WorkbookTableCommonStyle;
        /**
         * The total row style.
         */
        totalRowStyle: WorkbookTableCommonStyle;
        /**
         * The first cell style in the header row.
         */
        firstHeaderCellStyle: WorkbookTableCommonStyle;
        /**
         * The last cell style in the header row.
         */
        lastHeaderCellStyle: WorkbookTableCommonStyle;
        /**
         * The first cell style in the total row.
         */
        firstTotalCellStyle: WorkbookTableCommonStyle;
        /**
         * The last cell style in the total row.
         */
        lastTotalCellStyle: WorkbookTableCommonStyle;
        /**
         * Initializes a new instance of the @see:WorkbookTableStyle class.
         */
        constructor();
        _serialize(): IWorkbookTableStyle;
        _deserialize(workbookTableStyleOM: IWorkbookTableStyle): void;
        private _checkEmptyWorkbookTableStyle();
    }
    /**
     * Represents the WorkbookTableCommonStyle Object Model background setting definition.
     */
    class WorkbookTableCommonStyle extends WorkbookStyle implements IWorkbookTableCommonStyle {
        /**
         * Table borders setting.
         */
        borders: WorkbookTableBorder;
        /**
         * Initializes a new instance of the @see:WorkbookTableCommonStyle class.
         */
        constructor();
        _deserialize(workbookTableCommonStyleOM: IWorkbookTableCommonStyle): void;
    }
    /**
     * Represents the WorkbookTableBandedStyle Object Model background setting definition.
     */
    class WorkbookTableBandedStyle extends WorkbookTableCommonStyle implements IWorkbookTableBandedStyle {
        /**
         * Number of rows or columns in a single band of striping.
         */
        size: number;
        /**
         * Initializes a new instance of the @see:WorkbookTableBandedStyle class.
         */
        constructor();
        _serialize(): IWorkbookTableBandedStyle;
        _deserialize(workbookTableBandedStyleOM: IWorkbookTableBandedStyle): void;
    }
    /**
     * Represents the Workbook Object Model table border definition.
     */
    class WorkbookTableBorder extends WorkbookBorder implements IWorkbookTableBorder {
        /**
         * Vertical border setting.
         */
        vertical: WorkbookBorderSetting;
        /**
         * Horizontal border setting.
         */
        horizontal: WorkbookBorderSetting;
        /**
         * Initializes a new instance of the @see:WorkbookTableBorder class.
         */
        constructor();
        _serialize(): IWorkbookTableBorder;
        _deserialize(workbookBorderOM: IWorkbookTableBorder): void;
    }
    /**
     * Represents the Workbook Object Model text run definition.
     */
    class WorkbookTextRun implements IWorkbookTextRun {
        /**
         * Gets or sets the font of the text run.
         */
        font: WorkbookFont;
        /**
         * Gets or sets the text of the text run.
         */
        text: string;
        /**
         * Initializes a new instance of the @see:WorkbookTextRun class.
         */
        constructor();
        _serialize(): IWorkbookTextRun;
        _deserialize(workbookTextRunOM: IWorkbookTextRun): void;
    }
    interface IXlsxFileContent {
        base64: string;
        base64Array: Uint8Array;
        href: Function;
    }
    /**
     * Represents the Workbook Object Model sheet definition that
     * includes sheet properties and data.
     *
     * The sheet cells are stored in row objects and are accessible
     * using JavaScript expressions like <b>sheet.rows[i].cells[j]</b>.
     */
    interface IWorkSheet {
        /**
         * Gets or sets the sheet name.
         */
        name?: string;
        /**
         * Gets or sets an array of sheet columns definitions.
         *
         * Each @see:IWorkbookColumn object in the array describes a column at the
         * corresponding position in xlsx sheet, i.e. column with index 0 corresponds
         * to xlsx sheet column with index A, object with index 1 defines sheet column
         * with index B, and so on. If certain column has no description in xlsx file,
         * then corresponding array element is undefined for both export and import operations.
         *
         * If @see:IWorkbookColumn object in the array doesn't specify the <b>width</b>
         * property value, then the default column width is applied.
         */
        columns?: IWorkbookColumn[];
        /**
         * Gets or sets an array of sheet rows definition.
         *
         * Each @see:IWorkbookRow object in the array describes a row at the
         * corresponding position in xlsx sheet, i.e. row with index 0 corresponds
         * to xlsx sheet row with index A, object with index 1 defines sheet row
         * with index B, and so on. If certain row has no description in xlsx file,
         * then corresponding array element is undefined for both export and import operations.
         *
         * If @see:IWorkbookRow object in the array doesn't specify the <b>height</b>
         * property value, then the default row height is applied.
         */
        rows?: IWorkbookRow[];
        /**
         *  Gets or sets the frozen pane settings.
         */
        frozenPane?: IWorkbookFrozenPane;
        /**
         * Gets or sets a value indicating whether summary rows appear below or above detail rows.
         */
        summaryBelow?: boolean;
        /**
         * Gets or sets the worksheet visibility.
         */
        visible?: boolean;
        /**
         * Gets or sets the sheet style.
         *
         * The property defines the style for all cells in the worksheet,
         * and can be overridden by the specific cell styles.
         */
        style?: IWorkbookStyle;
        /**
         * Gets the tables in this worksheet.
         */
        tables?: IWorkbookTable[];
    }
    /**
     * Represents the Workbook Object Model column definition.
     */
    interface IWorkbookColumn {
        /**
         * Gets or sets the width of the column in device-independent (1/96th inch) pixels
         * or characters.
         *
         * The numeric value defines the width in pixels. On import, the widths are
         * always expressed in pixels.
         *
         * The string value which is a number with the 'ch' suffix, for example '10ch',
         * defines the width in characters. It has the same meaning as the column width
         * defined through Excel UI. The width can be specified in characters
         * for the export operations only.
         *
         * If width is not specified, then the default width is applied.
         */
        width?: any;
        /**
         * Gets or sets the column visibility.
         */
        visible?: boolean;
        /**
         * Gets or sets the column style.
         *
         * The property defines the style for all cells in the column,
         * and can be overridden by the specific cell styles.
         */
        style?: IWorkbookStyle;
        /**
         * Gets or sets a value indicating whether the column width is
         * automatically adjusted to fit the content of its cells.
         */
        autoWidth?: boolean;
    }
    /**
     * Represents the Workbook Object Model row definition.
     */
    interface IWorkbookRow {
        /**
         * Gets or sets the row height in device-independent (1/96th inch) pixels.
         *
         * If height is not specified, then the default height is applied.
         */
        height?: number;
        /**
         * Gets or sets the row visibility.
         */
        visible?: boolean;
        /**
         * Gets or sets the group level of the row.
         */
        groupLevel?: number;
        /**
         * Gets or sets the row style.
         *
         * The property defines the style for all cells in the row,
         * and can be overridden by the specific cell styles.
         */
        style?: IWorkbookStyle;
        /**
         * TBD: Indicating if the row is in the collapsed outline state.
         */
        collapsed?: boolean;
        /**
         * Gets or sets an array of cells in the row.
         *
         * Each @see:IWorkbookCell object in the array describes a cell at
         * the corresponding position in the row, i.e. cell with index 0
         * pertains to column with index A, cell with index 1 defines
         * cell pertaining to column with index B, and so on. If a certain cell
         * has no definition (empty) in xlsx file, then corresponding array
         * element is undefined for both export and import operations.
         */
        cells?: IWorkbookCell[];
    }
    /**
     * Represents the Workbook Object Model cell definition.
     */
    interface IWorkbookCell {
        /**
         * Gets or sets the cell value.
         *
         * The type of the value can be String, Number, Boolean or Date.
         */
        value?: any;
        /**
         * Indicates whether the cell value is date or not.
         */
        isDate?: boolean;
        /**
         * Cell formula
         */
        formula?: string;
        /**
         * Cell style
         */
        style?: IWorkbookStyle;
        /**
         * Cell colSpan setting
         */
        colSpan?: number;
        /**
         * Cell rowSpan setting
         */
        rowSpan?: number;
        /**
         * The hyperlink of the cell.
         */
        link?: string;
        /**
         * The text runs represent the rich text of cell.
         */
        textRuns?: IWorkbookTextRun[];
    }
    /**
     * Workbook frozen pane definition
     */
    interface IWorkbookFrozenPane {
        /**
         * Gets or sets the number of frozen rows.
         */
        rows: number;
        /**
         * Gets or sets the number of frozen columns.
         */
        columns: number;
    }
    /**
     * Represents an Excel Workbook. This interface is the root of the Excel
     * Workbook Object Model (WOM) which provides a way to define properties
     * and data stored in xlsx file.
     *
     * To create an xlsx file, create a @see:Workbook object and populate them
     * with @see:WorkSheet, @see:WorkbookColumn, @see:WorkbookRow, and @see:WorkbookCell
     * objects.
     *
     * To save xlsx files, use the @see:Workbook.save method which can save the
     * book to a file or return it as a base-64 string.
     *
     * To load existing xlsx files, use the @see:Workbook.load method which will
     * populate the book.
     */
    interface IWorkbook {
        /**
         * Defines an array of Excel Workbook sheets.
         */
        sheets: IWorkSheet[];
        /**
        * Name of the application that generated the file that appears in the file properties.
        */
        application?: string;
        /**
        * Name of the company that generated the file that appears in the file properties.
        */
        company?: string;
        /**
         * Creator of the xlsx file.
         */
        creator?: string;
        /**
         * Creation time of the xlsx file.
         */
        created?: Date;
        /**
         * Last modifier of the xlsx file.
         */
        lastModifiedBy?: string;
        /**
         * Last modified time of the xlsx file.
         */
        modified?: Date;
        /**
         * Index of the active sheet in the xlsx file.
         */
        activeWorksheet?: number;
        /**
         * Styles table of the workbook.
         */
        styles?: IWorkbookStyle[];
        /**
         * The reserved content for the workbook.
         */
        reservedContent?: any;
        /**
         * The array of the defined name items.
         */
        definedNames?: IDefinedName[];
        /**
         * The color of the workbook themes.
         */
        colorThemes?: string[];
    }
    /**
     * Represents the Workbook Object Model style definition used to
     * style Excel cells, columns and rows.
     */
    interface IWorkbookStyle {
        /**
         * Cell value format, defined using Excel format syntax.
         *
         * The description of Excel format syntax can be found
         * <a href="https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4" target="_blank">here</a>.
         *
         * You may use the <b>toXlsxNumberFormat</b> and <b>toXlsxDateFormat</b>
         * static functions of the @see:Workbook class to convert from .Net
         * (@see:Globalize) format to Excel format.
         */
        format?: string;
        /**
         * Defines the base style that this style inherits.
         *
         * This property is applicable for export operations only.
         * The style gets all the properties defined in the base style,
         * and can override or augment them by setting its own properties.
         */
        basedOn?: IWorkbookStyle;
        /**
         * Gets or sets the font properties.
         */
        font?: IWorkbookFont;
        /**
         * Gets or sets the horizontal alignment of a text.
         */
        hAlign?: HAlign;
        /**
         *  Gets or sets the vertical alignment of a text.
         */
        vAlign?: VAlign;
        /**
         * Text indent.
         * It is an integer value, where an increment of 1 represents 3 spaces.
         */
        indent?: number;
        /**
         * Cell outline setting.
         */
        borders?: IWorkbookBorder;
        /**
         * Cells background.
         */
        fill?: IWorkbookFill;
        /**
         * Word wrap setting.
         */
        wordWrap?: boolean;
    }
    /**
     * Represents the Workbook Object Model font definition.
     */
    interface IWorkbookFont {
        /**
         * Gets or sets the font family name.
         */
        family?: string;
        /**
         * Gets or sets the font size in device-independent (1/96th inch) pixels.
         */
        size?: number;
        /**
         * Gets or sets a value indicating whether this font is bold.
         */
        bold?: boolean;
        /**
         * Gets or sets a value indicating whether this font has the italic style applied.
         */
        italic?: boolean;
        /**
         * Gets or sets a value indicating whether this font is underlined.
         */
        underline?: boolean;
        /**
         * Gets or sets the font color.
         *
         * For export, the color can be specified in any valid HTML format like
         * 6-character dash notation or rgb/rgba/hsl/hsla functional form. In case
         * of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character
         * dash notation, for example, "#afbfcf".
         */
        color?: string;
    }
    /**
     * Workbook cell outline definition.
     */
    interface IWorkbookBorder {
        /**
         * Top border setting.
         */
        top?: IWorkbookBorderSetting;
        /**
         * Bottom border setting.
         */
        bottom?: IWorkbookBorderSetting;
        /**
         * Left border setting.
         */
        left?: IWorkbookBorderSetting;
        /**
         * Right border setting.
         */
        right?: IWorkbookBorderSetting;
        /**
         * Diagonal border setting.
         */
        diagonal?: IWorkbookBorderSetting;
    }
    /**
     * Border style definition
     */
    interface IWorkbookBorderSetting {
        /**
         * Border color.
         *
         * For export, the color can be specified in any valid HTML format like
         * 6-character dash notation or rgb/rgba/hsl/hsla functional form. In case
         * of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character
         * dash notation, for example, "#afbfcf".
         */
        color?: string;
        /**
         * Border type.
         */
        style?: BorderStyle;
    }
    /**
     * Represents the Workbook Object Model background fill definition.
     */
    interface IWorkbookFill {
        /**
         * Gets or sets the fill color.
         *
         * For export, the color can be specified in any valid HTML format like
         * 6-character dash notation or rgb/rgba/hsl/hsla functional form. In case
         * of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character
         * dash notation, for example, "#afbfcf".
         */
        color?: string;
    }
    interface ITableIndex {
        row: number;
        col: number;
        absCol: boolean;
        absRow: boolean;
    }
    /**
     * Defines a cell index with zero-based row and column components,
     * as well as the properties indicating whether the index component
     * is absolute (for example: "$D") or relative (for example: "D").
     *
     * It is not related with the WorkbookTable any more.
     * It is a zero-based row/column indices pair that stores the converted Excel's alphanumeric cell.
     */
    interface ITableAddress {
        /**
         * A zero-based row index.
         */
        row: number;
        /**
         * A zero-based column index.
         */
        col: number;
        /**
        * Indicates whether the original column index is absolute (for example: "$D")
        * or relative (for example: "D").
        */
        absCol: boolean;
        /**
        * Indicates whether the original row index is absolute (for example: "$15")
        * or relative (for example: "15").
        */
        absRow: boolean;
    }
    /**
     * Represents the Defined name definition.
     */
    interface IDefinedName {
        /**
         * The name of the defined name item.
         */
        name: string;
        /**
         * The value of the defined name item.
         * The value could be a formula, a string constant or a cell range.
         * For e.g. "Sum(1, 2, 3)", "test" or "sheet1!A1:B2"
         */
        value: any;
        /**
         * Indicates the defined name item works in which sheet.
         * If omitted, the defined name item works in workbook.
         */
        sheetName?: string;
    }
    /**
     * Represents the Table definition.
     */
    interface IWorkbookTable {
        /**
         * The name of the table.  It is used to reference the table programmatically.
         */
        name: string;
        /**
         * The range on the relevant sheet that the table occupies expressed using A1 style referencing. i.e. "A1:D4".
         * The reference shall include the totals row if it is shown.
         */
        range: string;
        /**
         * Indicates whether show the header row for the table.
         */
        showHeaderRow: boolean;
        /**
         * Indicates whether show the total row for the table.
         */
        showTotalRow: boolean;
        /**
         * Indicating whether banded column formatting is applied.
         */
        showBandedColumns: boolean;
        /**
         * The table style to use with the table.
         */
        style: IWorkbookTableStyle;
        /**
         * Indicating whether banded row formatting is applied.
         */
        showBandedRows: boolean;
        /**
         * Indicating whether the first column in the table should have the style applied.
         */
        alterFirstColumn: boolean;
        /**
         * Indicating whether the last column in the table should have the style applied.
         */
        alterLastColumn: boolean;
        /**
         * The columns of the table.
         */
        columns: IWorkbookTableColumn[];
    }
    /**
     * Represents the Table Column definition.
     */
    interface IWorkbookTableColumn {
        /**
         * The name of the table column. It is referenced through functions.
         */
        name: string;
        /**
         * The string to show in the totals row cell for the column.
         */
        totalRowLabel?: string;
        /**
         * The function to show in the totals row cell for this column.
         */
        totalRowFunction?: string;
        /**
         * Indicating whether show filter button for the column.
         */
        showFilterButton?: boolean;
    }
    /**
     * Represents the Table Style definition.
     */
    interface IWorkbookTableStyle {
        /**
         * The name of the table style.
         */
        name: string;
        /**
         * The whole table style.
         */
        wholeTableStyle?: IWorkbookTableCommonStyle;
        /**
         * The first column stripe style.
         */
        firstBandedColumnStyle?: IWorkbookTableBandedStyle;
        /**
         * The second column stripe style.
         */
        secondBandedColumnStyle?: IWorkbookTableBandedStyle;
        /**
         * The first row stripe style.
         */
        firstBandedRowStyle?: IWorkbookTableBandedStyle;
        /**
         * The second row stripe style.
         */
        secondBandedRowStyle?: IWorkbookTableBandedStyle;
        /**
         * The first column style.
         */
        firstColumnStyle?: IWorkbookTableCommonStyle;
        /**
         * The last column style.
         */
        lastColumnStyle?: IWorkbookTableCommonStyle;
        /**
         * The header row style.
         */
        headerRowStyle?: IWorkbookTableCommonStyle;
        /**
         * The total row style.
         */
        totalRowStyle?: IWorkbookTableCommonStyle;
        /**
         * The first cell style in the header row.
         */
        firstHeaderCellStyle?: IWorkbookTableCommonStyle;
        /**
         * The last cell style in the header row.
         */
        lastHeaderCellStyle?: IWorkbookTableCommonStyle;
        /**
         * The first cell style in the total row.
         */
        firstTotalCellStyle?: IWorkbookTableCommonStyle;
        /**
         * The last cell style in the total row.
         */
        lastTotalCellStyle?: IWorkbookTableCommonStyle;
    }
    /**
     * Represents the Table Common Style definition.
     */
    interface IWorkbookTableCommonStyle extends IWorkbookStyle {
        /**
         * Table borders setting.
         */
        borders?: IWorkbookTableBorder;
    }
    /**
     * Represents the Table Stripe Style definition.
     */
    interface IWorkbookTableBandedStyle extends IWorkbookTableCommonStyle {
        /**
         * Number of rows or columns in a single band of striping.
         */
        size?: number;
    }
    /**
     * Table border definition.
     */
    interface IWorkbookTableBorder extends IWorkbookBorder {
        /**
         * Vertical border setting.
         */
        vertical?: IWorkbookBorderSetting;
        /**
         * Horizontal border setting.
         */
        horizontal?: IWorkbookBorderSetting;
    }
    /**
     * Piece of text run for rich text.
     */
    interface IWorkbookTextRun {
        /**
         * The font of the text run.
         */
        font?: IWorkbookFont;
        /**
         * The text of the text run.
         */
        text: string;
    }
    /**
     * Defines the Workbook Object Model horizontal text alignment.
     */
    enum HAlign {
        /** Alignment depends on the cell value type. */
        General = 0,
        /** Text is aligned to the left. */
        Left = 1,
        /** Text is centered. */
        Center = 2,
        /** Text is aligned to the right. */
        Right = 3,
        /** Text is replicated to fill the whole cell width. */
        Fill = 4,
        /** Text is justified. */
        Justify = 5,
    }
    /**
     * Vertical alignment
     */
    enum VAlign {
        /** Top vertical alignment */
        Top = 0,
        /** Center vertical alignment */
        Center = 1,
        /** Bottom vertical alignment */
        Bottom = 2,
        /** Justified vertical alignment */
        Justify = 3,
    }
    /**
     * Border line style
     */
    enum BorderStyle {
        /** No border */
        None = 0,
        /** Thin border */
        Thin = 1,
        /** Medium border */
        Medium = 2,
        /** Dashed border */
        Dashed = 3,
        /** Dotted border */
        Dotted = 4,
        /** Thick line border */
        Thick = 5,
        /** Double line border */
        Double = 6,
        /** Hair line border */
        Hair = 7,
        /** Medium dashed border */
        MediumDashed = 8,
        /** Thin dash dotted border */
        ThinDashDotted = 9,
        /** Medium dash dotted border */
        MediumDashDotted = 10,
        /** Thin dash dot dotted border */
        ThinDashDotDotted = 11,
        /** Medium dash dot dotted border */
        MediumDashDotDotted = 12,
        /** Slanted medium dash dotted border */
        SlantedMediumDashDotted = 13,
    }
}

