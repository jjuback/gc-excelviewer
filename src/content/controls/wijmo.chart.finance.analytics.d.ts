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
 * Analytics extensions for @see:FinancialChart.
 */
declare module wijmo.chart.finance.analytics {
    /**
     * Represents a Fibonacci Retracements tool for the @see:FinancialChart.

     * The tool enables the calculation and plotting of various alert levels that are
     * useful in financial charts.
     *
     * To add Fibonacci tool to a @see:FinancialChart control, create an instance
     * of the @see:Fibonacci and add it to the <b>series</b> collection of the chart.
     * For example:
     *
     * <pre>
     * // create chart
     * var chart = new wijmo.chart.finance.FinancialChart('#chartElement');
     * // create Fibonacci tool
     * var ftool = new wijmo.chart.finance.analytics.Fibonacci();
     * chart.series.push(ftool);
     * </pre>
      */
    class Fibonacci extends SeriesBase {
        private _high;
        private _low;
        private _minX;
        private _maxX;
        private _actualHigh;
        private _actualLow;
        private _levels;
        private _uptrend;
        private _labelPosition;
        /**
         * Initializes a new instance of the @see:Fibonacci class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the low value of @see:Fibonacci tool.
         *
         * If not specified, the low value is calculated based on data values provided by <b>itemsSource</b>.
         */
        low: number;
        /**
         * Gets or sets the high value of @see:Fibonacci tool.
         *
         * If not specified, the high value is caclulated based on
         * data values provided by the <b>itemsSource</b>.
         */
        high: number;
        /**
         * Gets or sets the label position for levels in @see:Fibonacci tool.
         */
        labelPosition: LabelPosition;
        /**
         * Gets or sets a value indicating whether to create uptrending @see:Fibonacci tool.
         *
         * Default value is true(uptrend). If the value is false, the downtrending levels are plotted.
         */
        uptrend: boolean;
        /**
         * Gets or sets the array of levels for plotting.
         *
         * Default value is [0, 23.6, 38.2, 50, 61.8, 100].
         */
        levels: number[];
        /**
         * Gets or sets the x minimal value of the @see:Fibonacci tool.
         *
         * If not specified, current minimum of x-axis is used.
         * The value can be specified as a number or Date object.
         */
        minX: any;
        /**
         * Gets or sets the x maximum value of the @see:Fibonacci tool.
         *
         * If not specified, current maximum of x-axis is used.
         * The value can be specified as a number or Date object.
         */
        maxX: any;
        private _getMinX();
        private _getMaxX();
        private _updateLevels();
        private _render(sender, args);
        _getChartType(): ChartType;
    }
    /**
     * Represents a Fibonacci Arcs tool for the @see:FinancialChart.
     */
    class FibonacciArcs extends SeriesBase {
        private _start;
        private _end;
        private _levels;
        private _labelPosition;
        /**
         * Initializes a new instance of the @see:FibonacciArcs class.
         *
         * @param options A JavaScript object containing initialization data.
         */
        constructor(options?: any);
        /**
         * Gets or sets the starting @see:DataPoint for the base line.
         *
         * The @see:DataPoint x value can be a number or a Date object
         * (for time-based data).
         *
         * Unlike some of the other Fibonacci tools, the starting
         * @see:DataPoint is <b>not</b> calculated automatically if
         * undefined.
         */
        start: DataPoint;
        /**
         * Gets or sets the ending @see:DataPoint for the base line.
         *
         * The @see:DataPoint x value can be a number or a Date object
         * (for time-based data).
         *
         * Unlike some of the other Fibonacci tools, the ending
         * @see:DataPoint is <b>not</b> calculated automatically if
         * undefined.
         */
        end: DataPoint;
        /**
         * Gets or sets the array of levels for plotting.
         *
         * Default value is [38.2, 50, 61.8].
         */
        levels: number[];
        /**
         * Gets or sets the @see:LabelPosition for levels in @see:FibonacciArcs tool.
         */
        labelPosition: LabelPosition;
        _render(sender: SeriesBase, args: RenderEventArgs): void;
        private _getX(dim);
        private _getY(dim);
        _getChartType(): ChartType;
    }
    /**
     * Represents a Fibonacci Fans tool for the @see:FinancialChart.
     */
    class FibonacciFans extends SeriesBase {
        private _start;
        private _end;
        private _levels;
        private _labelPosition;
        /**
         * Initializes a new instance of the @see:FibonacciFans class.
         *
         * @param options A JavaScript object containing initialization data.
         */
        constructor(options?: any);
        /**
         * Gets or sets the starting @see:DataPoint for the base line.
         *
         * If not set, the starting @see:DataPoint is calculated automatically.
         * The @see:DataPoint x value can be a number or a Date object (for
         * time-based data).
         */
        start: DataPoint;
        /**
         * Gets or sets the ending @see:DataPoint for the base line.
         *
         * If not set, the starting @see:DataPoint is calculated automatically.
         * The @see:DataPoint x value can be a number or a Date object (for
         * time-based data).
         */
        end: DataPoint;
        /**
         * Gets or sets the array of levels for plotting.
         *
         * Default value is [0, 23.6, 38.2, 50, 61.8, 100].
         */
        levels: number[];
        /**
         * Gets or sets the @see:LabelPosition for levels in @see:FibonacciFans tool.
         */
        labelPosition: LabelPosition;
        _updateLevels(): void;
        _render(sender: SeriesBase, args: RenderEventArgs): void;
        private _getX(dim);
        private _getY(dim);
        _getChartType(): ChartType;
    }
    /**
     * Represents a Fibonacci Time Zones tool for the @see:FinancialChart.
     */
    class FibonacciTimeZones extends SeriesBase {
        private _startX;
        private _endX;
        private _levels;
        private _labelPosition;
        /**
         * Initializes a new instance of the @see:FibonacciTimeZones class.
         *
         * @param options A JavaScript object containing initialization data.
         */
        constructor(options?: any);
        /**
         * Gets or sets the starting X data point for the time zones.
         *
         * If not set, the starting X data point is calculated automatically. The
         * value can be a number or a Date object (for time-based data).
         */
        startX: any;
        /**
         * Gets or sets the ending X data point for the time zones.
         *
         * If not set, the ending X data point is calculated automatically. The
         * value can be a number or a Date object (for time-based data).
         */
        endX: any;
        /**
         * Gets or sets the array of levels for plotting.
         *
         * Default value is [0, 1, 2, 3, 5, 8, 13, 21, 34].
         */
        levels: number[];
        /**
         * Gets or sets the @see:LabelPosition for levels in @see:FibonacciTimeZones tool.
         */
        labelPosition: LabelPosition;
        _render(sender: SeriesBase, args: RenderEventArgs): void;
        _updateLevels(): void;
        private _getX(dim);
        _getChartType(): ChartType;
    }
}

