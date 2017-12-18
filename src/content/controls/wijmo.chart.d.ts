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
declare module wijmo.chart {
    /**
     * Class that represents a data point (with x and y coordinates).
     *
     * X and Y coordinates can be specified as a number or a Date object(time-based data).
     */
    class DataPoint {
        /**
         * Gets or sets X coordinate value of this @see:DataPoint.
         */
        x: any;
        /**
         * Gets or sets Y coordinate value of this @see:DataPoint.
         */
        y: any;
        /**
         * Initializes a new instance of the @see:DataPoint class.
         *
         * @param x X coordinate of the new DataPoint.
         * @param y Y coordinate of the new DataPoint.
         */
        constructor(x?: any, y?: any);
    }
    /**
     * Provides arguments for @see:Series events.
     */
    class RenderEventArgs extends CancelEventArgs {
        _engine: IRenderEngine;
        /**
         * Initializes a new instance of the @see:RenderEventArgs class.
         *
         * @param engine (@see:IRenderEngine) The rendering engine to use.
         */
        constructor(engine: IRenderEngine);
        /**
         * Gets the @see:IRenderEngine object to use for rendering the chart elements.
         */
        readonly engine: IRenderEngine;
    }
    /**
     * Provides arguments for @see:Series rendering event.
     */
    class SeriesRenderingEventArgs extends RenderEventArgs {
        _index: number;
        _count: number;
        /**
         * Initializes a new instance of the @see:SeriesRenderingEventArgs class.
         *
         * @param engine (@see:IRenderEngine) The rendering engine to use.
         * @param index The index of the series to render.
         * @param count Total number of the series to render.
         */
        constructor(engine: IRenderEngine, index: number, count: number);
        /**
         * Gets the index of the series to render.
         */
        readonly index: number;
        /**
         * Gets total number of series to render.
         */
        readonly count: number;
    }
    /**
     * Specifies the format of the image with embed base64-encoded binary data.
     */
    enum ImageFormat {
        /** Gets the W3C Portable Network Graphics (PNG) image format. */
        Png = 0,
        /** Gets the Joint Photographic Experts Group (JPEG) image format. */
        Jpeg = 1,
        /** Gets the Scalable Vector Graphics(SVG) image format. */
        Svg = 2,
    }
    /**
     * The @see:FlexChartBase control from which the FlexChart and FlexPie derive.
     */
    class FlexChartBase extends Control implements _IPalette {
        static _WIDTH: number;
        static _HEIGHT: number;
        static _SELECTION_THRESHOLD: number;
        _items: any;
        _cv: wijmo.collections.ICollectionView;
        protected _palette: string[];
        private _selectionMode;
        private _itemFormatter;
        _selectionIndex: number;
        _options: any;
        private _plotMargin;
        _header: string;
        _headerStyle: any;
        _footer: string;
        _footerStyle: any;
        _legend: Legend;
        _defPalette: string[];
        _notifyCurrentChanged: boolean;
        _rectFooter: Rect;
        _rectHeader: Rect;
        _rectChart: Rect;
        _rectLegend: Rect;
        _currentRenderEngine: IRenderEngine;
        _legendHost: SVGGElement;
        private _needBind;
        private _toShow;
        private _toHide;
        _tooltip: ChartTooltip;
        _chartRectId: string;
        /**
         * Gets or sets the array or @see:ICollectionView object that contains the data used to create the chart.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object that contains the chart data.
         */
        readonly collectionView: wijmo.collections.ICollectionView;
        /**
         * Gets or sets an array of default colors to use for displaying each series.
         *
         * The array contains strings that represents CSS colors. For example:
         * <pre>
         * // use colors specified by name
         * chart.palette = ['red', 'green', 'blue'];
         * // or use colors specified as rgba-values
         * chart.palette = [
         *   'rgba(255,0,0,1)',
         *   'rgba(255,0,0,0.8)',
         *   'rgba(255,0,0,0.6)',
         *   'rgba(255,0,0,0.4)'];
         * </pre>
         *
         * There is a set of predefined palettes in the @see:Palettes class that you can use, for example:
         * <pre>
         * chart.palette = wijmo.chart.Palettes.coral;
         * </pre>
         */
        palette: string[];
        /**
         * Gets or sets the plot margin in pixels.
         *
         * The plot margin represents the area between the edges of the control
         * and the plot area.
         *
         * By default, this value is calculated automatically based on the space
         * required by the axis labels, but you can override it if you want
         * to control the precise position of the plot area within the control
         * (for example, when aligning multiple chart controls on a page).
         *
         * You may set this property to a numeric value or to a CSS-style
         * margin specification. For example:
         *
         * <pre>
         * // set the plot margin to 20 pixels on all sides
         * chart.plotMargin = 20;
         * // set the plot margin for top, right, bottom, left sides
         * chart.plotMargin = '10 15 20 25';
         * // set the plot margin for top/bottom (10px) and left/right (20px)
         * chart.plotMargin = '10 20';
         * </pre>
         */
        plotMargin: any;
        /**
         * Gets or sets the chart legend.
         */
        legend: Legend;
        /**
         * Gets or sets the text displayed in the chart header.
         */
        header: string;
        /**
         * Gets or sets the text displayed in the chart footer.
         */
        footer: string;
        /**
         * Gets or sets the style of the chart header.
         */
        headerStyle: any;
        /**
         * Gets or sets the style of the chart footer.
         */
        footerStyle: any;
        /**
         * Gets or sets an enumerated value indicating whether or what is
         * selected when the user clicks the chart.
         */
        selectionMode: SelectionMode;
        /**
         * Gets or sets the item formatter function that allows you to customize
         * the appearance of data points. See the Explorer sample's <a target="_blank"
         * href="http://demos.wijmo.com/5/Angular/Explorer/Explorer/#/chart/itemFormatter">
         * Item Formatter</a> for a demonstration.
         */
        itemFormatter: Function;
        /**
         * Occurs before the chart starts rendering data.
         */
        rendering: Event;
        /**
         * Occurs after the chart finishes rendering.
         */
        rendered: Event;
        /**
         * Raises the @see:rendered event.
         *
         * @param e The @see:RenderEventArgs object used to render the chart.
         */
        onRendered(e: RenderEventArgs): void;
        /**
         * Raises the @see:rendering event.
         *
         * @param e The @see:RenderEventArgs object used to render the chart.
         */
        onRendering(e: RenderEventArgs): void;
        /**
         * Save chart to an image file. The function doesn't work in IE browsers.
         * Add wijmo.chart.render module on page to support chart export in IE browsers.
         *
         * @param filename The filename for the exported image file including extension.
         * Supported types are PNG, JPEG and SVG.
         */
        saveImageToFile(filename: string): void;
        /**
         * Save chart to image data url. The function doesn't work in IE browsers.
         * Add wijmo.chart.render module on page to support chart export in IE browsers.
         *
         * @param format The @see:ImageFormat for the exported image.
         * @param done A function to be called after data url is generated. The function gets passed the data url as its argument.
         */
        saveImageToDataUrl(format: ImageFormat, done: Function): void;
        _exportToImage(extension: any, processDataURI: any): void;
        /**
         * Refreshes the chart.
         *
         * @param fullUpdate A value indicating whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        /**
         * Occurs after the selection changes, whether programmatically
         * or when the user clicks the chart. This is useful, for example,
         * when you want to update details in a textbox showing the current
         * selection.
         */
        selectionChanged: Event;
        /**
         * Raises the @see:selectionChanged event.
         */
        onSelectionChanged(e?: EventArgs): void;
        onLostFocus(e?: EventArgs): void;
        private _cvCollectionChanged(sender, e);
        private _cvCurrentChanged(sender, e);
        /**
        * Gets a color from the palette by index.
        *
        * @param index The index of the color in the palette.
        */
        _getColor(index: number): string;
        /**
         * Gets a lighter color from the palette by index.
         *
         * @param index The index of the color in the palette.
         */
        _getColorLight(index: number): string;
        /**
         * Gets a lighter color from the palette by color string.
         *
         * @param color The color in the palette.
         */
        _getLightColor(color: string): string;
        _bindChart(): void;
        _clearCachedValues(): void;
        _render(engine: IRenderEngine, applyElement?: boolean): void;
        _renderHeader(engine: IRenderEngine, rect: Rect): void;
        _renderFooter(engine: IRenderEngine, rect: Rect): void;
        _renderLegends(engine: IRenderEngine, rect: Rect): void;
        _prepareRender(): void;
        _renderChart(engine: IRenderEngine, rect: Rect, applyElement: boolean): void;
        _performBind(): void;
        _getDesiredLegendSize(engine: IRenderEngine, isVertical: boolean, width: number, height: number): Size;
        _renderLegend(engine: IRenderEngine, pt: Point, areas: any[], isVertical: boolean, width: number, height: number): void;
        _getHitTestItem(index: number): any;
        _getHitTestValue(index: number): any;
        _getHitTestLabel(index: number): any;
        _refreshChart(): void;
        _drawTitle(engine: IRenderEngine, rect: Rect, title: string, style: any, isFooter: boolean): Rect;
        /**
         * Converts page coordinates to control coordinates.
         *
         * @param pt The point of page coordinates or x value
             of page coordinates.
         * @param y The y value of page coordinates. Its value
             should be a number, if pt is a number type. However,
             the y parameter is optional when pt is Point type.
         */
        pageToControl(pt: any, y?: number): Point;
        _toControl(pt: any, y?: number): Point;
        _highlightItems(items: any, cls: any, selected: boolean): void;
        _parseMargin(value: any): any;
        _showToolTip(content: any, rect: any): void;
        _hideToolTip(): void;
        private _clearTimeouts();
        _getHostOffset(): Point;
        _getHostSize(): Size;
        _getHostComputedStyle(): CSSStyleDeclaration;
        _find(elem: SVGElement, names: string[]): any[];
    }
    interface _IHitArea {
        contains(pt: Point): boolean;
        distance(pt: Point): number;
        tag: any;
    }
    class _KeyWords {
        private _keys;
        constructor();
        replace(s: string, ht: HitTestInfo): string;
        getValue(key: string, ht: HitTestInfo, fmt?: string): string;
    }
}

