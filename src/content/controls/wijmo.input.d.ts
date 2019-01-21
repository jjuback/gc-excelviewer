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
declare module wijmo.input {
    /**
     * DropDown control (abstract).
     *
     * Contains an input element and a button used to show or hide the drop-down.
     *
     * Derived classes must override the _createDropDown method to create whatever
     * editor they want to show in the drop down area (a list of items, a calendar,
     * a color editor, etc).
     */
    class DropDown extends Control {
        _tbx: HTMLInputElement;
        _elRef: HTMLElement;
        _btn: HTMLElement;
        _dropDown: HTMLElement;
        _showBtn: boolean;
        _autoExpand: boolean;
        _animate: boolean;
        _cssClass: string;
        _oldText: string;
        _altDown: boolean;
        _minWidthDropdown: string;
        _setFocus: boolean;
        /**
         * Gets or sets the template used to instantiate @see:DropDown controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:DropDown class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the text shown on the control.
         */
        text: string;
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted
         * by the control.
         *
         * The default value for this property is <b>text</b>.
         */
        inputType: string;
        /**
         * Gets or sets a value that indicates whether the user can modify
         * the control value using the mouse and keyboard.
         *
         * The default value for this property is <b>false</b>.
         */
        isReadOnly: boolean;
        /**
         * Gets or sets a value that determines whether the control value must be
         * set to a non-null value or whether it can be set to null
         * (by deleting the content of the control).
         *
         * This property defaults to true for most controls, including @see:ComboBox,
         * @see:InputDate, @see:InputTime, @see:InputDateTime, and @see:InputColor.
         * It defaults to false for the @see:AutoComplete control.
         */
        isRequired: boolean;
        /**
         * Gets or sets the string shown as a hint when the control is empty.
         */
        placeholder: string;
        /**
         * Gets or sets a value that indicates whether the drop down is currently
         * visible.
         *
         * The default value for this property is <b>false</b>.
         */
        isDroppedDown: boolean;
        /**
         * Gets the drop down element shown when the @see:isDroppedDown
         * property is set to true.
         */
        readonly dropDown: HTMLElement;
        /**
         * Gets or sets a CSS class name to add to the control's drop-down element.
         *
         * This property is useful when styling the drop-down element, because it is
         * shown as a child of the document body rather than as a child of the control
         * itself, which prevents using CSS selectors based on the parent control.
         */
        dropDownCssClass: string;
        /**
         * Gets or sets a value that indicates whether the control should
         * display a drop-down button.
         *
         * The default value for this property is <b>true</b>.
         */
        showDropDownButton: boolean;
        /**
         * Gets or sets a value that indicates whether the control should
         * automatically expand the selection to whole words/numbers when
         * the control is clicked.
         *
         * The default value for this property is <b>true</b>.
         */
        autoExpandSelection: boolean;
        /**
         * Gets or sets a value that indicates whether the control should use a fade-in animation
         * when displaying the drop-down.
         *
         * The default value for this property is <b>false</b>.
         */
        isAnimated: boolean;
        /**
         * Sets the focus to the control and selects all its content.
         */
        selectAll(): void;
        /**
         * Occurs when the value of the @see:text property changes.
         */
        readonly textChanged: Event;
        /**
         * Raises the @see:textChanged event.
         */
        onTextChanged(e?: EventArgs): void;
        /**
         * Occurs before the drop down is shown or hidden.
         */
        readonly isDroppedDownChanging: Event;
        /**
         * Raises the @see:isDroppedDownChanging event.
         */
        onIsDroppedDownChanging(e: CancelEventArgs): boolean;
        /**
         * Occurs after the drop down is shown or hidden.
         */
        readonly isDroppedDownChanged: Event;
        /**
         * Raises the @see:isDroppedDownChanged event.
         */
        onIsDroppedDownChanged(e?: EventArgs): void;
        onGotFocus(e?: EventArgs): void;
        onLostFocus(e?: EventArgs): void;
        containsFocus(): boolean;
        dispose(): void;
        refresh(fullUpdate?: boolean): void;
        _handleResize(): void;
        protected _dropDownClick(e: MouseEvent): void;
        private _expandSelection();
        private _getCharType(text, pos);
        protected _keydown(e: KeyboardEvent): void;
        protected _btnclick(e: MouseEvent): void;
        protected _setText(text: string, fullMatch: boolean): void;
        protected _updateBtn(): void;
        protected _createDropDown(): void;
        protected _commitText(): void;
        protected _updateDropDown(): void;
    }
}

declare module wijmo.input {
    /**
     * Specifies constants that define the date selection behavior.
     */
    enum DateSelectionMode {
        /** The user cannot change the current value using the mouse or keyboard. */
        None = 0,
        /** The user can select days. */
        Day = 1,
        /** The user can select months. */
        Month = 2,
    }
    /**
     * The @see:Calendar control displays a one-month calendar and allows users
     * to select a date.
     *
     * You may use the @see:min and @see:max properties to restrict the range
     * of dates that the user can select.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * Use the @see:value property to get or set the currently selected date.
     *
     * Use the @see:selectionMode property to determine whether users should be
     * allowed to select days, months, or no values at all.
     *
     * The @see:Calendar control supports the following keyboard commands:
     *
     * <table>
     *   <thead>
     *     <tr><th>Key Combination</th><th>Moves Selection To</th></tr>
     *   </thead>
     *   <tbody>
     *     <tr><td>Left</td><td>Previous day</td></tr>
     *     <tr><td>Right</td><td>Next day</td></tr>
     *     <tr><td>Up</td><td>Previous week</td></tr>
     *     <tr><td>Down</td><td>Next week</td></tr>
     *     <tr><td>PgUp</td><td>Previous month</td></tr>
     *     <tr><td>PgDn</td><td>Next month</td></tr>
     *     <tr><td>Alt + PgUp</td><td>Previous year</td></tr>
     *     <tr><td>Alt + PgDn</td><td>Next year</td></tr>
     *     <tr><td>Home</td><td>First valid day of the month</td></tr>
     *     <tr><td>End</td><td>Last valid day of the month</td></tr>
     *     <tr><td>Alt + End</td><td>Today's date</td></tr>
     *   </tbody>
     * </table>
     *
     * The example below shows a <b>Date</b> value with date and time information
     * using an @see:InputDate and an @see:InputTime control. Notice how both
     * controls are bound to the same controller variable, and each edits the
     * appropriate information (either date or time). The example also shows a
     * @see:Calendar control that allows users to select the date with a
     * single click.
     *
     * @fiddle:vgc3Y
     */
    class Calendar extends Control {
        private _tbHdr;
        private _tbMth;
        private _tbYr;
        private _btnMth;
        private _spMth;
        private _btnPrv;
        private _btnTdy;
        private _btnNxt;
        private _lbYears;
        private _value;
        private _currMonth;
        private _firstDay;
        private _min;
        private _max;
        private _fdw;
        private _itemFormatter;
        private _itemValidator;
        private _readOnly;
        private _selMode;
        private _rptUp;
        private _rptDn;
        private _yrPicker;
        private _tmYrHidden;
        private _fmtYrMo;
        private _fmtYr;
        private _fmtDayHdr;
        private _fmtDay;
        private _fmtMonths;
        /**
         * Gets or sets the template used to instantiate @see:Calendar controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:Calendar class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the currently selected date.
         *
         * The default value for this property is the current date.
         */
        value: Date;
        /**
         * Gets or sets the earliest date that the user can select in the calendar.
         *
         * The default value for this property is <b>null</b>, which means no earliest
         * date is defined.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: Date;
        /**
         * Gets or sets the latest date that the user can select in the calendar.
         *
         * The default value for this property is <b>null</b>, which means no latest
         * date is defined.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: Date;
        /**
         * Gets or sets a value that indicates whether users can select
         * days, months, or no values at all.
         *
         * The default value for this property is <b>DateSelectionMode.Day</b>.
         */
        selectionMode: DateSelectionMode;
        /**
         * Gets or sets a value that indicates whether the user can modify
         * the control value using the mouse and keyboard.
         *
         * The default value for this property is <b>false</b>.
         */
        isReadOnly: boolean;
        /**
         * Gets or sets a value that determines whether the calendar buttons
         * should act as repeat buttons, firing repeatedly as the button
         * remains pressed.
         *
         * The default value for this property is <b>true</b>.
         */
        repeatButtons: boolean;
        /**
         * Gets or sets a value that determines whether the calendar should
         * display a list of years when the user clicks the header element
         * on the year calendar.
         *
         * The default value for this property is <b>true</b>.
         */
        showYearPicker: boolean;
        /**
         * Gets or sets a value that represents the first day of the week,
         * the one displayed in the first column of the calendar.
         *
         * Setting this property to null causes the calendar to use the default
         * for the current culture. In the English culture, the first day of the
         * week is Sunday (0); in most European cultures, the first day of the
         * week is Monday (1).
         */
        firstDayOfWeek: number;
        /**
         * Gets or sets the month displayed in the calendar.
         */
        displayMonth: Date;
        /**
         * Gets or sets the format used to display the month and year
         * above the calendar in month view.
         *
         * The default value for this property is <b>'y'</b>.
         */
        formatYearMonth: string;
        /**
         * Gets or sets the format used to display the headers
         * above the days in month view.
         *
         * The default value for this property is <b>'ddd'</b>.
         */
        formatDayHeaders: string;
        /**
         * Gets or sets the format used to display the days
         * in month view.
         *
         * The default value for this property is 'd ' (the space after the 'd'
         * prevents the format from being interpreted as 'd', the standard format
         * used to represent the short date pattern).
         */
        formatDays: string;
        /**
         * Gets or sets the format used to display the year
         * above the months in year view.
         *
         * The default value for this property is <b>'yyyy'</b>.
         */
        formatYear: string;
        /**
         * Gets or sets the format used to display the months
         * in year view.
         *
         * The default value for this property is <b>'MMM'</b>.
         */
        formatMonths: string;
        /**
         * Gets or sets a value indicating whether the control displays the header
         * area with the current month and navigation buttons.
         *
         * The default value for this property is <b>true</b>.
         */
        showHeader: boolean;
        /**
         * Gets or sets a value indicating whether the calendar displays
         * a month or a year.
         *
         * The default value for this property is <b>true</b>.
         */
        monthView: boolean;
        /**
         * Gets or sets a formatter function to customize dates in the calendar.
         *
         * The formatter function can add any content to any date. It allows
         * complete customization of the appearance and behavior of the calendar.
         *
         * If specified, the function takes two parameters:
         * <ul>
         *     <li>the date being formatted </li>
         *     <li>the HTML element that represents the date</li>
         * </ul>
         *
         * For example, the code below shows weekends with a yellow background:
         * <pre>
         * calendar.itemFormatter = function(date, element) {
         *   var day = date.getDay();
         *   element.style.backgroundColor = day == 0 || day == 6 ? 'yellow' : '';
         * }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Gets or sets a validator function to determine whether dates are valid for selection.
         *
         * If specified, the validator function should take one parameter representing the
         * date to be tested, and should return false if the date is invalid and should not
         * be selectable.
         *
         * For example, the code below shows weekends in a disabled state and prevents users
         * from selecting those dates:
         * <pre>
         * calendar.itemValidator = function(date) {
         *   var weekday = date.getDay();
         *   return weekday != 0 && weekday != 6;
         * }
         * </pre>
         */
        itemValidator: Function;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        /**
         * Occurs after the @see:displayMonth property changes.
         */
        readonly displayMonthChanged: Event;
        /**
         * Raises the @see:displayMonthChanged event.
         */
        onDisplayMonthChanged(e?: EventArgs): void;
        /**
         * Occurs when an element representing a day in the calendar has been created.
         *
         * This event can be used to format calendar items for display. It is similar
         * in purpose to the @see:itemFormatter property, but has the advantage
         * of allowing multiple independent handlers.
         *
         * For example, the code below uses the @see:formatItem event to disable weekends
         * so they appear dimmed in the calendar:
         *
         * <pre>// disable Sundays and Saturdays
         * calendar.formatItem.addHandler(function (s, e) {
         *   var day = e.data.getDay();
         *   if (day == 0 || day == 6) {
         *     wijmo.addClass(e.item, 'wj-state-disabled');
         *   }
         * });</pre>
         */
        readonly formatItem: Event;
        /**
         * Raises the @see:formatItem event.
         *
         * @param e @see:FormatItemEventArgs that contains the event data.
         */
        onFormatItem(e: FormatItemEventArgs): void;
        containsFocus(): boolean;
        dispose(): void;
        refresh(fullUpdate?: boolean): void;
        private _canChangeValue();
        private _valid(date);
        private _inValidRange(date);
        private _monthInValidRange(month);
        private _yearInValidRange(year);
        private _sameMonth(date, month);
        private _getValidDate(month, first);
        _clamp(value: Date): Date;
        private _createChildren();
        private _createYearPicker();
        private _createElement(tag, parent?, className?);
        private _click(e);
        private _getCellIndex(tbl, cell);
        private _keydown(e);
        private _getMonth(date);
        private _monthMode();
        private _navigate(skip);
    }
}

