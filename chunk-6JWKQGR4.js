import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-3GLWUNBJ.js";
import {
  _IdGenerator
} from "./chunk-64HPILVO.js";
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
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-2NN34RDL.js";

// projects/ngverse/src/lib/ui/switch/switch.component.ts
var _c0 = ["*"];
var SwitchComponent = class _SwitchComponent {
  labelAlign = input("end", ...ngDevMode ? [{ debugName: "labelAlign" }] : []);
  required = input(false, ...ngDevMode ? [{ debugName: "required" }] : []);
  value = signal(void 0, ...ngDevMode ? [{ debugName: "value" }] : []);
  _idGenerator = inject(_IdGenerator);
  buttonId = this._idGenerator.getId("switch-button-");
  labelId = this._idGenerator.getId("switch-label-");
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
  static \u0275fac = function SwitchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwitchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SwitchComponent, selectors: [["app-switch"]], hostAttrs: ["role", "group"], hostVars: 7, hostBindings: function SwitchComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-labelledby", ctx.labelId);
      \u0275\u0275classProp("disabled", ctx.disabled())("checked", ctx.value())("start", ctx.labelAlign() === "start");
    }
  }, inputs: { labelAlign: [1, "labelAlign"], required: [1, "required"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: _SwitchComponent
    },
    {
      provide: NG_VALIDATORS,
      useExisting: _SwitchComponent,
      multi: true
    }
  ])], ngContentSelectors: _c0, decls: 4, vars: 7, consts: [["role", "switch", 1, "switch-button", 3, "click", "disabled", "id"], [1, "toggle"], [3, "htmlFor", "id"]], template: function SwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function SwitchComponent_Template_button_click_0_listener() {
        return ctx.toggle();
      });
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(2, "label", 2);
      \u0275\u0275projection(3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("checked", ctx.value());
      \u0275\u0275domProperty("disabled", ctx.disabled())("id", ctx.buttonId);
      \u0275\u0275attribute("aria-checked", ctx.value());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("htmlFor", ctx.buttonId)("id", ctx.labelId);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.start[_nghost-%COMP%] {\n  flex-direction: row-reverse;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.disabled[_nghost-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  color: var(--color-disabled-foreground);\n  background-color: var(--color-disabled);\n}\n.disabled[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--color-disabled-foreground);\n}\n.ng-invalid.ng-touched[_nghost-%COMP%]   .switch-button[_ngcontent-%COMP%] {\n  outline: 1px solid var(--color-danger);\n}\n.switch-button[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 25px;\n  border-radius: 15px;\n  background-color: var(--color-surface-2);\n  position: relative;\n  transition: background-color 0.3s;\n  border: 0px;\n  cursor: pointer;\n}\n.switch-button.checked[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n}\n.toggle[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  background-color: var(--color-background);\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  transition: left 0.3s;\n}\n.switch-button.checked[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  left: 26px;\n}\n/*# sourceMappingURL=switch.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchComponent, [{
    type: Component,
    args: [{ selector: "app-switch", imports: [], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: SwitchComponent
      },
      {
        provide: NG_VALIDATORS,
        useExisting: SwitchComponent,
        multi: true
      }
    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "group",
      "[class.disabled]": "disabled()",
      "[class.checked]": "value()",
      "[class.start]": 'labelAlign() === "start"',
      "[attr.aria-labelledby]": "labelId"
    }, template: '<button\n  [disabled]="disabled()"\n  [id]="buttonId"\n  role="switch"\n  class="switch-button"\n  [class.checked]="value()"\n  [attr.aria-checked]="value()"\n  (click)="toggle()"\n>\n  <div class="toggle"></div>\n</button>\n<label [htmlFor]="buttonId" [id]="labelId">\n  <ng-content></ng-content>\n</label>\n', styles: ["/* projects/ngverse/src/lib/ui/switch/switch.component.css */\n:host {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n:host.start {\n  flex-direction: row-reverse;\n}\n:host label {\n  cursor: pointer;\n}\n:host.disabled .toggle {\n  color: var(--color-disabled-foreground);\n  background-color: var(--color-disabled);\n}\n:host.disabled label {\n  color: var(--color-disabled-foreground);\n}\n:host.ng-invalid.ng-touched .switch-button {\n  outline: 1px solid var(--color-danger);\n}\n.switch-button {\n  width: 50px;\n  height: 25px;\n  border-radius: 15px;\n  background-color: var(--color-surface-2);\n  position: relative;\n  transition: background-color 0.3s;\n  border: 0px;\n  cursor: pointer;\n}\n.switch-button.checked {\n  background-color: var(--color-primary);\n}\n.toggle {\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  background-color: var(--color-background);\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  transition: left 0.3s;\n}\n.switch-button.checked .toggle {\n  left: 26px;\n}\n/*# sourceMappingURL=switch.component.css.map */\n"] }]
  }], () => [], { labelAlign: [{ type: Input, args: [{ isSignal: true, alias: "labelAlign", required: false }] }], required: [{ type: Input, args: [{ isSignal: true, alias: "required", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SwitchComponent, { className: "SwitchComponent", filePath: "projects/ngverse/src/lib/ui/switch/switch.component.ts", lineNumber: 55 });
})();

export {
  SwitchComponent
};
//# sourceMappingURL=chunk-6JWKQGR4.js.map
