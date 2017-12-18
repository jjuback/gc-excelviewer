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
declare module wijmo.grid.filter {
    /**
     * Defines a filter for a column on a @see:FlexGrid control.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    interface IColumnFilter {
        column: Column;
        isActive: boolean;
        apply(value: any): boolean;
        clear(): void;
    }
}

declare module wijmo.grid.filter {
    /**
     * Defines a value filter for a column on a @see:FlexGrid control.
     *
     * Value filters contain an explicit list of values that should be
     * displayed by the grid.
     */
    class ValueFilter implements IColumnFilter {
        private _col;
        private _bnd;
        private _values;
        private _filterText;
        private _maxValues;
        private _uniqueValues;
        private _sortValues;
        private _map;
        /**
         * Initializes a new instance of the @see:ValueFilter class.
         *
         * @param column The column to filter.
         */
        constructor(column: Column);
        /**
         * Gets or sets an object with all the formatted values that should be
         * shown on the value list.
         */
        showValues: any;
        /**
         * Gets or sets a string used to filter the list of display values.
         */
        filterText: string;
        /**
         * Gets or sets the maximum number of elements on the list of display values.
         *
         * Adding too many items to the list makes searching difficult and hurts
         * performance. This property limits the number of items displayed at any time,
         * but users can still use the search box to filter the items they are
         * interested in.
         *
         * This property is set to 250 by default.
         *
         * This code changes the value to 1,000,000, effectively listing all unique
         * values for the field:
         *
         * <pre>// change the maxItems property for the 'id' column:
         * var f = new wijmo.grid.filter.FlexGridFilter(s);
         * f.getColumnFilter('id').valueFilter.maxValues = 1000000;</pre>
         */
        maxValues: number;
        /**
         * Gets or sets an array containing the unique values to be displayed on the list.
         *
         * If this property is set to null, the list will be filled based on the grid data.
         *
         * Explicitly assigning the list of unique values is more efficient than building
         * the list from the data, and is required for value filters to work properly when
         * the data is filtered on the server (because in this case some values might not
         * be present on the client so the list will be incomplete).
         *
         * By default, the filter editor will sort the unique values when displaying them
         * to the user. If you want to prevent that and show the values in the order you
         * provided, set the @see:sortValues property to false.
         *
         * For example, the code below provides a list of countries to be used in the
         * @see:ValueFilter for the column bound to the 'country' field:
         *
         * <pre>// create filter for a FlexGrid
         * var filter = new wijmo.grid.filter.FlexGridFilter(grid);
         * // assign list of unique values to country filter
         * var cf = filter.getColumnFilter('country');
         * cf.valueFilter.uniqueValues = countries;</pre>
         */
        uniqueValues: any[];
        /**
         * Gets or sets a value that determines whether the values should be sorted
         * when displayed in the editor.
         *
         * This property is especially useful when you are using the @see:uniqueValues
         * to provide a custom list of values property and you would like to preserve
         * the order of the values.
         */
        sortValues: boolean;
        /**
         * Gets or sets the @see:DataMap used to convert raw values into display
         * values shown when editing this filter.
         */
        dataMap: DataMap;
        /**
         * Gets the @see:Column to filter.
         */
        readonly column: Column;
        /**
         * Gets a value that indicates whether the filter is active.
         *
         * The filter is active if there is at least one value is selected.
         */
        readonly isActive: boolean;
        /**
         * Gets a value that indicates whether a value passes the filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
        /**
         * Clears the filter.
         */
        clear(): void;
        /**
         * Returns true if the caller queries for a supported interface.
         *
         * @param interfaceName Name of the interface to look for.
         */
        implementsInterface(interfaceName: string): boolean;
        _getUniqueValues(col: Column, filtered: boolean): any[];
    }
}

