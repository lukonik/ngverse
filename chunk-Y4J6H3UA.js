import {
  ActiveDescendantKeyManager
} from "./chunk-QF5VCJ6S.js";
import {
  Directionality
} from "./chunk-4UYB5JXN.js";
import {
  animate,
  animation,
  keyframes,
  sequence,
  style,
  transition,
  trigger
} from "./chunk-JX5YVH27.js";
import {
  NgTemplateOutlet
} from "./chunk-QLTUCGP5.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  Injector,
  Input,
  Output,
  RendererFactory2,
  RuntimeError,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  computed,
  contentChild,
  contentChildren,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdomTemplate,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-UGZKGHRZ.js";

// projects/ngverse/src/lib/ui/tab/directives/tab-content.directive.ts
var TabContentDirective = class _TabContentDirective {
  /** Reference to the template containing the lazy-loaded content */
  templateRef = inject(TemplateRef);
  static \u0275fac = function TabContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabContentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TabContentDirective, selectors: [["ng-template", "appTabContent", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContentDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[appTabContent]"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/tab/directives/tab-label.directive.ts
var TabLabelDirective = class _TabLabelDirective {
  /** Reference to the template containing the custom tab label content */
  templateRef = inject(TemplateRef);
  static \u0275fac = function TabLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabLabelDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TabLabelDirective, selectors: [["ng-template", "appTabLabel", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabLabelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[appTabLabel]"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/tab/tab-panel/tab-panel.component.ts
var _c0 = ["*"];
function TabPanelComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var TabPanelComponent = class _TabPanelComponent {
  /** The text label displayed in the tab header. Optional if using a custom label template. */
  label = input(...ngDevMode ? [void 0, { debugName: "label" }] : []);
  /** Reference to the component's template for content projection */
  templateRef = viewChild(TemplateRef, ...ngDevMode ? [{ debugName: "templateRef" }] : []);
  /** View container reference for dynamic component creation (if needed) */
  vf = inject(ViewContainerRef);
  /** Custom template for the tab header label, projected via appTabLabel directive */
  headerTemplate = contentChild(TabLabelDirective, ...ngDevMode ? [{ debugName: "headerTemplate" }] : []);
  /** Template for lazy-loaded tab content, projected via appTabContent directive */
  bodyTemplate = contentChild(TabContentDirective, ...ngDevMode ? [{ debugName: "bodyTemplate" }] : []);
  /** Whether to apply default padding to the tab content area */
  gap = input(true, ...ngDevMode ? [{ debugName: "gap" }] : []);
  /** Portal instance for advanced content projection scenarios (currently unused) */
  portal;
  /** Whether this tab is disabled and cannot be selected */
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  static \u0275fac = function TabPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabPanelComponent, selectors: [["app-tab-panel"]], contentQueries: function TabPanelComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.headerTemplate, TabLabelDirective, 5);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.bodyTemplate, TabContentDirective, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, viewQuery: function TabPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.templateRef, TemplateRef, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { label: [1, "label"], gap: [1, "gap"], disabled: [1, "disabled"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function TabPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domTemplate(0, TabPanelComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanelComponent, [{
    type: Component,
    args: [{ selector: "app-tab-panel", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n" }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], templateRef: [{ type: ViewChild, args: [forwardRef(() => TemplateRef), { isSignal: true }] }], headerTemplate: [{ type: ContentChild, args: [forwardRef(() => TabLabelDirective), { isSignal: true }] }], bodyTemplate: [{ type: ContentChild, args: [forwardRef(() => TabContentDirective), { isSignal: true }] }], gap: [{ type: Input, args: [{ isSignal: true, alias: "gap", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabPanelComponent, { className: "TabPanelComponent", filePath: "projects/ngverse/src/lib/ui/tab/tab-panel/tab-panel.component.ts", lineNumber: 54 });
})();

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// projects/ngverse/src/lib/ui/tab/tab-header/tab-header.component.ts
function TabHeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngTemplateOutlet", ctx.templateRef);
  }
}
function TabHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.tab().label(), "\n");
  }
}
var TabHeaderComponent = class _TabHeaderComponent {
  /** Signal to track activation state (not currently used) */
  activate = signal(false, ...ngDevMode ? [{ debugName: "activate" }] : []);
  /** Reference to the associated tab panel component */
  tab = input.required(...ngDevMode ? [{ debugName: "tab" }] : []);
  /** The zero-based index of this tab within the tab group */
  tabIndex = input.required(...ngDevMode ? [{ debugName: "tabIndex" }] : []);
  /** Whether this tab header currently has keyboard focus */
  isActive = input(false, ...ngDevMode ? [{ debugName: "isActive" }] : []);
  /** Whether this tab is disabled and cannot be selected */
  isDisabled = input(false, ...ngDevMode ? [{ debugName: "isDisabled" }] : []);
  /**
   * Getter required by the Highlightable interface.
   * Returns the disabled state for compatibility with Angular CDK.
   */
  get disabled() {
    return this.isDisabled();
  }
  /** Reference to the native HTML element for direct DOM manipulation */
  element = inject(ElementRef).nativeElement;
  /** Signal that controls whether this tab should receive focus */
  enabledTabIndex = signal(false, ...ngDevMode ? [{ debugName: "enabledTabIndex" }] : []);
  /** Whether this tab is currently selected (shows its content) */
  isSelected = input.required(...ngDevMode ? [{ debugName: "isSelected" }] : []);
  /**
   * Called by the KeyManager when this tab becomes the active (focused) item.
   * Enables tabindex and focuses the element for keyboard navigation.
   * Required by the Highlightable interface.
   */
  setActiveStyles() {
    this.enabledTabIndex.set(true);
    this.element.focus();
  }
  /**
   * Called by the KeyManager when this tab loses focus.
   * Disables tabindex to remove from tab order.
   * Required by the Highlightable interface.
   */
  setInactiveStyles() {
    this.enabledTabIndex.set(false);
  }
  static \u0275fac = function TabHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabHeaderComponent, selectors: [["app-tab-header"]], hostAttrs: ["role", "tab"], hostVars: 9, hostBindings: function TabHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("id", "tab-" + ctx.tabIndex())("aria-selected", ctx.isSelected())("aria-controls", "tabpanel-" + ctx.tabIndex())("tabindex", ctx.isActive() ? "0" : "-1")("aria-disabled", ctx.isDisabled());
      \u0275\u0275classProp("is-active", ctx.enabledTabIndex())("is-selected", ctx.isSelected());
    }
  }, inputs: { tab: [1, "tab"], tabIndex: [1, "tabIndex"], isActive: [1, "isActive"], isDisabled: [1, "isDisabled"], isSelected: [1, "isSelected"] }, decls: 2, vars: 1, consts: [[3, "ngTemplateOutlet"]], template: function TabHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TabHeaderComponent_Conditional_0_Template, 1, 1, "ng-container", 0)(1, TabHeaderComponent_Conditional_1_Template, 1, 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.tab().headerTemplate()) ? 0 : 1, tmp_0_0);
    }
  }, dependencies: [NgTemplateOutlet], styles: ['\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-900: oklch(0.208 0.042 265.755);\n    --spacing: 0.25rem;\n  }\n}\n[_nghost-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  border-bottom-style: var(--tw-border-style);\n  border-bottom-width: 2px;\n  border-color: transparent;\n  padding-inline: calc(var(--spacing) * 4);\n  padding-block: calc(var(--spacing) * 3);\n}\n.is-active[_nghost-%COMP%] {\n  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n  --tw-ring-color: var(--color-blue-500);\n  --tw-outline-style: none;\n  outline-style: none;\n}\n.is-selected[_nghost-%COMP%] {\n  border-color: var(--color-slate-900);\n}\n[aria-disabled="true"][_nghost-%COMP%] {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 50%;\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n@property --tw-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-inset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-ring-color { syntax: "*"; inherits: false; }\n@property --tw-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-ring-color { syntax: "*"; inherits: false; }\n@property --tw-inset-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-ring-inset { syntax: "*"; inherits: false; }\n@property --tw-ring-offset-width { syntax: "<length>"; inherits: false; initial-value: 0px; }\n@property --tw-ring-offset-color { syntax: "*"; inherits: false; initial-value: #fff; }\n@property --tw-ring-offset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n\n\n/*# sourceMappingURL=tab-header.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-tab-header", imports: [NgTemplateOutlet], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "tab",
      "[class.is-active]": "enabledTabIndex()",
      "[class.is-selected]": "isSelected()",
      "[attr.id]": '"tab-" + tabIndex()',
      "[attr.aria-selected]": "isSelected()",
      "[attr.aria-controls]": '"tabpanel-" + tabIndex()',
      "[attr.tabindex]": 'isActive() ? "0" : "-1"',
      "[attr.aria-disabled]": "isDisabled()"
    }, template: '@if (tab().headerTemplate(); as headerTemplate) {\n  <ng-container [ngTemplateOutlet]="headerTemplate.templateRef"></ng-container>\n} @else {\n  {{ tab().label() }}\n}\n', styles: ['/* projects/ngverse/src/lib/ui/tab/tab-header/tab-header.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-900: oklch(0.208 0.042 265.755);\n    --spacing: 0.25rem;\n  }\n}\n:host {\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  border-bottom-style: var(--tw-border-style);\n  border-bottom-width: 2px;\n  border-color: transparent;\n  padding-inline: calc(var(--spacing) * 4);\n  padding-block: calc(var(--spacing) * 3);\n}\n:host.is-active {\n  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n  --tw-ring-color: var(--color-blue-500);\n  --tw-outline-style: none;\n  outline-style: none;\n}\n:host.is-selected {\n  border-color: var(--color-slate-900);\n}\n:host([aria-disabled="true"]) {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 50%;\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n@property --tw-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-inset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-ring-color { syntax: "*"; inherits: false; }\n@property --tw-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-ring-color { syntax: "*"; inherits: false; }\n@property --tw-inset-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-ring-inset { syntax: "*"; inherits: false; }\n@property --tw-ring-offset-width { syntax: "<length>"; inherits: false; initial-value: 0px; }\n@property --tw-ring-offset-color { syntax: "*"; inherits: false; initial-value: #fff; }\n@property --tw-ring-offset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=tab-header.component.css.map */\n'] }]
  }], null, { tab: [{ type: Input, args: [{ isSignal: true, alias: "tab", required: true }] }], tabIndex: [{ type: Input, args: [{ isSignal: true, alias: "tabIndex", required: true }] }], isActive: [{ type: Input, args: [{ isSignal: true, alias: "isActive", required: false }] }], isDisabled: [{ type: Input, args: [{ isSignal: true, alias: "isDisabled", required: false }] }], isSelected: [{ type: Input, args: [{ isSignal: true, alias: "isSelected", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabHeaderComponent, { className: "TabHeaderComponent", filePath: "projects/ngverse/src/lib/ui/tab/tab-header/tab-header.component.ts", lineNumber: 50 });
})();

// projects/ngverse/src/lib/ui/tab/tab-group.component.ts
var _c02 = ["*"];
function TabGroupComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tab-header", 6, 1);
    \u0275\u0275listener("click", function TabGroupComponent_For_3_Template_app_tab_header_click_0_listener() {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectTab($index_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("tab", tab_r5)("isSelected", $index_r3 === ctx_r3.selectedIndex())("tabIndex", $index_r3)("isActive", ctx_r3.keyManager.activeItemIndex === $index_r3)("isDisabled", tab_r5.disabled());
  }
}
function TabGroupComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 7);
  }
  if (rf & 2) {
    \u0275\u0275property("ngTemplateOutlet", ctx.templateRef);
  }
}
function TabGroupComponent_Conditional_6_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 7);
  }
  if (rf & 2) {
    \u0275\u0275property("ngTemplateOutlet", ctx);
  }
}
function TabGroupComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TabGroupComponent_Conditional_6_Conditional_2_Conditional_0_Template, 1, 1, "ng-container", 7);
  }
  if (rf & 2) {
    let tmp_4_0;
    const selectedTab_r6 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_4_0 = selectedTab_r6.templateRef()) ? 0 : -1, tmp_4_0);
  }
}
function TabGroupComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, TabGroupComponent_Conditional_6_Conditional_1_Template, 1, 1, "ng-container", 7)(2, TabGroupComponent_Conditional_6_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const selectedTab_r6 = ctx;
    \u0275\u0275classProp("p-5", selectedTab_r6.gap());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = selectedTab_r6.bodyTemplate()) ? 1 : 2, tmp_4_0);
  }
}
var TAB_CHANGE_ANIMATION = transition("* => *", [
  animation(animate("250ms ease-in", keyframes([
    style({ opacity: 0, offset: 0 }),
    style({ opacity: 1, offset: 1 })
  ])))
]);
var TabGroupComponent = class _TabGroupComponent {
  /** Collection of tab panel components projected into this tab group */
  tabs = contentChildren(TabPanelComponent, ...ngDevMode ? [{ debugName: "tabs" }] : []);
  /** The currently selected tab index, two-way bindable */
  selectedIndex = model(0, ...ngDevMode ? [{ debugName: "selectedIndex" }] : []);
  /** Whether to add padding to the tab content area */
  bodyGap = input(true, ...ngDevMode ? [{ debugName: "bodyGap" }] : []);
  /** Collection of tab header components for keyboard navigation */
  tabHeaders = viewChildren(TabHeaderComponent, ...ngDevMode ? [{ debugName: "tabHeaders" }] : []);
  /** Service for determining text direction (RTL/LTR) */
  direction = inject(Directionality);
  /**
   * Manages keyboard navigation between tab headers.
   * Handles arrow key navigation and focus management according to ARIA best practices.
   */
  keyManager = new ActiveDescendantKeyManager(this.tabHeaders, inject(Injector)).withHorizontalOrientation(this.direction.value);
  /**
   * Handles keyboard navigation events for the tab group.
   * Responds to Enter key to select the currently focused tab and delegates
   * other navigation keys to the key manager.
   *
   * @param event - The keyboard event to process
   */
  onKeydown(event) {
    if (event.key === "Enter" && this.keyManager.activeItemIndex !== null) {
      this.selectTab(this.keyManager.activeItemIndex);
    }
    this.keyManager.onKeydown(event);
  }
  /** Event emitted when the selected tab changes, containing the new tab index */
  tabChanged = output();
  /** Computed property that returns the currently selected tab panel component */
  selectedTab = computed(() => this.tabs().find((_, index) => index === this.selectedIndex()), ...ngDevMode ? [{ debugName: "selectedTab" }] : []);
  /**
   * Handles focus events on the tab group container.
   * Ensures the first tab receives focus when the tab group is focused for the first time.
   */
  onTabGroupFocus() {
    if (!this.keyManager.activeItem) {
      this.keyManager.setFirstItemActive();
    }
  }
  /**
   * Programmatically selects a tab by index.
   * Updates the key manager's active item, sets the selected index, and emits the change event.
   *
   * @param index - The zero-based index of the tab to select
   */
  selectTab(index) {
    this.keyManager.setActiveItem(index);
    this.selectedIndex.set(index);
    this.tabChanged.emit(index);
  }
  static \u0275fac = function TabGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabGroupComponent, selectors: [["app-tab-group"]], contentQueries: function TabGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.tabs, TabPanelComponent, 4);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, viewQuery: function TabGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.tabHeaders, TabHeaderComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { selectedIndex: [1, "selectedIndex"], bodyGap: [1, "bodyGap"] }, outputs: { selectedIndex: "selectedIndexChange", tabChanged: "tabChanged" }, ngContentSelectors: _c02, decls: 7, vars: 4, consts: [["tabGroupHeader", ""], ["tabHeader", ""], ["role", "tablist", "aria-orientation", "horizontal", "tabindex", "0", 1, "relative", "flex", "border-b", "border-gray-200", "focus:outline-none", "focus-visible:[&_app-tab-header.is-active]:ring-1", "focus-visible:[&_app-tab-header.is-active]:ring-blue-500", 3, "keydown", "focus"], [3, "tab", "isSelected", "tabIndex", "isActive", "isDisabled"], ["data-testid", "tab-content", "role", "tabpanel", 1, "tab-content"], [3, "p-5"], [3, "click", "tab", "isSelected", "tabIndex", "isActive", "isDisabled"], [3, "ngTemplateOutlet"]], template: function TabGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 2, 0);
      \u0275\u0275listener("keydown", function TabGroupComponent_Template_div_keydown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeydown($event));
      })("focus", function TabGroupComponent_Template_div_focus_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabGroupFocus());
      });
      \u0275\u0275repeaterCreate(2, TabGroupComponent_For_3_Template, 2, 5, "app-tab-header", 3, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(4);
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275conditionalCreate(6, TabGroupComponent_Conditional_6_Template, 3, 3, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs());
      \u0275\u0275advance(3);
      \u0275\u0275property("@tabChange", ctx.selectedIndex());
      \u0275\u0275attribute("id", "tabpanel-" + ctx.selectedIndex())("aria-labelledby", "tab-" + ctx.selectedIndex());
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_5_0 = ctx.selectedTab()) ? 6 : -1, tmp_5_0);
    }
  }, dependencies: [NgTemplateOutlet, TabHeaderComponent], encapsulation: 2, data: { animation: [trigger("tabChange", [TAB_CHANGE_ANIMATION])] }, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabGroupComponent, [{
    type: Component,
    args: [{ selector: "app-tab-group", imports: [NgTemplateOutlet, TabHeaderComponent], changeDetection: ChangeDetectionStrategy.OnPush, animations: [trigger("tabChange", [TAB_CHANGE_ANIMATION])], template: `<div
  class="relative flex border-b border-gray-200 focus:outline-none focus-visible:[&_app-tab-header.is-active]:ring-1 focus-visible:[&_app-tab-header.is-active]:ring-blue-500"
  #tabGroupHeader
  role="tablist"
  aria-orientation="horizontal"
  (keydown)="onKeydown($event)"
  tabindex="0"
  (focus)="onTabGroupFocus()"
>
  @for (tab of tabs(); track $index) {
    <app-tab-header
      [tab]="tab"
      [isSelected]="$index === selectedIndex()"
      [tabIndex]="$index"
      [isActive]="keyManager.activeItemIndex === $index"
      [isDisabled]="tab.disabled()"
      #tabHeader
      (click)="selectTab($index)"
    ></app-tab-header>
  }
</div>
<!--we need explicitely set ng-content, in order ssr work properly see (https://github.com/angular/angular/issues/50543)-->
<ng-content></ng-content>
<div
  [@tabChange]="selectedIndex()"
  class="tab-content"
  data-testid="tab-content"
  role="tabpanel"
  [attr.id]="'tabpanel-' + selectedIndex()"
  [attr.aria-labelledby]="'tab-' + selectedIndex()"
>
  @if (selectedTab(); as selectedTab) {
    <div [class.p-5]="selectedTab.gap()">
      @if (selectedTab.bodyTemplate(); as bodyTemplate) {
        <ng-container
          [ngTemplateOutlet]="bodyTemplate.templateRef"
        ></ng-container>
      } @else {
        @if (selectedTab.templateRef(); as templateRef) {
          <ng-container [ngTemplateOutlet]="templateRef"></ng-container>
        }
      }
    </div>
  }
</div>
` }]
  }], null, { tabs: [{ type: ContentChildren, args: [forwardRef(() => TabPanelComponent), { isSignal: true }] }], selectedIndex: [{ type: Input, args: [{ isSignal: true, alias: "selectedIndex", required: false }] }, { type: Output, args: ["selectedIndexChange"] }], bodyGap: [{ type: Input, args: [{ isSignal: true, alias: "bodyGap", required: false }] }], tabHeaders: [{ type: ViewChildren, args: [forwardRef(() => TabHeaderComponent), { isSignal: true }] }], tabChanged: [{ type: Output, args: ["tabChanged"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabGroupComponent, { className: "TabGroupComponent", filePath: "projects/ngverse/src/lib/ui/tab/tab-group.component.ts", lineNumber: 68 });
})();

export {
  AnimationBuilder,
  TabContentDirective,
  TabLabelDirective,
  TabPanelComponent,
  TabGroupComponent
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v21.0.0
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-Y4J6H3UA.js.map
