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
declare module wijmo {
    module meta {
        class ControlMetaFactory {
            static CreateProp(propertyName: string, propertyType: PropertyType, changeEvent?: string, enumType?: any, isNativeControlProperty?: boolean, priority?: number): PropDescBase;
            static CreateEvent(eventName: string, isPropChanged?: boolean): EventDescBase;
            static CreateComplexProp(propertyName: string, isArray: boolean, ownsObject?: boolean): ComplexPropDescBase;
            static findProp(propName: string, props: PropDescBase[]): PropDescBase;
            static findEvent(eventName: string, events: EventDescBase[]): EventDescBase;
            static findComplexProp(propName: string, props: ComplexPropDescBase[]): ComplexPropDescBase;
            static getMetaData(metaDataId: any): MetaDataBase;
            static getClassName(classRef: any): string;
            static toCamelCase(s: any): any;
            private static findInArr(arr, propName, value);
        }
        class PropDescBase {
            private _propertyName;
            private _propertyType;
            private _changeEvent;
            private _enumType;
            private _isNativeControlProperty;
            private _priority;
            constructor(propertyName: string, propertyType: PropertyType, changeEvent?: string, enumType?: any, isNativeControlProperty?: boolean, priority?: number);
            readonly propertyName: string;
            readonly propertyType: PropertyType;
            readonly changeEvent: string;
            readonly enumType: any;
            readonly bindingMode: BindingMode;
            readonly isNativeControlProperty: boolean;
            readonly priority: number;
            readonly shouldUpdateSource: boolean;
            initialize(options: any): void;
            castValueToType(value: any): any;
            private _parseDate(value);
        }
        enum PropertyType {
            Boolean = 0,
            Number = 1,
            Date = 2,
            String = 3,
            AnyPrimitive = 4,
            Enum = 5,
            Function = 6,
            EventHandler = 7,
            Any = 8,
        }
        function isSimpleType(type: PropertyType): boolean;
        enum BindingMode {
            OneWay = 0,
            TwoWay = 1,
        }
        class EventDescBase {
            private _eventName;
            private _isPropChanged;
            constructor(eventName: string, isPropChanged?: boolean);
            readonly eventName: string;
            readonly isPropChanged: boolean;
        }
        class ComplexPropDescBase {
            propertyName: string;
            isArray: boolean;
            private _ownsObject;
            constructor(propertyName: string, isArray: boolean, ownsObject?: boolean);
            readonly ownsObject: boolean;
        }
        class MetaDataBase {
            private _props;
            private _events;
            private _complexProps;
            parentProperty: string;
            isParentPropertyArray: boolean;
            ownsObject: boolean;
            parentReferenceProperty: string;
            ngModelProperty: string;
            constructor(props: PropDescBase[], events?: EventDescBase[], complexProps?: ComplexPropDescBase[], parentProperty?: string, isParentPropertyArray?: boolean, ownsObject?: boolean, parentReferenceProperty?: string, ngModelProperty?: string);
            props: PropDescBase[];
            events: EventDescBase[];
            complexProps: ComplexPropDescBase[];
            add(props: PropDescBase[], events?: EventDescBase[], complexProps?: ComplexPropDescBase[], parentProperty?: string, isParentPropertyArray?: boolean, ownsObject?: boolean, parentReferenceProperty?: string, ngModelProperty?: string): MetaDataBase;
            addOptions(options: any): this;
            prepare(): void;
        }
    }
}

declare module wijmo.angular {
    class MetaFactory extends wijmo.meta.ControlMetaFactory {
        static CreateProp(propertyName: string, propertyType: wijmo.meta.PropertyType, changeEvent?: string, enumType?: any, isNativeControlProperty?: boolean, priority?: number): PropDesc;
        static CreateEvent(eventName: string, isPropChanged?: boolean): EventDesc;
        static CreateComplexProp(propertyName: string, isArray: boolean, ownsObject?: boolean): ComplexPropDesc;
        static findProp(propName: string, props: PropDesc[]): PropDesc;
        static findEvent(eventName: string, events: EventDesc[]): EventDesc;
        static findComplexProp(propName: string, props: ComplexPropDesc[]): ComplexPropDesc;
    }
    class PropDesc extends wijmo.meta.PropDescBase {
        private _scopeBindingMode;
        private _customHandler;
        constructor(propertyName: string, propertyType: wijmo.meta.PropertyType, changeEvent?: string, enumType?: any, isNativeControlProperty?: boolean, priority?: number);
        scopeBindingMode: string;
        customHandler: (scope: ng.IScope, control: wijmo.Control, value: any, oldValue: any, link: WjLink) => any;
    }
    class EventDesc extends wijmo.meta.EventDescBase {
    }
    class ComplexPropDesc extends wijmo.meta.ComplexPropDescBase {
    }
}

