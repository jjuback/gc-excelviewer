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

declare module wijmo.knockout {
    class MetaFactory extends wijmo.meta.ControlMetaFactory {
        static CreateProp(propertyName: string, propertyType: wijmo.meta.PropertyType, changeEvent?: string, enumType?: any, isNativeControlProperty?: boolean, priority?: number): PropDesc;
        static CreateEvent(eventName: string, isPropChanged?: boolean): EventDesc;
        static CreateComplexProp(propertyName: string, isArray: boolean, ownsObject?: boolean): ComplexPropDesc;
        static findProp(propName: string, props: PropDesc[]): PropDesc;
        static findEvent(eventName: string, events: EventDesc[]): EventDesc;
        static findComplexProp(propName: string, props: ComplexPropDesc[]): ComplexPropDesc;
    }
    interface IUpdateControlHandler {
        (link: any, propDesc: PropDesc, control: any, unconvertedValue: any, convertedValue: any): boolean;
    }
    class PropDesc extends wijmo.meta.PropDescBase {
        updateControl: IUpdateControlHandler;
    }
    class EventDesc extends wijmo.meta.EventDescBase {
    }
    class ComplexPropDesc extends wijmo.meta.ComplexPropDescBase {
    }
}

/**
 * Contains KnockoutJS bindings for the Wijmo controls.
 *
 * The bindings allow you to add Wijmo controls to
 * <a href="http://knockoutjs.com/" target="_blank">KnockoutJS</a>
 * applications using simple markup in HTML pages.
 *
 * To add a Wijmo control to a certain place in a page's markup, add the <b>&lt;div&gt;</b>
 * element and define a binding for the control in the <b>data-bind</b> attribute.
 * The binding name corresponds to the control name with a wj prefix. For example, the @see:wjInputNumber
 * binding represents the Wijmo @see:InputNumber control. The binding value is an object literal containing
 * properties corresponding to the control's read-write property and event names, with their values defining
 * the corresponding control property values and event handlers.
 *
 * The following markup creates a Wijmo <b>InputNumber</b> control with the <b>value</b> property bound to the
 * view model's <b>theValue</b> property, the <b>step</b> property set to 1 and the <b>inputType</b> property set to 'text':
 *
 * <pre>&lt;div data-bind="wjInputNumber: { value: theValue, step: 1, inputType: 'text' }"&gt;&lt;/div&gt;</pre>
 *
 * <h3>Custom elements</h3>
 * As an alternative to the standard Knockout binding syntax, the Wijmo for Knockout provides a possibility to declare controls
 * in the page markup as custom elements, where the tag name corresponds to the control binding name and the attribute names
 * correspond to the control property names. The element and parameter names must be formatted as lower-case with dashes instead
 * of camel-case. The control in the example above can be defined as follows using the custom element syntax:
 *
 * <pre>&lt;wj-input-number value="theValue" step="1" input-type="'text'"&gt;&lt;/wj-input-number&gt;</pre>
 *
 * Note that attribute values should be defined using exactly the same JavaScript expressions syntax as you use in
 * data-bind definitions. The Wijmo for Knockout preprocessor converts such elements to the conventional data-bind form,
 * see the <b>Custom elements preprocessor</b> topic for more details.
 *
 * <h3>Binding to control properties</h3>
 * Wijmo binding for KnockoutJS supports binding to any read-write properties on the control. You can assign any
 * valid KnockoutJS expressions (e.g. constants, view model observable properties, or complex expressions) to the
 * property.
 *
 * Most of the properties provide one-way binding, which means that changes in the bound observable view model
 * property cause changes in the control property that the observable is bound to, but not vice versa.
 * But some properties support two-way binding, which means that changes made in the control property are
 * propagated back to an observable bound to the control property as well. Two-way bindings are used for properties
 * that can be changed by the control itself, by user interaction with the control,
 * or by other occurences. For example, the InputNumber control provides two-way binding for the
 * <b>value</b> and <b>text</b> properties, which are changed by the control while a user is typing a new value.
 * The rest of the InputNumber properties operate in the one-way binding mode.
 *
 * <h3>Binding to control events</h3>
 * To attach a handler to a control event, specify the event name as a property of the object literal defining
 * the control binding, and the function to call on this event as a value of this property.
 * Wijmo bindings follow the same rules for defining an event handler as used for the intrinsic KnockoutJS bindings
 * like <b>click</b> and <b>event</b>. The event handler receives the following set of parameters, in the specified order:
 * <ul>
 * 	<li><b>data:</b> The current model value, the same as for native KnockoutJS bindings like <b>click</b> and <b>event</b>. </li>
 * 	<li><b>sender:</b> The sender of the event. </li>
 * 	<li><b>args:</b> The event arguments. </li>
 * </ul>
 *
 * The following example creates an <b>InputNumber</b> control and adds an event handler for the <b>valueChanged</b>
 * event showing a dialog with a new control value.
 *
 * <pre>&lt;!-- HTML --&gt;
 * &lt;div data-bind="wjInputNumber: { value: theValue, step: 1, valueChanged: valueChangedEH }"&gt;&lt;/div&gt;
 * &nbsp;
 * //View Model
 * this.valueChangedEH = function (data, sender, args) {
 *     alert('The new value is: ' + sender.value);
 * }</pre>
 *
 * The same control defined using the custom element syntax:
 *
 * <pre>&lt;wj-input-number value="theValue" step="1" value-changed="valueChangedEH"&gt;&lt;/wj-input-number&gt;</pre>
 *
 * <h3>Binding to undefined observables</h3>
 * View model observable properties assigned to an <i>undefined</i> value get special treatment by Wijmo
 * bindings during the initialization phase. For example, if you create an observable as ko.observable(undefined)
 * or ko.observable() and bind it to a control property, Wijmo does not assign a value to the control. Instead,
 * for properties supporting two-way bindings, this is the way to initialize the observable with the control's
 * default value, because after initialization the control binding updates bound observables with the control
 * values of such properties. Note that an observable with a <i>null</i> value, e.g. ko.observable(null), gets
 * the usual treatment and assigns null to the control property that it is bound to. After the primary
 * initialization has finished, observables with undefined values go back to getting the usual treatment from
 * Wijmo, and assign the control property with undefined.
 *
 * In the example below, the <b>value</b> property of the <b>InputNumber</b> control has its default value of 0
 * after initialization, and this same value is assigned to the view model <b>theValue</b> property:
 * <pre>&lt;!-- HTML --&gt;
 * &lt;div data-bind="wjInputNumber: { value: theValue }"&gt;&lt;/div&gt;
 * &nbsp;
 * //View Model
 * this.theValue = ko.observable();</pre>
 *
 * <h3>Defining complex and array properties</h3>
 * Some Wijmo controls have properties that contain an array or a complex object. For example, the
 * @see:FlexChart control exposes <b>axisX</b> and <b>axisY</b> properties that represent an @see:Axis object;
 * and the <b>series</b> property is an array of @see:Series objects. Wijmo provides special
 * bindings for such types that we add to child elements of the control element. If the control exposes
 * multiple properties of the same complex type, then the <b>wjProperty</b> property of the complex
 * type binding specifies which control property it defines.
 *
 * The following example shows the markup used to create a <b>FlexChart</b> with <b>axisX</b> and <b>axisY</b>
 * properties and two series objects defined:
 *
 * <pre>&lt;div data-bind="wjFlexChart: { itemsSource: data, bindingX: 'country' }"&gt;
 *     &lt;div data-bind="wjFlexChartAxis: { wjProperty: 'axisX', title: chartProps.titleX }"&gt;&lt;/div&gt;
 *     &lt;div data-bind="wjFlexChartAxis: { wjProperty: 'axisY', title: chartProps.titleY }"&gt;&lt;/div&gt;
 *     &lt;div data-bind="wjFlexChartSeries: { name: 'Sales', binding: 'sales' }"&gt;&lt;/div&gt;
 *     &lt;div data-bind="wjFlexChartSeries: { name: 'Downloads', binding: 'downloads' }"&gt;&lt;/div&gt;
 * &lt;/div&gt;</pre>
 *
 * The same control defined using the custom element syntax:
 *
 * <pre>&lt;wj-flex-chart items-source="data" binding-x="'country'"&gt;
 *     &lt;wj-flex-chart-axis wj-property="'axisX'" title="chartProps.titleX"&gt;&lt;/wj-flex-chart-axis&gt;
 *     &lt;wj-flex-chart-axis wj-property="'axisY'" title="chartProps.titleY"&gt;&lt;/wj-flex-chart-axis&gt;
 *     &lt;wj-flex-chart-series name="'Sales'" binding"'sales'"&gt;&lt;/wj-flex-chart-series&gt;
 *     &lt;wj-flex-chart-series name="'Downloads'" binding"'downloads'"&gt;&lt;/wj-flex-chart-series&gt;
 * &lt;/wj-flex-chart&gt;</pre>
 *
 * <h3>The <b>control</b> property </h3>
 * Each Wijmo control binding exposes a <b>control</b> property that references the Wijmo control instance created
 * by the binding. This allows you to reference the control in view model code or in other bindings.
 *
 * For example, the following markup creates a @see:FlexGrid control whose reference is stored in the <b>flex</b>
 * observable property of a view model and is used in the button click event handler to move to the next grid record:
 *
 * <pre>&lt;!-- HTML --&gt;
 * &lt;div data-bind="'wjFlexGrid': { itemsSource: data, control: flex }"&gt;&lt;/div&gt;
 * &lt;button data-bind="click: moveToNext"&gt;Next&lt;/button&gt;
 * &nbsp;
 * //View Model
 * this.flex = ko.observable();
 * this.moveToNext = function () {
 *     this.flex().collectionView.moveCurrentToNext();
 * }</pre>
 *
 * <h3>The <b>initialized</b> event</h3>
 * Each Wijmo control binding exposes an <b>initialized</b> event and a Boolean <b>isInitialized</b>
 * property. The event occurs right after the binding creates the control and fully initializes it
 * with the values specified in the binding attributes. For bindings containing child bindings, for
 * example, a <b>wjFlexGrid</b> with child <b>wjFlexGridColumn</b> bindings, this also means that
 * child bindings have fully initialized and have been applied to the control represented by the
 * parent binding. The isInitialized property is set to true right before triggering the initialized
 * event. You can bind a view model observable property to the binding’s <b>isInitialized</b> property
 * to access its value.
 *
 * The following example adjusts FlexGridColumn formatting after the control fully initializes with its
 * bindings, which guarantees that these formats are not overwritten with formats defined in the bindings:
 *
 * <pre>&lt;!-- HTML --&gt;
 * &lt;div data-bind="'wjFlexGrid': { itemsSource: dataArray, initialized: flexInitialized }"&gt;
 *      &lt;div data-bind="wjFlexGridColumn: { binding: 'sales', format: 'n2' }"&gt;&lt;/div&gt;
 *      &lt;div data-bind="wjFlexGridColumn: { binding: 'downloads', format: 'n2' }"&gt;&lt;/div&gt;
 * &lt;/div&gt;
 * &nbsp;
 * //View Model
 * this.flexInitialized = function (data, sender, args) {
 *     var columns = sender.columns;
 *     for (var i = 0; i &lt; columns.length; i++) {
 *         if (columns[i].dataType = wijmo.DataType.Number) {
 *             columns[i].format = 'n0’;
 *         }
 *     }
 * }</pre>
 *
 * <h3 id="custom_elem_preproc">Custom elements preprocessor</h3>
 * The Wijmo Knockout preprocessor uses the standard Knockout <a target="_blank"
 * href="http://knockoutjs.com/documentation/binding-preprocessing.html">ko.bindingProvider.instance.preprocessNode</a>
 * API. This may cause problems in cases where other custom preprocessors are used on the same page, because Knockout
 * offers a single instance property for attaching a preprocessor function, and the next registering preprocessor
 * removes the registration of the previous one.
 *
 * To honor another attached preprocessor, the Wijmo Knockout preprocessor stores the currently registered preprocessor
 * during initialization and delegates the work to it in cases where another processing node is not recognized
 * as a Wijmo control element, thus organizing a preprocessor stack. But if you register another preprocessor
 * after the Wijmo for Knockout preprocessor (that is, after the &lt;script&gt; reference to the <b>wijmo.knockout.js</b>
 * module is executed) then you need to ensure that the other preprocessor behaves in a similar way;
 * otherwise, the Wijmo Knockout preprocessor is disabled.
 *
 * If you prefer to disable the Wijmo Knockout preprocessor, set the <b>wijmo.disableKnockoutTags</b> property
 * to false before the <b>wijmo.knockout.js</b> module reference and after the references to the core Wijmo
 * modules, for example:
 *
 * <pre>&lt;script src="scripts/wijmo.js"&gt;&lt;/script&gt;
 * &lt;script src="scripts/wijmo.input.js"&gt;&lt;/script&gt;
 * &lt;script&gt;
 *     wijmo.disableKnockoutTags = true;
 * &lt;/script&gt;
 * &lt;script src="scripts/wijmo.knockout.js"&gt;&lt;/script&gt;</pre>
 *
 * Note that in this case you can use only the conventional data-bind syntax for adding Wijmo controls to the page
 * markup; the Wijmo custom elements are not recognized.
 */
