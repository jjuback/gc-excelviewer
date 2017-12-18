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
 * Defines navigation controls including the @see:TreeView and associated classes.
 */
declare module wijmo.nav {
    /**
     * The @see:TreeView control displays a hierarchical list of @see:TreeNode objects
     * which may contain text, checkboxes, images, or arbitrary HTML content.
     *
     * A @see:TreeView is typically used to display the headings in a document,
     * the entries in an index, the files and directories on a disk, or any other
     * kind of information that might usefully be displayed as a hierarchy.
     *
     * After creating a @see:TreeView, you will typically set the following properties:
     *
     * <ol>
     *  <li>
     *      @see:itemsSource: an array that contains the data to be displayed on the
     *      tree.</li>
     *  <li>
     *      @see:displayMemberPath: the name of the data item property that contains
     *      the text to display on the nodes (defaults to 'header'), and</li>
     *  <li>
     *      @see:childItemsPath: the name of the data item property that contains the
     *      node's child items (defaults to 'items').</li>
     * </ol>
     *
     *
     * The example below builds a simple tree and allows you to see the effect
     * of the TreeView's main properties:
     *
     * @fiddle:egmg93wc
     */
    class TreeView extends Control {
        static _DATAITEM_KEY: string;
        static _AS_DLY: number;
        static _AN_DLY: number;
        static _CND: string;
        static _CNDL: string;
        static _CEMP: string;
        static _CNDT: string;
        static _CNDC: string;
        static _CSEL: string;
        static _CCLD: string;
        static _CCLG: string;
        static _CLDG: string;
        _root: HTMLElement;
        private _items;
        _selNode: TreeNode;
        _itmPath: _BindingArray;
        private _prevSel;
        private _dspPath;
        private _imgPath;
        private _dd;
        private _html;
        private _animated;
        private _xpndOnClick;
        private _autoColl;
        private _showChk;
        private _chkItems;
        private _ldLvl;
        private _srch;
        private _toSrch;
        private _dnIndet;
        private _lazyLoad;
        private _isDirty;
        private _isReadOnly;
        private _edtNode;
        /**
         * Gets or sets the template used to instantiate @see:FlexGrid controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:TreeView class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the array that contains the @see:TreeView items.
         *
         * @see:TreeView #see:itemsSource arrays usually have a hierarchical
         * structure with items that contain child items. There is no fixed
         * limit to the depth of the items.
         *
         * For example, the array below would generate a tree with three
         * top-level nodes, each with two child nodes:
         *
         * <pre>var tree = new wijmo.input.TreeView('#treeView', {
         *     displayMemberPath: 'header',
         *     childItemsPath: 'items',
         *     itemsSource: [
         *         { header: '1 first', items: [
         *             { header: '1.1 first child' },
         *             { header: '1.2 second child' },
         *         ] },
         *         { header: '2 second', items: [
         *             { header: '3.1 first child' },
         *             { header: '3.2 second child' },
         *         ] },
         *         { header: '3 third', items: [
         *             { header: '3.1 first child' },
         *             { header: '3.2 second child' },
         *         ] }
         *     ]
         * });</pre>
         */
        itemsSource: any[];
        /**
         * Gets or sets the name of the property (or properties) that contains
         * the child items for each node.
         *
         * The default value for this property is the string 'items'.
         *
         * In most cases, the property that contains the child items is the
         * same for all data items on the tree. In these cases, set the
         * @see:childItemsPath to that name.
         *
         * In some cases, however, items at different levels use different
         * properties to store their child items. For example, you could have
         * a tree with categories, products, and orders. In that case, you
         * would set the @see:childItemsPath to an array such as this:
         *
         * <pre>// categories have products, products have orders:
         * tree.childItemsPath = [ 'Products', 'Orders' ];</pre>
         */
        childItemsPath: any;
        /**
         * Gets or sets the name of the property (or properties) to use as
         * the visual representation of the nodes.
         *
         * The default value for this property is the string 'header'.
         *
         * In most cases, the property that contains the node text is the
         * same for all data items on the tree. In these cases, set the
         * @see:displayMemberPath to that name.
         *
         * In some cases, however, items at different levels use different
         * properties to represent them. For example, you could have
         * a tree with categories, products, and orders. In that case, you
         * might set the @see:displayMemberPath to an array such as this:
         *
         * <pre>// categories, products, and orders have different headers:
         * tree.displayMemberPath = [ 'CategoryName', 'ProductName', 'OrderID' ];</pre>
         */
        displayMemberPath: any;
        /**
         * Gets or sets the name of the property (or properties) to use as a
         * source of images for the nodes.
         */
        imageMemberPath: any;
        /**
         * Gets or sets a value indicating whether items are bound to plain text or HTML.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a value that determines whether the @see:TreeView should
         * add checkboxes to nodes and manage their state.
         *
         * This property can be used only on trees without lazy-loaded nodes
         * (see the @see:lazyLoadFunction property).
         *
         * See also the @see:checkedItems property and @see:checkedItemsChanged
         * event.
         */
        showCheckboxes: boolean;
        /**
         * Gets or sets a value that determines if sibling nodes should be collapsed
         * when a node is expanded.
         *
         * This property is set to true by default, because in most cases collapsing
         * nodes that are not in use helps keep the UI clearer.
         */
        autoCollapse: boolean;
        /**
         * Gets or sets a value that indicates whether to use animations when expanding
         * or collapsing nodes.
         */
        isAnimated: boolean;
        /**
         * Gets or sets a value that determines whether users can edit the text in the
         * nodes.
         *
         * When the @see:isReadOnly property is set to false, users may edit the content
         * of the tree nodes by typing directly into the nodes. The F2 key can also
         * be used to enter edit mode with the whole node content selected.
         *
         * You may customize the editing behavior using the following methods and events:
         *
         * Methods: @see:startEditing, @see:finishEditing.
         *
         * Events: @see:nodeEditStarting, @see:nodeEditStarted, @see:nodeEditEnding,
         * @see:nodeEditEnded.
         */
        isReadOnly: boolean;
        /**
         * Starts editing a given @see:TreeNode.
         *
         * @param node @see:TreeNode to edit. If not provided, the currently
         * selected node is used.
         *
         * @return True if the edit operation started successfully.
         */
        startEditing(node?: TreeNode): boolean;
        /**
         * Commits any pending edits and exits edit mode.
         *
         * @param cancel Whether pending edits should be canceled or committed.
         * @return True if the edit operation finished successfully.
         */
        finishEditing(cancel?: boolean): boolean;
        /**
         * Gets or sets a value that determines whether users can drag and drop nodes
         * within the @see:TreeView.
         */
        allowDragging: boolean;
        /**
         * Gets or sets a value that determines whether to expand collapsed nodes when
         * the user clicks the node header.
         */
        expandOnClick: boolean;
        /**
         * Gets or sets the data item that is currently selected.
         */
        selectedItem: any;
        /**
         * Gets or sets the @see:TreeNode that is currently selected.
         */
        selectedNode: TreeNode;
        /**
         * Gets an array containing the text of all nodes from the root
         * to the currently selected node.
         */
        readonly selectedPath: string[];
        /**
         * Gets an array containing the items that are currently checked.
         *
         * The array returned includes only items that have no children.
         * This is because checkboxes in parent items are used to check
         * or uncheck the child items.
         *
         * See also the @see:showCheckboxes property and the
         * @see:checkedItemsChanged property.
         *
         * For example:
         *
         * <pre>var treeViewChk = new wijmo.input.TreeView('#gsTreeViewChk', {
         *    displayMemberPath: 'header',
         *    childItemsPath: 'items',
         *    showCheckboxes: true,
         *    itemsSource: items,
         *    checkedItemsChanged: function (s, e) {
         *        var items = s.checkedItems,
         *            msg = '';
         *        if (items.length) {
         *            msg = '&lt;p&gt;&lt;b&gt;Selected Items:&lt;/b&gt;&lt;/p&gt;&lt;ol&gt;\r\n';
         *            for (var i = 0; i &lt; items.length; i++) {
         *                msg += '&lt;li&gt;' + items[i].header + '&lt;/li&gt;\r\n';
         *            }
         *            msg += '&lt;/ol&gt;';
         *        }
         *        document.getElementById('gsTreeViewChkStatus').innerHTML = msg;
         *    }
         * });</pre>
         */
        checkedItems: any[];
        /**
         * Checks or unchecks all checkboxes on the tree.
         *
         * @param check Whether to check or unckeck all checkboxes.
         */
        checkAllItems(check: boolean): void;
        /**
         * Gets the total number of items in the tree.
         */
        readonly totalItemCount: number;
        /**
         * Gets or sets a function that loads child nodes on demand.
         *
         * The @see:lazyLoadFunction takes two parameters: the node being
         * expanded and a callback to be invoked when the data becomes
         * available.
         *
         * The callback function tells the @see:TreeView that the node
         * loading process has been completed. It should always be called,
         * even if there are errors when loading the data.
         *
         * For example:
         *
         *<pre>var treeViewLazyLoad = new wijmo.input.TreeView('#treeViewLazyLoad', {
         *    displayMemberPath: 'header',
         *    childItemsPath: 'items',
         *    itemsSource: [ // start with three lazy-loaded nodes
         *        { header: 'Lazy Node 1', items: []},
         *        { header: 'Lazy Node 2', items: [] },
         *        { header: 'Lazy Node 3', items: [] }
         *    ],
         *    lazyLoadFunction: function (node, callback) {
         *        setTimeout(function () { // simulate http delay
         *            var result = [ // simulate result
         *                { header: 'Another lazy node...', items: [] },
         *                { header: 'A non-lazy node without children' },
         *                { header: 'A non-lazy node with child nodes', items: [
         *                  { header: 'hello' },
         *                  { header: 'world' }
         *                ]}
         *            ];
         *            callback(result); // return result to control
         *        }, 2500); // simulated 2.5 sec http delay
         *    }
         *});</pre>
         *
         * Trees with lazy-loaded nodes have some restrictions: their nodes
         * may not have checkboxes (see the @see:showCheckboxes property) and
         * the @see:collapseToLevel method will not expand collapsed nodes
         * that have not been loaded yet.
         */
        lazyLoadFunction: Function;
        /**
         * Gets a reference to the first @see:TreeNode in the @see:TreeView.
         *
         * @param visible Whether to return only visible nodes (whose ancestors are not collapsed).
         * @param enabled Whether to return only enabled nodes (whose ancestors are not disabled).
         */
        getFirstNode(visible?: boolean, enabled?: boolean): TreeNode;
        /**
         * Gets a reference to the last @see:TreeNode in the @see:TreeView.
         *
         * @param visible Whether to return only visible nodes (whose ancestors are not collapsed).
         * @param enabled Whether to return only enabled nodes (whose ancestors are not disabled).
         */
        getLastNode(visible?: boolean, enabled?: boolean): TreeNode;
        /**
         * Gets an array of @see:TreeNode objects representing the nodes
         * currently loaded.
         */
        readonly nodes: TreeNode[];
        /**
         * Gets the @see:TreeNode object representing a given data item.
         *
         * @param item The data item to look for.
         */
        getNode(item: any): TreeNode;
        /**
         * Collapses all the tree items to a given level.
         *
         * This method will typically expand or collapse multiple nodes
         * at once. But it will not perform lazy-loading on any nodes,
         * so collapsed nodes that must be lazy-loaded will not be
         * expanded.
         *
         * @param level Maximum node level to show.
         */
        collapseToLevel(level: number): void;
        /**
         * Loads the tree using data from the current @see:itemsSource.
         */
        loadTree(): void;
        /**
         * Occurs when the value of the @see:itemsSource property changes.
         */
        readonly itemsSourceChanged: Event;
        /**
         * Raises the @see:itemsSourceChanged event.
         */
        onItemsSourceChanged(e?: EventArgs): void;
        /**
         * Occurs before the tree items are generated.
         */
        readonly loadingItems: Event;
        /**
         * Raises the @see:loadingItems event.
         */
        onLoadingItems(e?: EventArgs): void;
        /**
         * Occurs after the tree items have been generated.
         */
        readonly loadedItems: Event;
        /**
         * Raises the @see:loadedItems event.
         */
        onLoadedItems(e?: EventArgs): void;
        /**
         * Occurs when the user clicks an item or presses the Enter key and an item is selected.
         *
         * This event is typically used in navigation trees. Use the @see:selectedItem property
         * to get the item that was clicked.
         */
        readonly itemClicked: Event;
        /**
         * Raises the @see:itemClicked event.
         */
        onItemClicked(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:selectedItem property changes.
         */
        readonly selectedItemChanged: Event;
        /**
         * Raises the @see:selectedItemChanged event.
         */
        onSelectedItemChanged(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:checkedItems property changes.
         */
        readonly checkedItemsChanged: Event;
        /**
         * Raises the @see:checkedItemsChanged event.
         */
        onCheckedItemsChanged(e?: EventArgs): void;
        /**
         * Occurs before the value of the @see:TreeNode.isCollapsed property changes.
         */
        readonly isCollapsedChanging: Event;
        /**
         * Raises the @see:isCollapsedChanging event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onIsCollapsedChanging(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs after the value of the @see:TreeNode.isCollapsed property changes.
         */
        readonly isCollapsedChanged: Event;
        /**
         * Raises the @see:isCollapsedChanged event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         */
        onIsCollapsedChanged(e: TreeNodeEventArgs): void;
        /**
         * Occurs before the value of the @see:TreeNode.isChecked property changes.
         */
        readonly isCheckedChanging: Event;
        /**
         * Raises the @see:isCheckedChanging event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onIsCheckedChanging(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs after the value of the @see:TreeNode.isChecked property changes.
         */
        readonly isCheckedChanged: Event;
        /**
         * Raises the @see:isCheckedChanged event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         */
        onIsCheckedChanged(e: TreeNodeEventArgs): void;
        /**
         * Occurs when an element representing a node has been created.
         *
         * This event can be used to format nodes for display.
         *
         * The example below uses the <b>formatItem</b> event to add a "new" badge to the
         * right of new items on the tree.
         *
         * <pre>var treeViewFmtItem = new wijmo.input.TreeView('#treeViewFmtItem', {
         *     displayMemberPath: 'header',
         *     childItemsPath: 'items',
         *     itemsSource: items,
         *     formatItem: function (s, e) {
         *         if (e.dataItem.newItem) {
         *             e.element.innerHTML +=
         *                 '&lt;img style="margin-left:6px" src="resources/new.png"/&gt;';
         *         }
         *     }
         * });</pre>
         */
        readonly formatItem: Event;
        /**
         * Raises the @see:formatItem event.
         *
         * @param e @see:FormatNodeEventArgs that contains the event data.
         */
        onFormatItem(e: FormatNodeEventArgs): void;
        /**
         * Occurs when the user starts dragging a node.
         *
         * This event only occurs if the @see:allowDragging property is set to true.
         *
         * You may prevent nodes from being dragged by setting the event's
         * <b>cancel</b> parameter to true.
         */
        readonly dragStart: Event;
        /**
         * Raises the @see:dragStart event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onDragStart(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs while the user drags a node over other nodes on the @see:TreeView.
         *
         * This event only occurs if the @see:allowDragging property is set to true.
         *
         * You may prevent drop operations over certain nodes and/or positions by
         * setting the event's <b>cancel</b> parameter to true.
         */
        readonly dragOver: Event;
        /**
         * Raises the @see:dragOver event.
         *
         * @param e @see:TreeNodeDragDropEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onDragOver(e: TreeNodeDragDropEventArgs): boolean;
        /**
         * Occurs when the user drops a on the @see:TreeView.
         * @return True if the event was not canceled.
         */
        readonly drop: Event;
        /**
         * Raises the @see:drop event.
         *
         * @param e @see:TreeNodeDragDropEventArgs that contains the event data.
         */
        onDrop(e: TreeNodeDragDropEventArgs): boolean;
        /**
         * Occurs when the user finishes a drag/drop operation, either by dropping
         * a node into a new location or by canceling the operation with the mouse
         * or keyboard.
         */
        readonly dragEnd: Event;
        /**
         * Raises the @see:dragEnd event.
         */
        onDragEnd(e?: EventArgs): void;
        /**
         * Occurs before a @see:TreeNode enters edit mode.
         */
        readonly nodeEditStarting: Event;
        /**
         * Raises the @see:nodeEditStarting event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
        */
        onNodeEditStarting(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs after a @see:TreeNode has entered edit mode.
         */
        readonly nodeEditStarted: Event;
        /**
         * Raises the @see:nodeEditStarted event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         */
        onNodeEditStarted(e: TreeNodeEventArgs): void;
        /**
         * Occurs before a @see:TreeNode exits edit mode.
         */
        readonly nodeEditEnding: Event;
        /**
         * Raises the @see:nodeEditEnding event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onNodeEditEnding(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs after a @see:TreeNode has exited edit mode.
         */
        readonly nodeEditEnded: Event;
        /**
        * Raises the @see:nodeEditEnded event.
        *
        * @param e @see:TreeNodeEventArgs that contains the event data.
        */
        onNodeEditEnded(e: TreeNodeEventArgs): void;
        /**
         * Overridden to re-populate the tree.
         */
        refresh(): void;
        _reload(): void;
        private _mousedown(e);
        private _click(e);
        private _keydown(e);
        private _keypress(e);
        private _findNext();
        private _loadTree();
        private _addItem(host, level, item);
        private _collapseToLevel(nodes, maxLevel, currentLevel);
        _lazyLoadNode(node: TreeNode): void;
        private _lazyLoadCallback(result);
        private _lazyLoadNodeDone(node, result);
    }
}

declare module wijmo.nav {
    /**
     * Class that represents a node in a @see:TreeView.
     */
    class TreeNode {
        _t: TreeView;
        _e: HTMLElement;
        /**
         * Initializes a new instance of a @see:TreeNode.
         *
         * @param treeView @see:TreeView that contains the node.
         * @param nodeElement HTML element that represents the node on the @see:TreeView.
         */
        constructor(treeView: TreeView, nodeElement: HTMLElement);
        /**
         * Gets the data item that this node represents.
         */
        readonly dataItem: any;
        /**
         * Gets the HTML element that represents this node on the @see:TreeView.
         */
        readonly element: any;
        /**
         * Gets a reference to the @see:TreeView that contains this node.
         */
        readonly treeView: TreeView;
        /**
         * Ensures that a node is visible by expanding any collapsed
         * ancestors and scrolling the element into view.
         */
        ensureVisible(): void;
        /**
         * Checks whether this node refers to the same element as another node.
         *
         * @param node @TreeNode to compare with this one.
         */
        equals(node: TreeNode): boolean;
        /**
         * Selects this node.
         */
        select(): void;
        /**
         * Gets this node's index within the parent's node collection.
         */
        readonly index: number;
        /**
         * Gets this node's parent node.
         *
         * This property returns null for top-level nodes.
         */
        readonly parentNode: TreeNode;
        /**
         * Gets this node's level.
         *
         * Top-level nodes have level zero.
         */
        readonly level: number;
        /**
         * Gets a value that indicates whether this node has child nodes.
         */
        readonly hasChildren: boolean;
        /**
         * Gets a value that indicates whether this node has pending child nodes
         * that will be lazy-loaded when the node is expanded.
         */
        readonly hasPendingChildren: boolean;
        /**
         * Gets an array containing this node's child nodes.
         *
         * This property returns null if the node has no children.
         */
        readonly nodes: TreeNode[];
        /**
         * Gets the HTMLInputElement that represents the checkbox associated
         * with this node.
         */
        readonly checkBox: HTMLInputElement;
        /**
         * Gets or sets a value that determines whether this node is expanded or collapsed.
         */
        isCollapsed: boolean;
        /**
         * Gets or sets a value that determines whether this node is checked.
         *
         * When the value of this property changes, child and ancestor nodes
         * are automatically updated, and the parent @see:TreeView's
         * @see:TreeView.checkedItemsChanged event is raised.
         */
        isChecked: boolean;
        /**
         * Gets or sets a value that determines whether this node is disabled.
         *
         * Disabled nodes cannot get mouse or keyboard events.
         */
        isDisabled: boolean;
        /**
         * Gets a reference to the previous node in the view.
         *
         * @param visible Whether to return only visible nodes (whose ancestors are not collapsed).
         * @param enabled Whether to return only enabled nodes (whose ancestors are not disabled).
         */
        previous(visible?: boolean, enabled?: boolean): TreeNode;
        /**
         * Gets a reference to the next node in the view.
         *
         * @param visible Whether to return only visible nodes (whose ancestors are not collapsed).
         * @param enabled Whether to return only enabled nodes (whose ancestors are not disabled).
         */
        next(visible?: boolean, enabled?: boolean): TreeNode;
        /**
         * Gets a reference to the next sibling node in the view.
         */
        previousSibling(): TreeNode;
        /**
         * Gets a reference to the next sibling node in the view.
         */
        nextSibling(): TreeNode;
        /**
         * Sets the collapsed state of the node.
         *
         * @param collapsed Whether to collapse or expand the node.
         * @param animate Whether to use animation when applying the new state.
         * @param collapseSiblings Whether to collapse sibling nodes when expanding
         * this node.
         */
        setCollapsed(collapsed: boolean, animate?: boolean, collapseSiblings?: boolean): void;
        /**
         * Sets the checked state of this node and its children.
         *
         * @param checked Whether to check or uncheck the node and its children.
         * @param updateParent Whether to update the checked state of this node's
         * ancestor nodes.
         */
        setChecked(checked: boolean, updateParent?: boolean): void;
        /**
         * Moves a @see:TreeNode to a new position on the @see:TreeView.
         *
         * @param refNode Reference @see:TreeNode that defines the location
         * where the node will be moved.
         * @param position Whether to move the node before, after, or into
         * the reference node.
         * @return True if the node was moved successfully.
         */
        move(refNode: TreeNode, position: DropPosition): boolean;
        _pse(e: HTMLElement): HTMLElement;
        _contains(node: TreeNode): boolean;
        _getArray(): any[];
        _moveElements(refNode: TreeNode, position: DropPosition): void;
        _updateState(): void;
        _updateEmptyState(): void;
        _updateCheckedState(): void;
        static _getChildNodes(treeView: TreeView, nodeList: HTMLElement): TreeNode[];
        static _isNode(e: HTMLElement): boolean;
        static _isNodeList(e: HTMLElement): boolean;
        static _isEmpty(node: HTMLElement): boolean;
        static _isCollapsed(node: HTMLElement): boolean;
        static _assertNode(node: HTMLElement): void;
        static _assertNodeList(nodeList: HTMLElement): void;
    }
}

declare module wijmo.nav {
    /**
     * Provides arguments for the @see:TreeView.formatItem event.
     */
    class FormatNodeEventArgs extends EventArgs {
        _data: any;
        _e: HTMLElement;
        _level: number;
        /**
         * Initializes a new instance of the @see:FormatNodeEventArgs class.
         *
         * @param dataItem Data item represented by the node.
         * @param element Element that represents the node being formatted.
         * @param level The outline level of the node being formatted.
         */
        constructor(dataItem: any, element: HTMLElement, level: number);
        /**
         * Gets the data item being formatted.
         */
        readonly dataItem: any;
        /**
         * Gets a reference to the element that represents the node being formatted.
         */
        readonly element: HTMLElement;
        /**
         * Gets the outline level of the node being formatted.
         */
        readonly level: number;
    }
    /**
     * Provides arguments for @see:TreeNode-related events.
     */
    class TreeNodeEventArgs extends CancelEventArgs {
        _node: TreeNode;
        /**
         * Initializes a new instance of the @see:TreeNodeEventArgs class.
         *
         * @param node @see:TreeNode that this event refers to.
         */
        constructor(node: TreeNode);
        /**
         * Gets the @see:TreeNode that this event refers to.
         */
        readonly node: TreeNode;
    }
    /**
     * Provides arguments for @see:TreeNode drag-drop events.
     */
    class TreeNodeDragDropEventArgs extends CancelEventArgs {
        _src: TreeNode;
        _tgt: TreeNode;
        _pos: DropPosition;
        /**
         * Initializes a new instance of the @see:TreeNodeEventArgs class.
         *
         * @param dragSource @see:TreeNode being dragged.
         * @param dropTarget @see:TreeNode where the source is being dropped.
         * @param position @see:DropPosition that this event refers to.
         */
        constructor(dragSource: TreeNode, dropTarget: TreeNode, position: DropPosition);
        /**
         * Gets a reference to the @see:TreeNode being dragged.
         */
        readonly dragSource: TreeNode;
        /**
         * Gets a reference to the current @see:TreeNode target.
         */
        readonly dropTarget: TreeNode;
        /**
         * Gets or sets the @see:DropPosition value that specifies where
         * the @see:TreeNode will be dropped.
         */
        position: DropPosition;
    }
    /**
     * Specifies the position where a @see:TreeNode is being dropped during
     * a drag and drop operation.
     */
    enum DropPosition {
        /** The node will become the previous sibling of the target node. */
        Before = 0,
        /** The node will become the next sibling of the target node. */
        After = 1,
        /** The node will become the last child of the target node. */
        Into = 2,
    }
}

declare module wijmo.nav {
    /**
     * Class that handles drag/drop operations for a @see:TreeView.
     */
    class _TreeDragDropManager {
        private _tree;
        private _dragstartBnd;
        private _dragoverBnd;
        private _dragendBnd;
        private _dropBnd;
        private static _dMarker;
        private static _drgSrc;
        /**
         * Initializes a new instance of a @see:_TreeViewDragDropManager.
         *
         * @param treeView @see:TreeView managed by this @see:_TreeViewDragDropManager.
         */
        constructor(treeView: TreeView);
        /**
         * Disposes of this @see:_TreeViewDragDropManager
         */
        dispose(): void;
        private _dragstart(e);
        private _dragover(e);
        private _drop(e);
        private _dragend(e);
        private _keydown(e);
        private _handleDragDrop(e, drop);
        private _showDragMarker(rc?, pos?);
    }
}

declare module wijmo.nav {
    /**
     * Class that handles hierarchical (multi-level) bindings.
     */
    class _BindingArray {
        _path: any;
        _bindings: Binding[];
        _maxLevel: number;
        /**
         * Initializes a new instance of a _BindingArray.
         *
         * @param path String or array of strings to create bindings from.
         */
        constructor(path?: any);
        /**
         * Gets or sets the names of the properties used for binding.
         */
        path: any;
        /**
         * Gets the binding value for a given data item at a given level.
         *
         * @param dataItem Object that contains the data.
         * @param level Binding level to use for retrieving the data.
         */
        getValue(dataItem: any, level: number): any;
        /**
         * Sets the binding value on a given data item at a given level.
         *
         * @param dataItem Object that contains the data.
         * @param level Binding level to use for retrieving the data.
         * @param value Value to apply to the data item.
         */
        setValue(dataItem: any, level: number, value: any): void;
    }
}

