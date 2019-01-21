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
declare module wijmo.grid.sheet {
    class _CalcEngine {
        private _owner;
        private _expression;
        private _expressLength;
        private _pointer;
        private _expressionCache;
        private _tokenTable;
        private _token;
        private _idChars;
        private _functionTable;
        private _cacheSize;
        private _tableRefStart;
        private _rowIndex;
        private _columnIndex;
        private _containsCellRef;
        private _sheet;
        constructor(owner: FlexSheet);
        unknownFunction: Event;
        onUnknownFunction(funcName: string, params: Array<_Expression>): _Expression;
        evaluate(expression: string, format?: string, sheet?: Sheet, rowIndex?: number, columnIndex?: number): any;
        addCustomFunction(name: string, func: Function, minParamsCount?: number, maxParamsCount?: number): void;
        addFunction(name: string, func: Function, minParamsCount?: number, maxParamsCount?: number): void;
        _clearExpressionCache(): void;
        _parse(expression: string): _Expression;
        private _buildSymbolTable();
        private _registerAggregateFunction();
        private _registerMathFunction();
        private _registerLogicalFunction();
        private _registerTextFunction();
        private _registerDateFunction();
        private _registLookUpReferenceFunction();
        private _registFinacialFunction();
        private _registAddressRelatedFunction();
        private _addToken(symbol, id, type);
        private _parseExpression();
        private _parseCompareOrConcat();
        private _parseAddSub();
        private _parseMulDiv();
        private _parsePower();
        private _parseUnary();
        private _parseAtom();
        private _getToken();
        private _getTableToken();
        private _parseDigit();
        private _parseString();
        private _parseDate();
        private _parseSheetRef();
        private _getCellRange(identifier);
        private _parseCellRange(cell);
        private _parseCell(cell);
        private _getParameters();
        private _getTableReference(table, sheetRef, needTableName?);
        private _getTableParameter();
        private _getTableRange(table, tableRefs);
        private _getAggregateResult(aggType, params, sheet?);
        private _getFlexSheetAggregateResult(aggType, params, sheet?);
        private _getItemList(params, sheet?, needParseToNum?, isGetEmptyValue?, isGetHiddenValue?, columnIndex?);
        private _countBlankCells(items);
        private _countNumberCells(items);
        private _getRankOfCellRange(num, items, order?);
        private _handleCountIfs(params, sheet?);
        private _countCellsByCriterias(itemsList, criterias, sheet?, countItems?);
        private _handleSumIfs(params, sheet?);
        private _sumCellsByCriterias(itemsList, criterias, sumItems?, sheet?);
        private _getProductOfNumbers(items);
        private _handleSubtotal(params, sheet);
        private _handleDCount(params, sheet);
        private _DCountWithCriterias(countItems, countRef, criteriaRef);
        private _getColumnIndexByField(cellExpr, field);
        private _getSumProduct(params, sheet);
        private _getItemListForSumProduct(params, sheet);
        private _getSheet(sheetRef);
        private _parseRightExpr(rightExpr);
        private _combineExpr(leftExpr, rightExpr);
        private _parseRegCriteria(criteria);
        private _calculateRate(params, sheet?);
        private _handleHLookup(params, sheet?);
        private _exactMatch(lookupValue, cells, sheet?, needHandleWildCard?);
        private _approximateMatch(lookupValue, cells, sheet?);
        private _parseToScientificValue(value, intCoefficientFmt, decimalCoefficientFmt, intExponentFmt, decimalExponentFmt);
        _checkCache(expression: string, sheetIndex?: number, rowIndex?: number, columnIndex?: number): _Expression;
        private _ensureNonFunctionExpression(expr, sheet?);
        private _getDefinedName(name, sheetName);
        private _numAlpha(i);
    }
    class _Token {
        private _tokenType;
        private _tokenID;
        private _value;
        constructor(val: any, tkID: _TokenID, tkType: _TokenType);
        readonly value: any;
        readonly tokenID: _TokenID;
        readonly tokenType: _TokenType;
    }
    class _FunctionDefinition {
        private _paramMax;
        private _paramMin;
        private _func;
        constructor(func: Function, paramMax?: number, paramMin?: number);
        readonly paramMax: number;
        readonly paramMin: number;
        readonly func: Function;
    }
    enum _TokenType {
        COMPARE = 0,
        ADDSUB = 1,
        MULDIV = 2,
        POWER = 3,
        CONCAT = 4,
        GROUP = 5,
        LITERAL = 6,
        IDENTIFIER = 7,
        SQUAREBRACKETS = 8,
    }
    enum _TokenID {
        GT = 0,
        LT = 1,
        GE = 2,
        LE = 3,
        EQ = 4,
        NE = 5,
        ADD = 6,
        SUB = 7,
        MUL = 8,
        DIV = 9,
        DIVINT = 10,
        MOD = 11,
        POWER = 12,
        CONCAT = 13,
        OPEN = 14,
        CLOSE = 15,
        END = 16,
        COMMA = 17,
        PERIOD = 18,
        ATOM = 19,
    }
}

declare module wijmo.grid.sheet {
    class _Expression {
        private _token;
        _evaluatedValue: any;
        _inGroup: boolean;
        constructor(arg?: any);
        readonly token: _Token;
        evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
        static toString(x: _Expression, rowIndex: number, columnIndex: number, sheet?: Sheet): string;
        static toNumber(x: _Expression, rowIndex: number, columnIndex: number, sheet?: Sheet): number;
        static toBoolean(x: _Expression, rowIndex: number, columnIndex: number, sheet?: Sheet): any;
        static toDate(x: _Expression, rowIndex: number, columnIndex: number, sheet?: Sheet): any;
        static isDateValue(val: any): boolean;
        _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: CellRange): boolean;
        _moveCellRangeExp(sheetIndex: number, srcRange: CellRange, dstRange: CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
        _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
        _updateCellBoundary(row: number, col: number): boolean;
        _getStringExpression(): string;
    }
    class _UnaryExpression extends _Expression {
        private _expr;
        constructor(arg: any, expr: _Expression);
        evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
        _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: CellRange): boolean;
        _moveCellRangeExp(sheetIndex: number, srcRange: CellRange, dstRange: CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
        _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
        _getStringExpression(): string;
    }
    class _BinaryExpression extends _Expression {
        private _leftExpr;
        private _rightExpr;
        constructor(arg: any, leftExpr: _Expression, rightExpr: _Expression);
        evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
        _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: CellRange): boolean;
        _moveCellRangeExp(sheetIndex: number, srcRange: CellRange, dstRange: CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
        _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
        _getStringExpression(): string;
    }
    class _CellRangeExpression extends _Expression {
        private _cells;
        private _sheetRef;
        private _flex;
        private _isCellRange;
        private _absRow;
        private _absCol;
        private _absRow2;
        private _absCol2;
        private _evalutingRange;
        private _isWholeRow;
        _tableName: string;
        _tableParams: string[];
        constructor(cells: CellRange, sheetRef: string, flex: FlexSheet, isCellRange?: boolean, absRow?: boolean, absCol?: boolean, absRow2?: boolean, absCol2?: boolean, isWholeRow?: boolean);
        evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
        getValues(isGetHiddenValue?: boolean, columnIndex?: number, sheet?: Sheet): any[];
        getValuseWithTwoDimensions(isGetHiddenValue?: boolean, sheet?: Sheet): any[];
        readonly cells: CellRange;
        readonly sheetRef: string;
        private _getCellValue(cell, sheet?, rowIndex?, columnIndex?);
        _getSheet(): Sheet;
        _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: CellRange): boolean;
        _moveCellRangeExp(sheetIndex: number, srcRange: CellRange, dstRange: CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
        _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
        _updateCellBoundary(row: number, col: number): boolean;
        _getStringExpression(): string;
        private _getTableParamsStringExpression();
    }
    class _FunctionExpression extends _Expression {
        private _funcId;
        private _funcDefinition;
        private _params;
        private _needCacheEvaluatedVal;
        constructor(funcId: string, func: _FunctionDefinition, params: Array<_Expression>, needCacheEvaluatedVal?: boolean);
        evaluate(rowIndex: number, columnIndex: number, sheet?: Sheet): any;
        _updateCellRangeExp(sheetIndex: number, index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: CellRange): boolean;
        _moveCellRangeExp(sheetIndex: number, srcRange: CellRange, dstRange: CellRange, isChangePos?: boolean, isCopying?: boolean): boolean;
        _updateCellRangeExpForReorderingRows(rowDiff: number): boolean;
        _updateCellBoundary(row: number, col: number): boolean;
        _getStringExpression(): string;
        private _parseParamsExpToString();
    }
}