declare module wijmo.knockout {
    class WjBinding implements KnockoutBindingHandler {
        static _wjContextProp: string;
        static _parPropAttr: string;
        static _controlPropAttr: string;
        static _initPropAttr: string;
        static _initEventAttr: string;
        _metaData: wijmo.meta.MetaDataBase;
        init: any;
        update: any;
        ensureMetaData(): void;
        _initialize(): void;
        _getControlConstructor(): any;
        _getMetaDataId(): any;
        _createControl(element: any): any;
        _createWijmoContext(): WjContext;
        _isChild(): boolean;
        _isParentInitializer(): boolean;
        _isParentReferencer(): boolean;
        private _initImpl(element, valueAccessor, allBindings, viewModel, bindingContext);
        private _updateImpl;
    }
    class WjContext {
        element: any;
        valueAccessor: any;
        allBindings: any;
        viewModel: any;
        bindingContext: any;
        control: any;
        wjBinding: WjBinding;
        parentWjContext: WjContext;
        private _parentPropDesc;
        private _isInitialized;
        private static _debugId;
        constructor(wjBinding: WjBinding);
        init(element: any, valueAccessor: () => any, allBindings: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext): any;
        update(element: any, valueAccessor: () => any, allBindings: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext): void;
        _createControl(): any;
        _initControl(): void;
        _childrenInitialized(): void;
        private _addEventHandler(eventDesc);
        private static _isUpdatingSource;
        private static _pendingSourceUpdates;
        _updateSource(): void;
        private _isUpdatingControl;
        private _isSourceDirty;
        private _oldSourceValues;
        private _updateControl(valueAccessor?);
        private _castValueToType(value, prop);
        _safeUpdateSrcAttr(attrName: string, value: any): void;
        _safeNotifySrcAttr(attrName: string): void;
        private _isChild();
        private _isParentInitializer();
        private _isParentReferencer();
        private _getParentProp();
        private _getParentReferenceProperty();
        private _useParentObj();
        private _isParentArray();
        private _parentInCtor();
    }
}

declare module wijmo.knockout {
    /**
     * KnockoutJS binding for the @see:Tooltip class.
     *
     * Use the @see:wjTooltip binding to add tooltips to elements on the page.
     * The @see:wjTooltip supports HTML content, smart positioning, and touch.
     *
     * The @see:wjTooltip binding is specified on an
     * element that the tooltip applies to. The value is the tooltip
     * text or the id of an element that contains the text. For example:
     *
     * <pre>&lt;p data-bind="wjTooltip: '#fineprint'" &gt;
     *     Regular paragraph content...&lt;/p&gt;
     * ...
     * &lt;div id="fineprint" style="display:none" &gt;
     *   &lt;h3&gt;Important Note&lt;/h3&gt;
     *   &lt;p&gt;
     *     Data for the current quarter is estimated by pro-rating etc...&lt;/p&gt;
     * &lt;/div&gt;</pre>
     */
    class wjTooltip extends WjBinding {
        _getControlConstructor(): any;
        _createControl(element: any): any;
        _createWijmoContext(): WjContext;
    }
    class WjTooltipContext extends WjContext {
        update(element: any, valueAccessor: () => any, allBindings: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext): void;
        private _updateTooltip();
    }
}

