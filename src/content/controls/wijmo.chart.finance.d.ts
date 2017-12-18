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
declare module wijmo.chart.finance {
    function _trunc(value: number): number;
    function _sum(...values: number[]): number;
    function _sum(values: number[]): number;
    function _average(...values: number[]): number;
    function _average(values: number[]): number;
    function _minimum(...values: number[]): number;
    function _minimum(values: number[]): number;
    function _maximum(...values: number[]): number;
    function _maximum(values: number[]): number;
    function _variance(...values: number[]): number;
    function _variance(values: number[]): number;
    function _stdDeviation(...values: number[]): number;
    function _stdDeviation(values: number[]): number;
    function _avgTrueRng(highs: number[], lows: number[], closes: number[], period?: number): number[];
    function _trueRng(highs: number[], lows: number[], closes: number[], period?: number): number[];
    function _sma(values: number[], period: number): number[];
    function _ema(values: number[], period: number): number[];
    function _range(begin: number, end: number, step?: number): number[];
}

/**
 * Defines the @see:FinancialChart control and its associated classes.
 *
 */
declare module wijmo.chart.finance {
    /**
     * Specifies the type of financial chart.
     */
    enum FinancialChartType {
        /** Shows vertical bars and allows you to compare values of items across categories. */
        Column = 0,
        /** Uses X and Y coordinates to show patterns within the data. */
        Scatter = 1,
        /** Shows trends over a period of time or across categories. */
        Line = 2,
        /** Shows line chart with a symbol on each data point. */
        LineSymbols = 3,
        /** Shows line chart with area below the line filled with color. */
        Area = 4,
        /** Presents items with high, low, open, and close values.
         * The size of the wick line is determined by the High and Low values, while
         * the size of the bar is determined by the Open and Close values. The bar is
         * displayed using different colors, depending on whether the close value is
         * higher or lower than the open value. The data for this chart type can be defined using the
         *  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty".  */
        Candlestick = 5,
        /** Displays the same information as a candlestick chart, except that opening
         * values are displayed using lines to the left, while lines to the right
         * indicate closing values. The data for this chart type can be defined using the
         *  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty". */
        HighLowOpenClose = 6,
        /** Derived from the candlestick chart and uses information from the current and
         * prior period in order to filter out the noise. These charts cannot be combined
         * with any other series objects. The data for this chart type can be defined using the
         *  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty". */
        HeikinAshi = 7,
        /** Filters out noise by focusing exclusively on price changes. These charts cannot
         * be combined with any other series objects. The data for this chart type can be defined using the
         *  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty". */
        LineBreak = 8,
        /** Ignores time and focuses on price changes that meet a specified amount. These
         * charts cannot be combined with any other series objects. The data for this chart type can be defined using the
         *  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty". */
        Renko = 9,
        /** Ignores time and focuses on price action. These charts cannot be combined with
         * any other series objects. The data for this chart type can be defined using the
         *  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty". */
        Kagi = 10,
        /** Identical to the standard Column chart, except that the width of each bar is
         * determined by the Volume value. The data for this chart type can be defined using the
         *  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
         * following format: "yProperty, volumeProperty".  This chart type can only be used at
         * the @see:FinancialChart level, and should not be applied on
         * @see:FinancialSeries objects. Only one set of volume data is currently supported
         * per @see:FinancialChart. */
        ColumnVolume = 11,
        /** Similar to the Candlestick chart, but shows the high and low values only.
         * In addition, the width of each bar is determined by Volume value. The data for
         * this chart type can be defined using the  @see:FinancialChart or @see:FinancialSeries
         * <b>binding</b> property as a comma separated value in the following format:
         * "highProperty, lowProperty, openProperty, closeProperty, volumeProperty".
         * This chart type can only be used at the @see:FinancialChart level, and should not
         * be applied on @see:FinancialSeries objects. Only one set of volume data is currently
         * supported per @see:FinancialChart. */
        EquiVolume = 12,
        /** Identical to the standard Candlestick chart, except that the width of each
         * bar is determined by Volume value. The data for
         * this chart type can be defined using the  @see:FinancialChart or @see:FinancialSeries
         * <b>binding</b> property as a comma separated value in the following format:
         * "highProperty, lowProperty, openProperty, closeProperty, volumeProperty".
         * This chart type can only be used at the @see:FinancialChart level, and should not
         * be applied on @see:FinancialSeries objects. Only one set of volume data is currently
         * supported per @see:FinancialChart. */
        CandleVolume = 13,
        /** Created by Richard Arms, this chart is a combination of EquiVolume and
         * CandleVolume chart types. The data for
         * this chart type can be defined using the  @see:FinancialChart or @see:FinancialSeries
         * <b>binding</b> property as a comma separated value in the following format:
         * "highProperty, lowProperty, openProperty, closeProperty, volumeProperty".
         * This chart type can only be used at the @see:FinancialChart level, and should not
         * be applied on @see:FinancialSeries objects. Only one set of volume data is currently
         * supported per @see:FinancialChart. */
        ArmsCandleVolume = 14,
        /**
         * Point and figure financial chart.
         * The data for this chart type can be defined using the  @see:FinancialChart
         * or @see:FinancialSeries <b>binding</b> property as a comma separated value in
         * the following format: "highProperty, lowProperty, closeProperty".
         * This chart type can only be used at the @see:FinancialChart level, and should not
         * be applied on @see:FinancialSeries objects. */
        PointAndFigure = 15,
    }
    /**
     * Financial charting control.
     */
    class FinancialChart extends FlexChartCore {
        private _chartType;
        private __heikinAshiPlotter;
        private __lineBreakPlotter;
        private __renkoPlotter;
        private __kagiPlotter;
        private __pfPlotter;
        /**
         * Initializes a new instance of the @see:FlexChart class.
         *
         * @param element The DOM element that hosts the control, or a selector for the
         * host element (e.g. '#theCtrl').
         * @param options A JavaScript object containing initialization data for the
         * control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the type of financial chart to create.
         */
        chartType: FinancialChartType;
        /**
         * Gets or sets various chart options.
         *
         * The following options are supported:
         *
         * <b>kagi.fields</b>: Specifies the @see:DataFields used for
         * the Kagi chart. The default value is DataFields.Close.
         *
         * <b>kagi.rangeMode</b>: Specifies the @see:RangeMode for
         * the Kagi chart. The default value is RangeMode.Fixed.
         *
         * <b>kagi.reversalAmount</b>: Specifies the reversal amount for
         * the Kagi chart. The default value is 14.
         *
         * <pre>chart.options = {
         *   kagi: {
         *      fields: wijmo.chart.finance.DataFields.Close,
         *      rangeMode: wijmo.chart.finance.RangeMode.Fixed,
         *      reversalAmount: 14
         *   }
         * }</pre>
         *
         * <b>lineBreak.newLineBreaks</b>: Gets or sets the number of previous
         * boxes that must be compared before a new box is drawn in
         * Line Break charts. The default value is 3.
         *
         * <pre>chart.options = {
         *   lineBreak: { newLineBreaks: 3 }
         * }</pre>
         *
         * <b>renko.fields</b>: Specifies the @see:DataFields used for
         * the Renko chart. The default value is DataFields.Close.
         *
         * <b>renko.rangeMode</b>: Specifies the @see:RangeMode for
         * the Renko chart. The default value is RangeMode.Fixed.
         *
         * <b>renko.boxSize</b>: Specifies the box size for
         * the Renko chart. The default value is 14.
         *
         * <pre>chart.options = {
         *   renko: {
         *      fields: wijmo.chart.finance.DataFields.Close,
         *      rangeMode: wijmo.chart.finance.RangeMode.Fixed,
         *      boxSize: 14
         *   }
         * }</pre>
         */
        options: any;
        private readonly _heikinAshiPlotter;
        private readonly _lineBreakPlotter;
        private readonly _renkoPlotter;
        private readonly _kagiPlotter;
        private readonly _pfPlotter;
        _getChartType(): chart.ChartType;
        _getPlotter(series: FinancialSeries): _IPlotter;
        _createSeries(): SeriesBase;
    }
}

