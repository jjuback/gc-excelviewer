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
declare module wijmo.olap {
    /**
     * Accumulates observations and returns aggregate statistics.
     */
    class _Tally {
        _cnt: number;
        _cntn: number;
        _sum: number;
        _sum2: number;
        _min: any;
        _max: any;
        _first: any;
        _last: any;
        /**
         * Adds a value to the tally.
         *
         * @param value Value to be added to the tally.
         * @param weight Weight to be attributed to the value.
         */
        add(value: any, weight?: number): void;
        /**
         * Gets an aggregate statistic from the tally.
         *
         * @param aggregate Type of aggregate statistic to get.
         */
        getAggregate(aggregate: Aggregate): number;
    }
}

declare module wijmo.olap {
    /**
     * Represents a combination of @see:PivotField objects and their values.
     *
     * Each row and column on the output view is defined by a unique @see:PivotKey.
     * The values in the output cells represent an aggregation of the value field
     * for all items that match the row and column keys.
     *
     * For example, if a column key is set to 'Country:UK;Customer:Joe' and
     * the row key is set to 'Category:Desserts;Product:Pie', then the corresponding
     * cell contains the aggregate for all items with the following properties:
     *
     * <pre>{ Country: 'UK', Customer: 'Joe', Category: 'Desserts', Product: 'Pie' };</pre>
     */
    class _PivotKey {
        _fields: PivotFieldCollection;
        _fieldCount: number;
        _valueFields: PivotFieldCollection;
        _valueFieldIndex: number;
        _item: any;
        _key: string;
        _vals: any[];
        _names: string[];
        static _ROW_KEY_NAME: string;
        /**
         * Initializes a new instance of the @see:PivotKey class.
         *
         * @param fields @see:PivotFieldCollection that owns this key.
         * @param fieldCount Number of fields to take into account for this key.
         * @param valueFields @see:PivotFieldCollection that contains the values for this key.
         * @param valueFieldIndex Index of the value to take into account for this key.
         * @param item First data item represented by this key.
         */
        constructor(fields: PivotFieldCollection, fieldCount: number, valueFields: PivotFieldCollection, valueFieldIndex: number, item: any);
        /**
         * Gets the @see:PivotFieldCollection that owns this key.
         */
        readonly fields: PivotFieldCollection;
        /**
         * Gets the @see:PivotFieldCollection that contains the values for this key.
         */
        readonly valueFields: PivotFieldCollection;
        /**
         * Gets an array with the values used to create this key.
         */
        readonly values: any[];
        /**
         * Gets an array with the names of the fields in this key.
         */
        readonly fieldNames: string[];
        /**
         * Gets the type of aggregate represented by this key.
         */
        readonly aggregate: Aggregate;
        /**
         * Gets the value for this key at a given index.
         *
         * @param index Index of the field to be retrieved.
         * @param formatted Whether to return a formatted string or the raw value.
         */
        getValue(index: number, formatted: boolean): any;
        /**
         * Comparer function used to sort arrays of @see:_PivotKey objects.
         *
         * @param key @see:_PivotKey to compare to this one.
         */
        compareTo(key: _PivotKey): number;
        /**
         * Gets a value that determines whether a given data object matches
         * this @see:_PivotKey.
         *
         * The match is determined by comparing the formatted values for each
         * @see:PivotField in the key to the formatted values in the given item.
         * Therefore, matches may occur even if the raw values are different.
         *
         * @param item Item to check for a match.
         */
        matchesItem(item: any): boolean;
        toString(): string;
    }
}

declare module wijmo.olap {
    /**
     * Represents a tree of @see:_PivotField objects.
     *
     * This class is used only for optimization. It reduces the number of
     * @see:_PivotKey objects that have to be created while aggregating the
     * data.
     *
     * The optimization cuts the time required to summarize the data
     * to about half.
     */
    class _PivotNode {
        _key: _PivotKey;
        _nodes: any;
        _tree: _PivotNode;
        _parent: _PivotNode;
        /**
         * Initializes a new instance of the @see:PivotNode class.
         *
         * @param fields @see:PivotFieldCollection that owns this node.
         * @param fieldCount Number of fields to take into account for this node.
         * @param valueFields @see:PivotFieldCollection that contains the values for this node.
         * @param valueFieldIndex Index of the value to take into account for this node.
         * @param item First data item represented by this node.
         * @param parent Parent @see:_PivotField.
         */
        constructor(fields: PivotFieldCollection, fieldCount: number, valueFields: PivotFieldCollection, valueFieldIndex: number, item: any, parent?: _PivotNode);
        /**
         * Gets a child node from a parent node.
         *
         * @param fields @see:PivotFieldCollection that owns this node.
         * @param fieldCount Number of fields to take into account for this node.
         * @param valueFields @see:PivotFieldCollection that contains the values for this node.
         * @param valueFieldIndex Index of the value to take into account for this node.
         * @param item First data item represented by this node.
         */
        getNode(fields: PivotFieldCollection, fieldCount: number, valueFields: PivotFieldCollection, valueFieldIndex: number, item: any): _PivotNode;
        /**
         * Gets the @see:_PivotKey represented by this @see:_PivotNode.
         */
        readonly key: _PivotKey;
        /**
         * Gets the parent node of this node.
         */
        readonly parent: _PivotNode;
        /**
         * Gets the child items of this node.
         */
        readonly tree: _PivotNode;
    }
}

declare module wijmo.olap {
    /**
     * Extends the @see:CollectionView class to preserve the position of subtotal rows
     * when sorting.
     */
    class PivotCollectionView extends collections.CollectionView {
        private _ng;
        /**
         * Initializes a new instance of the @see:PivotCollectionView class.
         *
         * @param engine @see:PivotEngine that owns this collection.
         */
        constructor(engine: PivotEngine);
        /**
         * Gets a reference to the @see:PivotEngine that owns this view.
         */
        readonly engine: PivotEngine;
        _performSort(items: any[]): void;
        _getRowLevel(items: any[], index: number): number;
    }
}