declare module wijmo.grid.sheet {
    class _UndoAction {
        _owner: FlexSheet;
        private _sheetIndex;
        constructor(owner: FlexSheet);
        readonly sheetIndex: number;
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
    }
    class _EditAction extends _UndoAction {
        private _selections;
        private _oldValues;
        private _newValues;
        private _isPaste;
        private _mergeAction;
        private _cellStyleAction;
        private _deletedTables;
        _affectedFormulas: any;
        constructor(owner: FlexSheet, selection?: CellRange);
        readonly isPaste: boolean;
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        markIsPaste(): void;
        updateForPasting(rng: CellRange): void;
        _storeDeletedTables(table: Table): void;
        private _checkActionState();
        private _saveValues(isOldValue);
        private _handleUndoRedo(isUndo);
    }
    class _ColumnResizeAction extends _UndoAction {
        private _colIndex;
        private _panel;
        private _oldColWidth;
        private _newColWidth;
        constructor(owner: FlexSheet, panel: GridPanel, colIndex: number);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _handleUndoRedo(isUndo);
    }
    class _RowResizeAction extends _UndoAction {
        private _rowIndex;
        private _panel;
        private _oldRowHeight;
        private _newRowHeight;
        constructor(owner: FlexSheet, panel: GridPanel, rowIndex: number);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _handleUndoRedo(isUndo);
    }
    class _ColumnsChangedAction extends _UndoAction {
        private _oldValue;
        private _newValue;
        private _columnIndex;
        private _count;
        private _isAdding;
        _affectedFormulas: any;
        _affectedDefinedNameVals: any;
        _deletedTables: Table[];
        constructor(owner: FlexSheet, columnIndex?: number, count?: number, isAdding?: boolean);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _saveValues(isOldValue);
        private _handleUndoRedo(isUndo);
    }
    class _RowsChangedAction extends _UndoAction {
        private _oldValue;
        private _newValue;
        private _rowIndex;
        private _count;
        private _isAdding;
        _affectedFormulas: any;
        _affectedDefinedNameVals: any;
        _deletedTables: Table[];
        constructor(owner: FlexSheet, rowIndex?: number, count?: number, isAdding?: boolean);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _saveValues(isOldValue);
        private _handleUndoRedo(isUndo);
    }
    class _CellStyleAction extends _UndoAction {
        private _oldStyledCells;
        private _newStyledCells;
        constructor(owner: FlexSheet, styledCells?: any);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        _checkActionState(): boolean;
        private _handleUndoRedo(isUndo);
    }
    class _CellMergeAction extends _UndoAction {
        private _oldMergedCells;
        private _newMergedCells;
        constructor(owner: FlexSheet);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _handleUndoRedo(isUndo);
        _checkActionState(): boolean;
    }
    class _SortColumnAction extends _UndoAction {
        private _oldValue;
        private _newValue;
        constructor(owner: FlexSheet);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _saveValues(isOldvalue);
        private _handleUndoRedo(isUndo);
    }
    class _MoveCellsAction extends _UndoAction {
        private _draggingCells;
        private _draggingColumnSetting;
        private _oldDroppingCells;
        private _newDroppingCells;
        private _oldDroppingColumnSetting;
        private _newDroppingColumnSetting;
        private _dragRange;
        private _dropRange;
        private _isCopyCells;
        private _isDraggingColumns;
        private _draggingTableColumns;
        _affectedFormulas: any;
        _affectedDefinedNameVals: any;
        constructor(owner: FlexSheet, draggingCells: CellRange, droppingCells: CellRange, isCopyCells: boolean);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _saveValues(isOldvalue);
        private _handleUndoRedo(isUndo);
    }
    class _CutAction extends _UndoAction {
        private _selection;
        private _cutSelection;
        private _cutSheet;
        private _oldValues;
        private _newValues;
        private _oldCutValues;
        private _newCutValues;
        private _mergeAction;
        private _celltyleAction;
        constructor(owner: FlexSheet);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        updateForPasting(rng: CellRange): void;
        private _saveCutValues(isOldvalue);
        private _handleUndoRedo(isUndo);
    }
    class _TableSettingAction extends _UndoAction {
        private _table;
        private _oldTableSetting;
        private _newTableSetting;
        constructor(owner: FlexSheet, table: Table);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _saveValues(isOldvalue);
        private _handleUndoRedo(isUndo);
    }
    class _TableAction extends _UndoAction {
        private _addedTable;
        private _orgHeaderCellsContent;
        constructor(owner: FlexSheet, table: Table);
        undo(): void;
        redo(): void;
        private _handleUndoRedo(isUndo);
    }
    class _FilteringAction extends _UndoAction {
        private _oldFilterDefinition;
        private _newFilterDefinition;
        private _oldRowsVisible;
        private _newRowsVisible;
        constructor(owner: FlexSheet);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _handleUndoRedo(isUndo);
        private _getRowsVisible();
        private _setRowVisible(isUndo);
    }
    class _FillAction extends _UndoAction {
        private _fillSource;
        private _fillRange;
        private _oldCellSettings;
        private _newCellSettings;
        constructor(owner: FlexSheet, source: CellRange);
        undo(): void;
        redo(): void;
        saveNewState(): boolean;
        private _handleUndoRedo(isUndo);
    }
}

declare module wijmo.grid.sheet {
    class _ContextMenu extends wijmo.Control {
        protected _owner: FlexSheet;
        protected _idx: number;
        constructor(element: any, owner: FlexSheet);
        readonly visible: boolean;
        show(e: MouseEvent, point?: wijmo.Point): void;
        hide(): void;
        moveToNext(): void;
        moveToPrev(): void;
        moveToFirst(): void;
        moveToLast(): void;
        handleContextMenu(): void;
        protected _init(): void;
        protected _handleMenuItemOperation(menuItems: NodeListOf<Element>): void;
        private _removeSelectedState(menuItems);
    }
    class _SheetContextMenu extends _ContextMenu {
        private _insRows;
        private _delRows;
        private _insCols;
        private _delCols;
        private _splitter;
        private _convertTable;
        private _isDisableDelRow;
        private _isDisableConvertTable;
        static controlTemplate: string;
        constructor(element: any, owner: FlexSheet);
        show(e: MouseEvent, point?: wijmo.Point): void;
        hide(): void;
        protected _init(): void;
        protected _handleMenuItemOperation(menuItems: NodeListOf<Element>): void;
        private _showTableOperation();
        private _addTable();
    }
    class _SheetTabContextMenu extends _ContextMenu {
        private _insSheet;
        private _delSheet;
        private _renameSheet;
        static controlTemplate: string;
        constructor(element: any, owner: FlexSheet);
        protected _init(): void;
        protected _handleMenuItemOperation(menuItems: NodeListOf<Element>): void;
    }
}

declare module wijmo.grid.sheet {
    class _TabHolder extends wijmo.Control {
        private _owner;
        private _sheetControl;
        private _divSheet;
        private _divSplitter;
        private _divRight;
        private _funSplitterMousedown;
        private _splitterMousedownHdl;
        private _startPos;
        static controlTemplate: string;
        constructor(element: any, owner: FlexSheet);
        readonly sheetControl: _SheetTabs;
        visible: boolean;
        getSheetBlanketSize(): number;
        adjustSize(): void;
        private _init();
        private _splitterMousedownHandler(e);
        private _splitterMousemoveHandler(e);
        private _splitterMouseupHandler(e);
        private _adjustDis(dis);
    }
}

declare module wijmo.grid.sheet {
    class _FlexSheetCellFactory extends CellFactory {
        updateCell(panel: GridPanel, r: number, c: number, cell: HTMLElement, rng?: CellRange): void;
        private _resetCellStyle(cell);
        private _getFormattedValue(value, format);
        private _getFirstVisibleCell(g, rng);
        private _isURL(strUrl);
    }
}

/**
 * Defines the @see:FlexSheet control and associated classes.
 *
 * The @see:FlexSheet control extends the @see:FlexGrid control to provide
 * Excel-like features.
 *
 * @fiddle:t8tp9tnx
 */