declare module wijmo.grid.filter {
    /**
     * The editor used to inspect and modify @see:ValueFilter objects.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    class ValueFilterEditor extends Control {
        private _divFilter;
        private _cmbFilter;
        private _cbSelectAll;
        private _spSelectAll;
        private _divValues;
        private _lbValues;
        private _filter;
        private _toText;
        private _filterText;
        private _view;
        /**
         * Gets or sets the template used to instantiate @see:ColumnFilterEditor controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:ValueFilterEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector
         * for the host element (e.g. '#theCtrl').
         * @param filter The @see:ValueFilter to edit.
         */
        constructor(element: any, filter: ValueFilter);
        /**
         * Gets a reference to the @see:ValueFilter being edited.
         */
        readonly filter: ValueFilter;
        /**
         * Updates editor with current filter settings.
         */
        updateEditor(): void;
        _updateEditor(): void;
        /**
         * Clears the editor without applying changes to the filter.
         */
        clearEditor(): void;
        /**
         * Updates filter to reflect the current editor values.
         */
        updateFilter(): void;
        private _filterTextChanged();
        private _filterValues(value);
        private _cbSelectAllClicked();
        private _updateSelectAllCheck();
    }
}

declare module wijmo.grid.filter {
    /**
     * Defines a condition filter for a column on a @see:FlexGrid control.
     *
     * Condition filters contain two conditions that may be combined
     * using an 'and' or an 'or' operator.
     *
     * This class is used by the @see:FlexGridFilter class; you will
     * rarely use it directly.
     */
    class ConditionFilter implements IColumnFilter {
        private _col;
        private _bnd;
        private _c1;
        private _c2;
        private _and;
        private _map;
        /**
         * Initializes a new instance of the @see:ConditionFilter class.
         *
         * @param column The column to filter.
         */
        constructor(column: Column);
        /**
         * Gets the first condition in the filter.
         */
        readonly condition1: FilterCondition;
        /**
         * Gets the second condition in the filter.
         */
        readonly condition2: FilterCondition;
        /**
         * Gets a value that indicates whether to combine the two conditions
         * with an AND or an OR operator.
         */
        and: boolean;
        /**
         * Gets or sets the @see:DataMap used to convert raw values into display
         * values shown when editing this filter.
         */
        dataMap: DataMap;
        /**
         * Gets the @see:Column to filter.
         */
        readonly column: Column;
        /**
         * Gets a value that indicates whether the filter is active.
         *
         * The filter is active if at least one of the two conditions
         * has its operator and value set to a valid combination.
         */
        readonly isActive: boolean;
        /**
         * Returns a value indicating whether a value passes this filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
        /**
         * Clears the filter.
         */
        clear(): void;
        /**
         * Returns true if the caller queries for a supported interface.
         *
         * @param interfaceName Name of the interface to look for.
         */
        implementsInterface(interfaceName: string): boolean;
    }
}

declare module wijmo.grid.filter {
    /**
     * The editor used to inspect and modify @see:ConditionFilter objects.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    class ConditionFilterEditor extends Control {
        private _filter;
        private _cmb1;
        private _val1;
        private _cmb2;
        private _val2;
        private _divHdr;
        private _divCmb1;
        private _divVal1;
        private _divCmb2;
        private _divVal2;
        private _spAnd;
        private _spOr;
        private _btnAnd;
        private _btnOr;
        /**
         * Gets or sets the template used to instantiate @see:ConditionFilterEditor controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:ConditionFilterEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector
         * for the host element (e.g. '#theCtrl').
         * @param filter The @see:ConditionFilter to edit.
         */
        constructor(element: any, filter: ConditionFilter);
        /**
         * Gets a reference to the @see:ConditionFilter being edited.
         */
        readonly filter: ConditionFilter;
        /**
         * Updates editor with current filter settings.
         */
        updateEditor(): void;
        /**
         * Clears the editor without applying changes to the filter.
         */
        clearEditor(): void;
        /**
         * Updates filter to reflect the current editor values.
         */
        updateFilter(): void;
        private _createOperatorCombo(element);
        private _createValueInput(e);
        private _isTimeFormat(fmt);
        private _btnAndOrChanged(e);
    }
}