declare module wijmo.chart {
    /**
     * The @see:FlexPie control provides pie and doughnut charts with selectable
     * slices.
     *
     * To use the @see:FlexPie control, set the @see:FlexPie.itemsSource property
     * to an array containing the data and use the @see:FlexPie.binding and
     * @see:FlexPie.bindingName properties to set the properties that contain
     * the item values and names.
     */
    class FlexPie extends FlexChartBase {
        private static _MARGIN;
        private _binding;
        private _bindingName;
        _areas: any[];
        private _keywords;
        private _startAngle;
        private _innerRadius;
        private _offset;
        private _reversed;
        private _isAnimated;
        private _selectedItemPosition;
        private _selectedItemOffset;
        private _pieGroup;
        private _rotationAngle;
        private _center;
        private _radius;
        private _selectedOffset;
        private _selectedIndex;
        private _angles;
        private _selectionAnimationID;
        private _colRowLens;
        private _lbl;
        _values: number[];
        _labels: string[];
        _pels: any[];
        _sum: number;
        /**
         * Initializes a new instance of the @see:FlexPie class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options A Javascript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the name of the property that contains the chart values.
         */
        binding: string;
        /**
         * Gets or sets the name of the property that contains the name of the data items.
         */
        bindingName: string;
        /**
         * Gets or sets the starting angle for the pie slices, in degrees.
         *
         * Angles are measured clockwise, starting at the 9 o'clock position.
         */
        startAngle: number;
        /**
         * Gets or sets the offset of the slices from the pie center.
         *
         * The offset is measured as a fraction of the pie radius.
         */
        offset: number;
        /**
         * Gets or sets the size of the pie's inner radius.
         *
         * The inner radius is measured as a fraction of the pie radius.
         *
         * The default value for this property is zero, which creates
         * a pie. Setting this property to values greater than zero
         * creates pies with a hole in the middle, also known as
         * doughnut charts.
         */
        innerRadius: number;
        /**
         * Gets or sets a value that determines whether angles are reversed
         * (counter-clockwise).
         *
         * The default value is false, which causes angles to be measured in
         * the clockwise direction.
         */
        reversed: boolean;
        /**
         * Gets or sets the position of the selected slice.
         *
         * Setting this property to a value other than 'None' causes
         * the pie to rotate when an item is selected.
         *
         * Note that in order to select slices by clicking the chart,
         * you must set the @see:selectionMode property to "Point".
         */
        selectedItemPosition: wijmo.chart.Position;
        /**
         * Gets or sets the offset of the selected slice from the pie center.
         *
         * Offsets are measured as a fraction of the pie radius.
         */
        selectedItemOffset: number;
        /**
         * Gets or sets a value indicating whether to use animation when items are selected.
         *
         * See also the @see:selectedItemPosition and @see:selectionMode
         * properties.
         */
        isAnimated: boolean;
        /**
         * Gets the chart's @see:Tooltip.
         */
        readonly tooltip: ChartTooltip;
        /**
         * Gets or sets the point data label.
         */
        dataLabel: PieDataLabel;
        /**
         * Gets or sets the index of the selected slice.
         */
        selectedIndex: number;
        _getLabelsForLegend(): string[];
        /**
         * Gets a @see:wijmo.chart.HitTestInfo object with information about the specified point.
         *
         * @param pt The point to investigate, in window coordinates.
         * @param y The Y coordinate of the point (if the first parameter is a number).
         * @return A @see:wijmo.chart.HitTestInfo object containing information about the point.
         */
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
        _performBind(): void;
        _initData(): void;
        _getBindData(item: any, values: any, labels: any, binding: any, bindingName: any): number;
        _render(engine: IRenderEngine, applyElement?: boolean): void;
        _prepareRender(): void;
        _renderChart(engine: IRenderEngine, rect: Rect, applyElement: boolean): void;
        _getDesiredLegendSize(engine: IRenderEngine, isVertical: boolean, width: number, height: number): Size;
        _renderLegend(engine: IRenderEngine, pos: Point, areas: any[], isVertical: boolean, width: number, height: number): void;
        _renderData(engine: IRenderEngine, rect: Rect, g: any): void;
        _renderPie(engine: any, radius: any, innerRadius: any, startAngle: any, offset: any): void;
        _getCenter(): Point;
        _renderSlices(engine: any, values: any, sum: any, radius: any, innerRadius: any, startAngle: any, totalSweep: any, offset: any): void;
        _renderSlice(engine: any, cx: any, cy: any, currentAngle: any, idx: any, radius: any, innerRadius: any, startAngle: any, sweep: any, totalSweep: any): void;
        _renderLabels(engine: IRenderEngine): void;
        _drawSlice(engine: IRenderEngine, i: number, reversed: boolean, cx: number, cy: number, r: number, irad: number, angle: number, sweep: number): void;
        _measureLegendItem(engine: IRenderEngine, name: string): Size;
        _drawLegendItem(engine: IRenderEngine, rect: Rect, i: number, name: string): void;
        private _getLabelContent(ht, content);
        private _select(pointIndex, animate?);
        _highlightCurrent(): void;
        _highlight(selected: boolean, pointIndex: number, animate?: boolean): void;
        _animateSelectionAngle(target: number, duration: number): void;
        _getHitTestItem(index: number): any;
        _getHitTestValue(index: number): number;
        _getHitTestLabel(index: number): string;
    }
    interface _ISegment {
        center: Point;
        radius: number;
        langle: number;
        angle: number;
        sweep: number;
    }
    class _PieSegment implements _IHitArea, _ISegment {
        private _center;
        private _angle;
        private _sweep;
        private _radius;
        private _radius2;
        private _isFull;
        private _originAngle;
        private _originSweep;
        private _startAngle;
        constructor(center: Point, radius: number, angle: number, sweep: number, startAngle?: number);
        contains(pt: Point): boolean;
        distance(pt: Point): number;
        readonly center: Point;
        readonly radius: number;
        readonly langle: number;
        readonly angle: number;
        readonly sweep: number;
        tag: any;
    }
    class _DonutSegment implements _IHitArea, _ISegment {
        private _center;
        private _angle;
        private _sweep;
        private _originAngle;
        private _originSweep;
        private _radius;
        private _radius2;
        private _iradius;
        private _iradius2;
        private _isFull;
        private _startAngle;
        constructor(center: Point, radius: number, innerRadius: number, angle: number, sweep: number, startAngle?: number);
        contains(pt: Point): boolean;
        distance(pt: Point): number;
        readonly center: Point;
        readonly radius: number;
        readonly langle: number;
        readonly angle: number;
        readonly sweep: number;
        readonly innerRadius: number;
        tag: any;
    }
}

declare module wijmo.chart {
    /**
     * Specifies whether and how to stack the chart's data values.
     */
    enum Stacking {
        /** No stacking. Each series object is plotted independently. */
        None = 0,
        /** Stacked charts show how each value contributes to the total. */
        Stacked = 1,
        /** 100% stacked charts show how each value contributes to the total with the relative size of
         * each series representing its contribution to the total. */
        Stacked100pc = 2,
    }
    /**
     * Specifies what is selected when the user clicks the chart.
     */
    enum SelectionMode {
        /** Select neither series nor data points when the user clicks the chart. */
        None = 0,
        /** Select the whole @see:Series when the user clicks it on the chart. */
        Series = 1,
        /** Select the data point when the user clicks it on the chart. Since Line, Area, Spline,
         * and SplineArea charts do not render individual data points, nothing is selected with this
         * setting on those chart types. */
        Point = 2,
    }
    /**
     * The core charting control for @see:FlexChart.
     *
     */
    class FlexChartCore extends FlexChartBase {
        static _CSS_AXIS_X: string;
        static _CSS_AXIS_Y: string;
        static _CSS_LINE: string;
        static _CSS_GRIDLINE: string;
        static _CSS_TICK: string;
        static _CSS_GRIDLINE_MINOR: string;
        static _CSS_TICK_MINOR: string;
        static _CSS_LABEL: string;
        static _CSS_LEGEND: string;
        static _CSS_HEADER: string;
        static _CSS_FOOTER: string;
        static _CSS_TITLE: string;
        static _CSS_SELECTION: string;
        static _CSS_PLOT_AREA: string;
        static _FG: string;
        private _series;
        private _axes;
        private _pareas;
        private _axisX;
        private _axisY;
        private _selection;
        private _interpolateNulls;
        private _legendToggle;
        private _symbolSize;
        private _dataInfo;
        _plotRect: Rect;
        private __barPlotter;
        private __linePlotter;
        private __areaPlotter;
        private __bubblePlotter;
        private __financePlotter;
        private __funnelPlotter;
        private _plotters;
        private _binding;
        private _bindingX;
        _rotated: boolean;
        _stacking: Stacking;
        private _lbl;
        _xlabels: string[];
        _xvals: number[];
        _xDataType: DataType;
        private _hitTester;
        private _lblAreas;
        private _keywords;
        private _curPlotter;
        private _colRowLens;
        _bindingSeparator: string;
        /**
         * Initializes a new instance of the @see:FlexChart class.
         *
         * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options A JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        _initAxes(): void;
        /**
         * Gets the collection of @see:Series objects.
         */
        readonly series: wijmo.collections.ObservableArray;
        /**
         * Gets the collection of @see:Axis objects.
         */
        readonly axes: wijmo.collections.ObservableArray;
        /**
         * Gets or sets the main X axis.
         */
        axisX: Axis;
        /**
         * Gets or sets the main Y axis.
         */
        axisY: Axis;
        /**
         * Gets the collection of @see:PlotArea objects.
         */
        readonly plotAreas: PlotAreaCollection;
        /**
         * Gets or sets the name of the property that contains the Y values.
         */
        binding: string;
        /**
         * Gets or sets the name of the property that contains the X data values.
         */
        bindingX: string;
        /**
         * Gets or sets the size of the symbols used for all Series objects in this @see:FlexChart.
         *
         * This property may be overridden by the symbolSize property on each @see:Series object.
         */
        symbolSize: number;
        /**
         * Gets or sets a value that determines whether to interpolate
         * null values in the data.
         *
         * If true, the chart interpolates the value of any missing data
         * based on neighboring points. If false, it leaves a break in
         * lines and areas at the points with null values.
         */
        interpolateNulls: boolean;
        /**
         * Gets or sets a value indicating whether clicking legend items toggles the
         * series visibility in the chart.
         */
        legendToggle: boolean;
        /**
         * Gets the chart @see:Tooltip object.
         *
         * The tooltip content is generated using a template that may contain any of the following
         * parameters:
         *
         * <ul>
         *  <li><b>propertyName</b>:    Any property of the data object represented by the point.</li>
         *  <li><b>seriesName</b>:      Name of the series that contains the data point (FlexChart only).</li>
         *  <li><b>pointIndex</b>:      Index of the data point.</li>
         *  <li><b>value</b>:           <b>Value</b> of the data point (y-value for @see:FlexChart, item value for @see:FlexPie).</li>
         *  <li><b>x</b>:               <b>x</b>-value of the data point (FlexChart only).</li>
         *  <li><b>y</b>:               <b>y</b>-value of the data point (FlexChart only).</li>
         *  <li><b>name</b>:            <b>Name</b> of the data point (x-value for @see:FlexChart or legend entry for @see:FlexPie).</li>
         * </ul>
         *
         * To modify the template, assign a new value to the tooltip's content property.
         * For example:
         *
         * <pre>
         * chart.tooltip.content = '&lt;b&gt;{seriesName}&lt;/b&gt; ' +
         *    '&lt;img src="resources/{x}.png"/&gt;&lt;br/&gt;{y}';
         * </pre>
         *
         * You can disable chart tooltips by setting the template to an empty string.
         *
         * You can also use the @see:tooltip property to customize tooltip parameters
         * such as @see:Tooltip.showDelay and @see:Tooltip.hideDelay:
         *
         * <pre>
         * chart.tooltip.showDelay = 1000;
         * </pre>
         *
         * See @see:ChartTooltip properties for more details and options.
         */
        readonly tooltip: ChartTooltip;
        /**
         * Gets or sets the point data label.
         */
        dataLabel: DataLabel;
        /**
         * Gets or sets the selected chart series.
         */
        selection: SeriesBase;
        /**
         * Occurs when the series visibility changes, for example when the legendToggle
         * property is set to true and the user clicks the legend.
        */
        seriesVisibilityChanged: Event;
        /**
         * Raises the @see:seriesVisibilityChanged event.
         *
         * @param e The @see:SeriesEventArgs object that contains the event data.
         */
        onSeriesVisibilityChanged(e: SeriesEventArgs): void;
        /**
         * Gets a @see:wijmo.chart.HitTestInfo object with information about the specified point.
         *
         * @param pt The point to investigate, in window coordinates.
         * @param y The Y coordinate of the point (if the first parameter is a number).
         * @return A @see:wijmo.chart.HitTestInfo object with information about the point.
         */
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
        /**
         * Converts a @see:Point from control coordinates to chart data coordinates.
         *
         * @param pt The point to convert, in control coordinates.
         * @param y The Y coordinate of the point (if the first parameter is a number).
         * @return The point in chart data coordinates.
         */
        pointToData(pt: any, y?: number): Point;
        /**
         * Converts a @see:Point from data coordinates to control coordinates.
         *
         * @param pt @see:Point in data coordinates, or X coordinate of a point in data coordinates.
         * @param y Y coordinate of the point (if the first parameter is a number).
         * @return The @see:Point in control coordinates.
         */
        dataToPoint(pt: any, y?: number): Point;
        _copy(key: string, value: any): boolean;
        _createSeries(): SeriesBase;
        _clearCachedValues(): void;
        _performBind(): void;
        _hitTestSeries(pt: Point, seriesIndex: number): HitTestInfo;
        _hitTestData(pt: any): HitTestInfo;
        _hitTestLabels(pt: Point): _IHitArea;
        private static _dist2(p1, p2);
        static _dist(p0: Point, p1: Point, p2: Point): number;
        static _distToSegmentSquared(p: Point, v: Point, w: Point): number;
        _isRotated(): boolean;
        _plotrectId: string;
        _getChartType(): ChartType;
        _prepareRender(): void;
        _renderChart(engine: IRenderEngine, rect: Rect, applyElement: boolean): void;
        _getDesiredLegendSize(engine: IRenderEngine, isVertical: boolean, width: number, height: number): Size;
        _renderLegend(engine: IRenderEngine, pos: Point, areas: any[], isVertical: boolean, width: number, height: number): void;
        private _renderLegendElements(engine, series, pos, p, areas, isVertical, width, height, colRowLen);
        private _renderLabels(engine);
        private _getAxes();
        private _clearPlotters();
        _initPlotter(plotter: _IPlotter): void;
        private readonly _barPlotter;
        private readonly _linePlotter;
        private readonly _areaPlotter;
        private readonly _bubblePlotter;
        private readonly _financePlotter;
        private readonly _funnelPlotter;
        _getPlotter(series: SeriesBase): _IPlotter;
        _layout(rect: Rect, size: Size, engine: IRenderEngine): void;
        private _layoutSingle(rect, size, engine);
        private _layoutMultiple(rect, size, engine);
        private _convertX(x, left, right);
        private _convertY(y, top, bottom);
        _getLabelContent(ht: HitTestInfo, content: any): string;
        private _select(newSelection, pointIndex);
        private _highlightCurrent();
        private _highlight(series, selected, pointIndex);
        _updateAuxAxes(axes: Axis[], isRotated: boolean): void;
        static _contains(rect: Rect, pt: Point): boolean;
        static _intersects(rect1: Rect, rect2: Rect): boolean;
        static _epoch: number;
        static _msPerDay: number;
        static _toOADate(date: Date): number;
        static _fromOADate(val: number): Date;
        static _renderText(engine: IRenderEngine, text: string, pos: Point, halign: any, valign: any, className?: string, groupName?: string, style?: any, test?: any): Rect;
        static _renderRotatedText(engine: IRenderEngine, text: string, pos: Point, halign: any, valign: any, center: Point, angle: number, className: string, groupClassName?: string, style?: any): void;
    }
    /**
     * Analyzes chart data.
     */
    class _DataInfo {
        private minY;
        private maxY;
        private minX;
        private maxX;
        private minXp;
        private minYp;
        private dataTypeX;
        private dataTypeY;
        private stackAbs;
        private _xvals;
        private dx;
        constructor();
        analyse(seriesList: any, isRotated: boolean, stacking: Stacking, xvals: Array<number>, logx: boolean, logy: boolean): void;
        _parseYVal(val: any, xval: any, custom: any, stackAbs: any, stackPos: any, stackNeg: any): void;
        getMinY(): number;
        getMaxY(): number;
        getMinX(): number;
        getMaxX(): number;
        getMinXp(): number;
        getMinYp(): number;
        getDeltaX(): number;
        getDataTypeX(): DataType;
        getDataTypeY(): DataType;
        getStackedAbsSum(key: number): number;
        getXVals(): Array<number>;
        static isValid(value: number): boolean;
    }
    /**
     * Represents the chart palette.
     */
    interface _IPalette {
        _getColor(i: number): string;
        _getColorLight(i: number): string;
    }
    /**
     * Extends the @see:Tooltip class to provide chart tooltips.
     */
    class ChartTooltip extends Tooltip {
        private _content;
        private _threshold;
        /**
         * Initializes a new instance of the @see:ChartTooltip class.
         */
        constructor();
        /**
         * Gets or sets the tooltip content.
         *
         * The tooltip content can be specified as a string or as a function that
         * takes a @see:wijmo.chart.HitTestInfo object as a parameter.
         *
         * When the tooltip content is a string, it may contain any of the following
         * parameters:
         *
         * <ul>
         *  <li><b>propertyName</b>:    Any property of the data object represented by the point.</li>
         *  <li><b>seriesName</b>:      Name of the series that contains the data point (FlexChart only).</li>
         *  <li><b>pointIndex</b>:      Index of the data point.</li>
         *  <li><b>value</b>:           <b>Value</b> of the data point (y-value for @see:FlexChart, item value for @see:FlexPie).</li>
         *  <li><b>x</b>:               <b>x</b>-value of the data point (FlexChart only).</li>
         *  <li><b>y</b>:               <b>y</b>-value of the data point (FlexChart only).</li>
         *  <li><b>name</b>:            <b>Name</b> of the data point (x-value for @see:FlexChart or legend entry for @see:FlexPie).</li>
         * </ul>
         *
         * Parameters must be enclosed in single curly brackets. For example:
         *
         * <pre>
         *   // 'country' and 'sales' are properties of the data object.
         *   chart.tooltip.content = '{country}, sales:{sales}';
         * </pre>
         *
         * The next example shows how to set the tooltip content using a function.
         *
         *  <pre>
         *   // Set the tooltip content
         *   chart.tooltip.content = function (ht) {
         *     return ht.name + ":" + ht.value.toFixed();
         *   }
         * </pre>
         */
        content: any;
        /**
         * Gets or sets the maximum distance from the element to display the tooltip.
         */
        threshold: number;
    }
}

