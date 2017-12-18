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
    /**
    * Represents arguments of the IFlexGridDrawSettings.formatItem callback.
    */
    class PdfFormatItemEventArgs extends wijmo.grid.CellRangeEventArgs {
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
        * @param clientRect	Object that represents the client rectangle of the grid cell to be rendered in canvas coordinates.
        * @param contentRect Object that represents the content rectangle of the grid cell to be rendered in canvas coordinates.
        * @param textTop Object that represents the top position of the text in canvas coordinates.
        * @param style Object that represents the style of the grid cell to be rendered.
        * @param getFormattedCell Callback function that should return the grid cell when the getFormattedCell method is called.
        */
        constructor(p: GridPanel, rng: CellRange, cell: HTMLElement, canvas: wijmo.pdf.PdfPageArea, clientRect: Rect, contentRect: Rect, textTop: number, style: ICellStyle, getFormattedCell?: Function);
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
    /**
    * Provides a functionality to export the @see:FlexGrid to PDF.
    */
    class FlexGridPdfConverter {
        private static BorderWidth;
        private static DefaultDrawSettings;
        private static DefaultExportSettings;
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
        static draw(flex: wijmo.grid.FlexGrid, doc: wijmo.pdf.PdfDocument, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
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
        static drawToPosition(flex: wijmo.grid.FlexGrid, doc: wijmo.pdf.PdfDocument, point: Point, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
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
        static export(flex: wijmo.grid.FlexGrid, fileName: string, settings?: IFlexGridExportSettings): void;
        private static _draw(flex, doc, point, width, height, settings);
        private static _getScaleFactor(gr, scaleMode, rect);
        private static _getPages(gr, ranges, rect, settings, isPositionedMode, scaleFactor);
        private static _getGridRenderer(flex, settings, range, borderWidth, lastPage);
    }
}