declare module wijmo.grid.sheet {
    /**
     * Defines the @see:FlexSheet control.
     *
     * The @see:FlexSheet control extends the @see:FlexGrid control to provide Excel-like
     * features such as a calculation engine, multiple sheets, undo/redo, and
     * XLSX import/export.
     *
     * A complete list of the functions supported by the @see:FlexSheet's calculation
     * engine can be found here:
     * <a href="static/FlexSheetFunctions.html">FlexSheet Functions</a>.
     *
     * @fiddle:t8tp9tnx
     */
    class FlexSheet extends FlexGrid {
        private _sheets;
        private _selectedSheetIndex;
        _tabHolder: _TabHolder;
        private _contextMenu;
        private _divContainer;
        private _columnHeaderClicked;
        private _htDown;
        private _filter;
        private _calcEngine;
        private _functionListHost;
        private _functionList;
        private _functionTarget;
        private _undoStack;
        private _longClickTimer;
        private _cloneStyle;
        private _sortManager;
        private _dragable;
        private _isDragging;
        private _draggingColumn;
        private _draggingRow;
        private _draggingMarker;
        private _draggingTooltip;
        private _draggingCells;
        private _dropRange;
        private _wholeColumnsSelected;
        private _addingSheet;
        private _mouseMoveHdl;
        private _clickHdl;
        private _touchStartHdl;
        private _touchEndHdl;
        private _keydownHdl;
        private _toRefresh;
        _copiedRanges: CellRange[];
        _copiedSheet: Sheet;
        _isCutting: boolean;
        private _cutValue;
        private _isContextMenuKeyDown;
        _colorThemes: string[];
        _enableMulSel: boolean;
        _isClicking: boolean;
        _isCopying: boolean;
        _isUndoing: boolean;
        _reservedContent: any;
        _lastVisibleFrozenRow: number;
        _lastVisibleFrozenColumn: number;
        private _definedNames;
        private _builtInTableStylesCache;
        _needCopyToSheet: boolean;
        _isPasting: boolean;
        private _resizing;
        _isSorting: boolean;
        private _fillingData;
        private _fillingPoint;
        private _fillingSource;
        private _fillingRange;
        private _fillingMarker;
        _orgCellSettings: any[];
        private _fillSmartTagHost;
        private _fillMenuHost;
        private _fillingTooltip;
        private _endDragFillOperationHdl;
        private _enableDragDrop;
        private _enableFormulas;
        private _orgRowVisible;
        /**
         * Overrides the template used to instantiate @see:FlexSheet control.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:FlexSheet class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        _getProductInfo(): string;
        /**
         * Gets the collection of @see:Sheet objects representing workbook sheets.
         */
        readonly sheets: SheetCollection;
        /**
         * Gets or sets the index of the current sheet in the @see:FlexSheet.
         */
        selectedSheetIndex: number;
        /**
         * Gets the current @see:Sheet in the <b>FlexSheet</b>.
         */
        readonly selectedSheet: Sheet;
        /**
         * Gets a value indicating whether the function list is opened.
         */
        readonly isFunctionListOpen: boolean;
        /**
         * Gets or sets a value indicating whether the TabHolder is visible.
         */
        isTabHolderVisible: boolean;
        /**
         * Gets the @see:UndoStack instance that controls undo and redo operations of the <b>FlexSheet</b>.
         */
        readonly undoStack: UndoStack;
        /**
         * Gets the @see:SortManager instance that controls <b>FlexSheet</b> sorting.
         */
        readonly sortManager: SortManager;
        /**
         * Gets the @see:FlexSheetFilter instance that controls <b>FlexSheet</b> filtering.
         */
        readonly filter: FlexSheetFilter;
        /**
         * Gets or sets the visiblity of the filter icon.
         */
        showFilterIcons: boolean;
        /**
         * Gets an array the @see:IDefinedName objects representing named ranges/expressions
         * defined in the <b>FlexSheet</b>.
         */
        readonly definedNames: wijmo.collections.ObservableArray;
        /**
         * Gets or sets the value to indicates whether enable drag and drop rows or columns in FlexSheet.
         */
        enableDragDrop: boolean;
        /**
         * Gets or sets the value to indicates whether enable formulas in FlexSheet.
         */
        enableFormulas: boolean;
        /**
         * Occurs when current sheet index changed.
         */
        selectedSheetChanged: Event;
        /**
         * Raises the currentSheetChanged event.
         *
         * @param e @see:PropertyChangedEventArgs that contains the event data.
         */
        onSelectedSheetChanged(e: PropertyChangedEventArgs): void;
        /**
         * Occurs when dragging the rows or the columns of the <b>FlexSheet</b>.
         */
        draggingRowColumn: Event;
        /**
         * Raises the draggingRowColumn event.
         */
        onDraggingRowColumn(e: DraggingRowColumnEventArgs): void;
        /**
         * Occurs when dropping the rows or the columns of the <b>FlexSheet</b>.
         */
        droppingRowColumn: Event;
        /**
         * Raises the droppingRowColumn event.
         */
        onDroppingRowColumn(e?: EventArgs): void;
        /**
         * Occurs after the @see:FlexSheet loads the @see:Workbook instance
         */
        loaded: Event;
        /**
         * Raises the loaded event.
         */
        onLoaded(e?: EventArgs): void;
        /**
         * Occurs when the @see:FlexSheet meets the unknown formula.
         */
        unknownFunction: Event;
        /**
         * Raises the unknownFunction event.
         */
        onUnknownFunction(e: UnknownFunctionEventArgs): void;
        /**
         * Occurs when the @see:FlexSheet is cleared.
         */
        sheetCleared: Event;
        /**
         * Raises the sheetCleared event.
         */
        onSheetCleared(e?: EventArgs): void;
        /**
         * Occurs before the @see:FlexSheet insert\delete rows.
         */
        prepareChangingRow: Event;
        /**
         * Raises the prepareChangingRow event.
         */
        onPrepareChangingRow(e: RowColumnChangedEventArgs): void;
        /**
         * Occurs before the @see:FlexSheet insert\delete columns.
         */
        prepareChangingColumn: Event;
        /**
         * Raises the prepareChangingColumn event.
         */
        onPrepareChangingColumn(e: RowColumnChangedEventArgs): void;
        /**
         * Occurs after the @see:FlexSheet insert\delete rows.
         */
        rowChanged: Event;
        /**
         * Raises the rowChanged event.
         */
        onRowChanged(e: RowColumnChangedEventArgs): void;
        /**
         * Occurs after the @see:FlexSheet insert\delete columns.
         */
        columnChanged: Event;
        /**
         * Raises the columnChanged event.
         */
        onColumnChanged(e: RowColumnChangedEventArgs): void;
        /**
         * Overridden to refresh the sheet and the TabHolder.
         *
         * @param fullUpdate Whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        /**
         * Overrides the setCellData function of the base class.
         *
         * @param r Index of the row that contains the cell.
         * @param c Index, name, or binding of the column that contains the cell.
         * @param value Value to store in the cell.
         * @param coerce Whether to change the value automatically to match the column's data type.
         * @param invalidate Whether to invalidate the FlexSheet to show the change.
         * @return True if the value was stored successfully, false otherwise.
         */
        setCellData(r: number, c: any, value: any, coerce?: boolean, invalidate?: boolean): boolean;
        /**
         * Overrides the base class method to take into account the function list.
         */
        containsFocus(): boolean;
        /**
         * Add an unbound @see:Sheet to the <b>FlexSheet</b>.
         *
         * @param sheetName The name of the Sheet.
         * @param rows The row count of the Sheet.
         * @param cols The column count of the Sheet.
         * @param pos The position in the <b>sheets</b> collection.
         * @param grid The @see:FlexGrid instance associated with the @see:Sheet. If not specified then new @see:FlexGrid instance
         * will be created.
         */
        addUnboundSheet(sheetName?: string, rows?: number, cols?: number, pos?: number, grid?: FlexGrid): Sheet;
        /**
         * Add a bound @see:Sheet to the <b>FlexSheet</b>.
         *
         * @param sheetName The name of the @see:Sheet.
         * @param source The items source for the @see:Sheet.
         * @param pos The position in the <b>sheets</b> collection.
         * @param grid The @see:FlexGrid instance associated with the @see:Sheet. If not specified then new @see:FlexGrid instance
         * will be created.
         */
        addBoundSheet(sheetName: string, source: any, pos?: number, grid?: FlexGrid): Sheet;
        /**
         * Apply the style to a range of cells.
         *
         * @param cellStyle The @see:ICellStyle object to apply.
         * @param cells An array of @see:CellRange objects to apply the style to. If not specified then
         * style is applied to the currently selected cells.
         * @param isPreview Indicates whether the applied style is just for preview.
         */
        applyCellsStyle(cellStyle: ICellStyle, cells?: CellRange[], isPreview?: boolean): void;
        /**
         * Freeze or unfreeze the columns and rows of the <b>FlexSheet</b> control.
         */
        freezeAtCursor(): void;
        /**
         * Show the filter editor.
         */
        showColumnFilter(): void;
        /**
         * Clears the content of the <b>FlexSheet</b> control.
         */
        clear(): void;
        /**
         * Gets the @see:IFormatState object describing formatting of the selected cells.
         *
         * @return The @see:IFormatState object containing formatting properties.
         */
        getSelectionFormatState(): IFormatState;
        /**
         * Inserts rows in the current @see:Sheet of the <b>FlexSheet</b> control.
         *
         * @param index The position where new rows should be added. If not specified then rows will be added
         * before the first row of the current selection.
         * @param count The numbers of rows to add. If not specified then one row will be added.
         */
        insertRows(index?: number, count?: number): void;
        /**
         * Deletes rows from the current @see:Sheet of the <b>FlexSheet</b> control.
         *
         * @param index The starting index of the deleting rows. If not specified then rows will be deleted
         * starting from the first row of the current selection.
         * @param count The numbers of rows to delete. If not specified then one row will be deleted.
         */
        deleteRows(index?: number, count?: number): void;
        /**
         * Inserts columns in the current @see:Sheet of the <b>FlexSheet</b> control.
         *
         * @param index The position where new columns should be added. If not specified then columns will be added
         * before the left column of the current selection.
         * @param count The numbers of columns to add. If not specified then one column will be added.
         */
        insertColumns(index?: number, count?: number): void;
        /**
         * Deletes columns from the current @see:Sheet of the <b>FlexSheet</b> control.
         *
         * @param index The starting index of the deleting columns. If not specified then columns will be deleted
         * starting from the first column of the current selection.
         * @param count The numbers of columns to delete. If not specified then one column will be deleted.
         */
        deleteColumns(index?: number, count?: number): void;
        /**
         * Merges the selected @see:CellRange into one cell.
         *
         * @param cells The @see:CellRange to merge.
         * @param isCopyMergeCell This parameter indicates that merge operation is done by copy\paste merge cell or not.
         */
        mergeRange(cells?: CellRange, isCopyMergeCell?: boolean): void;
        /**
         * Gets a @see:CellRange that specifies the merged extent of a cell
         * in a @see:GridPanel.
         * This method overrides the getMergedRange method of its parent class FlexGrid
         *
         * @param panel @see:GridPanel that contains the range.
         * @param r Index of the row that contains the cell.
         * @param c Index of the column that contains the cell.
         * @param clip Whether to clip the merged range to the grid's current view range.
         * @return A @see:CellRange that specifies the merged range, or null if the cell is not merged.
         */
        getMergedRange(panel: GridPanel, r: number, c: number, clip?: boolean): CellRange;
        /**
         * Evaluates a formula.
         *
         * @see:FlexSheet formulas follow the Excel syntax, including a large subset of the
         * functions supported by Excel. A complete list of the functions supported by
         * @see:FlexSheet can be found here:
         * <a href="static/FlexSheetFunctions.html">FlexSheet Functions</a>.
         *
         * @param formula The formula to evaluate. The formula may start with an optional equals sign ('=').
         * @param format If specified, defines the .Net format that will be applied to the evaluated value.
         * @param sheet The @see:Sheet whose data will be used for evaluation.
         *              If not specified then the current sheet is used.
         * @param getPrimitiveResult Indicates whether need convert the non-primitive result to primitive type.
         */
        evaluate(formula: string, format?: string, sheet?: Sheet, getPrimitiveResult?: boolean): any;
        /**
         * Gets the evaluated cell value.
         *
         * Unlike the <b>getCellData</b> method that returns a raw data that can be a value or a formula, the <b>getCellValue</b>
         * method always returns an evaluated value, that is if the cell contains a formula then it will be evaluated first and the
         * resulting value will be returned.
         *
         * @param rowIndex The row index of the cell.
         * @param colIndex The column index of the cell.
         * @param formatted Indicates whether to return an original or a formatted value of the cell.
         * @param sheet The @see:Sheet whose value to evaluate. If not specified then the data from current sheet
         * is used.
         */
        getCellValue(rowIndex: number, colIndex: number, formatted?: boolean, sheet?: Sheet): any;
        /**
         * Open the function list.
         *
         * @param target The DOM element that toggle the function list.
         */
        showFunctionList(target: HTMLElement): void;
        /**
         * Close the function list.
         */
        hideFunctionList(): void;
        /**
         * Select previous function in the function list.
         */
        selectPreviousFunction(): void;
        /**
         * Select next function in the function list.
         */
        selectNextFunction(): void;
        /**
         * Inserts the selected function from the function list to the cell value editor.
         */
        applyFunctionToCell(): void;
        /**
         * Saves <b>FlexSheet</b> to xlsx file.
         * This method works with JSZip 2.5.
         *
         * For example:
         * <pre>// This sample exports FlexSheet content to an xlsx file.
         * // click.
         * &nbsp;
         * // HTML
         * &lt;button
         *     onclick="saveXlsx('FlexSheet.xlsx')"&gt;
         *     Save
         * &lt;/button&gt;
         * &nbsp;
         * // JavaScript
         * function saveXlsx(fileName) {
         *     // Save the flexGrid to xlsx file.
         *     flexsheet.save(fileName);
         * }</pre>
         *
         * @param fileName Name of the file that is generated.
         * @param options @see:IFlexSheetXlsxOptions object specifying the save options.
         * @return A workbook instance containing the generated xlsx file content.
         */
        save(fileName?: string, options?: IFlexSheetXlsxOptions): wijmo.xlsx.Workbook;
        /**
         * Saves the <b>FlexSheet</b> to xlsx file asynchronously.
         * This method works with JSZip 3.0.
         *
         * @param fileName Name of the file that is generated.
         * @param onSaved This callback provides an approach to get the base-64 string that
         *  represents the content of the saved FlexSheet. Since this method is an asynchronous
         * method, user is not able to get the base-64 string immediately. User has to get the
         * base-64 string through this callback. This has a single parameter, the base64 string
         * of the saved flexsheet. It is passed to user.
         * @param onError This callback catches error information when saving.
         * This has a single parameter, the failure reason. The return value is passed to user
         * if he wants to catch the save failure reason.
         *
         * For example:
         * <pre>
         * flexsheet.saveAsync('', function (base64) {
         *      // user can access the base64 string in this callback.
         *      document.getElementByID('export').href = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' + 'base64,' + base64;
         * }, function (reason) {
         *      // User can catch the failure reason in this callback.
         *      console.log('The reason of save failure is ' + reason);
         * });
         * </pre>
         * @param options @see:IFlexSheetXlsxOptions object specifying the save options.
         * @return A workbook instance containing the generated xlsx file content.
         */
        saveAsync(fileName?: string, onSaved?: (base64?: string) => any, onError?: (reason?: any) => any, options?: IFlexSheetXlsxOptions): wijmo.xlsx.Workbook;
        saveToWorkbookOM(options?: IFlexSheetXlsxOptions): wijmo.xlsx.IWorkbook;
        /**
         * Loads the workbook into <b>FlexSheet</b>.
         * This method works with JSZip 2.5.
         *
         * For example:
         * <pre>// This sample opens an xlsx file chosen through Open File
         * // dialog and fills FlexSheet
         * &nbsp;
         * // HTML
         * &lt;input type="file"
         *     id="importFile"
         *     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
         * /&gt;
         * &lt;div id="flexHost"&gt;&lt;/&gt;
         * &nbsp;
         * // JavaScript
         * var flexSheet = new wijmo.grid.FlexSheet("#flexHost"),
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
         *             flexSheet.load(reader.result);
         *         };
         *         reader.readAsArrayBuffer(file);
         *     }
         * }</pre>
         *
         * @param workbook A workbook instance or a Blob instance or a base-64 string
         * or an ArrayBuffer containing xlsx file content.
         */
        load(workbook: any): void;
        /**
         * Loads the workbook into <b>FlexSheet</b> asynchronously.
         * This method works with JSZip 3.0.
         *
         * @param workbook A workbook instance or a Blob instance or a base-64
         * string or an ArrayBuffer containing xlsx file content.
         * @param onLoaded This callback provides access to the loaded workbook instance.
         * Since this method is asynchronous, users cannot get the loaded workbook
         * instance immediately.
         * This callback has a single parameter, the loaded workbook instance.
         * @param onError This callback catches errors when loading workbooks.
         * It has a single parameter, the failure reason.
         *
         * For example:
         * <pre>
         * flexsheet.loadAsync(blob, function (workbook) {
         *      // user can access the loaded workbook instance in this callback.
         *      var app = worksheet.application ;
         *      ...
         * }, function (reason) {
         *      // User can catch the failure reason in this callback.
         *      console.log('The reason of load failure is ' + reason);
         * });
         * </pre>
         */
        loadAsync(workbook: any, onLoaded?: (workbook: wijmo.xlsx.Workbook) => void, onError?: (reason?: any) => any): void;
        loadFromWorkbookOM(workbook: wijmo.xlsx.IWorkbook): void;
        /**
         * Undo the last user action.
         */
        undo(): void;
        /**
         * Redo the last user action.
         */
        redo(): void;
        /**
         * Selects a cell range and optionally scrolls it into view.
         *
         * @see:FlexSheet overrides this method to adjust the selection cell range for the merged cells in the @see:FlexSheet.
         *
         * @param rng The cell range to select.
         * @param show Indicates whether to scroll the new selection into view.
         */
        select(rng: any, show?: any): void;
        addCustomFunction(name: string, func: Function, description?: string, minParamsCount?: number, maxParamsCount?: number): void;
        /**
         * Add custom function in @see:FlexSheet.
         * @param name the name of the custom function.
         * @param func the custom function.
         * <br/>
         * The function signature looks as follows:
         * <br/>
         * <pre>function (...params: any[][][]): any;</pre>
         * The function takes a variable number of parameters, each parameter corresponds to an expression
         * passed as a function argument. Independently of whether the expression passed as a function argument
         * resolves to a single value or to a cell range, each parameter value is always a two dimensional array
         * of resolved values. The number of rows (first index) and columns (second index) in the array corresponds
         * to the size of the specified cell range. In case where argument is an expression that resolves
         * to a single value, it will be a one-to-one array where its value can be retrieved using the
         * param[0][0] indexer.
         * <br/>
         * The sample below adds a custom Sum Product function ('customSumProduct') to the FlexSheet:
         * <pre>flexSheet.addFunction('customSumProduct', (...params: any[][][]) =&gt; {
         *    let result = 0,
         *        range1 = params[0],
         *        range2 = params[1];
         *
         *    if (range1.length &gt; 0 && range1.length === range2.length && range1[0].length === range2[0].length) {
         *        for (let i = 0; i &lt; range1.length; i++) {
         *            for (let j = 0; j &lt; range1[0].length; j++) {
         *                result += range1[i][j] * range2[i][j];
         *            }
         *        }
         *    }
         *    return result;
         * }, 'Custom SumProduct Function', 2, 2);</pre>
         * After adding this function, it can be used it in sheet cell expressions, like here:
         * <pre>=customSumProduct(A1:B5, B1:C5)</pre>
         * @param description the description of the custom function, it will be shown in the function autocompletion of the @see:FlexSheet.
         * @param minParamsCount the minimum count of the parameter that the function need.
         * @param maxParamsCount the maximum count of the parameter that the function need.
         *        If the count of the parameters in the custom function is arbitrary, the minParamsCount and maxParamsCount should be set to null.
         */
        addFunction(name: string, func: Function, description?: string, minParamsCount?: number, maxParamsCount?: number): void;
        /**
         * Disposes of the control by removing its association with the host element.
         */
        dispose(): void;
        /**
         * Gets the content of a @see:CellRange as a string suitable for
         * copying to the clipboard.
         *
         * @see:FlexSheet overrides this method to support multiple rows or columns selection in @see:FlexSheet.
         *
         * Hidden rows and columns are not included in the clip string.
         *
         * @param rng @see:CellRange to copy. If omitted, the current selection is used.
         */
        getClipString(rng?: CellRange): string;
        /**
         * Parses a string into rows and columns and applies the content to a given range.
         *
         * Override the <b>setClipString</b> method of @see:FlexGrid.
         *
         * @param text Tab and newline delimited text to parse into the grid.
         * @param rng @see:CellRange to copy. If omitted, the current selection is used.
         */
        setClipString(text: string, rng?: CellRange): boolean;
        /**
         * Get the built-in table style via its name.
         *
         * @param styleName The name of the built-in table style.
         */
        getBuiltInTableStyle(styleName: string): TableStyle;
        _getCvIndex(index: number): number;
        protected _bindGrid(full: boolean): void;
        private _init();
        private _flexSheetSyncSelection(force);
        private _initFuncsList();
        private _getFunctions();
        private _addCustomFunctionDescription(name, description);
        private _getCurrentFormulaIndex(searchText);
        private _prepareCellForEditHandler();
        private _addSheet(sheetName?, rows?, cols?, pos?, grid?);
        private _showSheet(index);
        private _selectedSheetChange(sender, e);
        private _sourceChange(sender, e);
        private _sheetVisibleChange(sender, e);
        private _applyStyleForCell(rowIndex, colIndex, cellStyle, forceApply?);
        private _checkCellFormat(rowIndex, colIndex, formatState);
        _resetMergedRange(range: CellRange): boolean;
        private _updateCellsForUpdatingRow(originalRowCount, index, count, isDelete?);
        private _updateCellsForUpdatingColumn(originalColumnCount, index, count, isDelete?);
        _cloneObject(source: any): any;
        private _evaluate(formula, format?, sheet?, rowIndex?, columnIndex?);
        _copyTo(sheet: Sheet): void;
        _copyFrom(sheet: Sheet, needRefresh?: boolean): void;
        private _resetMappedColumns(flex);
        private _loadFromWorkbook(workbook);
        private _saveToWorkbook(options);
        private _mouseDown(e);
        private _mouseMove(e);
        private _mouseUp(e);
        private _click();
        private _touchStart(e);
        private _touchEnd();
        private _keydown(e);
        private _showDraggingMarker(e);
        private _showFillMarker(e);
        private _showFillTooltip();
        private _showFillMenuSmartTag(fillOperation);
        private _showFillMenu(fillOperation?);
        private _endDragFillOperation(e);
        private _removeActiveStyleForFillMenuItem();
        private _disposeFillSmartTag();
        private _disposeFillMenu();
        private _handleDropping(e);
        private _moveCellContent(srcRowIndex, srcColIndex, desRowIndex, desColIndex, isCopyContent);
        private _allowExchangeCells(isRow, isReverse);
        private _exchangeTableColumns(isReverse);
        private _exchangeCellStyle(isReverse);
        _containsMergedCells(rng: CellRange, sheet?: Sheet): boolean;
        private _multiSelectColumns(ht);
        private _cumulativeOffset(element);
        private _cumulativeScrollOffset(element);
        private _checkHitWithinSelection(ht);
        private _clearForEmptySheet(rowsOrColumns);
        private _containsGroupRows(cellRange);
        private _delSeletionContent(evt);
        _updateAffectedFormula(index: number, count: number, isAdding: boolean, isRow: boolean, affectRange?: CellRange): any;
        private _updateAffectedNamedRanges(index, count, isAdding, isRow);
        private _updateFormulaBoundaryForEditingCell(row, col);
        _updateColumnFiler(srcColIndex: number, descColIndex: number): void;
        _isDescendant(paranet: any, child: any): boolean;
        _clearCalcEngine(): void;
        private _getRangeString(ranges, sheet, isGetCellValue?);
        _getSelectionForListBoxMode(flex: FlexGrid): CellRange;
        private _containsRandFormula(ranges, sheet);
        private _isMultipleRowsSelected(ranges?, sheet?);
        private _isMultipleColumnsSelected(ranges?, sheet?);
        private _postSetClipStringProcess(cellData, row, col, copiedRow, copiedCol, styleInfo?);
        private _delCutData(rowsSpan, colsSpan);
        private _containsMultiLineText(rows);
        private _sortByRow(sel1, sel2);
        private _sortByColumn(sel1, sel2);
        _setFlexSheetToDirty(): void;
        /**
         * Converts the number value to its corresponding alpha value.
         * For instance: 0, 1, 2...to a, b, c...
         * @param c The number value need to be converted.
         */
        static convertNumberToAlpha(c: number): string;
        _updateFormulaForReorderingRows(srcRow: number, dstRow: number, isResetFormula?: boolean): void;
        private _updateFormulaForDropping(isChangePos);
        private _updateNamedRangesForDropping(isChangePos);
        private _updateCellRefForDropping(cellData, sheetIndex, isChangePos?);
        _updateCellStyleForReorderingRows(srcRow: number, dstRow: number, sortedCellsStyle: any): void;
        _scanFormulas(): any[];
        _resetFormulas(formulas: any[]): void;
        _getCellStyle(rowIndex: number, colIndex: number, sheet?: Sheet): ICellStyle;
        _validateSheetName(sheetName: string): boolean;
        _checkExistDefinedName(name: string, sheetName: string, ignoreIndex?: number): boolean;
        private _updateDefinedNameWithSheetRefUpdating(oldSheetName, newSheetName);
        _updateFormulasWithNameUpdating(oldName: string, newName: string, isTable?: boolean): void;
        _getDefinedNameIndexByName(name: string): number;
        private _updateTablesForUpdatingRow(index, count, isDelete?);
        private _updateTablesForUpdatingColumn(index, count, isDelete?);
        _isDisableDeleteRow(topRow: number, bottomRow: number): boolean;
        _copy(key: string, value: any): boolean;
        private _getTableSheetIndex(sheetTables, tableName);
        private _sheetSortConverter(sd, item, value, init);
        _formatEvaluatedResult(result: any, col: Column, format: string): any;
        private _updateCellRef(cellData, sheetIndex, index, count, isAdding, isRow, affectRange?);
        private _updateCellBoundary(cellData, row, col);
        private _fillData(operation?);
        private _getFillData(srcIndex, cellDiff, source, isFillRow, series, needGetTrendData);
        private _fillFormula(cellData, srcRowIndex, srcColIndex, dstRowIndex, dstColIndex);
        private _getFillSeries(isFillRow, seriesIndex, srcIndex);
        private _getLinearBestFitTrendData(vals, valIndexes, index);
        _getCellSettingsForFill(fillSource?: CellRange, fillRange?: CellRange): any[];
        private _resetCellsForFillRange(operation);
        private _canDoFillOperation();
        _updateItemIndexForInsertingRow(items: any[], newItemIndex: number, rowCount: number): void;
        _updateItemIndexForRemovingRow(items: any[], itemIndex: number): void;
        _copyRowsToSelectedSheet(): void;
        _copyColumnsToSelectedSheet(): void;
        private _getUniqueColumnName();
        private _hideContextMenu();
        private _parseFromWorkbookTable(workbookTable, sheet);
        private _parseFromWorkbookTableStyle(tableStyle);
        private _parseFromWorkbookTableStyleElement(tableStyleElement);
        private _parseToWorkbookTable(table);
        private _parseToWorkbookTableStyle(tableStyle);
        private _parseToWorkbookTableStyleElement(tableStyleElement, isBandedStyle?);
        private _isBuiltInStyleName(styleName);
        _getTable(name: string): Table;
        private _checkTableHeaderRow(tables, workbook);
        private _isTableColumnRef(cellData, cellRef);
        private _getThemeColor(theme, tint?);
        private _createBuiltInTableStyle(styleName);
        private _generateTableLightStyle1(styleIndex, styleName, isLowerStyle);
        private _generateTableLightStyle2(styleIndex, styleName);
        private _generateTableMediumStyle1(styleIndex, styleName);
        private _generateTableMediumStyle2(styleIndex, styleName);
        private _generateTableMediumStyle3(styleIndex, styleName);
        private _generateTableMediumStyle4(styleIndex, styleName);
        private _generateTableDarkStyle1(styleIndex, styleName);
        private _generateTableDarkStyle2(styleIndex, styleName);
        static _toOADate(val: Date): number;
        static _fromOADate(oADate: number): Date;
    }
    /**
     * Provides arguments for the @see:FlexSheet.draggingRowColumn event.
     */
    class DraggingRowColumnEventArgs extends wijmo.EventArgs {
        private _isDraggingRows;
        private _isShiftKey;
        /**
         * Initializes a new instance of the @see:DraggingRowColumnEventArgs class.
         *
         * @param isDraggingRows Indicates whether the dragging event is triggered due to dragging rows or columns.
         * @param isShiftKey Indicates whether the shift key is pressed when dragging.
         */
        constructor(isDraggingRows: boolean, isShiftKey: boolean);
        /**
         * Gets a value indicating whether the event refers to dragging rows or columns.
         */
        readonly isDraggingRows: boolean;
        /**
         * Gets a value indicating whether the shift key is pressed.
         */
        readonly isShiftKey: boolean;
    }
    /**
     * Provides arguments for unknown function events.
     */
    class UnknownFunctionEventArgs extends EventArgs {
        private _funcName;
        private _params;
        /**
         * Gets or sets the result for the unknown funtion.
         */
        value: string;
        /**
         * Initializes a new instance of the @see:UnknownFunctionEventArgs class.
         *
         * @param funcName The name of the unknown function.
         * @param params The parameters' value list of the nuknown function.
         */
        constructor(funcName: string, params: any[]);
        /**
         * Gets the name of the unknown function.
         */
        readonly funcName: string;
        /**
         * Gets the parameters' value list of the nuknown function.
         */
        readonly params: any[];
    }
    /**
     * Provides arguments for rows or columns changed events.
     */
    class RowColumnChangedEventArgs extends EventArgs {
        private _index;
        private _count;
        private _added;
        /**
         * Initializes a new instance of the @see:RowColumnChangedEventArgs class.
         *
         * @param index The start index of the changed rows or columns.
         * @param count The added or removed count of the rows or columns.
         * @param added The value indicates the event is for adding ot removing rows or columns.
         */
        constructor(index: number, count: number, added: boolean);
        /**
         * Gets the start index of the changed rows or columns.
         */
        readonly index: number;
        /**
         * Gets the added or removed count of the rows or columns.
         */
        readonly count: number;
        /**
        * Gets the value indicates the event is for adding ot removing rows or columns.
        */
        readonly added: boolean;
        readonly isAdd: boolean;
    }
    /**
     * Defines the extension of the @see:GridPanel class, which is used by <b>FlexSheet</b> where
     * the base @see:FlexGrid class uses @see:GridPanel. For example, the <b>cells</b> property returns an instance
     * of this class.
     */
    class FlexSheetPanel extends GridPanel {
        /**
         * Initializes a new instance of the @see:FlexSheetPanel class.
         *
         * @param grid The @see:FlexGrid object that owns the panel.
         * @param cellType The type of cell in the panel.
         * @param rows The rows displayed in the panel.
         * @param cols The columns displayed in the panel.
         * @param element The HTMLElement that hosts the cells in the control.
         */
        constructor(grid: FlexGrid, cellType: CellType, rows: RowCollection, cols: ColumnCollection, element: HTMLElement);
        /**
         * Gets a @see:SelectedState value that indicates the selected state of a cell.
         *
         * Overrides this method to support multiple selection showSelectedHeaders for @see:FlexSheet
         *
         * @param r Specifies Row index of the cell.
         * @param c Specifies Column index of the cell.
         * @param rng @see:CellRange that contains the cell that would be included.
         */
        getSelectedState(r: number, c: number, rng: CellRange): SelectedState;
        /**
         * Gets the value stored in a cell in the panel.
         *
         * @param r The row index of the cell.
         * @param c The index, name, or binding of the column that contains the cell.
         * @param formatted Whether to format the value for display.
         */
        getCellData(r: number, c: any, formatted: boolean): any;
        /**
         * Sets the content of a cell in the panel.
         *
         * @param r The index of the row that contains the cell.
         * @param c The index, name, or binding of the column that contains the cell.
         * @param value The value to store in the cell.
         * @param coerce A value indicating whether to change the value automatically to match the column's data type.
         * @param invalidate Whether to invalidate the FlexSheet to show the change.
         * @return Returns true if the value is stored successfully, otherwise false (failed cast).
         */
        setCellData(r: number, c: any, value: any, coerce?: boolean, invalidate?: boolean): boolean;
        _renderCell(row: HTMLElement, r: number, c: number, vrng: CellRange, state: boolean, ctr: number): number;
    }
    /**
     * Represents a row used to display column header information for a bound sheet.
     */
    class HeaderRow extends Row {
        /**
        * Initializes a new instance of the HeaderRow class.
        */
        constructor();
    }
    /**
     * Represents a defined name item of FlexSheet.
     */
    class DefinedName {
        private _owner;
        private _name;
        private _value;
        _sheetName: string;
        /**
         * Initializes a new instance of the DefinedName class.
         *
         * @param owner The owner @see: FlexSheet control.
         * @param name The name of the defined name item.
         * @param value The value of the defined name item.
         * @param sheetName The sheet name indicates the defined name item works in which sheet of FlexSheet.  If omitted, the defined name item works in all sheets of FlexSheet.
         */
        constructor(owner: FlexSheet, name: string, value: any, sheetName?: string);
        /**
         * Gets or sets the name of the defined name item.
         */
        name: string;
        /**
         * Gets or sets the value of the defined name item.
         */
        value: any;
        /**
         * Gets the sheetName of the defined name item.
         */
        readonly sheetName: string;
    }
    /**
     * Defines the cell styling properties.
     */
    interface ICellStyle {
        /**
         * The CSS class name to add to a cell.
         */
        className?: string;
        /**
         * The font family.
         */
        fontFamily?: string;
        /**
         * The font size.
         */
        fontSize?: string;
        /**
         * The font style.
         */
        fontStyle?: string;
        /**
         * The font weight.
         */
        fontWeight?: string;
        /**
         * The text decoration.
         */
        textDecoration?: string;
        /**
         * The text alignment.
         */
        textAlign?: string;
        /**
         * The vertical alignment.
         */
        verticalAlign?: string;
        /**
         * The background color.
         */
        backgroundColor?: string;
        /**
         * The font color.
         */
        color?: string;
        /**
         * Format string for formatting the value of the cell.
         */
        format?: string;
        /**
         * Describes how whitespace inside the element is handled.
         */
        whiteSpace?: string;
        /**
         * Color of the Left border.
         */
        borderLeftColor?: string;
        /**
         * Style of the Left border.
         */
        borderLeftStyle?: string;
        /**
         * Width of the Left border.
         */
        borderLeftWidth?: string;
        /**
         * Color of the Right border.
         */
        borderRightColor?: string;
        /**
         * Style of the Right border.
         */
        borderRightStyle?: string;
        /**
         * Width of the Right border.
         */
        borderRightWidth?: string;
        /**
         * Color of the Top border.
         */
        borderTopColor?: string;
        /**
         * Style of the Top border.
         */
        borderTopStyle?: string;
        /**
         * Width of the Top border.
         */
        borderTopWidth?: string;
        /**
         * Color of the Bottom border.
         */
        borderBottomColor?: string;
        /**
         * Style of the Bottom border.
         */
        borderBottomStyle?: string;
        /**
         * Width of the Bottom border.
         */
        borderBottomWidth?: string;
    }
    /**
     * Defines the format states for the cells.
     */
    interface IFormatState {
        /**
         * Indicates whether the bold style is applied.
         */
        isBold?: boolean;
        /**
         * Indicates whether the italic style is applied.
         */
        isItalic?: boolean;
        /**
         * Indicates whether the underlined style is applied.
         */
        isUnderline?: boolean;
        /**
         * Gets the applied text alignment.
         */
        textAlign?: string;
        /**
         * Indicate whether the current selection is a merged cell.
         */
        isMergedCell?: boolean;
    }
    /**
     * FlexSheet Xlsx export options
     */
    interface IFlexSheetXlsxOptions {
        /**
         * Indicates whether export the calculated value for formula cells.
         */
        includeFormulaValues?: boolean;
    }
}

