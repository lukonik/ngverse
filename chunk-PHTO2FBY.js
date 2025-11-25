import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-3GLWUNBJ.js";
import {
  _IdGenerator
} from "./chunk-64HPILVO.js";
import {
  FontIconComponent
} from "./chunk-MTAP3RFR.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2NN34RDL.js";

// projects/ngverse/src/lib/ui/checkbox/checkbox.component.ts
var _c0 = ["*"];
var CheckboxComponent = class _CheckboxComponent {
  labelAlign = input("end", ...ngDevMode ? [{ debugName: "labelAlign" }] : []);
  required = input(false, ...ngDevMode ? [{ debugName: "required" }] : []);
  inputId = input(inject(_IdGenerator).getId("checkbox-"), ...ngDevMode ? [{ debugName: "inputId" }] : []);
  value = signal(void 0, ...ngDevMode ? [{ debugName: "value" }] : []);
  disabled = signal(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  _registerOnChangefn;
  _onTouchedfn;
  _validatorChangefn;
  constructor() {
    effect(() => {
      this.required();
      this._validatorChangefn?.();
    });
  }
  toggle() {
    if (this.disabled()) {
      return;
    }
    this._onTouchedfn?.();
    const newValue = !this.value();
    this.value.set(newValue);
    this._registerOnChangefn?.(newValue);
  }
  writeValue(obj) {
    this.value.set(!!obj);
  }
  registerOnChange(fn) {
    this._registerOnChangefn = fn;
  }
  registerOnValidatorChange(fn) {
    this._validatorChangefn = fn;
  }
  registerOnTouched(fn) {
    this._onTouchedfn = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  validate(control) {
    const hasRequiredValidator = this.required();
    return hasRequiredValidator && control.value !== true ? { required: true } : null;
  }
  static \u0275fac = function CheckboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckboxComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckboxComponent, selectors: [["app-checkbox"]], hostAttrs: [1, "inline-flex", "items-center", "gap-1", "[.ng-invalid.ng-touched]:text-danger", "[.disabled]:text-disabled-foreground", "[.start]:flex-row-reverse"], hostVars: 6, hostBindings: function CheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("disabled", ctx.disabled())("checked", ctx.value())("start", ctx.labelAlign() === "start");
    }
  }, inputs: { labelAlign: [1, "labelAlign"], required: [1, "required"], inputId: [1, "inputId"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: _CheckboxComponent
    },
    {
      provide: NG_VALIDATORS,
      useExisting: _CheckboxComponent,
      multi: true
    }
  ])], ngContentSelectors: _c0, decls: 6, vars: 5, consts: [[1, "relative", "h-6", "w-6"], ["type", "checkbox", 1, "peer", "absolute", "top-0", "right-0", "bottom-0", "left-0", "z-1", "h-full", "w-full", "opacity-0", 3, "change", "disabled", "id", "checked"], [1, "block", "rounded-sm", "peer-focus-visible:outline", "peer-focus-visible:outline-ring"], [3, "htmlFor"]], template: function CheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
      \u0275\u0275listener("change", function CheckboxComponent_Template_input_change_1_listener() {
        return ctx.toggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-font-icon", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "label", 3);
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled())("id", ctx.inputId())("checked", ctx.value());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.value() ? "check_box" : "check_box_outline_blank");
      \u0275\u0275advance();
      \u0275\u0275property("htmlFor", ctx.inputId());
    }
  }, dependencies: [FontIconComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxComponent, [{
    type: Component,
    args: [{ selector: "app-checkbox", imports: [FontIconComponent], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: CheckboxComponent
      },
      {
        provide: NG_VALIDATORS,
        useExisting: CheckboxComponent,
        multi: true
      }
    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      class: "inline-flex items-center gap-1 [.ng-invalid.ng-touched]:text-danger [.disabled]:text-disabled-foreground [.start]:flex-row-reverse",
      "[class.disabled]": "disabled()",
      "[class.checked]": "value()",
      "[class.start]": 'labelAlign() === "start"'
    }, template: `<div class="relative h-6 w-6">
  <input
    [disabled]="disabled()"
    (change)="toggle()"
    class="peer absolute top-0 right-0 bottom-0 left-0 z-1 h-full w-full opacity-0"
    [id]="inputId()"
    [checked]="value()"
    type="checkbox"
  />
  <app-font-icon
    class="block rounded-sm peer-focus-visible:outline peer-focus-visible:outline-ring"
    >{{ value() ? 'check_box' : 'check_box_outline_blank' }}</app-font-icon
  >
</div>
<label [htmlFor]="inputId()">
  <ng-content></ng-content>
</label>
` }]
  }], () => [], { labelAlign: [{ type: Input, args: [{ isSignal: true, alias: "labelAlign", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }], inputId: [{ type: Input, args: [{ isSignal: true, alias: "inputId", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckboxComponent, { className: "CheckboxComponent", filePath: "projects/ngverse/src/lib/ui/checkbox/checkbox.component.ts", lineNumber: 56 });
})();

export {
  CheckboxComponent
};
//# sourceMappingURL=chunk-PHTO2FBY.js.map
