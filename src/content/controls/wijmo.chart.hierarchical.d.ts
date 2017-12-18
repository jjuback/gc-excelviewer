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
 * Defines the @see:Sunburst chart control and its associated classes.
 */
declare module wijmo.chart.hierarchical {
    /**
     * Sunburst chart control.
     */
    class Sunburst extends FlexPie {
        private _bindName;
        private _processedData;
        private _legendLabels;
        private _level;
        private _sliceIndex;
        private _childItemsPath;
        private _processedItem;
        constructor(element: any, options?: any);
        /**
         * Gets or sets the name of the property containing name of the data item;
         * it should be an array or a string.
         */
        bindingName: any;
        /**
         * Gets or sets the name of the property (or properties) used to generate
         * child items in hierarchical data.
         *
         * Set this property to a string to specify the name of the property that
         * contains an item's child items (e.g. <code>'items'</code>).
         *
         * Set this property to an array containing the names of the properties
         * that contain child items at each level, when the items are child items
         * at different levels with different names
         * (e.g. <code>[ 'accounts', 'checks', 'earnings' ]</code>).
         */
        childItemsPath: any;
        _initData(): void;
        _performBind(): void;
        private _calculateValueAndLevel(arr, level);
        _renderPie(engine: any, radius: any, innerRadius: any, startAngle: any, offset: any): void;
        _renderHierarchicalSlices(engine: any, cx: any, cy: any, values: any, sum: any, radius: any, innerRadius: any, startAngle: any, totalSweep: any, offset: any, level: any): void;
        _getLabelsForLegend(): string[];
        _highlightCurrent(): void;
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
    }
}