declare module wijmo.grid.sheet {
    /**
     * Represents a sheet within the @see:FlexSheet control.
     */
    class Sheet {
        private _name;
        _owner: FlexSheet;
        private _rowCount;
        private _columnCount;
        private _visible;
        _unboundSortDesc: collections.ObservableArray;
        private _currentStyledCells;
        private _currentMergedRanges;
        private _grid;
        private _selectionRanges;
        private _isEmptyGrid;
        _rowSettings: any[];
        _filterDefinition: string;
        _scrollPosition: Point;
        _freezeHiddenRows: boolean[];
        _freezeHiddenCols: boolean[];
        private _tables;
        _sortList: ColumnSortDescription[];
        private _filterSetting;
        _showDefaultHeader: boolean;
        _dataView: any[];
        /**
         * Initializes a new instance of the @see:Sheet class.
         *
         * @param owner The owner @see: FlexSheet control.
         * @param grid The associated @see:FlexGrid control used to store the sheet data. If not specified then the
         * new <b>FlexGrid</b> control will be created.
         * @param sheetName The name of the sheet within the @see:FlexSheet control.
         * @param rows The row count for the sheet.
         * @param cols The column count for the sheet.
         */
        constructor(owner?: FlexSheet, grid?: FlexGrid, sheetName?: string, rows?: number, cols?: number);
        /**
         * Gets the associated @see:FlexGrid control used to store the sheet data.
         */
        readonly grid: FlexGrid;
        /**
         * Gets or sets the name of the sheet.
         */
        name: string;
        /**
         * Gets or sets the sheet visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the number of rows in the sheet.
         */
        rowCount: number;
        /**
         * Gets or sets the number of columns in the sheet.
         */
        columnCount: number;
        /**
         * Gets the selection array.
         */
        readonly selectionRanges: wijmo.collections.ObservableArray;
        /**
         * Gets or sets the array or @see:ICollectionView for the @see:FlexGrid instance of the sheet.
         */
        itemsSource: any;
        /**
         * Gets or sets the filter setting for this sheet.
         */
        filterSetting: IFilterSetting;
        /**
         * Gets the collection of the @see:Table objects on this Sheet.
         * It allows to insert/remove @see:Table on this Sheet via the tables collection.
         */
        readonly tables: wijmo.collections.ObservableArray;
        _styledCells: any;
        readonly _mergedRanges: CellRange[];
        /**
         * Occurs after the sheet name has changed.
         */
        nameChanged: Event;
        /**
         * Raises the @see:nameChanged event.
         */
        onNameChanged(e: PropertyChangedEventArgs): void;
        /**
         * Occurs after the visible of sheet has changed.
         */
        visibleChanged: Event;
        /**
         * Raises the @see:visibleChanged event.
         */
        onVisibleChanged(e: wijmo.EventArgs): void;
        /**
         * Dispose sheet instance.
         */
        dispose(): void;
        /**
         * Gets the style of specified cell.
         *
         * @param rowIndex the row index of the specified cell.
         * @param columnIndex the column index of the specified cell.
         */
        getCellStyle(rowIndex: number, columnIndex: number): ICellStyle;
        /**
         * Add table from an object array.
         *
         * @param row The row position of the table.
         * @param column The column position of the table.
         * @param array The object array load to the table.
         * @param properties It allows to retrieve only a subset of columns from the object of the array.  If it is omitted, the table will load all the keys of the object of the array.
         * @param tableName The name of the table.
         * @param tableStyle The table style is applied to the table.
         * @param options The options @see:ITableOptions of the table.
         * @param shift Indicates whether cells beneath the table should be shifted or not.  If not specified cells beneath will be shifted.
         * @return the table if the table was added successfully, otherwise retun null.
         */
        addTableFromArray(row: number, column: number, array: any[], properties?: string[], tableName?: string, tableStyle?: TableStyle, options?: ITableOptions, shift?: boolean): Table;
        /**
         * Finds the table via the cell location.
         *
         * @param rowIndex the row index of the specified cell.
         * @param columnIndex the column index of the specified cell.
         */
        findTable(rowIndex: number, columnIndex: number): Table;
        _attachOwner(owner: FlexSheet): void;
        _setValidName(validName: string): void;
        _storeRowSettings(): void;
        _setRowSettings(): void;
        _addTable(range: CellRange, tableName?: string, tableStyle?: TableStyle, columns?: TableColumn[], options?: ITableOptions): Table;
        _addSelection(selection: CellRange): void;
        private _compareRows();
        private _createGrid();
        private _clearGrid();
        private _gridItemsSourceChanged();
        private _addHeaderRow();
        private _getUniqueTableName();
        private _needShiftForTable(range);
        private _needAddRowCountForAddTable(shiftCount, tableRange);
        _moveDownTable(table: Table): void;
        _moveDownCells(count: number, range: CellRange): void;
        _moveUpCells(count: number, range: CellRange): void;
        _moveDownCellsWithinTable(index: number, count: number, tableRange: CellRange): void;
        _moveUpCellsWithinTable(index: number, count: number, tableRange: CellRange): void;
        _canShiftCells(shiftRange: CellRange): boolean;
        _needMoveDownTable(table: Table): boolean;
        _needAddRowCountForInsertTableRows(count: number, range: CellRange): number;
        _getFilterSetting(): void;
        _applyFilterSetting(): void;
        private _clearFilterSetting();
        _cloneMergedCells(): CellRange[];
        _getMergedRange(row: number, col: number): CellRange;
    }
    /**
     * Defines the collection of the @see:Sheet objects.
     */
    class SheetCollection extends wijmo.collections.ObservableArray {
        private _current;
        _exchangingPosition: boolean;
        /**
         * Occurs when the @see:SheetCollection is cleared.
         */
        sheetCleared: Event;
        /**
         * Raises the sheetCleared event.
         */
        onSheetCleared(): void;
        /**
         * Gets or sets the index of the currently selected sheet.
         */
        selectedIndex: number;
        /**
         * Occurs when the <b>selectedIndex</b> property changes.
         */
        selectedSheetChanged: Event;
        /**
         * Raises the <b>currentChanged</b> event.
         *
         * @param e @see:PropertyChangedEventArgs that contains the event data.
         */
        onSelectedSheetChanged(e: PropertyChangedEventArgs): void;
        /**
         * Inserts an item at a specific position in the array.
         * Overrides the insert method of its base class @see:ObservableArray.
         *
         * @param index Position where the item will be added.
         * @param item Item to add to the array.
         */
        insert(index: number, item: any): void;
        /**
         * Adds one or more items to the end of the array.
         * Overrides the push method of its base class @see:ObservableArray.
         *
         * @param ...item One or more items to add to the array.
         * @return The new length of the array.
         */
        push(...item: any[]): number;
        /**
         * Removes and/or adds items to the array.
         * Overrides the splice method of its base class @see:ObservableArray.
         *
         * @param index Position where items will be added or removed.
         * @param count Number of items to remove from the array.
         * @param item Item to add to the array.
         * @return An array containing the removed elements.
         */
        splice(index: number, count: number, item?: any): any[];
        /**
         * Removes an item at a specific position in the array.
         * Overrides the removeAt method of its base class @see:ObservableArray.
         *
         * @param index Position of the item to remove.
         */
        removeAt(index: number): void;
        /**
         * Occurs after the name of the sheet in the collection has changed.
         */
        sheetNameChanged: Event;
        /**
         * Raises the <b>sheetNameChanged</b> event.
         */
        onSheetNameChanged(e: wijmo.collections.NotifyCollectionChangedEventArgs): void;
        /**
         * Occurs after the visible of the sheet in the collection has changed.
         */
        sheetVisibleChanged: Event;
        /**
         * Raises the <b>sheetVisibleChanged</b> event.
         */
        onSheetVisibleChanged(e: wijmo.collections.NotifyCollectionChangedEventArgs): void;
        /**
         * Selects the first sheet in the @see:FlexSheet control.
         */
        selectFirst(): boolean;
        /**
         * Selects the last sheet in the owner @see:FlexSheet control.
         */
        selectLast(): boolean;
        /**
         * Selects the previous sheet in the owner @see:FlexSheet control.
         */
        selectPrevious(): boolean;
        /**
         * Select the next sheet in the owner @see:FlexSheet control.
         */
        selectNext(): boolean;
        /**
         * Hides the sheet at the specified position.
         *
         * @param pos The position of the sheet to hide.
         */
        hide(pos: number): boolean;
        /**
         * Unhide and selects the @see:Sheet at the specified position.
         *
         * @param pos The position of the sheet to show.
         */
        show(pos: number): boolean;
        /**
         * Clear the SheetCollection.
         */
        clear(): void;
        /**
         * Checks whether the sheet name is valid.
         *
         * @param sheet The @see:Sheet for which the name needs to check.
         */
        isValidSheetName(sheet: Sheet): boolean;
        /**
         * Gets the valid name for the sheet.
         *
         * @param currentSheet The @see:Sheet need get the valid name.
         */
        getValidSheetName(currentSheet: Sheet): string;
        private _moveCurrentTo(pos);
        _getSheetIndexFrom(sheetName: string): number;
        private _postprocessSheet(item);
        private _getUniqueName();
    }
    class _SheetTabs extends wijmo.Control {
        private _sheets;
        private _sheetContainer;
        private _tabContainer;
        private _sheetPage;
        private _newSheet;
        private _owner;
        private _rtl;
        private _sheetTabClicked;
        private _editingSheetTab;
        private _measureEle;
        private _contextMenuHost;
        private _dragSrcIdx;
        _contextMenu: _ContextMenu;
        static controlTemplate: string;
        constructor(element: any, owner: FlexSheet, options?: any);
        refresh(fullUpdate: any): void;
        private _sourceChanged(sender, e?);
        private _selectedSheetChanged(sender, e);
        private _initControl();
        private _initSheetTab();
        private _initSheetPage();
        private _getSheetTabs();
        private _getSheetElement(sheetItem, isActive?);
        private _updateTabActive(pos, active);
        private _updateTabShown(sender, e);
        _adjustSize(): void;
        private _getItemIndex(container, item);
        private _updateSheetName(sender, e);
        private _scrollSheetTabContainer(currentSheetTab);
        private _adjustSheetsPosition();
        private _scrollToActiveSheet(newIndex, oldIndex);
        private _adjustNavigationButtons(rtl);
        _startEditingSheetName(index: number): void;
        private _commitSheetName();
        private _measureInputWidth(key);
    }
    class _UnboundSortDescription {
        private _column;
        private _ascending;
        constructor(column: wijmo.grid.Column, ascending: boolean);
        readonly column: wijmo.grid.Column;
        readonly ascending: boolean;
    }
    /**
     * Defines the filter setting of sheet.
     */
    interface IFilterSetting {
        /**
         * An array containing the names or bindings of the columns that have filters.
         */
        filterColumns?: string[];
        /**
         * The filter setting for the columns of the sheet.
         */
        columnFilterSettings?: IColumnFilterSetting[];
    }
    /**
     * The setting for column filter.
     */
    interface IColumnFilterSetting {
        /**
         * Column being filtered.  It could be the @see:Column instance, name of the @see:Column or index in the column collection.
         */
        column: any;
        /**
         * The types of filtering provided by this filter.
         */
        filterType?: filter.FilterType;
        /**
         * The @see:DataMap used to convert raw values into display values shown when editing this filter.
         */
        dataMap?: DataMap;
        /**
         * The value filter setting in this column filter setting.
         */
        valueFilterSetting?: IValueFiterSetting;
        /**
         * The condition filter setting in this column filter setting.
         */
        conditionFilterSetting?: IConditionFilterSetting;
    }
    /**
     * The value filter setting.
     */
    interface IValueFiterSetting {
        /**
         * The maximum number of elements on the list of display values.
         */
        maxValues?: number;
        /**
         * An array containing the unique values to be displayed on the list.
         */
        uniqueValues?: any[];
        /**
         * A value that determines whether the values should be sorted
         */
        sortValues?: boolean;
        /**
         * The @see:DataMap used to convert raw values into display values shown when editing this filter.
         */
        dataMap: DataMap;
    }
    /**
     * The condition filter setting.
     */
    interface IConditionFilterSetting {
        /**
         * The @see:DataMap used to convert raw values into display values shown when editing this filter.
         */
        dataMap?: DataMap;
    }
}