/**
 * Defines the @see:FlexChart control and its associated classes.
 *
 * The example below creates a @see:FlexChart control and binds it to a data array.
 * The chart has three series, each corresponding to a property in the objects
 * contained in the source array.
 *
 * The last series in the example uses the @see:Series.chartType property to
 * override the default chart type used
 * by the other series.
 *
 * @fiddle:6GB66
 */
declare module wijmo.chart {
    /**
     * Specifies the chart type.
     */
    enum ChartType {
        /** Shows vertical bars and allows you to compare values of items across categories. */
        Column = 0,
        /** Shows horizontal bars. */
        Bar = 1,
        /** Shows patterns within the data using X and Y coordinates. */
        Scatter = 2,
        /** Shows trends over a period of time or across categories. */
        Line = 3,
        /** Shows a line chart with a symbol on each data point. */
        LineSymbols = 4,
        /** Shows a line chart with the area below the line filled with color. */
        Area = 5,
        /** Shows a Scatter chart with a third data value that determines the
         * size of the symbol. The data for this chart type can be defined using the
         *  @see:FlexChart or @see:Series <b>binding</b> property as a comma separated value in the
         * following format: "yProperty, bubbleSizeProperty".*/
        Bubble = 6,
        /** Presents items with high, low, open, and close values.
         * The size of the wick line is determined by the High and Low values,
         * while the size of the bar is determined by the Open and Close values.
         * The bar is displayed using different colors, depending on
         * whether the close value is higher or lower than the open value.
         * The data for this chart type can be defined using the
         *  @see:FlexChart or @see:Series <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty". */
        Candlestick = 7,
        /** Displays the same information as a candlestick chart, except that opening
         * values are displayed using lines to the left, while lines to the right
         * indicate closing values.  The data for this chart type can be defined using the
         *  @see:FlexChart or @see:Series <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty". */
        HighLowOpenClose = 8,
        /** Displays a line chart that plots curves rather than angled lines through the
        * data points. */
        Spline = 9,
        /** Displays a spline chart with symbols on each data point. */
        SplineSymbols = 10,
        /** Displays a spline chart with the area below the line filled with color. */
        SplineArea = 11,
        /** Displays a funnel chart, usually representing stages in a process such as a sales pipeline. */
        Funnel = 12,
    }
    /**
     * The @see:FlexChart control provides a powerful and flexible way to visualize
     * data.
     *
     * You can use the @see:FlexChart control to create charts that display data in
     * several formats, including bar, line, symbol, bubble, and others.
     *
     * To use the @see:FlexChart control, set the @see:FlexChart.itemsSource property
     * to an array containing the data objects, then add one or more @see:Series objects
     * to the @see:FlexChart.series property.
     *
     * Use the @see:FlexChart.chartType property to define the @see:ChartType used as
     * a default for all series. You may override the chart type for each series by
     * setting the @see:Series.chartType property on the members of the
     * @see:FlexChart.series array.
     *
     * @fiddle:6GB66
     */
    class FlexChart extends FlexChartCore {
        private _chartType;
        /**
         * Initializes a new instance of the @see:FlexChart class.
         *
         * @param element The DOM element that will host the control,
         * or a selector for the host element (e.g. '#theCtrl').
         * @param options A JavaScript object containing initialization data
         * for the control.
         */
        constructor(element: any, options?: any);
        _getChartType(): ChartType;
        /**
         * Gets or sets the type of chart to create.
         */
        chartType: ChartType;
        /**
         * Gets or sets a value indicating whether to flip the axes so that
         * X becomes vertical and Y becomes horizontal.
         */
        rotated: boolean;
        /**
         * Gets or sets a value that determines whether and how the series objects are stacked.
         */
        stacking: Stacking;
        /**
         * Gets or sets various chart options.
         *
         * The following options are supported:
         *
         * <b>bubble.maxSize</b>: Specifies the maximum size
         * of symbols in the Bubble chart. The default value is 30 pixels.
         *
         * <b>bubble.minSize</b>: Specifies the minimum size
         * of symbols in the Bubble chart. The default value is 5 pixels.
         *
         * <pre>chart.options = {
         *   bubble: { minSize: 5, maxSize: 30 }
         * }</pre>
         *
         *
         * <b>funnel.neckWidth</b>: Specifies the neck width as a percentage for the Funnel chart.
         * The default value is 0.2.
         *
         * <b>funnel.neckHeight</b>: Specifies the neck height as a percentage for the Funnel chart.
         * The default value is 0.
         *
         * <b>funnel.type</b>: Specifies the type of Funnel chart. It should be 'rectangle' or 'default'.
         * neckWidth and neckHeight don't work if type is set to rectangle.
         *
         * <pre>chart.options = {
         *   funnel: { neckWidth: 0.3, neckHeight: 0.3, type: 'rectangle' }
         * }</pre>

         * <b>groupWidth</b>: Specifies the group width for the Column charts,
         * or the group height for the Bar charts. The group width can be specified
         * in pixels or as percentage of the available space. The default value is '70%'.
         *
         * <pre>chart.options = {
         *   groupWidth : 50; // 50 pixels
         * }
         * chart.options = {
         *   groupWidth : '100%'; // 100% pixels
         * }</pre>
         */
        options: any;
    }
}

