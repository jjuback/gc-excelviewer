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
* Contains Angular 2 components for the <b>wijmo.grid.detail</b> module.
*
* <b>wijmo.angular2.grid.detail</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjDetail from 'wijmo/wijmo.angular2.grid.detail';
* import * as wjGrid from 'wijmo/wijmo.angular2.grid';
* &nbsp;
* &#64;Component({
*     directives: [wjGrid.WjFlexGrid, wjDetail.WjFlexGridDetail],
*     template: `
*       &lt;wj-flex-grid [itemsSource]="data"&gt;
*           &lt;template wjFlexGridDetail&gt;
*               Detail row content here...
*           &lt;/template&gt;
*       &lt;/wj-flex-grid&gt;`,
*     selector: 'my-cmp',
* })
* export class MyCmp {
*     data: any[];
* }</pre>
*
*/
import { EventEmitter, AfterViewInit } from '@angular/core';
import { ElementRef, Injector, ViewContainerRef, TemplateRef, Renderer } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata, IWjDirectiveMeta } from 'wijmo/wijmo.angular2.directiveBase';
export declare var wjFlexGridDetailMeta: IWjDirectiveMeta;
/**
    * Angular 2 directive for @see:FlexGrid @see:DetailRow templates.
    *
    * The <b>wj-flex-grid-detail</b> directive must be specified on a <b>&lt;template&gt;</b>
    * template element contained in a <b>wj-flex-grid</b> component.
    *
    * The <b>wj-flex-grid-detail</b> directive is derived from the @see:FlexGridDetailProvider
    * class that maintains detail rows visibility, with detail rows content defined as
    * an arbitrary HTML fragment within the directive tag. The fragment may contain
    * Angular 2 bindings, components and directives.
    * The <b>row</b> and
    * <b>item</b> template variables can be used in Angular 2 bindings that refer to
    * the detail row's parent @see:Row and <b>Row.dataItem</b> objects.
    *
    */
export declare class WjFlexGridDetail extends wijmo.grid.detail.FlexGridDetailProvider implements OnInit, OnDestroy, AfterViewInit {
    private static _viewRefProp;
    wjFlexGridDetail: any;
    _viewContainerRef: ViewContainerRef;
    _templateRef: TemplateRef<any>;
    _domRenderer: Renderer;
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    /**
     * Indicates whether the component has been initialized by Angular.
     * Changes its value from false to true right before triggering the <b>initialized</b> event.
     */
    isInitialized: boolean;
    /**
     * This event is triggered after the component has been initialized by Angular, that is
     * all bound properties have been assigned and child components (if any) have been initialized.
     */
    initialized: EventEmitter<any>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>, domRenderer: Renderer);
    /**
     * If you create a custom component inherited from a Wijmo component, you can override this
     * method and perform necessary initializations that you usually do in a class constructor.
     * This method is called in the last line of a Wijmo component constructor and allows you
     * to not declare your custom component's constructor at all, thus preventing you from a necessity
     * to maintain constructor parameters and keep them in synch with Wijmo component's constructor parameters.
     */
    created(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _init();
}
export declare class WjGridDetailModule {
}