declare module wijmo.input {
    /**
     * The @see:ColorPicker control allows users to select a color by clicking
     * on panels to adjust color channels (hue, saturation, brightness, alpha).
     *
     * Use the @see:value property to get or set the currently selected color.
     *
     * The control is used as a drop-down for the @see:InputColor control.
     *
     * @fiddle:z84ebpec
     */
    class ColorPicker extends Control {
        _hsb: number[];
        _alpha: number;
        _value: string;
        _palette: string[];
        _eSB: HTMLElement;
        _eHue: HTMLElement;
        _eAlpha: HTMLElement;
        _cSB: HTMLElement;
        _cHue: HTMLElement;
        _cAlpha: HTMLElement;
        _ePal: HTMLElement;
        _ePreview: HTMLElement;
        _eText: HTMLElement;
        _htDown: Element;
        /**
         * Gets or sets the template used to instantiate @see:ColorPicker controls.
         */
        static controlTemplate: string;
        static _tplCursor: string;
        /**
         * Initializes a new instance of the @see:ColorPicker class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets a value indicating whether the @see:ColorPicker allows users
         * to edit the color's alpha channel (transparency).
         *
         * The default value for this property is <b>true</b>.
         */
        showAlphaChannel: boolean;
        /**
         * Gets or sets a value indicating whether the @see:ColorPicker shows a string representation
         * of the current color.
         *
         * The default value for this property is <b>false</b>.
         */
        showColorString: boolean;
        /**
         * Gets or sets the currently selected color.
         *
         * This property defaults to 'white'.
         */
        value: string;
        /**
         * Gets or sets an array that contains the colors in the palette.
         *
         * The palette contains ten colors, represented by an array with
         * ten strings. The first two colors are usually white and black.
         */
        palette: string[];
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        protected _mouseDown(e: MouseEvent): void;
        protected _mouseMove(e: MouseEvent): void;
        protected _mouseUp(e: MouseEvent): void;
        private _updateColor();
        private _updatePalette();
        private _makePalEntry(color, margin);
        private _updatePanels();
        private _getTargetPanel(e);
    }
}

