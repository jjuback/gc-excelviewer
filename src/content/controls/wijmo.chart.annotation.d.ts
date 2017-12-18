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
declare module wijmo.chart.annotation {
    /**
     * Specifies the attachment of the annotation.
     */
    enum AnnotationAttachment {
        /**
        * Coordinates of the annotation point are defined by the data series index and
        * the data point index. */
        DataIndex = 0,
        /** Annotation point is specified in data coordinates. */
        DataCoordinate = 1,
        /** Annotation point is specified as a relative position inside the control where
        * (0,0) is the top left corner and (1,1) is the bottom right corner.*/
        Relative = 2,
        /** The annotation point is specified in control's pixel coordinates.  */
        Absolute = 3,
    }
    /**
     * Specifies the position of the annotation.
     */
    enum AnnotationPosition {
        /** The annotation appears at the Center of the target point. */
        Center = 0,
        /** The annotation appears at the Top of the target point. */
        Top = 1,
        /** The annotation appears at the Bottom of the target point. */
        Bottom = 2,
        /** The annotation appears at the Left of the target point. */
        Left = 4,
        /** The annotation appears at the Right of the target point. */
        Right = 8,
    }
    /**
     * Represents the base class of annotations for the @see:AnnotationLayer.
     */
    class AnnotationBase {
        static _DATA_KEY: string;
        static _CSS_ANNOTATION: string;
        static _CSS_ANNO_TEXT: string;
        static _CSS_ANNO_SHAPE: string;
        private _attachment;
        private _point;
        private _seriesIndex;
        private _pointIndex;
        private _position;
        private _offset;
        private _style;
        private _isVisible;
        private _tooltip;
        private _name;
        _element: SVGElement;
        _layer: AnnotationLayer;
        /**
         * Initializes a new instance of the @see:AnnotationBase class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the attachment of the annotation.
         */
        attachment: AnnotationAttachment;
        /**
         * Gets or sets the point of the annotation.
         * The coordinates of points depends on the @see:attachment property.
         * See @see:AnnotationAttachment for further description.
         */
        point: DataPoint;
        /**
         * Gets or sets the data series index of the annotation.
         * Applies only when the <b>attachment</b> property is set to DataIndex.
         */
        seriesIndex: number;
        /**
         * Gets or sets the data point index of the annotation.
         * Applies only when the <b>attachment</b> property is set to DataIndex.
         */
        pointIndex: number;
        /**
         * Gets or sets the position of the annotation.
         * The position is relative to the @see:point.
         */
        position: AnnotationPosition;
        /**
         * Gets or sets the offset of the annotation from the @see:point.
         */
        offset: Point;
        /**
         * Gets or sets the style of the annotation.
         */
        style: any;
        /**
         * Gets or sets the visibility of the annotation.
         */
        isVisible: boolean;
        /**
         * Gets or sets the tooltip of the annotation.
         */
        tooltip: string;
        /**
         * Gets or sets the name of the annotation.
         */
        name: string;
        /**
         * Render this annotation.
         *
         * @param engine The engine to render annotation.
         */
        render(engine: IRenderEngine): void;
        /**
         * Destroy this annotation
         */
        destroy(): void;
        _copy(dst: any, src: any): void;
        _processOptions(key: any, dst: any, src: any): void;
        _resetDefaultValue(): void;
        _toggleVisibility(visible: boolean): void;
        _getCSSClass(): string;
        _render(engine: IRenderEngine): void;
        _repaint(): void;
        _convertPoint(pt?: DataPoint): Point;
        _convertDataToLen(total: number, axis: Axis, val: any, converted?: boolean): number;
        _renderCenteredText(content: string, engine: IRenderEngine, point: Point, className?: string, angle?: number, style?: any): void;
        _adjustOffset(pt: Point, offset: Point): void;
        _getOffset(engine?: IRenderEngine): Point;
        _getPositionOffset(engine?: IRenderEngine): Point;
        _getSize(engine?: IRenderEngine): Size;
        _isValidPoint(pt: Point): boolean;
        _measureString(engine: IRenderEngine, text: string, className: string): Size;
    }
    /**
     * Represents a text annotation for the @see:AnnotationLayer.
     */
    class Text extends AnnotationBase {
        static _CSS_TEXT: string;
        private _text;
        /**
         * Initializes a new instance of the @see:Text annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        /**
         * Gets or sets the text of the annotation.
         */
        text: string;
        _render(engine: IRenderEngine): void;
        _getSize(engine?: IRenderEngine): Size;
    }
    /**
     * Represents a base class of shape annotations for the @see:AnnotationLayer.
     */
    class Shape extends AnnotationBase {
        static _CSS_SHAPE: string;
        private _content;
        _shapeContainer: SVGGElement;
        /**
         * Initializes a new instance of the @see:Shape annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        /**
         * Gets or sets the text of the annotation.
         */
        content: string;
        _render(engine: IRenderEngine): void;
        _getContentCenter(): DataPoint;
        _renderShape(engine: IRenderEngine): void;
        _renderText(engine: IRenderEngine): void;
    }
    /**
     * Represents an ellipse annotation for @see:AnnotationLayer.
     */
    class Ellipse extends Shape {
        static _CSS_ELLIPSE: string;
        private _width;
        private _height;
        /**
         * Initializes a new instance of the @see:Ellipse annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the width of the @see:Ellipse annotation.
         */
        width: number;
        /**
         * Gets or sets the height of the @see:Ellipse annotation.
         */
        height: number;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents a rectangle annotation for @see:AnnotationLayer.
     */
    class Rectangle extends Shape {
        static _CSS_RECTANGLE: string;
        private _width;
        private _height;
        /**
         * Initializes a new instance of the @see:Rectangle annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the width of the @see:Rectangle annotation.
         */
        width: number;
        /**
         * Gets or sets the height of the @see:Rectangle annotation.
         */
        height: number;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents a line annotation for @see:AnnotationLayer.
     */
    class Line extends Shape {
        static _CSS_LINE: string;
        private _start;
        private _end;
        private _cS;
        private _cE;
        /**
         * Initializes a new instance of the @see:Line annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the start point of the @see:Line annotation.
         */
        start: DataPoint;
        /**
         * Gets or sets the end point of the Line annotation.
         */
        end: DataPoint;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _getContentCenter(): DataPoint;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
        _renderText(engine: IRenderEngine): void;
        _renderCenteredText(content: string, engine: IRenderEngine, point: Point, className?: string, angle?: number, style?: any): void;
    }
    /**
     * Represents a polygon annotation for @see:AnnotationLayer.
     */
    class Polygon extends Shape {
        static _CSS_POLYGON: string;
        private _points;
        /**
         * Initializes a new instance of the @see:Polygon annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        _processOptions(key: any, dst: any, src: any): void;
        /**
         * Gets the collection of points of the @see:Polygon annotation.
         */
        readonly points: wijmo.collections.ObservableArray;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _getContentCenter(): DataPoint;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents a circle annotation for @see:AnnotationLayer.
     */
    class Circle extends Shape {
        static _CSS_CIRCLE: string;
        private _radius;
        /**
         * Initializes a new instance of the @see:Circle annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the radius of the @see:Circle annotation.
         */
        radius: number;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents a square annotation for the @see:AnnotationLayer.
     */
    class Square extends Shape {
        static _CSS_SQUARE: string;
        private _length;
        /**
         * Initializes a new instance of the @see:Square annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the length of the @see:Square annotation.
         */
        length: number;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents an image annotation for @see:AnnotationLayer.
     */
    class Image extends Shape {
        static _CSS_IMAGE: string;
        private _width;
        private _height;
        private _href;
        /**
         * Initializes a new instance of the @see:Image annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the width of the @see:Image annotation.
         */
        width: number;
        /**
         * Gets or sets the height of the @see:Image annotation.
         */
        height: number;
        /**
         * Gets or sets the href of the @see:Image annotation.
         */
        href: string;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
        private _applyStyle(el, style);
        private _deCase(s);
    }
}

/**
 * Defines the @see:AnnotationLayer and various annotations for @see:FlexChart and
 * @see:FinancialChart.
 */
declare module wijmo.chart.annotation {
    /**
     * Represents an annotation layer for @see:FlexChart and @see:FinancialChart.
     *
     * The AnnotationLayer contains a collection of various annotation elements: texts,
     * lines, images, rectangles etc.
     * To use the @see:AnnotationLayer, create annotations and push them to the layer's
     * items property.
     */
    class AnnotationLayer {
        static _CSS_Layer: string;
        private _items;
        private _engine;
        _layerEle: SVGGElement;
        private _plotrectId;
        private _tooltip;
        private _forceTTShowing;
        private _annoTTShowing;
        _chart: FlexChartCore;
        /**
         * Initializes a new instance of the @see:AnnotationLayer class.
         *
         * @param chart A chart to which the @see:AnnotationLayer is attached.
         * @param options A JavaScript object containing initialization data for
         * @see:AnnotationLayer.
         */
        constructor(chart: FlexChartCore, options?: any);
        _init(chart: FlexChartCore): void;
        private _lostFocus(evt);
        /**
         * Gets the collection of annotation elements in the @see:AnnotationLayer.
         */
        readonly items: wijmo.collections.ObservableArray;
        /**
         * Gets an annotation element by name in the @see:AnnotationLayer.
         * @param name The annotation's name.
         */
        getItem(name: string): AnnotationBase;
        /**
         * Gets the annotation elements by name in the @see:AnnotationLayer.
         * @param name The annotations' name.
         */
        getItems(name: string): Array<AnnotationBase>;
        private _bindTooltip();
        _showTooltip(): boolean;
        private _toggleTooltip(tooltip, evt, parentNode);
        _getAnnotation(ele: any, parentNode: any): AnnotationBase;
        private _getAnnotationElement(ele, pNode);
        private _itemsChanged(items, e);
        private _renderAnnotations();
        _renderGroup(): void;
        _renderAnnotation(item: AnnotationBase): void;
        private _destroyAnnotations();
        private _destroyAnnotation(item);
    }
}

