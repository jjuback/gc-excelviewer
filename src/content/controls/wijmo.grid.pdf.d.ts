/*
    *
    * Wijmo Library 5.20183.567
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
* Defines the @see:FlexGridPdfConverter class used to export the @see:FlexGrid to PDF.
*/
declare module wijmo.grid.pdf {
    /**
     * Specifies how the grid content should be scaled to fit the page.
     */
    enum ScaleMode {
        /**
         * Render the grid in actual size, breaking into pages as needed.
         */
        ActualSize = 0,
        /**
         * Scale the grid, so that it fits the page width.
         */
        PageWidth = 1,
        /**
         * Scale the grid, so that it fits on a single page.
         */
        SinglePage = 2,
    }
    /**
     * Specifies whether the whole grid or just a section should be rendered.
     */
    enum ExportMode {
        /**
         * Exports all the data from grid.
         */
        All = 0,
        /**
         * Exports the current selection only.
         */
        Selection = 1,
    }
    /**
     * Represents the look and feel of a cell.
     */
    interface ICellStyle {
        /**
         * Represents the background color of a cell.
         */
        backgroundColor?: string;
        /**
         * Represents the border color of a cell.
         */
        borderColor?: string;
        /**
         * Represents the text color of a cell.
         */
        color?: string;
        /**
         * Represents the font of a cell.
         */
        font?: any;
    }
    /**
     * Represents the look and feel of the @see:FlexGrid being exported.
     */
    interface IFlexGridStyle {
        /**
         * Specifies the cell style applied to cells within a @see:FlexGrid.
         */
        cellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to odd-numbered rows of the @see:FlexGrid.
         */
        altCellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to grouped rows of the @see:FlexGrid.
         */
        groupCellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to row headers and column headers of
         * the @see:FlexGrid.
         */
        headerCellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to column footers of the @see:FlexGrid.
         */
        footerCellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to cells of the @see:FlexGrid that contain
         * validation errors if the @see:FlexGrid.showErrors property is enabled.
         */
        errorCellStyle?: ICellStyle;
    }
    /**
     * Represents the settings used by the @see:FlexGridPdfConverter.draw and
     * @see:FlexGridPdfConverter.drawToPosition methods.
     */
    interface IFlexGridDrawSettings {
        /**
         * Indicates whether custom cell content and style should be evaluated and exported.
         * If set to true then export logic will retrieve cell content using cell.textContent property,
         * and cell style using getComputedStyle(cell).
         * Default is 'undefined' (i.e. false).
         */
        customCellContent?: boolean;
        /**
         * Indicates whether to draw detail rows.
         * If set to false then the detail rows will be ignored; otherwise the detail rows will be drawn empty
         * and their content should be drawn manually using formatItem event handler.
         * Default is 'undefined' (i.e. false).
         */
        drawDetailRows?: boolean;
        /**
         * Represents an array of custom fonts that will be embedded into the document.
         *
         * This sample illustrates how to setup the FlexGridPdfConverter to use two custom
         * fonts, Cuprum-Bold.ttf and Cuprum-Regular.ttf. The first one is applied to the
         * header cells only, while the second one is applied to all the remaining cells.
         *
         * <pre>
         * wijmo.grid.pdf.FlexGridPdfConverter.export(flex, fileName, {
         *    embeddedFonts: [{
         *       source: 'resources/ttf/Cuprum-Bold.ttf',
         *       name: 'cuprum',
         *       style: 'normal',
         *       weight: 'bold'
         *    }, {
         *       source: 'resources/ttf/Cuprum-Regular.ttf',
         *       name: 'cuprum',
         *       style: 'normal',
         *       weight: 'normal'
         *    }],
         *    styles: {
         *       cellStyle: {
         *          font: {
         *             family: 'cuprum'
         *          }
         *       },
         *       headerCellStyle: {
         *          font: {
         *             weight: 'bold'
         *          }
         *       }
         *    }
         * });
         * </pre>
         */
        embeddedFonts?: wijmo.pdf.IPdfFontFile[];
        /**
         * Determines the export mode.
         */
        exportMode?: ExportMode;
        /**
         * An optional callback function called for every exported cell that allows to perform transformations of exported
         * cell value and style, or perform a custom drawing.
         *
         * The function accepts the @see:PdfFormatItemEventArgs class instance as the first argument.
         *
         * In case of custom drawing the @see:PdfFormatItemEventArgs.cancel property should be set to true to cancel the default cell content drawing, and
         * the @see:PdfFormatItemEventArgs.cancelBorders property should be set to true to cancel the default cell borders drawing.
         *
         * <pre>
         * wijmo.grid.pdf.FlexGridPdfConverter.export(flex, fileName, {
         *    formatItem: function(args) {
         *        // Change the background color of the regular cells of "Country" column.
         *        if (args.panel.cellType === wijmo.grid.CellType.Cell && args.panel.columns[args.col].binding === "country") {
         *            args.style.backgroundColor = 'blue';
         *        }
         *    }
         * });</pre>
         */
        formatItem?: Function;
        /**
         * Determines the maximum number of pages to export.
         */
        maxPages?: number;
        /**
         * Indicates whether merged values should be repeated across pages when the merged range
         * is split on multiple pages.
         */
        repeatMergedValuesAcrossPages?: boolean;
        /**
         * Indicates whether star-sized columns widths should be recalculated against the PDF page
         * width instead of using the grid's width.
         */
        recalculateStarWidths?: boolean;
        /**
         * Represents the look and feel of an exported @see:FlexGrid.
         */
        styles?: IFlexGridStyle;
        /**
         * An optional function that gives feedback about the progress of a task.
         * The function accepts a single argument, a number changing from 0.0 to 1.0, where the value of 0.0 indicates that
         * the operation has just begun and the value of 1.0 indicates that the operation has completed.
         *
         * <pre>
         * wijmo.grid.pdf.FlexGridPdfConverter.export(flex, fileName, {
         *    progress: function(value) {
         *        // Handle the progress here.
         *    }
         * });</pre>
         */
        progress?: Function;
        _progressMax?: number;
    }
    /**
     * Represents the settings used by the @see:FlexGridPdfConverter.export method.
     */
    interface IFlexGridExportSettings extends IFlexGridDrawSettings {
        /**
         * Determines the scale mode.
         */
        scaleMode?: ScaleMode;
        /**
         * Represents the options of the underlying @see:PdfDocument.
         */
        documentOptions?: any;
    }
    interface _IFlexGridAdapter {
        columns: _IColumnCollection;
        rows: _IRowCollection;
        bottomLeftCells: _IGridPanel;
        cells: _IGridPanel;
        columnFooters: _IGridPanel;
        columnHeaders: _IGridPanel;
        rowHeaders: _IGridPanel;
        topLeftCells: _IGridPanel;
        treeIndent: number;
        getSelection(): _ICellRange[];
        getComputedStyle(cell: HTMLElement): CSSStyleDeclaration;
        getMergedRange(p: _IGridPanel, r: number, c: number): _ICellRange;
        showColumnHeader: boolean;
        showRowHeader: boolean;
        showColumnFooter: boolean;
        alignMergedTextToTheTopRow(panel: _IGridPanel): boolean;
        getCell(panel: _IGridPanel, row: number, column: number): HTMLElement;
        getCellContent(panel: _IGridPanel, row: _IRow, col: _IColumn, colIdx: number): string;
        getCellStyle(panel: _IGridPanel, row: _IRow, col: _IColumn): ICellStyle;
        getColumn(panel: _IGridPanel, row: number, col: number): _IColumn;
        isAlternatingRow(row: _IRow): boolean;
        isBooleanCell(panel: _IGridPanel, row: _IRow, col: _IColumn): boolean;
        isGroupRow(row: _IRow): boolean;
        isNewRow(row: _IRow): boolean;
        isDetailRow(row: _IRow): boolean;
        isExpandableGroupRow(row: _IRow): boolean;
    }
    interface _IGridPanel {
        columns: _IColumnCollection;
        cellType: number;
        rows: _IRowCollection;
        height: number;
        width: number;
    }
    interface _IColumnCollection {
        [index: number]: _IColumn;
        firstVisibleIndex: number;
        length: number;
    }
    interface _IColumn {
        aggregate: number;
        dataType: number;
        index: number;
        isVisible: boolean;
        renderWidth: number;
        wordWrap: boolean;
        getAlignment(): string;
    }
    interface _IRowCollection {
        [index: number]: _IRow;
        length: number;
        maxGroupLevel: number;
    }
    interface _IRow {
        index: number;
        isVisible: boolean;
        level?: number;
        renderHeight: number;
    }
    enum _CellType {
        None = 0,
        Cell = 1,
        ColumnHeader = 2,
        RowHeader = 3,
        TopLeft = 4,
        ColumnFooter = 5,
        BottomLeft = 6,
    }
    /**
     * Represents arguments of the IFlexGridDrawSettings.formatItem callback.
     */
    class PdfFormatItemEventArgs extends CancelEventArgs {
        private _p;
        private _rng;
        private _data;
        private _canvas;
        private _cell;
        private _clientRect;
        private _contentRect;
        private _textTop;
        private _style;
        private _getFormattedCell;
        /**
         * Initializes a new instance of the @see:PdfFormatItemEventArgs class.
         *
         * @param p @see:GridPanel that contains the range.
         * @param rng Range of cells affected by the event.
         * @param cell Element that represents the grid cell to be rendered.
         * @param canvas Canvas to perform the custom painting on.
         * @param clientRect    Object that represents the client rectangle of the grid cell to be rendered in canvas coordinates.
         * @param contentRect Object that represents the content rectangle of the grid cell to be rendered in canvas coordinates.
         * @param textTop Object that represents the top position of the text in canvas coordinates.
         * @param style Object that represents the style of the grid cell to be rendered.
         * @param getFormattedCell Callback function that should return the grid cell when the getFormattedCell method is called.
         */
        constructor(p: any, rng: any, cell: HTMLElement, canvas: wijmo.pdf.PdfPageArea, clientRect: Rect, contentRect: Rect, textTop: number, style: ICellStyle, getFormattedCell?: Function);
        /**
         * Gets the @see:GridPanel affected by this event.
         */
        readonly panel: GridPanel;
        /**
         * Gets the @see:CellRange affected by this event.
         */
        readonly range: CellRange;
        /**
         * Gets the row affected by this event.
         */
        readonly row: number;
        /**
         * Gets the column affected by this event.
         */
        readonly col: number;
        /**
         * Gets or sets the data associated with the event.
         */
        data: any;
        /**
        * Gets or sets a value that indicates that default cell borders drawing should be canceled.
        */
        cancelBorders: boolean;
        /**
        * Gets the canvas to perform the custom painting on.
        */
        readonly canvas: wijmo.pdf.PdfPageArea;
        /**
         * Gets a reference to the element that represents the grid cell being rendered.
         * If IFlexGridDrawSettings.customCellContent is set to true then contains
         * reference to the element that represents the formatted grid cell; otherwise, a null value.
         */
        readonly cell: HTMLElement;
        /**
         * Gets the client rectangle of the cell being rendered in canvas coordinates.
         */
        readonly clientRect: Rect;
        /**
         * Gets the content rectangle of the cell being rendered in canvas coordinates.
         */
        readonly contentRect: Rect;
        /**
         * Returns a reference to the element that represents the grid cell being rendered.
         * This method is useful when export of custom formatting is disabled, but you need
         * to export custom content for certain cells.
         */
        getFormattedCell(): HTMLElement;
        /**
         * Gets an object that represents the style of the cell being rendered.
         * If IFlexGridDrawSettings.customCellContent is set to true then the style is inferred
         * from the cell style; othwerwise it contains a combination of the IFlexGridDrawSettings.styles export
         * setting, according to the row type of exported cell.
         */
        readonly style: wijmo.grid.pdf.ICellStyle;
        /**
         * Gets the value that represents the top position of the text of the cell being rendered in canvas coordinates.
         */
        readonly textTop: number;
    }
    function _merge(dst: any, src: any, overwrite?: boolean): any;
    /**
     * Provides a functionality to export the @see:FlexGrid to PDF.
     */
    class _FlexGridPdfConverterCore {
        private static BorderWidth;
        private static DefFont;
        static DefaultDrawSettings: IFlexGridDrawSettings;
        /**
         * Draws the @see:FlexGrid to an existing @see:PdfDocument instance at the
         * specified coordinates.
         *
         * If width is not specified, then grid will be rendered in actual size
         * without any page breaks.
         * If height is not specified, then grid will be scaled to fit the width
         * without any page breaks.
         * If both, width and height are determined, then grid will be scaled to fit
         * the specified rectangle without any page breaks.
         *
         * <pre>
         * var doc = new wijmo.pdf.PdfDocument({
         *    ended: function (sender, args) {
         *       wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
         *    }
         * });
         *
         * wijmo.grid.pdf.FlexGridPdfConverter.drawToPosition(grid, doc, new wijmo.Point(0, 0), null, null, {
         *    maxPages: 10,
         *    styles: {
         *       cellStyle: {
         *          backgroundColor: '#ffffff',
         *          borderColor: '#c6c6c6'
         *       },
         *       headerCellStyle: {
         *          backgroundColor: '#eaeaea'
         *       }
         *    }
         * });
         * </pre>
         *
         * @param flex The @see:FlexGrid instance to export.
         * @param doc The @see:PdfDocument instance to draw in.
         * @param point The position to draw at, in points.
         * @param width The width of the drawing area in points.
         * @param height The height of the drawing area in points.
         * @param settings The draw settings.
         */
        static draw(flex: _IFlexGridAdapter, doc: wijmo.pdf.PdfDocument, point?: Point, width?: number, height?: number, settings?: IFlexGridExportSettings): void;
        static _applyDefaultDrawSettings(settings: any): IFlexGridDrawSettings;
        private static _drawInternal(flex, doc, point, width, height, settings);
        private static _getCellsCount(flex, settings, pages);
        private static _getRowsToRender(flex, settings);
        private static _getScaleFactor(gr, scaleMode, rect);
        private static _getPages(gr, ranges, rect, settings, isPositionedMode, scaleFactor);
    }
    interface _ICellRange {
        row: number;
        col: number;
        row2: number;
        col2: number;
        bottomRow: number;
        rightCol: number;
        leftCol: number;
        topRow: number;
        isValid: boolean;
        getRenderSize(panel: _IGridPanel): Size;
        clone(): _ICellRange;
    }
    class _CellRange implements _ICellRange {
        private _row;
        private _col;
        private _row2;
        private _col2;
        firstVisibleRow: number;
        visibleRowsCount: number;
        constructor(panel: _IGridPanel, cr: _ICellRange);
        constructor(panel: _IGridPanel, row: number, col: number, row2: number, col2: number);
        row: number;
        col: number;
        row2: number;
        col2: number;
        readonly topRow: number;
        readonly bottomRow: number;
        readonly leftCol: number;
        readonly rightCol: number;
        readonly rowSpan: number;
        readonly isValid: boolean;
        copyFrom(cr: _CellRange): void;
        clone(): _CellRange;
        getRenderSize(p: _IGridPanel): Size;
        setRange(r?: number, c?: number, r2?: number, c2?: number): void;
    }
}
declare module wijmo.grid.pdf {
    function _removeFakeCell(): void;
    /**
    * Provides a functionality to export the @see:FlexGrid to PDF.
    *
    * The example below shows how you can use a @see:FlexGridPdfConverter to
    * export a @see:FlexGrid to PDF:
    *
    * @fiddle:equxqkyt
    */
    class FlexGridPdfConverter {
        static _DefaultExportSettings: IFlexGridExportSettings;
        /**
        * Draws the @see:FlexGrid to an existing @see:PdfDocument at the
        * (0, @wijmo.pdf.PdfDocument.y) coordinates.
        *
        * If width is not specified, then grid will be rendered in actual size,
        * breaking into pages as needed. If height is not specified, then grid will be
        * scaled to fit the width, breaking into pages vertically as needed.
        * If both, width and height are determined, then grid will be scaled to fit
        * the specified rectangle without any page breaks.
        *
        * <pre>
        * var doc = new wijmo.pdf.PdfDocument({
        *    ended: function (sender, args) {
        *       wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
        *    }
        * });
        *
        * wijmo.grid.pdf.FlexGridPdfConverter.draw(grid, doc, null, null, {
        *    maxPages: 10,
        *    styles: {
        *       cellStyle: {
        *          backgroundColor: '#ffffff',
        *          borderColor: '#c6c6c6'
        *       },
        *       headerCellStyle: {
        *          backgroundColor: '#eaeaea'
        *       }
        *    }
        * });
        * </pre>
        *
        * @param flex The @see:FlexGrid instance to export.
        * @param doc The @see:PdfDocument instance to draw in.
        * @param width The width of the drawing area in points.
        * @param height The height of the drawing area in points.
        * @param settings The draw settings.
        */
        static draw(flex: any, doc: wijmo.pdf.PdfDocument, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
        /**
        * Draws the @see:FlexGrid to an existing @see:PdfDocument instance at the
        * specified coordinates.
        *
        * If width is not specified, then grid will be rendered in actual size
        * without any page breaks.
        * If height is not specified, then grid will be scaled to fit the width
        * without any page breaks.
        * If both, width and height are determined, then grid will be scaled to fit
        * the specified rectangle without any page breaks.
        *
        * <pre>
        * var doc = new wijmo.pdf.PdfDocument({
        *    ended: function (sender, args) {
        *       wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
        *    }
        * });
        *
        * wijmo.grid.pdf.FlexGridPdfConverter.drawToPosition(grid, doc, new wijmo.Point(0, 0), null, null, {
        *    maxPages: 10,
        *    styles: {
        *       cellStyle: {
        *          backgroundColor: '#ffffff',
        *          borderColor: '#c6c6c6'
        *       },
        *       headerCellStyle: {
        *          backgroundColor: '#eaeaea'
        *       }
        *    }
        * });
        * </pre>
        *
        * @param flex The @see:FlexGrid instance to export.
        * @param doc The @see:PdfDocument instance to draw in.
        * @param point The position to draw at, in points.
        * @param width The width of the drawing area in points.
        * @param height The height of the drawing area in points.
        * @param settings The draw settings.
        */
        static drawToPosition(flex: any, doc: wijmo.pdf.PdfDocument, point: Point, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
        /**
        * Exports the @see:FlexGrid to PDF.
        *
        * <pre>
        * wijmo.grid.pdf.FlexGridPdfConverter.export(grid, 'FlexGrid.pdf', {
        *    scaleMode: wijmo.grid.pdf.ScaleMode.PageWidth,
        *    maxPages: 10,
        *    styles: {
        *       cellStyle: {
        *          backgroundColor: '#ffffff',
        *          borderColor: '#c6c6c6'
        *       },
        *       headerCellStyle: {
        *          backgroundColor: '#eaeaea'
        *       }
        *    },
        *    documentOptions: {
        *       info: {
        *          title: 'Sample'
        *       }
        *    }
        * });
        * </pre>
        *
        * @param flex The @see:FlexGrid instance to export.
        * @param fileName Name of the file to export.
        * @param settings The export settings.
        */
        static export(flex: FlexGrid, fileName: string, settings?: IFlexGridExportSettings): void;
        static _getFlexGridAdapter(flex: FlexGrid, settings: IFlexGridDrawSettings): _IFlexGridAdapter;
        static _applyDefaultExportSettings(settings: any): IFlexGridExportSettings;
    }
}
declare module wijmo.grid.pdf {
    /**
    * Represents a single item of the @see:IClientData dictionary.
    */
    interface IClientDataItem {
        /**
        * Gets or sets the content for the data item.
        */
        content: any;
        /**
        * Gets or sets the settings for the data item.
        */
        settings: any;
    }
    interface _IFlexGridClientDataItem extends IClientDataItem {
        content: _IFlexGridAdapter;
        settings: IFlexGridExportSettings;
        isGrid?: boolean;
        progressMessaging?: boolean;
    }
    /**
    * Represents a dictionary of {name: value} pairs which contains client data.
    */
    interface IClientData {
        [name: string]: IClientDataItem;
    }
    /**
     * Provides arguments for the callback parameter of the @see:PdfWebWorkerClient.exportGrid and @see:PdfWebWorkerClient.export methods.
     */
    class PdfWebWorkerExportDoneEventArgs extends EventArgs {
        private _blob;
        private _buf;
        /**
        * Initializes a new instance of the @see:PdfWebWorkerExportDoneEventArgs class.
        *
        * @param buffer An ArrayBuffer.
        */
        constructor(buffer: ArrayBuffer);
        /**
        * Gets a Blob object that contains the document data.
        */
        readonly blob: Blob;
        /**
        * Gets an ArrayBuffer that contains the document data.
        */
        readonly buffer: ArrayBuffer;
    }
    /**
     * Represents client-side methods for exporting FlexGrid to PDF/generating PDF, for use with Web Worker.
     */
    class PdfWebWorkerClient {
        /**
         * Exports the @see:FlexGrid to PDF in a background thread.
         *
         * @param worker The Web Worker instance to run the exporting code in.
         * @param grid The @see:FlexGrid instance to export.
         * @param fileName The name of the file to export.
         * @param settings The export settings.
         * @param done An optional callback function to call when exporting is done. The function takes a single parameter, an instance of the @see:PdfWebWorkerExportDoneEventArgs class.
         * @param progress An optional function that gives feedback about the progress of the export. The function takes a single parameter, a number changing from 0.0 to 1.0,
         * where the value of 0.0 indicates that the operation has just begun and the value of 1.0 indicates that the operation has completed.
         */
        static exportGrid(worker: Worker, grid: FlexGrid, fileName: string, settings: IFlexGridExportSettings, done?: Function, progress?: Function): void;
        /**
         * Exports PDF in a background thread.
         *
         * @param worker The Web Worker instance to run the exporting code in.
         * @param settings An object containing @see:PdfDocument's initialization settings.
         * @param done The callback function to call when drawing is done. The function takes a single parameter, an instance of the @see:PdfWebWorkerExportDoneEventArgs class.
         * @param progress An optional function that gives feedback about the progress of the export. The function takes a single parameter, a number changing from 0.0 to 1.0,
         * where the value of 0.0 indicates that the operation has just begun and the value of 1.0 indicates that the operation has completed.
         */
        static export(worker: Worker, settings: any, done: Function, progress?: Function): void;
        /**
         * Adds named FlexGrid with settings, which will be used in a Web Worker to generate a PDF document.
         * This method should be used in conjunction with the @see:PdfWebWorkerClient.export method.
         *
         * @param worker The Web Worker instance to send the data to.
         * @param grid The grid
         * @param name The name associated with the grid.
         * @param settings The draw settings.
         */
        static addGrid(worker: Worker, grid: FlexGrid, name: string, settings: IFlexGridDrawSettings): void;
        /**
         * Adds named image with settings, which will be used in a Web Worker to generate a PDF document.
         * This method should be used in conjunction with the @see:PdfWebWorkerClient.export method.
         *
         * @param worker The Web Worker instance to send the data to.
         * @param image A string containing the URL to get the image from or the data URI containing a base64 encoded image.
         * @param name The name associated with the image.
         * @param settings The image drawing settings.
         */
        static addImage(worker: Worker, image: string, name: string, settings: wijmo.pdf.IPdfImageDrawSettings): void;
        /**
         * Adds named string which will be used in a Web Worker code to generate a PDF document.
         * This method should be used in conjunction with the @see:PdfWebWorkerClient.export method.
         *
         * @param worker The Web Worker instance to send the data to.
         * @param value The value.
         * @param name The name associated with the string.
         */
        static addString(worker: Worker, value: string, name: string): void;
        /**
        * Serializes the @see:FlexGrid to ArrayBuffer. The serialized data can be send to a Web Worker using the postMessage method.
        *
        * @param grid The @see:FlexGrid instance to serialize.
        * @param settings The export settings used to serialize the grid.
        */
        static serializeGrid(grid: FlexGrid, settings?: IFlexGridExportSettings): ArrayBuffer;
        private static _addClientData(worker, value, name, settings, isGrid?);
        private static _clearClientData(worker);
        private static _clientDataToArrayBuffer(worker);
        private static _gridToJson(grid, settings?);
        private static _getJsonConverter(flex, settings);
    }
    /**
     * Represents server-side methods for exporting FlexGrid to PDF/generating PDF, for use with Web Worker.
     */
    class PdfWebWorker {
        /**
         * Performs the export started in a UI thread by calling the @see:PdfWebWorkerClient.exportGrid method.
         */
        static initExportGrid(): void;
        /**
         * Performs the PDF document generation started in a UI thread by calling the @see:PdfWebWorkerClient.export method.
         *
         * @param draw The callback function to draw PDF.
         * The function takes two parameters:
         * <ul>
         *     <li><b>doc</b>: An instance of the @see:wijmo.pdf.PdfDocument class.</li>
         *     <li><b>clientData</b>: A dictionary of {name: value} pairs that contains the data added on the client side.</li>
         * </ul>
         */
        static initExport(draw: Function): void;
        /**
         * Sends the progress value to a client, where it will be handled by the @see:PdfWebWorkerClient.export's progress callback function.
         * Should be used in conjunction with the @see:PdfWebWorkerClient.export method to inform client about the progress of the export.
         *
         * @param value The progress value, in the range of [0.0..1.0].
         */
        static sendExportProgress(value: number): void;
        /**
        * Deserializes the @see:FlexGrid from ArrayBuffer to its internal representation that can be used in a Web Worker and passed to the @see:FlexGridPdfConverter.draw and @see:FlexGridPdfConverter.drawToPosition methods.
        *
        * @param data The data to deserialize.
        * @param settings The draw settings used to deserialize the grid.
        */
        static deserializeGrid(data: ArrayBuffer, settings?: IFlexGridDrawSettings): any;
        private static _deserializeGridFromString(jsonStr, settings?);
        private static _disableUnsupportedFeatures(settings);
        private static _getJsonAdapter(json, settings);
    }
}