declare module wijmo.chart {
    /**
     * Specifies the position of an axis or legend on the chart.
     */
    enum Position {
        /** The item is not visible. */
        None = 0,
        /** The item appears to the left of the chart. */
        Left = 1,
        /** The item appears above the chart. */
        Top = 2,
        /** The item appears to the right of the chart. */
        Right = 3,
        /** The item appears below the chart. */
        Bottom = 4,
        /** The item is positioned automatically. */
        Auto = 5,
    }
    /**
     * Specifies the axis type.
     */
    enum AxisType {
        /** Category axis (normally horizontal). */
        X = 0,
        /** Value axis (normally vertical). */
        Y = 1,
    }
    /**
     * Specifies how to handle overlapping labels.
     */
    enum OverlappingLabels {
        /**
         * Hide overlapping labels.
         */
        Auto = 0,
        /**
         * Show all labels, including overlapping ones.
         */
        Show = 1,
    }
    /**
     * Axis interface.
     */
    interface _IAxis {
        actualMin: number;
        actualMax: number;
        convert(val: number): number;
    }
    /**
     * Specifies whether and where the axis tick marks appear.
     */
    enum TickMark {
        /** No tick marks appear. */
        None = 0,
        /** Tick marks appear outside the plot area. */
        Outside = 1,
        /** Tick marks appear inside the plot area. */
        Inside = 2,
        /** Tick marks cross the axis. */
        Cross = 3,
    }
    /**
     * Represents an axis in the chart.
     */
    class Axis implements _IAxis {
        _GRIDLINE_WIDTH: number;
        _LINE_WIDTH: number;
        _TICK_WIDTH: number;
        _TICK_HEIGHT: number;
        _TICK_OVERLAP: number;
        _TICK_LABEL_DISTANCE: number;
        private static MAX_MAJOR;
        private static MAX_MINOR;
        _chart: FlexChartCore;
        private _type;
        private _min;
        private _max;
        private _position;
        private _majorUnit;
        private _minorUnit;
        private _majorGrid;
        private _minorGrid;
        private _title;
        private _labelStyle;
        private _reversed;
        private _format;
        private _actualMin;
        private _actualMax;
        _axisType: AxisType;
        private _majorTickMarks;
        private _minorTickMarks;
        private _logBase;
        private _labels;
        private _labelAngle;
        private _labelAlign;
        private _axisLine;
        _plotrect: Rect;
        private _szTitle;
        _isTimeAxis: boolean;
        _lbls: string[];
        _values: number[];
        private _rects;
        private _name;
        private _origin;
        private _overlap;
        private _items;
        private _cv;
        private _binding;
        private _ifmt;
        private _tfmt;
        private static _id;
        private __uniqueId;
        private _parea;
        private _labelPadding;
        _axrect: Rect;
        _desiredSize: Size;
        _annoSize: Size;
        _hasOrigin: boolean;
        _hostElement: SVGGElement;
        _vals: any;
        /**
         * Initializes a new instance of the @see:Axis class.
         *
         * @param position The position of the axis on the chart.
         */
        constructor(position?: Position);
        /**
         * Gets the axis host element.
         */
        readonly hostElement: SVGGElement;
        /**
         * Gets the actual axis minimum.
         *
         * It returns a number or a Date object (for time-based data).
        */
        readonly actualMin: any;
        /**
        * Gets the actual axis maximum.
        *
        * It returns a number or a Date object (for time-based data).
        */
        readonly actualMax: any;
        /**
         * Gets or sets the minimum value shown on the axis.
         *
         * If not set, the minimum is calculated automatically.
         * The value can be a number or a Date object (for time-based data).
         */
        min: any;
        /**
         * Gets or sets the maximum value shown on the axis.
         *
         * If not set, the maximum is calculated automatically.
         * The value can be a number or a Date object (for time-based data).
         */
        max: any;
        /**
         * Gets or sets a value indicating whether the axis is
         * reversed (top to bottom or right to left).
         */
        reversed: boolean;
        /**
         * Gets or sets the position of the axis with respect to the plot area.
         */
        position: Position;
        /**
         * Gets or sets the number of units between axis labels.
         *
         * If the axis contains date values, then the units are
         * expressed in days.
         */
        majorUnit: number;
        /**
          * Gets or sets the number of units between minor axis ticks.
          *
          * If the axis contains date values, then the units are
          * expressed in days.
          */
        minorUnit: number;
        /**
         * Gets or sets the axis name.
         */
        name: string;
        /**
         * Gets or sets the title text shown next to the axis.
         */
        title: string;
        /**
         * Gets or sets the format string used for the axis labels
         * (see @see:Globalize).
         */
        format: string;
        /**
         * Gets or sets a value indicating whether the axis includes grid lines.
         */
        majorGrid: boolean;
        /**
         * Gets or sets the location of the axis tick marks.
         */
        majorTickMarks: TickMark;
        /**
         * Gets or sets a value indicating whether the axis includes minor grid lines.
         */
        minorGrid: boolean;
        /**
         * Gets or sets the location of the minor axis tick marks.
         */
        minorTickMarks: TickMark;
        /**
         * Gets or sets a value indicating whether the axis line is visible.
         */
        axisLine: boolean;
        /**
         * Gets or sets a value indicating whether the axis labels are visible.
         */
        labels: boolean;
        /**
         * Gets or sets the label alignment.
         *
         * By default the labels are centered. The supported values are 'left' and 'right
         * for x-axis and 'top' and 'bottom' for y-axis.
         */
        labelAlign: string;
        /**
         * Gets or sets the rotation angle of the axis labels.
         *
         * The angle is measured in degrees with valid values
         * ranging from -90 to 90.
         */
        labelAngle: number;
        /**
         * Gets or sets the value at which an axis crosses the perpendicular axis.
         **/
        origin: number;
        /**
         * Gets or sets a value indicating how to handle the overlapping axis labels.
         */
        overlappingLabels: OverlappingLabels;
        /**
         * Gets or sets the items source for the axis labels.
         *
         * Names of the properties are specified by the @see:wijmo.chart.Axis.binding property.
         *
         * For example:
         *
         * <pre>
         *  // default value for Axis.binding is 'value,text'
         *  chart.axisX.itemsSource = [ { value:1, text:'one' }, { value:2, text:'two' } ];
         * </pre>
         */
        itemsSource: any;
        /**
         * Gets or sets the comma-separated property names for the
         * @see:wijmo.chart.Axis.itemsSource property to use in axis labels.
         *
         * The first name specifies the value on the axis, the second represents the corresponding
         * axis label. The default value is 'value,text'.
         */
        binding: string;
        /**
         * Gets or sets the itemFormatter function for the axis labels.
         *
         * If specified, the function takes two parameters:
         * <ul>
         * <li><b>render engine</b>: The @see:wijmo.chart.IRenderEngine object to be used
         * in formatting the labels.</li>
         * <li><b>current label</b>: An object with the following properties:
         *   <ul>
         *     <li><b>value</b>: The value of the axis label to format.</li>
         *     <li><b>text</b>: The text to use in the label.</li>
         *     <li><b>pos</b>: The position in control coordinates at which
         *     the label is to be rendered.</li>
         *     <li><b>cls</b>: The CSS class to be applied to the label.</li>
         *   </ul></li>
         * </ul>
         *
         * The function returns the label parameters of labels for which
         * properties are modified.
         *
         * For example:
         * <pre>
         * chart.axisY.itemFormatter = function(engine, label) {
         *     if (label.val &gt; 5){
         *         engine.textFill = 'red'; // red text
         *         label.cls = null; // no default CSS
         *      }
         *     return label;
         * }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Gets or sets the logarithmic base of the axis.
         *
         * If the base is not specified the axis uses a linear scale.
         *
         * Use the @see:logBase property to spread data that is clustered
         * around the origin. This is common in several financial and economic
         * data sets.
         */
        logBase: number;
        /**
         * Gets or sets the plot area for the axis.
         */
        plotArea: PlotArea;
        /**
         * Gets or sets the label padding.
         */
        labelPadding: number;
        readonly _groupClass: string;
        /**
         * Occurs when the axis range changes.
         */
        rangeChanged: Event;
        /**
         * Raises the @see:rangeChanged event.
         */
        onRangeChanged(e?: EventArgs): void;
        _getPosition(): Position;
        _isOverlapped(engine: IRenderEngine, w: number, lblClass: string, axisType: AxisType): boolean;
        _actualAngle: number;
        /**
         * Calculates the axis height.
         *
         * @param engine Rendering engine.
         * @param maxw Max width.
         */
        _getHeight(engine: IRenderEngine, maxw: number): number;
        _updateAutoFormat(delta: number): number;
        _updateActualLimitsByChartType(labels: any, min: any, max: any): {
            min: any;
            max: any;
        };
        /**
         * Update the actual axis limits based on a specified data range.
         *
         * @param dataType Data type.
         * @param dataMin Data minimum.
         * @param dataMax Data maximum.
         * @param labels Category labels(category axis).
         * @param values Values(value axis).
         */
        _updateActualLimits(dataType: DataType, dataMin: number, dataMax: number, labels?: string[], values?: number[]): void;
        /**
         * Set the axis position.
         *
         * @param axisRect Axis rectangle.
         * @param plotRect Plot area rectangle.
         */
        _layout(axisRect: Rect, plotRect: Rect): void;
        _hasVisibileSeries(): boolean;
        /**
         * Render the axis.
         *
         * @param engine Rendering engine.
         */
        _render(engine: IRenderEngine): void;
        _renderLineAndTitle(engine: any): void;
        _renderMinor(engine: any, vals: any, isCategory: any): void;
        _renderRotatedText(engine: IRenderEngine, val: any, text: string, pos: Point, halign: any, valign: any, center: Point, angle: number, className: string, groupClassName?: string, style?: any): void;
        _getFormattedItem(engine: IRenderEngine, val: any, text: string, pos: Point, className: string): {
            val: any;
            text: string;
            pos: Point;
            cls: string;
        };
        _renderLabelsAndTicks(engine: any, index: any, val: any, sval: any, labelAngle: any, tickMarks: any, showLabel: any, t1: any, t2: any): boolean;
        _xCross(x: number): boolean;
        _createMinors(engine: IRenderEngine, vals: number[], isVert: boolean, isNear: boolean, isCategory: boolean): void;
        _renderMinors(engine: IRenderEngine, ticks: number[], isVert: boolean, isNear: boolean): void;
        _renderLabel(engine: IRenderEngine, val: number, text: string, pos: Point, ha: any, va: any, className?: string): boolean;
        private _renderRotatedLabel(engine, val, sval, lpt, ha, labelAngle, lblClass, isNear);
        private _getLabelAlign(isVert);
        _customConvert: Function;
        _customConvertBack: Function;
        /**
         * Converts the specified value from data to pixel coordinates.
         *
         * @param val The data value to convert.
         * @param maxValue The max value of the data, it's optional.
         * @param minValue The min value of the data, it's optional.
         */
        convert(val: number, maxValue?: number, minValue?: number): number;
        /**
         * Converts the specified value from pixel to data coordinates.
         *
         * @param val The pixel coordinates to convert back.
         */
        convertBack(val: number): number;
        /**
         * Gets the axis type.
         */
        readonly axisType: AxisType;
        _getMinNum(): number;
        _getMaxNum(): number;
        private _invalidate();
        private _cvCollectionChanged(sender, e);
        private _createLabels(start, len, delta, vals, lbls);
        private _createLogarithmicLabels(min, max, unit, vals, lbls, isLabels);
        _createTimeLabels(start: number, len: number, vals: number[], lbls: string[]): void;
        _formatValue(val: number): string;
        private _calcMajorUnit();
        private _getAnnoNumber(isVert);
        private _nicePrecision(range);
        private _niceTickNumber(x);
        private _niceNumber(x, exp, round);
        readonly _uniqueId: number;
    }
    /**
     * Represents a collection of @see:Axis objects in a @see:FlexChart control.
     */
    class AxisCollection extends wijmo.collections.ObservableArray {
        /**
         * Gets an axis by name.
         *
         * @param name The name of the axis to look for.
         * @return The axis object with the specified name, or null if not found.
         */
        getAxis(name: string): Axis;
        /**
         * Gets the index of an axis by name.
         *
         * @param name The name of the axis to look for.
         * @return The index of the axis with the specified name, or -1 if not found.
         */
        indexOf(name: string): number;
    }
}