declare module wijmo.grid.filter {
    /**
     * Defines a filter condition.
     *
     * This class is used by the @see:FlexGridFilter class; you will rarely have to use it directly.
     */
    class FilterCondition {
        private _op;
        private _val;
        private _strVal;
        /**
         * Gets or sets the operator used by this @see:FilterCondition.
         */
        operator: Operator;
        /**
         * Gets or sets the value used by this @see:FilterCondition.
         */
        value: any;
        /**
         * Gets a value that indicates whether the condition is active.
         */
        readonly isActive: boolean;
        /**
         * Clears the condition.
         */
        clear(): void;
        /**
         * Returns a value that determines whether the given value passes this
         * @see:FilterCondition.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
    }
    /**
     * Specifies filter condition operators.
     */
    enum Operator {
        /** Equals. */
        EQ = 0,
        /** Does not equal. */
        NE = 1,
        /** Greater than. */
        GT = 2,
        /** Greater than or equal to. */
        GE = 3,
        /** Less than. */
        LT = 4,
        /** Less than or equal to. */
        LE = 5,
        /** Begins with. */
        BW = 6,
        /** Ends with. */
        EW = 7,
        /** Contains. */
        CT = 8,
        /** Does not contain. */
        NC = 9,
    }
}

declare module wijmo.grid.filter {
    /**
     * Defines a filter for a column on a @see:FlexGrid control.
     *
     * The @see:ColumnFilter contains a @see:ConditionFilter and a
     * @see:ValueFilter; only one of them may be active at a time.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    class ColumnFilter implements IColumnFilter {
        private _owner;
        private _col;
        private _valueFilter;
        private _conditionFilter;
        private _filterType;
        /**
         * Initializes a new instance of the @see:ColumnFilter class.
         *
         * @param owner The @see:FlexGridFilter that owns this column filter.
         * @param column The @see:Column to filter.
         */
        constructor(owner: FlexGridFilter, column: Column);
        /**
         * Gets or sets the types of filtering provided by this filter.
         *
         * Setting this property to null causes the filter to use the value
         * defined by the owner filter's @see:FlexGridFilter.defaultFilterType
         * property.
         */
        filterType: FilterType;
        /**
         * Gets or sets the @see:DataMap used to convert raw values into display
         * values shown when editing this filter.
         *
         * The example below assigns a @see:DataMap to Boolean column filters
         * so the filter editor displays 'Yes' and 'No' instead of 'true' and 'false':
         *
         * <pre>var filter = new wijmo.grid.filter.FlexGridFilter(grid),
         *     map = new wijmo.grid.DataMap([
         *             { value: true, caption: 'Yes' },
         *             { value: false, caption: 'No' },
         *         ], 'value', 'caption');
         * for (var c = 0; c &lt; grid.columns.length; c++) {
         *     if (grid.columns[c].dataType == wijmo.DataType.Boolean) {
         *         filter.getColumnFilter(c).dataMap = map;
         *     }
         * }</pre>
         */
        dataMap: DataMap;
        /**
         * Gets the @see:ValueFilter in this @see:ColumnFilter.
         */
        readonly valueFilter: ValueFilter;
        /**
         * Gets the @see:ConditionFilter in this @see:ColumnFilter.
         */
        readonly conditionFilter: ConditionFilter;
        /**
         * Gets the @see:Column being filtered.
         */
        readonly column: Column;
        /**
         * Gets a value that indicates whether the filter is active.
         */
        readonly isActive: boolean;
        /**
         * Gets a value that indicates whether a value passes the filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
        /**
         * Clears the filter.
         */
        clear(): void;
        /**
         * Returns true if the caller queries for a supported interface.
         *
         * @param interfaceName Name of the interface to look for.
         */
        implementsInterface(interfaceName: string): boolean;
    }
}