declare module wijmo.chart.finance {
    /**
     * Represents a series of data points to display in the chart.
     *
     * The @see:Series class supports all basic chart types. You may define
     * a different chart type on each @see:Series object that you add to the
     * @see:FlexChart series collection. This overrides the @see:chartType
     * property set on the chart that is the default for all @see:Series objects
     * in its collection.
     */
    class FinancialSeries extends SeriesBase {
        private _finChartType;
        /**
         * Gets or sets the chart type for a specific series, overriding the chart type
         * set on the overall chart. Please note that ColumnVolume, EquiVolume,
         * CandleVolume and ArmsCandleVolume chart types are not supported and should be
         * set on the @see:FinancialChart.
         */
        chartType: FinancialChartType;
        _getChartType(): chart.ChartType;
    }
}

declare module wijmo.chart.finance {
    interface _IFinanceItem {
        high: number;
        low: number;
        open: number;
        close: number;
        x: number;
        pointIndex: number;
    }
    interface _IFinancialCalculator {
        highs: number[];
        lows: number[];
        opens: number[];
        closes: number[];
        xs?: number[];
        size?: number;
        unit?: RangeMode;
        fields?: DataFields;
        calculate(): any;
    }
    class _BaseCalculator implements _IFinancialCalculator {
        highs: number[];
        lows: number[];
        opens: number[];
        closes: number[];
        constructor(highs: number[], lows: number[], opens: number[], closes: number[]);
        calculate(): any;
    }
    class _HeikinAshiCalculator extends _BaseCalculator {
        constructor(highs: number[], lows: number[], opens: number[], closes: number[]);
        calculate(): _IFinanceItem[];
    }
    class _BaseRangeCalculator extends _BaseCalculator {
        xs: number[];
        size: number;
        unit: RangeMode;
        fields: DataFields;
        constructor(highs: number[], lows: number[], opens: number[], closes: number[], xs: number[], size: number, unit?: RangeMode, fields?: DataFields);
        _getValues(): number[];
        _getSize(): number;
    }
    class _LineBreakCalculator extends _BaseRangeCalculator {
        constructor(highs: number[], lows: number[], opens: number[], closes: number[], xs: number[], size: number);
        calculate(): _IFinanceItem[];
        private _trendExists(vals);
    }
    class _KagiCalculator extends _BaseRangeCalculator {
        constructor(highs: number[], lows: number[], opens: number[], closes: number[], xs: number[], size: number, unit: RangeMode, field: DataFields);
        calculate(): _IFinanceItem[];
    }
    class _RenkoCalculator extends _BaseRangeCalculator {
        rounding: boolean;
        constructor(highs: number[], lows: number[], opens: number[], closes: number[], xs: number[], size: number, unit: RangeMode, field: DataFields, rounding?: boolean);
        calculate(): _IFinanceItem[];
        _round(value: number, size: number): number;
    }
}

