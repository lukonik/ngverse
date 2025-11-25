import {
  _IdGenerator
} from "./chunk-64HPILVO.js";
import {
  FontIconComponent
} from "./chunk-K3WRTE43.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  Subject,
  Subscription,
  booleanAttribute,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";

// projects/ngverse/src/lib/ui/accordion/accordion-body.component.ts
var _c0 = ["*"];
var AccordionBodyComponent = class _AccordionBodyComponent {
  static \u0275fac = function AccordionBodyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionBodyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccordionBodyComponent, selectors: [["app-accordion-body"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AccordionBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionBodyComponent, [{
    type: Component,
    args: [{
      selector: "app-accordion-body",
      template: `<ng-content> </ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccordionBodyComponent, { className: "AccordionBodyComponent", filePath: "projects/ngverse/src/lib/ui/accordion/accordion-body.component.ts", lineNumber: 8 });
})();

// node_modules/@angular/cdk/fesm2022/_unique-selection-dispatcher-chunk.mjs
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  _listeners = [];
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static \u0275fac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UniqueSelectionDispatcher,
    factory: _UniqueSelectionDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var CdkAccordion = class _CdkAccordion {
  _stateChanges = new Subject();
  _openCloseAllActions = new Subject();
  id = inject(_IdGenerator).getId("cdk-accordion-");
  multi = false;
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static \u0275fac = function CdkAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordion)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: [2, "multi", "multi", booleanAttribute]
    },
    exportAs: ["cdkAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useExisting: _CdkAccordion
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionItem = class _CdkAccordionItem {
  accordion = inject(CDK_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _expansionDispatcher = inject(UniqueSelectionDispatcher);
  _openCloseAllSubscription = Subscription.EMPTY;
  closed = new EventEmitter();
  opened = new EventEmitter();
  destroyed = new EventEmitter();
  expandedChange = new EventEmitter();
  id = inject(_IdGenerator).getId("cdk-accordion-child-");
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _expanded = false;
  get disabled() {
    return this._disabled();
  }
  set disabled(value) {
    this._disabled.set(value);
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  _removeUniqueSelectionListener = () => {
  };
  constructor() {
  }
  ngOnInit() {
    this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static \u0275fac = function CdkAccordionItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: [2, "expanded", "expanded", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useValue: void 0
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [{
        provide: CDK_ACCORDION,
        useValue: void 0
      }]
    }]
  }], () => [], {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionModule = class _CdkAccordionModule {
  static \u0275fac = function CdkAccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkAccordionModule,
    imports: [CdkAccordion, CdkAccordionItem],
    exports: [CdkAccordion, CdkAccordionItem]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordion, CdkAccordionItem],
      exports: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/accordion/accordion-item.component.ts
var _c02 = [[["app-accordion-header"]], [["app-accordion-body"]]];
var _c1 = ["app-accordion-header", "app-accordion-body"];
function AccordionItemComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r0.accordionBodyId);
    \u0275\u0275attribute("aria-labelledby", ctx_r0.accordionTriggerId);
  }
}
var AccordionItemComponent = class _AccordionItemComponent extends CdkAccordionItem {
  label = input(...ngDevMode ? [void 0, { debugName: "label" }] : []);
  accordionBodyId = inject(_IdGenerator).getId("accordion-item-body-");
  accordionTriggerId = inject(_IdGenerator).getId("accordion-item-trigger-");
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionItemComponent_BaseFactory;
    return function AccordionItemComponent_Factory(__ngFactoryType__) {
      return (\u0275AccordionItemComponent_BaseFactory || (\u0275AccordionItemComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionItemComponent)))(__ngFactoryType__ || _AccordionItemComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccordionItemComponent, selectors: [["app-accordion-item"]], hostAttrs: [1, "block", "mb-3", "pb-3", "border-b", "border-divider"], inputs: { label: [1, "label"] }, features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c1, decls: 7, vars: 8, consts: [["role", "heading"], [1, "peer", "flex", "w-full", "cursor-pointer", "items-center", "focus-visible:outline-1", "focus-visible:outline-offset-4", "focus-visible:outline-ring", "disabled:text-disabled-foreground", "aria-expanded:font-medium", 3, "click", "disabled", "id"], [1, "ml-auto", "transition-transform"], ["role", "region", 1, "mt-3", "px-1.5", 3, "id"]], template: function AccordionItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275elementStart(0, "h3", 0)(1, "button", 1);
      \u0275\u0275listener("click", function AccordionItemComponent_Template_button_click_1_listener() {
        return ctx.toggle();
      });
      \u0275\u0275text(2);
      \u0275\u0275projection(3);
      \u0275\u0275elementStart(4, "app-font-icon", 2);
      \u0275\u0275text(5, "keyboard_arrow_down");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(6, AccordionItemComponent_Conditional_6_Template, 2, 2, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled)("id", ctx.accordionTriggerId);
      \u0275\u0275attribute("aria-expanded", ctx.expanded)("aria-controls", ctx.accordionBodyId);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.label(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rotate-180", ctx.expanded);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.expanded ? 6 : -1);
    }
  }, dependencies: [FontIconComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionItemComponent, [{
    type: Component,
    args: [{ selector: "app-accordion-item", imports: [FontIconComponent], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      class: "block mb-3 pb-3 border-b border-divider"
    }, template: '<h3 role="heading">\n  <button\n    class="peer flex w-full cursor-pointer items-center focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:text-disabled-foreground aria-expanded:font-medium"\n    (click)="toggle()"\n    [disabled]="disabled"\n    [attr.aria-expanded]="expanded"\n    [id]="accordionTriggerId"\n    [attr.aria-controls]="accordionBodyId"\n  >\n    {{ label() }}\n    <ng-content select="app-accordion-header"></ng-content>\n    <app-font-icon\n      [class.rotate-180]="expanded"\n      class="ml-auto transition-transform"\n      >keyboard_arrow_down</app-font-icon\n    >\n  </button>\n</h3>\n@if (expanded) {\n  <div\n    role="region"\n    [id]="accordionBodyId"\n    [attr.aria-labelledby]="accordionTriggerId"\n    class="mt-3 px-1.5"\n  >\n    <ng-content select="app-accordion-body"></ng-content>\n  </div>\n}\n' }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccordionItemComponent, { className: "AccordionItemComponent", filePath: "projects/ngverse/src/lib/ui/accordion/accordion-item.component.ts", lineNumber: 21 });
})();

// projects/ngverse/src/lib/ui/accordion/accordion.component.ts
var _c03 = [[["app-accordion-item"]]];
var _c12 = ["app-accordion-item"];
var AccordionComponent = class _AccordionComponent extends CdkAccordion {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionComponent_BaseFactory;
    return function AccordionComponent_Factory(__ngFactoryType__) {
      return (\u0275AccordionComponent_BaseFactory || (\u0275AccordionComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionComponent)))(__ngFactoryType__ || _AccordionComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccordionComponent, selectors: [["app-accordion"]], features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c12, decls: 1, vars: 0, template: function AccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c03);
      \u0275\u0275projection(0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionComponent, [{
    type: Component,
    args: [{ selector: "app-accordion", changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content select="app-accordion-item"></ng-content>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccordionComponent, { className: "AccordionComponent", filePath: "projects/ngverse/src/lib/ui/accordion/accordion.component.ts", lineNumber: 10 });
})();

export {
  AccordionBodyComponent,
  UniqueSelectionDispatcher,
  AccordionItemComponent,
  AccordionComponent
};
//# sourceMappingURL=chunk-APVNZA6G.js.map