declare module wijmo.chart {
    /**
     * Represents a plot area on the chart.
     *
     * The chart can have multiple plot areas with multiple axes.
     * To assign axis to plot area use <b>Axis.plotArea</b> property. For example:
     * <pre>
     *  // create a plot area
     *  var pa = new wijmo.chart.PlotArea();
     *  pa.row = 1;
     *  chart.plotAreas.push(pa);
     *  // create auxiliary y-axis
     *  var ay2 = new wijmo.chart.Axis(wijmo.chart.Position.Left);
     *  ay2.plotArea = pa; // attach axis to the plot area
     *  chart.axes.push(ay2);
     *  // plot first series along y-axis
     *  chart.series[0].axisY = ay2;
     * </pre>
     */
    class PlotArea {
        private _row;
        private _col;
        private _width;
        private _height;
        private _name;
        private _style;
        private _rect;
        _chart: FlexChartCore;
        /**
         * Initializes a new instance of the @see:PlotArea class.
         *
         * @param options Initialization options for the plot area.
         */
        constructor(options?: any);
        /**
         * Gets or sets the row index of plot area.
         * This determines the vertical position of the plot area
         * on the chart.
         */
        row: number;
        /**
         * Gets or sets the column index of plot area.
         * This determines the horizontal position of the plot
         * area on the chart.
         */
        column: number;
        /**
         * Gets or sets the plot area name.
         */
        name: string;
        /**
         * Gets or sets width of the plot area.
         *
         * The width can be specified as a number (in pixels) or
         * as a string in the format '{number}*' (star sizing).
         */
        width: any;
        /**
         * Gets or sets the height of the plot area.
         *
         * The height can be specified as a number (in pixels) or
         * as a string in the format '{number}*' (star sizing).
         */
        height: any;
        /**
         * Gets or sets the style of the plot area.
         *
         * Using <b>style</b> property, you can set appearance of the plot area.
         * For example:
         * <pre>
         *   pa.style = { fill: 'rgba(0,255,0,0.1)' };
         * </pre>
         */
        style: any;
        private _invalidate();
        _render(engine: IRenderEngine): void;
        _setPlotX(x: number, w: number): void;
        _setPlotY(y: number, h: number): void;
    }
    /**
     * Represents a collection of @see:PlotArea objects in a @see:FlexChartCore control.
     */
    class PlotAreaCollection extends wijmo.collections.ObservableArray {
        /**
         * Gets a plot area by name.
         *
         * @param name The name of the plot area to look for.
         * @return The axis object with the specified name, or null if not found.
         */
        getPlotArea(name: string): PlotArea;
        /**
         * Gets the index of a plot area by name.
         *
         * @param name The name of the plot area to look for.
         * @return The index of the plot area with the specified name, or -1 if not found.
         */
        indexOf(name: string): number;
        _getWidth(column: number): any;
        _getHeight(row: number): any;
        _calculateWidths(width: number, ncols: number): number[];
        _calculateHeights(height: number, nrows: number): number[];
        private _calculateLengths(width, ncols, glens);
    }
}

declare module wijmo.chart {
    /**
     * Specifies whether and where the Series is visible.
     */
    enum SeriesVisibility {
        /** The series is visible on the plot and in the legend. */
        Visible = 0,
        /** The series is visible only on the plot. */
        Plot = 1,
        /** The series is visible only in the legend. */
        Legend = 2,
        /** The series is hidden. */
        Hidden = 3,
    }
    /**
     * Specifies the type of marker to use for the @see:Series.symbolMarker
     * property.
     *
     * Applies to Scatter, LineSymbols, and SplineSymbols chart types.
     */
    enum Marker {
        /**
         * Uses a circle to mark each data point.
         */
        Dot = 0,
        /**
         * Uses a square to mark each data point.
         */
        Box = 1,
    }
    /**
     * Data series interface
     */
    interface _ISeries {
        style: any;
        symbolStyle: any;
        getValues: (dim: number) => number[];
        getDataType: (dim: number) => DataType;
        drawLegendItem(engine: IRenderEngine, rect: Rect, index: number): any;
        measureLegendItem(engine: IRenderEngine, index: number): Size;
        _setPointIndex(pointIndex: number, elementIndex: number): any;
    }
    class DataArray {
        dataType: DataType;
        values: Array<number>;
    }
    /**
     * Provides arguments for @see:Series events.
     */
    class SeriesEventArgs extends EventArgs {
        _series: Series;
        /**
         * Initializes a new instance of the @see:SeriesEventArgs class.
         *
         * @param series Specifies the @see:Series object affected by this event.
         */
        constructor(series: SeriesBase);
        /**
         * Gets the @see:Series object affected by this event.
         */
        readonly series: SeriesBase;
    }
    /**
     * Represents a series of data points to display in the chart.
     */
    class SeriesBase implements _ISeries {
        static _LEGEND_ITEM_WIDTH: number;
        static _LEGEND_ITEM_HEIGHT: number;
        static _LEGEND_ITEM_MARGIN: number;
        private static _DEFAULT_SYM_SIZE;
        __chart: FlexChartCore;
        private _name;
        private _binding;
        private _showValues;
        private _symbolStyle;
        private _symbolSize;
        private _style;
        private _altStyle;
        _cv: wijmo.collections.ICollectionView;
        private _itemsSource;
        private _values;
        private _valueDataType;
        _chartType: ChartType;
        private _symbolMarker;
        private _bindingX;
        private _xvalues;
        private _xvalueDataType;
        private _cssClass;
        private _visibility;
        private _axisX;
        private _axisY;
        private __plotter;
        _legendElement: SVGAElement;
        _hostElement: SVGGElement;
        _pointIndexes: number[];
        /**
         * Initializes a new instance of the @see:SeriesBase class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the series style.
         */
        style: any;
        /**
         * Gets or sets the alternative style for the series. The values from
         * this property will be used for negative values in Bar, Column,
         * and Scatter charts; and for rising values in financial chart types
         * like Candlestick, LineBreak, EquiVolume etc.
         *
         * If no value is provided, the default styles will be used.
         */
        altStyle: any;
        /**
         * Gets or sets the series symbol style.
         * Applies to Scatter, LineSymbols, and SplineSymbols chart types.
         */
        symbolStyle: any;
        /**
         * Gets or sets the size (in pixels) of the symbols used to render this @see:Series.
         * Applies to Scatter, LineSymbols, and SplineSymbols chart types.
         */
        symbolSize: number;
        /**
         * Gets or sets the shape of marker to use for each data point in the series.
         * Applies to Scatter, LineSymbols, and SplineSymbols chart types.
         */
        symbolMarker: Marker;
        /**
         * Gets or sets the name of the property that contains Y values for the series.
         */
        binding: string;
        /**
         * Gets or sets the name of the property that contains X values for the series.
         */
        bindingX: string;
        /**
         * Gets or sets the series name.
         *
         * The series name is displayed in the chart legend. Any series without a name
         * does not appear in the legend.
         */
        name: string;
        /**
         * Gets or sets the array or @see:ICollectionView object that contains the series data.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object that contains the data for this series.
         */
        readonly collectionView: wijmo.collections.ICollectionView;
        /**
         * Gets the @see:FlexChart object that owns this series.
         */
        readonly chart: FlexChartCore;
        /**
         * Gets the series host element.
         */
        readonly hostElement: SVGGElement;
        /**
         * Gets the series element in the legend.
         */
        readonly legendElement: SVGGElement;
        /**
         * Gets or sets the series CSS class.
         */
        cssClass: string;
        /**
         * Gets or sets an enumerated value indicating whether and where the series appears.
         */
        visibility: SeriesVisibility;
        /**
         * Gets a @see:wijmo.chart.HitTestInfo object with information about the specified point.
         *
         * @param pt The point to investigate, in window coordinates.
         * @param y The Y coordinate of the point (if the first parameter is a number).
         */
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
        /**
         * Gets the plot element that corresponds to the specified point index.
         *
         * @param pointIndex The index of the data point.
         */
        getPlotElement(pointIndex: number): any;
        /**
         * Gets or sets the x-axis for the series.
         */
        axisX: Axis;
        /**
         * Gets or sets the y-axis for the series.
         */
        axisY: Axis;
        /**
         * Initializes the series by copying the properties from a given object.
         *
         * @param options JavaScript object containing initialization data for the series.
         */
        initialize(options: any): void;
        /**
         * Converts a @see:Point from control coordinates to series data coordinates.
         *
         * @param pt The point to convert, in control coordinates.
         * @return The point in series data coordinates.
         */
        pointToData(pt: Point): Point;
        /**
         * Converts a @see:Point from series data coordinates to control coordinates.
         *
         * @param pt @see:Point in series data coordinates.
         * @return The @see:Point in control coordinates.
         */
        dataToPoint(pt: Point): Point;
        /**
         * Occurs when series is rendering.
         */
        rendering: Event;
        /**
         * Raises the @see:rendering event.
         *
         * @param engine The @see:IRenderEngine object used to render the series.
         * @param index The index of the series to render.
         * @param count Total number of the series to render.
         */
        onRendering(engine: IRenderEngine, index: number, count: number): boolean;
        /**
         * Occurs when series is rendered.
         */
        rendered: Event;
        /**
         * Raises the @see:rendered event.
         *
         * @param engine The @see:IRenderEngine object used to render the series.
         */
        onRendered(engine: IRenderEngine): void;
        _chart: FlexChartCore;
        _getSymbolSize(): number;
        _plotter: _IPlotter;
        getDataType(dim: number): DataType;
        getValues(dim: number): number[];
        /**
         * Draw a legend item at the specified position.
         *
         * @param engine The rendering engine to use.
         * @param rect The position of the legend item.
         * @param index Index of legend item(for series with multiple legend items).
         */
        drawLegendItem(engine: IRenderEngine, rect: Rect, index: number): void;
        /**
         * Measures height and width of the legend item.
         *
         * @param engine The rendering engine to use.
         * @param index Index of legend item(for series with multiple legend items).
         */
        measureLegendItem(engine: IRenderEngine, index: number): Size;
        /**
         * Returns number of series items in the legend.
         */
        legendItemLength(): number;
        /**
         * Returns the series bounding rectangle in data coordinates.
         *
         * If getDataRect() returns null, the limits are calculated automatically based on the data values.
         *
         * @param currentRect The current rectangle of chart. This parameter is optional.
         * @param calculatedRect The calculated rectangle of chart. This parameter is optional.
         */
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        _getChartType(): ChartType;
        /**
         * Clears any cached data values.
         */
        _clearValues(): void;
        _getBinding(index: number): string;
        _getBindingValues(index: number): number[];
        _getItem(pointIndex: number): any;
        _getLength(): number;
        _setPointIndex(pointIndex: number, elementIndex: number): void;
        private _getDataRect();
        _isCustomAxisX(): boolean;
        _isCustomAxisY(): boolean;
        _getAxisX(): Axis;
        _getAxisY(): Axis;
        _measureLegendItem(engine: IRenderEngine, text: string): Size;
        _drawFunnelLegendItem(engine: IRenderEngine, rect: Rect, index: number, style: any, symbolStyle: any): void;
        private _getFunnelLegendName(index);
        _drawLegendItem(engine: IRenderEngine, rect: Rect, chartType: ChartType, text: string, style: any, symbolStyle: any): void;
        private _cvCollectionChanged(sender, e);
        private _cvCurrentChanged(sender, e);
        _bindValues(items: Array<any>, binding: string, isX?: boolean): DataArray;
        _invalidate(): void;
        _indexToPoint(pointIndex: number): Point;
        _getSymbolFill(seriesIndex?: number): string;
        _getSymbolStroke(seriesIndex?: number): string;
        _getAltSymbolStroke(seriesIndex?: number): string;
        _getAltSymbolFill(seriesIndex?: number): string;
        _renderLabels(engine: IRenderEngine, smap: _IHitArea[], chart: FlexChartCore, lblAreas: _RectArea[]): void;
    }
}