declare module wijmo.grid.sheet {
    /**
     * Maintains sorting of the selected @see:Sheet of the @see:FlexSheet.
     */
    class SortManager {
        private _sortDescriptions;
        private _owner;
        _committedList: ColumnSortDescription[];
        /**
         * Initializes a new instance of the @see:SortManager class.
         *
         * @param owner The @see:FlexSheet control that owns this <b>SortManager</b>.
         */
        constructor(owner: FlexSheet);
        /**
         * Gets or sets the collection of the sort descriptions represented by the  @see:ColumnSortDescription objects.
         */
        sortDescriptions: wijmo.collections.CollectionView;
        /**
         * Adds a blank sorting level to the sort descriptions.
         *
         * @param columnIndex The index of the column in the FlexSheet control.
         * @param ascending The sort order for the sort level.
         */
        addSortLevel(columnIndex?: number, ascending?: boolean): void;
        /**
         * Removes the current sorting level from the sort descriptions.
         *
         * @param columnIndex The index of the column in the FlexSheet control.
         */
        deleteSortLevel(columnIndex?: number): void;
        /**
         * Adds a copy of the current sorting level to the sort descriptions.
         */
        copySortLevel(): void;
        /**
         * Updates the current sort level.
         *
         * @param columnIndex The column index for the sort level.
         * @param ascending The sort order for the sort level.
         */
        editSortLevel(columnIndex?: number, ascending?: boolean): void;
        /**
         * Moves the current sorting level to a new position.
         *
         * @param offset The offset to move the current level by.
         */
        moveSortLevel(offset: number): void;
        /**
         * Check whether the sort item of specific column exists or not
         *
         * @param columnIndex The index of the column in the FlexSheet control.
         */
        checkSortItemExists(columnIndex: any): number;
        /**
         * Commits the current sort descriptions to the FlexSheet control.
         *
         * @param undoable The boolean value indicating whether the commit sort action is undoable.
         */
        commitSort(undoable?: boolean): void;
        /**
         * Cancel the current sort descriptions to the FlexSheet control.
         */
        cancelSort(): void;
        /**
         * Clear the sort descriptions.
         */
        clearSort(): void;
        private _getColumnIndex(property);
        private _getSortItem(columnIndex);
        _cloneSortList(sortList: ColumnSortDescription[]): ColumnSortDescription[];
        _updateSortSortDescription(colIndex: number, count: number, isAdd?: boolean): void;
        private _isEmpty(obj);
    }
    /**
     * Describes a @see:FlexSheet column sorting criterion.
     */
    class ColumnSortDescription {
        private _columnIndex;
        private _ascending;
        /**
         * Initializes a new instance of the @see:ColumnSortDescription class.
         *
         * @param columnIndex Indicates which column to sort the rows by.
         * @param ascending The sort order.
         */
        constructor(columnIndex: number, ascending: boolean);
        /**
         * Gets or sets the column index.
         */
        columnIndex: number;
        /**
         * Gets or sets the ascending.
         */
        ascending: boolean;
        /**
         * Creates a copy of the ColumnSortDescription.
         */
        clone(): ColumnSortDescription;
    }
}

