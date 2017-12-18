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
 * Extension that provides detail rows for @see:FlexGrid controls.
 */
declare module wijmo.grid.detail {
    /**
     * Specifies when and how the row details are displayed.
     */
    enum DetailVisibilityMode {
        /**
         * Details are shown or hidden in code, using the
         * @see:FlexGridDetailProvider.showDetail and
         * @see:FlexGridDetailProvider.hideDetail methods.
         */
        Code = 0,
        /**
         * Details are shown for the row that is currently selected.
         */
        Selection = 1,
        /**
         * Details are shown or hidden using buttons added to the row headers.
         * Only one row may be expanded at a time.
         */
        ExpandSingle = 2,
        /**
         * Details are shown or hidden using buttons added to the row headers.
         * Multiple rows may be expanded at a time.
         */
        ExpandMulti = 3,
    }
    /**
     * Implements detail rows for @see:FlexGrid controls.
     *
     * To add detail rows to a @see:FlexGrid control, create an instance of a
     * @see:FlexGridDetailProvider and set the @see:createDetailCell property
     * to a function that creates elements to be displayed in the detail cells.
     *
     * For example:
     *
     * <pre>// create FlexGrid to show categories
     * var gridCat = new wijmo.grid.FlexGrid('#gridCat');
     * gridCat.itemsSource = getCategories();
     * // add detail rows showing products in each category
     * var detailProvider = new wijmo.grid.detail.FlexGridDetailProvider(gridCat);
     * detailProvider.createDetailCell = function (row) {
     *   var cell = document.createElement('div');
     *   var gridProducts = new wijmo.grid.FlexGrid(cell);
     *   gridProducts.itemsSource = getProducts(row.dataItem.CategoryID);
     *   return cell;
     * }</pre>
     *
     * The @see:FlexGridDetailProvider provides a @see:detailVisibilityMode property
     * that determines when the detail rows should be displayed. The default value for
     * this property is <b>ExpandSingle</b>, which adds collapse/expand icons to the
     * row headers.
     */
    class FlexGridDetailProvider {
        _g: FlexGrid;
        _maxHeight: number;
        _mode: DetailVisibilityMode;
        _animated: boolean;
        _toSel: any;
        _createDetailCellFn: Function;
        _disposeDetailCellFn: Function;
        _rowHasDetailFn: Function;
        /**
         * Initializes a new instance of the @see:FlexGridDetailProvider class.
         *
         * @param grid @see:FlexGrid that will receive detail rows.
         * @param options Initialization options for the new @see:FlexGridDetailProvider.
         */
        constructor(grid: FlexGrid, options?: any);
        /**
         * Gets the @see:FlexGrid that owns this @see:FlexGridDetailProvider.
         */
        readonly grid: FlexGrid;
        /**
         * Gets or sets a value that determines when row details are displayed.
         */
        detailVisibilityMode: DetailVisibilityMode;
        /**
         * Gets or sets the maximum height of the detail rows, in pixels.
         */
        maxHeight: number;
        /**
         * Gets or sets a value that indicates whether to use animation when
         * showing row details.
         */
        isAnimated: boolean;
        /**
         * Gets or sets the callback function that creates detail cells.
         *
         * The callback function takes a @see:Row as a parameter and
         * returns an HTML element representing the row details.
         * For example:
         *
         * <pre>// create detail cells for a given row
         * dp.createDetailCell = function (row) {
         *   var cell = document.createElement('div');
         *   var detailGrid = new wijmo.grid.FlexGrid(cell, {
         *     itemsSource: getProducts(row.dataItem.CategoryID),
         *     headersVisibility: wijmo.grid.HeadersVisibility.Column
         *   });
         *   return cell;
         * };</pre>
         */
        createDetailCell: Function;
        /**
         * Gets or sets the callback function that disposes of detail cells.
         *
         * The callback function takes a @see:Row as a parameter and
         * disposes of any resources associated with the detail cell.
         *
         * This function is optional. Use it in cases where the
         * @see:createDetailCell function allocates resources that are not
         * automatically garbage-collected.
         */
        disposeDetailCell: Function;
        /**
         * Gets or sets the callback function that determines whether a row
         * has details.
         *
         * The callback function takes a @see:Row as a parameter and
         * returns a boolean value that indicates whether the row has
         * details. For example:
         *
         * <pre>// remove details from items with odd CategoryID
         * dp.rowHasDetail = function (row) {
         *   return row.dataItem.CategoryID % 2 == 0;
         * };</pre>
         *
         * Setting this property to null indicates all rows have details.
         */
        rowHasDetail: Function;
        /**
         * Gets the detail row associated with a given grid row.
         *
         * @param row Row or index of the row to investigate.
         */
        getDetailRow(row: any): DetailRow;
        /**
         * Gets a value that determines if a row's details are visible.
         *
         * @param row Row or index of the row to investigate.
         */
        isDetailVisible(row: any): boolean;
        /**
         * Gets a value that determines if a row has details to show.
         *
         * @param row Row or index of the row to investigate.
         */
        isDetailAvailable(row: any): boolean;
        /**
         * Hides the detail row for a given row.
         *
         * @param row Row or index of the row that will have its details hidden.
         * This parameter is optional. If not provided, all detail rows are hidden.
         */
        hideDetail(row?: any): void;
        /**
         * Shows the detail row for a given row.
         *
         * @param row Row or index of the row that will have its details shown.
         * @param hideOthers Whether to hide details for all other rows.
         */
        showDetail(row: any, hideOthers?: boolean): void;
        _toIndex(row: any): number;
        _hdrClick(e: MouseEvent): void;
        _selectionChanged(s: FlexGrid, e: EventArgs): void;
        _formatItem(s: any, e: FormatItemEventArgs): void;
        _resizedRow(s: any, e: FormatItemEventArgs): void;
        _hasVisibleDetail(row: Row): boolean;
        _hasDetail(row: number): boolean;
        _createDetailCell(row: Row, col?: Column): HTMLElement;
    }
}

declare module wijmo.grid.detail {
    /**
     * Merge manager class used by the @see:FlexGridDetailProvider class.
     *
     * The @see:DetailMergeManager merges detail cells (cells in a @see:DetailRow)
     * into a single detail cell that spans all grid columns.
     */
    class DetailMergeManager extends MergeManager {
        /**
         * Initializes a new instance of the @see:DetailMergeManager class.
         *
         * @param grid The @see:FlexGrid object that owns this @see:DetailMergeManager.
         */
        constructor(grid: FlexGrid);
        /**
         * Gets a @see:CellRange that specifies the merged extent of a cell
         * in a @see:GridPanel.
         *
         * @param p The @see:GridPanel that contains the range.
         * @param r The index of the row that contains the cell.
         * @param c The index of the column that contains the cell.
         * @param clip Whether to clip the merged range to the grid's current view range.
         * @return A @see:CellRange that specifies the merged range, or null if the cell is not merged.
         */
        getMergedRange(p: GridPanel, r: number, c: number, clip?: boolean): CellRange;
    }
}

declare module wijmo.grid.detail {
    /**
     * Row that contains a single detail cell spanning all grid columns.
     */
    class DetailRow extends Row {
        _detail: HTMLElement;
        /**
         * Initializes a new instance of the @see:DetailRow class.
         *
         * @param parentRow @see:Row that this @see:DetailRow provides details for.
         */
        constructor(parentRow: Row);
        /**
         * Gets or sets the HTML element that represents the detail cell in this @see:DetailRow.
         */
        detail: HTMLElement;
    }
}

