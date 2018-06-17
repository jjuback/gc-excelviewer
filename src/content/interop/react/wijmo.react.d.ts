/*
    *
    * Wijmo Library 5.20181.462
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */

declare module wijmo.react {
    /**
     * Base class for all Wijmo components for React.
     */
    class ComponentBase extends React.Component<any, any> {
        static readonly _propsParent: string;
        static readonly _typeSiblingIdProp: string;
        static _siblingDirId: number;
        private _objPropHash;
        private _isMounted;
        private _mountedCBs;
        private _siblingInsertedEH;
        controlType: any;
        props: any;
        control: any;
        parent: ComponentBase;
        protected _parentProp: string;
        protected _parentInCtor: boolean;
        protected _siblingId: string;
        constructor(props: any, controlType: any, meta?: any);
        render(): React.DOMElement<any, Element>;
        componentDidMount(): any;
        componentWillUnmount(): void;
        shouldComponentUpdate(nextProps: any): boolean;
        _mountedCB(cb: () => void): void;
        protected _createControl(): any;
        private _prepareControl();
        protected _initParent(): void;
        private _setParent(parent);
        private _isChild();
        private _isParentInCtor();
        private _getParentProp();
        private _getSiblingIndex();
        private _siblingInserted(e);
        private _copy(dst, src, isInit?);
        private _sameValue(v1, v2);
        private _isEvent(ctrl, propName);
        private _getElement();
        private _ignoreProp(prop);
    }
}

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.input.ComboBox control.
     */
    class ComboBox extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.AutoComplete control.
     */
    class AutoComplete extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.Calendar control.
     */
    class Calendar extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.ColorPicker control.
     */
    class ColorPicker extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.InputMask control.
     */
    class InputMask extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.InputColor control.
     */
    class InputColor extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.MultiSelect control.
     */
    class MultiSelect extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.MultiAutoComplete control.
     */
    class MultiAutoComplete extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.InputNumber control.
     */
    class InputNumber extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.InputDate control.
     */
    class InputDate extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.InputTime control.
     */
    class InputTime extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.InputDateTime control.
     */
    class InputDateTime extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.ListBox control.
     */
    class ListBox extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.Menu control.
     */
    class Menu extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.input.Popup control.
     */
    class Popup extends ComponentBase {
        constructor(props: any);
        render(): React.DOMElement<any, Element>;
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.grid.FlexGrid control.
     * The example below shows how to instantiate and initialize a
     * @see:wijmo.grid.FlexGrid control in JSX:
     *
     * <pre>&lt;Wj.FlexGrid
     *   autoGenerateColumns={ false }
     *   columns={[
     *     { binding: 'name', header: 'Name' },
     *     { binding: 'sales', header: 'Sales', format: 'c0' },
     *     { binding: 'expenses', header: 'Expenses', format: 'c0' },
     *     { binding: 'active', header: 'Active' },
     *     { binding: 'date', header: 'Date' }
     *   ]}
     *   itemsSource={ this.state.data } /&gt;</pre>
     *
     * The code sets the <b>autoGenerateColumns</b> property to false, then
     * sets the <b>columns</b> property, and finally sets the <b>itemsSource</b>
     * property. This order is important, it prevents the grid from automatically
     * generating the columns.
     */
    class FlexGrid extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.grid.Column in a @see:wijmo.react.FlexGrid.
     */
    class FlexGridColumn extends ComponentBase {
        _parentProp: string;
        constructor(props: any);
        protected _initParent(): void;
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.grid.grouppanel.GroupPanel control.
     */
    class GroupPanel extends ComponentBase {
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.chart.FlexChart control.
     *
     * The example below shows how to instantiate and initialize a
     * @see:wijmo.chart.FlexChart control in JSX:
     *
     * <pre>&lt;Wj.FlexChart
     *   itemsSource={ this.state.data }
     *   bindingX="name"
     *   header={ this.state.header }
     *   footer={ this.state.footer }
     *   axisX={&#8203;{ title: this.state.titleX }}
     *   axisY={&#8203;{ title: this.state.titleY }}
     *   legend={&#8203;{ position: this.state.legendPosition }}
     *   series={[
     *       { name: 'Sales', binding: 'sales' },
     *       { name: 'Expenses', binding: 'expenses' },
     *       { name: 'Downloads', binding: 'downloads', chartType: 'LineSymbols' }
     *   ]} /&gt;</pre>
     *

     * The code sets the <b>itemsSource</b> property to a collection that contains
     * the data to chart and the <b>bindingX</b> property to specify the name of the
     * data property to use for the chart's X values.
     *
     * It sets the <b>header</b> and <b>footer</b> properties to specify the
     * chart titles, and customizes the chart's axes and legend.
     *
     * Finally, it sets the <b>series</b> property to an array that specifies the
     * data items that the chart should display.
     */
    class FlexChart extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.chart.FlexPie control.
     */
    class FlexPie extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.Axis in one of the following components:
     * @see:wijmo.react.FlexChart
     * , @see:wijmo.react.FlexChartSeries
     * , @see:wijmo.react.FinancialChart
     *  or @see:wijmo.react.FinancialChartSeries.
     */
    class FlexChartAxis extends ComponentBase {
        _parentProp: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.Legend in one of the following components:
     * @see:wijmo.react.FlexChart
     * , @see:wijmo.react.FlexPie
     * , @see:wijmo.react.FinancialChart
     * , @see:wijmo.react.FlexRadar
     *  or @see:wijmo.react.Sunburst.
     */
    class FlexChartLegend extends ComponentBase {
        _parentProp: string;
        _parentInCtor: boolean;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.DataLabel in a @see:wijmo.react.FlexChart.
     */
    class FlexChartDataLabel extends ComponentBase {
        _parentProp: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.PieDataLabel in a @see:wijmo.react.FlexPie.
     */
    class FlexPieDataLabel extends ComponentBase {
        _parentProp: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.Series in a @see:wijmo.react.FlexChart.
     */
    class FlexChartSeries extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.LineMarker in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartLineMarker extends ComponentBase {
        _parentInCtor: boolean;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.DataPoint in a @see:wijmo.react.FlexChartAnnotation.
     */
    class FlexChartDataPoint extends ComponentBase {
        _parentProp: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.PlotArea in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartPlotArea extends ComponentBase {
        _parentProp: string;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.gauge.LinearGauge control.
     *
     * The example below shows how to instantiate and initialize a
     * @see:wijmo.gauge.LinearGauge control in JSX:
     *
     * <pre>&lt;Wj.LinearGauge
     *   min={ 0 } max={ 1000 } step={ 50 } isReadOnly={ false }
     *   value={ this.state.view.currentItem.sales }
     *   valueChanged={ this.salesChanged }
     *   format="c0" thumbSize={ 20 } showRanges={ false }
     *   face={&#8203;{ thickness:0.5 }}
     *   pointer={&#8203;{ thickness:0.5 }}
     *   ranges={[
     *       { min: 0, max: 333, color: 'red' },
     *       { min: 333, max: 666, color: 'gold' },
     *       { min: 666, max: 1000, color: 'green' }
     *   ]} /&gt;</pre>
     *
     * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
     * to define the range of the gauge and to allow users to edit its value.
     * Next, it sets the <b>value</b> and <b>valueChanged</b> properties to create
     * a two-way binding for the gauge's value.
     *
     * Then it sets the <b>format</b>, <b>thumbSize</b>, and <b>showRanges</b>
     * properties to define the appearance of the gauge. Finally, the markup sets
     * the thickness of the <b>face</b> and <b>pointer</b> ranges, and extra ranges
     * that will control the color of the <b>value</b> range depending on the gauge's
     * current value.
     */
    class LinearGauge extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.gauge.BulletGraph control.
     *
     * The example below shows how to instantiate and initialize a
     * @see:wijmo.gauge.BulletGraph control in JSX:
     *
     * <pre>&lt;Wj.BulletGraph
     *   min={ 0 } max={ 1000 } step={ 50 } isReadOnly={ false }
     *   value={ this.state.view.currentItem.sales }
     *   valueChanged={ this.salesChanged }
     *   format="c0" thumbSize={ 20 } showRanges={ false }
     *   face={&#8203;{ thickness:0.5 }}
     *   pointer={&#8203;{ thickness:0.5 }}
     *   ranges={[
     *       { min: 0, max: 333, color: 'red' },
     *       { min: 333, max: 666, color: 'gold' },
     *       { min: 666, max: 1000, color: 'green' }
     *   ]} /&gt;</pre>
     *
     * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
     * to define the range of the gauge and to allow users to edit its value.
     * Next, it sets the <b>value</b> and <b>valueChanged</b> properties to create
     * a two-way binding for the gauge's value.
     *
     * Then it sets the <b>format</b>, <b>thumbSize</b>, and <b>showRanges</b>
     * properties to define the appearance of the gauge. Finally, the markup sets
     * the thickness of the <b>face</b> and <b>pointer</b> ranges, and extra ranges
     * that will control the color of the <b>value</b> range depending on the gauge's
     * current value.
     */
    class BulletGraph extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.gauge.RadialGauge control.
     *
     * The example below shows how to instantiate and initialize a
     * @see:wijmo.gauge.RadialGauge control in JSX:
     *
     * <pre>&lt;Wj.RadialGauge
     *   min={ 0 } max={ 1000 } step={ 50 } isReadOnly={ false }
     *   value={ this.state.view.currentItem.sales }
     *   valueChanged={ this.salesChanged }
     *   format="c0" thumbSize={ 20 } showRanges={ false }
     *   face={&#8203;{ thickness:0.5 }}
     *   pointer={&#8203;{ thickness:0.5 }}
     *   ranges={[
     *       { min: 0, max: 333, color: 'red' },
     *       { min: 333, max: 666, color: 'gold' },
     *       { min: 666, max: 1000, color: 'green' }
     *   ]} /&gt;</pre>
     *
     * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
     * to define the range of the gauge and to allow users to edit its value.
     * Next, it sets the <b>value</b> and <b>valueChanged</b> properties to create
     * a two-way binding for the gauge's value.
     *
     * Then it sets the <b>format</b>, <b>thumbSize</b>, and <b>showRanges</b>
     * properties to define the appearance of the gauge. Finally, the markup sets
     * the thickness of the <b>face</b> and <b>pointer</b> ranges, and extra ranges
     * that will control the color of the <b>value</b> range depending on the gauge's
     * current value.
     */
    class RadialGauge extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.gauge.Range in one of the following components:
     * @see:wijmo.react.LinearGauge
     * , @see:wijmo.react.BulletGraph
     *  or @see:wijmo.react.RadialGauge.
     */
    class Range extends ComponentBase {
        _parentProp: string;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.olap.PivotGrid control.
     */
    class PivotGrid extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.olap.PivotChart control.
     */
    class PivotChart extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.olap.PivotPanel control.
     */
    class PivotPanel extends ComponentBase {
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.nav.TreeView control.
     */
    class TreeView extends ComponentBase {
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.grid.multirow.MultiRow control.
     */
    class MultiRow extends ComponentBase {
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.viewer.ReportViewer control.
     */
    class ReportViewer extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.viewer.PdfViewer control.
     */
    class PdfViewer extends ComponentBase {
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.grid.sheet.FlexSheet control.
     */
    class FlexSheet extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.grid.sheet.Sheet in a @see:wijmo.react.FlexSheet.
     */
    class Sheet extends ComponentBase {
        _parentInCtor: boolean;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.chart.finance.FinancialChart control.
     */
    class FinancialChart extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.FinancialSeries in a @see:wijmo.react.FinancialChart.
     */
    class FinancialChartSeries extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.chart.hierarchical.Sunburst control.
     */
    class Sunburst extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that encapsulates the @see:wijmo.chart.hierarchical.TreeMap control.
     */
    class TreeMap extends ComponentBase {
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that encapsulates the @see:wijmo.chart.radar.FlexRadar control.
     */
    class FlexRadar extends ComponentBase {
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.radar.FlexRadarAxis in one of the following components:
     * @see:wijmo.react.FlexRadar
     *  or @see:wijmo.react.FlexRadarSeries.
     */
    class FlexRadarAxis extends ComponentBase {
        _parentProp: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.radar.FlexRadarSeries in a @see:wijmo.react.FlexRadar.
     */
    class FlexRadarSeries extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that represents a @see:wijmo.chart.analytics.TrendLine in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartTrendLine extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.analytics.MovingAverage in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartMovingAverage extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.analytics.YFunctionSeries in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartYFunctionSeries extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.analytics.ParametricFunctionSeries in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartParametricFunctionSeries extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.analytics.Waterfall in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartWaterfall extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.analytics.BoxWhisker in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartBoxWhisker extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.analytics.ErrorBar in a @see:wijmo.react.FlexChart.
     */
    class FlexChartErrorBar extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that represents a @see:wijmo.chart.animation.ChartAnimation in one of the following components:
     * @see:wijmo.react.FlexChart
     * , @see:wijmo.react.FlexPie
     * , @see:wijmo.react.FinancialChart
     *  or @see:wijmo.react.FlexRadar.
     */
    class FlexChartAnimation extends ComponentBase {
        _parentInCtor: boolean;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that represents a @see:wijmo.chart.annotation.AnnotationLayer in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartAnnotationLayer extends ComponentBase {
        _parentInCtor: boolean;
        constructor(props: any);
    }
    /**
     * React component that represents a @see: in a @see:wijmo.react.FlexChartAnnotationLayer.
     */
    class FlexChartAnnotation extends ComponentBase {
        _parentProp: string;
        constructor(props: any);
        protected _createControl(): any;
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.Fibonacci in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartFibonacci extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.FibonacciArcs in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartFibonacciArcs extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.FibonacciFans in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartFibonacciFans extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.FibonacciTimeZones in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartFibonacciTimeZones extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.ATR in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartAtr extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.CCI in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartCci extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.RSI in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartRsi extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.WilliamsR in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartWilliamsR extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.Macd in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartMacd extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.MacdHistogram in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartMacdHistogram extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.Stochastic in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartStochastic extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.BollingerBands in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartBollingerBands extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.finance.analytics.Envelopes in a @see:wijmo.react.FinancialChart.
     */
    class FlexChartEnvelopes extends ComponentBase {
        _parentProp: string;
        _siblingId: string;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that represents a @see:wijmo.chart.interaction.RangeSelector in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartRangeSelector extends ComponentBase {
        _parentInCtor: boolean;
        constructor(props: any);
    }
    /**
     * React component that represents a @see:wijmo.chart.interaction.ChartGestures in one of the following components:
     * @see:wijmo.react.FlexChart
     *  or @see:wijmo.react.FinancialChart.
     */
    class FlexChartGestures extends ComponentBase {
        _parentInCtor: boolean;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 *
 * All Wijmo React components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;Wj.FlexGrid
 *   initialized={ function(s,e) {
 *
 *     // assign a custom MergeManager to the grid
 *     s.mergeManager = new CustomMergeManager(s);
 *
 *   }}
 * /&gt;</pre>
 */
declare module wijmo.react {
    /**
     * React component that represents a @see:wijmo.grid.filter.FlexGridFilter in a @see:wijmo.react.FlexGrid.
     */
    class FlexGridFilter extends ComponentBase {
        _parentInCtor: boolean;
        constructor(props: any);
    }
}
declare var Wj: typeof wijmo.react;

