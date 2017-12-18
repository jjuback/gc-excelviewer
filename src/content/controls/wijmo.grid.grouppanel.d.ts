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
 * Extension that provides a drag and drop UI for editing
 * groups in bound @see:FlexGrid controls.
 */
declare module wijmo.grid.grouppanel {
    /**
     * The @see:GroupPanel control provides a drag and drop UI for editing
     * groups in a bound @see:FlexGrid control.
     *
     * It allows users to drag columns from the @see:FlexGrid into the
     * panel and to move groups within the panel. Users may click the
     * group markers in the panel to sort based on the group column or to
     * remove groups.
     *
     * In order to use a @see:GroupPanel, add it to a page that contains a
     * @see:FlexGrid control and set the panel's @see:grid property to the
     * @see:FlexGrid control. For example:
     *
     * <pre>// create a FlexGrid
     * var flex = new wijmo.grid.FlexGrid('#flex-grid');
     * flex.itemsSource = getData();
     * // add a GroupPanel to edit data groups
     * var groupPanel = new wijmo.grid.grouppanel.GroupPanel('#group-panel');
     * groupPanel.placeholder = "Drag columns here to create groups.";
     * groupPanel.grid = flex;</pre>
     */
    class GroupPanel extends Control {
        _g: any;
        _gds: collections.ObservableArray;
        _hideGroupedCols: boolean;
        _maxGroups: number;
        _dragCol: Column;
        _dragMarker: HTMLElement;
        _divMarkers: HTMLElement;
        _divPH: HTMLElement;
        /**
         * Gets or sets the template used to instantiate @see:GroupPanel controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:GroupPanel class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets a value indicating whether the panel hides grouped columns in the owner grid.
         *
         * The @see:FlexGrid displays grouping information in row headers, so it is
         * usually a good idea to hide grouped columns since they display redundant
         * information.
         */
        hideGroupedColumns: boolean;
        /**
         * Gets or sets the maximum number of groups allowed.
         */
        maxGroups: number;
        /**
         * Gets or sets a string to display in the control when it contains no groups.
         */
        placeholder: string;
        /**
         * Gets or sets the @see:FlexGrid that is connected to this @see:GroupPanel.
         *
         * Once a grid is connected to the panel, the panel displays the groups
         * defined in the grid's data source. Users can drag grid columns
         * into the panel to create new groups, drag groups within the panel to
         * re-arrange the groups, or delete items in the panel to remove the groups.
         */
        grid: FlexGrid;
        /**
         * Updates the panel to show the current groups.
         */
        refresh(): void;
        _addGroup(col: Column, e: MouseEvent): void;
        _moveGroup(marker: HTMLElement, e: MouseEvent): void;
        _removeGroup(index: number, groups?: collections.ObservableArray): void;
        _getIndex(e: MouseEvent): number;
        _getElementIndex(e: HTMLElement): number;
        _draggingColumn(s: FlexGrid, e: CellRangeEventArgs): void;
        _itemsSourceChanged(s: FlexGrid, e: EventArgs): void;
        _groupsChanged(s: any, e: EventArgs): void;
        _dragStart(e: any): void;
        _dragOver(e: any): void;
        _drop(e: MouseEvent): void;
        _dragEnd(e: any): void;
        _click(e: any): void;
    }
}