declare module wijmo.olap {
    /**
     * Represents a property of the items in the wijmo.olap data source.
     */
    class PivotField {
        private _ng;
        _header: string;
        _binding: Binding;
        _autoGenerated: boolean;
        private _aggregate;
        private _showAs;
        private _weightField;
        private _format;
        private _width;
        private _wordWrap;
        private _dataType;
        private _filter;
        private _srtCmp;
        private _descending;
        private _isContentHtml;
        private _parent;
        static _props: string[];
        /**
         * Initializes a new instance of the @see:PivotField class.
         *
         * @param engine @see:PivotEngine that owns this field.
         * @param binding Property that this field is bound to.
         * @param header Header shown to identify this field (defaults to the binding).
         * @param options JavaScript object containing initialization data for the field.
         */
        constructor(engine: PivotEngine, binding: string, header?: string, options?: any);
        /**
         * Gets or sets the name of the property the field is bound to.
         */
        binding: string;
        /**
         * Gets or sets a string used to represent this field in the user interface.
         */
        header: string;
        /**
         * Gets a reference to the @see:PivotFilter used to filter values for this field.
         */
        readonly filter: PivotFilter;
        /**
         * Gets or sets how the field should be summarized.
         */
        aggregate: Aggregate;
        /**
         * Gets or sets how the field results should be formatted.
         */
        showAs: ShowAs;
        /**
         * Gets or sets the @see:PivotField used as a weight for calculating
         * aggregates on this field.
         *
         * If this property is set to null, all values are assumed to have weight one.
         *
         * This property allows you to calculate weighted averages and totals.
         * For example, if the data contains a 'Quantity' field and a 'Price' field,
         * you could use the 'Price' field as a value field and the 'Quantity' field as
         * a weight. The output would contain a weighted average of the data.
         */
        weightField: PivotField;
        /**
         * Gets or sets the data type of the field.
         */
        dataType: DataType;
        /**
         * Gets or sets the format to use when displaying field values.
         */
        format: string;
        /**
         * Gets or sets the preferred width to be used for showing this field in the
         * user interface.
         */
        width: number;
        /**
         * Gets or sets a value that indicates whether the content of this field should
         * be allowed to wrap within cells.
         */
        wordWrap: boolean;
        /**
         * Gets or sets a value that determines whether keys should be sorted
         * in descending order for this field.
         */
        descending: boolean;
        /**
         * Gets or sets a value indicating whether items in this field
         * contain HTML content rather than plain text.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a function used to compare values when sorting.
         *
         * If provided, the sort comparer function should take as parameters
         * two values of any type, and should return -1, 0, or +1 to indicate
         * whether the first value is smaller than, equal to, or greater than
         * the second. If the sort comparer returns null, the standard built-in
         * comparer is used.
         *
         * This @see:sortComparer property allows you to use custom comparison
         * algorithms that in some cases result in sorting sequences that are
         * more consistent with user's expectations than plain string comparisons.
         *
         * The example below shows a typical use for the @see:sortComparer property:
         * <pre>// define list of products
         * app.products = 'Wijmo,Aoba,Olap,Xuni'.split(',');
         *
         * // sort products by position in the 'app.products' array
         * ng.viewDefinitionChanged.addHandler(function () {
         *   var fld = ng.fields.getField('Product');
         *   if (fld) {
         *     fld.sortComparer = function (val1, val2) {
         *       return app.products.indexOf(val1) - app.products.indexOf(val2);
         *     }
         *   }
         * });</pre>
         */
        sortComparer: Function;
        /**
         * Gets a reference to the @see:PivotEngine that owns this @see:PivotField.
         */
        readonly engine: PivotEngine;
        /**
         * Gets the @see:ICollectionView bound to this field.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Gets or sets a value that determines whether this field is
         * currently being used in the view.
         *
         * Setting this property to true causes the field to be added to the
         * view's @see:PivotEngine.rowFields or @see:PivotEngine.valueFields,
         * depending on the field's data type.
         */
        isActive: boolean;
        /**
         * Gets this field's parent field.
         *
         * When you drag the same field into the Values list multiple
         * times, copies of the field are created so you can use the
         * same binding with different parameters. The copies keep a
         * reference to their parent fields.
         */
        readonly parentField: PivotField;
        /**
         * Gets the key for this @see:PivotField.
         *
         * For regular fields, the key is the field's @see:header;
         * for @see:CubePivotField instances, the key is the
         * field's @see:binding.
         */
        readonly key: string;
        /**
         * Occurs when the value of a property in this @see:Range changes.
         */
        readonly propertyChanged: Event;
        /**
         * Raises the @see:propertyChanged event.
         *
         * @param e @see:PropertyChangedEventArgs that contains the property
         * name, old, and new values.
         */
        onPropertyChanged(e: PropertyChangedEventArgs): void;
        _getIsActive(): boolean;
        _setIsActive(value: boolean): void;
        _clone(): PivotField;
        _setProp(name: string, value: any, member?: string): void;
        _getName(): string;
        _getValue(item: any, formatted: boolean): any;
        _getWeight(item: any): number;
    }
    /**
     * Extends the @see:PivotField class to represent a field in a server-based
     * cube data source.
     */
    class CubePivotField extends PivotField {
        private _subFields;
        private _dimensionType;
        /**
         * Initializes a new instance of the @see:PivotField class.
         *
         * @param engine @see:PivotEngine that owns this field.
         * @param binding Property that this field is bound to.
         * @param header Header shown to identify this field (defaults to the binding).
         * @param options JavaScript object containing initialization data for the field.
         */
        constructor(engine: PivotEngine, binding: string, header?: string, options?: any);
        /**
         * Gets or sets a string used to represent this field in the user interface.
         */
        header: string;
        /**
         * Gets or sets the dimension type of the field.
         */
        dimensionType: DimensionType;
        /**
         * Gets this field's child fields.
         */
        readonly subFields: CubePivotField[];
        /**
         * Gets the key for this @see:CubePivotField.
         *
         * For this type of field, the key is the field's @see:binding.
         */
        readonly key: string;
        _clone(): PivotField;
        _copy(key: string, value: any): boolean;
        _getIsActive(): boolean;
        _setIsActive(value: boolean): void;
    }
    /**
     * Defines the dimension type of a @see:CubePivotField.
     */
    enum DimensionType {
        /** Fields that contain categories used to summarize data. */
        Dimension = 0,
        /** Fields that contain quantitative, numerical information. */
        Measure = 1,
        /** Calculations associated with a measure group used to evaluate business success. */
        Kpi = 2,
        /** Multidimensional Expression (MDX) that returns a set of dimension members. */
        NameSet = 3,
        /** Provide supplementary information about dimension members. */
        Attribute = 4,
        /** Used to categorize measures and improve the user browsing experience. */
        Folder = 5,
        /** Metadata that define relationships between two or more columns in a table. */
        Hierarchy = 6,
        /** Dimension with time-based levels of granularity for analysis and reporting. */
        Date = 7,
        /** Dimension whose attributes represent a list of currencies for financial reporting purposes. */
        Currency = 8,
    }
}