declare module wijmo.angular {
    class WjDirective implements ng.IDirective {
        static _versionOk(minVer: string): boolean;
        static _parPropAttr: string;
        static _wjModelPropAttr: string;
        static _initPropAttr: string;
        static _initEventAttr: string;
        static _cntrlScopeProp: string;
        static _elemScopeProp: string;
        static _cntrlLinkProp: string;
        static _scopeChildrenProp: string;
        static _dirIdAttr: string;
        static _optionalAttr: boolean;
        static _dynaTemplates: boolean;
        static _angStripPrefixes: string[];
        private static _dirIdCounter;
        link: (scope: ng.IScope, templateElement: ng.IAugmentedJQuery, templateAttributes: ng.IAttributes, controller: any) => any;
        controller: any;
        replace: boolean;
        require: any;
        restrict: string;
        scope: any;
        template: any;
        transclude: any;
        _property: string;
        _isPropertyArray: boolean;
        _ownObject: boolean;
        _parentReferenceProperty: string;
        _ngModelProperty: string;
        _isCustomParentInit: boolean;
        _props: PropDesc[];
        _events: EventDesc[];
        _complexProps: ComplexPropDesc[];
        _$parse: any;
        private _stripReq;
        private _dirId;
        readonly _controlConstructor: any;
        _getMetaDataId(): any;
        _getMetaData(): wijmo.meta.MetaDataBase;
        constructor();
        private _initDirective();
        _initSharedMeta(): void;
        _initProps(): void;
        _initEvents(): void;
        _createLink(): WjLink;
        _controllerImpl(controller: any, scope: any, tElement: any): void;
        _initControl(element: any): any;
        _isChild(): boolean;
        _isParentInitializer(): boolean;
        _isParentReferencer(): boolean;
        _scopeToAttrName(scopeName: string): string;
        _getComplexPropDesc(propName: string): ComplexPropDesc;
        private _initScopeEvents();
        private _initScopeDescription();
        _postLinkFn(): (scope: any, tElement: ng.IAugmentedJQuery, tAttrs: ng.IAttributes, controller?: any) => void;
        private _prepareProps();
        private _stripRequire(index);
        _getId(): string;
        static _removeTransclude(html: string): string;
    }
    class WjLink {
        directive: WjDirective;
        scope: ng.IScope;
        tElement: ng.IAugmentedJQuery;
        tAttrs: ng.IAttributes;
        controller: any;
        directiveTemplateElement: JQuery;
        control: any;
        parent: WjLink;
        ngModel: ng.INgModelController;
        private _ngModelPropDesc;
        private _nonAssignable;
        private _parentPropDesc;
        private _definedProps;
        private _definedEvents;
        private _oldValues;
        _isInitialized: boolean;
        private _hasTriggeredInitialized;
        private _isNgModelInitialized;
        private _scopeSuspend;
        private _suspendedEvents;
        private _siblingInsertedEH;
        private _destroyEhUnreg;
        _areChlildrenReady: boolean;
        _isDestroyed: boolean;
        constructor();
        _link(): void;
        _onChildrenReady(): void;
        private _createInstance();
        private _parentReady(parentLink);
        _initParent(): void;
        _destroy(): void;
        private _siblingInserted(e);
        private _notifyReady();
        _initControl(): any;
        private _prepareControl();
        private _setupScopeWithControlProperties();
        private _initNonAssignable();
        _suspendScope(): void;
        _resumeScope(): void;
        _isScopeSuspended(): boolean;
        _isAttrDefined(name: string): boolean;
        private _isAppliedToParent;
        _childInitialized(child: WjLink): void;
        private _thisInitialized();
        _initialized(): void;
        private _appliedToParent();
        private _checkRaiseInitialized();
        private _addWatchers();
        private _addEventHandlers();
        private _addEventHandler(eventDesc);
        private _updateScope(eventInfo?);
        private _ngModelRender();
        private _castValueToType(value, prop);
        private _isChild();
        private _isParentInitializer();
        private _isParentReferencer();
        private _getParentProp();
        private _getParentReferenceProperty();
        private _useParentObj();
        private _isParentArray();
        private _parentInCtor();
        private _getNgModelProperty();
        private _updateNgModelPropDesc();
        _safeApply(scope: any, name: any, value: any): boolean;
        _shouldApply(scope: any, name: any, value: any): boolean;
        _canApply(scope: any, name: any): boolean;
        _nullOrValue(value: any): any;
        _getIndex(): number;
    }
}