declare module wijmo.grid.filter {
    /**
     * The editor used to inspect and modify column filters.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    class ColumnFilterEditor extends Control {
        private _filter;
        private _edtVal;
        private _edtCnd;
        private _wasTouching;
        private _divSort;
        private _btnAsc;
        private _btnDsc;
        private _divType;
        private _aCnd;
        private _aVal;
        private _divEdtVal;
        private _divEdtCnd;
        private _btnApply;
        private _btnCancel;
        private _btnClear;
        /**
         * Gets or sets the template used to instantiate @see:ColumnFilterEditor controls.
         */
        static controlTemplate: string;
        '</div>': any;
        /**
         * Initializes a new instance of the @see:ColumnFilterEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector
         * for the host element (e.g. '#theCtrl').
         * @param filter The @see:ColumnFilter to edit.
         * @param sortButtons Whether to show sort buttons in the editor.
         */
        constructor(element: any, filter: ColumnFilter, sortButtons?: boolean);
        /**
         * Gets a reference to the @see:ColumnFilter being edited.
         */
        readonly filter: ColumnFilter;
        /**
         * Updates editor with current filter settings.
         */
        updateEditor(): void;
        /**
         * Updates filter with current editor settings.
         */
        updateFilter(): void;
        /**
         * Occurs after the filter is modified.
         */
        readonly filterChanged: Event;
        /**
         * Raises the @see:filterChanged event.
         */
        onFilterChanged(e?: EventArgs): void;
        /**
         * Occurs when one of the editor buttons is clicked.
         */
        readonly buttonClicked: Event;
        /**
         * Raises the @see:buttonClicked event.
         */
        onButtonClicked(e?: EventArgs): void;
        protected _handleResize(): void;
        _showFilter(filterType: FilterType): void;
        _enableLink(a: HTMLLinkElement, enable: boolean): void;
        private _getFilterType();
        private _btnClicked(e);
    }
}

/**
 * Extension that provides an Excel-style filtering UI for @see:FlexGrid controls.
 */
