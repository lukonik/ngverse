import {
  ComponentPortal,
  Overlay
} from "./chunk-P53KIQU7.js";
import {
  animate,
  animation,
  keyframes,
  style,
  transition,
  trigger
} from "./chunk-JX5YVH27.js";
import {
  NgClass
} from "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Subject,
  inject,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2NN34RDL.js";

// projects/ngverse/src/lib/ui/toast/toast-close.component.ts
var ToastCloseIconComponent = class _ToastCloseIconComponent {
  static \u0275fac = function ToastCloseIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastCloseIconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastCloseIconComponent, selectors: [["app-toast-close-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-x"], ["d", "M18 6 6 18"], ["d", "m6 6 12 12"]], template: function ToastCloseIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(0, "svg", 0);
      \u0275\u0275domElement(1, "path", 1)(2, "path", 2);
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=toast-close.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastCloseIconComponent, [{
    type: Component,
    args: [{ selector: "app-toast-close-icon", template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-x"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;83ef423e75e4e659a164d1c9be989199a79f8f1f17a6181d8a5b21244eb6e9ba;/home/runner/work/ngverse/ngverse/projects/ngverse/src/lib/ui/toast/toast-close.component.ts */\n:host {\n  display: flex;\n}\n/*# sourceMappingURL=toast-close.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastCloseIconComponent, { className: "ToastCloseIconComponent", filePath: "projects/ngverse/src/lib/ui/toast/toast-close.component.ts", lineNumber: 29 });
})();

// projects/ngverse/src/lib/ui/toast/toast.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "bg-inverse text-inverse-foreground": a0, "bg-success text-success-foreground": a1, "bg-danger text-danger-foreground": a2, "bg-warning text-warning-foreground": a3 });
function ToastComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function ToastComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exit());
    });
    \u0275\u0275element(1, "app-toast-close-icon", 3);
    \u0275\u0275elementEnd();
  }
}
var ENTER_ANIMATION = transition("* => enter", [
  animation(animate("250ms ease-in", keyframes([
    style({ opacity: 0, transform: "scale3d(0.3, 0.3, 0.3)", offset: 0 }),
    style({ opacity: 1, transform: "scale3d(1, 1, 1)", offset: 0.5 })
  ])))
]);
var LEAVE_ANIMATION = transition("* => exit", [
  animation(animate("250ms ease-out", keyframes([
    style({ opacity: 1, transform: "scale3d(1, 1, 1)", offset: 0 }),
    style({ opacity: 0, transform: "scale3d(0.3, 0.3, 0.3)", offset: 0.5 }),
    style({ opacity: 0, offset: 1 })
  ])))
]);
var ToastComponent = class _ToastComponent {
  message = signal("", ...ngDevMode ? [{ debugName: "message" }] : []);
  type = signal(void 0, ...ngDevMode ? [{ debugName: "type" }] : []);
  showCloseIcon = signal(true, ...ngDevMode ? [{ debugName: "showCloseIcon" }] : []);
  position = signal("right_bottom", ...ngDevMode ? [{ debugName: "position" }] : []);
  animationState = signal("enter", ...ngDevMode ? [{ debugName: "animationState" }] : []);
  _onExit = new Subject();
  onExit = this._onExit.asObservable();
  onDone($event) {
    if ($event.toState === "exit") {
      this._onExit.next();
      this._onExit.complete();
    }
  }
  exit() {
    this.animationState.set("exit");
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], hostAttrs: ["role", "alert"], hostVars: 5, hostBindings: function ToastComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275syntheticHostListener("@toggle.done", function ToastComponent_animation_toggle_done_HostBindingHandler($event) {
        return ctx.onDone($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275syntheticHostProperty("@toggle", ctx.animationState());
      \u0275\u0275classMap(ctx.type());
      \u0275\u0275classProp("toaster", true);
    }
  }, decls: 4, vars: 8, consts: [[1, "flex", "items-center", "justify-center", "rounded-md", "px-4", "py-3", "shadow-md", 3, "ngClass"], ["aria-label", "Close toast", 1, "cursor-pointer"], ["aria-label", "Close toast", 1, "cursor-pointer", 3, "click"], [1, "toast-close-icon"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, ToastComponent_Conditional_3_Template, 2, 0, "button", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(3, _c0, !ctx.type(), ctx.type() === "success", ctx.type() === "danger", ctx.type() === "warning"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCloseIcon() ? 3 : -1);
    }
  }, dependencies: [ToastCloseIconComponent, NgClass], encapsulation: 2, data: { animation: [trigger("toggle", [ENTER_ANIMATION, LEAVE_ANIMATION])] }, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", imports: [ToastCloseIconComponent, NgClass], changeDetection: ChangeDetectionStrategy.OnPush, animations: [trigger("toggle", [ENTER_ANIMATION, LEAVE_ANIMATION])], host: {
      role: "alert",
      "[class.toaster]": "true",
      "[class]": "type()",
      "[@toggle]": "animationState()",
      "(@toggle.done)": "onDone($event)"
    }, template: `<div
  class="flex items-center justify-center rounded-md px-4 py-3 shadow-md"
  [ngClass]="{
    'bg-inverse text-inverse-foreground': !type(),
    'bg-success text-success-foreground': type() === 'success',
    'bg-danger text-danger-foreground': type() === 'danger',
    'bg-warning text-warning-foreground': type() === 'warning',
  }"
>
  <div>{{ message() }}</div>
  @if (showCloseIcon()) {
    <button (click)="exit()" class="cursor-pointer" aria-label="Close toast">
      <app-toast-close-icon class="toast-close-icon"></app-toast-close-icon>
    </button>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "projects/ngverse/src/lib/ui/toast/toast.component.ts", lineNumber: 56 });
})();

// projects/ngverse/src/lib/ui/toast/toast.service.ts
var ToastService = class _ToastService {
  overlay = inject(Overlay);
  overlayRef;
  timeoutId;
  resolvePosition(position) {
    const positionStrategy = this.overlay.position().global();
    const offset = "20px";
    switch (position) {
      case "top_left":
        return positionStrategy.top(offset).left(offset);
      case "top_center":
        return positionStrategy.top(offset).centerHorizontally(offset);
      case "top_right":
        return positionStrategy.top(offset).right(offset);
      case "right_center":
        return positionStrategy.right(offset).centerVertically(offset);
      case "right_bottom":
        return positionStrategy.right(offset).bottom(offset);
      case "bottom_center":
        return positionStrategy.bottom(offset).centerHorizontally(offset);
      case "bottom_left":
        return positionStrategy.bottom(offset).left(offset);
      case "left_center":
        return positionStrategy.left(offset).centerVertically();
    }
  }
  open(options) {
    this.close();
    const portal = new ComponentPortal(ToastComponent);
    const position = options.position ?? "bottom_center";
    const showCloseIcon = options.showCloseIcon ?? true;
    const closeDelay = options.closeDelay ?? 3e3;
    const autoClose = options.autoClose ?? true;
    const message = options.message;
    const type = options.type ?? void 0;
    const globalPosition = this.resolvePosition(position);
    this.overlayRef = this.overlay.create({
      positionStrategy: globalPosition
    });
    const compRef = this.overlayRef.attach(portal);
    const instance = compRef.instance;
    instance.message.set(message);
    instance.type.set(type);
    instance.showCloseIcon.set(showCloseIcon);
    instance.position.set(position);
    if (autoClose) {
      this.timeoutId = setTimeout(() => {
        instance.exit();
      }, closeDelay);
    }
    instance.onExit.subscribe(() => {
      this.close();
    });
    const closed$ = new Subject();
    return closed$.pipe(take(1));
  }
  close() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = void 0;
    }
    this.overlayRef?.dispose();
    this.overlayRef = void 0;
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-BGYGIA7C.js.map