declare module wijmo.chart {
    /**
     * Represents a series of data points to display in the chart.
     *
     * The @see:Series class supports all basic chart types. You may define
     * a different chart type on each @see:Series object that you add to the
     * @see:FlexChart series collection. This overrides the @see:chartType
     * property set on the chart that is the default for all @see:Series objects
     * in its collection.
     */
    class Series extends SeriesBase {
        /**
         * Gets or sets the chart type for a specific series, overriding the chart type
         * set on the overall chart.
         */
        chartType: ChartType;
    }
}

declare module wijmo.chart {
    /**
     * Represents a rendering engine that performs the basic drawing routines.
     */
    interface IRenderEngine {
        /**
         * Clears the viewport and starts the rendering cycle.
         */
        beginRender(): any;
        /**
         * Finishes the rendering cycle.
         */
        endRender(): any;
        /**
         * Sets the size of the viewport.
         *
         * @param w Viewport width.
         * @param h Viewport height.
         */
        setViewportSize(w: number, h: number): any;
        /**
         * Gets the rendered element.
         */
        element: Element;
        /**
         * Gets or sets the color used to fill the element.
         */
        fill: string;
        /**
         * Gets or sets the color used to outline the element.
         */
        stroke: string;
        /**
         * Gets or sets the thickness of the outline.
         */
        strokeWidth: number;
        /**
         * Gets or sets the text color.
         */
        textFill: string;
        /**
         * Gets or sets the font size for the text output.
         */
        fontSize: string;
        /**
         * Gets or sets the font family for the text output.
         */
        fontFamily: string;
        /**
         * Draws an ellipse.
         *
         * @param cx X coordinate of the ellipse's center.
         * @param cy Y coordinate of the ellipse's center.
         * @param rx X radius (half of the ellipse's width).
         * @param ry Y radius (half of the ellipse's height).
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         */
        drawEllipse(cx: number, cy: number, rx: number, ry: number, className?: string, style?: any): any;
        /**
         * Draws a rectangle.
         *
         * @param x Left of the rectangle.
         * @param y Bottom of the rectangle.
         * @param w Width of the rectangle.
         * @param h Height of the rectangle.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawRect(x: number, y: number, w: number, h: number, className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a line.
         *
         * @param x1 X coordinate of the first point.
         * @param y1 Y coordinate of the first point.
         * @param x2 X coordinate of the second point.
         * @param y2 Y coordinate of the second point.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         */
        drawLine(x1: number, y1: number, x2: number, y2: number, className?: string, style?: any): any;
        /**
         * Draws a series of lines.
         *
         * @param xs Array of X coordinates.
         * @param ys Array of Y coordinates.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawLines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a series of splines (smooth path).
         *
         * @param xs Array of X coordinates.
         * @param ys Array of Y coordinates.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawSplines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a polygon.
         *
         * @param xs Array of X coordinates.
         * @param ys Array of Y coordinates.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawPolygon(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a pie segment.
         *
         * @param cx X coordinate of the segment center.
         * @param cy Y coordinate of the segment center.
         * @param radius Radius of the segment.
         * @param startAngle Start angle of the segment, in degrees.
         * @param sweepAngle Sweep angle of the segment, in degrees clockwise.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawPieSegment(cx: number, cy: number, radius: number, startAngle: number, sweepAngle: number, className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a doughnut segment.
         *
         * @param cx X coordinate of the segment center.
         * @param cy Y coordinate of the segment center.
         * @param radius Outer radius of the segment.
         * @param innerRadius Inner radius of the segment.
         * @param startAngle Start angle of the segment, in degrees.
         * @param sweepAngle Sweep angle of the segment, in degrees clockwise.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawDonutSegment(cx: number, cy: number, radius: number, innerRadius: number, startAngle: number, sweepAngle: number, className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a string.
         *
         * @param s String to be drawn.
         * @param pt Reference point for the string.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         */
        drawString(s: string, pt: Point, className?: string, style?: any): any;
        /**
         * Draws a rotated string.
         *
         * @param s String to be drawn.
         * @param pt Reference point for rendering the string.
         * @param center Reference point for rotating the string.
         * @param angle Rotation angle, in degrees, clockwise.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         */
        drawStringRotated(s: string, pt: Point, center: Point, angle: number, className?: string, style?: any): any;
        /**
         * Draws an image.
         *
         * @param href Url of the image to draw.
         * @param x Left coordinate of the image's bounding rectangle.
         * @param y Bottom coordinate of the image's bounding rectangle.
         * @param w Image width.
         * @param h Image height.
         */
        drawImage(href: string, x: number, y: number, w: number, h: number): any;
        /**
         * Measures a string.
         *
         * @param s String to be measured.
         * @param className Class name to use when measuring the string.
         * @param groupName Name of the group to use when measuring the string.
         * @param style Style object to use when measuring the string.
         */
        measureString(s: string, className?: string, groupName?: string, style?: any): Size;
        /**
         * Starts a group.
         *
         * @param className Class name to apply to the new group.
         * @param clipPath Id of the path to use as a clipping path.
         * @param createTransform Whether to create a new transform for the group.
         */
        startGroup(className?: string, clipPath?: string, createTransform?: boolean): any;
        /**
         * Ends a group.
         */
        endGroup(): any;
        /**
         * Adds a clipping rectangle to the context.
         *
         * @param clipRect The clipping rectangle.
         * @param id The ID of the clipping rectangle.
         */
        addClipRect(clipRect: Rect, id: string): any;
    }
}

declare module wijmo.chart {
    /**
     * Render to svg.
     */
    class _SvgRenderEngine implements IRenderEngine {
        private static svgNS;
        private static xlinkNS;
        private _element;
        private _svg;
        private _text;
        private _textGroup;
        private _defs;
        private _fill;
        private _stroke;
        private _textFill;
        private _strokeWidth;
        private _fontSize;
        private _fontFamily;
        private _group;
        private _clipRect;
        private static _isff;
        private _savedGradient;
        constructor(element: HTMLElement);
        beginRender(): void;
        endRender(): void;
        setViewportSize(w: number, h: number): void;
        readonly element: Element;
        fill: string;
        fontSize: string;
        fontFamily: string;
        stroke: string;
        strokeWidth: number;
        textFill: string;
        addClipRect(clipRect: Rect, id: string): void;
        drawEllipse(cx: number, cy: number, rx: number, ry: number, className?: string, style?: any): SVGElement;
        drawRect(x: number, y: number, w: number, h: number, className?: string, style?: any, clipPath?: string): SVGElement;
        drawLine(x1: number, y1: number, x2: number, y2: number, className?: string, style?: any): SVGElement;
        drawLines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): SVGElement;
        drawSplines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): SVGElement;
        drawPolygon(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): SVGElement;
        drawPieSegment(cx: number, cy: number, r: number, startAngle: number, sweepAngle: number, className?: string, style?: any, clipPath?: string): SVGElement;
        drawDonutSegment(cx: number, cy: number, radius: number, innerRadius: number, startAngle: number, sweepAngle: number, className?: string, style?: any, clipPath?: string): SVGElement;
        drawString(s: string, pt: Point, className?: string, style?: any): SVGElement;
        drawStringRotated(s: string, pt: Point, center: Point, angle: number, className?: string, style?: any): SVGElement;
        measureString(s: string, className?: string, groupName?: string, style?: any): Size;
        startGroup(className?: string, clipPath?: string, createTransform?: boolean): SVGElement;
        endGroup(): void;
        drawImage(imageHref: string, x: number, y: number, w: number, h: number): SVGElement;
        private _appendChild(element);
        private _create();
        private _setText(element, s);
        private _createText(pos, text);
        private _applyStyle(el, style);
        private _deCase(s);
        private _getBBox(text);
        private _applyColor(el, key, val);
    }
}

declare module wijmo.chart {
    /**
     * Represents the chart legend.
     */
    class Legend {
        _chart: FlexChartBase;
        _position: Position;
        private _areas;
        private _sz;
        private _colRowLens;
        /**
         * Initializes a new instance of the @see:Legend class.
         *
         * @param chart @see:FlexChartBase that owns this @see:Legend.
         */
        constructor(chart: FlexChartBase);
        /**
         * Gets or sets a value that determines whether and where the legend
         * appears in relation to the plot area.
         */
        position: Position;
        _getDesiredSize(engine: IRenderEngine, pos: Position, w: number, h: number): Size;
        _getPosition(w: number, h: number): Position;
        _render(engine: IRenderEngine, pt: Point, pos: Position, w: number, h: number): void;
        _hitTest(pt: Point): number;
    }
}

declare module wijmo.chart {
    /**
     * Specifies the type of chart element found by the hitTest method.
     */
    enum ChartElement {
        /** The area within the axes. */
        PlotArea = 0,
        /** X-axis. */
        AxisX = 1,
        /** Y-axis. */
        AxisY = 2,
        /** The area within the control but outside the axes. */
        ChartArea = 3,
        /** The chart legend. */
        Legend = 4,
        /** The chart header. */
        Header = 5,
        /** The chart footer. */
        Footer = 6,
        /** A chart series. */
        Series = 7,
        /** A chart series symbol. */
        SeriesSymbol = 8,
        /** A data label. */
        DataLabel = 9,
        /** No chart element. */
        None = 10,
    }
    /**
     * Contains information about a part of a @see:FlexChart control at
     * a specified page coordinate.
     */
    class HitTestInfo {
        private _chart;
        private _pt;
        private _series;
        private _pointIndex;
        _chartElement: ChartElement;
        _dist: number;
        private _item;
        private _x;
        private __xfmt;
        private _y;
        private __yfmt;
        private _name;
        /**
         * Initializes a new instance of the @see:wijmo.chart.HitTestInfo class.
         *
         * @param chart The chart control.
         * @param point The original point in window coordinates.
         * @param element The chart element.
         */
        constructor(chart: FlexChartBase, point: Point, element?: ChartElement);
        /**
         * Gets the point in control coordinates to which this @see:wijmo.chart.HitTestInfo
         * object refers to.
         */
        readonly point: Point;
        /**
         * Gets the chart series at the specified coordinates.
         */
        readonly series: SeriesBase;
        /**
         * Gets the data point index at the specified coordinates.
         */
        readonly pointIndex: number;
        /**
         * Gets the chart element at the specified coordinates.
         */
        readonly chartElement: ChartElement;
        /**
         * Gets the distance from the closest data point.
         */
        readonly distance: number;
        /**
         * Gets the data object that corresponds to the closest data point.
         */
        readonly item: any;
        /**
         * Gets the x-value of the closest data point.
         */
        readonly x: any;
        /**
         * Gets the y-value of the closest data point.
         */
        readonly y: any;
        readonly value: any;
        readonly name: any;
        readonly _xfmt: any;
        readonly _yfmt: any;
        _setData(series: SeriesBase, pi?: number): void;
        _setDataPoint(dataPoint: _DataPoint): void;
        private _getValue(index, formatted);
    }
}

