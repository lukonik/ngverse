import {
  toObservable
} from "./chunk-Y6XO3YM5.js";
import {
  NgControl,
  StatusChangeEvent,
  TouchedChangeEvent,
  Validators
} from "./chunk-3GLWUNBJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Injectable,
  Input,
  computed,
  contentChild,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  merge,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2NN34RDL.js";
import {
  __spreadValues
} from "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/form-field/error.component.ts
var _c0 = ["*"];
var ErrorComponent = class _ErrorComponent {
  static \u0275fac = function ErrorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ErrorComponent, selectors: [["app-error"]], hostAttrs: [1, "text-sm", "text-danger"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorComponent, [{
    type: Component,
    args: [{
      selector: "app-error",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "text-sm text-danger"
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ErrorComponent, { className: "ErrorComponent", filePath: "projects/ngverse/src/lib/ui/form-field/error.component.ts", lineNumber: 11 });
})();

// projects/ngverse/src/lib/ui/form-field/form-field-error.registry.ts
var DEFAULT_ERRORS = {
  required: "This field is required",
  email: "Enter a valid email address",
  min: "This field is too short",
  max: "This field is too long"
};
var FormFieldErrorRegistry = class _FormFieldErrorRegistry {
  _errors = signal(DEFAULT_ERRORS, ...ngDevMode ? [{ debugName: "_errors" }] : []);
  errors = this._errors.asReadonly();
  getMessage(code, params) {
    const foundError = this._errors()[code];
    if (!foundError) {
      return void 0;
    }
    if (foundError instanceof Function) {
      return foundError(params);
    }
    return foundError;
  }
  addErrors(errors) {
    this._errors.set(__spreadValues(__spreadValues({}, this._errors()), errors));
  }
  setErrors(errors) {
    this._errors.set(errors);
  }
  static \u0275fac = function FormFieldErrorRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFieldErrorRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormFieldErrorRegistry, factory: _FormFieldErrorRegistry.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldErrorRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/form-field/form-field.component.ts
var _c02 = [[["app-label"]], "*", [["app-error"]]];
var _c1 = ["app-label", "*", "app-error"];
function FormFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function FormFieldComponent_Conditional_7_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r1);
  }
}
function FormFieldComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FormFieldComponent_Conditional_7_Conditional_0_For_1_Template, 2, 1, "app-error", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.errors());
  }
}
function FormFieldComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function FormFieldComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormFieldComponent_Conditional_7_Conditional_0_Template, 2, 0);
    \u0275\u0275conditionalCreate(1, FormFieldComponent_Conditional_7_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.showErrors() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCustomErrors() ? 1 : -1);
  }
}
var FormFieldComponent = class _FormFieldComponent {
  silentErrors = input(...ngDevMode ? [void 0, { debugName: "silentErrors" }] : []);
  showErrors = input(true, ...ngDevMode ? [{ debugName: "showErrors" }] : []);
  hideRequiredMarker = input(false, ...ngDevMode ? [{ debugName: "hideRequiredMarker" }] : []);
  errors = signal([], ...ngDevMode ? [{ debugName: "errors" }] : []);
  invalid = signal(false, ...ngDevMode ? [{ debugName: "invalid" }] : []);
  touched = signal(false, ...ngDevMode ? [{ debugName: "touched" }] : []);
  showCustomErrors = computed(() => !this.showErrors() || this.errors().length === 0, ...ngDevMode ? [{ debugName: "showCustomErrors" }] : []);
  hasRequiredValidation = computed(() => {
    const control = this.ngControl()?.control;
    if (control) {
      return control.hasValidator(Validators.required) || control.hasValidator(Validators.requiredTrue);
    }
    return false;
  }, ...ngDevMode ? [{ debugName: "hasRequiredValidation" }] : []);
  ngControl = contentChild(NgControl, ...ngDevMode ? [{ debugName: "ngControl" }] : []);
  sub;
  errorRegistry = inject(FormFieldErrorRegistry);
  errorsCodes$ = toObservable(this.errorRegistry.errors);
  silentErrors$ = toObservable(this.silentErrors);
  constructor() {
    effect(() => {
      const ngControl = this.ngControl();
      const control = ngControl?.control;
      if (!control) {
        this.sub?.unsubscribe();
        return;
      }
      const controlEvent = control.events.pipe(filter((e) => e instanceof TouchedChangeEvent || e instanceof StatusChangeEvent));
      this.sub = merge(controlEvent, this.errorsCodes$, this.silentErrors$).subscribe(() => {
        this.touched.set(control.touched);
        this.invalid.set(control.invalid);
        this.processErrors(control);
      });
    });
  }
  processErrors(control) {
    const errors = [];
    const silentErrors = this.silentErrors();
    for (const key in control.errors) {
      const notInSilent = !silentErrors?.includes(key);
      if (control.errors[key] && notInSilent) {
        const errorLabel = this.errorRegistry.getMessage(key, control.errors[key]);
        if (errorLabel !== void 0) {
          errors.push(errorLabel);
        }
      }
    }
    this.errors.set(errors);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  static \u0275fac = function FormFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFieldComponent, selectors: [["app-form-field"]], contentQueries: function FormFieldComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.ngControl, NgControl, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { silentErrors: [1, "silentErrors"], showErrors: [1, "showErrors"], hideRequiredMarker: [1, "hideRequiredMarker"] }, ngContentSelectors: _c1, decls: 8, vars: 2, consts: [[1, "relative", "mb-1.5", "flex", "flex-col", "gap-1.5", "pb-5"], [1, "flex", "flex-col", "gap-1.5"], [1, "flex", "items-center", "gap-1"], [1, "text-danger"], [1, "absolute", "right-0", "bottom-0", "left-0", "flex", "flex-col"]], template: function FormFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275elementStart(0, "div", 0)(1, "label", 1)(2, "div", 2);
      \u0275\u0275projection(3);
      \u0275\u0275conditionalCreate(4, FormFieldComponent_Conditional_4_Template, 2, 0, "span", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(5, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275conditionalCreate(7, FormFieldComponent_Conditional_7_Template, 2, 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.hideRequiredMarker() && ctx.hasRequiredValidation() ? 4 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.invalid() && ctx.touched() ? 7 : -1);
    }
  }, dependencies: [ErrorComponent], styles: ["\n\napp-error[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=form-field.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldComponent, [{
    type: Component,
    args: [{ selector: "app-form-field", imports: [ErrorComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="relative mb-1.5 flex flex-col gap-1.5 pb-5">\n  <!-- eslint-disable-next-line @angular-eslint/template/label-has-associated-control -->\n  <label class="flex flex-col gap-1.5">\n    <div class="flex items-center gap-1">\n      <ng-content select="app-label"></ng-content>\n      @if (!hideRequiredMarker() && hasRequiredValidation()) {\n        <span class="text-danger">*</span>\n      }\n    </div>\n    <ng-content></ng-content>\n  </label>\n\n  <div class="absolute right-0 bottom-0 left-0 flex flex-col">\n    @if (invalid() && touched()) {\n      @if (showErrors()) {\n        @for (error of errors(); track $index) {\n          <app-error>{{ error }}</app-error>\n        }\n      }\n      @if (showCustomErrors()) {\n        <ng-content select="app-error"></ng-content>\n      }\n    }\n  </div>\n</div>\n', styles: ["/* projects/ngverse/src/lib/ui/form-field/form-field.component.css */\napp-error {\n  display: block;\n}\n/*# sourceMappingURL=form-field.component.css.map */\n"] }]
  }], () => [], { silentErrors: [{ type: Input, args: [{ isSignal: true, alias: "silentErrors", required: false }] }], showErrors: [{ type: Input, args: [{ isSignal: true, alias: "showErrors", required: false }] }], hideRequiredMarker: [{ type: Input, args: [{ isSignal: true, alias: "hideRequiredMarker", required: false }] }], ngControl: [{ type: ContentChild, args: [forwardRef(() => NgControl), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFieldComponent, { className: "FormFieldComponent", filePath: "projects/ngverse/src/lib/ui/form-field/form-field.component.ts", lineNumber: 31 });
})();

export {
  ErrorComponent,
  FormFieldErrorRegistry,
  FormFieldComponent
};
//# sourceMappingURL=chunk-74UXXUOO.js.map