declare module wijmo.input {
    /**
     * The @see:ListBox control displays a list of items which may contain
     * plain text or HTML, and allows users to select items with the mouse
     * or the keyboard.
     *
     * Use the @see:ListBox.selectedIndex property to determine which item
     * is currently selected.
     *
     * You can populate a @see:ListBox using an array of strings or you can
     * use an array of objects, in which case the @see:ListBox.displayMemberPath
     * property determines which object property is displayed on the list.
     *
     * To display items that contain HTML rather than plain text, set the
     * @see:ListBox.isContentHtml property to true.
     *
     * The @see:ListBox control supports the following keyboard commands:
     *
     * <table>
     *   <thead>
     *     <tr><th>Key Combination</th><th>Action</th></tr>
     *   </thead>
     *   <tbody>
     *     <tr><td>Up/Down</td><td>Select the previous/next item</td></tr>
     *     <tr><td>PageUp/Down</td><td>Select the item one page above or below the selection</td></tr>
     *     <tr><td>Home/End</td><td>Select the first/last items</td></tr>
     *     <tr><td>Space</td><td>Toggle the checkbox in the current item (see the @see:checkedMemberPath property)</td></tr>
     *     <tr><td>Other characters</td><td>Search for items that contain the text typed (multi-character auto-search)</td></tr>
     *   </tbody>
     * </table>
     *
     * The example below creates a @see:ListBox control and populates it using
     * a 'countries' array. The control updates its @see:ListBox.selectedIndex
     * and @see:ListBox.selectedItem properties as the user moves the selection.
     *
     * @fiddle:8HnLx
     */
    class ListBox extends Control {
        _items: any;
        _cv: collections.ICollectionView;
        _itemFormatter: Function;
        _pathDisplay: Binding;
        _pathValue: Binding;
        _pathChecked: Binding;
        _html: boolean;
        _shGroups: boolean;
        _checkedItems: any[];
        _itemRole: string;
        _checking: boolean;
        _search: string;
        _toSearch: any;
        _bndDisplay: Binding;
        _fmtItemHandlers: number;
        _itemCount: number;
        /**
         * Initializes a new instance of the @see:ListBox class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the array or @see:ICollectionView object that contains
         * the list items.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object used as the item source.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Gets or sets a value that determines whether the @see:ListBox should
         * include group header items to delimit data groups.
         *
         * Data groups are created by modifying the @see:ICollectionView.groupDescriptions
         * property of the @see:ICollectionView object used as an @see:itemsSource.
         *
         * The @see:ListBox only shows the first level of grouping.
         *
         * The default value for this property is <b>false</b>.
         */
        showGroups: boolean;
        /**
         * Gets or sets a value indicating whether items contain plain
         * text or HTML.
         *
         * The default value for this property is <b>false</b>.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a function used to customize the values shown on
         * the list.
         * The function takes two arguments, the item index and the default
         * text or html, and returns the new text or html to display.
         *
         * If the formatting function needs a scope (i.e. a meaningful
         * 'this' value), then remember to set the filter using the 'bind'
         * function to specify the 'this' object. For example:
         *
         * <pre>
         *   listBox.itemFormatter = customItemFormatter.bind(this);
         *   function customItemFormatter(index, content) {
         *     if (this.makeItemBold(index)) {
         *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
         *     }
         *     return content;
         *   }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Gets or sets the name of the property to use as the visual
         * representation of the items.
         */
        displayMemberPath: string;
        /**
         * Gets or sets the name of the property used to get the
         * @see:selectedValue from the @see:selectedItem.
         */
        selectedValuePath: string;
        /**
         * Gets or sets the name of the property used to control
         * check boxes placed next to each item.
         *
         * Use this property to create multi-select LisBoxes.
         *
         * When an item is checked or unchecked, the control raises the
         * @see:itemChecked event.
         *
         * Use the @see:selectedItem property to retrieve the item that
         * was checked or unchecked, or use the @see:checkedItems property
         * to retrieve the list of items that are currently checked.
         */
        checkedMemberPath: string;
        /**
         * Gets or sets the value or the "role" attribute added to the
         * list items. The default value for this property is "option".
         */
        itemRole: string;
        /**
         * Gets the string displayed for the item at a given index.
         *
         * The string may be plain text or HTML, depending on the setting
         * of the @see:isContentHtml property.
         *
         * @param index The index of the item in the @see:itemsSource.
         */
        getDisplayValue(index: number): string;
        /**
         * Gets the text displayed for the item at a given index (as plain text).
         *
         * @param index The index of the item in the @see:itemsSource.
         */
        getDisplayText(index: number): string;
        /**
         * Gets a value that determines whether the item at a given index is enabled.
         *
         * @param index The index of the item in the @see:itemsSource.
         */
        isItemEnabled(index: number): boolean;
        /**
         * Gets or sets the index of the currently selected item.
         */
        selectedIndex: number;
        /**
         * Gets or sets the item that is currently selected.
         */
        selectedItem: any;
        /**
         * Gets or sets the value of the @see:selectedItem obtained using
         * the @see:selectedValuePath.
         */
        selectedValue: any;
        /**
         * Gets or sets the maximum height of the list.
         */
        maxHeight: number;
        /**
         * Highlights the selected item and scrolls it into view.
         *
         * @param setFocus Whether to set the focus to the list after scrolling
         * the selected item into view.
         */
        showSelection(setFocus?: boolean): void;
        /**
         * Loads the list with items from the current @see:itemsSource.
         */
        loadList(): void;
        /**
         * Gets the checked state of an item on the list.
         *
         * This method is applicable only on multi-select ListBoxes
         * (see the @see:checkedMemberPath property).
         *
         * @param index Item index.
         */
        getItemChecked(index: number): boolean;
        /**
         * Sets the checked state of an item on the list.
         *
         * This method is applicable only on multi-select ListBoxes
         * (see the @see:checkedMemberPath property).
         *
         * @param index Item index.
         * @param checked Item's new checked state.
         */
        setItemChecked(index: number, checked: boolean): void;
        /**
         * Toggles the checked state of an item on the list.
         * This method is applicable only to multi-select ListBoxes
         * (see the @see:checkedMemberPath property).
         *
         * @param index Item index.
         */
        toggleItemChecked(index: number): void;
        /**
         * Gets or sets an array containing the items that are currently checked.
         */
        checkedItems: any[];
        /**
         * Gets the data index of an element within the list.
         *
         * @param e Element to search for.
         * @return The index of the element in the list, or -1 if
         * the element is not a member of the list.
         */
        indexOf(e: HTMLElement): number;
        /**
         * Occurs when the value of the @see:selectedIndex property changes.
         */
        readonly selectedIndexChanged: Event;
        /**
         * Raises the @see:selectedIndexChanged event.
         */
        onSelectedIndexChanged(e?: EventArgs): void;
        /**
         * Occurs when the list of items changes.
         */
        readonly itemsChanged: Event;
        /**
         * Raises the @see:itemsChanged event.
         */
        onItemsChanged(e?: EventArgs): void;
        /**
         * Occurs before the list items are generated.
         */
        readonly loadingItems: Event;
        /**
         * Raises the @see:loadingItems event.
         */
        onLoadingItems(e?: EventArgs): void;
        /**
         * Occurs after the list items have been generated.
         */
        readonly loadedItems: Event;
        /**
         * Raises the @see:loadedItems event.
         */
        onLoadedItems(e?: EventArgs): void;
        /**
         * Occurs when the current item is checked or unchecked by the user.
         *
         * This event is raised when the @see:checkedMemberPath is set to
         * the name of a property to add check boxes to each item in the control.
         *
         * Use the @see:selectedItem property to retrieve the item that was
         * checked or unchecked.
         */
        readonly itemChecked: Event;
        /**
         * Raises the @see:itemChecked event.
         */
        onItemChecked(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:checkedItems property changes.
         */
        readonly checkedItemsChanged: Event;
        /**
         * Raises the @see:checkedItemsChanged event.
         */
        onCheckedItemsChanged(e?: EventArgs): void;
        /**
         * Occurs when an element representing a list item has been created.
         *
         * This event can be used to format list items for display. It is similar
         * in purpose to the @see:itemFormatter property, but has the advantage
         * of allowing multiple independent handlers.
         */
        readonly formatItem: Event;
        /**
         * Raises the @see:formatItem event.
         *
         * @param e @see:FormatItemEventArgs that contains the event data.
         */
        onFormatItem(e: FormatItemEventArgs): void;
        /**
         * Refreshes the control.
         *
         * @param fullUpdate Whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        _getChild(index: number): HTMLElement;
        _getElementIndex(index: number): number;
        private _setItemChecked(index, checked, notify?);
        private _cvCollectionChanged(sender, e);
        private _cvCurrentChanged(sender, e);
        private _populateList();
        _createItem(i: number): string;
        _createHeaderItem(group: wijmo.collections.CollectionViewGroup): string;
        private _click(e);
        private _keydown(e);
        private _keypress(e);
        _selectNext(): boolean;
        _selectPrev(): boolean;
        _selectFirst(): boolean;
        _selectLast(): boolean;
        _selectNextPage(): boolean;
        _selectPrevPage(): boolean;
        private _findNext();
        private _getCheckbox(index);
        _initFromSelect(hostElement: HTMLElement): void;
    }
    /**
     * Provides arguments for the @see:ListBox.formatItem event.
     */
    class FormatItemEventArgs extends EventArgs {
        _index: number;
        _data: any;
        _item: HTMLElement;
        /**
         * Initializes a new instance of the @see:FormatItemEventArgs class.
         *
         * @param index Index of the item being formatted in the source @see:ICollectionView, or -1 if the item is a group header.
         * @param data Data item being formatted, or a @see:CollectionViewGroup object if the item is a group header.
         * @param item Element that represents the list item to be formatted.
         */
        constructor(index: number, data: any, item: HTMLElement);
        /**
         * Gets the index of the data item in the list.
         */
        readonly index: number;
        /**
         * Gets the data item being formatted.
         */
        readonly data: any;
        /**
         * Gets a reference to the element that represents the list item to be formatted.
         */
        readonly item: HTMLElement;
    }
}

declare module wijmo.input {
    /**
     * The @see:ComboBox control allows users to pick strings from lists.
     *
     * The control automatically completes entries as the user types, and
     * allows users to show a drop-down list with the items available.
     *
     * Use the @see:ComboBox.itemsSource property to populate the list of
     * options.
     * The items may be strings or objects. If the items are objects, use
     * the @see:ComboBox.displayMemberPath to define which property of the
     * items will be displayed in the list and use the @see:ComboBox.selectedValuePath
     * property to define which property of the items will be used to set the
     * combo's @see:ComboBox.selectedValue property.
     *
     * Use the @see:ComboBox.selectedIndex or the @see:ComboBox.text properties
     * to determine which item is currently selected.
     *
     * The @see:ComboBox.isRequired property determines whether the control
     * must have a non-null value or whether it can be set to null
     * (by deleting the content of the control). If the value is set to null,
     * the @see:ComboBox.selectedIndex is set to -1.
     *
     * The @see:ComboBox.isEditable property determines whether users can enter
     * values that are not present in the list.
     *
     * The example below creates a @see:ComboBox control and populates it with
     * a list of countries. The @see:ComboBox searches for the country as the
     * user types.
     * The @see:ComboBox.isEditable property is set to false, so the user must
     * select one of the items in the list.
     *
     * The example also shows how to create and populate a @see:ComboBox using
     * an HTML <b>&lt;select&gt;</b> element with <b>&lt;option&gt;</b> child
     * elements.
     *
     * @fiddle:8HnLx
     */
    class ComboBox extends DropDown {
        _lbx: ListBox;
        _editable: boolean;
        _delKey: number;
        _composing: boolean;
        _settingText: boolean;
        _pathHdr: Binding;
        _bsCollapse: boolean;
        /**
         * Initializes a new instance of the @see:ComboBox class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the array or @see:ICollectionView object that contains
         * the items to select from.
         *
         * Setting this property to an array causes the @see:ComboBox to create
         * an internal @see:ICollectionView object that is exposed by the
         * @see:ComboBox.collectionView property.
         *
         * The @see:ComboBox selection is determined by the current item in its
         * @see:ComboBox.collectionView. By default, this is the first item in
         * the collection. You may change this behavior by setting the
         * @see:wijmo.collections.CollectionView.currentItem property of the
         * @see:ComboBox.collectionView to null.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object used as the item source.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Gets or sets a value that determines whether the drop-down @see:ListBox
         * should include group header items to delimit data groups.
         *
         * Data groups are created by modifying the @see:ICollectionView.groupDescriptions
         * property of the @see:ICollectionView object used as an @see:itemsSource.
         *
         * The default value for this property is <b>false</b>.
         */
        showGroups: boolean;
        /**
         * Gets or sets the name of the property to use as the visual
         * representation of the items.
         */
        displayMemberPath: string;
        /**
         * Gets or sets the name of a property to use for getting the value
         * displayed in the control's input element.
         *
         * The default value for this property is null, which causes the control
         * to display the same content in the input element as in the selected
         * item of the drop-down list.
         *
         * Use this property if you want to de-couple the value shown in the
         * input element from the values shown in the drop-down list. For example,
         * the input element could show an item's name and the drop-down list
         * could show additional detail.
         */
        headerPath: string;
        /**
         * Gets or sets the name of the property used to get the
         * @see:selectedValue from the @see:selectedItem.
         */
        selectedValuePath: string;
        /**
         * Gets or sets a value indicating whether the drop-down list displays
         * items as plain text or as HTML.
         *
         * The default value for this property is <b>false</b>.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a function used to customize the values shown in
         * the drop-down list.
         * The function takes two arguments, the item index and the default
         * text or html, and returns the new text or html to display.
         *
         * If the formatting function needs a scope (i.e. a meaningful 'this'
         * value), then remember to set the filter using the 'bind' function
         * to specify the 'this' object. For example:
         *
         * <pre>
         *   comboBox.itemFormatter = customItemFormatter.bind(this);
         *   function customItemFormatter(index, content) {
         *     if (this.makeItemBold(index)) {
         *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
         *     }
         *     return content;
         *   }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Event that fires when items in the drop-down list are created.
         *
         * You can use this event to modify the HTML in the list items.
         * For details, see the @see:ListBox.formatItem event.
         */
        readonly formatItem: Event;
        /**
         * Gets or sets the index of the currently selected item in
         * the drop-down list.
         */
        selectedIndex: number;
        /**
         * Gets or sets the item that is currently selected in
         * the drop-down list.
         */
        selectedItem: any;
        /**
         * Gets or sets the value of the @see:selectedItem, obtained
         * using the @see:selectedValuePath.
         *
         * If the @see:selectedValuePath property is not set, gets or
         * sets the value of the control's @see:selectedItem property.
         *
         * If the @see:itemsSource property is not set, gets or sets
         * the value of the control's @see:text property.
         */
        selectedValue: any;
        /**
         * Gets or sets a value that determines whether the content of the
         * input element should be restricted to items in the @see:itemsSource
         * collection.
         *
         * This property defaults to false on the @see:ComboBox control, and
         * to true on the @see:AutoComplete and @see:InputTime controls.
         */
        isEditable: boolean;
        /**
         * Gets or sets the maximum height of the drop-down list.
         */
        maxDropDownHeight: number;
        /**
         * Gets or sets the maximum width of the drop-down list.
         *
         * The width of the drop-down list is also limited by the width of
         * the control itself (that value represents the drop-down's
         * minimum width).
         */
        maxDropDownWidth: number;
        /**
         * Gets the string displayed in the input element for the item at a
         * given index (always plain text).
         *
         * @param index The index of the item to retrieve the text for.
         */
        getDisplayText(index?: number): string;
        /**
         * Gets the index of the first item that matches a given string.
         *
         * @param text The text to search for.
         * @param fullMatch Whether to look for a full match or just the start of the string.
         * @return The index of the item, or -1 if not found.
         */
        indexOf(text: string, fullMatch: boolean): number;
        /**
         * Gets the @see:ListBox control shown in the drop-down.
         */
        readonly listBox: ListBox;
        /**
         * Occurs when the value of the @see:itemsSource property changes.
         */
        readonly itemsSourceChanged: Event;
        /**
         * Raises the @see:itemsSourceChanged event.
         */
        onItemsSourceChanged(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:selectedIndex property changes.
         */
        readonly selectedIndexChanged: Event;
        /**
         * Raises the @see:selectedIndexChanged event.
         */
        onSelectedIndexChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        onLostFocus(e?: EventArgs): void;
        onIsDroppedDownChanging(e: CancelEventArgs): boolean;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _updateBtn(): void;
        protected _createDropDown(): void;
        protected _wheel(e: WheelEvent): void;
        protected _dropDownClick(e: MouseEvent): void;
        protected _setText(text: string, fullMatch: boolean): void;
        protected _findNext(text: string, step: number): number;
        protected _keydown(e: KeyboardEvent): void;
        protected _updateInputSelection(start: number): void;
        private _getSelStart();
        private _getSelEnd();
        private _setSelRange(start, end);
    }
}

/**
 * Defines input controls for strings, numbers, dates, times, and colors.
 */
declare module wijmo.input {
    /**
     * The @see:AutoComplete control is an input control that allows callers
     * to customize the item list as the user types.
     *
     * The control is similar to the @see:ComboBox, except the item source is a
     * function (@see:itemsSourceFunction) rather than a static list. For example,
     * you can look up items on remote databases as the user types.
     *
     * The example below creates an @see:AutoComplete control and populates it using
     * a 'countries' array. The @see:AutoComplete searches for the country as the user
     * types, and narrows down the list of countries that match the current input.
     *
     * @fiddle:8HnLx
     */
    class AutoComplete extends ComboBox {
        private _cssMatch;
        private _itemsSourceFn;
        private _itemsSourceFnCallBackBnd;
        private _srchProp;
        private _minLength;
        private _maxItems;
        private _itemCount;
        private _delay;
        private _toSearch;
        private _query;
        private _rxMatch;
        private _rxHighlight;
        private _inCallback;
        private _srchProps;
        /**
         * Initializes a new instance of the @see:AutoComplete class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the minimum input length to trigger auto-complete suggestions.
         *
         * The default value for this property is <b>2</b>.
         */
        minLength: number;
        /**
         * Gets or sets the maximum number of items to display in the drop-down list.
         *
         * The default value for this property is <b>6</b>.
         */
        maxItems: number;
        /**
         * Gets or sets the delay, in milliseconds, between when a keystroke occurs
         * and when the search is performed.
         *
         * The default value for this property is <b>500</b> milliseconds.
         */
        delay: number;
        /**
         * Gets or sets a string containing a comma-separated list of properties to use
         * when searching for items.
         *
         * By default, the @see:AutoComplete control searches for matches against the
         * property specified by the @see:displayMemberPath property.
         * The @see:searchMemberPath property allows you to search using additional
         * properties.
         *
         * For example, the code below would cause the control to display the company
         * name and search by company name, symbol, and country:
         *
         * <pre>var ac = new wijmo.input.AutoComplete('#autoComplete', {
         *   itemsSource: companies,
         *   displayMemberPath: 'name',
         *   searchMemberPath: 'symbol,country'
         * });</pre>
         */
        searchMemberPath: string;
        /**
         * Gets or sets a function that provides list items dynamically as the user types.
         *
         * The function takes three parameters:
         * <ul>
         *     <li>the query string typed by the user</li>
         *     <li>the maximum number of items to return</li>
         *     <li>the callback function to call when the results become available</li>
         * </ul>
         *
         * For example:
         * <pre>autoComplete.itemsSourceFunction = function (query, max, callback) {
         *   // get results from the server
         *   var params = { query: query, max: max };
         *   $.getJSON('companycatalog.ashx', params, function (response) {
         *     // return results to the control
         *     callback(response);
         *   });
         * };</pre>
         */
        itemsSourceFunction: Function;
        /**
         * Gets or sets the name of the CSS class used to highlight any parts
         * of the content that match the search terms.
         */
        cssMatch: string;
        _keydown(e: KeyboardEvent): void;
        _setText(text: string): void;
        _itemSourceFunctionCallback(result: any): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _updateItems(): void;
        protected _filter(item: any): boolean;
        protected _getItemText(item: any, header: boolean): string;
        protected _formatListItem(sender: any, e: FormatItemEventArgs): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:Menu control shows a text element with a drop-down list of commands that
     * the user can invoke by click or touch.
     *
     * The @see:Menu control inherits from @see:ComboBox, so you populate and style it
     * in the same way that you do the @see:ComboBox (see the @see:Menu.itemsSource
     * property).
     *
     * The @see:Menu control adds an @see:Menu.itemClicked event that fires when the user
     * selects an item from the menu. The event handler can inspect the @see:Menu control
     * to determine which item was clicked. For example:
     *
     * <pre>
     * var menu = new wijmo.input.Menu(hostElement);
     * menu.header = 'Main Menu';
     * menu.itemsSource = ['option 1', 'option 2', 'option 3'];
     * menu.itemClicked.addHandler(function(sender, args) {
     *   var menu = sender;
     *   alert('Thanks for selecting item ' + menu.selectedIndex + ' from menu ' + menu.header + '!');
     * });
     * </pre>
     *
     * The example below shows how you can create menus that handle the
     * @see:itemClicked event.
     *
     * @fiddle:5fe93pm8
     */
    class Menu extends ComboBox {
        _hdr: HTMLElement;
        _closing: boolean;
        _cmd: any;
        _cmdPath: string;
        _cmdParamPath: string;
        _subPath: string;
        _defaultItem: any;
        _owner: HTMLElement;
        _isButton: boolean;
        _openOnHover: boolean;
        _toHover: any;
        _subMenu: Menu;
        _hoverEnterBnd: any;
        _hoverLeaveBnd: any;
        _hoverOverBnd: any;
        /**
         * Initializes a new instance of the @see:Menu class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the HTML text shown in the @see:Menu element.
         */
        header: string;
        /**
         * Gets or sets the command to execute when an item is clicked.
         *
         * Commands are objects that implement two methods:
         * <ul>
         *  <li><b>executeCommand(parameter)</b> This method executes the command.</li>
         *  <li><b>canExecuteCommand(parameter)</b> This method returns a Boolean value
         *      that determines whether the controller can execute the command.
         *      If this method returns false, the menu option is disabled.</li>
         * </ul>
         *
         * The parameter passed to the command is defined by the value of the
         * @see:commandParameterPath property of the current item. If the
         * @see:commandParameterPath property is not specified, the parameter
         * passed is the item itself.
         *
         * You can also set commands on individual items using the @see:commandPath
         * property.
         */
        command: any;
        /**
         * Gets or sets the name of the property that contains the command to
         * execute when the user clicks an item.
         *
         * Commands are objects that implement two methods:
         * <ul>
         *  <li><b>executeCommand(parameter)</b> This method executes the command.</li>
         *  <li><b>canExecuteCommand(parameter)</b> This method returns a Boolean value
         *      that determines whether the controller can execute the command.
         *      If this method returns false, the menu option is disabled.</li>
         * </ul>
         */
        commandPath: string;
        /**
         * Gets or sets the name of the property that contains a parameter to use with
         * the command specified by the @see:commandPath property.
         */
        commandParameterPath: string;
        /**
         * Gets or sets the name of the property that contains an array with items
         * to be displayed in a sub-menu.
         */
        subItemsPath: string;
        /**
         * Gets or sets a value that determines whether the menu (and any sub-menus)
         * should open and close automatically when the mouse hovers over the items.
         *
         * The default value for this property is <b>false</b>.
         */
        openOnHover: boolean;
        /**
         * Gets or sets a value that determines whether this @see:Menu should act
         * as a split button instead of a regular menu.
         *
         * The default value for this property is <b>false</b>.
         *
         * The difference between regular menus and split buttons is what happens
         * when the user clicks the menu header.
         * In regular menus, clicking the header shows or hides the menu options.
         * In split buttons, clicking the header raises the @see:Menu.itemClicked
         * event and/or invokes the command associated with the last option selected by
         * the user as if the user had picked the item from the drop-down list.
         *
         * If you want to differentiate between clicks on menu items and the button
         * part of a split button, check the value of the @see:Menu.isDroppedDown property
         * of the event sender. If that is true, then a menu item was clicked; if it
         * is false, then the button was clicked.
         *
         * For example, the code below implements a split button that uses the drop-down
         * list only to change the default item/command, and triggers actions only when
         * the button is clicked:
         *
         * <pre>&lt;-- view --&gt;
         * &lt;wj-menu is-button="true" header="Run" value="browser"
         *   item-clicked="itemClicked(s, e)"&gt;
         *   &lt;wj-menu-item value="'Internet Explorer'"&gt;Internet Explorer&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Chrome'"&gt;Chrome&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Firefox'"&gt;Firefox&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Safari'"&gt;Safari&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Opera'"&gt;Opera&lt;/wj-menu-item&gt;
         * &lt;/wj-menu&gt;
         *
         * // controller
         * $scope.browser = 'Internet Explorer';
         * $scope.itemClicked = function (s, e) {
         *   // if not dropped down, click was on the button
         *   if (!s.isDroppedDown) {
         *     alert('running ' + $scope.browser);
         *   }
         *}</pre>
         */
        isButton: boolean;
        /**
         * Gets or sets the element that owns this @see:Menu.
         *
         * This variable is set by the wj-context-menu directive in case a single
         * menu is used as a context menu for several different elements.
         */
        owner: HTMLElement;
        /**
         * Shows the menu at a given location.
         *
         * This method is useful if you want to use the menu as a context
         * menu, attached to one or more elements on the page. For example:
         *
         * <pre>// create menu
         * var div = document.createElement('div');
         * var menu = new wijmo.input.Menu(div, {
         *     itemsSource: 'New,Open,Save,Exit'.split(','),
         *     itemClicked: function (s, e) {
         *         alert('thanks for picking ' + menu.selectedIndex);
         *     }
         * });
         *
         * // use it as a context menu for one or more elements
         * var element = document.getElementById('btn');
         * element.addEventListener('contextmenu', function (e) {
         *     e.preventDefault();
         *     menu.show(e);
         * });</pre>
         *
         * @param position An optional <b>MouseEvent</b> or reference element
         * that determines the position where the menu should be displayed.
         * If not provided, the menu is displayed at the center of the screen.
         */
        show(position?: any): void;
        /**
         * Hides the menu.
         *
         * This method is useful if you want to hide a context menu displayed
         * with the @see:show method.
         */
        hide(): void;
        /**
         * Occurs when the user picks an item from the menu.
         *
         * The handler can determine which item was picked by reading the event sender's
         * @see:selectedIndex property.
         */
        readonly itemClicked: Event;
        /**
         * Raises the @see:itemClicked event.
         */
        onItemClicked(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        _getSubItems(item: any): any[];
        _formatMenuItem(s: ListBox, e: FormatItemEventArgs): void;
        protected _keydown(e: KeyboardEvent): void;
        protected _dropDownClick(e: MouseEvent): void;
        private _showSubMenu();
        private _raiseCommand(e?);
        private _getCommand(item);
        private _getCommandParm(item);
        private _executeCommand(cmd, parm);
        private _canExecuteCommand(cmd, parm);
        private _enableDisableItems();
        private _clearHover();
        private _hoverEnter(e);
        private _hoverLeave(e);
        private _hoverOver(e);
    }
}

declare module wijmo.input {
    /**
     * The @see:MultiSelect control allows users to select multiple items from
     * drop-down lists that contain custom objects or simple strings.
     *
     * The @see:MultiSelect control extends @see:ComboBox, with all the usual
     * properties, including @see:MultiSelect.itemsSource and
     * @see:MultiSelect.displayMemberPath.
     *
     * Like the @see:ListBox control, it has a @see:MultiSelect.checkedMemberPath
     * property that defines the name of the property that determines whether an
     * item is checked or not.
     *
     * The items currently checked (selected) can be obtained using the
     * @see:MultiSelect.checkedItems property.
     *
     * The control header is fully customizable. By default, it shows up to two items
     * selected and the item count after that. You can change the maximum number of
     * items to display (@see:MultiSelect.maxHeaderItems), the message shown when no
     * items are selected (@see:MultiSelect.placeholder), and the format string used to
     * show the item count (@see:MultiSelect.headerFormat).
     *
     * Alternatively, you can provide a function to generate the header content based
     * on whatever criteria your application requires (@see:MultiSelect.headerFormatter).
     *
     * The example below shows how you can use a @see:MultiSelect control to select
     * multiple items from a drop-down list:
     *
     * @fiddle:44w7fob2
     */
    class MultiSelect extends ComboBox {
        private _maxHdrItems;
        private _readOnly;
        private _selectAll;
        private _selectAllCheckbox;
        private _selectAllSpan;
        private _selectAllLabel;
        private _hdrFmt;
        private _hdrFormatter;
        static _DEF_CHECKED_PATH: string;
        /**
         * Initializes a new instance of the @see:MultiSelect class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets whether the control should display a "Select All" checkbox
         * above the items to select or de-select all items.
         *
         * The default value for this property is <b>false</b>.
         */
        showSelectAllCheckbox: boolean;
        /**
         * Gets or sets the string to be used as a label for the "Select All"
         * checkbox that is displayed when the @see:showSelectAllCheckbox
         * property is set to true.
         *
         * This property is set to null by default, which causes the control
         * to show a localized version of the string "Select All".
         */
        selectAllLabel: string;
        /**
         * Gets or sets the name of the property used to control the checkboxes
         * placed next to each item.
         */
        checkedMemberPath: string;
        /**
         * Gets or sets the maximum number of items to display on the control header.
         *
         * If no items are selected, the header displays the text specified by the
         * @see:placeholder property.
         *
         * If the number of selected items is smaller than or equal to the value of the
         * @see:maxHeaderItems property, the selected items are shown in the header.
         *
         * If the number of selected items is greater than @see:maxHeaderItems, the
         * header displays the selected item count instead.
         */
        maxHeaderItems: number;
        /**
         * Gets or sets the format string used to create the header content
         * when the control has more than @see:maxHeaderItems items checked.
         *
         * The format string may contain the '{count}' replacement string
         * which gets replaced with the number of items currently checked.
         * The default value for this property in the English culture is
         * '{count:n0} items selected'.
         */
        headerFormat: string;
        /**
         * Gets or sets a function that gets the text displayed in the control
         * header.
         *
         * By default, the control header content is determined based on the
         * @see:placeholder, @see:maxHeaderItems, and on the current selection.
         *
         * You may customize the header content by specifying a function that
         * returns a custom string based on whatever criteria your application
         * requires.
         */
        headerFormatter: Function;
        /**
         * Gets or sets an array containing the items that are currently checked.
         */
        checkedItems: any[];
        /**
         * Occurs when the value of the @see:checkedItems property changes.
         */
        readonly checkedItemsChanged: Event;
        /**
         * Raises the @see:checkedItemsChanged event.
         */
        onCheckedItemsChanged(e?: EventArgs): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _createDropDown(): void;
        isReadOnly: boolean;
        refresh(fullUpdate?: boolean): void;
        protected _setText(text: string, fullMatch: boolean): void;
        protected _keydown(e: KeyboardEvent): void;
        private _updateHeader();
    }
}

declare module wijmo.input {
    /**
     * The @see:MultiAutoComplete control allows users to pick items from lists
     * that contain custom objects or simple strings.
     *
     * The example below shows how you can use a @see:MultiAutoComplete to
     * enter multiple items picked from a single list:
     *
     * @fiddle:94c6wb77
     */
    class MultiAutoComplete extends AutoComplete {
        private _wjTpl;
        private _wjInput;
        private _helperInput;
        private _selItems;
        private _maxSelItems;
        private _lastInputValue;
        private _selPath;
        private _notAddItm;
        static _clsActive: string;
        /**
         * Initializes a new instance of the @see:MultiAutoComplete class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Overridden to prevent the control from showing the drop-down button.
         */
        showDropDownButton: boolean;
        /**
         * Gets or sets the maximum number of items that can be selected.
         *
         * Setting this property to null (the default value) allows users
         * to pick any number of items.
         */
        maxSelectedItems: number;
        /**
         * Gets or sets the name of the property used to control which
         * item will be selected.
         */
        selectedMemberPath: string;
        /**
         * Gets or sets an array containing the items that are currently
         * selected.
         */
        selectedItems: any[];
        /**
         * Occurs when the value of the @see:selectedItems property changes.
         */
        readonly selectedItemsChanged: Event;
        /**
         * Raises the @see:selectedItemsChanged event.
         */
        onSelectedItemsChanged(e?: EventArgs): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        _keydown(e: KeyboardEvent): void;
        protected _updateState(): void;
        private _keyup(e);
        private _addHelperInput();
        private _refreshHeader();
        private _insertToken(item);
        private _updateMaxItems();
        private _updateFocus();
        private _addItem(clearSelected);
        private _delItem(isDelKey);
        private _updateSelItems(itm, isAdd);
        private _createItem(tokenTxt);
        private _itemOn(isPrev);
        private _itemOff();
        private _initSeltems();
        private _getSelItem(index);
        private _setSelItem(item, selected);
        private _clearSelIndex();
        private _hasSelectedMemeberPath();
        private _disableInput(disabled);
        private _adjustInputWidth();
        private _getItemIndex(token);
    }
}

declare module wijmo.input {
    /**
     * Specifies actions that trigger showing and hiding @see:Popup controls.
     */
    enum PopupTrigger {
        /** No triggers; popups must be shown and hidden using code. */
        None = 0,
        /** Show or hide the popup when the owner element is clicked. */
        Click = 1,
        /** Hide the popup when it loses focus. */
        Blur = 2,
        /** Show or hide the popup when the owner element is clicked, hide when it loses focus. */
        ClickOrBlur = 3,
    }
    /**
     * Class that shows an element as a popup.
     *
     * Popups may be have @see:owner elements, in which case they behave
     * as rich tooltips that may be shown or hidden based on actions
     * specified by the @see:Popup.showTrigger and @see:Popup.hideTrigger
     * properties.
     *
     * Popups with no owner elements behave like dialogs. They are centered
     * on the screen and displayed using the @see:show method.
     *
     * To close a @see:Popup, call the @see:Popup.hide method.
     *
     * Alternatively, any clickable elements within a @see:Popup that have
     * the classes starting with the 'wj-hide' string will hide the @see:Popup
     * when clicked and will set the @see:Popup.dialogResult property to the
     * class name so the caller may take appropriate action.
     *
     * For example, the @see:Popup below will be hidden when the user presses
     * the OK or Cancel buttons, and the @see:Popup.dialogResult property will
     * be set to either 'wj-hide-cancel' or 'wj-hide-ok':
     *
     * <pre>&lt;button id="btnPopup"&gt;Show Popup&lt;/button&gt;
     * &lt;wj-popup owner="#btnPopup" style="padding:12px"&gt;
     *   &lt;p&gt;Press one of the buttons below to hide the Popup.&lt;/p&gt;
     *   &lt;hr/&gt;
     *   &lt;button class="wj-hide-ok" ng-click="handleOK()"&gt;OK&lt;/button&gt;
     *   &lt;button class="wj-hide-cancel"&gt;Cancel&lt;/button&gt;
     * &lt;/wj-popup&gt;</pre>
     *
     * The example below shows how you can use the @see:Popup control to implement
     * popups attached to owner elements and dialogs:
     *
     * @fiddle:j9t6s1xp
     */
    class Popup extends Control {
        static _DRAG_THRESHOLD: number;
        protected _owner: HTMLElement;
        protected _modal: boolean;
        protected _showTrigger: PopupTrigger;
        protected _hideTrigger: PopupTrigger;
        protected _hideAnim: any;
        protected _fadeIn: boolean;
        protected _fadeOut: boolean;
        protected _removeOnHide: boolean;
        protected _draggable: boolean;
        protected _dragged: boolean;
        protected _bkdrop: HTMLDivElement;
        protected _result: any;
        protected _resultEnter: any;
        protected _callback: Function;
        protected _refreshing: boolean;
        protected _visible: boolean;
        protected _wasVisible: boolean;
        protected _composing: boolean;
        protected _ownerClickBnd: any;
        protected _ownerMousedownBnd: any;
        /**
         * Initializes a new instance of the @see:Popup class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the element that owns this @see:Popup.
         *
         * If the @see:owner is null, the @see:Popup behaves like a dialog.
         * It is centered on the screen and must be shown using the
         * @see:show method.
         */
        owner: HTMLElement;
        /**
         * Gets or sets the HTML element contained in this @see:Popup.
         */
        content: HTMLElement;
        /**
         * Gets or sets the actions that show the @see:Popup.
         *
         * By default, the @see:showTrigger property is set to @see:PopupTrigger.Click,
         * which causes the popup to appear when the user clicks the owner element.
         *
         * If you set the @see:showTrigger property to @see:PopupTrigger.None, the popup
         * will be shown only when the @see:show method is called.
         */
        showTrigger: PopupTrigger;
        /**
         * Gets or sets the actions that hide the @see:Popup.
         *
         * By default, the @see:hideTrigger property is set to @see:PopupTrigger.Blur,
         * which hides the popup when it loses focus.
         *
         * If you set the @see:hideTrigger property to @see:PopupTrigger.Click, the popup
         * will be hidden only when the owner element is clicked.
         *
         * If you set the @see:hideTrigger property to @see:PopupTrigger.None, the popup
         * will be hidden only when the @see:hide method is called.
         */
        hideTrigger: PopupTrigger;
        /**
         * Gets or sets a value that determines whether the @see:Popup should
         * use a fade-in animation when it is shown.
         *
         * The default value for this property is <b>true</b>.
         */
        fadeIn: boolean;
        /**
         * Gets or sets a value that determines whether the @see:Popup should
         * use a fade-out animation when it is hidden.
         *
         * The default value for this property is <b>true</b>.
         */
        fadeOut: boolean;
        /**
         * Gets or sets a value that determines whether the @see:Popup element
         * should be removed from the DOM when the @see:Popup is hidden, as
         * opposed to being hidden.
         *
         * The default value for this property is <b>true</b>.
         */
        removeOnHide: boolean;
        /**
         * Gets or sets a value that determines whether the @see:Popup should
         * be displayed as a modal dialog.
         *
         * Modal dialogs show a dark backdrop that makes the @see:Popup stand
         * out from other content on the page.
         *
         * If you want to make a dialog truly modal, also set the @see:Popup.hideTrigger
         * property to @see:PopupTrigger.None, so users won't be able to click the
         * backdrop to dismiss the dialog. In this case, the dialog will close only
         * if the @see:Popup.hide method is called or if the user presses the Escape
         * key.
         *
         * The default value for this property is <b>false</b>.
         */
        modal: boolean;
        /**
         * Gets or sets a value that determines whether the popup can be dragged
         * with the mouse by its header.
         *
         * The header is identified by the '.wj-dialog-header' CSS selector.
         * If the dialog does not contain any elements with the 'wj-dialog-header'
         * class, user will not be able to drag the popup.
         *
         * When making popups draggable, you may want to set the cursor property
         * of the '.wj-dialog-header' CSS selector. For example:
         *
         * <pre>
         * &lt;style&gt;
         *   .wj-popup {
         *     width: 30%;
         *   }
         *   .wj-dialog-header {
         *     cursor: move;
         *   }
         * &lt;/style&gt;
         * </pre>
         *
         * The default value for this property is <b>false</b>.
         */
        isDraggable: boolean;
        /**
         * Gets or sets a value used as a return value for the @see:Popup after
         * it is hidden.
         *
         * This property is set to null when the @see:Popup is displayed. It can be
         * set in response to button click events or in the call to the @see:hide
         * method to provide a result value to callers.
         */
        dialogResult: any;
        /**
         * Gets or sets a value to be used as a @see:dialogResult when the user presses
         * the Enter key while the @see:Popup is visible.
         *
         * If the user presses Enter and the @see:dialogResultEnter property is not null,
         * the popup checks whether all its child elements are in a valid state.
         * If so, the popup is closed and the @see:dialogResult property is set to
         * the value of the @see:dialogResultEnter property.
         */
        dialogResultEnter: any;
        /**
         * Gets a value that determines whether the @see:Popup is currently visible.
         */
        readonly isVisible: boolean;
        /**
         * Shows the @see:Popup.
         *
         * @param modal Whether to show the popup as a modal dialog. If provided, this
         * sets the value of the @see:modal property.
         * @param handleResult Callback invoked when the popup is hidden. If provided,
         * this should be a function that receives the popup as a parameter.
         *
         * The <b>handleResult</b> callback allows callers to handle the result of modal
         * dialogs without attaching handlers to the @see:hidden event. For example,
         * the code below shows a dialog used to edit the current item in a
         * @see:CollectionView. The edits are committed or canceled depending on the
         * @see:Popup.dialogResult value. For example:
         *
         * <pre>$scope.editCurrentItem = function () {
         *   $scope.data.editItem($scope.data.currentItem);
         *   $scope.itemEditor.show(true, function (e) {
         *     if (e.dialogResult == 'wj-hide-ok') {
         *       $scope.data.commitEdit();
         *     } else {
         *       $scope.data.cancelEdit();
         *     }
         *   });
         * }</pre>
         */
        show(modal?: boolean, handleResult?: Function): void;
        /**
         * Hides the @see:Popup.
         *
         * @param dialogResult Optional value assigned to the @see:dialogResult property
         * before closing the @see:Popup.
         */
        hide(dialogResult?: any): void;
        /**
         * Occurs before the @see:Popup is shown.
         */
        readonly showing: Event;
        /**
         * Raises the @see:showing event.
         */
        onShowing(e: CancelEventArgs): boolean;
        /**
         * Occurs after the @see:Popup has been shown.
         */
        readonly shown: Event;
        /**
         * Raises the @see:shown event.
         */
        onShown(e?: EventArgs): void;
        /**
         * Occurs before the @see:Popup is hidden.
         */
        readonly hiding: Event;
        /**
         * Raises the @see:hiding event.
         */
        onHiding(e: CancelEventArgs): boolean;
        /**
         * Occurs after the @see:Popup has been hidden.
         */
        readonly hidden: Event;
        /**
         * Raises the @see:hidden event.
         */
        onHidden(e?: EventArgs): void;
        dispose(): void;
        onLostFocus(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        _makeDraggable(draggable: boolean): void;
        protected _handleResize(): void;
        protected _ownerClick(e: any): void;
        protected _ownerMouseDown(e: any): void;
        private _showBackdrop();
        private _validateAndHide(result);
    }
}

declare module wijmo.input {
    /**
     * The @see:InputDate control allows users to type in dates using any format
     * supported by the @see:Globalize class, or to pick dates from a drop-down
     * that contains a @see:Calendar control.
     *
     * Use the @see:min and @see:max properties to restrict the range of
     * values that the user can enter.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * Use the @see:value property to gets or set the currently selected date.
     *
     * The example below shows a <b>Date</b> value (that includes date and time information)
     * using an @see:InputDate and an an @see:InputTime control. Notice how both controls
     * are bound to the same controller variable, and each edits the appropriate information
     * (either date or time). The example also shows a @see:Calendar control that you can
     * use to select the date with a single click.
     *
     * @fiddle:vgc3Y
     */
    class InputDate extends DropDown {
        private _calendar;
        private _value;
        private _format;
        private _calChanged;
        private _calChanging;
        private _msk;
        /**
         * Initializes a new instance of the @see:InputDate class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the current date.
         *
         * The default value for this property is the current date.
         */
        value: Date;
        /**
         * Gets or sets the text shown on the control.
         */
        text: string;
        /**
         * Gets or sets a value that indicates whether users can select
         * days, months, or no values at all.
         *
         * This property affects the behavior of the drop-down calendar,
         * but not the format used to display dates.
         * If you set @see:selectionMode to 'Month', you should normally
         * set the @see:format property to 'MMM yyyy' or some format that
         * does not include the day. For example:
         *
         * <pre>var inputDate = new wijmo.input.InputDate('#el, {
         *   selectionMode: 'Month',
         *   format: 'MMM yyyy'
         * });</pre>
         *
         * The default value for this property is <b>DateSelectionMode.Day</b>.
         */
        selectionMode: DateSelectionMode;
        /**
         * Gets or sets the earliest date that the user can enter.
         *
         * The default value for this property is <b>null</b>, which means no earliest
         * date is defined.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: Date;
        /**
         * Gets or sets the latest date that the user can enter.
         *
         * The default value for this property is <b>null</b>, which means no latest
         * date is defined.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: Date;
        /**
         * Gets or sets a value that determines whether the calendar buttons
         * should act as repeat buttons, firing repeatedly as the button
         * remains pressed.
         *
         * The default value for this property is <b>true</b>.
         */
        repeatButtons: boolean;
        /**
         * Gets or sets a value that determines whether the drop-down
         * calendar should display a list of years when the user clicks
         * the header element on the year calendar.
         *
         * The default value for this property is <b>true</b>.
         */
        showYearPicker: boolean;
        /**
         * Gets or sets the format used to display the selected date.
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
         * Date format string</a>.
         *
         * The default value for this property is <b>d</b>, the culture-dependent
         * short date pattern (e.g. 6/15/2020 in the US, 15/6/2020 in France, or
         * 2020/6/15 in Japan).
         */
        format: string;
        /**
         * Gets or sets a mask to use while editing.
         *
         * The mask format is the same one that the @see:wijmo.input.InputMask
         * control uses.
         *
         * If specified, the mask must be compatible with the value of
         * the @see:format property. For example, the mask '99/99/9999' can
         * be used for entering dates formatted as 'MM/dd/yyyy'.
         */
        mask: string;
        /**
         * Gets a reference to the @see:Calendar control shown in the drop-down box.
         */
        readonly calendar: Calendar;
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted by the control.
         *
         * By default, this property is set to <b>"tel"</b>, a value that causes mobile  devices
         * to show a numeric keypad that includes a negative sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not work well
         * for the current culture, device, or application. In those cases, try changing
         * the value to "number" or "text."
         *
         * Note that input elements with type "number" prevent selection in Chrome and therefore
         * is not recommended. For more details, see this link:
         * http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome
         */
        inputType: string;
        /**
         * Gets or sets a validator function to determine whether dates are valid for selection.
         *
         * If specified, the validator function should take one parameter representing the
         * date to be tested, and should return false if the date is invalid and should not
         * be selectable.
         *
         * For example, the code below prevents users from selecting dates that fall on
         * weekends:
         * <pre>
         * inputDate.itemValidator = function(date) {
         *   var weekday = date.getDay();
         *   return weekday != 0 && weekday != 6;
         * }
         * </pre>
         */
        itemValidator: Function;
        /**
         * Gets or sets a formatter function to customize dates in the drop-down calendar.
         *
         * The formatter function can add any content to any date. It allows
         * complete customization of the appearance and behavior of the calendar.
         *
         * If specified, the function takes two parameters:
         * <ul>
         *     <li>the date being formatted </li>
         *     <li>the HTML element that represents the date</li>
         * </ul>
         *
         * For example, the code below shows weekends with a yellow background:
         * <pre>
         * inputDate.itemFormatter = function(date, element) {
         *   var day = date.getDay();
         *   element.style.backgroundColor = day == 0 || day == 6 ? 'yellow' : '';
         * }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _createDropDown(): void;
        protected _updateDropDown(): void;
        protected _keydown(e: KeyboardEvent): void;
        private _canChangeValue();
        protected _clamp(value: Date): Date;
        protected _commitText(): void;
        private _isValidDate(value);
    }
}

declare module wijmo.input {
    /**
     * The @see:InputTime control allows users to enter times using any format
     * supported by the @see:Globalize class, or to pick times from a drop-down
     * list.
     *
     * The @see:min, @see:max, and @see:step properties determine the values shown
     * in the list.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * The @see:value property gets or sets a @see:Date object that represents the time
     * selected by the user.
     *
     * The example below shows a <b>Date</b> value (that includes date and time information)
     * using an @see:InputDate and an @see:InputTime control. Notice how both controls
     * are bound to the same controller variable, and each edits the appropriate information
     * (either date or time). The example also shows a @see:Calendar control that can be
     * used to select the date with a single click.
     *
     * @fiddle:vgc3Y
     */
    class InputTime extends ComboBox {
        _value: Date;
        _min: Date;
        _max: Date;
        _step: number;
        _format: string;
        _msk: _MaskProvider;
        _hasCustomItems: boolean;
        /**
         * Initializes a new instance of the @see:InputTime class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted by the control.
         *
         * By default, this property is set to "tel", a value that causes mobile devices to
         * show a numeric keypad that includes a negative sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not work well
         * for the current culture, device, or application. In those cases, try changing
         * the value to "number" or "text."
         *
         * Note that input elements with type "number" prevent selection in Chrome and therefore
         * is not recommended. For more details, see this link:
         * http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome
         */
        inputType: string;
        /**
         * Gets or sets the current input time.
         */
        value: Date;
        /**
         * Gets or sets the text shown in the control.
         */
        text: string;
        /**
         * Gets or sets the earliest time that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: Date;
        /**
         * Gets or sets the latest time that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: Date;
        /**
         * Gets or sets the number of minutes between entries in the drop-down list.
         *
         * The default value for this property is 15 minutes.
         * Setting it to null, zero, or any negative value disables the drop-down.
         */
        step: number;
        /**
         * Gets or sets the format used to display the selected time (see @see:Globalize).
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
         * time format string</a>.
         */
        format: string;
        /**
         * Gets or sets a mask to use while the user is editing.
         *
         * The mask format is the same used by the @see:wijmo.input.InputMask
         * control.
         *
         * If specified, the mask must be compatible with the value of
         * the @see:format property. For example, you can use the mask '99:99 >LL'
         * for entering short times (format 't').
         */
        mask: string;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        onItemsSourceChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        onSelectedIndexChanged(e?: EventArgs): void;
        _clamp(value: Date): Date;
        protected _wheel(e: WheelEvent): void;
        protected _updateInputSelection(start: number): void;
        protected _updateItems(): void;
        private _getTime(value);
        protected _keydown(e: KeyboardEvent): void;
        protected _commitText(): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputDateTime control extends the @see:InputDate control to allows users
     * to input dates and times, either by typing complete date/time values in any format
     * supported by the @see:Globalize class, or by picking dates from a drop-down calendar
     * and times from a drop-down list.
     *
     * Use the @see:InputDateTime.min and @see:InputDateTime.max properties to restrict
     * the range of dates that the user can enter.
     *
     * Use the @see:InputDateTime.timeMin and @see:InputDateTime.timeMax properties to
     * restrict the range of times that the user can enter.
     *
     * Use the @see:InputDateTime.value property to gets or set the currently selected
     * date/time.
     *
     * The example below shows how you can use an @see:InputDateTime control to edit
     * dates and times using a single control:
     *
     * @fiddle:465gmuL2
     */
    class InputDateTime extends InputDate {
        private _btnTm;
        private _inputTime;
        private _hadFocus;
        /**
         * Gets or sets the template used to instantiate @see:InputDateTime controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:InputDateTime class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the earliest time that the user can enter.
         */
        timeMin: Date;
        /**
         * Gets or sets the latest time that the user can enter.
         */
        timeMax: Date;
        /**
         * Gets or sets the format used to display times in the drop-down list.
         *
         * This property does not affect the value shown in the control's input element.
         * That value is formatted using the @see:format property.
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
         * time format string</a>.
         */
        timeFormat: string;
        /**
         * Gets or sets the number of minutes between entries in the drop-down list of times.
         */
        timeStep: number;
        /**
         * Gets a reference to the inner @see:InputTime control so you can access its
         * full object model.
         */
        readonly inputTime: InputTime;
        dispose(): void;
        refresh(fullUpdate?: boolean): void;
        protected _updateBtn(): void;
        protected _clamp(value: Date): Date;
        protected _commitText(): void;
        protected _setDropdown(e: HTMLElement): boolean;
        protected _updateDropDown(): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputNumber control allows users to enter numbers.
     *
     * The control prevents users from accidentally entering invalid data and
     * formats the number as it is edited.
     *
     * Pressing the minus key reverses the sign of the value being edited,
     * regardless of cursor position.
     *
     * You may use the @see:min and @see:max properties to limit the range of
     * acceptable values, and the @see:step property to provide spinner buttons
     * that increase or decrease the value with a click.
     *
     * For details about using the @see:min and @see:max properties, please see
     * the <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * Use the @see:value property to get or set the currently selected number.
     *
     * The example below creates several @see:InputNumber controls and shows
     * the effect of using different formats, ranges, and step values.
     *
     * @fiddle:Cf9L9
     */
    class InputNumber extends Control {
        _tbx: HTMLInputElement;
        _btnUp: HTMLElement;
        _btnDn: HTMLElement;
        _value: number;
        _min: number;
        _max: number;
        _format: string;
        _step: number;
        _showBtn: boolean;
        _readOnly: boolean;
        _oldText: string;
        _composing: boolean;
        _chrDec: string;
        _chrCur: string;
        _chrNeg: string;
        _chrPls: string;
        _chrPct: string;
        _chrTho: string;
        _fmtSpc: string;
        _fmtPrc: number;
        _rxSym: RegExp;
        _rxNeg: RegExp;
        _delKey: boolean;
        _rptUp: _ClickRepeater;
        _rptDn: _ClickRepeater;
        /**
         * Gets or sets the template used to instantiate @see:InputNumber controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:InputNumber class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted by the control.
         *
         * By default, this property is set to "tel", a value that causes mobile devices to
         * show a numeric keypad that includes a negative sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not work well
         * for the current culture, device, or application. In those cases, try changing
         * the value to "number" or "text."
         *
         * Note that input elements with type "number" prevent selection in Chrome and
         * therefore that type is not recommended. For more details, see this link:
         * http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome
         */
        inputType: string;
        /**
         * Gets or sets the current value of the control.
         */
        value: number;
        /**
         * Gets or sets a value indicating whether the control value must be
         * a number or whether it can be set to null (by deleting the content
         * of the control).
         *
         * The default value for this property is <b>true</b>.
         */
        isRequired: boolean;
        /**
         * Gets or sets a value that indicates whether the user can modify
         * the control value using the mouse and keyboard.
         *
         * The default value for this property is <b>false</b>.
         */
        isReadOnly: boolean;
        /**
         * Gets or sets the smallest number that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: number;
        /**
         * Gets or sets the largest number that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: number;
        /**
         * Gets or sets the amount to add or subtract to the @see:value property
         * when the user clicks the spinner buttons.
         */
        step: number;
        /**
         * Gets or sets the format used to display the number being edited (see @see:Globalize).
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx" target="_blank">
         * standard numeric format string</a>.
         */
        format: string;
        /**
         * Gets or sets the text shown in the control.
         */
        text: string;
        /**
         * Gets or sets the string shown as a hint when the control is empty.
         */
        placeholder: string;
        /**
         * Gets or sets a value indicating whether the control displays spinner buttons
         * to increment or decrement the value (the step property must be set to a
         * value other than zero).
         *
         * The default value for this property is <b>true</b>.
         */
        showSpinner: boolean;
        /**
         * Gets or sets a value that determines whether the spinner buttons
         * should act as repeat buttons, firing repeatedly as the button
         * remains pressed.
         *
         * The default value for this property is <b>true</b>.
         */
        repeatButtons: boolean;
        /**
         * Sets the focus to the control and selects all its content.
         */
        selectAll(): void;
        /**
         * Returns a value within the range defined by the @see:min and @see:max
         * properties.
         *
         * @param value Value to clamp.
         */
        clamp(value: number): number;
        /**
         * Occurs when the value of the @see:text property changes.
         */
        readonly textChanged: Event;
        /**
         * Raises the @see:textChanged event.
         */
        onTextChanged(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        dispose(): void;
        onGotFocus(e: EventArgs): void;
        onLostFocus(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        private _updateSymbols();
        private _isNumeric(chr, digitsOnly);
        private _getInputRange(digitsOnly);
        private _flipSign();
        private _getSelStartDigits();
        private _setSelStartDigits(start);
        private _increment(step);
        protected _updateBtn(): void;
        protected _setText(text: string): void;
        protected _keypress(e: KeyboardEvent): void;
        protected _keydown(e: KeyboardEvent): void;
        protected _input(): void;
        protected _clickSpinner(e: MouseEvent): void;
        protected _updateAria(): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputMask control provides a way to govern what a user is allowed
     * to enter.
     *
     * The control prevents users from accidentally entering invalid data and
     * saves time by skipping over literals (such as slashes in dates) as the
     * user types.
     *
     * The mask used to validate the input is defined by the @see:InputMask.mask
     * property, which may contain one or more of the following special
     * characters:
     *
     *  <dl class="dl-horizontal">
     *      <dt>0</dt>      <dd>Digit.</dd>
     *      <dt>9</dt>      <dd>Digit or space.</dd>
     *      <dt>#</dt>      <dd>Digit, sign, or space.</dd>
     *      <dt>L</dt>      <dd>Letter.</dd>
     *      <dt>l</dt>      <dd>Letter or space.</dd>
     *      <dt>A</dt>      <dd>Alphanumeric.</dd>
     *      <dt>a</dt>      <dd>Alphanumeric or space.</dd>
     *      <dt>.</dt>      <dd>Localized decimal point.</dd>
     *      <dt>,</dt>      <dd>Localized thousand separator.</dd>
     *      <dt>:</dt>      <dd>Localized time separator.</dd>
     *      <dt>/</dt>      <dd>Localized date separator.</dd>
     *      <dt>$</dt>      <dd>Localized currency symbol.</dd>
     *      <dt>&lt;</dt>   <dd>Converts characters that follow to lowercase.</dd>
     *      <dt>&gt;</dt>   <dd>Converts characters that follow to uppercase.</dd>
     *      <dt>|</dt>      <dd>Disables case conversion.</dd>
     *      <dt>\</dt>      <dd>Escapes any character, turning it into a literal.</dd>
     *      <dt>９</dt>     <dd>DBCS Digit.</dd>
     *      <dt>Ｊ</dt>     <dd>DBCS Hiragana.</dd>
     *      <dt>Ｇ</dt>     <dd>DBCS big Hiragana.</dd>
     *      <dt>Ｋ</dt>     <dd>DBCS Katakana. </dd>
     *      <dt>Ｎ</dt>     <dd>DBCS big Katakana.</dd>
     *      <dt>K</dt>      <dd>SBCS Katakana.</dd>
     *      <dt>N</dt>      <dd>SBCS big Katakana.</dd>
     *      <dt>Ｚ</dt>     <dd>Any DBCS character.</dd>
     *      <dt>H</dt>      <dd>Any SBCS character.</dd>
     *      <dt>All others</dt><dd>Literals.</dd>
     *  </dl>
     *
     * The example below shows how you can use the @see:InputMask control to
     * edit strings with custom formats:
     *
     * @fiddle:j6er01bx
     */
    class InputMask extends Control {
        _tbx: HTMLInputElement;
        _oldValue: string;
        _msk: _MaskProvider;
        /**
         * Gets or sets the template used to instantiate @see:InputMask controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:InputMask class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted
         * by the control.
         *
         * The default value for this property is <b>text</b>.
         */
        inputType: string;
        /**
         * Gets or sets the text currently shown in the control.
         */
        value: string;
        /**
         * Gets or sets the raw value of the control (excluding mask literals).
         *
         * The raw value of the control excludes prompt and literal characters.
         * For example, if the @see:mask property is set to "AA-9999" and the
         * user enters the value "AB-1234", the @see:rawValue property will
         * return "AB1234", excluding the hyphen that is part of the mask.
         */
        rawValue: string;
        /**
         * Gets or sets the mask used to validate the input as the user types.
         *
         * The mask is defined as a string with one or more of the masking
         * characters listed in the @see:InputMask topic.
         */
        mask: string;
        /**
         * Gets or sets the symbol used to show input positions in the control.
         */
        promptChar: string;
        /**
         * Gets or sets the string shown as a hint when the control is empty.
         */
        placeholder: string;
        /**
         * Gets a value that indicates whether the mask has been completely filled.
         */
        readonly maskFull: boolean;
        /**
         * Gets or sets a value indicating whether the control value
         * must be a non-empty string.
         *
         * The default value for this property is <b>true</b>.
         */
        isRequired: boolean;
        /**
         * Gets or sets a value that indicates whether the user can modify
         * the control value using the mouse and keyboard.
         *
         * The default value for this property is <b>false</b>.
         */
        isReadOnly: boolean;
        /**
         * Sets the focus to the control and selects all its content.
         */
        selectAll(): void;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        _updateState(): void;
        dispose(): void;
        refresh(fullUpdate?: boolean): void;
        onGotFocus(e: any): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputColor control allows users to select colors by typing in
     * HTML-supported color strings, or to pick colors from a drop-down
     * that shows a @see:ColorPicker control.
     *
     * Use the @see:value property to get or set the currently selected color.
     *
     * @fiddle:z84ebpec
     */
    class InputColor extends DropDown {
        private _ePreview;
        private _colorPicker;
        private _value;
        /**
         * Initializes a new instance of the @see:InputColor class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the current color.
         */
        value: string;
        /**
         * Gets or sets the text shown on the control.
         */
        text: string;
        /**
         * Gets or sets a value indicating whether the @see:ColorPicker allows users
         * to edit the color's alpha channel (transparency).
         *
         * The default value for this property is <b>true</b>.
         */
        showAlphaChannel: boolean;
        /**
         * Gets or sets an array that contains the colors in the palette.
         *
         * The palette contains ten colors, represented by an array with
         * ten strings. The first two colors are usually white and black.
         */
        palette: string[];
        /**
         * Gets a reference to the @see:ColorPicker control shown in the drop-down.
         */
        readonly colorPicker: ColorPicker;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _createDropDown(): void;
        protected _keydown(e: KeyboardEvent): void;
        protected _commitText(): void;
    }
}