declare module wijmo.chart {
    /**
     * These are predefined color palettes for chart @see:Series objects.
     *
     * To create custom color palettes, supply an array of strings or rgba values.
     *
     * You can specify palettes for @see:FlexChart and @see:FlexPie controls.
     * For example:
     *
     * <pre>chart.palette = Palettes.light;</pre>
     *
     * The following palettes are pre-defined:
     * <ul>
     *   <li>standard (default)</li>
     *   <li>cocoa</li>
     *   <li>coral</li>
     *   <li>dark</li>
     *   <li>highcontrast</li>
     *   <li>light</li>
     *   <li>midnight</li>
     *   <li>modern</li>
     *   <li>organic</li>
     *   <li>slate</li>
     *   <li>zen</li>
     *   <li>cyborg</li>
     *   <li>superhero</li>
     *   <li>flatly</li>
     *   <li>darkly</li>
     *   <li>cerulan</li>
     * </ul>
     */
    class Palettes {
        static standard: string[];
        static cocoa: string[];
        static coral: string[];
        static dark: string[];
        static highcontrast: string[];
        static light: string[];
        static midnight: string[];
        static modern: string[];
        static organic: string[];
        static slate: string[];
        static zen: string[];
        static cyborg: string[];
        static superhero: string[];
        static flatly: string[];
        static darkly: string[];
        static cerulan: string[];
    }
}

declare module wijmo.chart {
    /**
     * Calculates Spline curves.
     */
    class _Spline {
        private k;
        private _x;
        private _y;
        private _a;
        private _b;
        private _c;
        private _d;
        private _len;
        private m;
        constructor(x: number[], y: number[]);
        private calculatePoint(val);
        calculate(): {
            xs: any;
            ys: any;
        };
    }
}

declare module wijmo.chart {
    /**
     * Specifies the position of data labels on the chart.
     */
    enum LabelPosition {
        /** No data labels appear. */
        None = 0,
        /** The labels appear to the left of the data points. */
        Left = 1,
        /** The labels appear above the data points. */
        Top = 2,
        /** The labels appear to the right of the data points. */
        Right = 3,
        /** The labels appear below the data points. */
        Bottom = 4,
        /** The labels appear centered on the data points. */
        Center = 5,
    }
    /**
     * Specifies the position of data labels on the pie chart.
     */
    enum PieLabelPosition {
        /** No data labels. */
        None = 0,
        /** The label appears inside the pie slice. */
        Inside = 1,
        /** The item appears at the center of the pie slice. */
        Center = 2,
        /** The item appears outside the pie slice. */
        Outside = 3,
    }
    /**
     * Provides arguments for @see:DataLabel rendering event.
     */
    class DataLabelRenderEventArgs extends RenderEventArgs {
        private _ht;
        private _pt;
        private _text;
        /**
         * Initializes a new instance of the @see:DataLabelRenderEventArgs class.
         *
         * @param engine (@see:IRenderEngine) The rendering engine to use.
         * @param ht The hit test information.
         * @param pt The reference point.
         * @param text The label text.
         */
        constructor(engine: IRenderEngine, ht: HitTestInfo, pt: Point, text: string);
        /**
         * Gets or sets a value that indicates whether the event should be cancelled.
         */
        cancel: boolean;
        /**
         * Gets the point associated with the label in control coordinates.
         */
        readonly point: Point;
        /**
         * Gets or sets the label text.
         */
        text: string;
        /**
         * Gets the hit test information.
         */
        readonly hitTestInfo: wijmo.chart.HitTestInfo;
    }
    /**
    * Represents the base abstract class for the @see:DataLabel and the @see:PieDataLabel classes.
    */
    class DataLabelBase {
        private _content;
        _chart: FlexChartBase;
        private _bdr;
        private _line;
        private _off;
        /**
         * Gets or sets the content of data labels.
         *
         * The content can be specified as a string or as a function that
         * takes @see:wijmo.chart.HitTestInfo object as a parameter.
         *
         * When the label content is a string, it can contain any of the following
         * parameters:
         *
         * <ul>
         *  <li><b>seriesName</b>: Name of the series that contains the data point (FlexChart only).</li>
         *  <li><b>pointIndex</b>: Index of the data point.</li>
         *  <li><b>value</b>: <b>Value</b> of the data point.</li>
         *  <li><b>x</b>: <b>x</b>-value of the data point (FlexChart only).</li>
         *  <li><b>y</b>: <b>y</b>-value of the data point (FlexChart only).</li>
         *  <li><b>name</b>: <b>Name</b> of the data point.</li>
         *  <li><b>propertyName</b>: any property of data object.</li>
         * </ul>
         *
         * The parameter must be enclosed in curly brackets, for example 'x={x}, y={y}'.
         *
         * In the following example, we show the y value of the data point in the labels.
         *
         * <pre>
         *  // Create a chart and show y data in labels positioned above the data point.
         *  var chart = new wijmo.chart.FlexChart('#theChart');
         *  chart.initialize({
         *      itemsSource: data,
         *      bindingX: 'country',
         *      series: [
         *          { name: 'Sales', binding: 'sales' },
         *          { name: 'Expenses', binding: 'expenses' },
         *          { name: 'Downloads', binding: 'downloads' }],
         *  });
         *  chart.dataLabel.position = "Top";
         *  chart.dataLabel.content = "{country} {seriesName}:{y}";
         * </pre>
         *
         * The next example shows how to set data label content using a function.
         *
         * <pre>
         *  // Set the data label content
         *  chart.dataLabel.content = function (ht) {
         *    return ht.name + ":" + ht.value.toFixed();
         *  }
         * </pre>
         *
         */
        content: any;
        /**
         * Gets or sets a value indicating whether the data labels have borders.
         */
        border: boolean;
        /**
         * Gets or sets the offset from label to the data point.
         */
        offset: number;
        /**
         * Gets or sets a value indicating whether to draw lines that connect
         * labels to the data points.
         */
        connectingLine: boolean;
        /**
         * Occurs before the data label is rendered.
         */
        rendering: Event;
        /**
         * Raises the @see:rendering event.
         *
         * @param e The @see:DataLabelRenderEventArgs object used to render the label.
         * @return True if the event was not canceled.
         */
        onRendering(e: DataLabelRenderEventArgs): boolean;
        _invalidate(): void;
    }
    /**
     * The point data label for FlexChart.
     */
    class DataLabel extends DataLabelBase {
        private _pos;
        /**
         * Gets or sets the position of the data labels.
         */
        position: LabelPosition;
    }
    /**
     * The point data label for FlexPie.
     */
    class PieDataLabel extends DataLabelBase {
        private _pos;
        /**
         * Gets or sets the position of the data labels.
         */
        position: PieLabelPosition;
    }
}

declare module wijmo.chart {
    /**
     * Specifies the direction of the lines shown by the @see:LineMarker.
     */
    enum LineMarkerLines {
        /** No lines. */
        None = 0,
        /** Vertical line. */
        Vertical = 1,
        /** Horizontal line. */
        Horizontal = 2,
        /** Vertical and horizontal lines. */
        Both = 3,
    }
    /**
     * Specifies how the @see:LineMarker interacts with the user.
     */
    enum LineMarkerInteraction {
        /** No interaction, the user specifies the position by clicking. */
        None = 0,
        /** The @see:LineMarker moves with the pointer. */
        Move = 1,
        /** The @see:LineMarker moves when the user drags the lines. */
        Drag = 2,
    }
    /**
     * Specifies the alignment of the @see:LineMarker.
     */
    enum LineMarkerAlignment {
        /**
         * The LineMarker alignment adjusts automatically so that it stays
         * within the boundaries of the plot area. */
        Auto = 2,
        /** The LineMarker aligns to the right of the pointer. */
        Right = 0,
        /** The LineMarker aligns to the left of the pointer. */
        Left = 1,
        /** The LineMarker aligns to the bottom of the pointer. */
        Bottom = 4,
        /** The LineMarker aligns to the top of the pointer. */
        Top = 6,
    }
    /**
     * Represents an extension of the LineMarker for the FlexChart.
     *
     * The @see:LineMarker consists of a text area with content reflecting
     * data point values, and optional vertical or horizontal lines
     * (or both for a cross-hair effect) positioned over the plot area.
     *
     * It can be static (interaction = None), follow the mouse or touch
     * position (interaction = Move), or move when the user drags the
     * line (interaction = Drag).
     *
     * For example:
     * <pre>
     *   // create an interactive marker with a horizontal line and y-value
     *   var lm = new wijmo.chart.LineMarker($scope.ctx.chart, {
     *       lines: wijmo.chart.LineMarkerLines.Horizontal,
     *       interaction: wijmo.chart.LineMarkerInteraction.Move,
     *       alignment : wijmo.chart.LineMarkerAlignment.Top
     *   });
     *   lm.content = function (ht) {
     *       // show y-value
     *       return lm.y.toFixed(2);
     *   }
     * </pre>
     */
    class LineMarker {
        static _CSS_MARKER: string;
        static _CSS_MARKER_HLINE: string;
        static _CSS_MARKER_VLINE: string;
        static _CSS_MARKER_CONTENT: string;
        static _CSS_MARKER_CONTAINER: string;
        static _CSS_LINE_DRAGGABLE: string;
        static _CSS_TOUCH_DISABLED: string;
        private _chart;
        private _plot;
        private _marker;
        private _markerContainer;
        private _markerContent;
        private _dragEle;
        private _hLine;
        private _vLine;
        private _plotRect;
        private _targetPoint;
        private _wrapperMoveMarker;
        private _capturedEle;
        private _wrapperMousedown;
        private _wrapperMouseup;
        private _contentDragStartPoint;
        private _mouseDownCrossPoint;
        private _isVisible;
        private _horizontalPosition;
        private _verticalPosition;
        private _alignment;
        private _content;
        private _seriesIndex;
        private _lines;
        private _interaction;
        private _dragThreshold;
        private _dragContent;
        private _dragLines;
        /**
         * Initializes a new instance of the @see:LineMarker class.
         *
         * @param chart The chart on which the LineMarker appears.
         * @param options A JavaScript object containing initialization data for the control.
         */
        constructor(chart: FlexChartCore, options?: any);
        /**
         * Gets the @see:FlexChart object that owns the LineMarker.
         */
        readonly chart: FlexChartCore;
        /**
         * Gets or sets the visibility of the LineMarker.
         */
        isVisible: boolean;
        /**
         * Gets or sets the index of the series in the chart in which the LineMarker appears.
         * This takes effect when the @see:interaction property is set to
         * wijmo.chart.LineMarkerInteraction.Move or wijmo.chart.LineMarkerInteraction.Drag.
         */
        seriesIndex: number;
        /**
         * Gets or sets the horizontal position of the LineMarker relative to the plot area.
         *
         * Its value range is (0, 1).
         * If the value is null or undefined and @see:interaction is set to
         * wijmo.chart.LineMarkerInteraction.Move or wijmo.chart.LineMarkerInteraction.Drag,
         * the horizontal position of the marker is calculated automatically based on the
         * pointer's position.
         */
        horizontalPosition: number;
        /**
         * Gets the current x-value as chart data coordinates.
         */
        readonly x: number;
        /**
         * Gets the current y-value as chart data coordinates.
         */
        readonly y: number;
        /**
         * Gets or sets the content function that allows you to customize the text content of the LineMarker.
         */
        content: Function;
        /**
         * Gets or sets the vertical position of the LineMarker relative to the plot area.
         *
         * Its value range is (0, 1).
         * If the value is null or undefined and @see:interaction is set to wijmo.chart.LineMarkerInteraction.Move
         * or wijmo.chart.LineMarkerInteraction.Drag, the vertical position of the LineMarker is calculated automatically based on the pointer's position.
         */
        verticalPosition: number;
        /**
         * Gets or sets the alignment of the LineMarker content.
         *
         * By default, the LineMarker shows to the right, at the bottom of the target point.
         * Use '|' to combine alignment values.
         *
         * <pre>
         * // set the alignment to the left.
         * marker.alignment = wijmo.chart.LineMarkerAlignment.Left;
         * // set the alignment to the left top.
         * marker.alignment = wijmo.chart.LineMarkerAlignment.Left | wijmo.chart.LineMarkerAlignment.Top;
         * </pre>
         */
        alignment: LineMarkerAlignment;
        /**
         * Gets or sets the visibility of the LineMarker lines.
         */
        lines: LineMarkerLines;
        /**
         * Gets or sets the interaction mode of the LineMarker.
         */
        interaction: LineMarkerInteraction;
        /**
         * Gets or sets the maximum distance from the horizontal or vertical
         * line that the marker can be dragged.
         */
        dragThreshold: number;
        /**
         * Gets or sets a value indicating whether the content of the marker
         * is draggable when the interaction mode is "Drag."
         */
        dragContent: boolean;
        /**
         * Gets or sets a value indicating whether the lines are linked
         * when the horizontal or vertical line is dragged when the
         * interaction mode is "Drag."
         */
        dragLines: boolean;
        /**
         * Occurs after the @see:LineMarker's position changes.
         */
        positionChanged: Event;
        /**
         * Raises the @see:positionChanged event.
         *
         * @param point The target point at which to show the LineMarker.
         */
        onPositionChanged(point: Point): void;
        /**
         * Removes the LineMarker from the chart.
         */
        remove(): void;
        private _attach();
        private _attachDrag();
        private _detach();
        private _detachDrag();
        private _toggleDragEventAttach(isAttach);
        private _onMousedown(e);
        private _onMouseup(e);
        _moveMarker(e: any): void;
        private _show(ele?);
        private _hide(ele?);
        private _toggleVisibility();
        private _resetDefaultValue();
        private _initialize();
        private _createMarker();
        private _removeMarker();
        private _getContainer();
        private _createContainer();
        private _createChildren();
        private _toggleElesDraggableClass(draggable);
        private _updateMarkerSize();
        private _updateLinesSize();
        private _resetLinesVisibility();
        private _updateMarkerPosition(point?);
        private _updateContent();
        private _raisePositionChanged(x, y);
        private _updatePositionByAlignment(isMarkerMoved?);
        private _getEventPoint(e);
        private _pointInRect(pt, rect);
    }
}