declare module wijmo.angular {
}

declare module wijmo.angular {
    class WjMenuLink extends WjLink {
        private _closingApplyTimeOut;
        _initControl(): any;
        _initialized(): void;
        private _fmtItem(s, e);
        private _loadingItems(s);
    }
}

declare module wijmo.angular {
}

declare module wijmo.angular {
}

declare module wijmo.angular {
    /**
        * AngularJS directive for the @see:FlexGrid control.
        *
        * Use the <b>wj-flex-grid</b> directive to add grids to your AngularJS applications.
        * Note that directive and parameter names must be formatted as lower-case with dashes
        * instead of camel-case. For example:
        *
        * <pre>&lt;p&gt;Here is a FlexGrid control:&lt;/p&gt;
        * &lt;wj-flex-grid items-source="data"&gt;
        *   &lt;wj-flex-grid-column
        *     header="Country"
        *     binding="country"&gt;
        *   &lt;/wj-flex-grid-column&gt;
        *   &lt;wj-flex-grid-column
        *     header="Sales"
        *     binding="sales"&gt;
        *   &lt;/wj-flex-grid-column&gt;
        *   &lt;wj-flex-grid-column
        *     header="Expenses"
        *     binding="expenses"&gt;
        *   &lt;/wj-flex-grid-column&gt;
        *   &lt;wj-flex-grid-column
        *     header="Downloads"
        *     binding="downloads"&gt;
        *   &lt;/wj-flex-grid-column&gt;
        * &lt;/wj-flex-grid&gt;</pre>
        *
        * The example below creates a FlexGrid control and binds it to a 'data' array
        * exposed by the controller. The grid has three columns, each corresponding to
        * a property of the objects contained in the source array.
        *
        * @fiddle:QNb9X
        *
        * The <b>wj-flex-grid</b> directive supports the following attributes:
        *
        * <dl class="dl-horizontal">
        *   <dt>allow-add-new</dt>              <dd><code>@</code> A value indicating whether to show a new row
        *                                     template so users can add items to the source collection.</dd>
        *   <dt>allow-delete</dt>             <dd><code>@</code> A value indicating whether the grid deletes the
        *                                     selected rows when the Delete key is pressed.</dd>
        *   <dt>allow-dragging</dt>           <dd><code>@</code> An @see:AllowDragging value indicating
        *                                     whether and how the user can drag rows and columns with the mouse.</dd>
        *   <dt>allow-merging</dt>            <dd><code>@</code> An @see:AllowMerging value indicating
        *                                     which parts of the grid provide cell merging.</dd>
        *   <dt>allow-resizing</dt>           <dd><code>@</code> An @see:AllowResizing value indicating
        *                                     whether users are allowed to resize rows and columns with the mouse.</dd>
        *   <dt>allow-sorting</dt>            <dd><code>@</code> A boolean value indicating whether users can sort
        *                                     columns by clicking the column headers.</dd>
        *   <dt>auto-generate-columns</dt>    <dd><code>@</code> A boolean value indicating whether the grid generates
        *                                     columns automatically based on the <b>items-source</b>.</dd>
        *   <dt>child-items-path</dt>         <dd><code>@</code> The name of the property used to generate
        *                                     child rows in hierarchical grids (or an array of property names if items
        *                                     at different hierarchical levels use different names for their child items).</dd>
        *   <dt>control</dt>                  <dd><code>=</code> A reference to the @see:FlexGrid control
        *                                     created by this directive.</dd>
        *   <dt>defer-resizing</dt>           <dd><code>=</code> A boolean value indicating whether row and column
        *                                     resizing should be deferred until the user releases the mouse button.</dd>
        *   <dt>frozen-columns</dt>           <dd><code>@</code> The number of frozen (non-scrollable) columns in the grid.</dd>
        *   <dt>frozen-rows</dt>              <dd><code>@</code> The number of frozen (non-scrollable) rows in the grid.</dd>
        *   <dt>group-header-format</dt>      <dd><code>@</code> The format string used to create the group
        *                                     header content.</dd>
        *   <dt>headers-visibility</dt>       <dd><code>=</code> A @see:HeadersVisibility value
        *                                     indicating whether the row and column headers are visible. </dd>
        *   <dt>ime-enabled</dt>              <dd><code>@</code> Gets or sets a value that determines whether the grid should
        *                                     support Input Method Editors (IME) while not in edit mode.</dd>
        *   <dt>initialized</dt>              <dd><code>&</code> This event occurs after the binding has finished
        *                                     initializing the control with attribute values.</dd>
        *   <dt>is-initialized</dt>           <dd><code>=</code> A value indicating whether the binding has finished
        *                                     initializing the control with attribute values. </dd>
        *   <dt>item-formatter</dt>           <dd><code>=</code> A function that customizes
        *                                     cells on this grid.</dd>
        *   <dt>items-source</dt>             <dd><code>=</code> An array or @see:ICollectionView object that
        *                                     contains the items shown on the grid.</dd>
        *   <dt>is-read-only</dt>             <dd><code>@</code> A boolean value indicating whether the user is
        *                                     prevented from editing grid cells by typing into them.</dd>
        *   <dt>merge-manager</dt>            <dd><code>=</code> A @see:MergeManager object that specifies
        *                                     the merged extent of the specified cell.</dd>
        *   <dt>selection-mode</dt>           <dd><code>@</code> A @see:SelectionMode value
        *                                     indicating whether and how the user can select cells.</dd>
        *   <dt>show-groups</dt>              <dd><code>@</code> A boolean value indicating whether to insert group
        *                                     rows to delimit data groups.</dd>
        *   <dt>show-sort</dt>                <dd><code>@</code> A boolean value indicating whether to display sort
        *                                     indicators in the column headers.</dd>
        *   <dt>sort-row-index</dt>           <dd><code>@</code> A number specifying the index of row in the column
        *                                     header panel that shows and changes the current sort.</dd>
        *   <dt>tree-indent</dt>              <dd><code>@</code> The indentation, in pixels, used to offset row
        *                                     groups of different levels.</dd>
        *   <dt>beginning-edit</dt>           <dd><code>&</code> Handler for the @see:FlexGrid.beginningEdit event.</dd>
        *   <dt>cell-edit-ended</dt>          <dd><code>&</code> Handler for the @see:FlexGrid.cellEditEnded event.</dd>
        *   <dt>cell-edit-ending</dt>         <dd><code>&</code> Handler for the @see:FlexGrid.cellEditEnding event.</dd>
        *   <dt>prepare-cell-for-edit</dt>    <dd><code>&</code> Handler for the @see:FlexGrid.prepareCellForEdit event.</dd>
        *   <dt>resizing-column</dt>          <dd><code>&</code> Handler for the @see:FlexGrid.resizingColumn event.</dd>
        *   <dt>resized-column</dt>           <dd><code>&</code> Handler for the @see:FlexGrid.resizedColumn event.</dd>
        *   <dt>dragged-column</dt>           <dd><code>&</code> Handler for the @see:FlexGrid.draggedColumn event.</dd>
        *   <dt>dragging-column</dt>          <dd><code>&</code> Handler for the @see:FlexGrid.draggingColumn event.</dd>
        *   <dt>sorted-column</dt>            <dd><code>&</code> Handler for the @see:FlexGrid.sortedColumn event.</dd>
        *   <dt>sorting-column</dt>           <dd><code>&</code> Handler for the @see:FlexGrid.sortingColumn event.</dd>
        *   <dt>deleting-row</dt>             <dd><code>&</code> Handler for the @see:FlexGrid.deletingRow event.</dd>
        *   <dt>dragging-row</dt>             <dd><code>&</code> Handler for the @see:FlexGrid.draggingRow event.</dd>
        *   <dt>dragged-row</dt>              <dd><code>&</code> Handler for the @see:FlexGrid.draggedRow event.</dd>
        *   <dt>resizing-row</dt>             <dd><code>&</code> Handler for the @see:FlexGrid.resizingRow event.</dd>
        *   <dt>resized-row</dt>              <dd><code>&</code> Handler for the @see:FlexGrid.resizedRow event.</dd>
        *   <dt>row-added</dt>                <dd><code>&</code> Handler for the @see:FlexGrid.rowAdded event.</dd>
        *   <dt>row-edit-ended</dt>           <dd><code>&</code> Handler for the @see:FlexGrid.rowEditEnded event.</dd>
        *   <dt>row-edit-ending</dt>          <dd><code>&</code> Handler for the @see:FlexGrid.rowEditEnding event.</dd>
        *   <dt>loaded-rows</dt>              <dd><code>&</code> Handler for the @see:FlexGrid.loadedRows event.</dd>
        *   <dt>loading-rows</dt>             <dd><code>&</code> Handler for the @see:FlexGrid.loadingRows event.</dd>
        *   <dt>group-collapsed-changed</dt>  <dd><code>&</code> Handler for the @see:FlexGrid.groupCollapsedChanged event.</dd>
        *   <dt>group-collapsed-changing</dt> <dd><code>&</code> Handler for the @see:FlexGrid.groupCollapsedChanging event.</dd>
        *   <dt>items-source-changed</dt>     <dd><code>&</code> Handler for the @see:FlexGrid.itemsSourceChanged event.</dd>
        *   <dt>selection-changing</dt>       <dd><code>&</code> Handler for the @see:FlexGrid.selectionChanging event.</dd>
        *   <dt>selection-changed</dt>        <dd><code>&</code> Handler for the @see:FlexGrid.selectionChanged event.</dd>
        *   <dt>got-focus</dt>                <dd><code>&</code> Handler for the @see:FlexGrid.gotFocus event.</dd>
        *   <dt>lost-focus</dt>               <dd><code>&</code> Handler for the @see:FlexGrid.lostFocus event.</dd>
        *   <dt>scroll-position-changed</dt>  <dd><code>&</code> Handler for the @see:FlexGrid.scrollPositionChanged event.</dd>
        * </dl>
        *
        * The <b>wj-flex-grid</b> directive may contain @see:WjFlexGridColumn, @see:WjFlexGridCellTemplate and
        * @see:WjFlexGridDetail child directives.
        */
    class WjFlexGrid extends WjDirective {
        _$compile: ng.ICompileService;
        _$interpolate: ng.IInterpolateService;
        constructor($compile: ng.ICompileService, $interpolate: ng.IInterpolateService);
        readonly _controlConstructor: typeof grid.FlexGrid;
        _createLink(): WjLink;
        _initProps(): void;
    }
    class WjFlexGridLink extends WjLink {
        _initControl(): any;
    }
    /**
     * Defines the type of cell to which the template applies.
     * This value is specified in the <b>cell-type</b> attribute
     * of the @see:WjFlexGridCellTemplate directive.
     */
    enum CellTemplateType {
        /** Defines a regular (data) cell. */
        Cell = 0,
        /** Defines a cell in edit mode. */
        CellEdit = 1,
        /** Defines a column header cell. */
        ColumnHeader = 2,
        /** Defines a row header cell. */
        RowHeader = 3,
        /** Defines a row header cell in edit mode. */
        RowHeaderEdit = 4,
        /** Defines a top left cell. */
        TopLeft = 5,
        /** Defines a group header cell in a group row. */
        GroupHeader = 6,
        /** Defines a regular cell in a group row. */
        Group = 7,
        /** Defines a column footer cell. */
        ColumnFooter = 8,
        /** Defines a bottom left cell (at the intersection of the row header and column footer cells). **/
        BottomLeft = 9,
    }
}

