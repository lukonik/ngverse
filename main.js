import {
  DarkModeToggleComponent
} from "./chunk-I4VTGHDR.js";
import {
  SidebarComponent
} from "./chunk-WOJVUR7A.js";
import {
  IconComponent,
  IconRegistry
} from "./chunk-UB3ONJA7.js";
import {
  ButtonComponent
} from "./chunk-GPD647ZZ.js";
import "./chunk-ILWOXVJI.js";
import {
  ProjectNameComponent
} from "./chunk-SNTPACE6.js";
import "./chunk-MKNWGWE3.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-VQYCA752.js";
import {
  ComponentPortal,
  Overlay
} from "./chunk-GAYAR7LB.js";
import "./chunk-4UYB5JXN.js";
import {
  provideHighlightOptions
} from "./chunk-EPTODCGW.js";
import {
  FontIconComponent
} from "./chunk-EKFZFPCR.js";
import {
  DomRendererFactory2,
  bootstrapApplication,
  provideClientHydration,
  provideHttpClient,
  withEventReplay,
  withFetch
} from "./chunk-QLTUCGP5.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  Component,
  DOCUMENT,
  Injectable,
  InjectionToken,
  Injector,
  NgZone,
  RendererFactory2,
  RuntimeError,
  filter,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  provideZonelessChangeDetection,
  setClassMetadata,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-UGZKGHRZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VL5VAURS.js";

// projects/docs/src/app/features/header/header.component.ts
var _c0 = () => ["/"];
var HeaderComponent = class _HeaderComponent {
  overlay = inject(Overlay);
  overlayRef;
  router = inject(Router);
  constructor() {
  }
  showSidebar() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().left(),
      hasBackdrop: true,
      disposeOnNavigation: true
    });
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef?.dispose();
    });
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).pipe(take(1)).pipe(takeUntil(this.overlayRef.backdropClick().pipe(take(1)))).subscribe(() => {
      this.overlayRef?.dispose();
    });
    this.overlayRef.attach(new ComponentPortal(SidebarComponent));
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["doc-header"]], decls: 13, vars: 2, consts: [[1, "header", "sticky", "top-0", "z-50", "flex", "items-center", "justify-between", "px-5"], ["aria-label", "toggle menu", 1, "lg:hidden", 3, "click"], [1, "text-slate-900", "dark:text-violet-500"], [1, "ml-2", "flex", "items-center", "gap-2", "lg:ml-0", 3, "routerLink"], ["name", "logo", "width", "40", "height", "40"], [1, "text-xl", "font-bold"], [1, "mr-2", "ml-auto"], ["href", "https://github.com/ngverse/ui", "target", "_blank"], ["appButton", "", "icon", "", "color", "secondary", "variant", "outline", "size", "sm", "variant", "link", "aria-label", "Star on Github"], ["width", "20", "height", "20", "name", "github"], ["id", "docsearch"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "button", 1);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_1_listener() {
        return ctx.showSidebar();
      });
      \u0275\u0275elementStart(2, "app-font-icon");
      \u0275\u0275text(3, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2)(5, "a", 3);
      \u0275\u0275element(6, "app-icon", 4)(7, "doc-project-name", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "app-dark-mode-toggle", 6);
      \u0275\u0275elementStart(9, "a", 7)(10, "button", 8);
      \u0275\u0275element(11, "app-icon", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(12, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
    }
  }, dependencies: [
    RouterLink,
    ProjectNameComponent,
    ButtonComponent,
    IconComponent,
    DarkModeToggleComponent,
    FontIconComponent
  ], styles: ["\n\nheader[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 100%;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-background);\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "doc-header", imports: [
      RouterLink,
      ProjectNameComponent,
      ButtonComponent,
      IconComponent,
      DarkModeToggleComponent,
      FontIconComponent
    ], template: `<header class="header sticky top-0 z-50 flex items-center justify-between px-5">
  <button class="lg:hidden" aria-label="toggle menu" (click)="showSidebar()">
    <app-font-icon>menu</app-font-icon>
  </button>
  <div class="text-slate-900 dark:text-violet-500">
    <a [routerLink]="['/']" class="ml-2 flex items-center gap-2 lg:ml-0">
      <app-icon name="logo" width="40" height="40"></app-icon>
      <doc-project-name class="text-xl font-bold"></doc-project-name>
    </a>
  </div>

  <app-dark-mode-toggle class="mr-2 ml-auto"></app-dark-mode-toggle>
  <a href="https://github.com/ngverse/ui" target="_blank">
    <button
      appButton
      icon
      color="secondary"
      variant="outline"
      size="sm"
      variant="link"
      aria-label="Star on Github"
    >
      <app-icon width="20" height="20" name="github"></app-icon>
    </button>
  </a>
  <div id="docsearch"></div>
</header>
`, styles: ["/* projects/docs/src/app/features/header/header.component.css */\nheader {\n  height: 56px;\n  width: 100%;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-background);\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "projects/docs/src/app/features/header/header.component.ts", lineNumber: 26 });
})();