declare module wijmo.chart.finance {
    class _HeikinAshiPlotter extends _FinancePlotter {
        private _haValues;
        private _calculator;
        private _symFactor;
        constructor();
        clear(): void;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: FinancialSeries, palette: _IPalette, iser: number, nser: number): void;
        _drawSymbol(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, si: number, pi: number, fill: any, w: number, x: number, hi: number, lo: number, open: number, close: number, dpt?: _DataPoint, dt?: DataType): void;
        _getDataPoint(seriesIndex: number, pointIndex: number, x: any, series: SeriesBase): _DataPoint;
        private _calculate(series);
        private _init();
    }
}

declare module wijmo.chart.finance {
    class _BaseRangePlotter extends _BasePlotter {
        private _symFactor;
        _calculator: _BaseRangeCalculator;
        _rangeValues: _IFinanceItem[];
        _rangeXLabels: any[];
        constructor();
        clear(): void;
        unload(): void;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: FinancialSeries, palette: _IPalette, iser: number, nser: number): void;
        _drawSymbol(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, si: number, pi: number, w: number, x: number, start: number, end: number, dpt: _DataPoint): void;
        _getDataPoint(seriesIndex: number, pointIndex: number, series: SeriesBase, dataY: number): _DataPoint;
        _init(): void;
        _calculate(series: FinancialSeries): void;
        _generateXLabels(series: FinancialSeries): void;
    }
    /**
     * Specifies which fields are to be used for calculation. Applies to Renko and Kagi chart types.
     */
    enum DataFields {
        /** Close values are used for calculations. */
        Close = 0,
        /** High values are used for calculations. */
        High = 1,
        /** Low values are used for calculations. */
        Low = 2,
        /** Open values are used for calculations. */
        Open = 3,
        /** High-Low method is used for calculations. DataFields.HighLow is currently not
         * supported with Renko chart types. */
        HighLow = 4,
        /** Average of high and low values is used for calculations. */
        HL2 = 5,
        /** Average of high, low, and close values is used for calculations. */
        HLC3 = 6,
        /** Average of high, low, open, and close values is used for calculations. */
        HLOC4 = 7,
    }
    /**
     * Specifies the unit for Kagi and Renko chart types.
     */
    enum RangeMode {
        /** Uses a fixed, positive number for the Kagi chart's reversal amount
         * or Renko chart's box size. */
        Fixed = 0,
        /** Uses the current Average True Range value for Kagi chart's reversal amount
         * or Renko chart's box size. When ATR is used, the reversal amount or box size
         * option of these charts must be an integer and will be used as the period for
         * the ATR calculation. */
        ATR = 1,
        /** Uses a percentage for the Kagi chart's reversal amount. RangeMode.Percentage
         * is currently not supported with Renko chart types. */
        Percentage = 2,
    }
}

