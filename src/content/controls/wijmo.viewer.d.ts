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
declare module wijmo.viewer {
    var icons: {
        paginated: string;
        print: string;
        exports: string;
        portrait: string;
        landscape: string;
        pageSetup: string;
        previousPage: string;
        nextPage: string;
        firstPage: string;
        lastPage: string;
        backwardHistory: string;
        forwardHistory: string;
        selectTool: string;
        moveTool: string;
        continuousView: string;
        singleView: string;
        fitWholePage: string;
        fitPageWidth: string;
        zoomOut: string;
        zoomIn: string;
        fullScreen: string;
        exitFullScreen: string;
        thumbnails: string;
        outlines: string;
        search: string;
        searchNext: string;
        searchPrevious: string;
        hamburgerMenu: string;
        viewMenu: string;
        searchOptions: string;
        searchLeft: string;
        searchRight: string;
        showZoomBar: string;
        rubberbandTool: string;
        magnifierTool: string;
        rotateDocument: string;
        rotatePage: string;
    }, _hiddenCss: string, _commandTagAttr: string;
    function _pointMove(positive: boolean, pos: Point, detalPosOrX: Point | number, y?: number): Point;
    class _ActionQueue {
        private _actions;
        private _isStarted;
        private _any();
        queue(action: Function): void;
        _continue(): void;
        start(): void;
        readonly isStarted: boolean;
    }
    function _createSvgBtn(svgContent: string): HTMLElement;
    function _setLandscape(pageSettings: _IPageSettings, landscape: boolean): void;
    function _clonePageSettings(src: _IPageSettings): _IPageSettings;
    function _enumToArray(enumType: any): _IEnumItem[];
    function _removeChildren(node: HTMLElement, condition?: (ele: Element) => boolean): void;
    function _toDOMs(html: string): DocumentFragment;
    function _toDOM(html: string): HTMLElement;
    function _addEvent(elm: any, evType: string, fn: Function, useCapture?: boolean): void;
    function _removeEvent(elm: any, evType: string, fn: Function): void;
    function _checkImageButton(button: HTMLElement, checked: boolean): void;
    function _disableImageButton(button: HTMLElement, disabled: boolean): void;
    function _showImageButton(button: HTMLElement, visible: boolean): void;
    function _isDisabledImageButton(button: HTMLElement): boolean;
    function _isCheckedImageButton(button: HTMLElement): boolean;
    function _addWjHandler(key: string, event: Event, func: IEventHandler, self?: any): void;
    function _removeAllWjHandlers(key: string, event: Event): void;
    function _getErrorMessage(reason: any): string;
    function _checkSeparatorShown(container: HTMLElement): void;
    function _twipToPixel(value: number): number;
    function _pixelToTwip(value: number): number;
    function _hasScrollbar(element: Element, isHorizontal?: boolean): boolean;
    function _transformSvg(svg: SVGElement, width: number, height: number, zoomFactor?: number, rotateAngle?: _RotateAngle): SVGElement;
    function _getTransformedPosition(bound: _IRect, size: _ISize, rotateAngle: _RotateAngle, zoomFactor: number): Point;
    function _getRotatedSize(size: _ISize, rotateAngle: _RotateAngle): _ISize;
    function _getPositionByHitTestInfo(hitTestInfo: _IHitTestInfo): _IDocumentPosition;
}

