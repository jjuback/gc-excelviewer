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
* Basic Wijmo for Angular 2 module containing internal common services and platform options.
*
* <b>wijmo.angular2.directiveBase</b> is an external TypeScript module that can be imported to your code
* using its ambient module name. For example:
*
* <pre>import * as wjBase from 'wijmo/wijmo.angular2.directiveBase';
* &nbsp;
* wjBase.WjOptions.asyncBindings = false;</pre>
*
*/
import * as ng2 from '@angular/core';
import { Injector, EventEmitter, NgZone } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * Exposes global options for the Wijmo for Angular 2 interop.
 */
export declare class WjOptions {
    /**
    * Indicates whether Wijmo components update binding sources of the two-way bound properties asynchronously
    * or synchronously.
    *
    * If this property is set to true (default) then changes to the Wijmo components' properties
    * with two-way bindings (like WjInputNumber.value) will cause the component to update a binding
    * source property asynchronously, after the current change detection cycle is completed.
    * Otherwise, if this property is set to false, the binding source will be updated immediately.
    * A corresponding property change event (like WjInputNumber.valueChanged) is also triggered
    * asynchronously or synchronously depending on this property value, after the binding source
    * was updated.
    *
    * This global setting can be changed for specific instances of Wijmo components, by assigning
    * the component's <b>asyncBindings</b> property with a specific boolean value.
    *
    * Transition to asynchronous binding source updates has happened in Wijmo version 350. Before that version,
    * binding sources were updated immediately after the component's property change. In some cases this
    * could lead to the <b>ExpressionChangedAfterItHasBeenCheckedError</b> exception in the applications running
    * Angular in the debug mode. For example, if your component's property value is set to 0.12345, and
    * you two-way bind it to the <b>value</b> property of the <b>WjInputNumber</b> component with the <b>format</b>
    * property set to <b>'n2'</b>, the WjInputNumber immediately converts this value to 0.12. This change,
    * in turn, causes Angular to update your component property (the source of this binding), so that its
    * value changes from 0.12345 to 0.12. If this source update is performed synchronously then the binding
    * source property changes its value during the same change detection cycle, which is prohibited by Angular.
    * If Angular runs in debug mode then it executes a special check after every change detection cycle, which
    * detects this change and raises the <b>ExpressionChangedAfterItHasBeenCheckedError</b> exception.
    * Asynchronous binding source updates resolve this problem, because the binding source property
    * is updated after the current change detection cycle has finished.
    *
    * If the <b>ExpressionChangedAfterItHasBeenCheckedError</b> is not an issue for you, and parts of
    * you application logic are sensible to a moment when binding source update happens, you can change
    * this functionality by setting the global <b>asyncBindings</b> property to false. This should be
    * done before the first Wijmo component was instantiated by your application logic, and the best
    * place to do it is the file where you declare the application's root NgModel. This can be done
    * with the code like this:
    * <pre>import * as wjBase from 'wijmo/wijmo.angular2.directiveBase';
    * wjBase.WjOptions.asyncBindings = false;</pre>
    *
    * Alternatively, you can change the update mode for the specific component using its own
    * <b>asyncBindings</b> property. For example:
    * <pre>&lt;wj-input-number [asyncBindings]="false" [(value)]="amount"&gt;&lt;/wj-input-number&gt;</pre>
    */
    static asyncBindings: boolean;
}
export interface IWjMetaBase {
    selector: string;
    inputs: string[];
    outputs: string[];
    providers: any[];
}
export interface IWjComponentMeta extends IWjMetaBase {
    template: string;
}
export interface IWjDirectiveMeta extends IWjMetaBase {
    exportAs: string;
}
export declare type ChangePropertyEvent = {
    prop: string;
    evExposed: string;
    evImpl: string;
};
export declare type EventPropertiesItem = {
    event: string;
    eventImpl: string;
    props?: ChangePropertyEvent[];
};
export declare type EventProperties = EventPropertiesItem[];
export interface IWjComponentMetadata {
    changeEvents?: {
        [event: string]: string[];
    };
    outputs?: string[];
    siblingId?: string;
    parentRefProperty?: string;
}
export interface IPendingEvent {
    event: EventEmitter<any>;
    args: any;
}
export declare class WjComponentResolvedMetadata {
    readonly changeEventMap: EventPropertiesItem[];
    allImplEvents: string[];
    constructor(rawMeta: IWjComponentMetadata);
    private resolveChangeEventMap(rawMeta);
}
export declare class WjDirectiveBehavior {
    static directiveTypeDataProp: string;
    static directiveResolvedTypeDataProp: string;
    static BehaviourRefProp: string;
    static parPropAttr: string;
    static wjModelPropAttr: string;
    static initializedEventAttr: string;
    static isInitializedPropAttr: string;
    static siblingDirIdAttr: string;
    static asyncBindingUpdatePropAttr: string;
    static siblingDirId: number;
    static wijmoComponentProviderId: string;
    static ngZone: NgZone;
    private static _ngZoneRun;
    static outsideZoneEvents: {
        'pointermove': boolean;
        'pointerover': boolean;
        'mousemove': boolean;
        'wheel': boolean;
        'touchmove': boolean;
    };
    private static _pathBinding;
    private _siblingInsertedEH;
    private _pendingEvents;
    private _pendingEventsTO;
    directive: Object;
    typeData: IWjComponentMetadata;
    resolvedTypeData: WjComponentResolvedMetadata;
    elementRef: ng2.ElementRef;
    injector: ng2.Injector;
    injectedParent: any;
    parentBehavior: WjDirectiveBehavior;
    isInitialized: boolean;
    isDestroyed: boolean;
    static getHostElement(ngHostElRef: ng2.ElementRef, injector?: Injector): HTMLElement;
    static attach(directive: Object, elementRef: ng2.ElementRef, injector: ng2.Injector, injectedParent: any): WjDirectiveBehavior;
    constructor(directive: Object, elementRef: ng2.ElementRef, injector: ng2.Injector, injectedParent: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static instantiateTemplate(parent: HTMLElement, viewContainerRef: ng2.ViewContainerRef, templateRef: ng2.TemplateRef<any>, domRenderer: ng2.Renderer, useTemplateRoot?: boolean, dataContext?: any): {
        viewRef: ng2.EmbeddedViewRef<any>;
        rootElement: Element;
    };
    getPropChangeEvent(propName: string): string;
    private _createEvents();
    private subscribeToEvents(afterInit);
    private addHandlers(eventMap);
    private triggerPropChangeEvents(eventMap, allowAsync?);
    private _setupAsChild();
    private _isAsyncBinding();
    private _isChild();
    private _isParentInitializer();
    private _isParentReferencer();
    private _getParentProp();
    private _getParentReferenceProperty();
    private _useParentObj();
    private _parentInCtor();
    private _initParent();
    _getSiblingIndex(): number;
    private _siblingInserted(e);
    private _isHostElement();
    private _runInsideNgZone(func);
    private _triggerEvent(event, args, allowAsync);
    private _triggerPendingEvents(flush);
    flushPendingEvents(): void;
    private static evaluatePath(obj, path);
    static getBehavior(directive: any): WjDirectiveBehavior;
}
export declare class Ng2Utils {
    static changeEventImplementSuffix: string;
    static wjEventImplementSuffix: string;
    static initEvents(directiveType: any, changeEvents: EventPropertiesItem[]): string[];
    static getChangeEventNameImplemented(propertyName: any): string;
    static getChangeEventNameExposed(propertyName: any): string;
    private static getWjEventNameImplemented(eventName);
    static getWjEventName(ngEventName: string): string;
    static getBaseType(type: any): any;
    static getAnnotations(type: any): any[];
    static getAnnotation(annotations: any[], annotationType: any): any;
    static getTypeAnnotation(type: any, annotationType: any, own?: boolean): any;
    static equals(v1: any, v2: any): boolean;
    static _copy(dst: any, src: any, override?: boolean, includePrivate?: boolean, filter?: (name: string, value: any) => boolean): void;
}
export declare class WjValueAccessor implements ControlValueAccessor {
    private _isFirstChange;
    private _directive;
    private _behavior;
    private _ngModelProp;
    private _modelValue;
    private _isSubscribed;
    private _dirInitEh;
    private _onChange;
    private _onTouched;
    constructor(directive: any);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    private _updateDirective();
    private _ensureSubscribed();
    private _ensureNgModelProp();
    private _ensureInitEhUnsubscribed();
    private _dirValChgEh(s, e);
    private _dirLostFocusEh(s, e);
}
export declare function WjValueAccessorFactory(directive: any): WjValueAccessor;
export declare class WjDirectiveBaseModule {
}