declare module wijmo.chart {
    class _DataPoint {
        private _seriesIndex;
        private _pointIndex;
        private _dataX;
        private _dataY;
        constructor(seriesIndex: number, pointIndex: number, dataX: number, dataY: number);
        readonly seriesIndex: number;
        readonly pointIndex: number;
        dataX: number;
        dataY: number;
    }
    enum _MeasureOption {
        X = 0,
        Y = 1,
        XY = 2,
    }
    class _RectArea implements _IHitArea {
        private _rect;
        constructor(rect: Rect);
        readonly rect: Rect;
        tag: any;
        contains(pt: Point): boolean;
        pointDistance(pt1: Point, pt2: Point, option: _MeasureOption): number;
        distance(pt: Point): number;
    }
    class _CircleArea implements _IHitArea {
        private _center;
        private _rad;
        private _rad2;
        tag: any;
        constructor(center: Point, radius: number);
        setRadius(radius: number): void;
        readonly center: Point;
        contains(pt: Point): boolean;
        distance(pt: Point): number;
    }
    class _LinesArea implements _IHitArea {
        private _x;
        private _y;
        tag: any;
        constructor(x: any, y: any);
        contains(pt: Point): boolean;
        distance(pt: Point): number;
    }
    class _HitResult {
        area: _IHitArea;
        distance: number;
    }
    class _HitTester {
        _chart: FlexChartCore;
        _map: {
            [key: number]: Array<_IHitArea>;
        };
        constructor(chart: FlexChartCore);
        add(area: _IHitArea, seriesIndex: number): void;
        clear(): void;
        hitTest(pt: Point, testLines?: boolean): _HitResult;
        hitTestSeries(pt: Point, seriesIndex: any): _HitResult;
    }
}

declare module wijmo.chart {
    /**
     * Plots data series.
     */
    interface _IPlotter {
        chart: FlexChartCore;
        dataInfo: _DataInfo;
        hitTester: _HitTester;
        seriesIndex: number;
        seriesCount: number;
        clipping: boolean;
        stacking: Stacking;
        rotated: boolean;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): any;
        _renderLabels(engine: IRenderEngine, series: SeriesBase, smap: _IHitArea[], chart: FlexChartCore, lblAreas: _RectArea[]): any;
        _renderLabel(engine: IRenderEngine, map: _IHitArea, dp: _DataPoint, chart: FlexChartCore, lbl: DataLabel, series: SeriesBase, offset: number, lblAreas: _RectArea[]): any;
        load(): any;
        unload(): any;
    }
    /**
     * Base class for chart plotters of all types (bar, line, area).
     */
    class _BasePlotter {
        _DEFAULT_WIDTH: number;
        _DEFAULT_SYM_SIZE: number;
        clipping: boolean;
        chart: FlexChart;
        hitTester: _HitTester;
        dataInfo: _DataInfo;
        seriesIndex: number;
        seriesCount: number;
        clear(): void;
        _renderLabels(engine: IRenderEngine, series: SeriesBase, smap: _IHitArea[], chart: FlexChartCore, lblAreas: _RectArea[]): void;
        _renderLabel(engine: IRenderEngine, map: _IHitArea, dp: _DataPoint, chart: FlexChartCore, lbl: DataLabel, series: SeriesBase, offset: number, lblAreas: _RectArea[]): void;
        _getPointAndPosition(pt: Point, pos: LabelPosition, map: _IHitArea, chart: FlexChartCore): void;
        _getLabelPoint(series: SeriesBase, dataPoint: _DataPoint): Point;
        _renderLabelAndBorder(engine: IRenderEngine, s: string, pos: LabelPosition, offset: number, pt: Point, line: boolean, marg: any, border: boolean): Rect;
        getOption(name: string, parent?: string): any;
        getNumOption(name: string, parent?: string): number;
        static cloneStyle(style: any, ignore: string[]): any;
        isValid(datax: number, datay: number, ax: _IAxis, ay: _IAxis): boolean;
        load(): void;
        unload(): void;
    }
}

declare module wijmo.chart {
    /**
     * Bar/column chart plotter.
     */
    class _BarPlotter extends _BasePlotter implements _IPlotter {
        origin: number;
        width: number;
        isVolume: boolean;
        private _volHelper;
        private _itemsSource;
        stackPosMap: {};
        stackNegMap: {};
        stacking: Stacking;
        rotated: boolean;
        _getSymbolOrigin: Function;
        _getSymbolStyles: Function;
        clear(): void;
        load(): void;
        unload(): void;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        private drawSymbol(engine, rect, series, pointIndex, point);
        private drawDefaultSymbol(engine, rect, series);
    }
}

declare module wijmo.chart {
    /**
     * Line/scatter chart plotter.
     */
    class _LinePlotter extends _BasePlotter implements _IPlotter {
        hasSymbols: boolean;
        hasLines: boolean;
        isSpline: boolean;
        rotated: boolean;
        stacking: Stacking;
        stackPos: {
            [key: number]: number;
        };
        stackNeg: {
            [key: number]: number;
        };
        constructor();
        clear(): void;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        _drawLines(engine: IRenderEngine, xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): void;
        _drawSymbol(engine: IRenderEngine, x: number, y: number, sz: number, series: SeriesBase, pointIndex: number): void;
        _drawDefaultSymbol(engine: IRenderEngine, x: number, y: number, sz: number, marker: Marker, style?: any): void;
    }
}

declare module wijmo.chart {
    /**
     * Area chart plotter.
     */
    class _AreaPlotter extends _BasePlotter implements _IPlotter {
        stacking: Stacking;
        isSpline: boolean;
        rotated: boolean;
        private stackPos;
        private stackNeg;
        constructor();
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        clear(): void;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        _convertToSpline(x: number[], y: number[]): {
            xs: any;
            ys: any;
        };
        _drawSymbols(engine: IRenderEngine, series: _ISeries, seriesIndex: number): void;
    }
}

declare module wijmo.chart {
    class _BubblePlotter extends _LinePlotter {
        private _MIN_SIZE;
        private _MAX_SIZE;
        private _minSize;
        private _maxSize;
        private _minValue;
        private _maxValue;
        constructor();
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        _drawSymbol(engine: IRenderEngine, x: number, y: number, sz: number, series: Series, pointIndex: number): void;
    }
}

declare module wijmo.chart {
    class _FinancePlotter extends _BasePlotter {
        isCandle: boolean;
        isArms: boolean;
        isEqui: boolean;
        isVolume: boolean;
        symbolWidth: any;
        private _volHelper;
        private _itemsSource;
        private _symWidth;
        private _isPixel;
        clear(): void;
        load(): void;
        unload(): void;
        parseSymbolWidth(val: any): void;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        _drawSymbol(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, si: number, pi: number, fill: any, w: number, x: number, hi: number, lo: number, open: number, close: number): void;
    }
}

declare module wijmo.chart {
    /**
     * Funnel chart plotter.
     */
    class _FunnelPlotter extends _BasePlotter implements _IPlotter {
        _getSymbolOrigin: Function;
        _getSymbolStyles: Function;
        stacking: Stacking;
        rotated: boolean;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        private _getTrapezoidArea(width, angle, height);
        private _getTrapezoidOffsetY(width, area, angle);
        private drawSymbol(engine, rect, series, pointIndex, point);
        private drawDefaultSymbol(engine, rect, series);
        _getPointAndPosition(pt: Point, pos: LabelPosition, map: _IHitArea, chart: FlexChartCore): void;
    }
    class _FunnelSegment implements _IHitArea {
        private _center;
        private _startPoint;
        private _width;
        private _height;
        private _neckWidth;
        private _neckHeight;
        private _offsetX;
        private _offsetY;
        constructor(startPoint: Point, width: number, height: number, neckWidth: number, neckHeight: number);
        contains(pt: Point): boolean;
        distance(pt: Point): number;
        readonly center: Point;
        tag: any;
    }
}

declare module wijmo.chart {
    class _VolumeHelper {
        private _volumes;
        private _xVals;
        private _xDataMin;
        private _xDataMax;
        private _xDataType;
        private _hasXs;
        private _calcData;
        constructor(volumes: number[], xVals: number[], xDataMin: number, xDataMax: number, xDataType?: DataType);
        convert(x: number, min: number, max: number): number;
        convertBack(x: number, min: number, max: number): number;
        private _init();
        private _getXVolume(x);
        static convertToRange(value: number, newMin: number, newMax: number, oldMin: number, oldMax: number): number;
        private _fillGaps();
    }
}