declare module wijmo.chart.hierarchical {
    /**
     * Specifies the treemap type.
     */
    enum TreeMapType {
        /** Shows squarified treemap. */
        Squarified = 0,
        /** Shows horizontal squarified treemap. */
        Horizontal = 1,
        /** Shows vertical squarified treemap. */
        Vertical = 2,
    }
    /**
     * The @see:TreeMap control displays hierarchical (tree-structured) data as a set
     * of nested rectangles. Each branch of the tree is given a rectangle, which is then
     * tiled with smaller rectangles representing sub-branches.
     * A leaf node's rectangle has an area proportional to a specified dimension of the data.
     * Often the leaf nodes are colored to show a separate dimension of the data.
     *
     * To use the @see:TreeMap control, set the @see:TreeMap.itemsSource property
     * to an array containing the data and use the @see:TreeMap.binding and
     * @see:TreeMap.bindingName properties to set the properties that contain
     * the item values and names.
     */
    class TreeMap extends FlexChartBase {
        static _CSS_ITEMDEPTH: string;
        private static _MARGIN;
        private _binding;
        private _bindingName;
        _values: number[];
        _labels: string[];
        _areas: any[];
        private _sum;
        private _keywords;
        private _processedData;
        private _depth;
        private _itemIndex;
        private _childItemsPath;
        private _processedItem;
        private _lbl;
        private _tmGroup;
        private _type;
        private _maxDepth;
        private _plotRect;
        private _tmItems;
        private _colRowLens;
        _currentItem: any;
        _defPalette: any;
        /**
         * Initializes a new instance of the @see:TreeMap class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options A Javascript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        _rollUp(): void;
        private _toogleTooltip(evt);
        /**
         * Gets the chart's @see:Tooltip.
         */
        readonly tooltip: ChartTooltip;
        /**
        * Gets or sets the name of the property of the data item that contains the chart value.
        *
        * The binding property is used to calculate the size of the node as compared to other node values.
        * The property should contain numeric data.
        */
        binding: string;
        /**
         * Gets or sets the @see:TreeMapType of the treemap.
         */
        type: TreeMapType;
        /**
         * Gets or sets the name of the property containing name of the data item.
         * The bindingName property is used to show name of the node. It should be an array or a string.
         */
        bindingName: any;
        /**
         * Gets or sets the @see:DataLabel of the treemap.
         */
        dataLabel: DataLabel;
        /**
         * Gets or sets the name of the property (or properties) used to generate
         * child items in hierarchical data.
         *
         * Set this property to a string to specify the name of the property that
         * contains an item's child items (e.g. <code>'items'</code>).
         *
         * Set this property to an array containing the names of the properties
         * that contain child items at each level, when the items are child items
         * at different levels with different names
         * (e.g. <code>[ 'accounts', 'checks', 'earnings' ]</code>).
         */
        childItemsPath: any;
        /**
         * Gets or sets the maximum number of node levels to show in the current view.
         * These levels are flattened into the current plane.
         * If a treemap has more levels than this value, user has to move up and down.
         */
        maxDepth: number;
        /**
         * Gets or sets an array of default colors to be used in a treemap.
         *
         * The array contains strings that represent CSS colors. For example:
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
         * Or contains titleColor, maxColor, minColor separately. For example:
         * <pre>
         * chart.palette = [{
         *      titleColor: '#00277d',
         *      maxColor: 'rgba(0,39,125,0.7)',
         *      minColor: 'rgba(168,187,230,0.7)'
         *  }, {
         *      titleColor: '#7d1f00',
         *      maxColor: 'rgba(125,21,0,0.7)',
         *      minColor: 'rgba(230,183,168,0.7)'
         *  }, {
         *      titleColor: '#007d27',
         *      maxColor: 'rgba(0,125,39,0.7)',
         *      minColor: 'rgba(168,230,188,0.7)'
         *  }];
         * </pre>
         */
        palette: string[];
        _initData(): void;
        _performBind(): void;
        private _sortData(data);
        private _getTMItemsAndLabelsAndValues(data, treemapItems, depth, parentItem, color?);
        private _calculateColorForItems(items, color?, colorConverter?);
        private _getBindData(item, values, binding);
        private _calculateValueAndDepth(arr, depth);
        _prepareRender(): void;
        _renderChart(engine: IRenderEngine, rect: Rect, applyElement: boolean): void;
        private _renderTreeMap(engine, rect, container, items, sum, maxDepth);
        private _resetItemRects(items);
        private _calculateItemRects(rect, items, sum, depth, maxDepth);
        private _renderHierarchicalTreeMapItems(engine, container, rect, items, sum, depth, maxDepth);
        _renderLabels(engine: IRenderEngine): void;
        private _renderLabelAndBorder(engine, area, rect, s, pos, offset, pt, line, marg, border);
        private _renderText(engine, area, rect, s, pt, halign, valign, className);
        private _cutText(s, actualWidth, maxWidth);
        private _measureLegendItem(engine, text);
        _getDesiredLegendSize(engine: IRenderEngine, isVertical: boolean, width: number, height: number): Size;
        _renderLegend(engine: IRenderEngine, pos: Point, areas: any[], isVertical: boolean, width: number, height: number): void;
        _drawLegendItem(engine: IRenderEngine, rect: Rect, i: number, name: string): void;
        private _getLabelContent(ht, content);
        /**
         * Gets a @see:wijmo.chart.HitTestInfo object with information about the specified point.
         *
         * @param pt The point to investigate, in window coordinates.
         * @param y Y coordinate of the point (if the first parameter is a number).
         * @return A @see:wijmo.chart.HitTestInfo object containing information about the point.
         */
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
        _getHitTestItem(index: number): any;
        _getHitTestValue(index: number): number;
        _getHitTestLabel(index: number): string;
    }
}

declare module wijmo.chart.hierarchical {
    class HierarchicalUtil {
        static parseDataToHierarchical(data: any, binding: any, bindingName: any, childItemsPath: any): any[];
        private static parseGroupCV(cv, binding);
        private static parseGroups(group, binding);
        private static parseItems(items, binding, bindingName, childItemsPath);
        private static isFlatItem(item, binding);
        private static convertFlatData(items, binding, bindingName);
        private static convertFlatToHierarchical(arr, data);
        private static convertFlatItem(data, item, binding, bindingName);
        private static parseItem(item, binding, bindingName, childItemsPath);
        static parseFlatItem(data: any, item: any, binding: any, bindingName: any): void;
    }
}