declare module wijmo.olap {
    /**
     * Represents a collection of @see:PivotField objects.
     */
    class PivotFieldCollection extends collections.ObservableArray {
        private _ng;
        private _maxItems;
        /**
         * Initializes a new instance of the @see:PivotFieldCollection class.
         *
         * @param engine @see:PivotEngine that owns this @see:PivotFieldCollection.
         */
        constructor(engine: PivotEngine);
        /**
         * Gets or sets the maximum number of fields allowed in this collection.
         *
         * This property is set to null by default, which means any number of items is allowed.
         */
        maxItems: number;
        /**
         * Gets a reference to the @see:PivotEngine that owns this @see:PivotFieldCollection.
         */
        readonly engine: PivotEngine;
        /**
         * Gets a field by key.
         *
         * @param key @see:PivotField.key to look for.
         */
        getField(key: string): PivotField;
        _getField(fields: any, key: string): PivotField;
        /**
         * Overridden to allow pushing fields by header.
         *
         * @param ...item One or more @see:PivotField objects to add to the array.
         * @return The new length of the array.
         */
        push(...item: any[]): number;
    }
}

declare module wijmo.olap {
    /**
     * Represents a filter used to select values for a @see:PivotField.
     */
    class PivotFilter {
        private _fld;
        private _valueFilter;
        private _conditionFilter;
        private _filterType;
        /**
         * Initializes a new instance of the @see:PivotFilter class.
         *
         * @param field @see:PivotField that owns this filter.
         */
        constructor(field: PivotField);
        /**
         * Gets or sets the types of filtering provided by this filter.
         *
         * Setting this property to null causes the filter to use the value
         * defined by the owner filter's @see:FlexGridFilter.defaultFilterType
         * property.
         */
        filterType: grid.filter.FilterType;
        /**
         * Gets a value that indicates whether a value passes the filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
        /**
         * Gets a value that indicates whether the filter is active.
         */
        readonly isActive: boolean;
        /**
         * Clears the filter.
         */
        clear(): void;
        /**
         * Gets the @see:ValueFilter in this @see:PivotFilter.
         */
        readonly valueFilter: grid.filter.ValueFilter;
        /**
         * Gets the @see:ConditionFilter in this @see:PivotFilter.
         */
        readonly conditionFilter: grid.filter.ConditionFilter;
    }
}

declare module wijmo.olap {
    /**
     * Editor for @see:PivotField objects.
     */
    class PivotFieldEditor extends Control {
        private _fld;
        private _pvDate;
        private _dBnd;
        private _dHdr;
        private _dAgg;
        private _dShw;
        private _dWFl;
        private _dSrt;
        private _dFmt;
        private _dSmp;
        private _dFlt;
        private _btnFltEdt;
        private _btnFltClr;
        private _btnApply;
        private _btnCancel;
        private _cmbHdr;
        private _cmbAgg;
        private _cmbShw;
        private _cmbWFl;
        private _cmbSrt;
        private _cmbFmt;
        private _cmbSmp;
        private _eFlt;
        private _gDlg;
        private _gHdr;
        private _gAgg;
        private _gShw;
        private _gWfl;
        private _gSrt;
        private _gFlt;
        private _gFmt;
        private _gSmp;
        /**
         * Gets or sets the template used to instantiate @see:PivotFieldEditor controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:PivotFieldEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets a reference to the @see:PivotField being edited.
         */
        field: PivotField;
        /**
         * Updates editor to reflect the current field values.
         */
        updateEditor(): void;
        /**
         * Updates field to reflect the current editor values.
         */
        updateField(): void;
        _initAggregateOptions(): void;
        _initShowAsOptions(): void;
        _initFormatOptions(): void;
        _initWeighByOptions(): void;
        _initSortOptions(): void;
        _updateFormat(): void;
        _updatePreview(): void;
        _editFilter(): void;
        _createFilterEditor(): void;
        _closeFilter(): void;
    }
}

declare module wijmo.olap {
    /**
     * Editor for @see:PivotFilter objects.
     */
    class PivotFilterEditor extends Control {
        private _fld;
        private _divType;
        private _aCnd;
        private _aVal;
        private _divEdtVal;
        private _divEdtCnd;
        private _btnOk;
        private _edtVal;
        private _edtCnd;
        /**
         * Gets or sets the template used to instantiate @see:PivotFilterEditor controls.
         */
        static controlTemplate: string;
        '</div>': any;
        /**
         * Initializes a new instance of the @see:ColumnFilterEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector
         * for the host element (e.g. '#theCtrl').
         * @param field The @see:PivotField to edit.
         * @param options JavaScript object containing initialization data for the editor.
         */
        constructor(element: any, field: PivotField, options?: any);
        /**
         * Gets a reference to the @see:PivotField whose filter is being edited.
         */
        readonly field: PivotField;
        /**
         * Gets a reference to the @see:PivotFilter being edited.
         */
        readonly filter: PivotFilter;
        /**
         * Updates the editor with current filter settings.
         */
        updateEditor(): void;
        /**
         * Updates the filter to reflect the current editor values.
         */
        updateFilter(): void;
        /**
         * Clears the editor fields without applying changes to the filter.
         */
        clearEditor(): void;
        /**
         * Occurs when the user finishes editing the filter.
         */
        readonly finishEditing: Event;
        /**
         * Raises the @see:finishEditing event.
         */
        onFinishEditing(e?: CancelEventArgs): boolean;
        private _showFilter(filterType);
        _enableLink(a: HTMLLinkElement, enable: boolean): void;
        private _getFilterType();
        private _btnClicked(e);
    }
}

/**
 * Contains components that provide OLAP functionality such as
 * pivot tables and charts.
 *
 * The @see:PivotEngine class is responsible for summarizing
 * raw data into pivot views.
 *
 * The @see:PivotPanel control provides a UI for editing the
 * pivot views by dragging fields into view lists and editing
 * their properties.
 *
 * The @see:PivotGrid control extends the @see:FlexGrid to
 * display pivot tables with collapsible row and column
 * groups.
 *
 * The @see:PivotChart control provides visual representations
 * of pivot tables with hierarchical axes.
 */
