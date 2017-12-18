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
 * Provides classes that support the OData protocol, including the
 * @see:ODataCollectionView class.
 *
 * OData is a standardized protocol for creating and consuming data APIs.
 * OData builds on core protocols like HTTP and commonly accepted methodologies like REST.
 * The result is a uniform way to expose full-featured data APIs. (http://www.odata.org/)
 */
declare module wijmo.odata {
    /**
     * Extends the @see:CollectionView class to support loading and saving data
     * to and from OData sources.
     *
     * You can use the @see:ODataCollectionView class to load data from OData services
     * and use it as a data source for any Wijmo controls.
     *
     * In addition to full CRUD support you get all the @see:CollectionView features
     * including sorting, filtering, paging, and grouping. The sorting, filtering, and
     * paging functions may be performed on the server or on the client.
     *
     * The code below shows how you can instantiate an @see:ODataCollectionView that
     * selects some fields from the data source and provides sorting on the client.
     * Notice how the 'options' parameter is used to pass in initialization data,
     * which is the same approach used when initializing controls:
     *
     * <pre>var url = 'http://services.odata.org/Northwind/Northwind.svc';
     * var categories = new wijmo.odata.ODataCollectionView(url, 'Categories', {
     *   fields: ['CategoryID', 'CategoryName', 'Description'],
     *   sortOnServer: false
     * });</pre>
     */
    class ODataCollectionView extends collections.CollectionView {
        _url: string;
        _tbl: string;
        _count: number;
        _fields: string[];
        _keys: string[];
        _dataTypes: any;
        _sortOnServer: boolean;
        _pageOnServer: boolean;
        _filterOnServer: boolean;
        _inferDataTypes: boolean;
        _dataTypesInferred: any;
        _filterDef: string;
        _toGetData: any;
        _loading: boolean;
        _requestHeaders: any;
        _odv: number;
        static _odvCache: {};
        static _rxDate: RegExp;
        /**
         * Initializes a new instance of the @see:ODataCollectionView class.
         *
         * @param url Url of the OData service (for example
         * 'http://services.odata.org/Northwind/Northwind.svc').
         * @param tableName Name of the table (entity) to retrieve from the service.
         * If not provided, a list of the tables (entities) available is retrieved.
         * @param options JavaScript object containing initialization data (property
         * values and event handlers) for the @see:ODataCollectionView.
         */
        constructor(url: string, tableName: string, options?: any);
        /**
         * Gets the name of the table (entity) that this collection is bound to.
         */
        readonly tableName: string;
        /**
         * Gets or sets an array containing the names of the fields to retrieve from
         * the data source.
         *
         * If this property is set to null or to an empty array, all fields are
         * retrieved.
         *
         * For example, the code below creates an @see:ODataCollectionView that
         * gets only three fields from the 'Categories' table in the database:
         *
         * <pre>var categories = new wijmo.data.ODataCollectionView(url, 'Categories', {
         *   fields: ['CategoryID', 'CategoryName', 'Description']
         * });</pre>
         */
        fields: string[];
        /**
         * Gets or sets an object containing request headers to be used when sending
         * or requesting data.
         *
         * The most typical use for this property is in scenarios where authentication
         * is required. For example:
         *
         * <pre>var categories = new wijmo.odata.ODataCollectionView(serviceUrl, 'Categories', {
         *   fields: ['Category_ID', 'Category_Name'],
         *   requestHeaders: { Authorization: db.token }
         * });</pre>
         */
        requestHeaders: any;
        /**
         * Gets or sets an array containing the names of the key fields.
         *
         * Key fields are required for update operations (add/remove/delete).
         */
        keys: string[];
        /**
         * Gets or sets a JavaScript object to be used as a map for coercing data types
         * when loading the data.
         *
         * The object keys represent the field names and the values are @see:DataType values
         * that indicate how the data should be coerced.
         *
         * For example, the code below creates an @see:ODataCollectionView and specifies
         * that 'Freight' values, which are stored as strings in the database, should be
         * converted into numbers; and that three date fields should be converted into dates:
         *
         * <pre>var orders = new wijmo.data.ODataCollectionView(url, 'Orders', {
         *   dataTypes: {
         *     Freight: wijmo.DataType.Number
         *     OrderDate: wijmo.DataType.Date,
         *     RequiredDate: wijmo.DataType.Date,
         *     ShippedDate: wijmo.DataType.Date,
         *   }
         * });</pre>
         *
         * This property is useful when the database contains data stored in
         * formats that do not conform to common usage.
         *
         * In most cases you don't have to provide information about the
         * data types, because the @see:inferDataTypes property handles
         * the conversion of Date values automatically.
         *
         * If you do provide explicit type information, the @see:inferDataTypes
         * property is not applied. Because of this, any data type information
         * that is provided should be complete, including all fields of type
         * Date.
         */
        dataTypes: any;
        /**
         * Gets or sets a value that determines whether fields that contain
         * strings that look like standard date representations should be
         * converted to dates automatically.
         *
         * This property is set to true by default, because the @see:ODataCollectionView
         * class uses JSON and that format does not support Date objects.
         *
         * This property has no effect if specific type information is provided using
         * the @see:dataTypes property.
         */
        inferDataTypes: boolean;
        /**
         * Gets or sets a value that determines whether sort operations
         * should be performed on the server or on the client.
         *
         * Use the @see:sortDescriptions property to specify how the
         * data should be sorted.
         */
        sortOnServer: boolean;
        /**
         * Gets or sets a value that determines whether paging should be
         * performed on the server or on the client.
         *
         * Use the @see:pageSize property to enable paging.
         */
        pageOnServer: boolean;
        /**
         * Gets or sets a value that determines whether filtering should be performed on
         * the server or on the client.
         *
         * Use the @see:filter property to perform filtering on the client, and use the
         * @see:filterDefinition property to perform filtering on the server.
         *
         * In some cases it may be desirable to apply independent filters on the client
         * <b>and</b> on the server.
         *
         * You can achieve this by setting (1) the @see:filterOnServer property to false
         * and the @see:filter property to a filter function (to enable client-side filtering)
         * and (2) the @see:filterDefinition property to a filter string (to enable server-side
         * filtering).
         */
        filterOnServer: boolean;
        /**
         * Gets or sets a string containing an OData filter specification to
         * be used for filtering the data on the server.
         *
         * The filter definition syntax is described in the
         * <a href="http://www.odata.org/documentation/odata-version-2-0/uri-conventions/">OData documentation</a>.
         *
         * For example, the code below causes the server to return records where the 'CompanyName'
         * field starts with 'A' and ends with 'S':
         *
         * <pre>view.filterDefinition = "startswith(CompanyName, 'A') and endswith(CompanyName, 'B')";</pre>
         *
         * Filter definitions can be generated automatically. For example, the
         * @see:FlexGridFilter component detects whether its data source is an
         * @see:ODataCollectionView and automatically updates both the
         * @see:ODataCollectionView.filter and @see:ODataCollectionView.filterDefinition
         * properties.
         *
         * Note that the @see:ODataCollectionView.filterDefinition property is applied even if the
         * @see:ODataCollectionView.filterOnServer property is set to false. This allows you to apply
         * server and client filters to the same collection, which can be useful in many scenarios.
         *
         * For example, the code below uses the @see:ODataCollectionView.filterDefinition property
         * to filter on the server and the @see:ODataCollectionView.filter property to further
         * filter on the client. The collection will show items with names that start with 'C'
         * and have unit prices greater than 20:
         *
         * <pre>var url = 'http://services.odata.org/V4/Northwind/Northwind.svc/';
         * var data = new wijmo.odata.ODataCollectionView(url, 'Products', {
         *   oDataVersion: 4,
         *   filterDefinition: 'startswith(ProductName, \'C\')', // server filter
         *   filterOnServer: false, // client filter
         *   filter: function(product) {
         *     return product.UnitPrice &gt; 20;
         *   },
         * });</pre>
         */
        filterDefinition: string;
        /**
         * Updates the filter definition based on a known filter provider such as the
         * @see:FlexGridFilter.
         *
         * @param filterProvider Known filter provider, typically an instance of a
         * @see:FlexGridFilter.
         */
        updateFilterDefinition(filterProvider: any): void;
        /**
         * Gets or sets the OData version used by the server.
         *
         * There are currently four versions of OData services, 1.0 through 4.0.
         * Version 4.0 is used by the latest services, but there are many legacy
         * services still in operation.
         *
         * If you know what version of OData your service implements, set the
         * @see:oDataVersion property to the appropriate value (1 through 4) when
         * creating the @see:ODataCollectionView (see example below).
         *
         * <pre>var url = 'http://services.odata.org/Northwind/Northwind.svc';
         * var categories = new wijmo.odata.ODataCollectionView(url, 'Categories', {
         *   oDataVersion: 1.0, // legacy OData source
         *   fields: ['CategoryID', 'CategoryName', 'Description'],
         *   sortOnServer: false
         * });</pre>
         *
         * If you do not know what version of OData your service implements (perhaps
         * you are writing an OData explorer application), then do not specify the
         * version. In this case, the @see:ODataCollectionView will get this information
         * from the server. This operation requires an extra request, but only once
         * per service URL, so the overhead is small.
         */
        oDataVersion: number;
        /**
         * Gets a value that indicates the @see:ODataCollectionView is
         * currently loading data.
         *
         * This property can be used to provide progress indicators.
         */
        readonly isLoading: boolean;
        /**
         * Occurs when the @see:ODataCollectionView starts loading data.
         */
        readonly loading: Event;
        /**
         * Raises the @see:loading event.
         */
        onLoading(e?: EventArgs): void;
        /**
         * Occurs when the @see:ODataCollectionView finishes loading data.
         */
        readonly loaded: Event;
        /**
         * Raises the @see:loaded event.
         */
        onLoaded(e?: EventArgs): void;
        /**
         * Loads or re-loads the data from the OData source.
         */
        load(): void;
        /**
         * Occurs when there is an error reading or writing data.
         */
        readonly error: Event;
        /**
         * Raises the @see:error event.
         *
         * By default, errors throw exceptions and trigger a data refresh. If you
         * want to prevent this behavior, set the @see:RequestErrorEventArgs.cancel
         * parameter to true in the event handler.
         *
         * @param e @see:RequestErrorEventArgs that contains information about the error.
         */
        onError(e: RequestErrorEventArgs): boolean;
        /**
         * Override @see:commitNew to add the new item to the database.
         */
        commitNew(): void;
        /**
         * Override @see:commitEdit to modify the item in the database.
         */
        commitEdit(): void;
        /**
         * Override @see:remove to remove the item from the database.
         *
         * @param item Item to be removed from the database.
         */
        remove(item: any): void;
        /**
         * Gets the total number of items in the view before paging is applied.
         */
        readonly totalItemCount: number;
        /**
         * Gets the total number of pages.
         */
        readonly pageCount: number;
        /**
         * Gets or sets the number of items to display on a page.
         */
        pageSize: number;
        /**
         * Raises the @see:pageChanging event.
         *
         * @param e @see:PageChangingEventArgs that contains the event data.
         */
        onPageChanging(e: collections.PageChangingEventArgs): boolean;
        _getPageView(): any[];
        _performRefresh(): void;
        _storeItems(items: any[], append: boolean): void;
        _getReadUrl(nextLink?: string): string;
        _getReadParams(nextLink?: string): any;
        _getData(nextLink?: string): void;
        private _stringifyNumbers(item);
        private _convertItem(dataTypes, item);
        private _getInferredDataTypes(arr);
        private _getServiceUrl();
        private _getSchema();
        private _getWriteUrl(item?);
        private _asODataFilter(filter);
        private _asODataValueFilter(vf);
        private _asODataConditionFilter(cf);
        private _asODataCondition(cf, cond);
        private _asODataValue(val, dataType);
        private _error(xhr);
    }
}

declare module wijmo.odata {
    /**
     * Extends the @see:ODataCollectionView class to support loading data on
     * demand, using the @see:setWindow method.
     *
     * The example below shows how you can declare an @see:ODataCollectionView
     * and synchronize it with a @see:wijmo.grid.FlexGrid control to load the
     * data that is within the grid's viewport:
     *
     * <pre>// declare virtual collection view
     * var vcv = new wijmo.odata.ODataVirtualCollectionView(url, 'Order_Details_Extendeds', {
     *   oDataVersion: 4
     * });
     * // use virtual collection as grid data source
     * flex.itemsSource = vcv;
     * // update data window when the grid scrolls
     * flex.scrollPositionChanged.addHandler(function () {
     *   var rng = flex.viewRange;
     *   vcv.setWindow(rng.row, rng.row2);
     * });</pre>
     *
     * The @see:ODataVirtualCollectionView class implements a 'data window' so only
     * data that is actually being displayed is loaded from the server. Items that are
     * not being displayed are added to the collection as null values until a call
     * to the @see:setWindow method causes them those items to be loaded.
     *
     * This 'on-demand' method of loading data has advantages when dealing with large
     * data sets, because it prevents the application from loading data until it is
     * required. But it does impose some limitation: sorting and filtering must be
     * done on the server; grouping and paging are not supported.
     */
    class ODataVirtualCollectionView extends ODataCollectionView {
        _data: any[];
        _skip: number;
        _start: number;
        _end: number;
        _refresh: boolean;
        _loadOffset: number;
        _toSetWindow: any;
        /**
         * Initializes a new instance of the @see:ODataVirtualCollectionView class.
         *
         * @param url Url of the OData service (for example
         * 'http://services.odata.org/Northwind/Northwind.svc').
         * @param tableName Name of the table (entity) to retrieve from the service.
         * If not provided, a list of the tables (entities) available is retrieved.
         * @param options JavaScript object containing initialization data (property
         * values and event handlers) for the @see:ODataVirtualCollectionView.
         */
        constructor(url: string, tableName: string, options?: any);
        /**
         * Sets the data window to ensure a range of records are loaded into the view.
         *
         * @param start Index of the first item in the data window.
         * @param end Index of the last item in the data window.
         */
        setWindow(start: number, end: number): void;
        /**
         * @see:ODataVirtualCollectionView requires @see:pageOnServer to be set to true.
         */
        pageOnServer: boolean;
        /**
         * @see:ODataVirtualCollectionView requires @see:sortOnServer to be set to true.
         */
        sortOnServer: boolean;
        /**
         * @see:ODataVirtualCollectionView requires @see:filterOnServer to be set to true.
         */
        filterOnServer: boolean;
        /**
         * @see:ODataVirtualCollectionView requires @see:canGroup to be set to false.
         */
        canGroup: boolean;
        _performRefresh(): void;
        _getReadParams(nextLink?: string): any;
        _storeItems(items: any[], append: boolean): void;
        _performSetWindow(start: number, end: number): void;
    }
}

