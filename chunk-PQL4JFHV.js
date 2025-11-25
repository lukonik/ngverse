import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-3GLWUNBJ.js";
import {
  ActiveDescendantKeyManager
} from "./chunk-BC37M6ZP.js";
import {
  DomPortal,
  Overlay
} from "./chunk-XGFB36A5.js";
import {
  _IdGenerator
} from "./chunk-64HPILVO.js";
import {
  FileService,
  SourceCodeComponent
} from "./chunk-633NCXCE.js";
import {
  FontIconComponent
} from "./chunk-K3WRTE43.js";
import {
  NgTemplateOutlet
} from "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  Injector,
  Input,
  Observable,
  Output,
  ReplaySubject,
  RuntimeError,
  Subscription,
  TemplateRef,
  ViewChild,
  assertInInjectionContext,
  assertNotInReactiveContext,
  asyncScheduler,
  computed,
  contentChild,
  contentChildren,
  effect,
  filter,
  forwardRef,
  fromEvent,
  inject,
  input,
  map,
  merge,
  model,
  observeOn,
  output,
  setClassMetadata,
  signal,
  takeUntil,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-2NN34RDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VL5VAURS.js";

// projects/docs/src/app/blueprint/source-tree/source-tree-builder.ts
var SourceTreeBuilder = class _SourceTreeBuilder {
  sourceTree(root, folders) {
    return folders(root);
  }
  directive(name, root, includeSpec) {
    const tsFile = {
      name: `${name}.directive.ts`,
      path: `${root}/${name}.directive.ts`,
      language: "ts"
    };
    if (includeSpec) {
      return [
        tsFile,
        {
          name: `${name}.directive.spec.ts`,
          path: `${root}/${name}.directive.spec.ts`,
          language: "ts"
        }
      ];
    }
    return [tsFile];
  }
  file(name, rootPath, extension = "ts") {
    return {
      name: `${name}.${extension}`,
      path: `${rootPath}/${name}.${extension}`,
      language: extension
    };
  }
  componentFiles(name, rootPath, excludes) {
    const allFiles = [
      this.component(name, rootPath, "ts"),
      this.component(name, rootPath, "html"),
      this.component(name, rootPath, "css"),
      this.component(name, rootPath, "spec.ts")
    ];
    return allFiles.filter((file) => !excludes.includes(file.language));
  }
  component(name, rootPath, extension = "ts") {
    return {
      name: `${name}.component.${extension}`,
      path: `${rootPath}/${name}.component.${extension}`,
      language: extension
    };
  }
  fullComponent(name, rootPath) {
    return [
      this.component(name, rootPath, "ts"),
      this.component(name, rootPath, "html"),
      this.component(name, rootPath, "css"),
      this.component(name, rootPath, "spec.ts")
    ];
  }
  service(name, rootPath) {
    return [
      this.file(`${name}.service`, rootPath, "ts"),
      this.file(`${name}.service`, rootPath, "spec.ts")
    ];
  }
  fullInlineComponent(name, rootPath) {
    return [
      this.component(name, rootPath, "ts"),
      this.component(name, rootPath, "spec.ts")
    ];
  }
  inlineComponent(name, rootPath) {
    return [
      this.component(name, rootPath, "ts"),
      this.component(name, rootPath, "css"),
      this.component(name, rootPath, "spec.ts")
    ];
  }
  folder(name, root, files, hideName) {
    return {
      name,
      files: files(root),
      hideName
    };
  }
  static \u0275fac = function SourceTreeBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SourceTreeBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SourceTreeBuilder, factory: _SourceTreeBuilder.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SourceTreeBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/select/option-group-label.component.ts
var _c0 = ["*"];
var OptionGroupLabelComponent = class _OptionGroupLabelComponent {
  static \u0275fac = function OptionGroupLabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OptionGroupLabelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OptionGroupLabelComponent, selectors: [["app-option-group-label"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function OptionGroupLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionGroupLabelComponent, [{
    type: Component,
    args: [{
      selector: "app-option-group-label",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OptionGroupLabelComponent, { className: "OptionGroupLabelComponent", filePath: "projects/ngverse/src/lib/ui/select/option-group-label.component.ts", lineNumber: 8 });
})();

// projects/ngverse/src/lib/ui/select/option-group.component.ts
var _c02 = [[["app-option-group-label"]], [["app-option"]]];
var _c1 = ["app-option-group-label", "app-option"];
var OptionGroupComponent = class _OptionGroupComponent {
  label = input(...ngDevMode ? [void 0, { debugName: "label" }] : []);
  static \u0275fac = function OptionGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OptionGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OptionGroupComponent, selectors: [["app-option-group"]], hostAttrs: [1, "block"], inputs: { label: [1, "label"] }, ngContentSelectors: _c1, decls: 4, vars: 1, consts: [[1, "px-3", "py-2.5", "text-sm"]], template: function OptionGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275projection(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275projection(3, 1);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.label(), " ");
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionGroupComponent, [{
    type: Component,
    args: [{
      selector: "app-option-group",
      imports: [],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="px-3 py-2.5 text-sm">
      {{ label() }}
      <ng-content select="app-option-group-label"> </ng-content>
    </div>
    <ng-content select="app-option"></ng-content>
  `,
      host: {
        class: "block"
      }
    }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OptionGroupComponent, { className: "OptionGroupComponent", filePath: "projects/ngverse/src/lib/ui/select/option-group.component.ts", lineNumber: 18 });
})();

// projects/ngverse/src/lib/ui/select/option-content.directive.ts
var OptionContentDirective = class _OptionContentDirective {
  _element = inject(ElementRef).nativeElement;
  get content() {
    return this._element.textContent;
  }
  static \u0275fac = function OptionContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OptionContentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _OptionContentDirective, selectors: [["", "appOptionContent", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionContentDirective, [{
    type: Directive,
    args: [{
      selector: "[appOptionContent]"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/popover/popover-origin.directive.ts
var PopoverOriginDirective = class _PopoverOriginDirective {
  host = inject(ElementRef);
  get el() {
    return this.host.nativeElement;
  }
  static \u0275fac = function PopoverOriginDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopoverOriginDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PopoverOriginDirective, selectors: [["", "appPopoverOrigin", ""]], exportAs: ["appPopoverOrigin"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverOriginDirective, [{
    type: Directive,
    args: [{
      selector: "[appPopoverOrigin]",
      exportAs: "appPopoverOrigin"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/popover/popover.component.ts
var _c03 = ["popover"];
var _c12 = ["*"];
function PopoverComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.content());
  }
}
var PopoverComponent = class _PopoverComponent {
  isOpen = model(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  origin = input.required(...ngDevMode ? [{ debugName: "origin" }] : []);
  offsetX = input(...ngDevMode ? [void 0, { debugName: "offsetX" }] : []);
  offsetY = input(...ngDevMode ? [void 0, { debugName: "offsetY" }] : []);
  styled = input(false, ...ngDevMode ? [{ debugName: "styled" }] : []);
  hasBackdrop = input(false, ...ngDevMode ? [{ debugName: "hasBackdrop" }] : []);
  blockScroll = input(false, ...ngDevMode ? [{ debugName: "blockScroll" }] : []);
  outsideClose = input(false, ...ngDevMode ? [{ debugName: "outsideClose" }] : []);
  stretchToOrigin = input(false, ...ngDevMode ? [{ debugName: "stretchToOrigin" }] : []);
  restoreFocus = input(false, ...ngDevMode ? [{ debugName: "restoreFocus" }] : []);
  positionY = input("bottom", ...ngDevMode ? [{ debugName: "positionY" }] : []);
  opened = output();
  closed = output();
  content = contentChild.required(TemplateRef);
  overlay = inject(Overlay);
  popover = viewChild.required("popover");
  document = inject(DOCUMENT);
  overlayRef;
  globalSub;
  get isOpened() {
    return !!this.overlayRef;
  }
  constructor() {
    effect(() => {
      const isOpen = this.isOpen();
      if (isOpen) {
        this.show();
      } else {
        this.hide();
      }
    });
  }
  hide() {
    if (!this.isOpened) {
      return;
    }
    this.isOpen.set(false);
    this.dispose();
  }
  show() {
    if (this.isOpened) {
      return;
    }
    untracked(() => {
      const scrollStrategy = this.blockScroll() ? this.overlay.scrollStrategies.block() : this.overlay.scrollStrategies.reposition();
      const origin = this.origin();
      const connectingTo = origin.el;
      const position = this.positionY();
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position().flexibleConnectedTo(connectingTo).withPositions([this.getOverlayPosition(position)]).withLockedPosition(true),
        hasBackdrop: this.hasBackdrop(),
        scrollStrategy
      });
      this.overlayRef.attach(new DomPortal(this.popover()));
      this.tryStretch();
      this.listenToGlobalEvents();
      this.opened.emit();
    });
  }
  listenToGlobalEvents() {
    if (!this.isOpened) {
      return;
    }
    this.globalSub?.unsubscribe();
    this.globalSub = new Subscription();
    const overlayRef = this.overlayRef;
    if (this.outsideClose()) {
      const outsideClick$ = overlayRef.outsidePointerEvents().pipe(observeOn(asyncScheduler));
      const escapeEvent$ = overlayRef.keydownEvents().pipe(filter((event) => event.key === "Escape"));
      this.globalSub.add(merge(escapeEvent$, outsideClick$).subscribe(() => {
        this.hide();
      }));
    }
    this.globalSub.add(fromEvent(this.document, "scroll", {
      capture: true,
      passive: true
    }).subscribe((event) => {
      if (this.eventHappenedInsidePopover(event)) {
        return;
      }
      overlayRef.updatePosition();
    }));
  }
  eventHappenedInsidePopover(event) {
    const popoverEl = this.popover().nativeElement;
    const target = event.target;
    if (target) {
      if (target === popoverEl || popoverEl.contains(target)) {
        return true;
      }
    }
    return false;
  }
  tryStretch() {
    untracked(() => {
      const origin = this.origin();
      if (this.stretchToOrigin() && origin) {
        this.popover().nativeElement.style.width = origin.el.offsetWidth + "px";
      }
    });
  }
  dispose() {
    this.overlayRef?.dispose();
    this.overlayRef = void 0;
    this.closed.emit();
    if (this.restoreFocus()) {
      this.origin()?.el.focus();
    }
  }
  getOverlayPosition(position) {
    switch (position) {
      case "top":
        return {
          originX: "center",
          originY: "top",
          overlayX: "center",
          overlayY: "bottom",
          offsetX: this.offsetX(),
          offsetY: this.offsetY()
        };
      case "right":
        return {
          originX: "end",
          originY: "center",
          overlayX: "start",
          overlayY: "center",
          offsetX: this.offsetX(),
          offsetY: this.offsetY()
        };
      case "bottom":
        return {
          originX: "center",
          originY: "bottom",
          overlayX: "center",
          overlayY: "top",
          offsetX: this.offsetX(),
          offsetY: this.offsetY()
        };
      case "left":
        return {
          originX: "start",
          originY: "center",
          overlayX: "end",
          overlayY: "center",
          offsetX: this.offsetX(),
          offsetY: this.offsetY()
        };
    }
  }
  ngOnDestroy() {
    this.dispose();
    this.globalSub?.unsubscribe();
  }
  static \u0275fac = function PopoverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopoverComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PopoverComponent, selectors: [["app-popover"]], contentQueries: function PopoverComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.content, TemplateRef, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, viewQuery: function PopoverComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.popover, _c03, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { isOpen: [1, "isOpen"], origin: [1, "origin"], offsetX: [1, "offsetX"], offsetY: [1, "offsetY"], styled: [1, "styled"], hasBackdrop: [1, "hasBackdrop"], blockScroll: [1, "blockScroll"], outsideClose: [1, "outsideClose"], stretchToOrigin: [1, "stretchToOrigin"], restoreFocus: [1, "restoreFocus"], positionY: [1, "positionY"] }, outputs: { isOpen: "isOpenChange", opened: "opened", closed: "closed" }, ngContentSelectors: _c12, decls: 4, vars: 4, consts: [["popover", ""], [1, "popover", 3, "hidden"], [3, "ngTemplateOutlet"]], template: function PopoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
      \u0275\u0275elementStart(1, "div", 1, 0);
      \u0275\u0275conditionalCreate(3, PopoverComponent_Conditional_3_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("styled", ctx.styled());
      \u0275\u0275property("hidden", !ctx.isOpen());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isOpen() ? 3 : -1);
    }
  }, dependencies: [NgTemplateOutlet], styles: ["\n\n.styled[_ngcontent-%COMP%] {\n  box-shadow: var(--color-shadow);\n  background-color: var(--color-background);\n  border-radius: 6px;\n  border: 1px solid var(--color-border);\n}\n/*# sourceMappingURL=popover.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverComponent, [{
    type: Component,
    args: [{ selector: "app-popover", imports: [NgTemplateOutlet], changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>\n<div class="popover" #popover [hidden]="!isOpen()" [class.styled]="styled()">\n  @if (isOpen()) {\n    <ng-container [ngTemplateOutlet]="content()"></ng-container>\n  }\n</div>\n', styles: ["/* projects/ngverse/src/lib/ui/popover/popover.component.css */\n.styled {\n  box-shadow: var(--color-shadow);\n  background-color: var(--color-background);\n  border-radius: 6px;\n  border: 1px solid var(--color-border);\n}\n/*# sourceMappingURL=popover.component.css.map */\n"] }]
  }], () => [], { isOpen: [{ type: Input, args: [{ isSignal: true, alias: "isOpen", required: false }] }, { type: Output, args: ["isOpenChange"] }], origin: [{ type: Input, args: [{ isSignal: true, alias: "origin", required: true }] }], offsetX: [{ type: Input, args: [{ isSignal: true, alias: "offsetX", required: false }] }], offsetY: [{ type: Input, args: [{ isSignal: true, alias: "offsetY", required: false }] }], styled: [{ type: Input, args: [{ isSignal: true, alias: "styled", required: false }] }], hasBackdrop: [{ type: Input, args: [{ isSignal: true, alias: "hasBackdrop", required: false }] }], blockScroll: [{ type: Input, args: [{ isSignal: true, alias: "blockScroll", required: false }] }], outsideClose: [{ type: Input, args: [{ isSignal: true, alias: "outsideClose", required: false }] }], stretchToOrigin: [{ type: Input, args: [{ isSignal: true, alias: "stretchToOrigin", required: false }] }], restoreFocus: [{ type: Input, args: [{ isSignal: true, alias: "restoreFocus", required: false }] }], positionY: [{ type: Input, args: [{ isSignal: true, alias: "positionY", required: false }] }], opened: [{ type: Output, args: ["opened"] }], closed: [{ type: Output, args: ["closed"] }], content: [{ type: ContentChild, args: [forwardRef(() => TemplateRef), { isSignal: true }] }], popover: [{ type: ViewChild, args: ["popover", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PopoverComponent, { className: "PopoverComponent", filePath: "projects/ngverse/src/lib/ui/popover/popover.component.ts", lineNumber: 37 });
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    assertInInjectionContext(toObservable);
  }
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, {
      equal
    });
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, {
      equal
    });
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

// projects/ngverse/src/lib/ui/select/select-label.directive.ts
var SelectLabelDirective = class _SelectLabelDirective {
  ref = inject(TemplateRef);
  static \u0275fac = function SelectLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectLabelDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SelectLabelDirective, selectors: [["ng-template", "appSelectLabel", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectLabelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[appSelectLabel]"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/select/select.component.ts
var _c04 = ["optionsList"];
var _c13 = [[["app-option-group"]], [["app-option"]]];
var _c2 = ["app-option-group", "app-option"];
var _c3 = (a0) => ({ $implicit: a0 });
function SelectComponent_Conditional_3_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SelectComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectComponent_Conditional_3_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx.ref)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, ctx_r1.selectedOption()));
  }
}
function SelectComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const selectedOptionsLabel_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", selectedOptionsLabel_r3, " ");
  }
}
function SelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SelectComponent_Conditional_3_Conditional_0_Template, 1, 4, "ng-container")(1, SelectComponent_Conditional_3_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.selectLabel()) ? 0 : 1, tmp_3_0);
  }
}
function SelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.placeholder(), " ");
  }
}
function SelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button")(1, "app-font-icon", 7);
    \u0275\u0275listener("click", function SelectComponent_Conditional_5_Template_app_font_icon_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275text(2, "clear");
    \u0275\u0275elementEnd()();
  }
}
function SelectComponent_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyText());
  }
}
function SelectComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, SelectComponent_ng_template_10_Conditional_0_Template, 2, 1, "div", 8);
    \u0275\u0275elementStart(1, "div", 9, 1);
    \u0275\u0275listener("keydown", function SelectComponent_ng_template_10_Template_div_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275projection(3);
    \u0275\u0275projection(4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.options().length && ctx_r1.emptyText() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-activedescendant", ctx_r1.activeDescendantId());
  }
}
var SelectComponent = class _SelectComponent {
  placeholder = input(...ngDevMode ? [void 0, { debugName: "placeholder" }] : []);
  emptyText = input(...ngDevMode ? [void 0, { debugName: "emptyText" }] : []);
  showClear = input(false, ...ngDevMode ? [{ debugName: "showClear" }] : []);
  selectLabel = contentChild(SelectLabelDirective, ...ngDevMode ? [{ debugName: "selectLabel" }] : []);
  options = contentChildren(forwardRef(() => OptionComponent), ...ngDevMode ? [{ debugName: "options", descendants: true }] : [{ descendants: true }]);
  keyManager = new ActiveDescendantKeyManager(this.options, inject(Injector)).withTypeAhead();
  optionsList = viewChild("optionsList", ...ngDevMode ? [{ debugName: "optionsList" }] : []);
  compareWith = input((o1, o2) => o1 === o2, ...ngDevMode ? [{ debugName: "compareWith" }] : []);
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  disabled = signal(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  stretch = input(true, ...ngDevMode ? [{ debugName: "stretch" }] : []);
  activeDescendantId = toSignal(this.keyManager.change.pipe(map(() => this.keyManager.activeItem?.id())));
  onKeydown($event) {
    if ($event.key === "Enter" && this.keyManager.activeItem) {
      this.toggleValue(this.keyManager.activeItem);
    }
    this.keyManager.onKeydown($event);
  }
  _value = signal(null, ...ngDevMode ? [{ debugName: "_value" }] : []);
  _onTouched;
  _registerOnChangeFn;
  selectedOption = computed(() => {
    const selectedOption = this.options().find((option) => this.compareWith()(option.value(), this._value()));
    return selectedOption;
  }, ...ngDevMode ? [{ debugName: "selectedOption" }] : []);
  selectedOptionLabel = computed(() => {
    const selectedOption = this.selectedOption();
    return selectedOption?.getLabel();
  }, ...ngDevMode ? [{ debugName: "selectedOptionLabel" }] : []);
  isSelected(value) {
    return this.compareWith()(value, this._value());
  }
  writeValue(value) {
    this._value.set(value);
  }
  toggleValue(option) {
    this.keyManager.setActiveItem(option);
    this._value.set(option.value());
    this._registerOnChangeFn?.(this._value());
    this.isOpen.set(false);
  }
  registerOnChange(fn) {
    this._registerOnChangeFn = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  togglePanel() {
    this.isOpen.update((isOpen) => !isOpen);
  }
  panelOpened() {
    this.optionsList()?.nativeElement.focus();
    this.keyManager.activeItem?.scrollIntoView();
    const selectedOption = this.selectedOption();
    if (selectedOption) {
      this.keyManager.setActiveItem(selectedOption);
    }
  }
  panelClosed() {
    this._onTouched?.();
  }
  ngOnDestroy() {
    this.keyManager.destroy();
  }
  clear($event) {
    this._value.set(null);
    this._registerOnChangeFn?.(this._value());
    $event.stopPropagation();
  }
  static \u0275fac = function SelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectComponent, selectors: [["app-select"]], contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.selectLabel, SelectLabelDirective, 5);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.options, OptionComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, viewQuery: function SelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.optionsList, _c04, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostAttrs: ["role", "combobox", 1, "inline-block", "group"], hostVars: 1, hostBindings: function SelectComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-expanded", ctx.isOpen());
    }
  }, inputs: { placeholder: [1, "placeholder"], emptyText: [1, "emptyText"], showClear: [1, "showClear"], compareWith: [1, "compareWith"], stretch: [1, "stretch"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: _SelectComponent
    }
  ])], ngContentSelectors: _c2, decls: 11, vars: 15, consts: [["origin", "appPopoverOrigin"], ["optionsList", ""], ["appPopoverOrigin", "", 1, "flex", "h-9", "cursor-pointer", "items-center", "justify-between", "rounded-md", "border", "border-border", "p-2", "group-[.ng-invalid.ng-touched]:border-danger", "focus-visible:outline", "focus-visible:outline-ring", "disabled:bg-disabled", "disabled:text-disabled-foreground", 3, "click", "disabled"], [1, "mr-auto", "flex-1", "truncate", "text-left"], [1, "transition-transform"], [3, "opened", "closed", "isOpenChange", "outsideClose", "restoreFocus", "blockScroll", "styled", "stretchToOrigin", "isOpen", "origin", "offsetY"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["size", "20", 3, "click"], [1, "p-2"], ["tabindex", "0", "role", "listbox", 1, "max-h-52", "overflow-y-auto", 3, "keydown"]], template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c13);
      \u0275\u0275elementStart(0, "button", 2, 0);
      \u0275\u0275listener("click", function SelectComponent_Template_button_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePanel());
      });
      \u0275\u0275elementStart(2, "span", 3);
      \u0275\u0275conditionalCreate(3, SelectComponent_Conditional_3_Template, 2, 1)(4, SelectComponent_Conditional_4_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, SelectComponent_Conditional_5_Template, 3, 0, "button");
      \u0275\u0275elementStart(6, "button")(7, "app-font-icon", 4);
      \u0275\u0275text(8, "keyboard_arrow_down");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "app-popover", 5);
      \u0275\u0275listener("opened", function SelectComponent_Template_app_popover_opened_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.panelOpened());
      })("closed", function SelectComponent_Template_app_popover_closed_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.panelClosed());
      });
      \u0275\u0275twoWayListener("isOpenChange", function SelectComponent_Template_app_popover_isOpenChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.isOpen, $event) || (ctx.isOpen = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(10, SelectComponent_ng_template_10_Template, 5, 2, "ng-template");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      const origin_r6 = \u0275\u0275reference(1);
      \u0275\u0275classProp("w-full", ctx.stretch());
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_3_0 = ctx.selectedOptionLabel()) ? 3 : 4, tmp_3_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showClear() && ctx.selectedOption() ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rotate-180", ctx.isOpen());
      \u0275\u0275advance(2);
      \u0275\u0275property("outsideClose", true)("restoreFocus", true)("blockScroll", true)("styled", true)("stretchToOrigin", true);
      \u0275\u0275twoWayProperty("isOpen", ctx.isOpen);
      \u0275\u0275property("origin", origin_r6)("offsetY", 8);
    }
  }, dependencies: [
    ReactiveFormsModule,
    PopoverOriginDirective,
    PopoverComponent,
    FontIconComponent,
    NgTemplateOutlet
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectComponent, [{
    type: Component,
    args: [{ selector: "app-select", imports: [
      ReactiveFormsModule,
      PopoverOriginDirective,
      PopoverComponent,
      FontIconComponent,
      NgTemplateOutlet
    ], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: SelectComponent
      }
    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "combobox",
      class: "inline-block group",
      "[attr.aria-expanded]": "isOpen()"
    }, template: '<button\n  class="flex h-9 cursor-pointer items-center justify-between rounded-md border border-border p-2 group-[.ng-invalid.ng-touched]:border-danger focus-visible:outline focus-visible:outline-ring disabled:bg-disabled disabled:text-disabled-foreground"\n  [class.w-full]="stretch()"\n  appPopoverOrigin\n  #origin="appPopoverOrigin"\n  (click)="togglePanel()"\n  [disabled]="disabled()"\n>\n  <span class="mr-auto flex-1 truncate text-left">\n    @if (selectedOptionLabel(); as selectedOptionsLabel) {\n      @if (selectLabel(); as selectLabel) {\n        <ng-container\n          *ngTemplateOutlet="\n            selectLabel.ref;\n            context: { $implicit: selectedOption() }\n          "\n        ></ng-container>\n      } @else {\n        {{ selectedOptionsLabel }}\n      }\n    } @else {\n      {{ placeholder() }}\n    }\n  </span>\n  @if (showClear() && selectedOption()) {\n    <button>\n      <app-font-icon size="20" (click)="clear($event)">clear</app-font-icon>\n    </button>\n  }\n  <button>\n    <app-font-icon class="transition-transform" [class.rotate-180]="isOpen()"\n      >keyboard_arrow_down</app-font-icon\n    >\n  </button>\n</button>\n<app-popover\n  [outsideClose]="true"\n  [restoreFocus]="true"\n  [blockScroll]="true"\n  [styled]="true"\n  [stretchToOrigin]="true"\n  (opened)="panelOpened()"\n  (closed)="panelClosed()"\n  [(isOpen)]="isOpen"\n  [origin]="origin"\n  [offsetY]="8"\n>\n  <ng-template>\n    @if (!options().length && emptyText()) {\n      <div class="p-2">{{ emptyText() }}</div>\n    }\n    <div\n      [attr.aria-activedescendant]="activeDescendantId()"\n      tabindex="0"\n      #optionsList\n      (keydown)="onKeydown($event)"\n      class="max-h-52 overflow-y-auto"\n      role="listbox"\n    >\n      <ng-content select="app-option-group"></ng-content>\n      <ng-content select="app-option"></ng-content>\n    </div>\n  </ng-template>\n</app-popover>\n' }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], showClear: [{ type: Input, args: [{ isSignal: true, alias: "showClear", required: false }] }], selectLabel: [{ type: ContentChild, args: [forwardRef(() => SelectLabelDirective), { isSignal: true }] }], options: [{ type: ContentChildren, args: [forwardRef(() => OptionComponent), __spreadProps(__spreadValues({}, { descendants: true }), { isSignal: true })] }], optionsList: [{ type: ViewChild, args: ["optionsList", { isSignal: true }] }], compareWith: [{ type: Input, args: [{ isSignal: true, alias: "compareWith", required: false }] }], stretch: [{ type: Input, args: [{ isSignal: true, alias: "stretch", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "projects/ngverse/src/lib/ui/select/select.component.ts", lineNumber: 64 });
})();

// projects/ngverse/src/lib/ui/select/option.component.ts
var _c05 = ["*"];
var OptionComponent = class _OptionComponent {
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  disabled;
  id = input(inject(_IdGenerator).getId("option-"), ...ngDevMode ? [{ debugName: "id" }] : []);
  isActive = signal(false, ...ngDevMode ? [{ debugName: "isActive" }] : []);
  isSelected = () => this.select.isSelected(this.value());
  optionGroup = inject(OptionGroupComponent, { optional: true });
  optionContent = contentChild(OptionContentDirective, ...ngDevMode ? [{ debugName: "optionContent" }] : []);
  host = inject(ElementRef);
  element = inject(ElementRef).nativeElement;
  select = inject(forwardRef(() => SelectComponent));
  inGroup = !!this.optionGroup;
  get content() {
    const optionContent = this.optionContent();
    return optionContent ? optionContent.content : this.host.nativeElement.textContent;
  }
  getLabel() {
    return this.content ?? "";
  }
  onClick() {
    this.select.toggleValue(this);
  }
  setActiveStyles() {
    this.isActive.set(true);
    this.scrollIntoView();
  }
  scrollIntoView() {
    this.element.scrollIntoView({
      block: "nearest",
      inline: "nearest"
    });
  }
  setInactiveStyles() {
    this.isActive.set(false);
  }
  static \u0275fac = function OptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OptionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OptionComponent, selectors: [["app-option"]], contentQueries: function OptionComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.optionContent, OptionContentDirective, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostAttrs: ["role", "option"], hostVars: 9, hostBindings: function OptionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function OptionComponent_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      \u0275\u0275domProperty("id", ctx.id());
      \u0275\u0275attribute("aria-selected", ctx.isSelected())("aria-disabled", ctx.disabled);
      \u0275\u0275classProp("is-active", ctx.isActive())("in-group", ctx.inGroup)("selected", ctx.isSelected());
    }
  }, inputs: { value: [1, "value"], disabled: "disabled", id: [1, "id"] }, ngContentSelectors: _c05, decls: 1, vars: 0, template: function OptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px;\n  cursor: pointer;\n  background: transparent;\n  border: 0px;\n  font-size: 1rem;\n}\n.in-group[_nghost-%COMP%] {\n  padding-left: 24px;\n}\n.is-active[_nghost-%COMP%], \n[_nghost-%COMP%]:hover:not([disabled]), \n.selected[_nghost-%COMP%] {\n  background: var(--color-accent);\n  color: var(--color-accent-foreground);\n}\n[_nghost-%COMP%]:focus-visible {\n  outline: 1px solid var(--color-ring);\n}\n[disabled][_nghost-%COMP%] {\n  color: var(--color-disabled-foreground);\n}\n/*# sourceMappingURL=option.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionComponent, [{
    type: Component,
    args: [{ selector: "app-option", changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "option",
      "(click)": "onClick()",
      "[class.is-active]": "isActive()",
      "[class.in-group]": "inGroup",
      "[class.selected]": "isSelected()",
      "[id]": "id()",
      "[attr.aria-selected]": "isSelected()",
      "[attr.aria-disabled]": "disabled"
    }, template: "<ng-content></ng-content>\n", styles: ["/* projects/ngverse/src/lib/ui/select/option.component.css */\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px;\n  cursor: pointer;\n  background: transparent;\n  border: 0px;\n  font-size: 1rem;\n}\n:host.in-group {\n  padding-left: 24px;\n}\n:host.is-active,\n:host:hover:not([disabled]),\n:host.selected {\n  background: var(--color-accent);\n  color: var(--color-accent-foreground);\n}\n:host:focus-visible {\n  outline: 1px solid var(--color-ring);\n}\n:host[disabled] {\n  color: var(--color-disabled-foreground);\n}\n/*# sourceMappingURL=option.component.css.map */\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], disabled: [{
    type: Input
  }], id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], optionContent: [{ type: ContentChild, args: [forwardRef(() => OptionContentDirective), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OptionComponent, { className: "OptionComponent", filePath: "projects/ngverse/src/lib/ui/select/option.component.ts", lineNumber: 33 });
})();

// projects/docs/src/app/blueprint/source-tree/source-tree-select/source-tree-select.component.ts
function SourceTreeSelectComponent_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 3)(1, "div", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r1 = ctx.$implicit;
    \u0275\u0275property("value", file_r1);
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", file_r1.language)("src", "images/" + file_r1.language + ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", file_r1.name, " ");
  }
}
function SourceTreeSelectComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option-group")(1, "app-option-group-label", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SourceTreeSelectComponent_For_2_For_5_Template, 4, 4, "app-option", 3, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const folder_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", folder_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", folder_r2.hideName ? "/" : "/" + folder_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(folder_r2.files);
  }
}
var SourceTreeSelectComponent = class _SourceTreeSelectComponent {
  isOpen = signal(true, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  fileSelected = output();
  selectedFile = model(void 0, ...ngDevMode ? [{ debugName: "selectedFile" }] : []);
  sourceTree = input([], ...ngDevMode ? [{ debugName: "sourceTree" }] : []);
  allFiles = computed(() => this.sourceTree().flatMap((sour) => sour.files), ...ngDevMode ? [{ debugName: "allFiles" }] : []);
  constructor() {
    effect(() => {
      if (this.selectedFile()) {
        return;
      }
      const sourceTree = this.sourceTree();
      if (sourceTree.length) {
        const newFile = sourceTree[0].files[0];
        this.selectedFile.set(newFile);
        this.fileSelect();
      }
    });
  }
  close() {
    this.isOpen.set(false);
  }
  open() {
    this.isOpen.set(true);
  }
  fileSelect() {
    const file = this.selectedFile();
    if (file) {
      this.fileSelected.emit(file);
    }
    this.close();
  }
  static \u0275fac = function SourceTreeSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SourceTreeSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SourceTreeSelectComponent, selectors: [["doc-source-tree-select"]], inputs: { selectedFile: [1, "selectedFile"], sourceTree: [1, "sourceTree"] }, outputs: { fileSelected: "fileSelected", selectedFile: "selectedFileChange" }, decls: 3, vars: 1, consts: [["placeholder", "Select a file", 1, "tree-select", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2"], ["width", "14", "height", "14", "src", "images/folder.svg", 3, "alt"], [3, "value"], [1, "flex", "items-center", "gap-1"], ["width", "14", "height", "14", 3, "alt", "src"]], template: function SourceTreeSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-select", 0);
      \u0275\u0275twoWayListener("ngModelChange", function SourceTreeSelectComponent_Template_app_select_ngModelChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedFile, $event) || (ctx.selectedFile = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SourceTreeSelectComponent_Template_app_select_ngModelChange_0_listener() {
        return ctx.fileSelect();
      });
      \u0275\u0275repeaterCreate(1, SourceTreeSelectComponent_For_2_Template, 6, 2, "app-option-group", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.sourceTree());
    }
  }, dependencies: [
    SelectComponent,
    OptionComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    OptionGroupComponent,
    OptionGroupLabelComponent
  ], styles: ["\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-100: oklch(0.968 0.007 247.896);\n    --color-gray-100: oklch(0.967 0.003 264.542);\n    --spacing: 0.25rem;\n  }\n}\n.select-option[_ngcontent-%COMP%] {\n  margin-block: calc(var(--spacing) * 2);\n  display: block;\n  display: flex;\n  height: calc(var(--spacing) * 8);\n  width: 100%;\n  cursor: pointer;\n  align-items: center;\n  gap: calc(var(--spacing) * 1);\n}\n@media (hover: hover) {\n  .select-option[_ngcontent-%COMP%]:hover {\n    background-color: var(--color-slate-100);\n  }\n}\n.select-option.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-gray-100);\n}\n.opened[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.tree-select[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\n\n/*# sourceMappingURL=source-tree-select.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SourceTreeSelectComponent, [{
    type: Component,
    args: [{ selector: "doc-source-tree-select", imports: [
      SelectComponent,
      OptionComponent,
      FormsModule,
      OptionGroupComponent,
      OptionGroupLabelComponent
    ], template: `<app-select
  placeholder="Select a file"
  class="tree-select"
  [(ngModel)]="selectedFile"
  (ngModelChange)="fileSelect()"
>
  @for (folder of sourceTree(); track $index) {
    <app-option-group>
      <app-option-group-label class="flex items-center gap-2">
        <img width="14" [alt]="folder" height="14" src="images/folder.svg" />{{
          folder.hideName ? '/' : '/' + folder.name
        }}
      </app-option-group-label>

      @for (file of folder.files; track $index) {
        <app-option [value]="file">
          <div class="flex items-center gap-1">
            <img
              width="14"
              [alt]="file.language"
              height="14"
              [src]="'images/' + file.language + '.svg'"
            />
            {{ file.name }}
          </div>
        </app-option>
      }
    </app-option-group>
  }
</app-select>
`, styles: ["/* projects/docs/src/app/blueprint/source-tree/source-tree-select/source-tree-select.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-100: oklch(0.968 0.007 247.896);\n    --color-gray-100: oklch(0.967 0.003 264.542);\n    --spacing: 0.25rem;\n  }\n}\n.select-option {\n  margin-block: calc(var(--spacing) * 2);\n  display: block;\n  display: flex;\n  height: calc(var(--spacing) * 8);\n  width: 100%;\n  cursor: pointer;\n  align-items: center;\n  gap: calc(var(--spacing) * 1);\n}\n@media (hover: hover) {\n  .select-option:hover {\n    background-color: var(--color-slate-100);\n  }\n}\n.select-option.selected {\n  background-color: var(--color-gray-100);\n}\n.opened {\n  transform: rotate(180deg);\n}\n.tree-select {\n  width: 350px;\n}\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=source-tree-select.component.css.map */\n"] }]
  }], () => [], { fileSelected: [{ type: Output, args: ["fileSelected"] }], selectedFile: [{ type: Input, args: [{ isSignal: true, alias: "selectedFile", required: false }] }, { type: Output, args: ["selectedFileChange"] }], sourceTree: [{ type: Input, args: [{ isSignal: true, alias: "sourceTree", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SourceTreeSelectComponent, { className: "SourceTreeSelectComponent", filePath: "projects/docs/src/app/blueprint/source-tree/source-tree-select/source-tree-select.component.ts", lineNumber: 29 });
})();

// projects/docs/src/app/blueprint/source-tree/source-tree.component.ts
var SourceTreeComponent = class _SourceTreeComponent {
  fileService = inject(FileService);
  files = ["html", "css", "js", "spec"];
  type = input("ui", ...ngDevMode ? [{ debugName: "type" }] : []);
  code = signal("", ...ngDevMode ? [{ debugName: "code" }] : []);
  language = signal("ts", ...ngDevMode ? [{ debugName: "language" }] : []);
  sourceTree = model([], ...ngDevMode ? [{ debugName: "sourceTree" }] : []);
  includeTests = model(...ngDevMode ? [void 0, { debugName: "includeTests" }] : []);
  fileSelected(file) {
    this.language.set(file.language === "spec.ts" ? "ts" : file.language);
    this.fileService.getFile(`ngverse/${this.type()}/${file.path}`).subscribe((data) => {
      this.code.set(data);
    });
  }
  static \u0275fac = function SourceTreeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SourceTreeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SourceTreeComponent, selectors: [["doc-source-tree"]], inputs: { type: [1, "type"], sourceTree: [1, "sourceTree"], includeTests: [1, "includeTests"] }, outputs: { sourceTree: "sourceTreeChange", includeTests: "includeTestsChange" }, decls: 6, vars: 3, consts: [[1, "mb-3", "flex", "flex-col", "items-start", "justify-between", "lg:flex-row", "lg:items-center"], [1, "text-lg", "font-medium"], [1, "mb-3", "flex", "items-center", "justify-between"], [1, "block", 3, "fileSelected", "sourceTree"], [3, "code", "language"]], template: function SourceTreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Source code");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "doc-source-tree-select", 3);
      \u0275\u0275listener("fileSelected", function SourceTreeComponent_Template_doc_source_tree_select_fileSelected_4_listener($event) {
        return ctx.fileSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "doc-source-code", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree());
      \u0275\u0275advance();
      \u0275\u0275property("code", ctx.code())("language", ctx.language());
    }
  }, dependencies: [SourceCodeComponent, SourceTreeSelectComponent, FormsModule], styles: ['\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-gray-200: oklch(0.928 0.006 264.531);\n    --spacing: 0.25rem;\n  }\n}\n.file-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-style: var(--tw-border-style);\n  border-width: 0px;\n  border-bottom-style: var(--tw-border-style);\n  border-bottom-width: 1px;\n  --tw-border-style: solid;\n  border-style: solid;\n  border-color: var(--color-gray-200);\n  padding: calc(var(--spacing) * 3);\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n\n\n/*# sourceMappingURL=source-tree.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SourceTreeComponent, [{
    type: Component,
    args: [{ selector: "doc-source-tree", imports: [SourceCodeComponent, SourceTreeSelectComponent, FormsModule], template: '<div\n  class="mb-3 flex flex-col items-start justify-between lg:flex-row lg:items-center"\n>\n  <h5 class="text-lg font-medium">Source code</h5>\n</div>\n\n<div class="mb-3 flex items-center justify-between">\n  <doc-source-tree-select\n    [sourceTree]="sourceTree()"\n    (fileSelected)="fileSelected($event)"\n    class="block"\n  ></doc-source-tree-select>\n</div>\n<doc-source-code [code]="code()" [language]="language()"></doc-source-code>\n', styles: ['/* projects/docs/src/app/blueprint/source-tree/source-tree.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-gray-200: oklch(0.928 0.006 264.531);\n    --spacing: 0.25rem;\n  }\n}\n.file-label {\n  cursor: pointer;\n  border-style: var(--tw-border-style);\n  border-width: 0px;\n  border-bottom-style: var(--tw-border-style);\n  border-bottom-width: 1px;\n  --tw-border-style: solid;\n  border-style: solid;\n  border-color: var(--color-gray-200);\n  padding: calc(var(--spacing) * 3);\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=source-tree.component.css.map */\n'] }]
  }], null, { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], sourceTree: [{ type: Input, args: [{ isSignal: true, alias: "sourceTree", required: false }] }, { type: Output, args: ["sourceTreeChange"] }], includeTests: [{ type: Input, args: [{ isSignal: true, alias: "includeTests", required: false }] }, { type: Output, args: ["includeTestsChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SourceTreeComponent, { className: "SourceTreeComponent", filePath: "projects/docs/src/app/blueprint/source-tree/source-tree.component.ts", lineNumber: 18 });
})();

export {
  SourceTreeBuilder,
  OptionGroupLabelComponent,
  OptionGroupComponent,
  PopoverOriginDirective,
  PopoverComponent,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  SelectLabelDirective,
  SelectComponent,
  OptionComponent,
  SourceTreeComponent
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v21.0.0
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-PQL4JFHV.js.map