declare module wijmo.grid.sheet {
    /**
     * Controls undo and redo operations in the @see:FlexSheet.
     */
    class UndoStack {
        private MAX_STACK_SIZE;
        private _owner;
        private _stack;
        private _pointer;
        _pendingAction: _UndoAction;
        private _resizingTriggered;
        private _stackSize;
        /**
         * Initializes a new instance of the @see:UndoStack class.
         *
         * @param owner The @see:FlexSheet control that the @see:UndoStack works for.
         */
        constructor(owner: FlexSheet);
        /**
         * Gets or sets the size of the undo stack.
         */
        stackSize: number;
        /**
         * Checks whether an undo action can be performed.
         */
        readonly canUndo: boolean;
        /**
         * Checks whether a redo action can be performed.
         */
        readonly canRedo: boolean;
        /**
         * Occurs after the undo stack has changed.
         */
        undoStackChanged: Event;
        /**
         * Raises the @see:undoStackChanged event.
         */
        onUndoStackChanged(): void;
        /**
         * Undo the last action.
         */
        undo(): void;
        /**
         * Redo the last undone action.
         */
        redo(): void;
        /**
         * Clears the undo stack.
         */
        clear(): void;
        _addAction(action: _UndoAction): void;
        _pop(): _UndoAction;
        _updateCurrentAction(actionType: any): void;
        private _initCellEditAction(sender, args);
        private _initCellEditActionForPasting();
        private _afterProcessCellEditAction(self);
        private _beforeUndoRedo(action);
    }
}