declare module wijmo.olap {
    /**
     * Specifies constants that define whether to include totals in the output table.
     */
    enum ShowTotals {
        /**
         * Do not show any totals.
         */
        None = 0,
        /**
         * Show grand totals.
         */
        GrandTotals = 1,
        /**
         * Show subtotals and grand totals.
         */
        Subtotals = 2,
    }
    /**
     * Specifies constants that define calculations to be applied to cells in the output view.
     */
    enum ShowAs {
        /**
         * Show plain aggregated values.
         */
        NoCalculation = 0,
        /**
         * Show differences between each item and the item in the previous row.
         */
        DiffRow = 1,
        /**
         * Show differences between each item and the item in the previous row as a percentage.
         */
        DiffRowPct = 2,
        /**
         * Show differences between each item and the item in the previous column.
         */
        DiffCol = 3,
        /**
         * Show differences between each item and the item in the previous column as a percentage.
         */
        DiffColPct = 4,
        /**
         * Show values as a percentage of the grand totals for the field.
         */
        PctGrand = 5,
        /**
         * Show values as a percentage of the row totals for the field.
         */
        PctRow = 6,
        /**
         * Show values as a percentage of the column totals for the field.
         */
        PctCol = 7,
        /**
         * Show values as running totals.
         */
        RunTot = 8,
        /**
         * Show values as percentage running totals.
         */
        RunTotPct = 9,
    }
    /**
     * Provides a user interface for interactively transforming regular data tables into Olap
     * pivot tables.
     *
     * Tabulates data in the @see:itemsSource collection according to lists of fields and
     * creates the @see:pivotView collection containing the aggregated data.
     *
     * Pivot tables group data into one or more dimensions. The dimensions are represented
     * by rows and columns on a grid, and the data is stored in the grid cells.
     */
    class PivotEngine {
        private _items;
        private _cv;
        private _autoGenFields;
        private _allowFieldEditing;
        private _showRowTotals;
        private _showColTotals;
        private _totalsBefore;
        private _showZeros;
        private _updating;
        private _dirty;
        private _toInv;
        private _cntTotal;
        private _cntFiltered;
        private _colBindings;
        private _pivotView;
        private _defaultFilterType;
        private _async;
        private _batchStart;
        private _toUpdateTallies;
        private _activeFilterFields;
        _tallies: any;
        _keys: any;
        private _fields;
        private _rowFields;
        private _columnFields;
        private _valueFields;
        private _filterFields;
        _viewLists: PivotFieldCollection[];
        private _server;
        private _serverParms;
        static _BATCH_SIZE: number;
        static _BATCH_TIMEOUT: number;
        static _BATCH_DELAY: number;
        static _props: string[];
        /**
         * Initializes a new instance of the @see:PivotEngine class.
         *
         * @param options JavaScript object containing initialization data for the field.
         */
        constructor(options?: any);
        /**
         * Gets or sets the array or @see:ICollectionView that contains the
         * data to be analyzed, or a string containing the URL for a
         * ComponentOne DataEngine service.
         *
         * ComponentOne DataEngine services allow you to analyze large
         * datasets on a server without downloading the raw data to the
         * client. You can use our high-performance FlexPivot services
         * or interface with Microsoft's SQL Server Analysis Services
         * OLAP Cubes.
         *
         * The @see:PivotEngine sends view definitions to the server,
         * where summaries are calculated and returned to the client.
         *
         * For more information about the ComponentOne DataEngine
         * services please refer to the
         * <a href="http://helpcentral.componentone.com/nethelp/C1WebAPI/APIDataEngine.html">online documentation</a>.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView that contains the raw data.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Gets the @see:ICollectionView containing the output pivot view.
         */
        readonly pivotView: collections.ICollectionView;
        /**
         * Gets or sets a value that determines whether the output @see:pivotView
         * should include rows containing subtotals or grand totals.
         */
        showRowTotals: ShowTotals;
        /**
         * Gets or sets a value that determines whether the output @see:pivotView
         * should include columns containing subtotals or grand totals.
         */
        showColumnTotals: ShowTotals;
        /**
         * Gets or sets a value that determines whether row and column totals
         * should be displayed before or after regular data rows and columns.
         *
         * If this value is set to true, total rows appear above data rows
         * and total columns appear on the left of regular data columns.
         */
        totalsBeforeData: boolean;
        /**
         * Gets or sets a value that determines whether the Olap output table
         * should use zeros to indicate the missing values.
         */
        showZeros: boolean;
        /**
         * Gets or sets the default filter type (by value or by condition).
         */
        defaultFilterType: grid.filter.FilterType;
        /**
         * Gets or sets a value that determines whether the engine should generate fields
         * automatically based on the @see:itemsSource.
         */
        autoGenerateFields: boolean;
        /**
         * Gets or sets a value that determines whether users should be allowed to edit
         * the properties of the @see:PivotField objects owned by this @see:PivotEngine.
         */
        allowFieldEditing: boolean;
        /**
         * Gets the list of @see:PivotField objects exposed by the data source.
         *
         * This list is created automatically whenever the @see:itemsSource property is set.
         *
         * Pivot views are defined by copying fields from this list to the lists that define
         * the view: @see:valueFields, @see:rowFields, @see:columnFields, and @see:filterFields.
         *
         * For example, the code below assigns a data source to the @see:PivotEngine and
         * then defines a view by adding fields to the @see:rowFields, @see:columnFields, and
         * @see:valueFields lists.
         *
         * <pre>// create pivot engine
         * var pe = new wijmo.olap.PivotEngine();
         *
         * // set data source (populates fields list)
         * pe.itemsSource = this.getRawData();
         *
         * // prevent updates while building Olap view
         * pe.beginUpdate();
         *
         * // show countries in rows
         * pe.rowFields.push('Country');
         *
         * // show categories and products in columns
         * pe.columnFields.push('Category');
         * pe.columnFields.push('Product');
         *
         * // show total sales in cells
         * pe.valueFields.push('Sales');
         *
         * // done defining the view
         * pe.endUpdate();</pre>
         */
        readonly fields: PivotFieldCollection;
        /**
         * Gets the list of @see:PivotField objects that define the fields shown as rows in the output table.
         */
        readonly rowFields: PivotFieldCollection;
        /**
         * Gets the list of @see:PivotField objects that define the fields shown as columns in the output table.
         */
        readonly columnFields: PivotFieldCollection;
        /**
         * Gets the list of @see:PivotField objects that define the fields used as filters.
         *
         * Fields on this list do not appear in the output table, but are still used for filtering the input data.
         */
        readonly filterFields: PivotFieldCollection;
        /**
         * Gets the list of @see:PivotField objects that define the fields summarized in the output table.
         */
        readonly valueFields: PivotFieldCollection;
        /**
         * Gets or sets the current pivot view definition as a JSON string.
         *
         * This property is typically used to persist the current view as
         * an application setting.
         *
         * For example, the code below implements two functions that save
         * and load view definitions using local storage:
         *
         * <pre>// save/load views
         * function saveView() {
         *   localStorage.viewDefinition = pivotEngine.viewDefinition;
         * }
         * function loadView() {
         *   pivotEngine.viewDefinition = localStorage.viewDefinition;
         * }</pre>
         */
        viewDefinition: string;
        /**
         * Gets a value that determines whether a pivot view is currently defined.
         *
         * A pivot view is defined if the @see:valueFields list is not empty and
         * either the @see:rowFields or @see:columnFields lists are not empty.
         */
        readonly isViewDefined: boolean;
        /**
         * Suspends the refresh processes until next call to the @see:endUpdate.
         */
        beginUpdate(): void;
        /**
         * Resumes refresh processes suspended by calls to @see:beginUpdate.
         */
        endUpdate(): void;
        /**
         * Gets a value that indicates whether the engine is currently being updated.
         */
        readonly isUpdating: boolean;
        /**
         * Executes a function within a @see:beginUpdate/@see:endUpdate block.
         *
         * The control will not be updated until the function has been executed.
         * This method ensures @see:endUpdate is called even if the function throws
         * an exception.
         *
         * @param fn Function to be executed.
         */
        deferUpdate(fn: Function): void;
        /**
         * Summarizes the data and updates the output @see:pivotView.
         *
         * @param force Refresh even while updating (see @see:beginUpdate).
         */
        refresh(force?: boolean): void;
        /**
         * Invalidates the view causing an asynchronous refresh.
         */
        invalidate(): void;
        /**
         * Gets or sets a value that determines whether view updates should be generated asynchronously.
         *
         * This property is set to true by default, so summaries over large data sets are performed
         * asynchronously to prevent stopping the UI thread.
         */
        async: boolean;
        /**
         * Gets or sets the maximum amount of time, in milliseconds, that
         * the engine should wait for the results to come back from the
         * server.
         *
         * The default value for this property is 60000, equivalent to
         * sixty seconds. If you expect server operations to take longer
         * than that to complete, set the property to a higher value.
         */
        serverTimeout: number;
        /**
         * Gets or sets the amount of time, in milliseconds, that the
         * engine should wait before polling the server for progress
         * status while retrieving results.
         *
         * The default value for this property is 500, which causes the
         * engine to poll the server for a status update every half
         * second.
         */
        serverPollInterval: number;
        /**
         * Gets or sets the maximum number of records the @see:getDetail
         * method should retrieve from the server.
         *
         * The default value for this property is 1000, which provides
         * a reasonable amount of detail in many scenarios. If you want
         * to allow more detail records to be retrieved, increase the
         * value of this property.
         */
        serverMaxDetail: number;
        /**
         * Cancels any pending asynchronous view updates.
         */
        cancelPendingUpdates(): void;
        /**
         * Gets an array containing the records summarized by a property in the
         * @see:pivotView list.
         *
         * If the engine is connected to a PivotEngine server, the value returned
         * is an @see:ObservableArray that is populated asynchronously.
         *
         * @param item Data item in the @see:pivotView list.
         * @param binding Name of the property being summarized.
         */
        getDetail(item: any, binding: string): any[];
        /**
         * Gets an @see:collections.ICollectionView containing the records summarized
         * by a property in the @see:pivotView list.
         *
         * @param item Data item in the @see:pivotView list.
         * @param binding Name of the property being summarized.
         */
        getDetailView(item: any, binding: string): wijmo.collections.ICollectionView;
        /**
         * Gets an object with information about a property in the @see:pivotView list.
         *
         * The object returned has two properties, 'rowKey' and 'colKey'. Each of
         * these contains two arrays, 'fields' and 'values'. Together, this information
         * uniquely identifies a value summarized by the @see:PivotEngine.
         *
         * For example, calling @see:getKeys against a pivot view with two row fields
         * 'Product' and 'Country', and a single column field 'Active' would return an
         * object such as this one:
         *
         * <pre>{
         *     rowKey: {
         *         fields: [ 'Product', 'Country'],
         *         values: [ 'Aoba', 'Japan' ]
         *     },
         *     colKey: {
         *         fields: [ 'Active' ],
         *         values: [ true ]
         *     }
         * }</pre>
         *
         * The object identifies the subset of data used to obtain one summary value.
         * In this case, this value represents all data items for product 'Aoba' sold
         * in Japan with Active state set to true.
         *
         * @param item Data item in the @see:pivotView list.
         * @param binding Name of the property being summarized.
         */
        getKeys(item: any, binding: string): any;
        /**
         * Shows a settings dialog where users can edit a field's settings.
         *
         * @param field @see:PivotField to be edited.
         */
        editField(field: PivotField): void;
        /**
         * Removes a field from the current view.
         *
         * @param field @see:PivotField to be removed.
         */
        removeField(field: PivotField): void;
        /**
         * Occurs after the value of the @see:itemsSource property changes.
         */
        readonly itemsSourceChanged: Event;
        /**
         * Raises the @see:itemsSourceChanged event.
         */
        onItemsSourceChanged(e?: EventArgs): void;
        /**
         * Occurs after the view definition changes.
         */
        readonly viewDefinitionChanged: Event;
        /**
         * Raises the @see:viewDefinitionChanged event.
         */
        onViewDefinitionChanged(e?: EventArgs): void;
        /**
         * Occurs when the engine starts updating the @see:pivotView list.
         */
        readonly updatingView: Event;
        /**
         * Raises the @see:updatingView event.
         *
         * @param e @see:ProgressEventArgs that provides the event data.
         */
        onUpdatingView(e: ProgressEventArgs): void;
        /**
         * Occurs after the engine has finished updating the @see:pivotView list.
         */
        readonly updatedView: Event;
        /**
         * Raises the @see:updatedView event.
         */
        onUpdatedView(e?: EventArgs): void;
        /**
         * Occurs when there is an error getting data from the server.
         */
        readonly error: Event;
        /**
         * Raises the @see:error event.
         *
         * @param e @see:RequestErrorEventArgs that contains information about the error.
         */
        onError(e: RequestErrorEventArgs): boolean;
        _copy(key: string, value: any): boolean;
        _getKey(keyString: string): _PivotKey;
        _getRowLevel(key: any): number;
        _getColLevel(key: any): number;
        private _applyFilter(item);
        private _updateView();
        private _updateTallies(arr, startIndex);
        private _updatePivotView();
        private _getSortedKeys(obj);
        private _updateFieldValues(arr);
        private _getColTotal(arr, col);
        private _getRunningTotal(arr, row, col, showAs);
        private _getLastValueInRowGroup(arr, row, col);
        private _getRowDifference(arr, row, col, showAs);
        private _getColDifference(arr, row, col, showAs);
        private _generateFields();
        _createField(options: any, autoGenerated: boolean): PivotField;
        private _cvCollectionChanged(sender, e);
        private _fieldListChanged(s, e);
        _fieldPropertyChanged(field: PivotField, e: PropertyChangedEventArgs): void;
        _copyProps(dst: any, src: any, props: string[]): void;
        private _getFieldFromDefinition(fldDef);
        private _getFieldDefinition(fld);
        private _getFieldCollectionProxy(arr);
        private _setFieldCollectionProxy(arr, proxy);
        private _getFilterProxy(fld);
        private _setFilterProxy(fld, proxy);
    }
    /**
     * Provides arguments for progress events.
     */
    class ProgressEventArgs extends EventArgs {
        _progress: number;
        /**
         * Initializes a new instance of the @see:ProgressEventArgs class.
         *
         * @param progress Number between 0 and 100 that represents the progress.
         */
        constructor(progress: number);
        /**
         * Gets the current progress as a number between 0 and 100.
         */
        readonly progress: number;
    }
}