// projects/docs/src/app/app.component.ts
var AppComponent = class _AppComponent {
  iconRegistry = inject(IconRegistry);
  _document = inject(DOCUMENT);
  _router = inject(Router);
  constructor() {
    this.iconRegistry.addIcon("github", "images/github.svg");
    this.iconRegistry.addIcon("logo", "logo.svg");
    this._router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this._document.documentElement.scrollTop = 0;
    });
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["doc-root"]], decls: 9, vars: 0, consts: [[1, "flex", "flex-col", "items-center", "justify-center", "border-t", "border-solid", "border-gray-200", "px-5", "py-8", "text-sm"], [1, "text-center"], ["target", "_blank", "href", "https://github.com/ngverse/ui/blob/main/LICENSE", 1, "underline"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "doc-header")(1, "router-outlet");
      \u0275\u0275elementStart(2, "footer", 0)(3, "p", 1);
      \u0275\u0275text(4, " Created out of laziness from constantly rebuilding the same generic components. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 1);
      \u0275\u0275text(6, " Code licensed under an ");
      \u0275\u0275elementStart(7, "a", 2);
      \u0275\u0275text(8, " MIT-style License.");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterOutlet, HeaderComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "doc-root", imports: [RouterOutlet, HeaderComponent], template: '<doc-header></doc-header>\n<router-outlet></router-outlet>\n<footer\n  class="flex flex-col items-center justify-center border-t border-solid border-gray-200 px-5 py-8 text-sm"\n>\n  <p class="text-center">\n    Created out of laziness from constantly rebuilding the same generic\n    components.\n  </p>\n\n  <p class="text-center">\n    Code licensed under an\n    <a\n      class="underline"\n      target="_blank"\n      href="https://github.com/ngverse/ui/blob/main/LICENSE"\n    >\n      MIT-style License.</a\n    >\n  </p>\n</footer>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "projects/docs/src/app/app.component.ts", lineNumber: 14 });
})();

// node_modules/@angular/platform-browser/fesm2022/animations-async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  ngOnDestroy() {
    this._engine?.flush();
  }
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-SNH2WFSB.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(10);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: () => {
      return new AsyncAnimationRendererFactory(inject(DOCUMENT), inject(DomRendererFactory2), inject(NgZone), type);
    }
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// projects/docs/src/app/guides.routes.ts
var GUIDES_ROUTES = {
  path: "guides",
  children: [
    __spreadValues({
      path: "introduction",
      loadComponent: () => import("./chunk-LGPCX4HJ.js").then((i) => i.IntroductionPageComponent)
    }, false ? { \u0275entryName: "src/app/features/introduction-page/introduction-page.component.ts" } : {}),
    __spreadValues({
      path: "installation",
      loadComponent: () => import("./chunk-CHPLS3ED.js").then((i) => i.InstallationPageComponent)
    }, false ? { \u0275entryName: "src/app/features/installation-page/installation-page.component.ts" } : {}),
    {
      path: "schematics-usage",
      pathMatch: "full",
      redirectTo: "usage"
    },
    {
      path: "",
      pathMatch: "full",
      redirectTo: "introduction"
    }
  ]
};