declare module wijmo.grid.sheet {
    /**
     * Represents a Table within the @see:FlexSheet control.
     */
    class Table {
        _owner: FlexSheet;
        private _sheet;
        private _name;
        private _columns;
        private _range;
        private _style;
        private _showHeaderRow;
        private _showTotalRow;
        private _showBandedColumns;
        private _showBandedRows;
        private _alterFirstColumn;
        private _alterLastColumn;
        _orgHeaderCellsContent: any[];
        /**
         * Initializes a new instance of the @see:Table class.
         *
         * @param name The name of the table.
         * @param range The range of the table.
         * @param style The table style to use with the table.  The default style is the 'TableStyleMedium9' built-in table style, if the style is omitted.
         * @param columns The columns of the table.
         * @param options The options @see:ITableOptions of the table.
         */
        constructor(name: string, range: CellRange, style?: TableStyle, columns?: TableColumn[], options?: ITableOptions);
        /**
         * Gets or sets the table name.
         *
         * The table name is used to reference the table programmatically.
         */
        name: string;
        /**
         * Gets the @see:Sheet this table belongs to.
         */
        readonly sheet: Sheet;
        /**
         * Gets or sets the @see:TableStyle associated with this table.
         */
        style: TableStyle;
        /**
         * Indicates whether the table should include a header row.
         */
        showHeaderRow: boolean;
        /**
         * Indicates whether the table should include a total row.
         */
        showTotalRow: boolean;
        /**
         * Indicating whether banded column formatting is applied.
         */
        showBandedColumns: boolean;
        /**
         * Gets or sets a value that determines whether banded row
         * formatting is applied.
         */
        showBandedRows: boolean;
        /**
         * Gets or sets a value that determines whether the first table
         * column should have the style applied.
         */
        alterFirstColumn: boolean;
        /**
         * Gets or sets a value that determines whether the last table
         * column should have the style applied.
         */
        alterLastColumn: boolean;
        /**
         * Gets the range of the specific section and column on the relevant sheet that the table occupies.
         *
         * @param section The section of Table.  If the section is omitted.  It will get the range of entire table.
         * @param column The column of Table. The column could be @see:TableColumn instance, column name or column index.
         *      If the column is omitted.  It will get the range for all columns in the table.
         *      If the section is null, the reference of the specific column includes the header row and the totals row if they are visible.
         * @return the range of the specific table section and specific column, if the specific column doesn't exist in table it will return null.
         */
        getRange(section?: TableSection, column?: any): CellRange;
        /**
         * Gets the table's columns.
         */
        getColumns(): TableColumn[];
        /**
         * Insert rows into Table.
         *
         * @param index The position where new rows should be added in table.
         * @param count The numbers of rows to add. If not specified then one row will be added.
         * @param shift Indicates whether cells beneath the table should be shifted or not.  If not specified cells beneath will be shifted.
         * @return True if the rows are inserted successfully.
         */
        insertRows(index: number, count?: number, shift?: boolean): boolean;
        /**
         * Delete rows of Table.
         *
         * @param index The starting index of the deleting rows in Table.
         * @param count The numbers of rows to delete. If not specified then one row will be deleted.
         * @param shift Indicates whether cells beneath the table should be shifted or not.  If not specified cells beneath will be shifted.
         */
        deleteRows(index: number, count?: number, shift?: boolean): void;
        _addColumn(index: number, columnName?: string): void;
        _updateCell(rowIndex: number, colIndex: number, cell: HTMLElement): void;
        _updateTableRange(topRowChange: number, bottomRowChage: number, leftColChange: number, rightColChange: number): void;
        _setTableRange(range: CellRange, columns?: TableColumn[]): void;
        _updateColumnName(columnIndex: number, columnName: string): void;
        _updateColumnTotalRowContent(column: TableColumn, columnIndex?: number): void;
        _attachSheet(sheet: Sheet): void;
        _detachSheet(): void;
        private _pushTableColumns(columns);
        private _generateColumns(showHeaderRow);
        _getTableCellAppliedStyles(cellRowIndex: number, cellColIndex: number): ITableSectionStyle;
        private _applyStylesForCell(cellStyle, cell);
        private _extendStyle(dstStyle, srcStyle, cellRowIndex, cellColIndex, isHeaderCell, isTotalCell);
        private _getSubtotalFunction(functionName);
        private _checkColumnNameExist(name);
        private _adjustTableRangeWithHeaderRow();
        private _adjustTableRangeWithTotalRow();
        private _updateTotalRow();
        private _getUniqueColumnName(index, columnName?);
        _moveColumns(src: number, dst: number): void;
        private _canInsertRowsWithoutShift(count);
        private _beneathRowIsEmpty();
        private _getDataRange();
        private _getHeaderRange();
        private _getFooterRange();
        private _getColumnIndex(column);
    }
    /**
     * Represents a column within the @see:Table.
     */
    class TableColumn {
        private _table;
        private _name;
        _totalRowLabel: string;
        _totalRowFunction: string;
        private _showFilterButton;
        /**
         * Initializes a new instance of the @see:TableColumn class.
         *
         * @param name The name of the table column.
         * @param totalRowLabel The string to show in the totals row cell for the column.
         * @param totalRowFunction The function to show in the totals row cell for this column.
         * @param showFilterButton Indicating whether show the filter button for the table column.  The default value of showFilterButton is true.
         */
        constructor(name: string, totalRowLabel?: string, totalRowFunction?: string, showFilterButton?: boolean);
        /**
         * Gets the Table the table columns belongs to.
         */
        readonly table: Table;
        /**
         * Gets the name of the table column. It is referenced through functions.
         */
        name: string;
        /**
         * The string to show in the totals row cell for the column.
         */
        totalRowLabel: string;
        /**
         * The function to show in the totals row cell for the column.
         */
        totalRowFunction: string;
        /**
         * Indicating whether show the filter button for the table column.
         *
         * As FlexSheet has not supported filter for table yet, this property is used for import/export operation only by now.
         */
        showFilterButton: boolean;
        _attach(table: Table): void;
        private _updateTableTotalInfo();
    }
    /**
     * Represents a Table style for the @see:Table.
     */
    class TableStyle {
        private _name;
        private _isBuiltIn;
        private _wholeTableStyle;
        private _firstBandedColumnStyle;
        private _secondBandedColumnStyle;
        private _firstBandedRowStyle;
        private _secondBandedRowStyle;
        private _firstColumnStyle;
        private _lastColumnStyle;
        private _headerRowStyle;
        private _totalRowStyle;
        private _firstHeaderCellStyle;
        private _lastHeaderCellStyle;
        private _firstTotalCellStyle;
        private _lastTotalCellStyle;
        /**
         * Initializes a new instance of the @see:TableStyle class.
         *
         * @param name The name of the table style.
         * @param isBuiltIn Indicates whether the table style is built-in style.
         */
        constructor(name: string, isBuiltIn?: boolean);
        /**
         * Gets or sets the name of the table style.
         */
        name: string;
        /**
         * Gets or sets the whole table style.
         */
        wholeTableStyle: ITableSectionStyle;
        /**
         * Gets or sets the first banded column style.
         */
        firstBandedColumnStyle: IBandedTableSectionStyle;
        /**
         * Gets or sets the second banded column style.
         */
        secondBandedColumnStyle: IBandedTableSectionStyle;
        /**
         * Gets or sets the first banded row style.
         */
        firstBandedRowStyle: IBandedTableSectionStyle;
        /**
         * Gets or sets the second banded row style.
         */
        secondBandedRowStyle: IBandedTableSectionStyle;
        /**
         * Gets or sets the first column style.
         */
        firstColumnStyle: ITableSectionStyle;
        /**
         * Gets or sets the last column style.
         */
        lastColumnStyle: ITableSectionStyle;
        /**
         * Gets or sets the header row style.
         */
        headerRowStyle: ITableSectionStyle;
        /**
         * Gets or sets the total row style.
         */
        totalRowStyle: ITableSectionStyle;
        /**
         * Gets or sets the first cell style in the header row.
         */
        firstHeaderCellStyle: ITableSectionStyle;
        /**
         * Gets or sets the last cell style in the header row.
         */
        lastHeaderCellStyle: ITableSectionStyle;
        /**
         * Gets or sets the first cell style in the total row.
         */
        firstTotalCellStyle: ITableSectionStyle;
        /**
         * Gets or sets the last cell style in the total row.
         */
        lastTotalCellStyle: ITableSectionStyle;
        /**
         * Indicates whether the table style is built-in style.
         */
        readonly isBuiltIn: boolean;
    }
    /**
     * Defines the table styling properties.
     */
    interface ITableSectionStyle extends ICellStyle {
        /**
         * Color of the Horizontal border.
         */
        borderHorizontalColor?: any;
        /**
         * Style of the Horizontal border.
         */
        borderHorizontalStyle?: string;
        /**
         * Width of the Horizontal border.
         */
        borderHorizontalWidth?: string;
        /**
         * Color of the Vertical border.
         */
        borderVerticalColor?: any;
        /**
         * Style of the Vertical border.
         */
        borderVerticalStyle?: string;
        /**
         * Width of the Vertical border.
         */
        borderVerticalWidth?: string;
    }
    /**
     * Defines the table stripe styling properties.
     */
    interface IBandedTableSectionStyle extends ITableSectionStyle {
        /**
         * Number of rows or columns in a single band of striping.
         */
        size?: number;
    }
    /**
     * Defines the table options for creating table.
     */
    interface ITableOptions {
        /**
         * Indicates whether show the header row for the table.
         */
        showHeaderRow?: boolean;
        /**
         * Indicates whether show the total row for the table.
         */
        showTotalRow?: boolean;
        /**
         * Indicating whether banded column formatting is applied.
         */
        showBandedColumns?: boolean;
        /**
         * Indicating whether banded row formatting is applied.
         */
        showBandedRows?: boolean;
        /**
         * Indicating whether the first column in the table should have the style applied.
         */
        alterFirstColumn?: boolean;
        /**
         * Indicating whether the last column in the table should have the style applied.
         */
        alterLastColumn?: boolean;
    }
    /**
     * Specifies constants define the section of Table.
     */
    enum TableSection {
        /** The entire table, including header, data and footer **/
        All = 0,
        /** The data rows **/
        Data = 1,
        /** The header row **/
        Header = 2,
        /** The footer row **/
        Footer = 3,
    }
}