declare module wijmo.chart.finance {
    class _LineBreakPlotter extends _BaseRangePlotter {
        private _newLineBreaks;
        constructor();
        clear(): void;
        _calculate(series: FinancialSeries): void;
        _init(): void;
    }
}

declare module wijmo.chart.finance {
    class _RenkoPlotter extends _BaseRangePlotter {
        private _boxSize;
        private _rangeMode;
        private _fields;
        private _rounding;
        constructor();
        clear(): void;
        _calculate(series: FinancialSeries): void;
        _init(): void;
        _generateXLabels(series: FinancialSeries): void;
    }
}

declare module wijmo.chart.finance {
    class _KagiPlotter extends _BaseRangePlotter {
        private _reversalAmount;
        private _rangeMode;
        private _fields;
        constructor();
        _calculate(series: FinancialSeries): void;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: FinancialSeries, palette: _IPalette, iser: number, nser: number): void;
        _init(): void;
        clear(): void;
    }
}

declare module wijmo.chart.finance {
    /**
     * Specifies the scaling mode for point and figure chart.
     */
    enum PointAndFigureScaling {
        /** Traditional scaling. The box size is calculated automatically based on price range.  */
        Traditional = 0,
        /** Fixed scaling. The box size is defined by boxSize property. */
        Fixed = 1,
        /** Dynamic(ATR) scaling. The box size is calculated based on ATR. */
        Dynamic = 2,
    }
    class _PointAndFigurePlotter extends _BasePlotter {
        private _boxSize;
        private _reversal;
        private _period;
        private _fields;
        private _scaling;
        private _actualBoxSize;
        private _pfdata;
        private _xlbls;
        constructor();
        clear(): void;
        unload(): void;
        _init(): void;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: FinancialSeries, palette: _IPalette, iser: number, nser: number): void;
        private calcBoxSize(data, fieldHi, fieldLo);
        private calcPFHiLo2(data, fieldHi, fieldLo, xbnd, boxSize, reversal);
        private roundUp(val, boxSize);
        private roundDown(val, boxSize);
        private renderGrid(engine, data, boxSize);
        private renderData(chart, engine, data, boxSize);
    }
}