declare module wijmo.chart.finance.analytics {
    /**
     * Base class for overlay and indicator series (abstract).
     */
    class OverlayIndicatorBase extends SeriesBase {
        private __hitTester;
        _styles: any;
        _seriesCount: number;
        /**
         * Initializes a new instance of the @see:OverlayIndicatorBase class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        readonly _hitTester: _HitTester;
        _getChartType(): ChartType;
        _getXValues(): number[];
        _getDataPoint(dataX: number, dataY: number, seriesIndex: number, pointIndex: number, ax: Axis, ay: Axis): _DataPoint;
        _shouldCalculate(): boolean;
        _init(): void;
        _calculate(): void;
        _clearValues(): void;
        _getName(dim: number): string;
        _getStyles(dim: number): any;
        legendItemLength(): number;
        measureLegendItem(engine: IRenderEngine, index: number): Size;
        drawLegendItem(engine: IRenderEngine, rect: Rect, index: number): void;
    }
    /**
     * Base class for overlay and indicator series that render a single series (abstract).
     */
    class SingleOverlayIndicatorBase extends OverlayIndicatorBase {
        private _period;
        _xvals: number[];
        _yvals: number[];
        /**
         * Initializes a new instance of the @see:SingleOverlayIndicatorBase class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the period for the calculation as an integer value.
         */
        period: any;
        getValues(dim: number): number[];
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        _clearValues(): void;
        _shouldCalculate(): boolean;
        _init(): void;
        _getItem(pointIndex: number): any;
    }
}

declare module wijmo.chart.finance.analytics {
    /**
     * Represents an Average True Range indicator series for the @see:FinancialChart.
     *
     * Average true range is used to measure the volatility of an asset. Average true range
     * does not provide any indication of the price's trend, but rather the degree of price
     * volatility.
     */
    class ATR extends SingleOverlayIndicatorBase {
        /**
         * Initializes a new instance of the @see:ATR class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        _calculate(): void;
    }
}

declare module wijmo.chart.finance.analytics {
    /**
     * Represents a Commodity Channel Index indicator series for the @see:FinancialChart.
     *
     * The commodity channel index is an oscillator that measures an asset's current price
     * level relative to an average price level over a specified period of time.
     */
    class CCI extends SingleOverlayIndicatorBase {
        private _constant;
        /**
         * Initializes a new instance of the @see:CCI class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the constant value for the CCI calculation.  The default
         * value is 0.015.
         */
        constant: number;
        _calculate(): void;
    }
    function _cci(highs: number[], lows: number[], closes: number[], period: number, constant: number): number[];
}

declare module wijmo.chart.finance.analytics {
    /**
     * Represents a Willaims %R indicator series for the @see:FinancialChart.
     *
     * Williams %R is a momentum indicator that is the inverse of a fast stochastic
     * oscillator (@see:Stochastic).  The Williams %R indicator is designed to
     * tell whether an asset is trading near the high or low of its trading range.
     */
    class WilliamsR extends SingleOverlayIndicatorBase {
        /**
         * Initializes a new instance of the @see:WilliamsR class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        _calculate(): void;
    }
    function _williamsR(highs: number[], lows: number[], closes: number[], period: number): number[];
}

declare module wijmo.chart.finance.analytics {
    enum MovingAverageType {
        Simple = 0,
        Exponential = 1,
    }
    /**
     * Represents a Moving Average Envelopes overlay series for the @see:FinancialChart.
     *
     * Moving average envelopes are moving averages set above and below a standard moving
     * average.  The amount above/below the standard moving average is percentage based and
     * dictated by the @see:size property.
     */
    class Envelopes extends OverlayIndicatorBase {
        private _upperYVals;
        private _lowerYVals;
        private _xVals;
        private _period;
        private _type;
        private _size;
        /**
         * Initializes a new instance of the @see:Envelopes class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the period for the calculation as an integer value.
         */
        period: any;
        /**
         * Gets or sets the moving average type for the
         * envelopes.  The default value is Simple.
         */
        type: MovingAverageType;
        /**
         * Gets or set the size of the moving average
         * envelopes.  The default value is 2.5 percent (0.025).
         */
        size: number;
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        _clearValues(): void;
        _init(): void;
        _shouldCalculate(): boolean;
        _calculate(): void;
        private _rendering(sender, args);
        getCalculatedValues(key: string): any[];
    }
}

declare module wijmo.chart.finance.analytics {
    /**
     * Represents a Bollinger Bands&reg; overlay series for the @see:FinancialChart.
     *
     * <i>Bollinger Bands is a registered trademark of John Bollinger.</i>
     */
    class BollingerBands extends OverlayIndicatorBase {
        private _upperYVals;
        private _middleYVals;
        private _lowerYVals;
        private _xVals;
        private _period;
        private _multiplier;
        /**
         * Initializes a new instance of the @see:BollingerBands class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the period for the calculation as an integer value.
         */
        period: any;
        /**
         * Gets or sets the standard deviation multiplier.
         */
        multiplier: number;
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        _clearValues(): void;
        _shouldCalculate(): boolean;
        _init(): void;
        _calculate(): void;
        private _rendering(sender, args);
        getCalculatedValues(key: string): any[];
    }
    function _bollingerBands(ys: number[], period: number, multiplier: number): any;
}

declare module wijmo.chart.finance.analytics {
    /**
     * Represents a Relative Strength Index indicator series for the @see:FinancialChart.
     *
     * Relative strength index is a momentum oscillator designed to measure the current
     * and historical strength or weakness of an asset based on the closing prices of a
     * recent trading period.
     */
    class RSI extends SingleOverlayIndicatorBase {
        /**
         * Initializes a new instance of the @see:RSI class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        _calculate(): void;
    }
    function _rsi(ys: number[], period: number): number[];
}

declare module wijmo.chart.finance.analytics {
    /**
     * Base class for @see:Macd and @see:MacdHistogram series (abstract).
     */
    class MacdBase extends OverlayIndicatorBase {
        _macdXVals: number[];
        _macdVals: number[];
        _signalXVals: number[];
        _signalVals: number[];
        _histogramXVals: number[];
        _histogramVals: number[];
        private _fastPeriod;
        private _slowPeriod;
        private _smoothingPeriod;
        /**
         * Initializes a new instance of the @see:MacdBase class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the fast exponential moving average period
         * for the MACD line.
         */
        fastPeriod: number;
        /**
         * Gets or sets the slow exponential moving average period
         * for the MACD line.
         */
        slowPeriod: number;
        /**
         * Gets or sets the exponential moving average period
         * for the signal line.
         */
        smoothingPeriod: number;
        _clearValues(): void;
        _shouldCalculate(): boolean;
        _init(): void;
        _calculate(): void;
    }
    /**
     * Represents a Moving Average Convergence/Divergence (MACD) indicator series
     * for the @see:FinancialChart.
     *
     * The MACD indicator is designed to reveal changes in strength, direction, momentum,
     * and duration of an asset's price trend.
     */
    class Macd extends MacdBase {
        /**
         * Initializes a new instance of the @see:Macd class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the styles for the MACD and Signal lines.
         *
         * The following options are supported:
         *
         * <pre>series.styles = {
         *   macdLine: {
         *      stroke: 'red',
         *      strokeWidth: 1
         *   },
         *   signalLine: {
         *      stroke: 'green',
         *      strokeWidth: 1
         *   },
         * }</pre>
         */
        styles: any;
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        private _rendering(sender, args);
        getCalculatedValues(key: string): any[];
    }
    /**
     * Represents a Moving Average Convergence/Divergence (MACD) Histogram indicator series
     * for the @see:FinancialChart.
     *
     * The MACD indicator is designed to reveal changes in strength, direction, momentum,
     * and duration of an asset's price trend.
     */
    class MacdHistogram extends MacdBase {
        /**
         * Initializes a new instance of the @see:MacdHistogram class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        getValues(dim: number): number[];
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        _getChartType(): ChartType;
        _getItem(pointIndex: number): any;
    }
    function _macd(ys: number[], fastPeriod: number, slowPeriod: number, smoothingPeriod: number): any;
}

declare module wijmo.chart.finance.analytics {
    /**
     * Represents a Stochastic Oscillator indicator series for the @see:FinancialChart.
     *
     * Stochastic oscillators are momentum indicators designed to predict price turning
     * points by comparing an asset's closing price to its high-low range.
     *
     * The @see:Stochastic series can be used for fast (default), slow and full stochastic
     * oscillators.  To create a slow or full stochastic oscillator, set the @see:smoothingPeriod
     * to an integer value greater than one; slow stochastic oscillators generally use a fixed
     * @see:smoothingPeriod of three.  To create or revert to a fast stochastic oscillator, set the
     * @see:smoothingPeriod to an integer value of one.
     */
    class Stochastic extends OverlayIndicatorBase {
        private _kVals;
        private _kXVals;
        private _dVals;
        private _dXVals;
        private _kPeriod;
        private _dPeriod;
        private _smoothingPeriod;
        /**
         * Initializes a new instance of the @see:Stochastic class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the period for the %K calculation.
         */
        kPeriod: number;
        /**
         * Gets or sets the period for the %D simple moving average.
         */
        dPeriod: number;
        /**
         * Gets or sets the smoothing period for full %K.
         */
        smoothingPeriod: number;
        /**
         * Gets or sets the styles for the %K and %D lines.
         *
         * The following options are supported:
         *
         * <pre>series.styles = {
         *   kLine: {
         *      stroke: 'red',
         *      strokeWidth: 1
         *   },
         *   dLine: {
         *      stroke: 'green',
         *      strokeWidth: 1
         *   },
         * }</pre>
         */
        styles: any;
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        _clearValues(): void;
        _shouldCalculate(): boolean;
        _init(): void;
        _calculate(): void;
        private _rendering(sender, args);
        getCalculatedValues(key: string): any[];
    }
    function _stochastic(highs: number[], lows: number[], closes: number[], kPeriod: number, dPeriod: number, smoothingPeriod: number): any;
}

