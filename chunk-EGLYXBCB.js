import {
  ApiDescriptionComponent
} from "./chunk-R6NCU6QH.js";
import {
  ToastService
} from "./chunk-HV4CJMWL.js";
import {
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE
} from "./chunk-BF7ARAHW.js";
import {
  UniqueSelectionDispatcher
} from "./chunk-APVNZA6G.js";
import {
  CommandInstallationComponent
} from "./chunk-CTKIHVNQ.js";
import {
  ShowCaseComponent
} from "./chunk-NXTRMWBG.js";
import {
  AnimationBuilder
} from "./chunk-FVG5D4KT.js";
import {
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-PQL4JFHV.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import "./chunk-3GLWUNBJ.js";
import {
  FocusKeyManager,
  FocusMonitor,
  InputModalityDetector
} from "./chunk-BC37M6ZP.js";
import "./chunk-FK22TT2X.js";
import "./chunk-4YTCSZ5T.js";
import {
  OverlayConfig,
  OverlayModule,
  STANDARD_DROPDOWN_ADJACENT_POSITIONS,
  STANDARD_DROPDOWN_BELOW_POSITIONS,
  TemplatePortal,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-XGFB36A5.js";
import {
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  SPACE,
  TAB,
  UP_ARROW,
  _IdGenerator,
  _getEventTarget,
  hasModifierKey
} from "./chunk-64HPILVO.js";
import {
  animate,
  style
} from "./chunk-JX5YVH27.js";
import "./chunk-633NCXCE.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-K3WRTE43.js";
import "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  RendererFactory2,
  Subject,
  ViewContainerRef,
  booleanAttribute,
  computed,
  debounceTime,
  distinctUntilChanged,
  inject,
  mapTo,
  merge,
  mergeAll,
  mergeMap,
  partition,
  setClassMetadata,
  signal,
  skip,
  skipWhile,
  startWith,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-2NN34RDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VL5VAURS.js";

// node_modules/@angular/cdk/fesm2022/menu.mjs
var CdkMenuGroup = class _CdkMenuGroup {
  static \u0275fac = function CdkMenuGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMenuGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenuGroup,
    selectors: [["", "cdkMenuGroup", ""]],
    hostAttrs: ["role", "group", 1, "cdk-menu-group"],
    exportAs: ["cdkMenuGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: UniqueSelectionDispatcher,
      useClass: UniqueSelectionDispatcher
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkMenuGroup]",
      exportAs: "cdkMenuGroup",
      host: {
        "role": "group",
        "class": "cdk-menu-group"
      },
      providers: [{
        provide: UniqueSelectionDispatcher,
        useClass: UniqueSelectionDispatcher
      }]
    }]
  }], null, null);
})();
var CDK_MENU = new InjectionToken("cdk-menu");
var FocusNext;
(function(FocusNext2) {
  FocusNext2[FocusNext2["nextItem"] = 0] = "nextItem";
  FocusNext2[FocusNext2["previousItem"] = 1] = "previousItem";
  FocusNext2[FocusNext2["currentItem"] = 2] = "currentItem";
})(FocusNext || (FocusNext = {}));
var MENU_STACK = new InjectionToken("cdk-menu-stack");
var PARENT_OR_NEW_MENU_STACK_PROVIDER = {
  provide: MENU_STACK,
  useFactory: () => inject(MENU_STACK, {
    optional: true,
    skipSelf: true
  }) || new MenuStack()
};
var PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER = (orientation) => ({
  provide: MENU_STACK,
  useFactory: () => inject(MENU_STACK, {
    optional: true,
    skipSelf: true
  }) || MenuStack.inline(orientation)
});
var MenuStack = class _MenuStack {
  id = inject(_IdGenerator).getId("cdk-menu-stack-");
  _elements = [];
  _close = new Subject();
  _empty = new Subject();
  _hasFocus = new Subject();
  closed = this._close;
  hasFocus = this._hasFocus.pipe(startWith(false), debounceTime(0), distinctUntilChanged());
  emptied = this._empty;
  _inlineMenuOrientation = null;
  static inline(orientation) {
    const stack = new _MenuStack();
    stack._inlineMenuOrientation = orientation;
    return stack;
  }
  push(menu) {
    this._elements.push(menu);
  }
  close(lastItem, options) {
    const {
      focusNextOnEmpty,
      focusParentTrigger
    } = __spreadValues({}, options);
    if (this._elements.indexOf(lastItem) >= 0) {
      let poppedElement;
      do {
        poppedElement = this._elements.pop();
        this._close.next({
          item: poppedElement,
          focusParentTrigger
        });
      } while (poppedElement !== lastItem);
      if (this.isEmpty()) {
        this._empty.next(focusNextOnEmpty);
      }
    }
  }
  closeSubMenuOf(lastItem) {
    let removed = false;
    if (this._elements.indexOf(lastItem) >= 0) {
      removed = this.peek() !== lastItem;
      while (this.peek() !== lastItem) {
        this._close.next({
          item: this._elements.pop()
        });
      }
    }
    return removed;
  }
  closeAll(options) {
    const {
      focusNextOnEmpty,
      focusParentTrigger
    } = __spreadValues({}, options);
    if (!this.isEmpty()) {
      while (!this.isEmpty()) {
        const menuStackItem = this._elements.pop();
        if (menuStackItem) {
          this._close.next({
            item: menuStackItem,
            focusParentTrigger
          });
        }
      }
      this._empty.next(focusNextOnEmpty);
    }
  }
  isEmpty() {
    return !this._elements.length;
  }
  length() {
    return this._elements.length;
  }
  peek() {
    return this._elements[this._elements.length - 1];
  }
  hasInlineMenu() {
    return this._inlineMenuOrientation != null;
  }
  inlineMenuOrientation() {
    return this._inlineMenuOrientation;
  }
  setHasFocus(hasFocus) {
    this._hasFocus.next(hasFocus);
  }
  static \u0275fac = function MenuStack_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuStack)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MenuStack,
    factory: _MenuStack.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuStack, [{
    type: Injectable
  }], null, null);
})();
var MENU_TRIGGER = new InjectionToken("cdk-menu-trigger");
var MENU_SCROLL_STRATEGY = new InjectionToken("cdk-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var MenuTracker = class _MenuTracker {
  static _openMenuTrigger;
  update(trigger) {
    if (_MenuTracker._openMenuTrigger !== trigger) {
      _MenuTracker._openMenuTrigger?.close();
      _MenuTracker._openMenuTrigger = trigger;
    }
  }
  static \u0275fac = function MenuTracker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuTracker)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MenuTracker,
    factory: _MenuTracker.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuTracker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CdkMenuTriggerBase = class _CdkMenuTriggerBase {
  injector = inject(Injector);
  viewContainerRef = inject(ViewContainerRef);
  menuStack = inject(MENU_STACK);
  menuScrollStrategy = inject(MENU_SCROLL_STRATEGY);
  menuPosition;
  opened = new EventEmitter();
  closed = new EventEmitter();
  menuTemplateRef;
  menuData;
  overlayRef = null;
  destroyed = new Subject();
  stopOutsideClicksListener = merge(this.closed, this.destroyed);
  childMenu;
  _menuPortal;
  _childMenuInjector;
  ngOnDestroy() {
    this._destroyOverlay();
    this.destroyed.next();
    this.destroyed.complete();
  }
  isOpen() {
    return !!this.overlayRef?.hasAttached();
  }
  registerChildMenu(child) {
    this.childMenu = child;
  }
  getMenuContentPortal() {
    const hasMenuContentChanged = this.menuTemplateRef !== this._menuPortal?.templateRef;
    if (this.menuTemplateRef && (!this._menuPortal || hasMenuContentChanged)) {
      this._menuPortal = new TemplatePortal(this.menuTemplateRef, this.viewContainerRef, this.menuData, this._getChildMenuInjector());
    }
    return this._menuPortal;
  }
  isElementInsideMenuStack(element) {
    for (let el = element; el; el = el?.parentElement ?? null) {
      if (el.getAttribute("data-cdk-menu-stack-id") === this.menuStack.id) {
        return true;
      }
    }
    return false;
  }
  _destroyOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
  _getChildMenuInjector() {
    this._childMenuInjector = this._childMenuInjector || Injector.create({
      providers: [{
        provide: MENU_TRIGGER,
        useValue: this
      }, {
        provide: MENU_STACK,
        useValue: this.menuStack
      }],
      parent: this.injector
    });
    return this._childMenuInjector;
  }
  static \u0275fac = function CdkMenuTriggerBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMenuTriggerBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenuTriggerBase,
    hostVars: 2,
    hostBindings: function CdkMenuTriggerBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-controls", ctx.childMenu == null ? null : ctx.childMenu.id)("data-cdk-menu-stack-id", ctx.menuStack.id);
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuTriggerBase, [{
    type: Directive,
    args: [{
      host: {
        "[attr.aria-controls]": "childMenu?.id",
        "[attr.data-cdk-menu-stack-id]": "menuStack.id"
      }
    }]
  }], null, null);
})();
function throwMissingPointerFocusTracker() {
  throw Error("expected an instance of PointerFocusTracker to be provided");
}
function throwMissingMenuReference() {
  throw Error("expected a reference to the parent menu");
}
var MENU_AIM = new InjectionToken("cdk-menu-aim");
var MOUSE_MOVE_SAMPLE_FREQUENCY = 3;
var NUM_POINTS = 5;
var CLOSE_DELAY = 300;
function getSlope(a, b) {
  return (b.y - a.y) / (b.x - a.x);
}
function getYIntercept(point, slope) {
  return point.y - slope * point.x;
}
function isWithinSubmenu(submenuPoints, m, b) {
  const {
    left,
    right,
    top,
    bottom
  } = submenuPoints;
  return m * left + b >= top && m * left + b <= bottom || m * right + b >= top && m * right + b <= bottom || (top - b) / m >= left && (top - b) / m <= right || (bottom - b) / m >= left && (bottom - b) / m <= right;
}
var TargetMenuAim = class _TargetMenuAim {
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupMousemove;
  _points = [];
  _menu;
  _pointerTracker;
  _timeoutId;
  _destroyed = new Subject();
  ngOnDestroy() {
    this._cleanupMousemove?.();
    this._destroyed.next();
    this._destroyed.complete();
  }
  initialize(menu, pointerTracker) {
    this._menu = menu;
    this._pointerTracker = pointerTracker;
    this._subscribeToMouseMoves();
  }
  toggle(doToggle) {
    if (this._menu.orientation === "horizontal") {
      doToggle();
    }
    this._checkConfigured();
    const siblingItemIsWaiting = !!this._timeoutId;
    const hasPoints = this._points.length > 1;
    if (hasPoints && !siblingItemIsWaiting) {
      if (this._isMovingToSubmenu()) {
        this._startTimeout(doToggle);
      } else {
        doToggle();
      }
    } else if (!siblingItemIsWaiting) {
      doToggle();
    }
  }
  _startTimeout(doToggle) {
    const timeoutId = setTimeout(() => {
      if (this._pointerTracker.activeElement && timeoutId === this._timeoutId) {
        doToggle();
      }
      this._timeoutId = null;
    }, CLOSE_DELAY);
    this._timeoutId = timeoutId;
  }
  _isMovingToSubmenu() {
    const submenuPoints = this._getSubmenuBounds();
    if (!submenuPoints) {
      return false;
    }
    let numMoving = 0;
    const currPoint = this._points[this._points.length - 1];
    for (let i = this._points.length - 2; i >= 0; i--) {
      const previous = this._points[i];
      const slope = getSlope(currPoint, previous);
      if (isWithinSubmenu(submenuPoints, slope, getYIntercept(currPoint, slope))) {
        numMoving++;
      }
    }
    return numMoving >= Math.floor(NUM_POINTS / 2);
  }
  _getSubmenuBounds() {
    return this._pointerTracker?.previousElement?.getMenu()?.nativeElement.getBoundingClientRect();
  }
  _checkConfigured() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._pointerTracker) {
        throwMissingPointerFocusTracker();
      }
      if (!this._menu) {
        throwMissingMenuReference();
      }
    }
  }
  _subscribeToMouseMoves() {
    this._cleanupMousemove?.();
    this._cleanupMousemove = this._ngZone.runOutsideAngular(() => {
      let eventIndex = 0;
      return this._renderer.listen(this._menu.nativeElement, "mousemove", (event) => {
        if (eventIndex % MOUSE_MOVE_SAMPLE_FREQUENCY === 0) {
          this._points.push({
            x: event.clientX,
            y: event.clientY
          });
          if (this._points.length > NUM_POINTS) {
            this._points.shift();
          }
        }
        eventIndex++;
      });
    });
  }
  static \u0275fac = function TargetMenuAim_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TargetMenuAim)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TargetMenuAim,
    factory: _TargetMenuAim.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TargetMenuAim, [{
    type: Injectable
  }], null, null);
})();
var CdkTargetMenuAim = class _CdkTargetMenuAim {
  static \u0275fac = function CdkTargetMenuAim_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTargetMenuAim)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTargetMenuAim,
    selectors: [["", "cdkTargetMenuAim", ""]],
    exportAs: ["cdkTargetMenuAim"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MENU_AIM,
      useClass: TargetMenuAim
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTargetMenuAim, [{
    type: Directive,
    args: [{
      selector: "[cdkTargetMenuAim]",
      exportAs: "cdkTargetMenuAim",
      providers: [{
        provide: MENU_AIM,
        useClass: TargetMenuAim
      }]
    }]
  }], null, null);
})();
function eventDispatchesNativeClick(elementRef, event) {
  if (!event.isTrusted) {
    return false;
  }
  const el = elementRef.nativeElement;
  const keyCode = event.keyCode;
  if (el.nodeName === "BUTTON" && !el.disabled) {
    return keyCode === ENTER || keyCode === SPACE;
  }
  if (el.nodeName === "A") {
    return keyCode === ENTER;
  }
  return false;
}
var CdkMenuTrigger = class _CdkMenuTrigger extends CdkMenuTriggerBase {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _inputModalityDetector = inject(InputModalityDetector);
  _directionality = inject(Directionality, {
    optional: true
  });
  _renderer = inject(Renderer2);
  _injector = inject(Injector);
  _cleanupMouseenter;
  _menuTracker = inject(MenuTracker);
  _parentMenu = inject(CDK_MENU, {
    optional: true
  });
  _menuAim = inject(MENU_AIM, {
    optional: true
  });
  constructor() {
    super();
    this._setRole();
    this._registerCloseHandler();
    this._subscribeToMenuStackClosed();
    this._subscribeToMouseEnter();
    this._subscribeToMenuStackHasFocus();
    this._setType();
  }
  toggle() {
    this.isOpen() ? this.close() : this.open();
  }
  open() {
    if (!this._parentMenu) {
      this._menuTracker.update(this);
    }
    if (!this.isOpen() && this.menuTemplateRef != null) {
      this.opened.next();
      this.overlayRef = this.overlayRef || createOverlayRef(this._injector, this._getOverlayConfig());
      this.overlayRef.attach(this.getMenuContentPortal());
      this._changeDetectorRef.markForCheck();
      this._subscribeToOutsideClicks();
    }
  }
  close() {
    if (this.isOpen()) {
      this.closed.next();
      this.overlayRef.detach();
      this._changeDetectorRef.markForCheck();
    }
    this._closeSiblingTriggers();
  }
  getMenu() {
    return this.childMenu;
  }
  ngOnChanges(changes) {
    if (changes["menuPosition"] && this.overlayRef) {
      this.overlayRef.updatePositionStrategy(this._getOverlayPositionStrategy());
    }
  }
  ngOnDestroy() {
    this._cleanupMouseenter();
    super.ngOnDestroy();
  }
  _toggleOnKeydown(event) {
    const isParentVertical = this._parentMenu?.orientation === "vertical";
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event) && !eventDispatchesNativeClick(this._elementRef, event)) {
          this.toggle();
          this.childMenu?.focusFirstItem("keyboard");
        }
        break;
      case RIGHT_ARROW:
        if (!hasModifierKey(event)) {
          if (this._parentMenu && isParentVertical && this._directionality?.value !== "rtl") {
            event.preventDefault();
            this.open();
            this.childMenu?.focusFirstItem("keyboard");
          }
        }
        break;
      case LEFT_ARROW:
        if (!hasModifierKey(event)) {
          if (this._parentMenu && isParentVertical && this._directionality?.value === "rtl") {
            event.preventDefault();
            this.open();
            this.childMenu?.focusFirstItem("keyboard");
          }
        }
        break;
      case DOWN_ARROW:
      case UP_ARROW:
        if (!hasModifierKey(event)) {
          if (!isParentVertical) {
            event.preventDefault();
            this.open();
            event.keyCode === DOWN_ARROW ? this.childMenu?.focusFirstItem("keyboard") : this.childMenu?.focusLastItem("keyboard");
          }
        }
        break;
    }
  }
  _handleClick() {
    this.toggle();
    this.childMenu?.focusFirstItem("mouse");
  }
  _setHasFocus(hasFocus) {
    if (!this._parentMenu) {
      this.menuStack.setHasFocus(hasFocus);
    }
  }
  _subscribeToMouseEnter() {
    this._cleanupMouseenter = this._ngZone.runOutsideAngular(() => {
      return this._renderer.listen(this._elementRef.nativeElement, "mouseenter", () => {
        if (this._inputModalityDetector.mostRecentModality !== "touch" && !this.menuStack.isEmpty() && !this.isOpen()) {
          const toggleMenus = () => this._ngZone.run(() => {
            this._closeSiblingTriggers();
            this.open();
          });
          if (this._menuAim) {
            this._menuAim.toggle(toggleMenus);
          } else {
            toggleMenus();
          }
        }
      });
    });
  }
  _closeSiblingTriggers() {
    if (this._parentMenu) {
      const isParentMenuBar = !this.menuStack.closeSubMenuOf(this._parentMenu) && this.menuStack.peek() !== this._parentMenu;
      if (isParentMenuBar) {
        this.menuStack.closeAll();
      }
    } else {
      this.menuStack.closeAll();
    }
  }
  _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPositionStrategy(),
      scrollStrategy: this.menuScrollStrategy(),
      direction: this._directionality || void 0
    });
  }
  _getOverlayPositionStrategy() {
    return createFlexibleConnectedPositionStrategy(this._injector, this._elementRef).withLockedPosition().withFlexibleDimensions(false).withPositions(this._getOverlayPositions());
  }
  _getOverlayPositions() {
    return this.menuPosition ?? (!this._parentMenu || this._parentMenu.orientation === "horizontal" ? STANDARD_DROPDOWN_BELOW_POSITIONS : STANDARD_DROPDOWN_ADJACENT_POSITIONS);
  }
  _registerCloseHandler() {
    if (!this._parentMenu) {
      this.menuStack.closed.pipe(takeUntil(this.destroyed)).subscribe(({
        item
      }) => {
        if (item === this.childMenu) {
          this.close();
        }
      });
    }
  }
  _subscribeToOutsideClicks() {
    if (this.overlayRef) {
      this.overlayRef.outsidePointerEvents().pipe(takeUntil(this.stopOutsideClicksListener)).subscribe((event) => {
        const target = _getEventTarget(event);
        const element = this._elementRef.nativeElement;
        if (target !== element && !element.contains(target)) {
          if (!this.isElementInsideMenuStack(target)) {
            this.menuStack.closeAll();
          } else {
            this._closeSiblingTriggers();
          }
        }
      });
    }
  }
  _subscribeToMenuStackHasFocus() {
    if (!this._parentMenu) {
      this.menuStack.hasFocus.pipe(takeUntil(this.destroyed)).subscribe((hasFocus) => {
        if (!hasFocus) {
          this.menuStack.closeAll();
        }
      });
    }
  }
  _subscribeToMenuStackClosed() {
    if (!this._parentMenu) {
      this.menuStack.closed.subscribe(({
        focusParentTrigger
      }) => {
        if (focusParentTrigger && !this.menuStack.length()) {
          this._elementRef.nativeElement.focus();
        }
      });
    }
  }
  _setRole() {
    if (!this._parentMenu) {
      this._elementRef.nativeElement.setAttribute("role", "button");
    }
  }
  _setType() {
    const element = this._elementRef.nativeElement;
    if (element.nodeName === "BUTTON" && !element.getAttribute("type")) {
      element.setAttribute("type", "button");
    }
  }
  static \u0275fac = function CdkMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenuTrigger,
    selectors: [["", "cdkMenuTriggerFor", ""]],
    hostAttrs: [1, "cdk-menu-trigger"],
    hostVars: 2,
    hostBindings: function CdkMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focusin", function CdkMenuTrigger_focusin_HostBindingHandler() {
          return ctx._setHasFocus(true);
        })("focusout", function CdkMenuTrigger_focusout_HostBindingHandler() {
          return ctx._setHasFocus(false);
        })("keydown", function CdkMenuTrigger_keydown_HostBindingHandler($event) {
          return ctx._toggleOnKeydown($event);
        })("click", function CdkMenuTrigger_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-haspopup", ctx.menuTemplateRef ? "menu" : null)("aria-expanded", ctx.menuTemplateRef == null ? null : ctx.isOpen());
      }
    },
    inputs: {
      menuTemplateRef: [0, "cdkMenuTriggerFor", "menuTemplateRef"],
      menuPosition: [0, "cdkMenuPosition", "menuPosition"],
      menuData: [0, "cdkMenuTriggerData", "menuData"]
    },
    outputs: {
      opened: "cdkMenuOpened",
      closed: "cdkMenuClosed"
    },
    exportAs: ["cdkMenuTriggerFor"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MENU_TRIGGER,
      useExisting: _CdkMenuTrigger
    }, PARENT_OR_NEW_MENU_STACK_PROVIDER]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[cdkMenuTriggerFor]",
      exportAs: "cdkMenuTriggerFor",
      host: {
        "class": "cdk-menu-trigger",
        "[attr.aria-haspopup]": 'menuTemplateRef ? "menu" : null',
        "[attr.aria-expanded]": "menuTemplateRef == null ? null : isOpen()",
        "(focusin)": "_setHasFocus(true)",
        "(focusout)": "_setHasFocus(false)",
        "(keydown)": "_toggleOnKeydown($event)",
        "(click)": "_handleClick()"
      },
      inputs: [{
        name: "menuTemplateRef",
        alias: "cdkMenuTriggerFor"
      }, {
        name: "menuPosition",
        alias: "cdkMenuPosition"
      }, {
        name: "menuData",
        alias: "cdkMenuTriggerData"
      }],
      outputs: ["opened: cdkMenuOpened", "closed: cdkMenuClosed"],
      providers: [{
        provide: MENU_TRIGGER,
        useExisting: CdkMenuTrigger
      }, PARENT_OR_NEW_MENU_STACK_PROVIDER]
    }]
  }], () => [], null);
})();
var CdkMenuItem = class _CdkMenuItem {
  _dir = inject(Directionality, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _inputModalityDetector = inject(InputModalityDetector);
  _renderer = inject(Renderer2);
  _cleanupMouseEnter;
  _menuAim = inject(MENU_AIM, {
    optional: true
  });
  _menuStack = inject(MENU_STACK);
  _parentMenu = inject(CDK_MENU, {
    optional: true
  });
  _menuTrigger = inject(CdkMenuTrigger, {
    optional: true,
    self: true
  });
  disabled = false;
  typeaheadLabel;
  triggered = new EventEmitter();
  get hasMenu() {
    return this._menuTrigger?.menuTemplateRef != null;
  }
  _tabindex = -1;
  closeOnSpacebarTrigger = true;
  destroyed = new Subject();
  constructor() {
    this._setupMouseEnter();
    this._setType();
    if (this._isStandaloneItem()) {
      this._tabindex = 0;
    }
  }
  ngOnDestroy() {
    this._cleanupMouseEnter?.();
    this.destroyed.next();
    this.destroyed.complete();
  }
  focus() {
    this._elementRef.nativeElement.focus();
  }
  trigger(options) {
    const {
      keepOpen
    } = __spreadValues({}, options);
    if (!this.disabled && !this.hasMenu) {
      this.triggered.next();
      if (!keepOpen) {
        this._menuStack.closeAll({
          focusParentTrigger: true
        });
      }
    }
  }
  isMenuOpen() {
    return !!this._menuTrigger?.isOpen();
  }
  getMenu() {
    return this._menuTrigger?.getMenu();
  }
  getMenuTrigger() {
    return this._menuTrigger;
  }
  getLabel() {
    return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
  }
  _resetTabIndex() {
    if (!this._isStandaloneItem()) {
      this._tabindex = -1;
    }
  }
  _setTabIndex(event) {
    if (this.disabled) {
      return;
    }
    if (!event || !this._menuStack.isEmpty()) {
      this._tabindex = 0;
    }
  }
  _handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.trigger();
    }
  }
  _onKeydown(event) {
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event) && !eventDispatchesNativeClick(this._elementRef, event)) {
          const nodeName = this._elementRef.nativeElement.nodeName;
          if (nodeName !== "A" && nodeName !== "BUTTON") {
            event.preventDefault();
          }
          this.trigger({
            keepOpen: event.keyCode === SPACE && !this.closeOnSpacebarTrigger
          });
        }
        break;
      case RIGHT_ARROW:
        if (!hasModifierKey(event)) {
          if (this._parentMenu && this._isParentVertical()) {
            if (this._dir?.value !== "rtl") {
              this._forwardArrowPressed(event);
            } else {
              this._backArrowPressed(event);
            }
          }
        }
        break;
      case LEFT_ARROW:
        if (!hasModifierKey(event)) {
          if (this._parentMenu && this._isParentVertical()) {
            if (this._dir?.value !== "rtl") {
              this._backArrowPressed(event);
            } else {
              this._forwardArrowPressed(event);
            }
          }
        }
        break;
    }
  }
  _isStandaloneItem() {
    return !this._parentMenu;
  }
  _backArrowPressed(event) {
    const parentMenu = this._parentMenu;
    if (this._menuStack.hasInlineMenu() || this._menuStack.length() > 1) {
      event.preventDefault();
      this._menuStack.close(parentMenu, {
        focusNextOnEmpty: this._menuStack.inlineMenuOrientation() === "horizontal" ? FocusNext.previousItem : FocusNext.currentItem,
        focusParentTrigger: true
      });
    }
  }
  _forwardArrowPressed(event) {
    if (!this.hasMenu && this._menuStack.inlineMenuOrientation() === "horizontal") {
      event.preventDefault();
      this._menuStack.closeAll({
        focusNextOnEmpty: FocusNext.nextItem,
        focusParentTrigger: true
      });
    }
  }
  _setupMouseEnter() {
    if (!this._isStandaloneItem()) {
      const closeOpenSiblings = () => this._ngZone.run(() => this._menuStack.closeSubMenuOf(this._parentMenu));
      this._cleanupMouseEnter = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, "mouseenter", () => {
        if (this._inputModalityDetector.mostRecentModality !== "touch" && !this._menuStack.isEmpty() && !this.hasMenu) {
          if (this._menuAim) {
            this._menuAim.toggle(closeOpenSiblings);
          } else {
            closeOpenSiblings();
          }
        }
      }));
    }
  }
  _isParentVertical() {
    return this._parentMenu?.orientation === "vertical";
  }
  _setType() {
    const element = this._elementRef.nativeElement;
    if (element.nodeName === "BUTTON" && !element.getAttribute("type")) {
      element.setAttribute("type", "button");
    }
  }
  static \u0275fac = function CdkMenuItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMenuItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenuItem,
    selectors: [["", "cdkMenuItem", ""]],
    hostAttrs: ["role", "menuitem", 1, "cdk-menu-item"],
    hostVars: 4,
    hostBindings: function CdkMenuItem_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("blur", function CdkMenuItem_blur_HostBindingHandler() {
          return ctx._resetTabIndex();
        })("focus", function CdkMenuItem_focus_HostBindingHandler() {
          return ctx._setTabIndex();
        })("click", function CdkMenuItem_click_HostBindingHandler($event) {
          return ctx._handleClick($event);
        })("keydown", function CdkMenuItem_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabIndex", ctx._tabindex);
        \u0275\u0275attribute("aria-disabled", ctx.disabled || null);
        \u0275\u0275classProp("cdk-menu-item-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: [2, "cdkMenuItemDisabled", "disabled", booleanAttribute],
      typeaheadLabel: [0, "cdkMenuitemTypeaheadLabel", "typeaheadLabel"]
    },
    outputs: {
      triggered: "cdkMenuItemTriggered"
    },
    exportAs: ["cdkMenuItem"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuItem, [{
    type: Directive,
    args: [{
      selector: "[cdkMenuItem]",
      exportAs: "cdkMenuItem",
      host: {
        "role": "menuitem",
        "class": "cdk-menu-item",
        "[class.cdk-menu-item-disabled]": "disabled",
        "[tabindex]": "_tabindex",
        "[attr.aria-disabled]": "disabled || null",
        "(blur)": "_resetTabIndex()",
        "(focus)": "_setTabIndex()",
        "(click)": "_handleClick($event)",
        "(keydown)": "_onKeydown($event)"
      }
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkMenuItemDisabled",
        transform: booleanAttribute
      }]
    }],
    typeaheadLabel: [{
      type: Input,
      args: ["cdkMenuitemTypeaheadLabel"]
    }],
    triggered: [{
      type: Output,
      args: ["cdkMenuItemTriggered"]
    }]
  });
})();
var PointerFocusTracker = class {
  _renderer;
  _items;
  _eventCleanups;
  _itemsSubscription;
  entered = new Subject();
  exited = new Subject();
  activeElement;
  previousElement;
  constructor(_renderer, _items) {
    this._renderer = _renderer;
    this._items = _items;
    this._bindEvents();
    this.entered.subscribe((element) => this.activeElement = element);
    this.exited.subscribe(() => {
      this.previousElement = this.activeElement;
      this.activeElement = void 0;
    });
  }
  destroy() {
    this._cleanupEvents();
    this._itemsSubscription?.unsubscribe();
  }
  _bindEvents() {
    this._itemsSubscription = this._items.changes.pipe(startWith(this._items)).subscribe(() => {
      this._cleanupEvents();
      this._eventCleanups = [];
      this._items.forEach((item) => {
        const element = item._elementRef.nativeElement;
        this._eventCleanups.push(this._renderer.listen(element, "mouseenter", () => {
          this.entered.next(item);
        }), this._renderer.listen(element, "mouseout", () => {
          this.exited.next(item);
        }));
      });
    });
  }
  _cleanupEvents() {
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._eventCleanups = void 0;
  }
};
var CdkMenuBase = class _CdkMenuBase extends CdkMenuGroup {
  _focusMonitor = inject(FocusMonitor);
  ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  nativeElement = inject(ElementRef).nativeElement;
  menuStack = inject(MENU_STACK);
  menuAim = inject(MENU_AIM, {
    optional: true,
    self: true
  });
  dir = inject(Directionality, {
    optional: true
  });
  _allItems;
  id = inject(_IdGenerator).getId("cdk-menu-");
  items = new QueryList();
  orientation = "vertical";
  isInline = false;
  keyManager;
  destroyed = new Subject();
  triggerItem;
  pointerTracker;
  _menuStackHasFocus = signal(false, ...ngDevMode ? [{
    debugName: "_menuStackHasFocus"
  }] : []);
  _tabIndexSignal = computed(() => {
    const tabindexIfInline = this._menuStackHasFocus() ? -1 : 0;
    return this.isInline ? tabindexIfInline : null;
  }, ...ngDevMode ? [{
    debugName: "_tabIndexSignal"
  }] : []);
  ngAfterContentInit() {
    if (!this.isInline) {
      this.menuStack.push(this);
    }
    this._setItems();
    this._setKeyManager();
    this._handleFocus();
    this._subscribeToMenuStackHasFocus();
    this._subscribeToMenuOpen();
    this._subscribeToMenuStackClosed();
    this._setUpPointerTracker();
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this.nativeElement);
    this.keyManager?.destroy();
    this.destroyed.next();
    this.destroyed.complete();
    this.pointerTracker?.destroy();
  }
  focusFirstItem(focusOrigin = "program") {
    this.keyManager.setFocusOrigin(focusOrigin);
    this.keyManager.setFirstItemActive();
  }
  focusLastItem(focusOrigin = "program") {
    this.keyManager.setFocusOrigin(focusOrigin);
    this.keyManager.setLastItemActive();
  }
  setActiveMenuItem(item) {
    this.keyManager?.setActiveItem(item);
  }
  _getTabIndex() {
    return this._tabIndexSignal();
  }
  closeOpenMenu(menu, options) {
    const {
      focusParentTrigger
    } = __spreadValues({}, options);
    const keyManager = this.keyManager;
    const trigger = this.triggerItem;
    if (menu === trigger?.getMenuTrigger()?.getMenu()) {
      trigger?.getMenuTrigger()?.close();
      if (focusParentTrigger) {
        if (trigger) {
          keyManager.setActiveItem(trigger);
        } else {
          keyManager.setFirstItemActive();
        }
      }
    }
  }
  _setItems() {
    this._allItems.changes.pipe(startWith(this._allItems), takeUntil(this.destroyed)).subscribe((items) => {
      this.items.reset(items.filter((item) => item._parentMenu === this));
      this.items.notifyOnChanges();
    });
  }
  _setKeyManager() {
    this.keyManager = new FocusKeyManager(this.items).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(() => false);
    if (this.orientation === "horizontal") {
      this.keyManager.withHorizontalOrientation(this.dir?.value || "ltr");
    } else {
      this.keyManager.withVerticalOrientation();
    }
  }
  _subscribeToMenuOpen() {
    const exitCondition = merge(this.items.changes, this.destroyed);
    this.items.changes.pipe(startWith(this.items), mergeMap((list) => list.filter((item) => item.hasMenu).map((item) => item.getMenuTrigger().opened.pipe(mapTo(item), takeUntil(exitCondition)))), mergeAll(), switchMap((item) => {
      this.triggerItem = item;
      return item.getMenuTrigger().closed;
    }), takeUntil(this.destroyed)).subscribe(() => this.triggerItem = void 0);
  }
  _subscribeToMenuStackClosed() {
    this.menuStack.closed.pipe(takeUntil(this.destroyed)).subscribe(({
      item,
      focusParentTrigger
    }) => this.closeOpenMenu(item, {
      focusParentTrigger
    }));
  }
  _subscribeToMenuStackHasFocus() {
    if (this.isInline) {
      this.menuStack.hasFocus.pipe(takeUntil(this.destroyed)).subscribe((hasFocus) => {
        this._menuStackHasFocus.set(hasFocus);
      });
    }
  }
  _setUpPointerTracker() {
    if (this.menuAim) {
      this.ngZone.runOutsideAngular(() => {
        this.pointerTracker = new PointerFocusTracker(this._renderer, this.items);
      });
      this.menuAim.initialize(this, this.pointerTracker);
    }
  }
  _handleFocus() {
    this._focusMonitor.monitor(this.nativeElement, false).pipe(takeUntil(this.destroyed)).subscribe((origin) => {
      if (origin !== null && origin !== "mouse") {
        this.focusFirstItem(origin);
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkMenuBase_BaseFactory;
    return function CdkMenuBase_Factory(__ngFactoryType__) {
      return (\u0275CdkMenuBase_BaseFactory || (\u0275CdkMenuBase_BaseFactory = \u0275\u0275getInheritedFactory(_CdkMenuBase)))(__ngFactoryType__ || _CdkMenuBase);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenuBase,
    contentQueries: function CdkMenuBase_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkMenuItem, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allItems = _t);
      }
    },
    hostAttrs: ["role", "menu"],
    hostVars: 4,
    hostBindings: function CdkMenuBase_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focusin", function CdkMenuBase_focusin_HostBindingHandler() {
          return ctx.menuStack.setHasFocus(true);
        })("focusout", function CdkMenuBase_focusout_HostBindingHandler() {
          return ctx.menuStack.setHasFocus(false);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabIndex", ctx._getTabIndex())("id", ctx.id);
        \u0275\u0275attribute("aria-orientation", ctx.orientation)("data-cdk-menu-stack-id", ctx.menuStack.id);
      }
    },
    inputs: {
      id: "id"
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuBase, [{
    type: Directive,
    args: [{
      host: {
        "role": "menu",
        "class": "",
        "[tabindex]": "_getTabIndex()",
        "[id]": "id",
        "[attr.aria-orientation]": "orientation",
        "[attr.data-cdk-menu-stack-id]": "menuStack.id",
        "(focusin)": "menuStack.setHasFocus(true)",
        "(focusout)": "menuStack.setHasFocus(false)"
      }
    }]
  }], null, {
    _allItems: [{
      type: ContentChildren,
      args: [CdkMenuItem, {
        descendants: true
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var CdkMenu = class _CdkMenu extends CdkMenuBase {
  _parentTrigger = inject(MENU_TRIGGER, {
    optional: true
  });
  closed = new EventEmitter();
  orientation = "vertical";
  isInline = !this._parentTrigger;
  constructor() {
    super();
    this.destroyed.subscribe(this.closed);
    this._parentTrigger?.registerChildMenu(this);
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
    this._subscribeToMenuStackEmptied();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.closed.complete();
  }
  _handleKeyEvent(event) {
    const keyManager = this.keyManager;
    switch (event.keyCode) {
      case LEFT_ARROW:
      case RIGHT_ARROW:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          keyManager.setFocusOrigin("keyboard");
          keyManager.onKeydown(event);
        }
        break;
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.menuStack.close(this, {
            focusNextOnEmpty: FocusNext.currentItem,
            focusParentTrigger: true
          });
        }
        break;
      case TAB:
        if (!hasModifierKey(event, "altKey", "metaKey", "ctrlKey")) {
          this.menuStack.closeAll({
            focusParentTrigger: true
          });
        }
        break;
      default:
        keyManager.onKeydown(event);
    }
  }
  _toggleMenuFocus(focusNext) {
    const keyManager = this.keyManager;
    switch (focusNext) {
      case FocusNext.nextItem:
        keyManager.setFocusOrigin("keyboard");
        keyManager.setNextItemActive();
        break;
      case FocusNext.previousItem:
        keyManager.setFocusOrigin("keyboard");
        keyManager.setPreviousItemActive();
        break;
      case FocusNext.currentItem:
        if (keyManager.activeItem) {
          keyManager.setFocusOrigin("keyboard");
          keyManager.setActiveItem(keyManager.activeItem);
        }
        break;
    }
  }
  _subscribeToMenuStackEmptied() {
    this.menuStack.emptied.pipe(takeUntil(this.destroyed)).subscribe((event) => this._toggleMenuFocus(event));
  }
  static \u0275fac = function CdkMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMenu)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenu,
    selectors: [["", "cdkMenu", ""]],
    hostAttrs: ["role", "menu", 1, "cdk-menu"],
    hostVars: 2,
    hostBindings: function CdkMenu_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function CdkMenu_keydown_HostBindingHandler($event) {
          return ctx._handleKeyEvent($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("cdk-menu-inline", ctx.isInline);
      }
    },
    outputs: {
      closed: "closed"
    },
    exportAs: ["cdkMenu"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkMenuGroup,
      useExisting: _CdkMenu
    }, {
      provide: CDK_MENU,
      useExisting: _CdkMenu
    }, PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER("vertical")]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenu, [{
    type: Directive,
    args: [{
      selector: "[cdkMenu]",
      exportAs: "cdkMenu",
      host: {
        "role": "menu",
        "class": "cdk-menu",
        "[class.cdk-menu-inline]": "isInline",
        "(keydown)": "_handleKeyEvent($event)"
      },
      providers: [{
        provide: CdkMenuGroup,
        useExisting: CdkMenu
      }, {
        provide: CDK_MENU,
        useExisting: CdkMenu
      }, PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER("vertical")]
    }]
  }], () => [], {
    closed: [{
      type: Output
    }]
  });
})();
var CdkMenuBar = class _CdkMenuBar extends CdkMenuBase {
  orientation = "horizontal";
  isInline = true;
  ngAfterContentInit() {
    super.ngAfterContentInit();
    this._subscribeToMenuStackEmptied();
  }
  _handleKeyEvent(event) {
    const keyManager = this.keyManager;
    switch (event.keyCode) {
      case UP_ARROW:
      case DOWN_ARROW:
      case LEFT_ARROW:
      case RIGHT_ARROW:
        if (!hasModifierKey(event)) {
          const horizontalArrows = event.keyCode === LEFT_ARROW || event.keyCode === RIGHT_ARROW;
          if (horizontalArrows) {
            event.preventDefault();
            const prevIsOpen = keyManager.activeItem?.isMenuOpen();
            keyManager.activeItem?.getMenuTrigger()?.close();
            keyManager.setFocusOrigin("keyboard");
            keyManager.onKeydown(event);
            if (prevIsOpen) {
              keyManager.activeItem?.getMenuTrigger()?.open();
            }
          }
        }
        break;
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          keyManager.activeItem?.getMenuTrigger()?.close();
        }
        break;
      case TAB:
        if (!hasModifierKey(event, "altKey", "metaKey", "ctrlKey")) {
          keyManager.activeItem?.getMenuTrigger()?.close();
        }
        break;
      default:
        keyManager.onKeydown(event);
    }
  }
  _toggleOpenMenu(focusNext) {
    const keyManager = this.keyManager;
    switch (focusNext) {
      case FocusNext.nextItem:
        keyManager.setFocusOrigin("keyboard");
        keyManager.setNextItemActive();
        keyManager.activeItem?.getMenuTrigger()?.open();
        break;
      case FocusNext.previousItem:
        keyManager.setFocusOrigin("keyboard");
        keyManager.setPreviousItemActive();
        keyManager.activeItem?.getMenuTrigger()?.open();
        break;
      case FocusNext.currentItem:
        if (keyManager.activeItem) {
          keyManager.setFocusOrigin("keyboard");
          keyManager.setActiveItem(keyManager.activeItem);
        }
        break;
    }
  }
  _subscribeToMenuStackEmptied() {
    this.menuStack?.emptied.pipe(takeUntil(this.destroyed)).subscribe((event) => this._toggleOpenMenu(event));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkMenuBar_BaseFactory;
    return function CdkMenuBar_Factory(__ngFactoryType__) {
      return (\u0275CdkMenuBar_BaseFactory || (\u0275CdkMenuBar_BaseFactory = \u0275\u0275getInheritedFactory(_CdkMenuBar)))(__ngFactoryType__ || _CdkMenuBar);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenuBar,
    selectors: [["", "cdkMenuBar", ""]],
    hostAttrs: ["role", "menubar", 1, "cdk-menu-bar"],
    hostBindings: function CdkMenuBar_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function CdkMenuBar_keydown_HostBindingHandler($event) {
          return ctx._handleKeyEvent($event);
        });
      }
    },
    exportAs: ["cdkMenuBar"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkMenuGroup,
      useExisting: _CdkMenuBar
    }, {
      provide: CDK_MENU,
      useExisting: _CdkMenuBar
    }, {
      provide: MENU_STACK,
      useFactory: () => MenuStack.inline("horizontal")
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuBar, [{
    type: Directive,
    args: [{
      selector: "[cdkMenuBar]",
      exportAs: "cdkMenuBar",
      host: {
        "role": "menubar",
        "class": "cdk-menu-bar",
        "(keydown)": "_handleKeyEvent($event)"
      },
      providers: [{
        provide: CdkMenuGroup,
        useExisting: CdkMenuBar
      }, {
        provide: CDK_MENU,
        useExisting: CdkMenuBar
      }, {
        provide: MENU_STACK,
        useFactory: () => MenuStack.inline("horizontal")
      }]
    }]
  }], null, null);
})();
var CdkMenuItemSelectable = class _CdkMenuItemSelectable extends CdkMenuItem {
  checked = false;
  closeOnSpacebarTrigger = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkMenuItemSelectable_BaseFactory;
    return function CdkMenuItemSelectable_Factory(__ngFactoryType__) {
      return (\u0275CdkMenuItemSelectable_BaseFactory || (\u0275CdkMenuItemSelectable_BaseFactory = \u0275\u0275getInheritedFactory(_CdkMenuItemSelectable)))(__ngFactoryType__ || _CdkMenuItemSelectable);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenuItemSelectable,
    hostVars: 2,
    hostBindings: function CdkMenuItemSelectable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-checked", !!ctx.checked)("aria-disabled", ctx.disabled || null);
      }
    },
    inputs: {
      checked: [2, "cdkMenuItemChecked", "checked", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuItemSelectable, [{
    type: Directive,
    args: [{
      host: {
        "[attr.aria-checked]": "!!checked",
        "[attr.aria-disabled]": "disabled || null"
      }
    }]
  }], null, {
    checked: [{
      type: Input,
      args: [{
        alias: "cdkMenuItemChecked",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkMenuItemRadio = class _CdkMenuItemRadio extends CdkMenuItemSelectable {
  _selectionDispatcher = inject(UniqueSelectionDispatcher);
  _id = inject(_IdGenerator).getId("cdk-menu-item-radio-");
  _removeDispatcherListener;
  constructor() {
    super();
    this._registerDispatcherListener();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._removeDispatcherListener();
  }
  trigger(options) {
    super.trigger(options);
    if (!this.disabled) {
      this._selectionDispatcher.notify(this._id, "");
    }
  }
  _registerDispatcherListener() {
    this._removeDispatcherListener = this._selectionDispatcher.listen((id) => {
      this.checked = this._id === id;
    });
  }
  static \u0275fac = function CdkMenuItemRadio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMenuItemRadio)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenuItemRadio,
    selectors: [["", "cdkMenuItemRadio", ""]],
    hostAttrs: ["role", "menuitemradio"],
    hostVars: 2,
    hostBindings: function CdkMenuItemRadio_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-menu-item-radio", true);
      }
    },
    exportAs: ["cdkMenuItemRadio"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkMenuItemSelectable,
      useExisting: _CdkMenuItemRadio
    }, {
      provide: CdkMenuItem,
      useExisting: CdkMenuItemSelectable
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuItemRadio, [{
    type: Directive,
    args: [{
      selector: "[cdkMenuItemRadio]",
      exportAs: "cdkMenuItemRadio",
      host: {
        "role": "menuitemradio",
        "[class.cdk-menu-item-radio]": "true"
      },
      providers: [{
        provide: CdkMenuItemSelectable,
        useExisting: CdkMenuItemRadio
      }, {
        provide: CdkMenuItem,
        useExisting: CdkMenuItemSelectable
      }]
    }]
  }], () => [], null);
})();
var CdkMenuItemCheckbox = class _CdkMenuItemCheckbox extends CdkMenuItemSelectable {
  trigger(options) {
    super.trigger(options);
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkMenuItemCheckbox_BaseFactory;
    return function CdkMenuItemCheckbox_Factory(__ngFactoryType__) {
      return (\u0275CdkMenuItemCheckbox_BaseFactory || (\u0275CdkMenuItemCheckbox_BaseFactory = \u0275\u0275getInheritedFactory(_CdkMenuItemCheckbox)))(__ngFactoryType__ || _CdkMenuItemCheckbox);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkMenuItemCheckbox,
    selectors: [["", "cdkMenuItemCheckbox", ""]],
    hostAttrs: ["role", "menuitemcheckbox"],
    hostVars: 2,
    hostBindings: function CdkMenuItemCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-menu-item-checkbox", true);
      }
    },
    exportAs: ["cdkMenuItemCheckbox"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkMenuItemSelectable,
      useExisting: _CdkMenuItemCheckbox
    }, {
      provide: CdkMenuItem,
      useExisting: CdkMenuItemSelectable
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuItemCheckbox, [{
    type: Directive,
    args: [{
      selector: "[cdkMenuItemCheckbox]",
      exportAs: "cdkMenuItemCheckbox",
      host: {
        "role": "menuitemcheckbox",
        "[class.cdk-menu-item-checkbox]": "true"
      },
      providers: [{
        provide: CdkMenuItemSelectable,
        useExisting: CdkMenuItemCheckbox
      }, {
        provide: CdkMenuItem,
        useExisting: CdkMenuItemSelectable
      }]
    }]
  }], null, null);
})();
var CONTEXT_MENU_POSITIONS = STANDARD_DROPDOWN_BELOW_POSITIONS.map((position) => {
  const offsetX = position.overlayX === "start" ? 2 : -2;
  const offsetY = position.overlayY === "top" ? 2 : -2;
  return __spreadProps(__spreadValues({}, position), {
    offsetX,
    offsetY
  });
});
var CdkContextMenuTrigger = class _CdkContextMenuTrigger extends CdkMenuTriggerBase {
  _injector = inject(Injector);
  _directionality = inject(Directionality, {
    optional: true
  });
  _menuTracker = inject(MenuTracker);
  _changeDetectorRef = inject(ChangeDetectorRef);
  disabled = false;
  constructor() {
    super();
    this._setMenuStackCloseListener();
  }
  open(coordinates) {
    this._open(null, coordinates);
    this._changeDetectorRef.markForCheck();
  }
  close() {
    this.menuStack.closeAll();
  }
  _openOnContextMenu(event) {
    if (!this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      this._menuTracker.update(this);
      this._open(event, {
        x: event.clientX,
        y: event.clientY
      });
      if (event.button === 2) {
        this.childMenu?.focusFirstItem("mouse");
      } else if (event.button === 0) {
        this.childMenu?.focusFirstItem("keyboard");
      } else {
        this.childMenu?.focusFirstItem("program");
      }
    }
  }
  _getOverlayConfig(coordinates) {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPositionStrategy(coordinates),
      scrollStrategy: this.menuScrollStrategy(),
      direction: this._directionality || void 0
    });
  }
  _getOverlayPositionStrategy(coordinates) {
    return createFlexibleConnectedPositionStrategy(this._injector, coordinates).withLockedPosition().withGrowAfterOpen().withPositions(this.menuPosition ?? CONTEXT_MENU_POSITIONS);
  }
  _setMenuStackCloseListener() {
    this.menuStack.closed.pipe(takeUntil(this.destroyed)).subscribe(({
      item
    }) => {
      if (item === this.childMenu && this.isOpen()) {
        this.closed.next();
        this.overlayRef.detach();
        this.childMenu = void 0;
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  _subscribeToOutsideClicks(userEvent) {
    if (this.overlayRef) {
      let outsideClicks = this.overlayRef.outsidePointerEvents();
      if (userEvent) {
        const [auxClicks, nonAuxClicks] = partition(outsideClicks, ({
          type
        }) => type === "auxclick");
        outsideClicks = merge(nonAuxClicks.pipe(skipWhile((event, index) => userEvent.ctrlKey && index === 0 && event.ctrlKey)), auxClicks.pipe(skip(1)));
      }
      outsideClicks.pipe(takeUntil(this.stopOutsideClicksListener)).subscribe((event) => {
        if (!this.isElementInsideMenuStack(_getEventTarget(event))) {
          this.menuStack.closeAll();
        }
      });
    }
  }
  _open(userEvent, coordinates) {
    if (this.disabled) {
      return;
    }
    if (this.isOpen()) {
      this.menuStack.closeSubMenuOf(this.childMenu);
      this.overlayRef.getConfig().positionStrategy.setOrigin(coordinates);
      this.overlayRef.updatePosition();
    } else {
      this.opened.next();
      if (this.overlayRef) {
        this.overlayRef.getConfig().positionStrategy.setOrigin(coordinates);
        this.overlayRef.updatePosition();
      } else {
        this.overlayRef = createOverlayRef(this._injector, this._getOverlayConfig(coordinates));
      }
      this.overlayRef.attach(this.getMenuContentPortal());
      this._subscribeToOutsideClicks(userEvent);
    }
  }
  static \u0275fac = function CdkContextMenuTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkContextMenuTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkContextMenuTrigger,
    selectors: [["", "cdkContextMenuTriggerFor", ""]],
    hostVars: 1,
    hostBindings: function CdkContextMenuTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function CdkContextMenuTrigger_contextmenu_HostBindingHandler($event) {
          return ctx._openOnContextMenu($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-cdk-menu-stack-id", null);
      }
    },
    inputs: {
      menuTemplateRef: [0, "cdkContextMenuTriggerFor", "menuTemplateRef"],
      menuPosition: [0, "cdkContextMenuPosition", "menuPosition"],
      menuData: [0, "cdkContextMenuTriggerData", "menuData"],
      disabled: [2, "cdkContextMenuDisabled", "disabled", booleanAttribute]
    },
    outputs: {
      opened: "cdkContextMenuOpened",
      closed: "cdkContextMenuClosed"
    },
    exportAs: ["cdkContextMenuTriggerFor"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MENU_TRIGGER,
      useExisting: _CdkContextMenuTrigger
    }, {
      provide: MENU_STACK,
      useClass: MenuStack
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkContextMenuTrigger, [{
    type: Directive,
    args: [{
      selector: "[cdkContextMenuTriggerFor]",
      exportAs: "cdkContextMenuTriggerFor",
      host: {
        "[attr.data-cdk-menu-stack-id]": "null",
        "(contextmenu)": "_openOnContextMenu($event)"
      },
      inputs: [{
        name: "menuTemplateRef",
        alias: "cdkContextMenuTriggerFor"
      }, {
        name: "menuPosition",
        alias: "cdkContextMenuPosition"
      }, {
        name: "menuData",
        alias: "cdkContextMenuTriggerData"
      }],
      outputs: ["opened: cdkContextMenuOpened", "closed: cdkContextMenuClosed"],
      providers: [{
        provide: MENU_TRIGGER,
        useExisting: CdkContextMenuTrigger
      }, {
        provide: MENU_STACK,
        useClass: MenuStack
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkContextMenuDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MENU_DIRECTIVES = [CdkMenuBar, CdkMenu, CdkMenuItem, CdkMenuItemRadio, CdkMenuItemCheckbox, CdkMenuTrigger, CdkMenuGroup, CdkContextMenuTrigger, CdkTargetMenuAim];
var CdkMenuModule = class _CdkMenuModule {
  static \u0275fac = function CdkMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkMenuModule,
    imports: [OverlayModule, CdkMenuBar, CdkMenu, CdkMenuItem, CdkMenuItemRadio, CdkMenuItemCheckbox, CdkMenuTrigger, CdkMenuGroup, CdkContextMenuTrigger, CdkTargetMenuAim],
    exports: [CdkMenuBar, CdkMenu, CdkMenuItem, CdkMenuItemRadio, CdkMenuItemCheckbox, CdkMenuTrigger, CdkMenuGroup, CdkContextMenuTrigger, CdkTargetMenuAim]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [OverlayModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMenuModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, ...MENU_DIRECTIVES],
      exports: MENU_DIRECTIVES
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/context-menu/context-menu-item.directive.ts
var ContextMenuItemDirective = class _ContextMenuItemDirective {
  static \u0275fac = function ContextMenuItemDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuItemDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ContextMenuItemDirective, selectors: [["", "appContextMenuItem", ""]], hostAttrs: [1, "w-full", "text-left", "p-2.5", "hover:bg-accent", "hover:text-accent-foreground", "focus-visible:bg-accent", "focus-visible:text-accent-foreground", "focus-visible:outline-hidden"], features: [\u0275\u0275HostDirectivesFeature([{ directive: CdkMenuItem, inputs: ["cdkMenuItemDisabled", "disabled"] }])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuItemDirective, [{
    type: Directive,
    args: [{
      selector: "[appContextMenuItem]",
      hostDirectives: [
        {
          directive: CdkMenuItem,
          inputs: ["cdkMenuItemDisabled:disabled"]
        }
      ],
      host: {
        class: "w-full text-left p-2.5 hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:outline-hidden"
      }
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/context-menu/context-menu-trigger.directive.ts
var ContextMenuTriggerDirective = class _ContextMenuTriggerDirective {
  static \u0275fac = function ContextMenuTriggerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuTriggerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ContextMenuTriggerDirective, selectors: [["", "appContextMenuTrigger", ""]], exportAs: ["appContextMenuTrigger"], features: [\u0275\u0275HostDirectivesFeature([{ directive: CdkContextMenuTrigger, inputs: ["cdkContextMenuTriggerFor", "appContextMenuTrigger"] }])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuTriggerDirective, [{
    type: Directive,
    args: [{
      selector: "[appContextMenuTrigger]",
      exportAs: "appContextMenuTrigger",
      hostDirectives: [
        {
          directive: CdkContextMenuTrigger,
          inputs: ["cdkContextMenuTriggerFor:appContextMenuTrigger"]
        }
      ]
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/context-menu/context-menu.directive.ts
var ContextMenuDirective = class _ContextMenuDirective {
  animationBuilder = inject(AnimationBuilder);
  player;
  host = inject(ElementRef);
  animation = this.animationBuilder.build([
    style({ transform: "scale(0)", opacity: 0 }),
    animate("150ms", style({ opacity: 1, transform: "scale(1)" }))
  ]);
  constructor() {
    this.enter();
  }
  enter() {
    this.player = this.animation.create(this.host.nativeElement);
    this.player.play();
  }
  ngOnDestroy() {
    this.player.destroy();
  }
  static \u0275fac = function ContextMenuDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ContextMenuDirective, selectors: [["", "appContextMenu", ""]], hostAttrs: [1, "shadow-md", "bg-background", "rounded-md", "border", "border-border"], features: [\u0275\u0275HostDirectivesFeature([CdkMenu])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[appContextMenu]",
      hostDirectives: [CdkMenu],
      host: {
        class: "shadow-md bg-background rounded-md border border-border"
      }
    }]
  }], () => [], null);
})();

// projects/docs/src/app/examples/context-menu/show-case-context-menu/show-case-context-menu.component.ts
function ShowCaseContextMenuComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 4);
    \u0275\u0275listener("click", function ShowCaseContextMenuComponent_ng_template_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const content_r3 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx_r1.copy(content_r3.textContent));
    });
    \u0275\u0275text(2, "Copy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function ShowCaseContextMenuComponent_ng_template_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markRead());
    });
    \u0275\u0275text(4, "Mark as Red");
    \u0275\u0275elementEnd()();
  }
}
var ShowCaseContextMenuComponent = class _ShowCaseContextMenuComponent {
  toast = inject(ToastService);
  color = signal("inherit", ...ngDevMode ? [{ debugName: "color" }] : []);
  markRead() {
    this.color.set("red");
  }
  copy(text) {
    if (!text) {
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      this.toast.open({
        message: "Copied!",
        showCloseIcon: false,
        closeDelay: 1e3
      });
    });
  }
  static \u0275fac = function ShowCaseContextMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseContextMenuComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseContextMenuComponent, selectors: [["doc-show-case-context-menu"]], decls: 6, vars: 3, consts: [["content", ""], ["contextMenu", ""], [3, "appContextMenuTrigger"], ["appContextMenu", ""], ["appContextMenuItem", "", 3, "click"]], template: function ShowCaseContextMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "p", null, 0);
      \u0275\u0275text(3, "Right click to open context menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(4, ShowCaseContextMenuComponent_ng_template_4_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const contextMenu_r4 = \u0275\u0275reference(5);
      \u0275\u0275property("appContextMenuTrigger", contextMenu_r4);
      \u0275\u0275advance();
      \u0275\u0275styleProp("color", ctx.color());
    }
  }, dependencies: [
    ContextMenuDirective,
    ContextMenuTriggerDirective,
    ContextMenuItemDirective
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseContextMenuComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-context-menu", imports: [
      ContextMenuDirective,
      ContextMenuTriggerDirective,
      ContextMenuItemDirective
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div [appContextMenuTrigger]="contextMenu">\n  <p #content [style.color]="color()">Right click to open context menu</p>\n</div>\n\n<ng-template #contextMenu>\n  <div appContextMenu>\n    <button appContextMenuItem (click)="copy(content.textContent)">Copy</button>\n    <button appContextMenuItem (click)="markRead()">Mark as Red</button>\n  </div>\n</ng-template>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseContextMenuComponent, { className: "ShowCaseContextMenuComponent", filePath: "projects/docs/src/app/examples/context-menu/show-case-context-menu/show-case-context-menu.component.ts", lineNumber: 23 });
})();

// projects/docs/src/app/features/context-menu-page/context-menu-page.component.ts
var ROOT = "context-menu";
var ContextMenuPageComponent = class _ContextMenuPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.directive(ROOT, ROOT),
        ...this.sourceTreeBuilder.directive("context-menu-trigger", ROOT),
        ...this.sourceTreeBuilder.directive("context-menu-item", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    stylesInGlobal: true,
    entities: [
      {
        name: "ContextMenuTriggerDirective",
        type: "directive",
        selector: "[appContextMenuTrigger]",
        description: "This directive should be applied to the element that will open the context menu.",
        inputs: [
          {
            name: "appContextMenuTrigger",
            type: "ng-template",
            default: EMPTY_API_INPUT_DEFAULT_VALUE,
            description: "The template to use for the context menu."
          }
        ]
      },
      {
        name: "ContextMenuDirective",
        type: "directive",
        selector: "[appContextMenu]"
      },
      {
        name: "ContextMenuItemDirective",
        type: "directive",
        selector: "[appContextMenuItem]",
        inputs: [
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Disables the menu item"
          }
        ]
      }
    ]
  };
  static \u0275fac = function ContextMenuPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContextMenuPageComponent, selectors: [["doc-context-menu-page"]], decls: 11, vars: 3, consts: [["subTitle", "A context menus is a type of pop-up menu that doesn't have a traditional trigger element, instead it is triggered when a user right-clicks within some container element", 3, "label"], ["name", "context-menu"], ["type", "component", "name", "context-menu"], ["name", "context-menu", 3, "sourceTree"], [3, "apiInfo"], ["target", "_blank", "href", "https://material.angular.io/cdk/menu/overview#context-menus", 1, "underline"]], template: function ContextMenuPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-context-menu");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3);
      \u0275\u0275elementStart(5, "doc-api-info", 4)(6, "doc-api-description");
      \u0275\u0275text(7, " ContextMenu uses ");
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Angular/cdk/Menu");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " under the hood ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("label", "Context Menu");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseContextMenuComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    ApiDescriptionComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuPageComponent, [{
    type: Component,
    args: [{ selector: "doc-context-menu-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseContextMenuComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ApiDescriptionComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<doc-blueprint-page
  [label]="'Context Menu'"
  subTitle="A context menus is a type of pop-up menu that doesn't have a traditional trigger element, instead it is triggered when a user right-clicks within some container element"
>
  <doc-show-case name="context-menu">
    <doc-show-case-context-menu></doc-show-case-context-menu>
  </doc-show-case>
  <doc-command-installation type="component" name="context-menu">
  </doc-command-installation>
  <doc-source-tree
    [sourceTree]="sourceTree"
    name="context-menu"
  ></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo">
    <doc-api-description>
      ContextMenu uses
      <a
        target="_blank"
        class="underline"
        href="https://material.angular.io/cdk/menu/overview#context-menus"
        >Angular/cdk/Menu</a
      >
      under the hood
    </doc-api-description>
  </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContextMenuPageComponent, { className: "ContextMenuPageComponent", filePath: "projects/docs/src/app/features/context-menu-page/context-menu-page.component.ts", lineNumber: 34 });
})();
export {
  ContextMenuPageComponent
};
//# sourceMappingURL=chunk-EGLYXBCB.js.map
