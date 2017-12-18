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
 * Defines the @see:ChartAnimation for @see:FlexChart, @see:FinancialChart and @see:FlexPie.
 */
declare module wijmo.chart.animation {
    /**
     * Specifies the rate of change of a parameter over time.
     */
    enum Easing {
        /** Simple linear tweening, no easing and no acceleration. */
        Linear = 0,
        /** Easing equation for a swing easing */
        Swing = 1,
        /** Easing equation for a quadratic easing in, accelerating from zero velocity. */
        EaseInQuad = 2,
        /** Easing equation for a quadratic easing out, decelerating to zero velocity. */
        EaseOutQuad = 3,
        /** Easing equation for a quadratic easing in and out, acceleration until halfway, then deceleration. */
        EaseInOutQuad = 4,
        /** Easing equation for a cubic easing in - accelerating from zero velocity. */
        EaseInCubic = 5,
        /** Easing equation for a cubic easing out - decelerating to zero velocity. */
        EaseOutCubic = 6,
        /** Easing equation for a cubic easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutCubic = 7,
        /** Easing equation for a quartic easing in - accelerating from zero velocity. */
        EaseInQuart = 8,
        /** Easing equation for a quartic easing out - decelerating to zero velocity. */
        EaseOutQuart = 9,
        /** Easing equation for a quartic easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutQuart = 10,
        /** Easing equation for a quintic easing in - accelerating from zero velocity. */
        EaseInQuint = 11,
        /** Easing equation for a quintic easing out - decelerating to zero velocity. */
        EaseOutQuint = 12,
        /** Easing equation for a quintic easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutQuint = 13,
        /** Easing equation for a sinusoidal easing in - accelerating from zero velocity. */
        EaseInSine = 14,
        /** Easing equation for a sinusoidal easing out - decelerating to zero velocity.  */
        EaseOutSine = 15,
        /** Easing equation for a sinusoidal easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutSine = 16,
        /** Easing equation for an exponential easing in - accelerating from zero velocity. */
        EaseInExpo = 17,
        /** Easing equation for an exponential easing out - decelerating to zero velocity. */
        EaseOutExpo = 18,
        /** Easing equation for an exponential easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutExpo = 19,
        /** Easing equation for a circular easing in - accelerating from zero velocity. */
        EaseInCirc = 20,
        /** Easing equation for a circular easing out - decelerating to zero velocity. */
        EaseOutCirc = 21,
        /** Easing equation for a circular easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutCirc = 22,
        /** Easing equation for a back easing in - accelerating from zero velocity. */
        EaseInBack = 23,
        /** Easing equation for a back easing out - decelerating to zero velocity. */
        EaseOutBack = 24,
        /** Easing equation for a back easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutBack = 25,
        /** Easing equation for a bounce easing in - accelerating from zero velocity. */
        EaseInBounce = 26,
        /** Easing equation for a bounce easing out - decelerating to zero velocity. */
        EaseOutBounce = 27,
        /** Easing equation for a bounce easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutBounce = 28,
        /** Easing equation for an elastic easing in - accelerating from zero velocity. */
        EaseInElastic = 29,
        /** Easing equation for an elastic easing out - decelerating to zero velocity. */
        EaseOutElastic = 30,
        /** Easing equation for an elastic easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutElastic = 31,
    }
    /**
     * Specifies the animation mode whether chart should animate one point at a time,
     * series by series, or all at once.
     */
    enum AnimationMode {
        /** All points and series are animated at once. */
        All = 0,
        /**
         * Animation is performed point by point. Multiple series are animated
         * simultaneously at the same time.
        */
        Point = 1,
        /**
         * Animation is performed series by series.
         * Entire series is animated at once, following the same animation as the "All"
         * option, but just one series at a time.
         */
        Series = 2,
    }
    /**
     * Represents the animation for @see:FlexChart, @see:FinancialChart and @see:FlexPie.
     *
     * The @see:ChartAnimation provides built-in animation while loading and updating
     * the chart.
     * The animation can be configured by the user through several properties that
     * include duration, easing function, animation mode.
     */
    class ChartAnimation {
        private _chart;
        private _animation;
        private _cv;
        private _updateEventArgs;
        private _chartType;
        private _play;
        /**
         * Initializes a new instance of the @see:ChartAnimation class.
         *
         * @param chart A chart to which the @see:ChartAnimation is attached.
         * @param options A JavaScript object containing initialization data for
         * @see:ChartAnimation.
         */
        constructor(chart: FlexChartBase, options?: any);
        private _initOptions(options);
        private _setCV(cv);
        /**
         * Gets or sets whether the plot points animate one at a time, series by series,
         * or all at once.
         * The whole animation is still completed within the duration.
         */
        animationMode: AnimationMode;
        /**
         * Gets or sets the easing function applied to the animation.
         */
        easing: Easing;
        /**
         * Gets or sets the length of entire animation in milliseconds.
         */
        duration: number;
        /**
         * Gets or sets a value indicating whether animation is applied to the axis.
         */
        axisAnimation: boolean;
        private _playAnimation();
        /**
         * Performs the animation.
         */
        animate(): void;
    }
}