declare module wijmo.knockout {
    class WjDropDownBinding extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:ComboBox control.
     *
     * Use the @see:wjComboBox binding to add @see:ComboBox controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a ComboBox control:&lt;/p&gt;
     * &lt;div data-bind="wjComboBox: {
     *   itemsSource: countries,
     *   text: theCountry,
     *   isEditable: false,
     *   placeholder: 'country' }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjComboBox</b> binding supports all read-write properties and events of
     * the @see:ComboBox control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>isDroppedDown</b></li>
     * 	<li><b>text</b></li>
     * 	<li><b>selectedIndex</b></li>
     * 	<li><b>selectedItem</b></li>
     * 	<li><b>selectedValue</b></li>
     * </ul>
     */
    class wjComboBox extends WjDropDownBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:AutoComplete control.
     *
     * Use the @see:wjAutoComplete binding to add @see:AutoComplete controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is an AutoComplete control:&lt;/p&gt;
     * &lt;div data-bind="wjAutoComplete: {
     *   itemsSource: countries,
     *   text: theCountry,
     *   isEditable: false,
     *   placeholder: 'country' }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjAutoComplete</b> binding supports all read-write properties and events of
     * the @see:AutoComplete control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>isDroppedDown</b></li>
     * 	<li><b>text</b></li>
     * 	<li><b>selectedIndex</b></li>
     * 	<li><b>selectedItem</b></li>
     * 	<li><b>selectedValue</b></li>
     * </ul>
     */
    class wjAutoComplete extends wjComboBox {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:Calendar control.
     *
     * Use the @see:wjCalendar binding to add @see:Calendar controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a Calendar control:&lt;/p&gt;
     * &lt;div
     *   data-bind="wjCalendar: { value: theDate }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjCalendar</b> binding supports all read-write properties and events of
     * the @see:Calendar control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>value</b></li>
     * 	<li><b>displayMonth</b></li>
     * </ul>
     */
    class wjCalendar extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:ColorPicker control.
     *
     * Use the @see:wjColorPicker binding to add @see:ColorPicker controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a ColorPicker control:&lt;/p&gt;
     * &lt;div
     *   data-bind="wjColorPicker: { value: theColor }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjColorPicker</b> binding supports all read-write properties and events of
     * the @see:ColorPicker control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>value</b></li>
     * </ul>
     */
    class wjColorPicker extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:ListBox control.
     *
     * Use the @see:wjListBox binding to add @see:ListBox controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a ListBox control:&lt;/p&gt;
     * &lt;div data-bind="wjListBox: {
     *   itemsSource: countries,
     *   selectedItem: theCountry }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjListBox</b> binding supports all read-write properties and events of
     * the @see:ListBox control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>selectedIndex</b></li>
     * 	<li><b>selectedItem</b></li>
     * 	<li><b>selectedValue</b></li>
     * </ul>
     */
    class wjListBox extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:Menu control.
     *
     * Use the @see:wjMenu binding to add @see:Menu controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a Menu control used as a value picker:&lt;/p&gt;
     * &lt;div data-bind="wjMenu: { value: tax, header: 'Tax' }"&gt;
     *     &lt;span data-bind="wjMenuItem: { value: 0 }"&gt;Exempt&lt;/span&gt;
     *     &lt;span data-bind="wjMenuSeparator: {}"&gt;&lt;/span&gt;
     *     &lt;span data-bind="wjMenuItem: { value: .05 }"&gt;5%&lt;/span&gt;
     *     &lt;span data-bind="wjMenuItem: { value: .1 }"&gt;10%&lt;/span&gt;
     *     &lt;span data-bind="wjMenuItem: { value: .15 }"&gt;15%&lt;/span&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjMenu</b> binding may contain the following child bindings: @see:wjMenuItem, @see:wjMenuSeparator.
     *
     * The <b>wjMenu</b> binding supports all read-write properties and events of
     * the @see:Menu control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>isDroppedDown</b></li>
     * 	<li><b>text</b></li>
     * 	<li><b>selectedIndex</b></li>
     * 	<li><b>selectedItem</b></li>
     * 	<li><b>selectedValue</b></li>
     *  <li><b>value</b></li>
     * </ul>
     */
    class wjMenu extends wjComboBox {
        _getControlConstructor(): any;
        _createWijmoContext(): WjContext;
        _initialize(): void;
        private _updateControlValue(link, propDesc, control, unconvertedValue, convertedValue);
    }
    class WjMenuContext extends WjContext {
        _initControl(): void;
        _childrenInitialized(): void;
        _updateHeader(): void;
    }
    /**
     * KnockoutJS binding for menu items.
     *
     * Use the @see:wjMenuItem binding to add menu items to a @see:Menu control.
     * The @see:wjMenuItem binding must be contained in a @see:wjMenu binding.
     * For example:
     *
     * <pre>&lt;p&gt;Here is a Menu control with four menu items:&lt;/p&gt;
     * &lt;div data-bind="wjMenu: { value: tax, header: 'Tax' }"&gt;
     *     &lt;span data-bind="wjMenuItem: { value: 0 }"&gt;Exempt&lt;/span&gt;
     *     &lt;span data-bind="wjMenuItem: { value: .05 }"&gt;5%&lt;/span&gt;
     *     &lt;span data-bind="wjMenuItem: { value: .1 }"&gt;10%&lt;/span&gt;
     *     &lt;span data-bind="wjMenuItem: { value: .15 }"&gt;15%&lt;/span&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjMenuItem</b> binding supports the following attributes:
     *
     * <dl class="dl-horizontal">
     *   <dt>cmd</dt>       <dd>Function to execute in the controller when the item is clicked.</dd>
     *   <dt>cmdParam</dt>  <dd>Parameter passed to the <b>cmd</b> function when the item is clicked.</dd>
     *   <dt>value</dt>     <dd>Value selected when the item is clicked (use either this or <b>cmd</b>).</dd>
     * </dl class="dl-horizontal">
     */
    class wjMenuItem extends WjBinding {
        _getMetaDataId(): any;
        _createWijmoContext(): WjContext;
        _initialize(): void;
    }
    class WjMenuItemContext extends WjContext {
        _createControl(): any;
    }
    /**
     * KnockoutJS binding for menu separators.
     *
     * The the @see:wjMenuSeparator adds a non-selectable separator to a @see:Menu control, and has no attributes.
     * It must be contained in a @see:wjMenu binding. For example:
     *
     * <pre>&lt;p&gt;Here is a Menu control with four menu items and one separator:&lt;/p&gt;
     * &lt;div data-bind="wjMenu: { value: tax, header: 'Tax' }"&gt;
     *     &lt;span data-bind="wjMenuItem: { value: 0 }"&gt;Exempt&lt;/span&gt;
     *     &lt;span data-bind="wjMenuSeparator: {}"&gt;&lt;/span&gt;
     *     &lt;span data-bind="wjMenuItem: { value: .05 }"&gt;5%&lt;/span&gt;
     *     &lt;span data-bind="wjMenuItem: { value: .1 }"&gt;10%&lt;/span&gt;
     *     &lt;span data-bind="wjMenuItem: { value: .15 }"&gt;15%&lt;/span&gt;
     * &lt;/div&gt;</pre>
     */
    class wjMenuSeparator extends WjBinding {
        _getMetaDataId(): any;
        _initialize(): void;
        _createControl(element: any): any;
    }
    /**
      * KnockoutJS binding for context menus.
      *
      * Use the @see:wjContextMenu binding to add context menus to elements
      * on the page. The @see:wjContextMenu binding is based on the  @see:wjMenu;
      * it displays a popup menu when the user performs a context menu
      * request on an element (usually a right-click).
      *
      * The wjContextMenu binding is specified as a parameter added to the
      * element that the context menu applies to. The parameter value is a
      * selector for the element that contains the menu. For example:
      *
      * <pre>&lt;!-- paragraph with a context menu --&gt;
      *&lt;p data-bind="wjContextMenu: { id: '#idMenu'}" &gt;
      *  This paragraph has a context menu.&lt;/p&gt;
      *
      *&lt;!-- define the context menu (hidden and with an id) --&gt;
      * &lt;div id="contextmenu" data-bind="wjMenu: { header: 'File', itemClicked: menuItemClicked}"&gt;
      *     &lt;span data-bind="wjMenuItem: {}"&gt;New&lt;/span&gt;
      *     &lt;span data-bind="wjMenuItem: {}"&gt;open an existing file or folder&lt;/span&gt;
      *     &lt;span data-bind="wjMenuItem: {}"&gt;save the current file&lt;/span&gt;
      *     &lt;span data-bind="wjMenuSeparator: {}"&gt;&lt;/span&gt;
      *     &lt;span data-bind="wjMenuItem: {}"&gt;exit the application&lt;/span&gt;
      * &lt;/div&gt;</pre>
      */
    class wjContextMenu extends WjBinding {
        _getMetaDataId(): any;
        _createControl(element: any): any;
        _createWijmoContext(): WjContext;
    }
    class WjContextMenuContext extends WjContext {
        _initControl(): void;
    }
    /**
     * KnockoutJS binding for the @see:InputDate control.
     *
     * Use the @see:wjInputDate binding to add @see:InputDate controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is an InputDate control:&lt;/p&gt;
     * &lt;div data-bind="wjInputDate: {
     *   value: theDate,
     *   format: 'M/d/yyyy' }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjInputDate</b> binding supports all read-write properties and events of
     * the @see:InputDate control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>isDroppedDown</b></li>
     * 	<li><b>text</b></li>
     * 	<li><b>value</b></li>
     * </ul>
     */
    class wjInputDate extends WjDropDownBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:InputDateTime control.
     *
     * Use the @see:wjInputDateTime binding to add @see:InputDateTime controls to your
     * KnockoutJS applications.
     *
     * The <b>wjInputDateTime</b> binding supports all read-write properties and events of
     * the @see:InputDateTime control.
     */
    class wjInputDateTime extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:InputNumber control.
     *
     * Use the @see:wjInputNumber binding to add @see:InputNumber controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is an InputNumber control:&lt;/p&gt;
     * &lt;div data-bind="wjInputNumber: {
     *   value: theNumber,
     *   min: 0,
     *   max: 10,
     *   format: 'n0',
     *   placeholder: 'number between zero and ten' }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjInputNumber</b> binding supports all read-write properties and events of
     * the @see:InputNumber control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>value</b></li>
     * 	<li><b>text</b></li>
     * </ul>
     */
    class wjInputNumber extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:InputMask control.
     *
     * Use the @see:wjInputMask binding to add @see:InputMask controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is an InputMask control:&lt;/p&gt;
     * &lt;div data-bind="wjInputMask: {
     *   mask: '99/99/99',
     *   promptChar: '*' }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjInputMask</b> binding supports all read-write properties and events of
     * the @see:InputMask control. The <b>value</b> property provides two-way binding mode.
     */
    class wjInputMask extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:InputTime control.
     *
     * Use the @see:wjInputTime binding to add @see:InputTime controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is an InputTime control:&lt;/p&gt;
     * &lt;div data-bind="wjInputTime: {
     *   min: new Date(2014, 8, 1, 9, 0),
     *   max: new Date(2014, 8, 1, 17, 0),
     *   step: 15,
     *   format: 'h:mm tt',
     *   value: theDate }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjInputTime</b> binding supports all read-write properties and events of
     * the @see:InputTime control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>isDroppedDown</b></li>
     * 	<li><b>text</b></li>
     * 	<li><b>selectedIndex</b></li>
     * 	<li><b>selectedItem</b></li>
     * 	<li><b>selectedValue</b></li>
     *  <li><b>value</b></li>
     * </ul>
     */
    class wjInputTime extends wjComboBox {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:InputColor control.
     *
     * Use the @see:wjInputColor binding to add @see:InputColor controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a InputColor control:&lt;/p&gt;
     * &lt;div
     *   data-bind="wjInputColor: { value: theColor }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjInputColor</b> binding supports all read-write properties and events of
     * the @see:InputColor control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>isDroppedDown</b></li>
     * 	<li><b>text</b></li>
     * 	<li><b>value</b></li>
     * </ul>
     */
    class wjInputColor extends WjDropDownBinding {
        _getControlConstructor(): any;
    }
    class WjCollectionViewBaseBinding extends WjBinding {
        _createControl(element: any): any;
        _createWijmoContext(): WjContext;
        _getTemplate(): string;
    }
    class WjCollectionViewContext extends WjContext {
        private _localVM;
        private _emptyCV;
        init(element: any, valueAccessor: () => any, allBindings: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext): any;
        update(element: any, valueAccessor: () => any, allBindings: KnockoutAllBindingsAccessor, viewModel: any, bindingContext: KnockoutBindingContext): void;
        private _subscribeToCV(cv);
        private _unsubscribeFromCV(cv);
        private _forceBindingsUpdate(s, e);
    }
    /**
     * KnockoutJS binding for an @see:ICollectionView pager element.
     *
     * Use the @see:wjCollectionViewPager directive to add an element that allows users to
     * navigate through the pages in a paged @see:ICollectionView. For example:
     *
     * <pre>Here is a CollectionViewPager:&lt;/p&gt;
     * &lt;div
     *   data-bind="wjCollectionViewPager: { cv: myCollectionView }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The @see:wjCollectionViewPager directive has a single attribute:
     *
     * <dl class="dl-horizontal">
     *   <dt>cv</dt>  <dd>Reference to the paged @see:ICollectionView object to navigate.</dd>
     * </dl>
     */
    class wjCollectionViewPager extends WjCollectionViewBaseBinding {
        _getMetaDataId(): any;
        _getTemplate(): string;
    }
    /**
     * KnockoutJS binding for an @see:ICollectionView navigator element.
     *
     * Use the @see:wjCollectionViewNavigator directive to add an element that allows users to
     * navigate through the items in an @see:ICollectionView. For example:
     *
     * <pre>Here is a CollectionViewNavigator:&lt;/p&gt;
     * &lt;div
     *   data-bind="wjCollectionViewNavigator: { cv: myCollectionView }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The @see:wjCollectionViewNavigator directive has a single attribute:
     *
     * <dl class="dl-horizontal">
     *   <dt>cv</dt>  <dd>Reference to the @see:ICollectionView object to navigate.</dd>
     * </dl>
     */
    class wjCollectionViewNavigator extends WjCollectionViewBaseBinding {
        _getMetaDataId(): any;
        _getTemplate(): string;
    }
    /**
     * KnockoutJS binding for the @see:MultiSelect control.
     *
     * Use the @see:wjMultiSelect binding to add @see:MultiSelect controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a MultiSelect control:&lt;/p&gt;
     * &lt;div data-bind="MultiSelect: {
     *   itemsSource: countries,
     *   isEditable: false,
     *   headerFormat: '{count} countries selected' }"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjMultiSelect</b> binding supports all read-write properties and events of
     * the @see:MultiSelect control. The following properties provide two-way binding mode:
     * <ul>
     * 	<li><b>isDroppedDown</b></li>
     * 	<li><b>text</b></li>
     * 	<li><b>selectedIndex</b></li>
     * 	<li><b>selectedItem</b></li>
     * 	<li><b>selectedValue</b></li>
     * </ul>
     */
    class wjMultiSelect extends wjComboBox {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:MultiAutoComplete control.
     *
     * Use the @see:wjMultiAutoComplete binding to add @see:MultiAutoComplete controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a MultiAutoComplete control:&lt;/p&gt;
     * &lt;div data-bind="MultiAutoComplete: {
     *   itemsSource: countries,
     *   maxSelectedItems: 4,}"&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjMultiAutoComplete</b> binding supports all read-write properties and events of
     * the @see:MultiAutoComplete control.
     */
    class wjMultiAutoComplete extends wjAutoComplete {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:Popup control.
     *
     * Use the @see:wjPopup binding to add @see:Popup controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a Popup control triggered by a button:&lt;/p&gt;
     * &lt;button id="btn2" type="button"&gt;
     *     Click to show Popup
     * &lt;/button&gt;
     *  &lt;div class="popover" data-bind="wjPopup: {
     *       control: popup,
     *       owner: '#btn2',
     *       showTrigger: 'Click',
     *       hideTrigger: 'Click'}"
     *  &gt;
     *	&lt;h3&gt;
     *		 Salutation
     *	&lt;/h3&gt;
     *	 &lt;div class="popover-content"&gt;
     *	 	    Hello {&#8203;{firstName}} {&#8203;{lastName}}
     *	 &lt;/div&gt;
     * &lt;/div&gt;</pre>
     */
    class wjPopup extends WjBinding {
        _getControlConstructor(): any;
        _createWijmoContext(): WjContext;
        _initialize(): void;
    }
    class WjPopupContext extends WjContext {
        _initControl(): void;
        _updateModal(convertedValue: any): void;
    }
}

declare module wijmo.knockout {
    /**
     * KnockoutJS binding for the @see:FlexGrid control.
     *
     * Use the @see:wjFlexGrid binding to add @see:FlexGrid controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a FlexGrid control:&lt;/p&gt;
     * &lt;div data-bind="wjFlexGrid: { itemsSource: data }"&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Country',
     *         binding: 'country',
     *         width: '*' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Date',
     *         binding: 'date' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Revenue',
     *         binding: 'amount',
     *         format: 'n0' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Active',
     *         binding: 'active' }"&gt;
     *     &lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexGrid</b> binding may contain @see:wjFlexGridColumn child bindings.
     *
     * The <b>wjFlexGrid</b> binding supports all read-write properties and events of
     * the @see:FlexGrid control, except for the <b>scrollPosition</b>,
     * <b>selection</b> and <b>columnLayout</b> properties.
     */
    class wjFlexGrid extends WjBinding {
        static _columnTemplateProp: string;
        static _cellClonedTemplateProp: string;
        static _cellVMProp: string;
        static _templColIdx: string;
        static _columnStyleBinding: string;
        static _columnStyleProp: string;
        _getControlConstructor(): any;
        _createWijmoContext(): WjContext;
        _initialize(): void;
        private _formatterPropHandler(link, propDesc, control, unconvertedValue, convertedValue);
    }
    class WjFlexGridContext extends WjContext {
        _wrapperFormatter: any;
        _userFormatter: Function;
        _initControl(): void;
        private _itemFormatter(panel, r, c, cell);
    }
    /**
     * KnockoutJS binding for the @see:FlexGrid @see:Column object.
     *
     * The @see:wjFlexGridColumn binding must be contained in a @see:wjFlexGrid binding. For example:
     *
     * <pre>&lt;p&gt;Here is a FlexGrid control:&lt;/p&gt;
     * &lt;div data-bind="wjFlexGrid: { itemsSource: data }"&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Country',
     *         binding: 'country',
     *         width: '*' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Date',
     *         binding: 'date' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Revenue',
     *         binding: 'amount',
     *         format: 'n0' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Active',
     *         binding: 'active' }"&gt;
     *     &lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexGridColumn</b> binding supports all read-write properties and events of
     * the @see:Column class. The <b>isSelected</b> property provides two-way binding mode.
     *
     * In addition to regular attributes that match properties in the <b>Column</b> class,
     * an element with the @see:wjFlexGridColumn binding may contain a @see:wjStyle binding that
     * provides conditional formatting and an HTML fragment that is used as a cell template. Grid
     * rows automatically stretch vertically to fit custom cell contents.
     *
     * Both the <b>wjStyle</b> binding and the HTML fragment can use the <b>$item</b> observable variable in
     * KnockoutJS bindings to refer to the item that is bound to the current row. Also available are the
     * <b>$row</b> and <b>$col</b> observable variables containing cell row and column indexes. For example:
     *
     * <pre>&lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Symbol',
     *         binding: 'symbol',
     *         readOnly: true,
     *         width: '*' }"&gt;
     *   &lt;a data-bind="attr: {
     *         href: 'https://finance.yahoo.com/q?s=' + $item().symbol() },
     *         text: $item().symbol"&gt;
     *   &lt;/a&gt;
     * &lt;/div&gt;
     * &lt;div data-bind="wjFlexGridColumn: {
     *      header: 'Change',
     *         binding: 'changePercent',
     *         format: 'p2',
     *         width: '*'
     *         },
     *         wjStyle: {
     *         color: getAmountColor($item().change) }"&gt;
     * &lt;/div&gt;</pre>
     *
     * These bindings create two columns.
     * The first has a template that produces a hyperlink based on the bound item's "symbol" property.
     * The second has a conditional style that renders values with a color determined by a function
     * implemented in the controller.
     */
    class wjFlexGridColumn extends WjBinding {
        _getControlConstructor(): any;
        _createControl(element: any): any;
        _createWijmoContext(): WjContext;
    }
    class WjFlexGridColumnContext extends WjContext {
        _initControl(): void;
    }
    /**
     * KnockoutJS binding for conditional formatting of @see:FlexGrid @see:Column cells.
     *
     * Use the @see:wjStyle binding together with the @see:wjFlexGridColumn binding to provide
     * conditional formatting to column cells.
     * For example:
     *
     * <pre>&lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Change',
     *         binding: 'changePercent',
     *         format: 'p2',
     *         width: '*'
     *         },
     *         wjStyle: { color: getAmountColor($item().change) }"&gt;&lt;/div&gt;</pre>
     *
     *
     * The <b>wjStyle</b> uses the same syntax as the native KnockoutJS
     * <a href="http://knockoutjs.com/documentation/style-binding.html" target="_blank">style</a> binding.
     * In addition to the view model properties, the following observable variables are available in binding
     * expressions:
     *
     * <dl class="dl-horizontal">
     *   <dt>$item</dt>  <dd>References the item that is bound to the current row.</dd>
     *   <dt>$row</dt>  <dd>The row index.</dd>
     *   <dt>$col</dt>  <dd>The column index.</dd>
     * </dl>
     */
    class wjStyle {
        preprocess: (value: string, name: string, addBinding: (name: string, value: string) => string) => string;
        init: () => void;
        static quoteString(s: string): string;
        static unquoteString(s: string): string;
    }
    /**
     * KnockoutJS binding for the @see:FlexGrid @see:FlexGridFilter object.
     *
     * The @see:wjFlexGridFilter binding must be contained in a @see:wjFlexGrid binding. For example:
     *
     * <pre>&lt;p&gt;Here is a FlexGrid control with column filters:&lt;/p&gt;
     * &lt;div data-bind="wjFlexGrid: { itemsSource: data }"&gt;
     *     &lt;div data-bind="wjFlexGridFilter: { filterColumns: ['country', 'amount']  }"&gt;&lt;/div&gt;
     * &nbsp;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Country',
     *         binding: 'country',
     *         width: '*' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Date',
     *         binding: 'date' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Revenue',
     *         binding: 'amount',
     *         format: 'n0' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Active',
     *         binding: 'active' }"&gt;
     *     &lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexGridFilter</b> binding supports all read-write properties and events of
     * the @see:FlexGridFilter class.
     *
     */
    class wjFlexGridFilter extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:FlexGrid @see:GroupPanel control.
     *
     * The <b>wjGroupPanel</b> binding should be connected to the <b>FlexGrid</b> control using the <b>grid</b> property.
     * For example:
     *
     * <pre>&lt;p&gt;Here is a FlexGrid control with GroupPanel:&lt;/p&gt;
     * &nbsp;
     * &lt;div data-bind="wjGroupPanel: { grid: flex(), placeholder: 'Drag columns here to create groups.' }"&gt;&lt;/div&gt;
     * &nbsp;
     * &lt;div data-bind="wjFlexGrid: { control: flex, itemsSource: data }"&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Country',
     *         binding: 'country',
     *         width: '*' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Date',
     *         binding: 'date' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Revenue',
     *         binding: 'amount',
     *         format: 'n0' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexGridColumn: {
     *         header: 'Active',
     *         binding: 'active' }"&gt;
     *     &lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjGroupPanel</b> binding supports all read-write properties and events of
     * the @see:GroupPanel class.
     *
     */
    class wjGroupPanel extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:FlexSheet control.
     *
     * Use the @see:wjFlexSheet binding to add @see:FlexSheet controls to your
     * KnockoutJS applications.
     *
     * The <b>wjFlexSheet</b> binding may contain @see:wjSheet child bindings.
     *
     * The <b>wjFlexSheet</b> binding supports all read-write properties and events of
     * the @see:FlexSheet control.
     */
    class wjFlexSheet extends wjFlexGrid {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:FlexSheet @see:Sheet object.
     *
     * The @see:wjSheet binding must be contained in a @see:wjFlexSheet binding.
     *
     * The <b>wjSheet</b> binding supports all read-write properties and events of
     * the @see:Sheet class.
     *
     */
    class wjSheet extends WjBinding {
        _getControlConstructor(): any;
        _createWijmoContext(): WjContext;
    }
    class WjSheetContext extends WjContext {
        _initControl(): grid.sheet.Sheet;
    }
    /**
       * KnockoutJS binding for the @see:MultiRow object.
       * Use the @see:wjMultiRow binding to add @see:MultiRow controls to your
       * KnockoutJS applications. For example:
       *  &lt;div data-bind="wjMultiRow:
       *      {
       *          itemsSource: orders,
       *          layoutDefinition: ldThreeLines
       *      }"&gt;
       *  &lt;/div&gt;
       *
       * The <b>wjMultiRow</b> binding supports all read-write properties and events of
       * the @see:MultiRow class.
       *
       */
    class wjMultiRow extends wjFlexGrid {
        _getControlConstructor(): any;
    }
}

declare module wijmo.knockout {
    class WjFlexChartBaseBinding extends WjBinding {
        _getControlConstructor(): any;
        _initialize(): void;
    }
    /**
     * KnockoutJS binding for the @see:FlexChart control.
     *
     * Use the @see:wjFlexChart binding to add @see:FlexChart controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a FlexChart control:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: data }"&gt;
     *     &lt;div data-bind="wjFlexChartLegend : {
     *         position: 'Top' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartAxis: {
     *         wjProperty: 'axisX',
     *         title: chartProps.titleX }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartAxis: {
     *         wjProperty: 'axisY',
     *         majorUnit: 5000 }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: {
     *         name: 'Sales',
     *         binding: 'sales' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: {
     *         name: 'Expenses',
     *         binding: 'expenses' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: {
     *         name: 'Downloads',
     *         binding: 'downloads',
     *         chartType: 'LineSymbols' }"&gt;
     *     &lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChart</b> binding may contain the following child bindings:
     * @see:wjFlexChartAxis, @see:wjFlexChartSeries, @see:wjFlexChartLegend.
     *
     * The <b>wjFlexChart</b> binding supports all read-write properties and events of
     * the @see:FlexChart control, and the additional <b>tooltipContent</b> property
     * that assigns a value to the <b>FlexChart.tooltip.content</b> property.
     * The <b>selection</b> property provides two-way binding mode.
     */
    class wjFlexChart extends WjFlexChartBaseBinding {
        _getControlConstructor(): any;
        _initialize(): void;
    }
    /**
     * KnockoutJS binding for the @see:FlexPie control.
     *
     * Use the @see:wjFlexPie binding to add @see:FlexPie controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a FlexPie control:&lt;/p&gt;
     * &lt;div data-bind="wjFlexPie: {
     *         itemsSource: data,
     *         binding: 'value',
     *         bindingName: 'name',
     *         header: 'Fruit By Value' }"&gt;
     *     &lt;div data-bind="wjFlexChartLegend : { position: 'Top' }"&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexPie</b> binding may contain the @see:wjFlexChartLegend child binding.
     *
     * The <b>wjFlexPie</b> binding supports all read-write properties and events of
     * the @see:FlexPie control.
     */
    class wjFlexPie extends WjFlexChartBaseBinding {
        _getControlConstructor(): any;
        _initialize(): void;
    }
    /**
     * KnockoutJS binding for the @see:FlexChart @see:Axis object.
     *
     * The @see:wjFlexChartAxis binding must be contained in a @see:wjFlexChart binding. Use the <b>wjProperty</b>
     * attribute to specify the property (<b>axisX</b> or <b>axisY</b>) to initialize with this binding.
     *
     * The <b>wjFlexChartAxis</b> binding supports all read-write properties and events of
     * the @see:Axis class.
     */
    class wjFlexChartAxis extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the Charts' @see:Legend object.
     *
     * The @see:wjFlexChartLegend binding must be contained in one the following bindings:
     *  @see:wjFlexChart, @see:wjFlexPie.
     *
     * The <b>wjFlexChartLegend</b> binding supports all read-write properties and events of
     * the @see:Legend class.
     */
    class wjFlexChartLegend extends WjBinding {
        _getControlConstructor(): any;
    }
    class WjSeriesBase extends WjBinding {
        _getControlConstructor(): any;
        _createControl(element: any): any;
    }
    /**
     * KnockoutJS binding for the @see:FlexChart @see:Series object.
     *
     * The @see:wjFlexChartSeries binding must be contained in a @see:wjFlexChart binding.
     *
     * The <b>wjFlexChartSeries</b> binding supports all read-write properties and events of
     * the @see:Series class. The <b>visibility</b> property provides two-way binding mode.
     */
    class wjFlexChartSeries extends WjSeriesBase {
        _getControlConstructor(): any;
        _createWijmoContext(): WjContext;
    }
    class WjFlexChartSeriesContext extends WjContext {
        _initControl(): void;
    }
    /**
     * KnockoutJS binding for the @see:FinancialChart control.
     *
     * Use the @see:wjFinancialChart binding to add @see:FinancialChart controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a FinancialChart control:&lt;/p&gt;
     * &lt;div data-bind="wjFinancialChart: { itemsSource: data, chartType: 'Candlestick' }"&gt;
     *     &lt;div data-bind="wjFlexChartLegend : {
     *         position: 'Top' }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjFinancialChartSeries: {
     *          name: 'close',
     *         binding: 'high,low,open,close' }"&gt;
     *     &lt;/div&gt;
     *     &lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFinancialChart</b> binding may contain the following child bindings:
     * @see:wjFlexChartAxis, @see:wjFinancialChartSeries, @see:wjFlexChartLegend.
     *
     * The <b>wjFinancialChart</b> binding supports all read-write properties and events of
     * the @see:FinancialChart control, and the additional <b>tooltipContent</b> property
     * that assigns a value to the <b>FinancialChart.tooltip.content</b> property.
     * The <b>selection</b> property provides two-way binding mode.
     */
    class wjFinancialChart extends WjFlexChartBaseBinding {
        _getControlConstructor(): any;
        _initialize(): void;
    }
    /**
     * KnockoutJS binding for the @see:FinancialChart @see:FinancialSeries object.
     *
     * The @see:WjFinancialChartSeries binding must be contained in a @see:wjFinancialChart binding.
     *
     * The <b>WjFinancialChartSeries</b> binding supports all read-write properties and events of
     * the @see:FinancialSeries class. The <b>visibility</b> property provides two-way binding mode.
     */
    class wjFinancialChartSeries extends WjBinding {
        _getControlConstructor(): any;
        _createWijmoContext(): WjContext;
    }
    class WjFinancialChartSeriesContext extends WjContext {
        _initControl(): void;
    }
    /**
     * KnockoutJS binding for the @see:LineMarker control.
     *
     * Use the @see:wjFlexChartLineMarker binding to add @see:LineMarker controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a LineMarker:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: data, bindingX: 'country' }"&gt;
     *     &lt;div data-bind="wjFlexChartAxis: { wjProperty: 'axisX', title: 'country' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Sales', binding: 'sales' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Expenses', binding: 'expenses' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Downloads', binding: 'downloads' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartLineMarker: { interaction: 'Move', lines: 'Both' }"&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     *
     * The <b>wjFlexChartLineMarker</b> binding supports all read-write properties and events of
     * the @see:LineMarker class.
     */
    class wjFlexChartLineMarker extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:RangeSelector control.
     *
     * Use the @see:wjFlexChartRangeSelector binding to add @see:RangeSelector controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a RangeSelector control:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: data, bindingX: 'country' }"&gt;
     *     &lt;div data-bind="wjFlexChartAxis: { wjProperty: 'axisX', title: 'country' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Sales', binding: 'sales' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Expenses', binding: 'expenses' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Downloads', binding: 'downloads' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartRangeSelector: { seamless: 'true',rangeChanged: rangeChanged }"&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartRangeSelector</b> binding supports all read-write properties and events of
     * the @see:RangeSelector class.
     */
    class wjFlexChartRangeSelector extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:ChartGestures object.
     *
     * Use the @see:wjFlexChartGestures binding to add @see:ChartGestures controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a ChartGestures:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: data, bindingX: 'country' }"&gt;
     *     &lt;div data-bind="wjFlexChartAxis: { wjProperty: 'axisX', title: 'country' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Sales', binding: 'sales' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartGestures: { scaleX:0.5, posX:0.1 } "&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartGestures</b> binding supports all read-write properties and events of
     * the @see:ChartGestures class.
     */
    class wjFlexChartGestures extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:PlotArea object.
     *
     * Use the @see:wjFlexChartPlotArea binding to add @see:PlotArea object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a PlotArea:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: data, bindingX: 'country' }"&gt;
     *     &lt;div data-bind="wjFlexChartAxis: { wjProperty: 'axisX', title: 'country' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Sales', binding: 'sales' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartPlotArea: { row:0, name:'plot1', style:{ fill: 'rgba(136,189,230,0.2)'} }  "&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartPlotArea</b> binding supports all read-write properties and events of
     * the @see:PlotArea class.
     */
    class wjFlexChartPlotArea extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:DataPoint object.

     * The <b>wjFlexChartDataPoint</b> must be contained in a
     * @see:wjFlexChartAnnotation. The property of the parent object
     * where <b>wjFlexChartDataPoint</b> should assign a value is specified in the
     * <b>wjProperty</b> attribute.
     *
     * Use the @see:wjFlexChartDataPoint binding to add @see:DataPoint object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a DataPoint:&lt;/p&gt;
     *   &lt;div data-bind="wjFlexChartDataPoint: { wjProperty: 'point', x: 0.9, y:0.4}" &gt;&lt;/div&gt;
     *  </pre>
     *
     * The <b>wjFlexChartDataPoint</b> binding supports all read-write properties and events of
     * the @see:DataPoint class.
     */
    class wjFlexChartDataPoint extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:AnnotationLayer object.
     *
     * Use the @see:wjFlexChartAnnotationLayer binding to add @see:AnnotationLayer object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a AnnotationLayer:&lt;/p&gt;
     *&lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date', chartType:'Candlestick' }"&gt;
     *    &lt;div data-bind="wjFinancialChartSeries: { bindingX: 'date', binding: 'high,low,open,close' }"&gt;&lt;/div&gt;
     *    &lt;div data-bind="wjFlexChartAnnotationLayer: {}"&gt;
     *        &lt;div data-bind="wjFlexChartAnnotation: { type: 'Rectangle', content: 'E',height:20, width:20,attachment:'DataIndex',pointIndex: 10}"&gt;&lt;/div&gt;
     *        &lt;div data-bind="wjFlexChartAnnotation: { type: 'Ellipse', content: 'E',height:20, width:20,attachment:'DataIndex',pointIndex: 30}"&gt;&lt;/div&gt;
     *    &lt;/div&gt;
      &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartAnnotationLayer</b> binding supports all read-write properties and events of
     * the @see:AnnotationLayer class.
     */
    class wjFlexChartAnnotationLayer extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for annotations.
     *
     * The <b>wjFlexChartAnnotation</b> must be contained in a
     * @see:wjFlexChartAnnotationLayer binding.For example:
     * <pre>&lt;p&gt;Here is a AnnotationLayer:&lt;/p&gt;
     *&lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date', chartType:'Candlestick' }"&gt;
     *    &lt;div data-bind="wjFinancialChartSeries: { bindingX: 'date', binding: 'high,low,open,close' }"&gt;&lt;/div&gt;
     *    &lt;div data-bind="wjFlexChartAnnotationLayer: {}"&gt;
     *        &lt;div data-bind="wjFlexChartAnnotation: { type: 'Rectangle', content: 'E',height:20, width:20,attachment:'DataIndex',pointIndex: 10}"&gt;&lt;/div&gt;
     *        &lt;div data-bind="wjFlexChartAnnotation: { type: 'Ellipse', content: 'E',height:20, width:20,attachment:'DataIndex',pointIndex: 30}"&gt;&lt;/div&gt;
     *    &lt;/div&gt;
      &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartAnnotation</b> is used to represent all types of
     * possible annotation shapes like <b>Circle</b>, <b>Rectangle</b>, <b>Polygon</b>
     * and so on. The type of annotation shape is specified
     * in the <b>type</b> attribute.
     */
    class wjFlexChartAnnotation extends WjBinding {
        _context: any;
        _createControl(element: any): any;
        _getMetaDataId(): any;
        _createWijmoContext(): WjContext;
    }
    class wjFlexChartAnnotationContext extends WjContext {
        _createAnnotation(): any;
    }
    /**
     * KnockoutJS binding for the @see:ChartAnimation object.
     *
     * Use the @see:wjFlexChartAnimation binding to add @see:ChartAnimation object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a ChartAnimation:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: data, bindingX: 'country',chartType:'Column' }"&gt;
     *     &lt;div data-bind="wjFlexChartAxis: { wjProperty: 'axisX', title: 'country' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Sales', binding: 'sales' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartAnimation: { animationMode: 'Series',easing:'Swing',duration:2000 }  "&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartAnimation</b> binding supports all read-write properties and events of
     * the @see:ChartAnimation class.
     */
    class wjFlexChartAnimation extends WjBinding {
        _getControlConstructor(): any;
    }
    class WjTrendLineBase extends WjSeriesBase {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:TrendLine object.
     *
     * Use the @see:wjFlexChartTrendLine binding to add @see:TrendLine object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a TrendLine:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: data, bindingX: 'country',chartType:'Column' }"&gt;
     *     &lt;div data-bind="wjFlexChartAxis: { wjProperty: 'axisX', title: 'country' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Sales', binding: 'sales' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartAnimation: { animationMode: 'Series',easing:'Swing',duration:2000 }  "&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartTrendLine</b> binding supports all read-write properties and events of
     * the @see:TrendLine class.
     */
    class wjFlexChartTrendLine extends WjTrendLineBase {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:MovingAverage object.
     *
     * Use the @see:wjFlexChartMovingAverage binding to add @see:MovingAverage object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a MovingAverage:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: trendItemsSource, bindingX: 'x' }"&gt;
     *     &lt;div data-bind="wjFlexChartAxis: { wjProperty: 'axisX', title: 'country' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { chartType: 'Scatter', name: 'Base Data', binding: 'y' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartMovingAverage: { binding: 'y', bindingX: 'x', period:2 }  "&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartMovingAverage</b> binding supports all read-write properties and events of
     * the @see:MovingAverage class.
     */
    class wjFlexChartMovingAverage extends WjTrendLineBase {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:YFunctionSeries object.
     *
     * Use the @see:wjFlexChartYFunctionSeries binding to add @see:YFunctionSeries object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a YFunctionSeries:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: trendItemsSource, bindingX: 'x' }"&gt;
     *     &lt;div data-bind="wjFlexChartYFunctionSeries: {  min: 10, max: -10, sampleCount:100,func:func }"&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartYFunctionSeries</b> binding supports all read-write properties and events of
     * the @see:YFunctionSeries class.
     */
    class wjFlexChartYFunctionSeries extends WjTrendLineBase {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:ParametricFunctionSeries object.
     *
     * Use the @see:wjFlexChartParametricFunctionSeries binding to add @see:ParametricFunctionSeries object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a ParametricFunctionSeries:&lt;/p&gt;
     * &lt;div data-bind="wjFlexChart: { itemsSource: trendItemsSource, bindingX: 'x' }"&gt;
     *     &lt;div data-bind="wjFlexChartSeries: { name: 'Sales', binding: 'sales' }"&gt;&lt;/div&gt;
     *     &lt;div data-bind="wjFlexChartParametricFunctionSeries: {  sampleCount:1000, max: max,xFunc:xFunc,yFunc:yFunc  }"&gt;&lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartParametricFunctionSeries</b> binding supports all read-write properties and events of
     * the @see:ParametricFunctionSeries class.
     */
    class wjFlexChartParametricFunctionSeries extends WjTrendLineBase {
        _getControlConstructor(): any;
        _initialize(): void;
    }
    /**
      * KnockoutJS binding for the @see:Waterfall object.
      *
      * Use the @see:wjFlexChartWaterfall binding to add @see:Waterfall object to your
      * KnockoutJS applications. For example:
      *
      * <pre>&lt;p&gt;Here is a Waterfall:&lt;/p&gt;
      * &lt;div data-bind="wjFlexChart: { itemsSource: trendItemsSource,  binding:'value',bindingX: 'name' }"&gt;
      *     &lt;div data-bind="wjFlexChartWaterfall: {  relativeData:true, connectorLines: true, start:1000,showIntermediateTotal: true,
      *                       intermediateTotalPositions: [3, 6, 9, 12], intermediateTotalLabels: ['Q1', 'Q2', 'Q3', 'Q4'],name:'Increase,Decrease,Total'}"&gt;&lt;/div&gt;
      * &lt;/div&gt;</pre>
      *
      * The <b>wjFlexChartWaterfall</b> binding supports all read-write properties and events of
      * the @see:Waterfall class.
      */
    class wjFlexChartWaterfall extends WjSeriesBase {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:Fibonacci object.
     *
     * Use the @see:wjFlexChartFibonacci binding to add @see:Fibonacci object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a Fibonacci:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date', chartType:'Candlestick' }"&gt;
     *         &lt;div data-bind="wjFinancialChartSeries: { bindingX: 'date', binding: 'high,low,open,close' }"&gt;&lt;/div&gt;
     *         &lt;div data-bind="wjFlexChartFibonacci: { binding:'close', symbolSize:1, labelPosition: 'Left',  uptrend: true}"&gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartFibonacci</b> binding supports all read-write properties and events of
     * the @see:Fibonacci class.
     */
    class wjFlexChartFibonacci extends WjSeriesBase {
        _getControlConstructor(): any;
        _createControl(element: any): any;
    }
    /**
     * KnockoutJS binding for the @see:FibonacciArcs object.
     *
     * Use the @see:wjFlexChartFibonacciArcs binding to add @see:FibonacciArcs object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a FibonacciArcs:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date', chartType:'Candlestick' }"&gt;
     *         &lt;div data-bind="wjFinancialChartSeries: { bindingX: 'date', binding: 'high,low,open,close' }"&gt;&lt;/div&gt;
     *         &lt;div data-bind="wjFlexChartFibonacciArcs: { binding:'close', start:start, end: end,  labelPosition: 'Top'}"&gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartFibonacciArcs</b> binding supports all read-write properties and events of
     * the @see:FibonacciArcs class.
     */
    class wjFlexChartFibonacciArcs extends WjSeriesBase {
        _getControlConstructor(): any;
        _createControl(element: any): any;
    }
    /**
     * KnockoutJS binding for the @see:FibonacciFans object.
     *
     * Use the @see:wjFlexChartFibonacciFans binding to add @see:FibonacciFans object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a FibonacciFans:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date', chartType:'Candlestick' }"&gt;
     *         &lt;div data-bind="wjFinancialChartSeries: { bindingX: 'date', binding: 'high,low,open,close' }"&gt;&lt;/div&gt;
     *         &lt;div data-bind="wjFlexChartFibonacciFans: { binding:'close', start:start, end: end,  labelPosition: 'Top'}"&gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartFibonacciFans</b> binding supports all read-write properties and events of
     * the @see:FibonacciFans class.
     */
    class wjFlexChartFibonacciFans extends WjSeriesBase {
        _getControlConstructor(): any;
        _createControl(element: any): any;
    }
    /**
    * KnockoutJS binding for the @see:FibonacciTimeZones object.
    *
    * Use the @see:wjFlexChartFibonacciTimeZones binding to add @see:FibonacciTimeZones object to your
    * KnockoutJS applications. For example:
    *
    * <pre>&lt;p&gt;Here is a FibonacciTimeZones:&lt;/p&gt;
    *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date', chartType:'Candlestick' }"&gt;
    *         &lt;div data-bind="wjFinancialChartSeries: { bindingX: 'date', binding: 'high,low,open,close' }"&gt;&lt;/div&gt;
    *         &lt;div data-bind="wjFlexChartFibonacciTimeZones: { binding:'close', startX:zStart, endX: zEnd,  labelPosition: 'Right'}"&gt;&lt;/div&gt;
    *   &lt;/div&gt;</pre>
    *
    * The <b>wjFlexChartFibonacciTimeZones</b> binding supports all read-write properties and events of
    * the @see:FibonacciTimeZones class.
    */
    class wjFlexChartFibonacciTimeZones extends WjSeriesBase {
        _getControlConstructor(): any;
        _createControl(element: any): any;
    }
    class WjBaseOverlayIndicator extends WjSeriesBase {
        _getControlConstructor(): any;
    }
    class WjBaseSingleOverlayIndicator extends WjBaseOverlayIndicator {
        _getControlConstructor(): any;
    }
    /**
    * KnockoutJS binding for the @see:ATR object.
    *
    * Use the @see:wjFlexChartAtr binding to add @see:ATR object to your
    * KnockoutJS applications. For example:
    *
    * <pre>&lt;p&gt;Here is a ATR:&lt;/p&gt;
    *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date'}"&gt;
    *         &lt;div data-bind="wjFlexChartAtr: { binding: 'high,low,open,close',period:'14' }"&gt;&lt;/div&gt;
    *   &lt;/div&gt;</pre>
    *
    * The <b>wjFlexChartAtr</b> binding supports all read-write properties and events of
    * the @see:ATR class.
    */
    class wjFlexChartAtr extends WjBaseSingleOverlayIndicator {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:CCI object.
     *
     * Use the @see:wjFlexChartCci binding to add @see:CCI object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a CCI:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date'}"&gt;
     *         &lt;div data-bind="wjFlexChartCci: { binding: 'high,low,open,close',period:20 }"&gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartCci</b> binding supports all read-write properties and events of
     * the @see:CCI class.
     */
    class wjFlexChartCci extends WjBaseSingleOverlayIndicator {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:RSI object.
     *
     * Use the @see:wjFlexChartRsi binding to add @see:RSI object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a RSI:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date', chartType:'Candlestick' }"&gt;
     *         &lt;div data-bind="wjFlexChartRsi: { binding: 'high,low,open,close',period:20 }"&gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartRsi</b> binding supports all read-write properties and events of
     * the @see:RSI class.
     */
    class wjFlexChartRsi extends WjBaseSingleOverlayIndicator {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:WilliamsR object.
     *
     * Use the @see:wjFlexChartWilliamsR binding to add @see:WilliamsR object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a WilliamsR:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date'}"&gt;
     *         &lt;div data-bind="wjFlexChartWilliamsR: { binding: 'high,low,open,close',period:20 }"&gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartWilliamsR</b> binding supports all read-write properties and events of
     * the @see:WilliamsR class.
     */
    class wjFlexChartWilliamsR extends WjBaseSingleOverlayIndicator {
        _getControlConstructor(): any;
    }
    class WjFlexChartMacdBase extends WjBaseOverlayIndicator {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:Macd object.
     *
     * Use the @see:wjFlexChartMacd binding to add @see:Macd object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a Macd:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date'}"&gt;
     *         &lt;div data-bind="wjFlexChartMacd: { binding: 'close',fastPeriod:12, slowPeriod: 26,smoothingPeriod: 9 }" &gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartMacd</b> binding supports all read-write properties and events of
     * the @see:Macd class.
     */
    class wjFlexChartMacd extends WjFlexChartMacdBase {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:MacdHistogram object.
     *
     * Use the @see:wjFlexChartMacdHistogram binding to add @see:MacdHistogram object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a MacdHistogram:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date'}"&gt;
     *         &lt;div data-bind="WjFlexChartMacdHistogram: { binding: 'close',fastPeriod:12, slowPeriod: 26,smoothingPeriod: 9 }" &gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartMacdHistogram</b> binding supports all read-write properties and events of
     * the @see:MacdHistogram class.
     */
    class wjFlexChartMacdHistogram extends WjFlexChartMacdBase {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:Stochastic object.
     *
     * Use the @see:wjFlexChartStochastic binding to add @see:Stochastic object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a Stochastic:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date'}"&gt;
     *         &lt;div data-bind="wjFlexChartStochastic: { binding: 'high,low,open,close',kPeriod:14,dPeriod:3,smoothingPeriod: 1 }" &gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartStochastic</b> binding supports all read-write properties and events of
     * the @see:Stochastic class.
     */
    class wjFlexChartStochastic extends WjBaseOverlayIndicator {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:BollingerBands object.
     *
     * Use the @see:wjFlexChartBollingerBands binding to add @see:BollingerBands object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a BollingerBands:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date'}"&gt;
     *         &lt;div data-bind="wjFlexChartStochastic: { binding: 'high,low,open,close',kPeriod:14,dPeriod:3,smoothingPeriod: 1 }" &gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartBollingerBands</b> binding supports all read-write properties and events of
     * the @see:BollingerBands class.
     */
    class wjFlexChartBollingerBands extends WjBaseOverlayIndicator {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:Envelopes object.
     *
     * Use the @see:wjFlexChartEnvelopes binding to add @see:Envelopes object to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a Envelopes:&lt;/p&gt;
     *    &lt;div data-bind="wjFinancialChart: { itemsSource: fData, bindingX: 'date'}"&gt;
     *         &lt;div data-bind="wjFlexChartEnvelopes: { binding:'close', type:'Simple', size: 0.03, period:20}" &gt;&lt;/div&gt;
     *   &lt;/div&gt;</pre>
     *
     * The <b>wjFlexChartEnvelopes</b> binding supports all read-write properties and events of
     * the @see:Envelopes class.
     */
    class wjFlexChartEnvelopes extends WjBaseOverlayIndicator {
        _getControlConstructor(): any;
    }
}

declare module wijmo.knockout {
    class WjGaugeBinding extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:LinearGauge control.
     *
     * Use the @see:wjLinearGauge binding to add @see:LinearGauge controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a LinearGauge control:&lt;/p&gt;
     * &lt;div data-bind="wjLinearGauge: {
     *         value: props.value,
     *         min: props.min,
     *         max: props.max,
     *         format: props.format,
     *         showRanges: props.showRanges }"
     *         &lt;class="linear-gauge"&gt;
     *     &lt;div data-bind="wjRange: {
     *             wjProperty: 'pointer',
     *             thickness: props.ranges.pointerThickness }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjRange: {
     *             min: props.ranges.lower.min,
     *             max: props.ranges.lower.max,
     *             color: props.ranges.lower.color }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjRange: {
     *             min: props.ranges.middle.min,
     *             max: props.ranges.middle.max,
     *             color: props.ranges.middle.color }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjRange: {
     *             min: props.ranges.upper.min,
     *             max: props.ranges.upper.max,
     *             color: props.ranges.upper.color }"&gt;
     *     &lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjLinearGauge</b> binding may contain the @see:wjRange child binding.
     *
     * The <b>wjLinearGauge</b> binding supports all read-write properties and events of
     * the @see:LinearGauge control. The <b>value</b> property provides two-way binding mode.
     */
    class wjLinearGauge extends WjGaugeBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:BulletGraph control.
     *
     * Use the @see:wjBulletGraph binding to add @see:BulletGraph controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a BulletGraph control:&lt;/p&gt;
     * &lt;div data-bind="wjBulletGraph: {
     *         value: props.value,
     *         min: props.min,
     *         max: props.max,
     *         format: props.format,
     *         good: props.ranges.middle.max,
     *         bad: props.ranges.middle.min,
     *         target: props.ranges.target,
     *         showRanges: props.showRanges }"
     *         class="linear-gauge"&gt;
     *     &lt;div data-bind="wjRange: {
     *             wjProperty: 'pointer',
     *             thickness: props.ranges.pointerThickness }"&gt;
     *     &lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjBulletGraph</b> binding may contain the @see:wjRange child binding.
     *
     * The <b>wjBulletGraph</b> binding supports all read-write properties and events of
     * the @see:BulletGraph control. The <b>value</b> property provides two-way binding mode.
     */
    class wjBulletGraph extends wjLinearGauge {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the @see:RadialGauge control.
     *
     * Use the @see:wjRadialGauge binding to add @see:RadialGauge controls to your
     * KnockoutJS applications. For example:
     *
     * <pre>&lt;p&gt;Here is a RadialGauge control:&lt;/p&gt;
     * &lt;div data-bind="wjRadialGauge: {
     *         value: props.value,
     *         min: props.min,
     *         max: props.max,
     *         format: props.format,
     *         showRanges: props.showRanges }"
     *         class="radial-gauge"&gt;
     *     &lt;div data-bind="wjRange: {
     *             wjProperty: 'pointer',
     *             thickness: props.ranges.pointerThickness }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjRange: {
     *             min: props.ranges.lower.min,
     *             max: props.ranges.lower.max,
     *             color: props.ranges.lower.color }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjRange: {
     *             min: props.ranges.middle.min,
     *             max: props.ranges.middle.max,
     *             color: props.ranges.middle.color }"&gt;
     *     &lt;/div&gt;
     *     &lt;div data-bind="wjRange: {
     *             min: props.ranges.upper.min,
     *             max: props.ranges.upper.max,
     *             color: props.ranges.upper.color }"&gt;
     *     &lt;/div&gt;
     * &lt;/div&gt;</pre>
     *
     * The <b>wjRadialGauge</b> binding may contain the @see:wjRange child binding.
     *
     * The <b>wjRadialGauge</b> binding supports all read-write properties and events of
     * the @see:RadialGauge control. The <b>value</b> property provides two-way binding mode.
     */
    class wjRadialGauge extends WjGaugeBinding {
        _getControlConstructor(): any;
    }
    /**
     * KnockoutJS binding for the Gauge's @see:Range object.
     *
     * The @see:wjRange binding must be contained in one of the following bindings:
     * <ul>
     *     <li>@see:wjLinearGauge</li>
     *     <li>@see:wjRadialGauge</li>
     *     <li>@see:wjBulletGraph</li>
     * </ul>
     * By default, this binding adds a <b>Range</b> object to the <b>ranges</b>
     * collection of the Chart control. The <b>wjProperty</b> attribute allows
     * you to specify another Chart property, for example the <b>pointer</b>
     * property, to initialize with the binding.
     *
     * The <b>wjRange</b> binding supports all read-write properties and events of
     * the @see:Range class.
     */
    class wjRange extends WjBinding {
        _getControlConstructor(): any;
    }
}

declare module wijmo.knockout {
    /**
       * KnockoutJS binding for the @see:PivotGrid object.
       * Use the @see:wjPivotGrid binding to add @see:PivotGrid controls to your
       * KnockoutJS applications. For example:
       *  &lt;div data-bind="wjPivotGrid:
       *      {
       *          itemsSource: thePanel
       *      }"&gt;
       *  &lt;/div&gt;
       *
       * The <b>wjPivotGrid</b> binding supports all read-write properties and events of
       * the @see:PivotGrid class.
       *
       */
    class wjPivotGrid extends wjFlexGrid {
        _getControlConstructor(): any;
    }
    /**
       * KnockoutJS binding for the @see:PivotChart object.
       * Use the @see:wjPivotChart binding to add @see:PivotChart controls to your
       * KnockoutJS applications. For example:
       *  &lt;div data-bind="wjPivotChart:
       *      {
       *          itemsSource: thePanel
       *      }"&gt;
       *  &lt;/div&gt;
       *
       * The <b>wjPivotChart</b> binding supports all read-write properties and events of
       * the @see:PivotChart class.
       *
       */
    class wjPivotChart extends WjBinding {
        _getControlConstructor(): any;
    }
    /**
       * KnockoutJS binding for the @see:PivotPanel object.
       * Use the @see:wjPivotPanel binding to add @see:PivotPanel controls to your
       * KnockoutJS applications. For example:
       *  &lt;div data-bind="wjPivotPanel:
       *      {
       *           itemsSource: rawData,
       *           control: thePanel,
       *           initialized: init
       *      }"&gt;
       *  &lt;/div&gt;
       *
       * The <b>wjPivotPanel</b> binding supports all read-write properties and events of
       * the @see:PivotPanel class.
       *
       */
    class wjPivotPanel extends WjBinding {
        _getControlConstructor(): any;
    }
}

declare module wijmo.knockout {
    /**
       * KnockoutJS binding for the @see:TreeView object.
       * Use the @see:wjTreeView binding to add @see:TreeView controls to your
       * KnockoutJS applications. For example:
       *  &lt;div data-bind="wjTreeView:
       *      {
       *          itemsSource: data
       *          displayMemberPath:'header'
       *          childItemsPath:'items'
       *      }"&gt;
       *  &lt;/div&gt;
       *
       * The <b>wjTreeView</b> binding supports all read-write properties and events of
       * the @see:TreeView class.
       *
       */
    class wjTreeView extends WjBinding {
        _getControlConstructor(): any;
    }
}

declare module wijmo.knockout {
    class WjTagsPreprocessor {
        private static _getSpecialProps();
        private static _specialProps;
        private static _dataBindAttr;
        private static _wjTagPrefix;
        private _foreignProc;
        register(): void;
        preprocessNode(node: any): any;
        private _delegate(node);
        private _isWjTag(name);
        private _isWjProp(name, metaData);
    }
}