declare module wijmo.viewer {
    class _DocumentSource {
        static _abstractMethodException: string;
        private _features;
        private _paginated;
        private _hasOutlines;
        private _pageCount;
        private _service;
        private _supportedExportDescriptions;
        private _pageSettings;
        private _isLoadCompleted;
        private _isDisposed;
        private _errors;
        private _expiredDateTime;
        private _executionDateTime;
        private _initialPosition;
        private static _isMobileEnvironment;
        private static _isIOSEnvironment;
        pageCountChanged: Event;
        disposed: Event;
        pageSettingsChanged: Event;
        loading: Event;
        loadCompleted: Event;
        queryLoadingData: Event;
        onQueryLoadingData(e: QueryLoadingDataEventArgs): void;
        constructor(options: _IDocumentOptions);
        _updateIsLoadCompleted(value: boolean): void;
        _updateIsDisposed(value: boolean): void;
        _getIsDisposed(): boolean;
        _checkHasOutlines(data: _IDocumentStatus): boolean;
        _checkIsLoadCompleted(data: _IDocumentStatus): boolean;
        static _isMobile(): boolean;
        static _isIOS(): boolean;
        readonly executionDateTime: Date;
        readonly expiredDateTime: Date;
        readonly errors: string[];
        readonly isLoadCompleted: boolean;
        readonly isDisposed: boolean;
        readonly features: _IDocumentFeatures;
        readonly pageSettings: _IPageSettings;
        onPageSettingsChanged(e?: EventArgs): void;
        onLoadCompleted(e?: EventArgs): void;
        onLoading(e?: EventArgs): void;
        onDisposed(e?: EventArgs): void;
        setPageSettings(pageSettings: _IPageSettings): IPromise;
        _updatePageSettings(newValue: _IPageSettings): void;
        readonly _innerService: _DocumentService;
        readonly paginated: boolean;
        readonly hasOutlines: boolean;
        readonly pageCount: number;
        initialPosition: _IDocumentPosition;
        readonly service: _IDocumentService;
        getSupportedExportDescriptions(): IPromise;
        getBookmark(name: string): IPromise;
        executeCustomAction(actionString: string): IPromise;
        getOutlines(): IPromise;
        getFeatures(): IPromise;
        dispose(): IPromise;
        load(): IPromise;
        _updateExecutionInfo(data: _IExecutionInfo): void;
        _updateDocumentStatus(data: _IDocumentStatus): void;
        _getExecutionDateTime(data: _IExecutionInfo): Date;
        _getExpiredDateTime(data: _IDocumentStatus | _IExecutionInfo): Date;
        _getPageCount(data: _IDocumentStatus): number;
        _updatePageCount(value: number): void;
        getStatus(): IPromise;
        _createDocumentService(options: _IDocumentService): _DocumentService;
        onPageCountChanged(e?: EventArgs): void;
        print(rotations?: _RotateAngle[]): void;
        private _removeScript(doc);
        private _rotate(doc, rotations);
        renderToFilter(options: Object): IPromise;
        getRenderToFilterUrl(options: Object): string;
        search(searchOptions: _ISearchOptions): IPromise;
    }
    function _statusJsonReviver(k: string, v: any): any;
    interface _IDocumentStatus {
        status: string;
        errorList: string[];
        progress: number;
        pageCount: number;
        expiredDateTime: Date;
        hasOutlines: boolean;
        initialPosition: any;
    }
    interface _IDocumentFeatures {
        paginated: boolean;
        nonPaginated: boolean;
        textSearchInPaginatedMode: boolean;
        pageSettings: boolean;
    }
    interface _IExecutionInfo {
        path: string;
        loadedDateTime: Date;
        expiredDateTime: Date;
        pageSettings?: _IPageSettings;
        features?: _IDocumentFeatures;
        status?: _IDocumentStatus;
        outlinesLocation: string;
        statusLocation: string;
        pageSettingsLocation: string;
        featuresLocation: string;
        supportedFormatsLocation: string;
    }
    interface _IPageSettings {
        paginated: boolean;
        height: _Unit;
        width: _Unit;
        bottomMargin: _Unit;
        landscape: boolean;
        leftMargin: _Unit;
        paperSize: _PaperKind;
        rightMargin: _Unit;
        topMargin: _Unit;
    }
    interface _ISearchResult {
        nearText: string;
        positionInNearText: number;
        boundsList: _IRect[];
        pageIndex: number;
    }
    interface _IOutlineNode {
        caption: string;
        children: _IOutlineNode[];
        level: number;
        target: string;
        position?: _IDocumentPosition;
    }
    interface _IRect {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    interface _IDocumentPosition {
        pageBounds?: _IRect;
        pageIndex: number;
    }
    interface _IExportDescription {
        name: string;
        format: string;
        optionDescriptions?: _IExportOptionDescription[];
    }
    interface _IExportOptionDescription {
        name: string;
        type: string;
        nullable: boolean;
        defaultValue: any;
        allowedValues?: string[];
        group: string;
    }
    interface _IDocumentService {
        serviceUrl: string;
        filePath: string;
    }
    interface _IDocumentOptions extends _IDocumentService {
        paginated?: boolean;
    }
    class _DocumentService implements _IDocumentService {
        private _url;
        private _documentPath;
        constructor(options: _IDocumentService);
        readonly serviceUrl: string;
        readonly filePath: string;
        getStatus(): IPromise;
        setPageSettings(pageSettings: _IPageSettings): IPromise;
        getBookmark(name: string): IPromise;
        executeCustomAction(actionString: string): IPromise;
        load(data?: any): IPromise;
        dispose(): IPromise;
        getOutlines(): IPromise;
        renderToFilter(options: Object): IPromise;
        search(searchOptions: _ISearchOptions): IPromise;
        getRenderToFilterUrl(options: Object): string;
        getSupportedExportDescriptions(): IPromise;
        getFeatures(): IPromise;
    }
    function _pageSettingsJsonReviver(k: string, v: any): any;
    function _strEndsWith(text: string, suffix: string): boolean;
    function _appendQueryString(url: string, queries: Object): string;
    function _joinUrl(...data: (string | string[])[]): string;
    function _joinStringUrl(data: string[]): string[];
    function _prepareStringUrl(data: string): string[];
    function _httpRequest(url: string, settings?: _IHttpRequest): XMLHttpRequest;
    function _objToParams(obj: Object): string;
    interface _IHttpRequest {
        method?: string;
        data?: any;
        async?: boolean;
        cache?: boolean;
        success?: (xhr: XMLHttpRequest) => void;
        user?: string;
        password?: string;
        requestHeaders?: any;
        beforeSend?: (xhr: XMLHttpRequest) => void;
        error?: (xhr: XMLHttpRequest) => void;
        complete?: (xhr: XMLHttpRequest) => void;
    }
    function _disableCache(url: string): string;
    enum _UnitType {
        Document = 0,
        Inch = 1,
        Mm = 2,
        Pica = 3,
        Point = 4,
        Twip = 5,
        InHs = 6,
        Display = 7,
        Cm = 8,
        Dip = 9,
    }
    class _Unit {
        static _MmPerInch: number;
        static _DocumentUnitsPerInch: number;
        static _PointsPerInch: number;
        static _TwipsPerInch: number;
        static _PicaPerInch: number;
        static _CmPerInch: number;
        static _DisplayPerInch: number;
        static _DipPerInch: number;
        private static _unitTypes;
        private static _unitTypeDic;
        private _value;
        private _units;
        private _valueInPixel;
        constructor(value: any, units?: _UnitType);
        private static _initUnitTypeDic();
        readonly value: number;
        readonly units: _UnitType;
        readonly valueInPixel: number;
        toString(): string;
        static toString(unit: _Unit): string;
        static convertValue(value: number, from: _UnitType, to: _UnitType): number;
    }
    /**
     * Defines the interface of promise which is used for asynchronous calling.
     */
    interface IPromise {
        /**
         * Call the function after a promise is fulfilled or rejected.
         *
         * @param onFulfilled The function which will be executed when a promise is fulfilled.
         * This has a single parameter, the fulfillment value. If a value is returned, it will be
         * passed to the next callback function. If no value is returned, the original value will be passed.
         * @param onRejected The function which will be executed when a promise is rejected.
         * This has a single parameter, the rejection reason. If a value is returned, it will be
         * passed to the next callback function. If no value is returned, the original value will be passed.
         * @return An IPromise equivalent to the value you return from onFulfilled/onRejected after being passed.
         */
        then(onFulfilled?: (value?: any) => any, onRejected?: (reason?: any) => any): IPromise;
        /**
         * Call the function after a promise is rejected.
         *
         * @param onRejected The function which will be executed when a promise is rejected.
         * This has a single parameter, the rejection reason. The return value will be
         * passed to the next callback function.
         * @return An IPromise equivalent to the value returned by onFulfilled/onRejected after being passed.
         */
        catch(onRejected: (reason?: any) => any): IPromise;
    }
    class _Promise implements IPromise {
        private _callbacks;
        then(onFulfilled?: (value?: any) => any, onRejected?: (reason?: any) => any): IPromise;
        catch(onRejected: (reason?: any) => any): IPromise;
        resolve(value?: any): void;
        reject(reason?: any): void;
        onFulfilled(value: any): void;
        onRejected(reason: any): void;
    }
    class _CompositedPromise extends _Promise {
        private _promises;
        constructor(promises: IPromise[]);
        _init(): void;
    }
    enum _PaperKind {
        Custom = 0,
        Letter = 1,
        LetterSmall = 2,
        Tabloid = 3,
        Ledger = 4,
        Legal = 5,
        Statement = 6,
        Executive = 7,
        A3 = 8,
        A4 = 9,
        A4Small = 10,
        A5 = 11,
        B4 = 12,
        B5 = 13,
        Folio = 14,
        Quarto = 15,
        Standard10x14 = 16,
        Standard11x17 = 17,
        Note = 18,
        Number9Envelope = 19,
        Number10Envelope = 20,
        Number11Envelope = 21,
        Number12Envelope = 22,
        Number14Envelope = 23,
        CSheet = 24,
        DSheet = 25,
        ESheet = 26,
        DLEnvelope = 27,
        C5Envelope = 28,
        C3Envelope = 29,
        C4Envelope = 30,
        C6Envelope = 31,
        C65Envelope = 32,
        B4Envelope = 33,
        B5Envelope = 34,
        B6Envelope = 35,
        ItalyEnvelope = 36,
        MonarchEnvelope = 37,
        PersonalEnvelope = 38,
        USStandardFanfold = 39,
        GermanStandardFanfold = 40,
        GermanLegalFanfold = 41,
        IsoB4 = 42,
        JapanesePostcard = 43,
        Standard9x11 = 44,
        Standard10x11 = 45,
        Standard15x11 = 46,
        InviteEnvelope = 47,
        LetterExtra = 50,
        LegalExtra = 51,
        TabloidExtra = 52,
        A4Extra = 53,
        LetterTransverse = 54,
        A4Transverse = 55,
        LetterExtraTransverse = 56,
        APlus = 57,
        BPlus = 58,
        LetterPlus = 59,
        A4Plus = 60,
        A5Transverse = 61,
        B5Transverse = 62,
        A3Extra = 63,
        A5Extra = 64,
        B5Extra = 65,
        A2 = 66,
        A3Transverse = 67,
        A3ExtraTransverse = 68,
        JapaneseDoublePostcard = 69,
        A6 = 70,
        JapaneseEnvelopeKakuNumber2 = 71,
        JapaneseEnvelopeKakuNumber3 = 72,
        JapaneseEnvelopeChouNumber3 = 73,
        JapaneseEnvelopeChouNumber4 = 74,
        LetterRotated = 75,
        A3Rotated = 76,
        A4Rotated = 77,
        A5Rotated = 78,
        B4JisRotated = 79,
        B5JisRotated = 80,
        JapanesePostcardRotated = 81,
        JapaneseDoublePostcardRotated = 82,
        A6Rotated = 83,
        JapaneseEnvelopeKakuNumber2Rotated = 84,
        JapaneseEnvelopeKakuNumber3Rotated = 85,
        JapaneseEnvelopeChouNumber3Rotated = 86,
        JapaneseEnvelopeChouNumber4Rotated = 87,
        B6Jis = 88,
        B6JisRotated = 89,
        Standard12x11 = 90,
        JapaneseEnvelopeYouNumber4 = 91,
        JapaneseEnvelopeYouNumber4Rotated = 92,
        Prc16K = 93,
        Prc32K = 94,
        Prc32KBig = 95,
        PrcEnvelopeNumber1 = 96,
        PrcEnvelopeNumber2 = 97,
        PrcEnvelopeNumber3 = 98,
        PrcEnvelopeNumber4 = 99,
        PrcEnvelopeNumber5 = 100,
        PrcEnvelopeNumber6 = 101,
        PrcEnvelopeNumber7 = 102,
        PrcEnvelopeNumber8 = 103,
        PrcEnvelopeNumber9 = 104,
        PrcEnvelopeNumber10 = 105,
        Prc16KRotated = 106,
        Prc32KRotated = 107,
        Prc32KBigRotated = 108,
        PrcEnvelopeNumber1Rotated = 109,
        PrcEnvelopeNumber2Rotated = 110,
        PrcEnvelopeNumber3Rotated = 111,
        PrcEnvelopeNumber4Rotated = 112,
        PrcEnvelopeNumber5Rotated = 113,
        PrcEnvelopeNumber6Rotated = 114,
        PrcEnvelopeNumber7Rotated = 115,
        PrcEnvelopeNumber8Rotated = 116,
        PrcEnvelopeNumber9Rotated = 117,
        PrcEnvelopeNumber10Rotated = 118,
    }
    /**
     * Provides arguments for @see:queryLoadingData event.
     */
    class QueryLoadingDataEventArgs extends EventArgs {
        private _data;
        /**
         * Initializes a new instance of the @see:QueryLoadingDataEventArgs class.
         *
         * @param data The request data sent to the service on loading the document.
         */
        constructor(data?: any);
        /**
         * Gets the request data sent to the service on loading the document.
         */
        readonly data: any;
    }
    interface _ISearchOptions {
        text: string;
        matchCase?: boolean;
        wholeWord?: boolean;
    }
}

declare module wijmo.viewer {
    class _Report extends _DocumentSource {
        private _hasParameters;
        private _parameters;
        private _status;
        constructor(options: _IReportOptions);
        static getReportNames(serviceUrl: string, reportFilePath: string): IPromise;
        static getReports(serviceUrl: string, path: string, data?: any): IPromise;
        readonly reportName: string;
        statusChanged: Event;
        readonly hasParameters: boolean;
        readonly status: string;
        load(): IPromise;
        _updateStatus(newValue: string): void;
        cancel(): IPromise;
        onStatusChanged(e?: EventArgs): void;
        dispose(): IPromise;
        setParameters(parameters: Object): IPromise;
        getParameters(): IPromise;
        _getIsDisposed(): boolean;
        _updateExecutionInfo(data: _IReportExecutionInfo): void;
        _updateDocumentStatus(data: _IReportStatus): void;
        _checkIsLoadCompleted(data: _IReportStatus): boolean;
        _createDocumentService(options: _IReportService): _ReportService;
        readonly _innerService: _ReportService;
        render(): IPromise;
        executeCustomAction(actionString: string): IPromise;
    }
    interface _IReportService extends _IDocumentService {
        reportName: string;
    }
    interface _IReportOptions extends _IDocumentOptions, _IReportService {
    }
    class _ReportService extends _DocumentService implements _IReportService {
        private _reportName;
        private _instanceId;
        private _status;
        private _outlinesLocation;
        private _statusLocation;
        private _pageSettingsLocation;
        private _featuresLocation;
        private _parametersLocation;
        private static _reportCommand;
        private static _instancesCommand;
        private static _customActionParam;
        private static _renderAction;
        private static _searchAction;
        private static _cancelAction;
        private static _outlinesAction;
        private static _exportAction;
        private static _parametersAction;
        private static _bookmarkAction;
        private static _pageSettingsAction;
        private static _supportedFormatsAction;
        private static _invalidReportControllerError;
        private static _invalidReportCacheControllerError;
        constructor(options: _IReportService);
        readonly isCleared: boolean;
        static getReportNames(serviceUrl: string, reportFilePath: string): IPromise;
        static getReports(serviceUrl: string, path: string, data?: any): IPromise;
        readonly reportName: string;
        getBookmark(name: string): IPromise;
        executeCustomAction(actionString: string): IPromise;
        getStatus(): IPromise;
        getDocumentStatus(): IPromise;
        _getReportCache(): IPromise;
        getParameters(): IPromise;
        _getUrlMainPart(): string;
        _getReportUrl(...params: string[]): string;
        _getReportInstancesUrl(...params: string[]): string;
        _checkReportController(promise: _Promise): boolean;
        _checkReportInstanceController(promise?: _Promise): boolean;
        _getError(xhr: XMLHttpRequest): string;
        render(data?: any): IPromise;
        load(data?: any): IPromise;
        cancel(): IPromise;
        dispose(): IPromise;
        getOutlines(): IPromise;
        renderToFilter(options: Object): IPromise;
        getRenderToFilterUrl(options: Object): string;
        search(searchOptions: _ISearchOptions): IPromise;
        setPageSettings(pageSettings: _IPageSettings): IPromise;
        setParameters(parameters: Object): IPromise;
        getSupportedExportDescriptions(): IPromise;
        getFeatures(): IPromise;
    }
    function _parseReportExecutionInfo(json: string): _IReportExecutionInfo;
    interface _IReportStatus extends _IDocumentStatus {
        initialPosition: _IDocumentPosition;
    }
    interface _IReportExecutionInfo extends _IExecutionInfo {
        id: string;
        hasParameters: boolean;
        parametersLocation: string;
    }
    class _ExecutionStatus {
        static loaded: string;
        static rendering: string;
        static completed: string;
        static stopped: string;
        static cleared: string;
        static notFound: string;
    }
    interface _IParameter {
        name: string;
        dataType: _ParameterType;
        nullable: boolean;
        allowedValues: any[];
        value: any;
        hidden: boolean;
        multiValue: boolean;
        prompt: string;
        error?: string;
    }
    enum _ParameterType {
        Boolean = 0,
        DateTime = 1,
        Time = 2,
        Date = 3,
        Integer = 4,
        Float = 5,
        String = 6,
    }
    /**
    * Describes an item in the report server of a specific path.
    */
    interface ICatalogItem {
        /**
        * The short name of the item.
        */
        name: string;
        /**
        * The full path (starts with the report provider key) of the item.
        */
        path: string;
        /**
        * The type of the item.
        */
        type: CatalogItemType;
        /**
        * The array of child items.
        */
        items: ICatalogItem[];
    }
    /**
    * Specifies the type of a catalog item.
    */
    enum CatalogItemType {
        /**
        * A folder.
        */
        Folder = 0,
        /**
        * A FlexReport definition file.
        */
        File = 1,
        /**
        * An SSRS report or a FlexReport defined in the FlexReport definition file.
        */
        Report = 2,
    }
}

declare module wijmo.viewer {
    class _PdfDocumentSource extends _DocumentSource {
        private _status;
        constructor(options: _IDocumentService);
        readonly status: string;
        readonly _innerService: _PdfDocumentService;
        _createDocumentService(options: _IDocumentService): _PdfDocumentService;
        load(): IPromise;
        _updateStatus(newValue: string): void;
        getStatus(): IPromise;
        renderToFilter(options: Object): IPromise;
        _updateDocumentStatus(data: _IDocumentStatus): void;
    }
    class _PdfDocumentService extends _DocumentService {
        private static _pdfCommand;
        private static _exportAction;
        private static _supportedFormatsAction;
        private static _searchAction;
        private static _invalidPdfControllerError;
        private _status;
        private _statusLocation;
        private _featuresLocation;
        _getPdfUrl(...params: string[]): string;
        _getPdfStatus(data?: any): IPromise;
        _checkPdfController(promise?: _Promise): boolean;
        dispose(): IPromise;
        load(data?: any): IPromise;
        getStatus(data?: any): IPromise;
        renderToFilter(options: Object, data?: any): IPromise;
        getRenderToFilterUrl(options: Object): string;
        getSupportedExportDescriptions(): IPromise;
        getFeatures(): IPromise;
        search(searchOptions: _ISearchOptions): IPromise;
    }
    function _parseExecutionInfo(json: string): _IExecutionInfo;
}


declare module wijmo.viewer {
    class _SearchManager {
        private _documentSource;
        private _text;
        private _matchCase;
        private _wholeWord;
        private _searchResults;
        private _currentIndex;
        private _needUpdate;
        currentChanged: Event;
        searchCompleted: Event;
        private _onCurrentChanged();
        private _onSearchCompleted();
        text: string;
        matchCase: boolean;
        wholeWord: boolean;
        readonly searchResults: _ISearchResult[];
        currentIndex: number;
        readonly current: _ISearchResult;
        private _clearResults();
        private _getSearchResults();
        documentSource: _DocumentSource;
        search(pre?: boolean): void;
    }
}

declare module wijmo.viewer {
    interface _ITouchEventsMap {
        startName: string;
        moveName: string;
        endName: string;
    }
    function _getTouchEventMap(): _ITouchEventsMap;
    enum _TouchDirection {
        None = 0,
        Left = 1,
        Up = 2,
        Right = 3,
        Down = 4,
    }
    class _TouchInfo {
        static getCenter(start: Point, end: Point): Point;
        static getCenterClient(startInfo: _TouchInfo, endInfo: _TouchInfo): Point;
        static getCenterScreen(startInfo: _TouchInfo, endInfo: _TouchInfo): Point;
        static getDistance(startInfo: _TouchInfo, endInfo: _TouchInfo): number;
        static _getDirection(start: _TouchInfo, end: _TouchInfo): _TouchDirection;
        private _id;
        private _target;
        private _screenX;
        private _screenY;
        private _clientX;
        private _clientY;
        private _systemTouchInfo;
        constructor(source: Touch | PointerEvent);
        readonly id: number;
        readonly systemTouchInfo: Touch | PointerEvent;
        readonly screenX: number;
        readonly screenY: number;
        readonly clientX: number;
        readonly clientY: number;
    }
}

declare module wijmo.viewer {
    class _SpeedReducer {
        private _timeInterval;
        private _speedInterval;
        private _timer;
        private _disposeEvents;
        timeInterval: number;
        speedInterval: number;
        stop(): void;
        start(speedX: number, speedY: number, intervalAction: (x: number, y: number) => void): void;
    }
}

declare module wijmo.viewer {
    enum _TouchEventType {
        Start = 0,
        Move = 1,
        End = 2,
    }
    class _TouchEventArgs extends EventArgs {
        private _systemEvent;
        private _type;
        private _touchInfos;
        constructor(systemEvent: TouchEvent | PointerEvent | _TouchEventArgs);
        readonly timeStamp: number;
        readonly touchInfos: _TouchInfo[];
        readonly systemEvent: TouchEvent | PointerEvent;
        readonly target: EventTarget;
        readonly currentTarget: EventTarget;
        readonly type: _TouchEventType;
        readonly pointersCount: number;
        cancelBubble: boolean;
        preventDefault(): void;
    }
    class _TouchEvent extends Event {
        raise(sender: any, args: _TouchEventArgs): void;
    }
    class _TouchTrigger {
        private _element;
        private _disposeAction;
        private static _elementDataName;
        private static bindElement(element, trigger);
        private static unbindElement(element);
        static getTrigger(element: HTMLElement): _TouchTrigger;
        constructor(source: any);
        _onSystemTouchEvent(event: any): void;
        _createTouchEventArgs(e: any): _TouchEventArgs;
        dispose(): void;
        readonly hostElement: HTMLElement;
        _onTouchEvent(sender: any, e: _TouchEventArgs): void;
        touchMove: _TouchEvent;
        touchStart: _TouchEvent;
        touchEnd: _TouchEvent;
        onTouchEnd(event: _TouchEventArgs): void;
        onTouchStart(event: _TouchEventArgs): void;
        onTouchMove(event: _TouchEventArgs): void;
    }
}

declare module wijmo.viewer {
    class _PanEventArgs extends _TouchEventArgs {
        private _panType;
        private _client;
        private _screen;
        private _clientDelta;
        private _screenDelta;
        constructor(args: _TouchEventArgs, pre?: _PanEventArgs, type?: _TouchEventType);
        readonly type: _TouchEventType;
        readonly clientDelta: Point;
        readonly screenDelta: Point;
        readonly client: Point;
        readonly screen: Point;
        readonly pointersCount: number;
        readonly touchInfo: _TouchInfo;
    }
    class _PanEvent extends _TouchEvent {
        raise(sender: any, args: _PanEventArgs): void;
    }
    class _PanTrigger extends _TouchTrigger {
        private _panEvents;
        private _panStartTimer;
        private static _threhold;
        private _prePanEventArgs;
        panMove: _PanEvent;
        panStart: _PanEvent;
        panEnd: _PanEvent;
        onPanEnd(args: _PanEventArgs): void;
        onPanStart(args: _PanEventArgs): void;
        onPanMove(args: _PanEventArgs): void;
        private _prepareMove(args);
        private _prepareStart(args);
        private _prepareEnd(args);
        private _clearPanStartTimer();
        private _tryStopPan(args);
        private _stopPan();
        private _processPan(args);
        onTouchStart(args: _TouchEventArgs): void;
        onTouchMove(args: _TouchEventArgs): void;
        onTouchEnd(args: _TouchEventArgs): void;
        private _createPanEventArgs(args);
    }
}

declare module wijmo.viewer {
    class _SwipeEventArgs extends _PanEventArgs {
        private _duration;
        private _startTouchInfo;
        private _endTouchInfo;
        private _speed;
        private _direction;
        constructor(startInfo: _TouchInfo, endInfo: _TouchInfo, panEventArgs: _PanEventArgs, duration: number);
        readonly duration: number;
        readonly startTouchInfo: _TouchInfo;
        readonly endTouchInfo: _TouchInfo;
        readonly speed: Point;
        readonly pointersCount: number;
        readonly direction: _TouchDirection;
    }
    class _SwipeEvent extends _PanEvent {
        raise(sender: any, args: _SwipeEventArgs): void;
    }
    class _SwipeTrigger extends _PanTrigger {
        static minDistance: number;
        static maxDuration: number;
        private _panStartEventArgs;
        private _prePanMoveEventArgs;
        swipe: _SwipeEvent;
        static getSpeed(distance: number, duration: number): number;
        onPanStart(args: _PanEventArgs): void;
        onPanMove(args: _PanEventArgs): void;
        onPanEnd(args: _PanEventArgs): void;
        onSwipe(args: _SwipeEventArgs): void;
        _createSwipeEventArgs(endArgs: _PanEventArgs): _SwipeEventArgs;
    }
}

declare module wijmo.viewer {
    class _PinchEventArgs extends _TouchEventArgs {
        private _pinchType;
        private _pinchDistance;
        private _centerClient;
        private _centerClientDelta;
        private _centerScreen;
        private _centerScreenDelta;
        private _pre;
        private _zoom;
        constructor(touchEventArgs: _TouchEventArgs, pinchType: _TouchEventType, pre?: _PinchEventArgs);
        readonly zoom: number;
        readonly pointersCount: number;
        readonly prePinchDistance: number;
        readonly pinchDistance: number;
        readonly centerScreenDelta: Point;
        readonly centerClientDelta: Point;
        readonly centerClient: Point;
        readonly preCenterClient: Point;
        readonly centerScreen: Point;
        readonly preCenterScreen: Point;
        readonly type: _TouchEventType;
    }
    class _PinchEvent extends _TouchEvent {
        raise(sender: any, args: _PinchEventArgs): void;
    }
    class _PinchTrigger extends _TouchTrigger {
        private _preEventArgs;
        pinch: _PinchEvent;
        onPinch(args: _PinchEventArgs): void;
        onTouchStart(args: _TouchEventArgs): void;
        onTouchend(args: _TouchEventArgs): void;
        onTouchMove(args: _TouchEventArgs): void;
        private _onPinching(args);
        private _onPinchEnd(args);
        private _process(args);
    }
}

declare module wijmo.viewer {
    class _TouchManager {
        private static _touchPointerName;
        static _allTouchInfos: _TouchInfo[];
        static _isTouchEvent(event: PointerEvent | TouchEvent): boolean;
        static _isTouchStart(type: string): boolean;
        static _isTouchEnd(type: string): boolean;
        static _isTouchMove(type: string): boolean;
        static _eventTypeContains(current: string, definitions: string): boolean;
        static _registerTouchInfo(systemEvent: TouchEvent | PointerEvent): void;
        private _trigger;
        private _pinchTrigger;
        private _removeDefaultTouch;
        private _defaultTouchAction;
        private _defaultMsTouchAction;
        constructor(element: any, removeDefaultTouch?: boolean);
        touchMove: _TouchEvent;
        touchStart: _TouchEvent;
        touchEnd: _TouchEvent;
        panMove: _PanEvent;
        panStart: _PanEvent;
        panEnd: _PanEvent;
        swipe: _SwipeEvent;
        pinch: _PinchEvent;
        onPinch(event: _PinchEventArgs): void;
        onSwipe(event: _SwipeEventArgs): void;
        onTouchEnd(event: _TouchEventArgs): void;
        onTouchStart(event: _TouchEventArgs): void;
        onTouchMove(event: _TouchEventArgs): void;
        onPanEnd(args: _PanEventArgs): void;
        onPanStart(args: _PanEventArgs): void;
        onPanMove(args: _PanEventArgs): void;
        removeDefaultTouch: boolean;
        readonly hostElement: HTMLElement;
        readonly contentElement: Element;
        dispose(): void;
    }
}

declare module wijmo.viewer {
    class _PageSetupEditor extends Control {
        private _divPaperKind;
        private _divOrientation;
        private _divMarginsLeft;
        private _divMarginsTop;
        private _divMarginsRight;
        private _divMarginsBottom;
        private _cmbPaperKind;
        private _cmbOrientation;
        private _numMarginsLeft;
        private _numMarginsTop;
        private _numMarginsRight;
        private _numMarginsBottom;
        private _uiUpdating;
        private _gPaperKind;
        private _gOrientation;
        private _gMargins;
        private _gLeft;
        private _gRight;
        private _gTop;
        private _gBottom;
        private _pageSettings;
        static controlTemplate: string;
        constructor(ele: any);
        pageSettings: _IPageSettings;
        private _globalize();
        private _updateValue();
        _updateUI(): void;
        refresh(fullUpdate?: boolean): void;
    }
    class _ExportOptionEditor extends Control {
        private _exportDescription;
        private _options;
        private _previousEmbedFonts;
        private _previousShowNavigator;
        private static _optionIdAttr;
        private static _optionNameAttr;
        private static _skippedOptions;
        private static _generalGroupName;
        private _optionLabels;
        private _groupTitleField;
        constructor(element: any);
        readonly options: Object;
        exportDescription: _IExportDescription;
        private _skipOption(name);
        private _render();
        private _generateEditor(desc);
        private _generateComboEditor(desc);
        private _generateBoolEditor(desc);
        private _generateNumberEditor(desc);
        private _generateStringEditor(desc);
        private _generateGroup(optionDescs);
        private _updateEditors(optionName?);
        private _getOptionLabel(optionName);
        private _getOptionDescByName(optionName);
        private _getOptionValue(optionName);
        private _setOptionValue(optionName, value);
        private readonly _optionLabelsText;
        private readonly _groupTitle;
        private _globalize();
        refresh(fullUpdate?: boolean): void;
    }
}

declare module wijmo.viewer {
    class _Toolbar extends Control {
        _toolbarWrapper: HTMLElement;
        private _toolbarContainer;
        private _toolbarLeft;
        private _toolbarRight;
        private _toolbarMoveTimer;
        private static _moveStep;
        private static _moveInterval;
        private static _enabledCss;
        static controlTemplate: string;
        constructor(element: any);
        applyTemplate(css: string, tpl: string, parts: Object): HTMLElement;
        private _clearToolbarMoveTimer();
        private _scrollRight();
        private _scrollLeft();
        private _checkMoveButtonEnabled();
        private _showToolbarMoveButton(show);
        _globalize(): void;
        resetWidth(): void;
        addSeparator(): HTMLElement;
        svgButtonClicked: Event;
        onSvgButtonClicked(e: _ToolbarSvgButtonClickedEventArgs): void;
        addCustomItem(element: any, commandTag?: any): void;
        addSvgButton(title: string, svgContent: string, commandTag: any, isToggle?: boolean): HTMLElement;
        refresh(fullUpdate?: boolean): void;
    }
    interface _ToolbarSvgButtonClickedEventArgs {
        commandTag: string;
    }
    class _ViewerToolbarBase extends _Toolbar {
        private _viewer;
        constructor(element: any, viewer: ViewerBase);
        _initToolbarItems(): void;
        onSvgButtonClicked(e: _ToolbarSvgButtonClickedEventArgs): void;
        readonly viewer: ViewerBase;
        static _initToolbarZoomValue(hostToolbar: HTMLElement, viewer: ViewerBase): void;
        static _initToolbarPageNumberInput(hostToolbar: HTMLElement, viewer: ViewerBase): void;
    }
    class _ViewerToolbar extends _ViewerToolbarBase {
        private _gPaginated;
        private _gPrint;
        private _gExports;
        private _gPortrait;
        private _gLandscape;
        private _gPageSetup;
        private _gFirstPage;
        private _gPreviousPage;
        private _gNextPage;
        private _gLastPage;
        private _gBackwardHistory;
        private _gForwardHistory;
        private _gSelectTool;
        private _gMoveTool;
        private _gContinuousMode;
        private _gSingleMode;
        private _gWholePage;
        private _gPageWidth;
        private _gZoomOut;
        private _gZoomIn;
        private _gRubberbandTool;
        private _gMagnifierTool;
        private _gRotatePage;
        private _gRotateDocument;
        private _gFullScreen;
        constructor(element: any, viewer: ViewerBase);
        _globalize(): void;
        _initToolbarItems(): void;
    }
    class _ViewerMiniToolbar extends _ViewerToolbarBase {
        private _gPrint;
        private _gPreviousPage;
        private _gNextPage;
        private _gZoomOut;
        private _gZoomIn;
        private _gExitFullScreen;
        constructor(element: any, viewer: ViewerBase);
        _initToolbarItems(): void;
        _globalize(): void;
    }
    class _ViewerMobileToolbarBase extends _ViewerToolbarBase {
        constructor(element: any, viewer: ViewerBase);
    }
    class _ViewerMobileToolbar extends _ViewerMobileToolbarBase {
        private _gShowHamburgerMenu;
        private _gPrevPage;
        private _gNextPage;
        private _gShowViewMenu;
        private _gShowSearchBar;
        private _gFullScreen;
        constructor(element: any, viewer: ViewerBase);
        _initToolbarItems(): void;
        _globalize(): void;
    }
    class _ViewerZoomBar extends _ViewerMobileToolbarBase {
        private _gZoomOut;
        private _gZoomIn;
        constructor(element: any, viewer: ViewerBase);
        _initToolbarItems(): void;
        _globalize(): void;
    }
    class _SearchBar extends _ViewerMobileToolbarBase {
        private _gSearchOptions;
        private _gSearchPrev;
        private _gSearchNext;
        constructor(element: any, viewer: ViewerBase);
        _initToolbarItems(): void;
        private _initSearchInput();
        private _initSearchBtnGroups();
        _globalize(): void;
    }
}

declare module wijmo.viewer {
    enum _RotateAngle {
        NoRotate = 0,
        Rotation90 = 1,
        Rotation180 = 2,
        Rotation270 = 3,
    }
    interface _IHitTestInfo {
        pageIndex: number;
        x: number;
        y: number;
        hitWorkingArea: boolean;
    }
    interface _IPageHitTestInfo {
        pageIndex: number;
        x: number;
        y: number;
    }
    interface _IPageView {
        pageIndex: number;
        pages: _Page[];
        scrollTop: number;
        scrollLeft: number;
        panMode: boolean;
        zoomFactor: number;
        zoomMode: ZoomMode;
        pageIndexChanged: Event;
        zoomFactorChanged: Event;
        zoomModeChanged: Event;
        positionChanged: Event;
        rotateAngleChanged: Event;
        moveToPage(pageIndex: number): IPromise;
        moveToPosition(position: _IDocumentPosition): IPromise;
        rotatePageTo(pageIndex: number, rotateAngle: _RotateAngle): any;
        hitTest(x: number, y: number): _IHitTestInfo;
        isPageContentLoaded(pageIndex: number): boolean;
        resetPages(): any;
        invalidate(): any;
        refresh(): any;
    }
    interface _ZoomModeChangedEventArgs {
        oldValue: ZoomMode;
        newValue: ZoomMode;
    }
    interface _ZoomFactorChangedEventArgs {
        oldValue: number;
        newValue: number;
    }
    class _Page {
        private _documentSource;
        private _parent;
        private _size?;
        private _content;
        private _index;
        private _rotateAngle;
        private static _bookmarkReg;
        static _bookmarkAttr: string;
        private static _customActionReg;
        static _customActionAttr: string;
        private static _idReg;
        private static _idReferReg;
        private static _invalidHref;
        constructor(documentSource: _DocumentSource, index: number, size?: _ISize);
        linkClicked: Event;
        readonly index: number;
        readonly size: _ISize;
        rotateAngle: _RotateAngle;
        readonly content: any;
        getContent(): IPromise;
        private _onLinkClicked(e);
        private _replaceActionLinks(svg);
        private _addGlobalUniqueId(svgHtml);
    }
    class _CompositePageView extends Control implements _IPageView {
        private _activePageView;
        private _singlePageView;
        private _continuousPageView;
        private _viewMode;
        static controlTemplate: string;
        constructor(element: any);
        pageIndexChanged: Event;
        zoomFactorChanged: Event;
        zoomModeChanged: Event;
        positionChanged: Event;
        rotateAngleChanged: Event;
        applyTemplate(css: string, tpl: string, parts: Object): HTMLElement;
        readonly pageIndex: number;
        pages: _Page[];
        zoomMode: ZoomMode;
        zoomFactor: number;
        panMode: boolean;
        viewMode: ViewMode;
        readonly scrollTop: number;
        readonly scrollLeft: number;
        readonly _activePageViewElement: HTMLElement;
        onPageIndexChanged(): void;
        onZoomFactorChanged(oldValue: number, newValue: number): void;
        onZoomModeChanged(oldValue: ZoomMode, newValue: ZoomMode): void;
        onPositionChanged(): void;
        onRotateAngleChanged(): void;
        private _updateActivePageView();
        private _initPageView();
        private _addPageViewHandlers(pageView);
        private _removePageViewHandlers(pageView);
        private _updatePageViewsVisible();
        moveToPage(pageIndex: number): IPromise;
        moveToPosition(position: _IDocumentPosition): IPromise;
        rotatePageTo(pageIndex: number, rotateAngle: _RotateAngle): void;
        hitTest(x: number, y: number): _IHitTestInfo;
        resetPages(): void;
        refresh(fullUpdate?: boolean): void;
        isPageContentLoaded(pageIndex: number): boolean;
    }
    class _PageViewBase extends Control implements _IPageView {
        private _autoHeightCalculated;
        private _startX;
        private _startY;
        private _panMode;
        private _pageIndex;
        private _pages;
        private _zoomFactor;
        private _zoomMode;
        private _touchManager;
        private _zoomModeUpdating;
        protected _pagesWrapper: HTMLElement;
        private _fBorderBoxMode;
        static _pageMargin: number;
        static _pageBorderWidth: number;
        static controlTemplate: string;
        constructor(element: any);
        _getTemplateParts(): {
            _pagesWrapper: string;
        };
        _getPagesContainer(): HTMLElement;
        pageIndexChanged: Event;
        zoomFactorChanged: Event;
        zoomModeChanged: Event;
        positionChanged: Event;
        rotateAngleChanged: Event;
        _init(): void;
        dispose(): void;
        _bindTouchEvents(touchManager: _TouchManager): void;
        _initTouchEvents(): void;
        protected readonly _borderBoxMode: boolean;
        private _zoomByPinch(touchManager, args);
        private _getFixedPosition(position);
        _getAbovePageCount(top: number): number;
        private _zoom(container, value, center, delta);
        readonly pageIndex: number;
        pages: _Page[];
        readonly scrollTop: number;
        readonly scrollLeft: number;
        zoomFactor: number;
        zoomMode: ZoomMode;
        panMode: boolean;
        private _bindEvents();
        private _startPanning(e);
        private _panning(e);
        private _stopPanning();
        _onPageIndexChanged(): void;
        _onZoomFactorChanged(oldValue: number, newValue: number): void;
        _onZoomModeChanged(oldValue: ZoomMode, newValue: ZoomMode): void;
        _onPositionChanged(): void;
        _onRotateAngleChanged(): void;
        _onPageLoaded(pageIndex: number): void;
        _renderViewPage(viewPage: HTMLDivElement, pageIndex: number): IPromise;
        _reserveViewPage(): void;
        _getViewPortHeight(): number;
        _getViewPortWidth(): number;
        _setPageTransform(viewPage: HTMLDivElement, pageIndex: number): void;
        _addViewPage(): HTMLDivElement;
        _getPageSize(pageIndex: number): _ISize;
        _render(pageIndex: number): IPromise;
        _moveToPagePosition(position: _IDocumentPosition): void;
        _updatePageViewTransform(): void;
        _updatePageIndex(index: number): void;
        moveToPage(pageIndex: number): IPromise;
        resolvePageIndex(pageIndex: number): number;
        moveToPosition(position: _IDocumentPosition): IPromise;
        private _calcZoomModeZoom(zoomMode?);
        _zoomToView(): void;
        _zoomToViewWidth(): void;
        _getTransformedPoint(pageIndex: number, top: number, left: number): Point;
        _hitTestPagePosition(pnt: _IPageHitTestInfo): _IHitTestInfo;
        rotatePageTo(pageIndex: number, rotateAngle: _RotateAngle): void;
        hitTest(clientX: number, clientY: number): _IHitTestInfo;
        resetPages(): void;
        refresh(fullUpdate?: boolean): void;
        isPageContentLoaded(pageIndex: number): boolean;
        protected _hitTestPageIndex(top: number): number;
        protected _pointInViewPanelClientArea(clientX: number, clientY: number): boolean;
        protected _panelViewPntToPageView(clientX: number, clientY: number): _IPageHitTestInfo;
    }
    class _Scroller extends Control {
        private static _scrollbarWidth;
        static getScrollbarWidth(refresh?: boolean): number;
    }
    class _VScroller extends _Scroller {
        private _wrapper;
        private _height;
        private _max;
        private _desiredValue;
        static controlTemplate: string;
        constructor(element: any);
        valueChanged: Event;
        onValueChanged(): void;
        preventScrollEvent(): void;
        height: number;
        value: number;
        max: number;
        refresh(fullUpdate?: boolean): void;
    }
    class _SinglePageView extends _PageViewBase {
        private _pagesContainer;
        private _vscroller;
        private _desiredPageScrollTop;
        private _innerNavigating;
        private _virtualScrollMode;
        static controlTemplate: string;
        constructor(element: any);
        _init(): void;
        private _initScroller();
        private _initEvents();
        _bindTouchEvents(touchManager: _TouchManager): void;
        _getTemplateParts(): {
            _pagesWrapper: string;
            _pagesContainer: string;
            _vscroller: string;
        };
        applyTemplate(css: string, tpl: string, parts: Object): HTMLElement;
        virtualScrollMode: boolean;
        readonly _isScrollerVisible: boolean;
        readonly _scroller: _VScroller;
        readonly _hasPageVScrollBar: boolean;
        readonly _hasPageHScrollBar: boolean;
        _getPagesContainer(): HTMLElement;
        _getPageHeightWithoutZoom(pageIndex: number): number;
        private _updateScroller();
        _updateScrollerValue(): void;
        _doScrollerValueChanged(): void;
        _doContainerWheel(e: WheelEvent): void;
        _doContainerScroll(): void;
        _doContainerKeyDown(): void;
        _preventContainerScroll(): void;
        _innerMoveToPreviousPageAtBottom(e?: UIEvent): void;
        _innerMoveToNextPageAtTop(e?: UIEvent): void;
        _innerMoveToPage(pageIndex: number, pagePercent: number): void;
        _innerMoveToPagePosition(pagePercent: number): void;
        moveToPosition(position: _IDocumentPosition): IPromise;
        _moveToPagePosition(position: _IDocumentPosition): void;
        protected _hitTestPageIndex(top: number): number;
        protected _pointInViewPanelClientArea(clientX: number, clientY: number): boolean;
        protected _panelViewPntToPageView(clientX: number, clientY: number): _IPageHitTestInfo;
        _render(pageIndex: number): IPromise;
        _guessPageIndex(): number;
        _reserveViewPage(): void;
        _updatePageViewTransform(): void;
        _onPageLoaded(pageIndex: number): void;
        _onZoomFactorChanged(oldValue: number, newValue: number): void;
        _zoomToViewWidth(): void;
        refresh(fullUpdate?: boolean): void;
    }
    class _ContinuousPageView extends _PageViewBase {
        private static _preFetchPageCount;
        private _swipeSpeedReducer;
        private _disposeBodyStopSwipe;
        private _scrollingTimer;
        private _zoomFactorTimer;
        constructor(element: any);
        _init(): void;
        dispose(): void;
        _stopSwip(): void;
        _bindTouchEvents(touchManager: _TouchManager): void;
        _getAbovePageCount(top: number): number;
        refresh(fullUpdate?: boolean): void;
        protected _hitTestPageIndex(top: number): number;
        _guessPageIndex(): number;
        _render(pageIndex: number): IPromise;
        _moveToPagePosition(position: _IDocumentPosition): void;
        protected _pointInViewPanelClientArea(clientX: number, clientY: number): boolean;
        protected _panelViewPntToPageView(clientX: number, clientY: number): _IPageHitTestInfo;
        _reserveViewPage(): void;
        _updatePageViewTransform(): void;
        _zoomToViewWidth(): void;
        private _ensurePageIndexPosition();
        private _getPageViewOffsetLeft(pageIndex);
    }
}

declare module wijmo.viewer {
    class _SideTabs extends Control {
        private _headersContainer;
        private _contentsContainer;
        private _idCounter;
        private _tabPages;
        private _tabPageDic;
        tabPageActived: Event;
        tabPageVisibilityChanged: Event;
        expanded: Event;
        collapsed: Event;
        static _activedCss: string;
        static _collapsedCss: string;
        static controlTemplate: string;
        constructor(element: any);
        applyTemplate(css: string, tpl: string, parts: Object): HTMLElement;
        readonly tabPages: _TabPage[];
        getTabPage(id: string): _TabPage;
        getFirstShownTabPage(except?: _TabPage): _TabPage;
        readonly visibleTabPagesCount: number;
        readonly activedTabPage: _TabPage;
        removePage(page: string | _TabPage): void;
        addPage(title: string, svgIcon: string, index?: number): _TabPage;
        readonly isCollapsed: boolean;
        hide(page: string | _TabPage): void;
        show(page: string | _TabPage): void;
        deactive(page: string | _TabPage): void;
        active(page: string | _TabPage): void;
        enable(page: string | _TabPage, value?: boolean): void;
        enableAll(value?: boolean): void;
        onTabPageActived(): void;
        onTabPageVisibilityChanged(tabPage: _TabPage): void;
        onExpanded(): void;
        onCollapsed(): void;
        collapse(): void;
        expand(): void;
        toggle(): void;
        private _clearActiveStyles();
        private _getNewTabPageId();
    }
    interface _TabPageVisibilityChangedEventArgs {
        tabPage: _TabPage;
    }
    class _TabPage {
        private _header;
        private _outContent;
        private _content;
        private _id;
        constructor(outContent: HTMLElement, header: HTMLElement, id: string);
        readonly isActived: boolean;
        readonly isHidden: boolean;
        readonly id: string;
        readonly header: HTMLElement;
        readonly content: HTMLElement;
        readonly outContent: HTMLElement;
        enable(value?: boolean): void;
        format(customizer: (_TabPage: this) => void): void;
    }
}

declare module wijmo.viewer {
    interface _ViewerMenuItem {
        title: string;
        icon?: string;
        commandTag?: number;
    }
    class _ViewerMenuBase extends wijmo.input.Menu {
        private _viewer;
        constructor(viewer: ViewerBase, owner: HTMLElement, options?: any);
        readonly viewer: ViewerBase;
        private _bindMenuItems();
        _initItems(): any[];
        _internalFormatItem(item: _ViewerMenuItem, itemElement: HTMLElement): void;
        private _formatItem(sender, e);
        private _onItemClicked(menu);
        _updateActionStatus(actionElement: HTMLElement, actionType: _ViewerActionType): void;
        private _updateActionStatusCore(actionElement, action);
        _updateItemsStatus(): void;
        refresh(fullUpdate?: boolean): void;
        showMenu(above?: boolean): void;
    }
    class _HamburgerMenu extends _ViewerMenuBase {
        constructor(viewer: ViewerBase, owner: HTMLElement, options?: any);
        _initItems(): any[];
    }
    class _ViewMenu extends _ViewerMenuBase {
        constructor(viewer: ViewerBase, owner: HTMLElement, options?: any);
        _initItems(): any[];
    }
    class _SearchOptionsMenu extends _ViewerMenuBase {
        constructor(viewer: ViewerBase, owner: HTMLElement, options?: any);
        _initItems(): any[];
        _internalFormatItem(item: _ViewerMenuItem, itemElement: HTMLElement): void;
        _updateActionStatus(actionElement: HTMLElement, actionType: _ViewerActionType): void;
    }
}

/**
* Defines a series of classes, interfaces and functions related to the viewer controls.
*/
declare module wijmo.viewer {
    /**
     * Specifies the mouse modes, which defines the mouse behavior of viewer.
     */
    enum MouseMode {
        /** Select text. */
        SelectTool = 0,
        /** Move page. */
        MoveTool = 1,
        /** Rubberband to zoom. */
        RubberbandTool = 2,
        /** Magnifier tool. */
        MagnifierTool = 3,
    }
    /**
    * Specifies the view modes, which define how to show document pages in the view panel.
    */
    enum ViewMode {
        /** Only show one document page. */
        Single = 0,
        /** Show document pages continuously. */
        Continuous = 1,
    }
    /**
     * Describes the supported zoom modes of FlexViewer.
     */
    enum ZoomMode {
        /** Custom zoom mode. The actual zoom factor is determined by the value of the @see:ViewerBase.zoomFactor property. */
        Custom = 0,
        /** Pages are zoomed in or out as necessary to fit the page width in the view panel. */
        PageWidth = 1,
        /** Pages are zoomed in or out as necessary to fit the whole page in the view panel. */
        WholePage = 2,
    }
    interface _ISize {
        width: _Unit;
        height: _Unit;
    }
    interface _IHistory {
        zoomMode?: ZoomMode;
        zoomFactor?: number;
        position?: _IDocumentPosition;
        viewMode?: ViewMode;
        pageAngles?: _RotateAngle[];
    }
    class _LinkClickedEventArgs extends EventArgs {
        private _a;
        constructor(a: SVGAElement);
        readonly element: SVGAElement;
    }
    class _HistoryManager {
        private _items;
        private _position;
        statusChanged: Event;
        private _onStatusChanged();
        readonly current: _IHistory;
        clear(): void;
        add(): void;
        forward(): _IHistory;
        backward(): _IHistory;
        canForward(): boolean;
        canBackward(): boolean;
    }
    /**
     * Base class for all the viewer controls.
     */
    class ViewerBase extends Control {
        private _leftPanel;
        _viewpanelContainer: HTMLElement;
        private _initialPosition;
        private _viewerContainer;
        private _pages;
        _documentEventKey: string;
        private _keepSerConnTimer;
        private _documentSource;
        private _pageIndex;
        private _mouseMode;
        private _viewMode;
        private _serviceUrl;
        private _filePath;
        private _paginated;
        private _needBind;
        private _historyManager;
        private _fullScreen;
        private _miniToolbarPinnedTimer;
        private _autoHeightCalculated;
        private _exportFormats;
        _searchManager: _SearchManager;
        private _rubberband;
        private _magnifier;
        private _thresholdWidth;
        private _outlinesPageId;
        private _thumbnailsPageId;
        private _exportsPageId;
        private _pageSetupPageId;
        _sidePanel: HTMLElement;
        private _toolbar;
        private _mobileToolbar;
        private _miniToolbar;
        private _splitter;
        private _pageSetupDialog;
        private _expiredTime;
        private _hostOriginWidth;
        private _hostOriginHeight;
        private _bodyOriginScrollTop;
        private _bodyOriginScrollLeft;
        private _footer;
        private _zoomBar;
        private _searchBar;
        private _searchOptionsMenu;
        _hamburgerMenu: _HamburgerMenu;
        private _viewMenu;
        private _historyMoving;
        private _historyTimer;
        private _gSearchTitle;
        private _gMatchCase;
        private _gWholeWord;
        private _gSearchResults;
        private _gThumbnailsTitle;
        private _gOutlinesTitle;
        private _gPageSetupTitle;
        private _gPageSetupApplyBtn;
        private _gExportsPageTitle;
        private _gExportsPageApplyBtn;
        private _gExportFormatTitle;
        static _seperatorHtml: string;
        private static _viewpanelContainerMinHeight;
        private static _miniToolbarPinnedTime;
        private static _narrowCss;
        private static _narrowWidthThreshold;
        private static _thumbnailWidth;
        private static _historyTimeout;
        static _defaultZoomValues: {
            name: string;
            value: number;
        }[];
        private static _exportItems;
        /**
         * Gets or sets the template used to instantiate the viewer controls.
         */
        static controlTemplate: string;
        _documentSourceChanged: Event;
        /**
         * Occurs after the page index is changed.
         */
        pageIndexChanged: Event;
        /**
         * Occurs after the view mode is changed.
         */
        viewModeChanged: Event;
        /**
         * Deprecated: use mouseModeChanged instead.
         */
        selectMouseModeChanged: Event;
        /**
         * Occurs after the mouse mode is changed.
         */
        mouseModeChanged: Event;
        /**
         * Occurs after the full screen mode is changed.
         */
        fullScreenChanged: Event;
        /**
         * Occurs after the zoom factor is changed.
         */
        zoomFactorChanged: Event;
        /**
         * Occurs when querying the request data sent to the service before loading the document.
         */
        queryLoadingData: Event;
        /**
         * Initializes a new instance of the @see:ViewerBase class.
         *
         * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the address of C1 Web API service.
         *
         * For example, "http://demos.componentone.com/ASPNET/c1webapi/4.0.20172.105/api/report".
         */
        serviceUrl: string;
        /**
         * Gets or sets the full path to the document on the server.
         *
         * The path starts with the key of a provider which is registered at server for locating specified document.
         */
        filePath: string;
        /**
         * Gets or sets the threshold to switch between mobile and PC template.
         *
         * Default value is 767px.  If width of control is smaller than thresholdWidth, mobile template will
         * be applied.  If width of control is equal or greater than thresholdWidth, PC template
         * will be applied.
         * If thresholdWidth is set to 0, then only PC template is applied
         * and if it's set to a large number e.g. 9999, then only mobile template is applied.
         */
        thresholdWidth: number;
        _innerPaginated: boolean;
        /**
         * Reloads the document.
         *
         * This is useful for force reloading and rerendering the document.
         */
        reload(): void;
        /**
         * Refreshes the control.
         *
         * @param fullUpdate Whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        private _updateLayout();
        private _switchTemplate(mobile);
        _getSource(): _DocumentSource;
        _needBindDocumentSource(): void;
        _supportsPageSettingActions(): boolean;
        _isMobileTemplate(): boolean;
        private _init(options?);
        private _initTools();
        _globalize(): void;
        private _autoCalculateHeight();
        private _bindEvents();
        private _checkMiniToolbarVisible(e);
        private _showMiniToolbar(visible);
        _goToBookmark(name: string): void;
        _executeCustomAction(actionString: string): void;
        _getStatusUtilCompleted(documentSource: _DocumentSource): void;
        private _initChildren();
        private _initSearchBar();
        private _showSearchBar(show);
        private _initFooter();
        private _showFooter(show);
        private _createChildren();
        private _initPageView();
        private readonly _pageView;
        private _initSplitter();
        _toggleSplitter(collapsed?: boolean): void;
        private _resetMiniToolbarPosition();
        private _resetToolbarWidth();
        private _resetViewPanelContainerWidth();
        _shouldAutoHeight(): boolean;
        private _initSidePanel();
        private _clearPreHightLights();
        private _highlightPosition(pageIndex, boundsList);
        private _scrollToPosition(position, addHistory?);
        private _initSidePanelSearch();
        private _initSidePanelOutlines();
        private _initSidePanelThumbnails();
        private _initSidePanelExports();
        private _ensureExportFormatsLoaded();
        private _updateExportTab(refresh?);
        private _initSidePanelPageSetup();
        _executeAction(action: _ViewerActionType): void;
        _initSearchOptionsMenu(owner: HTMLElement): void;
        _initHamburgerMenu(owner: HTMLElement): void;
        _initViewMenu(owner: HTMLElement): void;
        private _initToolbar();
        private _clearExportFormats();
        private _supportedExportsDesc;
        private readonly _exportItemDescriptions;
        _actionIsChecked(action: _ViewerActionType): boolean;
        _isDocumentSourceLoaded(): boolean;
        _actionIsDisabled(action: _ViewerActionType): boolean;
        _actionIsShown(action: _ViewerActionType): boolean;
        _viewerActionStatusChanged: Event;
        _onViewerActionStatusChanged(e: _ViewerActionChangedEventArgs): void;
        private _setViewerAction(actionType, disabled?, checked?, shown?);
        private _updateViewerActions();
        private _updateViewModeActions();
        private _updatePageSettingsActions();
        private _updateMouseModeActions();
        private _updateZoomModeActions();
        private _updateZoomFactorActions();
        private _onPageSettingsUpdated();
        private _onPageCountUpdated();
        private _updatePageNavActions();
        private _onHistoryManagerStatusUpdated();
        _updateUI(): void;
        private _updateViewContainerCursor();
        private _updateFullScreenStyle();
        private _export(options);
        /**
         * Shows the page setup dialog.
         */
        showPageSetupDialog(): void;
        private _createPageSetupDialog();
        /**
         * Scales the current page to show the whole page in view panel.
         */
        zoomToView(): void;
        /**
         * Scales the current page to fit the width of the view panel.
         */
        zoomToViewWidth(): void;
        private _setPageLandscape(landscape);
        _setPaginated(paginated: boolean): void;
        private _setPageSettings(pageSettings);
        _showViewPanelErrorMessage(message: string): void;
        _showViewPanelMessage(message?: string, className?: string): void;
        _removeViewPanelMessage(): void;
        _reRenderDocument(): void;
        private _zoomBtnClicked(zoomIn, zoomValues);
        _getDocumentSource(): _DocumentSource;
        _setDocumentSource(value: _DocumentSource): void;
        _loadDocument(value: _DocumentSource): IPromise;
        private _hyperlinkClicked(a);
        private _onDocumentSourceLoadCompleted();
        _clearKeepSerConnTimer(): void;
        _keepServiceConnection(): void;
        _getExpiredTime(): number;
        _disposeDocument(): void;
        _resetDocument(): void;
        _setDocumentRendering(): void;
        /**
         * Moves to the page at the specified index.
         *
         * @param index Index (0-base) of the page to move to.
         * @return An @see:wijmo.viewer.IPromise object with current page index.
         */
        moveToPage(index: number): IPromise;
        private _getCurrentPosition();
        private _resolvePageIndex(pageIndex);
        private _innerMoveToPage(pageIndex);
        private _moveToLastPage();
        private _moveBackwardHistory();
        private _moveForwardHistory();
        private _moveToHistory(history);
        private _isPositionEquals(p1, p2, checkBounds);
        private _isPageAnglesChanged(pageAngles);
        private _updateHistoryCurrent();
        private _innerAddHistory(checkBounds);
        private _addHistory(checkBounds, delay, history?);
        private _updateCurrentPageAngles(current);
        private _mergeHistory(history?);
        private _ensureDocumentLoadCompleted(promise?);
        _updatePageIndex(index: number): void;
        private _getRotatedAngle(currentAngle);
        private _rotateDocument();
        private _rotatePage();
        /**
         * Gets or sets a value indicating the current zoom mode to show the document pages.
         */
        zoomMode: ZoomMode;
        /**
         * Gets or sets a value indicating the current zoom factor to show the document pages.
         */
        zoomFactor: number;
        /**
        * Gets or sets a value indicating how to show the document pages.
        */
        viewMode: ViewMode;
        /**
        * Deprecated: use mouseMode instead.
        */
        selectMouseMode: boolean;
        /**
        * Gets or sets a value indicating the mouse behavior.
        *
        * The default is SelectTool which means clicking and dragging the mouse will select the text.
        */
        mouseMode: MouseMode;
        /**
        * Gets or sets a value indicating whether the viewer is under full screen mode.
        */
        fullScreen: boolean;
        /**
        * Gets the index of the page which is currently displayed in the view panel.
        */
        readonly pageIndex: number;
        private _initMiniToolbar();
        private _pinMiniToolbar();
        _onDocumentSourceChanged(e?: EventArgs): void;
        /**
         * Raises the @see:pageIndexChanged event.
         *
         * @param e The @see:EventArgs object.
         */
        onPageIndexChanged(e?: EventArgs): void;
        /**
         * Raises the @see:viewModeChanged event.
         *
         * @param e The @see:EventArgs object.
         */
        onViewModeChanged(e?: EventArgs): void;
        /**
         * Deprecated: use onMouseModeChanged instead.
         *
         * @param e The @see:EventArgs object.
         */
        onSelectMouseModeChanged(e?: EventArgs): void;
        /**
         * Raises the @see:mouseModeChanged event.
         *
         * @param e The @see:EventArgs object.
         */
        onMouseModeChanged(e?: EventArgs): void;
        /**
         * Raises the @see:fullScreenChanged event.
         *
         * @param e The @see:EventArgs object.
         */
        onFullScreenChanged(e?: EventArgs): void;
        /**
         * Raises the @see:zoomFactorChanged event.
         *
         * @param e The @see:EventArgs object.
         */
        onZoomFactorChanged(e?: EventArgs): void;
        /**
         * Raises the @see:queryLoadingData event.
         *
         * @param e The @see:QueryLoadingDataEventArgs object that contains the loading data.
         */
        onQueryLoadingData(e: QueryLoadingDataEventArgs): void;
    }
    class _PageSetupDialog extends wijmo.input.Popup {
        private _pageSetupEditorElement;
        private _btnClose;
        private _btnCancel;
        private _btnApply;
        private _pageSetupEditor;
        private _gHeader;
        applied: Event;
        static controlTemplate: string;
        constructor(ele: any);
        readonly pageSettings: _IPageSettings;
        private _globalize();
        private _addEvents();
        private _apply();
        private onApplied();
        showWithValue(pageSettings: _IPageSettings): void;
        refresh(fullUpdate?: boolean): void;
    }
    interface _IEnumItem {
        text: string;
        value: number;
    }
    enum _ViewerActionType {
        TogglePaginated = 0,
        Print = 1,
        Portrait = 2,
        Landscape = 3,
        ShowPageSetupDialog = 4,
        FirstPage = 5,
        PrePage = 6,
        NextPage = 7,
        LastPage = 8,
        PageNumber = 9,
        PageCountLabel = 10,
        Backward = 11,
        Forward = 12,
        SelectTool = 13,
        MoveTool = 14,
        Continuous = 15,
        Single = 16,
        ZoomOut = 17,
        ZoomIn = 18,
        ZoomValue = 19,
        FitWholePage = 20,
        FitPageWidth = 21,
        ToggleFullScreen = 22,
        ShowHamburgerMenu = 23,
        ShowViewMenu = 24,
        ShowSearchBar = 25,
        ShowThumbnails = 26,
        ShowOutlines = 27,
        ShowExportsPanel = 28,
        ShowPageSetupPanel = 29,
        ShowZoomBar = 30,
        ShowSearchOptions = 31,
        SearchPrev = 32,
        SearchNext = 33,
        SearchMatchCase = 34,
        SearchMatchWholeWord = 35,
        RubberbandTool = 36,
        MagnifierTool = 37,
        RotateDocument = 38,
        RotatePage = 39,
    }
    interface _ViewerActionChangedEventArgs {
        action: _IViewerAction;
    }
    interface _IViewerAction {
        actionType: _ViewerActionType;
        disabled: boolean;
        checked: boolean;
        shown: boolean;
    }
    class _MouseTool extends Control {
        private _pageView;
        private _viewPanelContainer;
        private _isActive;
        private _isStarted;
        private _startPnt;
        private _stopOnClientOut;
        private _css;
        private _activeCss;
        private _visibleCss;
        constructor(element: any, viewPanelContainer: HTMLElement, pageView: _IPageView, stopOnClientOut: boolean, css: string, activeCss: string, visibleCss: string);
        activate(): void;
        deactivate(): void;
        reset(): void;
        readonly isActive: boolean;
        readonly startPnt: Point;
        readonly pageView: _IPageView;
        readonly viewPanelContainer: HTMLElement;
        protected _initElement(): void;
        protected _innerStop(pnt?: Point): void;
        protected _getTemplateParts(): Object;
        protected _onMouseDown(e: MouseEvent): void;
        protected _onMouseMove(e: MouseEvent): void;
        protected _onMouseUp(e: MouseEvent): void;
        protected _start(ht: _IHitTestInfo): void;
        protected _move(pnt: Point, ht: _IHitTestInfo): void;
        protected _stop(pnt?: Point): void;
        protected _bindEvents(): void;
        protected _toClientPoint(e: MouseEvent): Point;
        protected _testPageWorkingAreaHit(pnt: Point): _IHitTestInfo;
    }
    class _RubberbandOnAppliedEventArgs extends EventArgs {
        private _rect;
        constructor(rect: Rect);
        readonly rect: Rect;
    }
    class _Rubberband extends _MouseTool {
        applied: Event;
        constructor(element: any, viewPanelContainer: HTMLElement, pageView: _IPageView);
        protected _start(ht: _IHitTestInfo): void;
        protected _move(pnt: Point, ht: _IHitTestInfo): void;
        protected _stop(pnt?: Point): void;
        private _onApplied(e);
    }
    class _Magnifier extends _MouseTool {
        static controlTemplate: string;
        private readonly _Magnification;
        private _viewPageDiv;
        private _currentPageIndex;
        constructor(element: any, viewPanelContainer: HTMLElement, pageView: _IPageView);
        deactivate(): void;
        reset(): void;
        protected _getTemplateParts(): {
            _viewPageDiv: string;
        };
        protected _bindEvents(): void;
        protected _start(ht: _IHitTestInfo): void;
        protected _move(pnt: Point, ht: _IHitTestInfo): void;
        private _showMagnifer(pnt, ht);
        private _fillPage(hitPosition);
        private _showHitPosition(hitPosition);
    }
}

declare module wijmo.viewer {
    /**
     * Defines the ReportViewer control for displaying the FlexReport or SSRS report.
     *
     * The @see:serviceUrl property indicates the url of C1 Web API which provides report services.
     * The report services use C1FlexReport to process a FlexReport, and use C1SSRSDocumentSource and C1PdfDocumentSource to process an SSRS report.
     *
     * Here is a sample of how to show a FlexReport:
     * <pre>var reportViewer = new wijmo.viewer.ReportViewer('#reportViewer');
     * reportViewer.serviceUrl = 'http://demos.componentone.com/ASPNET/c1webapi/4.0.20172.105/api/report';
     * reportViewer.filePath = 'ReportsRoot/Formatting/AlternateBackground.flxr';
     * reportViewer.reportName = 'AlternateBackground';</pre>
     *
     * Here is a sample of how to show an SSRS report:
     * <pre>var reportViewer = new wijmo.viewer.ReportViewer('#reportViewer');
     * reportViewer.serviceUrl = 'http://demos.componentone.com/ASPNET/c1webapi/4.0.20172.105/api/report';
     * reportViewer.filePath = 'c1ssrs/AdventureWorks/Company Sales';</pre>
     */
    class ReportViewer extends ViewerBase {
        private _reportName;
        private _paramsEditor;
        private _gParameterTitle;
        private _parametersPageId;
        static _parameterCommandTag: number;
        /**
         * Initializes a new instance of the @see:ReportViewer class.
         *
         * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
        * Gets or sets the report name.
        *
        * For FlexReport, sets it with the report name defined in the FlexReport definition file.
        * For SSRS report, leave it as empty string. The SSRS report path is specified by the @see:filePath property.
        */
        reportName: string;
        /**
        * Gets or sets a value indicating whether the content should be represented as a set of fixed sized pages.
        *
        * The default value is null which means using paginated mode for a FlexReport and non-paginaged mode for an SSRS report.
        */
        paginated: boolean;
        /**
         * Gets the report names defined in the specified FlexReport definition file.
         *
         * @param serviceUrl The address of C1 Web API service.
         * @param reportFilePath The full path to the FlexReport definition file.
         * @return An @see:wijmo.viewer.IPromise object with a string array which contains the report names.
         */
        static getReportNames(serviceUrl: string, reportFilePath: string): IPromise;
        /**
         * Gets the catalog items in the specified folder path.
         *
         * You can get all items under the folder path by passing the data parameter as:
         * 1) A true value.
         * 2) An object which has the "recursive" property with true value.
         *
         * @param serviceUrl The address of C1 Web API service.
         * @param path The folder path. The path to the FlexReport definition file will be treated as a folder path.
         * @param data The request data sent to the report service, or a boolean value indicates whether getting all items under the path.
         * @return An @see:IPromise object with an array of @see:wijmo.viewer.ICatalogItem.
         */
        static getReports(serviceUrl: string, path: string, data?: any): IPromise;
        _globalize(): void;
        _executeAction(action: _ViewerActionType): void;
        _actionIsDisabled(action: _ViewerActionType): boolean;
        _initHamburgerMenu(owner: HTMLElement): void;
        private _initSidePanelParameters();
        readonly _innerDocumentSource: _Report;
        _loadDocument(value: _Report): IPromise;
        _reRenderDocument(): void;
        _onDocumentStatusChanged(): void;
        private _renderDocumentSource();
        _disposeDocument(): void;
        _setDocumentRendering(): void;
        _getSource(): _Report;
        _supportsPageSettingActions(): boolean;
        refresh(fullUpdate?: boolean): void;
    }
    class _ParametersEditor extends Control {
        private _itemSources;
        private _parameters;
        private _errors;
        private static _paramIdAttr;
        private static _errorsHiddenCss;
        private _errorsVisible;
        private _validateTimer;
        private _lastEditedParam;
        private static _dateTimeFormat;
        commit: Event;
        validate: Event;
        constructor(element: any);
        _setErrors(value: any[]): void;
        readonly parameters: Object;
        itemsSource: _IParameter[];
        _reset(): void;
        _setErrorsVisible(value: boolean): void;
        _updateErrorsVisible(): void;
        onCommit(): void;
        onValidate(): void;
        _deferValidate(paramName: string, beforeValidate?: Function, afterValidate?: Function): void;
        private _updateErrorDiv();
        _render(): void;
        refresh(fullUpdate?: boolean): void;
        _validateParameters(): boolean;
        static _isFloat(value: string): boolean;
        static _checkValueType(value: string, isSpecificType: Function): boolean;
        private _generateComboEditor(parameter);
        private _updateParameters(parameter, value);
        private _generateBoolEditor(parameter);
        private _generateStringEditor(parameter);
        private _createTextarea(value, dataType);
        private _bindTextChangedEvent(element, parameter);
        private _generateNumberEditor(parameter);
        private _generateDateTimeEditor(parameter);
        private _validateNullValueOfParameter(element);
    }
    class _MultiSelectEx {
        private _itemsSource;
        private _selectAllItem;
        private _multiSelect;
        private _selectedAll;
        private _innerCheckedItemsChanged;
        checkedItemsChanged: Event;
        constructor(element: HTMLElement);
        _updateHeader(): string;
        onIsDroppedDownChanged(): void;
        onCheckedItemsChanged(sender: any, e: any): void;
        isEditable: boolean;
        isDisabled: boolean;
        displayMemberPath: string;
        selectedValuePath: string;
        itemsSource: any[];
        checkedItems: any[];
        _updateSelectedAll(): void;
    }
    class _ReportHamburgerMenu extends _HamburgerMenu {
        constructor(viewer: ViewerBase, owner: HTMLElement, options?: any);
        _initItems(): any[];
    }
}

declare module wijmo.viewer {
    /**
     * Defines the PDFViewer control for displaying the PDF document.
     *
     * The @see:serviceUrl property indicates the url of C1 Web API which provides PDF services.
     * The PDF services use C1PdfDocumentSource to process PDF document.
     *
     * Here is the sample to show a PDF document:
     * <pre>var pdfViewer = new wijmo.viewer.PdfViewer('#pdfViewer');
     * pdfViewer.serviceUrl= 'http://demos.componentone.com/ASPNET/c1webapi/4.0.20172.105/api/report';
     * pdfViewer.filePath= 'PdfRoot/DefaultDocument.pdf';</pre>
     */
    class PdfViewer extends ViewerBase {
        /**
         * Initializes a new instance of the @see:PdfViewer class.
         *
         * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        readonly _innerDocumentSource: _PdfDocumentSource;
        _getSource(): _PdfDocumentSource;
    }
}