// projects/docs/src/app/ui.routes.ts
var UI_ROUTES = {
  path: "ui",
  children: [
    __spreadValues({
      path: "schematics",
      loadComponent: () => import("./chunk-D2XWHYP6.js").then((b) => b.UiSchematicsPageComponent)
    }, false ? { \u0275entryName: "src/app/pages/ui/ui-schematics-page/ui-schematics-page.component.ts" } : {}),
    __spreadValues({
      path: "theming",
      loadComponent: () => import("./chunk-44CS2BMF.js").then((b) => b.UiThemingPageComponent)
    }, false ? { \u0275entryName: "src/app/pages/ui/ui-theming-page/ui-theming-page.component.ts" } : {}),
    __spreadValues({
      path: "font-icon",
      loadComponent: () => import("./chunk-WIESGKBI.js").then((f) => f.FontIconPageComponent)
    }, false ? { \u0275entryName: "src/app/pages/ui/font-icon-page/font-icon-page.component.ts" } : {}),
    __spreadValues({
      path: "accordion",
      loadComponent: () => import("./chunk-PHPH4J6B.js").then((b) => b.AccordionPageComponent)
    }, false ? { \u0275entryName: "src/app/features/accordion-page/accordion-page.component.ts" } : {}),
    __spreadValues({
      path: "autocomplete",
      loadComponent: () => import("./chunk-5HWERCU7.js").then((b) => b.AutocompletePageComponent)
    }, false ? { \u0275entryName: "src/app/features/autocomplete-page/autocomplete-page.component.ts" } : {}),
    __spreadValues({
      path: "alert",
      loadComponent: () => import("./chunk-3MRFXCBQ.js").then((b) => b.AlertPageComponent)
    }, false ? { \u0275entryName: "src/app/features/alert-page/alert-page.component.ts" } : {}),
    __spreadValues({
      path: "badge",
      loadComponent: () => import("./chunk-GAK4PL4T.js").then((b) => b.BadgePageComponent)
    }, false ? { \u0275entryName: "src/app/features/badge-page/badge-page.component.ts" } : {}),
    __spreadValues({
      path: "card",
      loadComponent: () => import("./chunk-NIJG6JKR.js").then((b) => b.CardPageComponent)
    }, false ? { \u0275entryName: "src/app/features/card-page/card-page.component.ts" } : {}),
    __spreadValues({
      path: "divider",
      loadComponent: () => import("./chunk-MCC3RQZL.js").then((b) => b.DividerPageComponent)
    }, false ? { \u0275entryName: "src/app/features/divider-page/divider-page.component.ts" } : {}),
    __spreadValues({
      path: "drawer",
      loadComponent: () => import("./chunk-FZIBZZYK.js").then((b) => b.DrawerPageComponent)
    }, false ? { \u0275entryName: "src/app/features/drawer-page/drawer-page.component.ts" } : {}),
    __spreadValues({
      path: "otp-input",
      loadComponent: () => import("./chunk-75YRRRYN.js").then((b) => b.OtpInputPageComponent)
    }, false ? { \u0275entryName: "src/app/features/otp-input-page/otp-input-page.component.ts" } : {}),
    __spreadValues({
      path: "progress-bar",
      loadComponent: () => import("./chunk-ENMFBJ3L.js").then((b) => b.ProgressBarPageComponent)
    }, false ? { \u0275entryName: "src/app/features/progress-bar-page/progress-bar-page.component.ts" } : {}),
    __spreadValues({
      path: "tooltip",
      loadComponent: () => import("./chunk-JZC2RYV4.js").then((b) => b.TooltipPageComponent)
    }, false ? { \u0275entryName: "src/app/features/tooltip-page/tooltip-page.component.ts" } : {}),
    __spreadValues({
      path: "toast",
      loadComponent: () => import("./chunk-V77TTSRK.js").then((b) => b.ToastPageComponent)
    }, false ? { \u0275entryName: "src/app/features/toast-page/toast-page.component.ts" } : {}),
    __spreadValues({
      path: "button",
      loadComponent: () => import("./chunk-LPOK3G36.js").then((b) => b.ButtonPageComponent)
    }, false ? { \u0275entryName: "src/app/features/button-page/button-page.component.ts" } : {}),
    __spreadValues({
      path: "button-group",
      loadComponent: () => import("./chunk-6CQMZD5H.js").then((b) => b.ButtonGroupPageComponent)
    }, false ? { \u0275entryName: "src/app/features/button-group-page/button-group-page.component.ts" } : {}),
    __spreadValues({
      path: "outside-click",
      loadComponent: () => import("./chunk-2WH3OWFI.js").then((b) => b.OutsideClickPageComponent)
    }, false ? { \u0275entryName: "src/app/features/outside-click-page/outside-click-page.component.ts" } : {}),
    __spreadValues({
      path: "checkbox",
      loadComponent: () => import("./chunk-RFDASNY2.js").then((c) => c.CheckboxPageComponent)
    }, false ? { \u0275entryName: "src/app/features/checkbox-page/checkbox-page.component.ts" } : {}),
    __spreadValues({
      path: "radio-button",
      loadComponent: () => import("./chunk-VPIPRQ2S.js").then((c) => c.RadioButtonPageComponent)
    }, false ? { \u0275entryName: "src/app/features/radio-button-page/radio-button-page.component.ts" } : {}),
    __spreadValues({
      path: "select",
      loadComponent: () => import("./chunk-O73DYQL7.js").then((c) => c.SelectPageComponent)
    }, false ? { \u0275entryName: "src/app/features/select-page/select-page.component.ts" } : {}),
    __spreadValues({
      path: "multi-select",
      loadComponent: () => import("./chunk-3CHBBFF5.js").then((c) => c.MultiSelectPageComponent)
    }, false ? { \u0275entryName: "src/app/pages/ui/multi-select-page/multi-select-page.component.ts" } : {}),
    __spreadValues({
      path: "dialog",
      loadComponent: () => import("./chunk-ZV6YOP6Z.js").then((d) => d.DialogPageComponent)
    }, false ? { \u0275entryName: "src/app/features/dialog-page/dialog-page.component.ts" } : {}),
    __spreadValues({
      path: "skeleton",
      loadComponent: () => import("./chunk-6ENPYY7A.js").then((d) => d.SkeletonPageComponent)
    }, false ? { \u0275entryName: "src/app/features/skeleton-page/skeleton-page.component.ts" } : {}),
    __spreadValues({
      path: "switch",
      loadComponent: () => import("./chunk-5T5VLKVL.js").then((d) => d.SwitchPageComponent)
    }, false ? { \u0275entryName: "src/app/features/switch-page/switch-page.component.ts" } : {}),
    __spreadValues({
      path: "tab",
      loadComponent: () => import("./chunk-BLXSAZF6.js").then((d) => d.TabPageComponent)
    }, false ? { \u0275entryName: "src/app/features/tab-page/tab-page.component.ts" } : {}),
    __spreadValues({
      path: "tab-nav-bar",
      loadComponent: () => import("./chunk-G5CY4Y7N.js").then((d) => d.TabNavBarPageComponent)
    }, false ? { \u0275entryName: "src/app/features/tab-nav-bar-page/tab-nav-bar-page.component.ts" } : {}),
    __spreadValues({
      path: "textarea",
      loadComponent: () => import("./chunk-L6CXDUC2.js").then((d) => d.TextareaPageComponent)
    }, false ? { \u0275entryName: "src/app/features/textarea-page/textarea-page.component.ts" } : {}),
    __spreadValues({
      path: "input",
      loadComponent: () => import("./chunk-2ONOD6MW.js").then((d) => d.InputPageComponent)
    }, false ? { \u0275entryName: "src/app/features/input-page/input-page.component.ts" } : {}),
    __spreadValues({
      path: "form-field",
      loadComponent: () => import("./chunk-OXPFXPKI.js").then((d) => d.FormFieldPageComponent)
    }, false ? { \u0275entryName: "src/app/features/form-field-page/form-field-page.component.ts" } : {}),
    __spreadValues({
      path: "icon",
      loadComponent: () => import("./chunk-BR6D52KQ.js").then((b) => b.IconPageComponent)
    }, false ? { \u0275entryName: "src/app/features/icon-page/icon-page.component.ts" } : {}),
    __spreadValues({
      path: "popover",
      loadComponent: () => import("./chunk-CJ7CHTPP.js").then((p) => p.PopoverPageComponent)
    }, false ? { \u0275entryName: "src/app/features/popover-page/popover-page.component.ts" } : {}),
    __spreadValues({
      path: "pagination",
      loadComponent: () => import("./chunk-CLQ4BMRU.js").then((b) => b.PaginationPageComponent)
    }, false ? { \u0275entryName: "src/app/features/pagination-page/pagination-page.component.ts" } : {}),
    __spreadValues({
      path: "context-menu",
      loadComponent: () => import("./chunk-PEFZEWIH.js").then((p) => p.ContextMenuPageComponent)
    }, false ? { \u0275entryName: "src/app/features/context-menu-page/context-menu-page.component.ts" } : {}),
    __spreadValues({
      path: "loader",
      loadComponent: () => import("./chunk-5NSVRYGT.js").then((p) => p.LoaderPageComponent)
    }, false ? { \u0275entryName: "src/app/features/loader-page/loader-page.component.ts" } : {}),
    __spreadValues({
      path: "local-storage",
      loadComponent: () => import("./chunk-UXMY624Q.js").then((p) => p.LocalStoragePageComponent)
    }, false ? { \u0275entryName: "src/app/features/local-storage-page/local-storage-page.component.ts" } : {}),
    __spreadValues({
      path: "session-storage",
      loadComponent: () => import("./chunk-MT2MGWCZ.js").then((p) => p.SessionStoragePageComponent)
    }, false ? { \u0275entryName: "src/app/features/session-storage-page/session-storage-page.component.ts" } : {}),
    __spreadValues({
      path: "dark-mode",
      loadComponent: () => import("./chunk-PMGWF4HD.js").then((p) => p.DarkModePageComponent)
    }, false ? { \u0275entryName: "src/app/features/dark-mode-page/dark-mode-page.component.ts" } : {}),
    __spreadValues({
      path: "table",
      loadComponent: () => import("./chunk-5KJNLTW4.js").then((p) => p.TablePageComponent)
    }, false ? { \u0275entryName: "src/app/features/table-page/table-page.component.ts" } : {}),
    __spreadValues({
      path: "datepicker",
      loadComponent: () => import("./chunk-QCNJHLGK.js").then((d) => d.DatepickerPageComponent)
    }, false ? { \u0275entryName: "src/app/pages/datepicker-page/datepicker-page.component.ts" } : {}),
    {
      path: "",
      redirectTo: "/doc/ui/configuration",
      pathMatch: "full"
    }
  ]
};

// projects/docs/src/app/app.routes.ts
var routes = [
  __spreadValues({
    path: "doc",
    loadComponent: () => import("./chunk-3SVFSKEV.js").then((d) => d.DocContainerPageComponent),
    children: [GUIDES_ROUTES, UI_ROUTES]
  }, false ? { \u0275entryName: "src/app/features/doc-container-page/doc-container-page.component.ts" } : {}),
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-INJFVZVC.js").then((h) => h.HomePageComponent)
  }, false ? { \u0275entryName: "src/app/pages/home-page/home-page.component.ts" } : {})
];

// projects/docs/src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideHighlightOptions({
      fullLibraryLoader: () => import("./chunk-SYAAIRGN.js")
    }),
    provideClientHydration(withEventReplay())
  ]
};

// projects/docs/src/main.ts
bootstrapApplication(AppComponent, __spreadProps(__spreadValues({}, appConfig), {
  providers: [provideZonelessChangeDetection(), ...appConfig.providers]
})).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations-async.mjs:
  (**
   * @license Angular v21.0.0
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