declare module wijmo.grid.sheet {
    /**
     * Defines a value filter for a column on a @see:FlexSheet control.
     *
     * Value filters contain an explicit list of values that should be
     * displayed by the sheet.
     */
    class FlexSheetValueFilter extends wijmo.grid.filter.ValueFilter {
        /**
        * Initializes a new instance of the @see:FlexSheetValueFilter class.
        *
        * @param column The column to filter.
        */
        constructor(column: Column);
        /**
         * Gets a value that indicates whether a value passes the filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
    }
}

declare module wijmo.grid.sheet {
    /**
     * The editor used to inspect and modify @see:FlexSheetValueFilter objects.
     *
     * This class is used by the @see:FlexSheetFilter class; you
     * rarely use it directly.
     */
    class FlexSheetValueFilterEditor extends wijmo.grid.filter.ValueFilterEditor {
        /**
         * Updates editor with current filter settings.
         */
        updateEditor(): void;
        /**
         * Updates filter to reflect the current editor values.
         */
        updateFilter(): void;
    }
}

declare module wijmo.grid.sheet {
    /**
     * Defines a condition filter for a column on a @see:FlexSheet control.
     *
     * Condition filters contain two conditions that may be combined
     * using an 'and' or an 'or' operator.
     *
     * This class is used by the @see:FlexSheetFilter class; you will
     * rarely use it directly.
     */
    class FlexSheetConditionFilter extends wijmo.grid.filter.ConditionFilter {
        /**
         * Initializes a new instance of the @see:ConditionFilter class.
         *
         * @param column The column to filter.
         */
        constructor(column: Column);
        /**
         * Returns a value indicating whether a value passes this filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
    }
}

declare module wijmo.grid.sheet {
    /**
     * Defines a filter for a column on a @see:FlexSheet control.
     *
     * The @see:FlexSheetColumnFilter contains a @see:FlexSheetConditionFilter and a
     * @see:FlexSheetValueFilter; only one of them may be active at a time.
     *
     * This class is used by the @see:FlexSheetFilter class; you
     * rarely use it directly.
     */
    class FlexSheetColumnFilter extends wijmo.grid.filter.ColumnFilter {
        /**
         * Initializes a new instance of the @see:FlexSheetColumnFilter class.
         *
         * @param owner The @see:FlexSheetFilter that owns this column filter.
         * @param column The @see:Column to filter.
         */
        constructor(owner: FlexSheetFilter, column: Column);
    }
}

declare module wijmo.grid.sheet {
    /**
     * The editor used to inspect and modify column filters.
     *
     * This class is used by the @see:FlexSheetFilter class; you
     * rarely use it directly.
     */
    class FlexSheetColumnFilterEditor extends wijmo.grid.filter.ColumnFilterEditor {
        /**
         * Initializes a new instance of the @see:FlexSheetColumnFilterEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector
         * for the host element (e.g. '#theCtrl').
         * @param filter The @see:FlexSheetColumnFilter to edit.
         * @param sortButtons Whether to show sort buttons in the editor.
         */
        constructor(element: any, filter: FlexSheetColumnFilter, sortButtons?: boolean);
        _showFilter(filterType: wijmo.grid.filter.FilterType): void;
        private _sortBtnClick(e, asceding);
        private cloneElement(element);
    }
}

declare module wijmo.grid.sheet {
    /**
     * Implements an Excel-style filter for @see:FlexSheet controls.
     *
     * To enable filtering on a @see:FlexSheet control, create an instance
     * of the @see:FlexSheetFilter and pass the grid as a parameter to the
     * constructor.
     */
    class FlexSheetFilter extends wijmo.grid.filter.FlexGridFilter {
        private _undoAcion;
        private _filterChanged;
        /**
         * Gets or sets the current filter definition as a JSON string.
         */
        filterDefinition: string;
        /**
         * Applies the current column filters to the sheet.
         */
        apply(): void;
        /**
         * Shows the filter editor for the given grid column.
         *
         * @param col The @see:Column that contains the filter to edit.
         * @param ht A @see:wijmo.chart.HitTestInfo object containing the range of the cell that
         * triggered the filter display.
         */
        editColumnFilter(col: any, ht?: wijmo.grid.HitTestInfo): void;
        /**
         * Closes the filter editor.
         */
        closeEditor(): void;
        /**
         * Gets the filter for the given column.
         *
         * @param col The @see:Column that the filter applies to (or column name or index).
         * @param create Whether to create the filter if it does not exist.
         */
        getColumnFilter(col: any, create?: boolean): FlexSheetColumnFilter;
        private _checkGroupVisible(range);
    }
}