declare module wijmo.angular {
    /**
     * AngularJS directive for the @see:PivotGrid control.
     *
     * Use the <b>wj-pivot-grid</b> and <b>wj-pivot-panel</b> directives
     * to add pivot tables to your AngularJS applications.
     *
     * Directive and parameter names must be formatted as lower-case with dashes
     * instead of camel-case. For example:
     *
     * <pre>&lt;wj-pivot-panel
     *     control="thePanel"
     *     items-source="rawData"&gt;
     * &lt;/wj-pivot-panel&gt;
     * &lt;wj-pivot-grid
     *     items-source="thePanel"
     *     show-detail-on-double-click="false"
     *     custom-context-menu="true"&gt;
     * &lt;/wj-pivot-grid&gt;</pre>
     *
     * The <b>wj-pivot-grid</b> directive extends the <b>wj-flex-grid</b> directive
     * and adds support for the following attributes:
     *
     * <dl class="dl-horizontal">
     *   <dt>items-source</dt>                  <dd>Gets or sets the @see:PivotPanel that defines the view
     *                                              displayed by this @see:PivotGrid.</dd>
     *   <dt>show-detail-on-double-click</dt>   <dd>Gets or sets whether the grid should show a popup containing the
     *                                              detail records when the user double-clicks a cell.</dd>
     *   <dt>custom-context-menu</dt>           <dd>Gets or sets whether the grid should provide a custom context menu
     *                                              with commands for changing field settings and showing detail records.</dd>
     *   <dt>collapsible-subtotals</dt>         <dd>Gets or sets whether the grid should allow users to collapse and
     *                                              expand subtotal groups of rows and columns.</dd>
     *   <dt>center-headers-vertically</dt>     <dd>Gets or sets whether the content of header cells should be vertically centered.</dd>
     * </dl>
     */
    class WjPivotGrid extends WjFlexGrid {
        constructor($compile: ng.ICompileService, $interpolate: ng.IInterpolateService);
        readonly _controlConstructor: typeof olap.PivotGrid;
    }
    /**
     * AngularJS directive for the @see:PivotChart control.
     *
     * Use the <b>wj-pivot-chart</b> and <b>wj-pivot-panel</b> directives
     * to add pivot charts to your AngularJS applications.
     *
     * Directive and parameter names must be formatted as lower-case with dashes
     * instead of camel-case. For example:
     *
     * <pre>&lt;wj-pivot-panel
     *     control="thePanel"
     *     items-source="rawData"&gt;
     * &lt;/wj-pivot-panel&gt;
     * &lt;wj-pivot-chart
     *     items-source="thePanel"
     *     chart-type="Bar"
     *     max-series="10"
     *     max-points="100"&gt;
     * &lt;/wj-pivot-chart&gt;</pre>
     *
     * The <b>wj-pivot-chart</b> directive supports the following attributes:
     *
     * <dl class="dl-horizontal">
     *   <dt>items-source</dt>                  <dd>Gets or sets the @see:PivotPanel that defines the view
     *                                              displayed by this @see:PivotChart.</dd>
     *   <dt>chart-type</dt>                    <dd>Gets or sets a @see:PivotChartType value that defines
     *                                              the type of chart to display.</dd>
     *   <dt>show-hierarchical-axes</dt>        <dd>Gets or sets whether the chart should group axis annotations for grouped data.</dd>
     *   <dt>stacking</dt>                      <dd>Gets or sets a @see:Stacking value that determines whether and how the series
     *                                              objects are stacked.</dd>
     *   <dt>show-totals</dt>                   <dd>Gets or sets a whether the chart should include only totals.</dd>
     *   <dt>max-series</dt>                    <dd>Gets or sets the maximum number of data series to be shown in the chart.</dd>
     *   <dt>max-points</dt>                    <dd>Gets or sets the maximum number of points to be shown in each series.</dd>
     * </dl>
     */
    class WjPivotChart extends WjDirective {
        readonly _controlConstructor: typeof olap.PivotChart;
    }
    /**
     * AngularJS directive for the @see:PivotPanel control.
     *
     * Use the <b>wj-pivot-panel</b> directive as a data source for
     * <b>wj-pivot-grid</b> and <b>wj-pivot-chart</b> directives
     * to add pivot tables and charts to your AngularJS applications.
     *
     * Directive and parameter names must be formatted as lower-case with dashes
     * instead of camel-case. For example:
     *
     * <pre>&lt;wj-pivot-panel
     *     control="thePanel"
     *     items-source="rawData"&gt;
     * &lt;/wj-pivot-panel&gt;
     * &lt;wj-pivot-grid
     *     items-source="thePanel"
     *     show-detail-on-double-click="false"
     *     custom-context-menu="true"&gt;
     * &lt;/wj-pivot-grid&gt;</pre>
     *
     * The <b>wj-pivot-panel</b> directive supports the following attributes:
     *
     * <dl class="dl-horizontal">
     *   <dt>items-source</dt>                  <dd>Gets or sets the raw data used to generate pivot views.</dd>
     *   <dt>auto-generate-fields</dt>          <dd>Gets or sets whether the panel should populate its fields
     *                                              collection automatically based on the @see:PivotPanel.itemsSource.</dd>
     *   <dt>view-definition</dt>               <dd>Gets or sets the current pivot view definition as a JSON string.</dd>
     *   <dt>engine</dt>                        <dd>Gets a reference to the @see:PivotEngine that summarizes the data.</dd>
     * </dl>
     */
    class WjPivotPanel extends WjDirective {
        constructor();
        readonly _controlConstructor: typeof olap.PivotPanel;
    }
}