declare module wijmo.olap {
    /**
     * Represents a connection to a Pivot service.
     */
    class _ServerConnection {
        private _ng;
        private _token;
        private _start;
        private _progress;
        private _request;
        private _toGetStatus;
        static _TIMEOUT: number;
        static _POLL_INTERVAL: number;
        static _MAXDETAIL: number;
        /**
         * Initializes a new instance of the @see:_ServerConnection class.
         *
         * @param engine @see:PivotEngine that owns this field.
         * @param url Url used to communicate with the server.
         */
        constructor(engine: PivotEngine, url: string);
        /**
         * Gets a list of fields available on the server.
         */
        getFields(): PivotField[];
        /**
         * Gets the output view for the current view definition.
         *
         * @param callBack function invoked to handle the results.
         */
        getOutputView(callBack: Function): void;
        /**
         * Gets an array containing the data items that were used to calculate
         * an aggregated cell.
         *
         * @param rowKey Identifies the row that contains the aggregated cell.
         * @param colKey Identifies the column that contains the aggregated cell.
         */
        getDetail(rowKey: any, colKey: any): any[];
        private static _getRequestedValue(value);
        /**
         * Cancels any pending requests.
         */
        clearPendingRequests(): void;
        /**
         * Creates fake tallies based on aggregated data returned from the server
         *
         * @param aggregatedData Array containing the data aggregates returned
         * by the server.
         */
        updateTallies(aggregatedData: any[]): void;
        private _getFieldValue(vf, item, formatted?);
        private _getAggregatedFieldCount(item, fields);
        _loadArray(command: string, arr: any, data?: any): void;
        private _getUrl(command, token?, fieldName?);
        private _isValidUrl(url);
        private _handleResult(result, callBack);
        private _waitUntilComplete(callBack);
        private _getResults(callBack);
        private _handleError(msg, xhr);
        private _throwResponseError(msg, xhr);
        private _sendHttpRequest(command, settings?);
        private _clearToken();
        private _clearRequest();
        private _clearTimeout();
    }
}

