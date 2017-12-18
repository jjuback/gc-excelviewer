/*
    *
    * Wijmo Library 5.20173.380
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
/**
 * Extension that defines the @see:FlexGridXlsxConverter class that provides
 * client-side Excel xlsx file save/load capabilities for the
 * @see:FlexGrid control.
 */
declare module wijmo.grid.xlsx {
    /**
     * This class provides static <b>load</b> and <b>save</b> methods for loading
     * and saving @see:FlexGrid controls from and to Excel xlsx files.
     */
    class FlexGridXlsxConverter {
        /**
         * Save the @see:FlexGrid instance to the @see:Workbook instance.
         * This method works with JSZip 2.5.
         *
         * For example:
         * <pre>// This sample exports FlexGrid content to an xlsx file.
         * // click.
         * &nbsp;
         * // HTML
         * &lt;button
         *     onclick="saveXlsx('FlexGrid.xlsx')"&gt;
         *     Save
         * &lt;/button&gt;
         * &nbsp;
         * // JavaScript
         * function saveXlsx(fileName) {
         *     // Save the flexGrid to xlsx file.
         *     wijmo.grid.xlsx.FlexGridXlsxConverter.save(flexGrid,
         *             { includeColumnHeaders: true }, fileName);
         * }</pre>
         *
         * @param grid FlexGrid that will be saved.
         * @param options @see:IFlexGridXlsxOptions object specifying the save options.
         * @param fileName Name of the file that will be generated.
         * @return A @see:Workbook object that can be used to customize the workbook
         * before saving it (with the Workbook.save method).
         */
        static save(grid: FlexGrid, options?: IFlexGridXlsxOptions, fileName?: string): wijmo.xlsx.Workbook;
        /**
         * Asynchronously saves the content of a @see:FlexGrid to a file.
         *
         * This method requires JSZip 3.0.
         *
         * @param grid FlexGrid that will be saved.
         * @param options @see:IFlexGridXlsxOptions object specifying the save options.
         * @param fileName Name of the file that will be generated.
         * @param onSaved Callback invoked when the method finishes executing.
         * The callback provides access to the content of the saved workbook
         * (encoded as a base-64 string and passed as a parameter to the callback).
         * @param onError Callback invoked when there are errors saving the file.
         * The error is passed as a parameter to the callback.
         *
         * For example:
         * <pre>
         * wijmo.grid.xlsx.FlexGridXlsxConverter.saveAsync(flexGrid,
         *     { includeColumnHeaders: true }, // options
         *     'FlexGrid.xlsx', // filename
         *     function (base64) { // onSaved
         *         // User can access the base64 string in this callback.
         *         document.getElementByID('export').href = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' + 'base64,' + base64;
         *     },
         *     function (reason) { // onError
         *         // User can catch the failure reason in this callback.
         *         console.log('The reason of save failure is ' + reason);
         *     }
         *  );</pre>
         */
        static saveAsync(grid: FlexGrid, options?: IFlexGridXlsxOptions, fileName?: string, onSaved?: (base64: string) => any, onError?: (reason?: any) => any): wijmo.xlsx.Workbook;
        /**
         * Loads a @see:Workbook instance or a Blob object containing xlsx
         * file content to the @see:FlexGrid instance.
         * This method works with JSZip 2.5.
         *
         * For example:
         * <pre>// This sample opens an xlsx file chosen through Open File
         * // dialog and fills FlexGrid with the content of the first
         * // sheet.
         * &nbsp;
         * // HTML
         * &lt;input type="file"
         *     id="importFile"
         *     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
         * /&gt;
         * &lt;div id="flexHost"&gt;&lt;/&gt;
         * &nbsp;
         * // JavaScript
         * var flexGrid = new wijmo.grid.FlexGrid("#flexHost"),
         *     importFile = document.getElementById('importFile');
         * &nbsp;
         * importFile.addEventListener('change', function () {
         *     loadWorkbook();
         * });
         * &nbsp;
         * function loadWorkbook() {
         *     var reader,
         *         file = importFile.files[0];
         *     if (file) {
         *         reader = new FileReader();
         *         reader.onload = function (e) {
         *             wijmo.grid.xlsx.FlexGridXlsxConverter.load(flexGrid, reader.result,
         *                 { includeColumnHeaders: true });
         *         };
         *         reader.readAsArrayBuffer(file);
         *     }
         * }</pre>
         *
         * @param grid @see:FlexGrid that loads the @see:Workbook object.
         * @param workbook A @see:Workbook, Blob, base-64 string, or ArrayBuffer
         * containing the xlsx file content.
         * @param options @see:IFlexGridXlsxOptions object specifying the load options.
         */
        static load(grid: FlexGrid, workbook: any, options?: IFlexGridXlsxOptions): void;
        /**
         * Asynchronously loads a @see:Workbook or a Blob representing an xlsx file
         * into a @see:FlexGrid.
         *
         * This method requires JSZip 3.0.
         *
         * @param grid @see:FlexGrid that loads the @see:Workbook object.
         * @param workbook @see:Workbook, Blob, base-64 string, or ArrayBuffer
         * representing the xlsx file content.
         * @param options @see:IFlexGridXlsxOptions object specifying the load options.
         * @param onLoaded Callback invoked when the method finishes executing.
         * The callback provides access to the workbook that was loaded
         * (passed as a parameter to the callback).
         * @param onError Callback invoked when there are errors saving the file.
         * The error is passed as a parameter to the callback.
         *
         * For example:
         * <pre>
         * wijmo.grid.xlsx.FlexGridXlsxConverter.loadAsync(grid, blob, null, function (workbook) {
         *      // user can access the loaded workbook instance in this callback.
         *      var app = worksheet.application ;
         *      ...
         * }, function (reason) {
         *      // User can catch the failure reason in this callback.
         *      console.log('The reason of save failure is ' + reason);
         * });
         * </pre>
         */
        static loadAsync(grid: FlexGrid, workbook: any, options?: IFlexGridXlsxOptions, onLoaded?: (workbook: wijmo.xlsx.Workbook) => void, onError?: (reason?: any) => any): void;
        private static _saveFlexGridToWorkbook(grid, options?);
        private static _loadToFlexGrid(grid, workbook, options);
        private static _parseFlexGridRowToSheetRow(panel, workbookRow, rowIndex, startColIndex, columnSettings, includeCellStyles, fakeCell, isGroupRow, groupLevel, includeColumns, formatItem?);
        static _parseCellStyle(cellStyle: any, isTableStyle?: boolean): wijmo.xlsx.IWorkbookStyle;
        private static _parseBorder(cellStyle, isTableBorder);
        private static _parseEgdeBorder(cellStyle, edge);
        static _parseBorderStyle(borderStyle: wijmo.xlsx.BorderStyle, edge: string, cellStyle: any): void;
        private static _parseToExcelFontFamily(fontFamily);
        private static _parseToExcelFormula(formula, isDate);
        private static _getColumnSetting(column, defaultWidth);
        private static _toExcelHAlign(value);
        private static _getColumnCount(sheetData);
        private static _getRowCount(sheetData, columnCnt);
        private static _numAlpha(i);
        private static _getItemType(item);
        private static _setColumn(columns, columnIndex, item);
        private static _getItemValue(item);
        static _getCellStyle(panel: GridPanel, fakeCell: HTMLDivElement, r: number, c: number): any;
        private static _extend(dst, src);
        private static _checkParentCollapsed(groupCollapsedSettings, groupLevel);
        private static _getColSpan(p, mergedRange, includeColumns);
    }
    /**
     * Represents arguments of the IFlexGridXlsxOptions.formatItem callback.
     */
    class XlsxFormatItemEventArgs extends wijmo.grid.CellRangeEventArgs {
        private _cell;
        private _patternCell;
        private _xlsxCell;
        constructor(panel: GridPanel, rng: CellRange, cell: HTMLDivElement, patternCell: HTMLDivElement, xlsxCell: wijmo.xlsx.IWorkbookCell);
        /**
         * If IFlexGridXlsxOptions.includeCellStyles is set to true then contains a
         * reference to the element that represents the formatted grid cell; otherwise, a null value.
         *
         */
        readonly cell: HTMLElement;
        /**
         * Contains an exporting cell representation. Initially it contains a default cell representation created
         * by FlexGrid export, and can be modified by the event handler to customize its final content. For example,
         * the xlsxCell.value property can be updated to modify a cell content, xlsxCell.style to modify cell's style,
         * and so on.
         */
        xlsxCell: wijmo.xlsx.IWorkbookCell;
        /**
         * Returns a cell with a custom formatting applied (formatItem event, cell templates).
         * This method is useful when export of custom formatting is disabled
         * (IFlexGridXlsxOptions.includeCellStyles=false), but you need
         * to export a custom content and/or style for a certain cells.
         */
        getFormattedCell(): HTMLElement;
    }
    /**
     * Defines additional worksheet properties that can be accesses via the dynamic <b>wj_sheetInfo</b> property
     * of the @see:FlexGrid instance.
     */
    interface IExtendedSheetInfo {
        /**
         * The sheet name.
         */
        name: string;
        /**
         * Sheet visibility.
         */
        visible: boolean;
        /**
         * Styled cells in the sheet
         */
        styledCells: any;
        /**
         * Merged ranges in the sheet
         */
        mergedRanges: any;
        /**
         * Contains an array of font names used in the sheet.
         */
        fonts: string[];
        /**
         * The name of tables refered in this worksheet.
         */
        tableNames: string[];
    }
    /**
     * FlexGrid Xlsx conversion options
     */
    interface IFlexGridXlsxOptions {
        /**
         * The index of the sheet in the workbook.  It indicates to import which sheet.
         */
        sheetIndex?: number;
        /**
         * The name of the sheet.
         * It indicates to import which sheet for importing.  If the sheetIndex and sheetName are both setting, the priority of sheetName is higher than sheetIndex.
         * It sets the name of worksheet for exporting.
         */
        sheetName?: string;
        /**
         * The visible of the sheet.
         */
        sheetVisible?: boolean;
        /**
         * Indicates whether to include column headers as first rows in the generated xlsx file.
         */
        includeColumnHeaders?: boolean;
        /**
         * Indicates whether to include column headers as first rows in the generated xlsx file.
         */
        includeRowHeaders?: boolean;
        /**
         * Indicates whether cells styling should be included in the generated xlsx file.
         */
        includeCellStyles?: boolean;
        /**
         * Index or name of the active sheet in the xlsx file.
         */
        activeWorksheet?: any;
        /**
         * A callback to indicate which columns of FlexGrid need be included or omitted during exporting.
         *
         * For example:
         * <pre>// This sample excludes the 'country' column from export.
         * &nbsp;
         * // JavaScript
         * wijmo.grid.xlsx.FlexGridXlsxConverter.save(grid, {
         *   includeColumns: function(column) {
         *      return column.binding !== 'country';
         *   }
         * }</pre>
         */
        includeColumns?: (column: Column) => boolean;
        /**
         * An optional callback which is called for every exported cell and allows to perform transformations
         * of exported cell value and style.
         * The callback is called irrespectively of the 'includeCellStyles' property value.
         */
        formatItem?: (args: XlsxFormatItemEventArgs) => void;
    }
}