declare module wijmo.angular {
}

declare module wijmo.angular {
}

/**
 * Contains AngularJS directives for the Wijmo controls.
 *
 * The directives allow you to add Wijmo controls to
 * <a href="https://angularjs.org/" target="_blank">AngularJS</a>
 * applications using simple markup in HTML pages.
 *
 * You can use directives as regular HTML tags in the page markup. The
 * tag name corresponds to the control name, prefixed with "wj-," and the
 * attributes correspond to the names of control properties and events.
 *
 * All control, property, and event names within directives follow
 * the usual AngularJS convention of replacing camel-casing with hyphenated
 * lower-case names.
 *
 * AngularJS directive parameters come in three flavors, depending on the
 * type of binding they use. The table below describes each one:
 *
 * <dl class="dl-horizontal">
 *   <dt><code>@</code></dt>   <dd>By value, or one-way binding. The attribute
 *                             value is interpreted as a literal.</dd>
 *   <dt><code>=</code></dt>   <dd>By reference, or two-way binding. The
 *                             attribute value is interpreted as an expression.</dd>
 *   <dt><code>&</code></dt>   <dd>Function binding. The attribute value
 *                             is interpreted as a function call, including the parameters.</dd>
 * </dl>
 *
 * For more details on the different binding types, please see <a href=
 * "http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-2-isolate-scope"
 * target="_blank"> Dan Wahlin's blog on directives</a>.
 *
 * The documentation does not describe directive events because they are identical to
 * the control events, and the binding mode is always the same (function binding).
 *
 * To illustrate, here is the markup used to create a @see:ComboBox control:
 *
 * <pre>&lt;wj-combo-box
 *   text="ctx.theCountry"
 *   items-source="ctx.countries"
 *   is-editable="true"
 *   selected-index-changed="ctx.selChanged(s, e)"&gt;
 * &lt;/wj-combo-box&gt;</pre>
 *
 * Notice that the <b>text</b> property of the @see:ComboBox is bound to a controller
 * variable called "ctx.theCountry." The binding goes two ways; changes in the control
 * update the scope, and changes in the scope update the control. To
 * initialize the <b>text</b> property with a string constant, enclose
 * the attribute value in single quotes (for example, <code>text="'constant'"</code>).
 *
 * Notice also that the <b>selected-index-changed</b> event is bound to a controller
 * method called "selChanged," and that the binding includes the two event parameters
 * (without the parameters, the method is not called).
 * Whenever the control raises the event, the directive invokes the controller method.
 *
 * All Wijmo Angular directives include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;wj-flex-grid initialized="initGrid(s,e)"&gt;
 * &lt;/wj-flex-grid&gt;</pre>
 *
 * <pre>// controller
 * $scope.initGrid: function(s, e) {
 *
 *   // assign a custom MergeManager to the grid
 *   s.mergeManager = new CustomMergeManager(s);
 *
 * }</pre>
 */
declare module wijmo.angular {
}