declare module wijmo.olap {
    /**
     * Context Menu for @see:ListBox controls containing @see:PivotField objects.
     */
    class _ListContextMenu extends input.Menu {
        _full: boolean;
        /**
         * Initializes a new instance of the @see:_ListContextMenu class.
         *
         * @param full Whether to include all commands or only the ones that apply to the main field list.
         */
        constructor(full: boolean);
        refresh(fullUpdate?: boolean): void;
        /**
         * Attaches this context menu to a @see:FlexGrid control.
         *
         * @param grid @see:FlexGrid control to attach this menu to.
         */
        attach(grid: grid.FlexGrid): void;
        _selectField(grid: wijmo.grid.FlexGrid, e: MouseEvent): boolean;
        _getMenuItems(full: boolean): any[];
        _execute(parm: any): void;
        _canExecute(parm: any): boolean;
        _getTargetList(engine: PivotEngine, parm: string): PivotFieldCollection;
    }
}

declare module wijmo.olap {
    /**
     * Provides a user interface for interactively transforming regular data tables into Olap
     * pivot tables.
     *
     * Olap pivot tables group data into one or more dimensions. The dimensions are represented
     * by rows and columns on a grid, and the summarized data is stored in the grid cells.
     *
     * Use the @see:itemsSource property to set the source data, and the @see:pivotView
     * property to get the output table containing the summarized data.
     */
    class PivotPanel extends Control {
        private _ng;
        private _dFields;
        private _dFilters;
        private _dRows;
        private _dCols;
        private _dVals;
        private _dMarker;
        private _dProgress;
        private _chkDefer;
        private _btnUpdate;
        private _lbFields;
        private _lbFilters;
        private _lbRows;
        private _lbCols;
        private _lbVals;
        private _gFlds;
        private _gDrag;
        private _gFlt;
        private _gCols;
        private _gRows;
        private _gVals;
        private _gDefer;
        _ctxMenuShort: _ListContextMenu;
        _ctxMenuFull: _ListContextMenu;
        private _dragSource;
        private _dragField;
        private _dropIndex;
        /**
         * Gets or sets the template used to instantiate @see:PivotPanel controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:PivotPanel class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the @see:PivotEngine being controlled by this @see:PivotPanel.
         */
        engine: PivotEngine;
        /**
         * Gets or sets the array or @see:ICollectionView that contains the raw data.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView that contains the raw data.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Gets the @see:ICollectionView containing the output pivot view.
         */
        readonly pivotView: collections.ICollectionView;
        /**
         * Gets or sets a value that determines whether the engine should populate
         * the @see:fields collection automatically based on the @see:itemsSource.
         */
        autoGenerateFields: boolean;
        /**
         * Gets the list of fields available for building views.
         */
        readonly fields: PivotFieldCollection;
        /**
         * Gets the list of fields that define the rows in the output table.
         */
        readonly rowFields: PivotFieldCollection;
        /**
         * Gets the list of fields that define the columns in the output table.
         */
        readonly columnFields: PivotFieldCollection;
        /**
         * Gets the list of fields that define the values shown in the output table.
         */
        readonly valueFields: PivotFieldCollection;
        /**
         * Gets the list of fields that define filters applied while generating the output table.
         */
        readonly filterFields: PivotFieldCollection;
        /**
         * Gets or sets the current pivot view definition as a JSON string.
         *
         * This property is typically used to persist the current view as
         * an application setting.
         *
         * For example, the code below implements two functions that save
         * and load view definitions using local storage:
         *
         * <pre>// save/load views
         * function saveView() {
         *   localStorage.viewDefinition = pivotPanel.viewDefinition;
         * }
         * function loadView() {
         *   pivotPanel.viewDefinition = localStorage.viewDefinition;
         * }</pre>
         */
        viewDefinition: string;
        /**
         * Gets a value that determines whether a pivot view is currently defined.
         *
         * A pivot view is defined if the @see:valueFields list is not empty and
         * either the @see:rowFields or @see:columnFields lists are not empty.
         */
        readonly isViewDefined: boolean;
        /**
         * Occurs after the value of the @see:itemsSource property changes.
         */
        readonly itemsSourceChanged: Event;
        /**
         * Raises the @see:itemsSourceChanged event.
         */
        onItemsSourceChanged(e?: EventArgs): void;
        /**
         * Occurs after the view definition changes.
         */
        readonly viewDefinitionChanged: Event;
        /**
         * Raises the @see:viewDefinitionChanged event.
         */
        onViewDefinitionChanged(e?: EventArgs): void;
        /**
         * Occurs when the engine starts updating the @see:pivotView list.
         */
        readonly updatingView: Event;
        /**
         * Raises the @see:updatingView event.
         *
         * @param e @see:ProgressEventArgs that provides the event data.
         */
        onUpdatingView(e: ProgressEventArgs): void;
        /**
         * Occurs after the engine has finished updating the @see:pivotView list.
         */
        readonly updatedView: Event;
        /**
         * Raises the @see:updatedView event.
         */
        onUpdatedView(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        _copy(key: string, value: any): boolean;
        _globalize(): void;
        _itemsSourceChanged(s: PivotEngine, e?: EventArgs): void;
        _viewDefinitionChanged(s: PivotEngine, e?: EventArgs): void;
        _updatingView(s: PivotEngine, e: ProgressEventArgs): void;
        _updatedView(s: PivotEngine, e?: EventArgs): void;
        _requestError(s: PivotEngine, e: RequestErrorEventArgs): void;
        _createFieldGrid(host: HTMLElement): wijmo.grid.FlexGrid;
        _dragstart(e: DragEvent): void;
        _dragover(e: DragEvent): void;
        _drop(e: DragEvent): void;
        _dragend(e: DragEvent): void;
        _hitTestField(grid: wijmo.grid.FlexGrid, e: MouseEvent): PivotField;
        _resetMouseState(): void;
        _getFlexGridTarget(e: DragEvent): wijmo.grid.FlexGrid;
        _updateDropMarker(grid?: wijmo.grid.FlexGrid, e?: DragEvent): void;
    }
}

declare module wijmo.olap {
    /**
     * Context Menu for @see:PivotGrid controls.
     */
    class _GridContextMenu extends input.Menu {
        private _targetField;
        private _htDown;
        /**
         * Initializes a new instance of the @see:_GridContextMenu class.
         */
        constructor();
        refresh(fullUpdate?: boolean): void;
        /**
         * Attaches this context menu to a @see:PivotGrid control.
         *
         * @param grid @see:PivotGrid to attach this menu to.
         */
        attach(grid: PivotGrid): void;
        _selectField(e: MouseEvent): boolean;
        _getMenuItems(): any[];
        _execute(parm: any): void;
        _canExecute(parm: any): boolean;
    }
}

declare module wijmo.olap {
    /**
     * Provides custom merging for @see:PivotGrid controls.
     */
    class _PivotMergeManager extends grid.MergeManager {
        private _ng;
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
        getMergedRange(p: grid.GridPanel, r: number, c: number, clip?: boolean): grid.CellRange;
        _getMergedTopLeftRange(p: grid.GridPanel, r: number, c: number): grid.CellRange;
        _getMergedRowHeaderRange(p: grid.GridPanel, r: number, c: number, rng: grid.CellRange): grid.CellRange;
        _sameColumnValues(p: grid.GridPanel, r1: number, r2: number, c: number): boolean;
        _getMergedColumnHeaderRange(p: grid.GridPanel, r: number, c: number, rng: grid.CellRange): grid.CellRange;
        _sameRowValues(p: grid.GridPanel, r: number, c1: number, c2: number): boolean;
    }
}

declare module wijmo.olap {
    /**
     * Extends the @see:FlexGrid control to display pivot tables.
     *
     * To use this control, set its @see:itemsSource property to an instance of a
     * @see:PivotPanel control or to a @see:PivotEngine.
     */
    class PivotGrid extends grid.FlexGrid {
        private _ng;
        private _htDown;
        private _showDetailOnDoubleClick;
        private _collapsibleSubtotals;
        private _customCtxMenu;
        private _ctxMenu;
        private _showRowFldSort;
        private _showRowFldHdrs;
        private _showColFldHdrs;
        private _centerVert;
        private _docRange;
        static _WJA_COLLAPSE: string;
        /**
         * Initializes a new instance of the @see:PivotGrid class.
         *
         * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets a reference to the @see:PivotEngine that owns this @see:PivotGrid.
         */
        readonly engine: PivotEngine;
        /**
         * Gets or sets a value that determines whether the grid should show a popup containing
         * the detail records when the user double-clicks a cell.
         */
        showDetailOnDoubleClick: boolean;
        /**
         * Gets or sets a value that determines whether the grid should
         * display row field headers in its top-left panel.
         */
        showRowFieldHeaders: boolean;
        /**
         * Gets or sets a value that determines whether the grid should
         * display column field headers in its top-left panel.
         */
        showColumnFieldHeaders: boolean;
        /**
         * Gets or sets a value that determines whether the grid should display
         * sort indicators in the column headers for row fields.
         *
         * Unlike regular column headers, row fields are always sorted, either
         * in ascending or descending order. If you set this property to true,
         * sort icons will always be displayed over any row field headers.
         */
        showRowFieldSort: boolean;
        /**
         * Gets or sets a value that determines whether the grid should provide a
         * custom context menu.
         *
         * The custom context menu includes commands for changing field settings,
         * removing fields, or showing detail records for the grid cells.
         */
        customContextMenu: boolean;
        /**
         * Gets or sets a value that determines whether the grid should allow users to collapse
         * and expand subtotal groups of rows and columns.
         */
        collapsibleSubtotals: boolean;
        /**
         * Gets or sets a value that determines whether the content of header cells should be
         * vertically centered.
         */
        centerHeadersVertically: boolean;
        /**
         * Gets an array containing the records summarized by a given grid cell.
         *
         * @param row Index of the row that contains the cell.
         * @param col Index of the column that contains the cell.
         */
        getDetail(row: number, col: number): any[];
        /**
         * Gets an object with information about the fields and values
         * being used to summarize a given cell.
         *
         * For more details, see the @PivotEngine.getKeys method.
         *
         * @param row Index of the row that contains the cell.
         * @param col Index of the column that contains the cell.
         */
        getKeys(row: number, col: number): any;
        /**
         * Gets an @see:collections.ICollectionView containing the records summarized
         * by a given grid cell.
         *
         * @param row Index of the row that contains the cell.
         * @param col Index of the column that contains the cell.
         */
        getDetailView(row: number, col: number): collections.ICollectionView;
        /**
         * Shows a dialog containing details for a given grid cell.
         *
         * @param row Index of the row that contains the cell.
         * @param col Index of the column that contains the cell.
         */
        showDetail(row: number, col: number): void;
        /**
         * Collapses all rows to a given level.
         *
         * @param level Maximum row level to show. Zero means show only
         * grand totals; one means show only top-level groups; very high
         * levels expand all rows.
         */
        collapseRowsToLevel(level: number): void;
        /**
         * Collapses all columns to a given level.
         *
         * @param level Maximum column level to show. Zero means show only
         * grand totals; one means show only top-level groups; very high
         * levels expand all columns.
         */
        collapseColumnsToLevel(level: number): void;
        refresh(fullUpdate?: boolean): void;
        protected _getCollectionView(value: any): collections.ICollectionView;
        onItemsSourceChanged(e?: EventArgs): void;
        onResizedColumn(e: grid.CellRangeEventArgs): void;
        _updatedView(): void;
        onLoadedRows(e?: EventArgs): void;
        _updateFixedCounts(): void;
        _setLength(arr: collections.ObservableArray, cnt: number): void;
        _updateFixedContent(): void;
        _formatItem(s: any, e: grid.FormatItemEventArgs): void;
        _getCollapsedGlyph(collapsed: boolean): string;
        _mousedown(e: MouseEvent): void;
        _mouseup(e: MouseEvent): void;
        _dblclick(e: MouseEvent): void;
        _getRowLevel(row: number): number;
        _getGroupedRows(rng: grid.CellRange): grid.CellRange;
        _getRowCollapsed(rng: grid.CellRange): boolean;
        _setRowCollapsed(rng: grid.CellRange, collapse: boolean): void;
        _toggleRowCollapsed(rng: grid.CellRange): void;
        _collapseRowsToLevel(level: number): void;
        _getColLevel(col: number): number;
        _getGroupedCols(rng: grid.CellRange): grid.CellRange;
        _getColCollapsed(rng: grid.CellRange): boolean;
        _setColCollapsed(rng: grid.CellRange, collapse: boolean): void;
        _toggleColCollapsed(rng: grid.CellRange): void;
        _collapseColsToLevel(level: number): void;
    }
}

declare module wijmo.olap {
    /**
     * Represents a dialog used to display details for a grid cell.
     */
    class DetailDialog extends Control {
        private _g;
        private _sCnt;
        private _dSummary;
        private _dGrid;
        private _btnOK;
        private _gHdr;
        /**
         * Gets or sets the template used to instantiate @see:PivotFieldEditor controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:DetailDialog class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        showDetail(ownerGrid: PivotGrid, cell: wijmo.grid.CellRange): void;
        _updateDetailCount(cnt: number): void;
        _getHeader(key: _PivotKey): string;
    }
}

declare module wijmo.olap {
    /**
     * Specifies constants that define the chart type.
     */
    enum PivotChartType {
        /** Shows vertical bars and allows you to compare values of items across categories. */
        Column = 0,
        /** Shows horizontal bars. */
        Bar = 1,
        /** Shows patterns within the data using X and Y coordinates. */
        Scatter = 2,
        /** Shows trends over a period of time or across categories. */
        Line = 3,
        /** Shows line chart with the area below the line filled with color. */
        Area = 4,
        /** Shows pie chart. */
        Pie = 5,
    }
    /**
     * Specifies constants that define when the chart legend should be displayed.
     */
    enum LegendVisibility {
        /** Always show the legend. */
        Always = 0,
        /** Never show the legend. */
        Never = 1,
        /** Show the legend if the chart has more than one series. */
        Auto = 2,
    }
    /**
     * Provides visual representations of @see:wijmo.olap pivot tables.
     *
     * To use the control, set its @see:itemsSource property to an instance of a
     * @see:PivotPanel control or to a @see:PivotEngine.
     */
    class PivotChart extends Control {
        static MAX_SERIES: number;
        static MAX_POINTS: number;
        static HRHAXISCSS: string;
        private _ng;
        private _chartType;
        private _showHierarchicalAxes;
        private _showTotals;
        private _showTitle;
        private _showLegend;
        private _legendPosition;
        private _maxSeries;
        private _maxPoints;
        private _stacking;
        private _itemsSource;
        private _flexChart;
        private _flexPie;
        private _colMenu;
        private _colItms;
        private _dataItms;
        private _lblsSrc;
        private _grpLblsSrc;
        /**
         * Initializes a new instance of the @see:PivotChart class.
         *
         * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets a reference to the @see:PivotEngine that owns this @see:PivotChart.
         */
        readonly engine: PivotEngine;
        /**
         * Gets or sets the @see:PivotEngine or @see:PivotPanel that provides data
         * for this @see:PivotChart.
         */
        itemsSource: any;
        /**
         * Gets or sets the type of chart to create.
         */
        chartType: PivotChartType;
        /**
         * Gets or sets a value that determines whether the chart should group axis
         * annotations for grouped data.
         */
        showHierarchicalAxes: boolean;
        /**
         * Gets or sets a value that determines whether the chart should include only totals.
         */
        showTotals: boolean;
        /**
         * Gets or sets a value that determines whether the chart should include a title.
         */
        showTitle: boolean;
        /**
         * Gets or sets a value that determines whether the chart should include a legend.
         */
        showLegend: LegendVisibility;
        /**
         * Gets or sets a value that determines whether and where the legend
         * appears in relation to the plot area.
         */
        legendPosition: chart.Position;
        /**
         * Gets or sets a value that determines whether and how the series objects are stacked.
         */
        stacking: chart.Stacking;
        /**
         * Gets or sets the maximum number of data series to be shown in the chart.
         */
        maxSeries: number;
        /**
         * Gets or sets the maximum number of points to be shown in each series.
         */
        maxPoints: number;
        /**
         * Gets a reference to the inner <b>FlexChart</b> control.
         */
        readonly flexChart: chart.FlexChart;
        /**
         * Gets a reference to the inner <b>FlexPie</b> control.
         */
        readonly flexPie: chart.FlexPie;
        /**
         * Refreshes the control.
         *
         * @param fullUpdate Whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        private _onItemsSourceChanged(oldItemsSource?);
        private _createFlexChart();
        private _createFlexPie();
        private _updatePivotChart();
        private _updateFlexChartOrPie();
        private _updateFlexChart(dataItms, labelsSource, grpLblsSrc);
        private _updateFlexPie(dataItms, labelsSource);
        private _getLegendPosition();
        private _createSeries();
        private _getColumns(itm);
        private _createGroupAxes(groups);
        private _updateFlexPieBinding();
        private _updatePieInfo();
        private _changeChartType();
        private _swapChartAndPie(chartshow);
        private _getLabel(key);
        private _getValue(ht);
        private _getChartTitle();
        private _getTitle(fields);
        private _isTotalColumn(colKey);
        private _isTotalRow(rowKey);
        private _isPieChart();
        private _isBarChart();
        private _getMergeIndex(key1, key2);
        private _getOffsetWidth(labels);
    }
}