declare module wijmo.grid.filter {
    /**
     * Specifies types of column filter.
     */
    enum FilterType {
        /** No filter. */
        None = 0,
        /** A filter based on two conditions. */
        Condition = 1,
        /** A filter based on a set of values. */
        Value = 2,
        /** A filter that combines condition and value filters. */
        Both = 3,
    }
    /**
     * Implements an Excel-style filter for @see:FlexGrid controls.
     *
     * To enable filtering on a @see:FlexGrid control, create an instance
     * of the @see:FlexGridFilter and pass the grid as a parameter to the
     * constructor. For example:
     *
     * <pre>
     * // create FlexGrid
     * var flex = new wijmo.grid.FlexGrid('#gridElement');
     * // enable filtering on the FlexGrid
     * var filter = new wijmo.grid.filter.FlexGridFilter(flex);
     * </pre>
     *
     * Once this is done, a filter icon is added to the grid's column headers.
     * Clicking the icon shows an editor where the user can edit the filter
     * conditions for that column.
     *
     * The @see:FlexGridFilter class depends on the <b>wijmo.grid</b> and
     * <b>wijmo.input</b> modules.
     */
    class FlexGridFilter {
        static _WJC_FILTER: string;
        static _filterGlyph: HTMLElement;
        private _g;
        private _filters;
        private _filterColumns;
        private _divEdt;
        private _edtCol;
        private _showIcons;
        private _showSort;
        private _defFilterType;
        private _tmd;
        /**
         * Initializes a new instance of the @see:FlexGridFilter class.
         *
         * @param grid The @see:FlexGrid to filter.
         * @param options Initialization options for the @see:FlexGridFilter.
         */
        constructor(grid: FlexGrid, options?: any);
        /**
         * Gets a reference to the @see:FlexGrid that owns this filter.
         */
        readonly grid: FlexGrid;
        /**
         * Gets or sets an array containing the names or bindings of the columns
         * that have filters.
         *
         * Setting this property to null or to an empty array adds filters to
         * all columns.
         */
        filterColumns: string[];
        /**
         * Gets or sets a value indicating whether the @see:FlexGridFilter adds filter
         * editing buttons to the grid's column headers.
         *
         * If you set this property to false, then you are responsible for providing
         * a way for users to edit, clear, and apply the filters.
         */
        showFilterIcons: boolean;
        /**
         * Gets or sets a value indicating whether the filter editor should include
         * sort buttons.
         *
         * By default, the editor shows sort buttons like Excel does. But since users
         * can sort columns by clicking their headers, sort buttons in the filter editor
         * may not be desirable in some circumstances.
         */
        showSortButtons: boolean;
        /**
         * Gets the filter for the given column.
         *
         * @param col The @see:Column that the filter applies to (or column name or index).
         * @param create Whether to create the filter if it does not exist.
         */
        getColumnFilter(col: any, create?: boolean): ColumnFilter;
        /**
         * Gets or sets the default filter type to use.
         *
         * This value can be overridden in filters for specific columns.
         * For example, the code below creates a filter that filters by
         * conditions on all columns except the "ByValue" column:
         *
         * <pre>
         * var f = new wijmo.grid.filter.FlexGridFilter(flex);
         * f.defaultFilterType = wijmo.grid.filter.FilterType.Condition;
         * var col = flex.columns.getColumn('ByValue'),
         *     cf = f.getColumnFilter(col);
         * cf.filterType = wijmo.grid.filter.FilterType.Value;
         * </pre>
         */
        defaultFilterType: FilterType;
        /**
         * Gets or sets the current filter definition as a JSON string.
         */
        filterDefinition: string;
        /**
         * Shows the filter editor for the given grid column.
         *
         * @param col The @see:Column that contains the filter to edit.
         * @param ht A @see:wijmo.grid.HitTestInfo object containing the range of the cell
         * that triggered the filter display.
         */
        editColumnFilter(col: any, ht?: HitTestInfo): void;
        /**
         * Closes the filter editor.
         */
        closeEditor(): void;
        /**
         * Applies the current column filters to the grid.
         */
        apply(): void;
        /**
         * Clears all column filters.
         */
        clear(): void;
        /**
         * Occurs after the filter is applied.
         */
        readonly filterApplied: Event;
        /**
         * Raises the @see:filterApplied event.
         */
        onFilterApplied(e?: EventArgs): void;
        /**
         * Occurs when a column filter is about to be edited by the user.
         *
         * Use this event to customize the column filter if you want to
         * override the default settings for the filter.
         *
         * For example, the code below sets the operator used by the filter
         * conditions to 'contains' if they are null:
         *
         * <pre>filter.filterChanging.addHandler(function (s, e) {
         *   var cf = filter.getColumnFilter(e.col);
         *   if (!cf.valueFilter.isActive && cf.conditionFilter.condition1.operator == null) {
         *     cf.filterType = wijmo.grid.filter.FilterType.Condition;
         *     cf.conditionFilter.condition1.operator = wijmo.grid.filter.Operator.CT;
         *   }
         * });</pre>
         */
        readonly filterChanging: Event;
        /**
         * Raises the @see:filterChanging event.
         */
        onFilterChanging(e: CellRangeEventArgs): void;
        /**
         * Occurs after a column filter has been edited by the user.
         *
         * Use the event parameters to determine the column that owns
         * the filter and whether changes were applied or canceled.
         */
        readonly filterChanged: Event;
        /**
         * Raises the @see:filterChanged event.
         */
        onFilterChanged(e: CellRangeEventArgs): void;
        _asColumn(col: any): Column;
        private _filter(item);
        private _formatItem(sender, e);
        _mousedown(e: MouseEvent): void;
        _click(e: MouseEvent): void;
        private _toggleEditor(e);
        _keydown(e: KeyboardEvent): void;
    }
}

