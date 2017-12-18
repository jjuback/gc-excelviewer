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
 * Defines classes that add analytics features to charts including @see:TrendLine,
 * @see:MovingAverage and @see:FunctionSeries.
 */
declare module wijmo.chart.analytics {
    /**
     * Represents base class for various trend lines.
     */
    class TrendLineBase extends SeriesBase {
        private _sampleCount;
        private _bind;
        private _bindX;
        _xValues: any[];
        _yValues: any[];
        _originXValues: any[];
        _originYValues: any[];
        /**
         * Initializes a new instance of the @see:TrendLineBase class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the sample count for function calculation.
         * The property doesn't apply for MovingAverage.
         */
        sampleCount: number;
        /**
         * Gets the approximate y value from the given x value.
         *
         * @param x The x value to be used for calculating the Y value.
         */
        approximate(x: number): number;
        getValues(dim: number): number[];
        _calculateValues(): void;
        _invalidate(): void;
        _clearValues(): void;
        _clearCalculatedValues(): void;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the fit type for a @see:TrendLine series.
     */
    enum TrendLineFitType {
        /**
         * A straight line that most closely approximates the data.  Y(x) = a * x + b.
         */
        Linear = 0,
        /**
         * Regression fit to the equation Y(x) = a * exp(b*x).
         */
        Exponential = 1,
        /**
         * Regression fit to the equation Y(x) = a * ln(x) + b.
         */
        Logarithmic = 2,
        /**
         * Regression fit to the equation Y(x) = a * pow(x, b).
         */
        Power = 3,
        /**
         * Regression fit to the equation Y(x) = a + b * cos(x) + c * sin(x) + d * cos(2*x) + e * sin(2*x) + ...
         */
        Fourier = 4,
        /**
         * Regression fit to the equation Y(x) = a * x^n + b * x^n-1 + c * x^n-2 + ... + z.
         */
        Polynomial = 5,
        /**
         * The minimum X-value.
         */
        MinX = 6,
        /**
         * The minimum Y-value.
         */
        MinY = 7,
        /**
         * The maximum X-value.
         */
        MaxX = 8,
        /**
         * The maximum Y-value.
         */
        MaxY = 9,
        /**
         * The average X-value.
         */
        AverageX = 10,
        /**
         * The average Y-value.
         */
        AverageY = 11,
    }
    /**
     * Represents a trend line series in a @see:FlexChart or @see:FinancialChart.
     *
     * A trend line is a line superimposed on a chart revealing the overall
     * direction of data.
     *
     * You may define a different fit type for each @see:TrendLine series
     * on the @see:FlexChart by setting its @see:fitType property.
     */
    class TrendLine extends TrendLineBase {
        private _fitType;
        private _order;
        private _helper;
        /**
         * Initializes a new instance of the @see:TrendLine class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the fit type of the @see:TrendLine.
         */
        fitType: TrendLineFitType;
        /**
         * Gets or sets the number of terms in a polynomial or Fourier equation.
         *
         * Set this value to an integer greater than 1.
         * It gets applied when the fitType is set to
         * wijmo.chart.analytics.TrendLineFitType.Polynomial or
         * wijmo.chart.analytics.TrendLineFitType.Fourier.
         */
        order: number;
        /**
         * Gets the coefficients of the equation.
         */
        readonly coefficients: number[];
        /**
         * Gets the approximate y value from the given x value.
         *
         * @param x The x value to be used for calculating the Y value.
         */
        approximate(x: number): number;
        /**
         * Gets the formatted equation string for the coefficients.
         *
         * @param fmt The formatting function used to convert the coefficients
         * into strings. This parameter is optional.
         */
        getEquation(fmt?: Function): string;
        _calculateValues(): void;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Represents a base class of function series for @see:wijmo.chart.FlexChart.
     */
    class FunctionSeries extends TrendLineBase {
        private _min;
        private _max;
        /**
         * Initializes a new instance of the @see:FunctionSeries class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the minimum value of the parameter for calculating a function.
         */
        min: number;
        /**
         * Gets or sets the maximum value of the parameter for calculating a function.
         */
        max: number;
        getValues(dim: number): number[];
        _calculateValues(): void;
        _validateValue(value: number): number;
        _calculateValue(func: Function, parameter: number): number;
        _calculateX(value: number): number;
        _calculateY(value: number): number;
    }
    /**
     * Represents a Y function series of @see:wijmo.chart.FlexChart.
     *
     * The @see:YFunctionSeries plots a function defined by formulas
     * of type y=f(x), specified using the @see:func property.
     */
    class YFunctionSeries extends FunctionSeries {
        private _func;
        /**
         * Initializes a new instance of the @see:YFunctionSeries class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the function used to calculate Y value.
         */
        func: Function;
        _calculateX(value: number): number;
        _calculateY(value: number): number;
        /**
         * Gets the approximate y value from the given x value.
         *
         * @param x The x value to be used for calculating the Y value.
         */
        approximate(x: number): number;
    }
    /**
     * Represents a parametric function series for @see:wijmo.chart.FlexChart.
     *
     * The @see::ParametricFunctionSeries plots a function defined by formulas
     * x=f(t) and y=f(t).
     *
     * The x and y values are calculated by the functions assigned to the
     * @see:xFunc and @see:yFunc properties.
     */
    class ParametricFunctionSeries extends FunctionSeries {
        private _xFunc;
        private _yFunc;
        /**
         * Initializes a new instance of the @see:ParametricFunctionSeries class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the function used to calculate the x value.
         */
        xFunc: Function;
        /**
         * Gets or sets the function used to calculate the y value.
         */
        yFunc: Function;
        _calculateX(value: number): number;
        _calculateY(value: number): number;
        /**
         * Gets the approximate x and y from the given value.
         *
         * @param value The value to calculate.
         */
        approximate(value: number): any;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the type of MovingAverage Series.
     */
    enum MovingAverageType {
        /**
         * An average of the last n values.
         */
        Simple = 0,
        /**
         * Weighted average of the last n values,
         * where the weight decreases by 1 with each previous value.
         */
        Weighted = 1,
        /**
         * Weighted average of the last n values,
         * where the weight decreases exponentially with each previous value.
         */
        Exponential = 2,
        /**
         * Weighted average of the last n values,
         * whose result is equivalent to a double smoothed simple moving average.
         */
        Triangular = 3,
    }
    /**
     * Represents a moving average trend line for @see:FlexChart and @see:FinancialChart.
     *
     * It is a calculation to analyze data points by creating a series of averages of
     * different subsets of the full data set. You may define a different type on each
     * @see:MovingAverage object by setting the @see:type property on the
     * @see:MovingAverage itself.
     *
     * The @see:MovingAverage class has a @see:period property that allows you to set
     * the number of periods for computing the average value.
     */
    class MovingAverage extends TrendLineBase {
        private _period;
        private _type;
        /**
         * Initializes a new instance of the @see:MovingAverage class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the type of the moving average series.
         */
        type: MovingAverageType;
        /**
         * Gets or sets the period of the moving average series.
         * It should be set to integer value greater than 1.
         */
        period: number;
        _checkPeriod(): void;
        _calculateValues(): void;
        private _calculateSimple(x, y, forTMA?);
        private _calculateWeighted(x, y);
        private _calculateExponential(x, y);
        private _calculateTriangular(x, y);
    }
}

declare module wijmo.chart.analytics {
    /**
     * Represents a Waterfall series of @see:wijmo.chart.FlexChart.
     *
     * The @see:Waterfall series is normally used to demonstrate how
     * the starting position either increases or decreases through a
     * series of changes.
     */
    class Waterfall extends SeriesBase {
        static CSS_CONNECTOR_LINE_GROUP: string;
        static CSS_CONNECTOR_LINE: string;
        static CSS_ENDLABEL: string;
        _barPlotter: _BarPlotter;
        private _start;
        private _startLabel;
        private _relativeData;
        private _connectorLines;
        private _showTotal;
        private _totalLabel;
        private _styles;
        private _wfstyle;
        private _xValues;
        private _getXValues;
        private _yValues;
        private _showIntermediateTotal;
        private _intermediateTotalPositions;
        private _intermediateTotalLabels;
        private _intermediateTotalPos;
        /**
         * Initializes a new instance of the @see:Waterfall class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets a value that determines whether the given data
         * represents absolute or relative values (differences).
         */
        relativeData: boolean;
        /**
         * Gets or sets a value that determines the value of the start bar.
         * If start is null, the start bar will not be shown.
         */
        start: number;
        /**
         * Gets or sets the label of the start bar.
         */
        startLabel: string;
        /**
         * Gets or sets a value that determines whether to show
         * the total bar at the end of the chart.
         */
        showTotal: boolean;
        /**
         * Gets or sets the label of the total bar.
         */
        totalLabel: string;
        /**
         * Gets or sets a value that determines whether to show intermediate
         * total bars.
         *
         * This property works with @see:intermediateTotalPositions and
         * @see:intermediateTotalLabels properties.
         */
        showIntermediateTotal: boolean;
        /**
         * Gets or sets a value of the property that contains the index
         * for positions of the intermediate total bars.
         *
         * This property works with the @see:showIntermediateTotal and
         * @see:intermediateTotalLabels properties.
         */
        intermediateTotalPositions: number[];
        /**
         * Gets or sets the name of the property that contains labels for
         * the intermediate total bars. This should be an array or a string.
         *
         * This property works with the @see:showIntermediateTotal and
         * @see:intermediateTotalPositions properties.
         */
        intermediateTotalLabels: any;
        /**
         * Gets or sets a value that determines whether to show
         * connector lines.
         */
        connectorLines: boolean;
        /**
         * Gets or sets the Waterfall styles.
         *
         * The following styles are supported:
         *
         * <ol>
         *   <li><b>start</b>: Specifies the style of the start column.</li>
         *   <li><b>total</b>: Specifies the style of the total column.</li>
         *   <li><b>intermediateTotal</b>: Specifies the style of the intermediate total column.</li>
         *   <li><b>falling</b>: Specifies the style of the falling columns.</li>
         *   <li><b>rising</b>: Specifies the style of the rising columns.</li>
         *   <li><b>connectorLines</b>: Specifies the style of the connectorLines.</li>
         * </ol>
         *
         * <pre>waterfall.styles = {
         *   start: { fill: 'blue', stroke: 'blue' },
         *   total: { fill: 'yellow', stroke: 'yellow' },
         *   falling: { fill: 'red', stroke: 'red' },
         *   rising: { fill: 'green', stroke: 'green' },
         *   connectorLines: { stroke: 'blue', 'stroke-dasharray': '10, 10' }
         * }</pre>
         */
        styles: any;
        getValues(dim: number): number[];
        legendItemLength(): number;
        measureLegendItem(engine: IRenderEngine, index: number): Size;
        drawLegendItem(engine: IRenderEngine, rect: Rect, index: number): void;
        _clearValues(): void;
        _invalidate(): void;
        private _rendering(sender, args);
        private _getStyles();
        private _getStyleByKey(styles, key, fill, stroke);
        private _drawConnectorLine(engine, rotated, prevArea, currArea, falling);
        private _getLegendStyles(index);
        private _getName(index);
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the quartile calculation method of @see:BoxWhisker series.
     */
    enum QuartileCalculation {
        /** Include median value when calculating quartile. */
        InclusiveMedian = 0,
        /** Exclude median value when calculating quartile. */
        ExclusiveMedian = 1,
    }
    /**
     * Represents a Box&Whisker chart series.
     *
     * The @see:BoxWhisker series is normally used to compare distributions
     * between different sets of numerical data.
     */
    class BoxWhisker extends SeriesBase {
        private _groupWidth;
        private _gapWidth;
        private _showMeanLine;
        private _meanLineStyle;
        private _showMeanMarker;
        private _meanMarkerStyle;
        private _showInnerPoints;
        private _showOutliers;
        private _quartileCalculation;
        hitTester: _HitTester;
        /**
         * Initializes a new instance of the @see:BoxWhisker class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        private _initProperties(options);
        _clearValues(): void;
        /**
         * Gets or sets a value that specifies the quartile calculation method.
         */
        quartileCalculation: QuartileCalculation;
        /**
         * Gets or sets a value that determines the group width as a percentage.
         *
         * The default value for this property is 0.8. The min value is 0 and max value is 1.
         */
        groupWidth: number;
        /**
         * Gets or sets a value that determines the width of the gab between groups
         * as a percentage.
         *
         * The default value for this property is 0.1. The min value is 0 and max value is 1.
         */
        gapWidth: number;
        /**
         * Gets or sets a value that determines whether to show the mean line.
         */
        showMeanLine: boolean;
        /**
         * Gets or sets a value that specifies the style for the mean line.
         */
        meanLineStyle: any;
        /**
         * Gets or sets a value that determines whether to show the mean marker.
         */
        showMeanMarker: boolean;
        /**
         * Gets or sets a value that specifies the style for the mean marker.
         */
        meanMarkerStyle: any;
        /**
         * Gets or sets a value that determines whether to show the inner data points
         * for each point in the series.
         */
        showInnerPoints: boolean;
        /**
         * Gets or sets a value that determines whether to show outliers.
         *
         * Outliers are inner points outside the range between the first
         * and third quartiles.
         */
        showOutliers: boolean;
        private _rendering(sender, args);
        _convertPoints(points: number[], axis: _IAxis): number[];
        _drawBoxWhisker(engine: IRenderEngine, xs: any, ys: any, prevXS: any, prevYS: any, series: _ISeries): void;
        _renderLabels(engine: IRenderEngine, smap: _IHitArea[], chart: FlexChartCore, lblAreas: _RectArea[]): void;
    }
    class _BoxPlot {
        private _data;
        private _min;
        private _max;
        private _mean;
        private _firstQuartile;
        private _thirdQuartile;
        private _median;
        private _quartileCalculation;
        private _iqr;
        private _outlierPoints;
        private _innerPoints;
        private _showOutliers;
        constructor(data: number[], quartileCalculation: QuartileCalculation, showOutliers: boolean);
        readonly showOutliers: boolean;
        readonly min: number;
        readonly max: number;
        readonly mean: number;
        readonly firstQuartile: number;
        readonly thirdQuartile: number;
        readonly median: number;
        readonly outlierPoints: number[];
        readonly innerPoints: number[];
        _parse(): void;
        _quartileInc(data: number[], percent: number): any;
        _quartileExc(data: number[], percent: number): any;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the meaning of the @see:ErrorBar's @see:ErrorBar.value property.
     */
    enum ErrorAmount {
        /** The value property represents the error as an absolute value. */
        FixedValue = 0,
        /** The value property represents the error as a percentage. */
        Percentage = 1,
        /** The value property represents the error as a number of standard deviations. */
        StandardDeviation = 2,
        /** The error is the standard error of the mean (value property is not used). */
        StandardError = 3,
        /** Error values are bound through the @see:ErrorBar.binding property or set to an object with 'plus' and 'minus' values. */
        Custom = 4,
    }
    /**
     * Specifies the end style of the error bars.
     */
    enum ErrorBarEndStyle {
        /** Error bars end with a cap. */
        Cap = 0,
        /** Error bars are simple lines. */
        NoCap = 1,
    }
    /**
     * Specifies the direction of the error bar.
     */
    enum ErrorBarDirection {
        /** Show errors in both directions. */
        Both = 0,
        /** Show errors only in the minus direction. */
        Minus = 1,
        /** Show errors only in the plus direction. */
        Plus = 2,
    }
    /**
     * Represents an @see:ErrorBar series on a @see:wijmo.chart.FlexChart.
     *
     * The @see:ErrorBar series shows error margins and standard deviations
     * at a glance. They can be shown as a standard error amounts, percentages,
     * or standard deviation.
     *
     * You can also set the error values explicitly to display the exact
     * amounts you want.
     */
    class ErrorBar extends Series {
        private __errorValue;
        private _mean;
        private _errorAmount;
        private _endStyle;
        private _direction;
        private _value;
        private _errorBarStyle;
        private _paddings;
        private _plusBindingValues;
        private _minusBindingValues;
        /**
         * Initializes a new instance of the @see:ErrorBar class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets a value that specifies the error value of the series.
         *
         * This property works with the @see:errorAmount property.
         */
        value: any;
        /**
         * Gets or sets a value that specifies the meaning of the
         * @see:value property.
         */
        errorAmount: ErrorAmount;
        /**
         * Gets or sets the style used to render the error bars.
         */
        errorBarStyle: any;
        /**
         * Gets or sets a value that specifies the end style of the error bars.
         */
        endStyle: ErrorBarEndStyle;
        /**
         * Gets or sets a value that specifies the direction of the error bars.
         */
        direction: ErrorBarDirection;
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        private _getCustomValue(i);
        _calculateErrorValue(): void;
        _clearValues(): void;
        getValues(dim: number): number[];
        _chart: FlexChartCore;
        _errorValue: number;
        readonly _showPlus: boolean;
        readonly _showMinus: boolean;
        private _rendering(sender, args);
    }
}

