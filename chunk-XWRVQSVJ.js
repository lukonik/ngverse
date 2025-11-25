import {
  ButtonComponent
} from "./chunk-3AYE667Y.js";
import {
  ImplementationComponent
} from "./chunk-AC2HR3YF.js";
import {
  ExampleItemComponent,
  ExamplesComponent,
  PreviewComponent
} from "./chunk-LIQZACRZ.js";
import {
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE
} from "./chunk-BF7ARAHW.js";
import "./chunk-APVNZA6G.js";
import {
  CommandInstallationComponent
} from "./chunk-CTKIHVNQ.js";
import "./chunk-FVG5D4KT.js";
import {
  SourceTreeBuilder,
  SourceTreeComponent,
  toSignal
} from "./chunk-PQL4JFHV.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import {
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-3GLWUNBJ.js";
import "./chunk-BC37M6ZP.js";
import "./chunk-FK22TT2X.js";
import "./chunk-4YTCSZ5T.js";
import "./chunk-XGFB36A5.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-633NCXCE.js";
import "./chunk-ICIB3IHR.js";
import {
  FontIconComponent
} from "./chunk-K3WRTE43.js";
import "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
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
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/button-group/button-group.component.ts
var _c0 = ["*"];
var ButtonGroupComponent = class _ButtonGroupComponent {
  valueSignal = signal(null, ...ngDevMode ? [{ debugName: "valueSignal" }] : []);
  onChange;
  onTouched;
  disabledSignal = signal(false, ...ngDevMode ? [{ debugName: "disabledSignal" }] : []);
  selectItem(value) {
    if (this.isDisabled()) {
      return;
    }
    this.valueSignal.set(value ?? null);
    this.onChange?.(this.valueSignal());
    this.onTouched?.();
  }
  isSelected(value) {
    return this.valueSignal() === value;
  }
  isDisabled() {
    return this.disabledSignal();
  }
  writeValue(value) {
    this.valueSignal.set(value ?? null);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabledSignal.set(isDisabled);
  }
  static \u0275fac = function ButtonGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonGroupComponent, selectors: [["app-button-group"]], hostAttrs: ["role", "group", 1, "app-button-group"], hostVars: 3, hostBindings: function ButtonGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-disabled", ctx.isDisabled());
      \u0275\u0275classProp("app-button-group-disabled", ctx.isDisabled());
    }
  }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: _ButtonGroupComponent,
      multi: true
    }
  ])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, styles: ['\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-100: oklch(0.968 0.007 247.896);\n    --color-slate-900: oklch(0.208 0.042 265.755);\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --radius-lg: 0.5rem;\n  }\n}\n[_nghost-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  flex-wrap: wrap;\n  gap: 1px;\n  border-radius: var(--radius-lg);\n  background-color: var(--color-slate-100);\n  padding: calc(var(--spacing) * 1);\n}\n[_nghost-%COMP%]:focus-within {\n  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n  --tw-ring-color: var(--color-slate-900);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-offset-color: var(--color-white);\n}\n.app-button-group-disabled[_nghost-%COMP%] {\n  cursor: not-allowed;\n  opacity: 70%;\n}\n@property --tw-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-inset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-ring-color { syntax: "*"; inherits: false; }\n@property --tw-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-ring-color { syntax: "*"; inherits: false; }\n@property --tw-inset-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-ring-inset { syntax: "*"; inherits: false; }\n@property --tw-ring-offset-width { syntax: "<length>"; inherits: false; initial-value: 0px; }\n@property --tw-ring-offset-color { syntax: "*"; inherits: false; initial-value: #fff; }\n@property --tw-ring-offset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n\n\n/*# sourceMappingURL=button-group.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupComponent, [{
    type: Component,
    args: [{ selector: "app-button-group", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "group",
      class: "app-button-group",
      "[class.app-button-group-disabled]": "isDisabled()",
      "[attr.aria-disabled]": "isDisabled()"
    }, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: ButtonGroupComponent,
        multi: true
      }
    ], template: "<ng-content></ng-content>\n", styles: ['/* projects/ngverse/src/lib/ui/button-group/button-group.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-100: oklch(0.968 0.007 247.896);\n    --color-slate-900: oklch(0.208 0.042 265.755);\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --radius-lg: 0.5rem;\n  }\n}\n:host {\n  display: inline-flex;\n  width: fit-content;\n  flex-wrap: wrap;\n  gap: 1px;\n  border-radius: var(--radius-lg);\n  background-color: var(--color-slate-100);\n  padding: calc(var(--spacing) * 1);\n}\n:host(:focus-within) {\n  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n  --tw-ring-color: var(--color-slate-900);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-offset-color: var(--color-white);\n}\n:host(.app-button-group-disabled) {\n  cursor: not-allowed;\n  opacity: 70%;\n}\n@property --tw-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-inset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-ring-color { syntax: "*"; inherits: false; }\n@property --tw-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-ring-color { syntax: "*"; inherits: false; }\n@property --tw-inset-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-ring-inset { syntax: "*"; inherits: false; }\n@property --tw-ring-offset-width { syntax: "<length>"; inherits: false; initial-value: 0px; }\n@property --tw-ring-offset-color { syntax: "*"; inherits: false; initial-value: #fff; }\n@property --tw-ring-offset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=button-group.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonGroupComponent, { className: "ButtonGroupComponent", filePath: "projects/ngverse/src/lib/ui/button-group/button-group.component.ts", lineNumber: 24 });
})();

// projects/ngverse/src/lib/ui/button-group/button-group-item.component.ts
var _c02 = ["*"];
var ButtonGroupItemComponent = class _ButtonGroupItemComponent {
  itemValue = input.required(...ngDevMode ? [{ debugName: "itemValue" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  buttonGroup = inject(ButtonGroupComponent);
  selected = computed(() => this.buttonGroup.isSelected(this.itemValue()), ...ngDevMode ? [{ debugName: "selected" }] : []);
  isDisabled = computed(() => {
    return this.disabled() || this.buttonGroup.isDisabled();
  }, ...ngDevMode ? [{ debugName: "isDisabled" }] : []);
  onSelect() {
    if (this.isDisabled()) {
      return;
    }
    this.buttonGroup.selectItem(this.itemValue());
  }
  static \u0275fac = function ButtonGroupItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonGroupItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonGroupItemComponent, selectors: [["app-button-group-item"]], inputs: { itemValue: [1, "itemValue"], disabled: [1, "disabled"] }, ngContentSelectors: _c02, decls: 2, vars: 5, consts: [["type", "button", 3, "click", "disabled"]], template: function ButtonGroupItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function ButtonGroupItemComponent_Template_button_click_0_listener() {
        return ctx.onSelect();
      });
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("selected", ctx.selected());
      \u0275\u0275domProperty("disabled", ctx.isDisabled());
      \u0275\u0275attribute("aria-pressed", ctx.selected())("aria-disabled", ctx.isDisabled());
    }
  }, styles: ['\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-50: oklch(0.984 0.003 247.858);\n    --color-slate-100: oklch(0.968 0.007 247.896);\n    --color-slate-200: oklch(0.929 0.013 255.508);\n    --color-slate-400: oklch(0.704 0.04 256.788);\n    --color-slate-600: oklch(0.446 0.043 257.281);\n    --color-slate-900: oklch(0.208 0.042 265.755);\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --font-weight-medium: 500;\n    --radius-md: 0.375rem;\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n}\n[_nghost-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: calc(var(--spacing) * 20);\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius-md);\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: transparent;\n  background-color: var(--color-white);\n  padding-inline: calc(var(--spacing) * 4);\n  padding-block: calc(var(--spacing) * 2);\n  font-size: var(--text-sm);\n  line-height: var(--tw-leading, var(--text-sm--line-height));\n  --tw-font-weight: var(--font-weight-medium);\n  font-weight: var(--font-weight-medium);\n  white-space: nowrap;\n  color: var(--color-slate-600);\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    outline-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    --tw-gradient-from,\n    --tw-gradient-via,\n    --tw-gradient-to;\n  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n  transition-duration: var(--tw-duration, var(--default-transition-duration));\n  --tw-duration: 200ms;\n  transition-duration: 200ms;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-slate-200);\n  color: var(--color-slate-900);\n}\n[_nghost-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-slate-900);\n  color: var(--color-slate-50);\n  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n}\n[_nghost-%COMP%]   button.selected[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-slate-900);\n  color: var(--color-slate-50);\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  background-color: var(--color-slate-100);\n  color: var(--color-slate-400);\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover {\n  background-color: var(--color-slate-100);\n  color: var(--color-slate-400);\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n  --tw-ring-color: var(--color-slate-900);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-offset-color: var(--color-white);\n  --tw-outline-style: none;\n  outline-style: none;\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n@property --tw-font-weight { syntax: "*"; inherits: false; }\n@property --tw-duration { syntax: "*"; inherits: false; }\n@property --tw-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-inset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-ring-color { syntax: "*"; inherits: false; }\n@property --tw-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-ring-color { syntax: "*"; inherits: false; }\n@property --tw-inset-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-ring-inset { syntax: "*"; inherits: false; }\n@property --tw-ring-offset-width { syntax: "<length>"; inherits: false; initial-value: 0px; }\n@property --tw-ring-offset-color { syntax: "*"; inherits: false; initial-value: #fff; }\n@property --tw-ring-offset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n\n\n/*# sourceMappingURL=button-group-item.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupItemComponent, [{
    type: Component,
    args: [{ selector: "app-button-group-item", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<button\n  type="button"\n  (click)="onSelect()"\n  [attr.aria-pressed]="selected()"\n  [class.selected]="selected()"\n  [disabled]="isDisabled()"\n  [attr.aria-disabled]="isDisabled()"\n>\n  <ng-content></ng-content>\n</button>\n', styles: ['/* projects/ngverse/src/lib/ui/button-group/button-group-item.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-50: oklch(0.984 0.003 247.858);\n    --color-slate-100: oklch(0.968 0.007 247.896);\n    --color-slate-200: oklch(0.929 0.013 255.508);\n    --color-slate-400: oklch(0.704 0.04 256.788);\n    --color-slate-600: oklch(0.446 0.043 257.281);\n    --color-slate-900: oklch(0.208 0.042 265.755);\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --font-weight-medium: 500;\n    --radius-md: 0.375rem;\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n}\n:host {\n  display: flex;\n}\n:host button {\n  display: inline-flex;\n  min-width: calc(var(--spacing) * 20);\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius-md);\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: transparent;\n  background-color: var(--color-white);\n  padding-inline: calc(var(--spacing) * 4);\n  padding-block: calc(var(--spacing) * 2);\n  font-size: var(--text-sm);\n  line-height: var(--tw-leading, var(--text-sm--line-height));\n  --tw-font-weight: var(--font-weight-medium);\n  font-weight: var(--font-weight-medium);\n  white-space: nowrap;\n  color: var(--color-slate-600);\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    outline-color,\n    text-decoration-color,\n    fill,\n    stroke,\n    --tw-gradient-from,\n    --tw-gradient-via,\n    --tw-gradient-to;\n  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n  transition-duration: var(--tw-duration, var(--default-transition-duration));\n  --tw-duration: 200ms;\n  transition-duration: 200ms;\n}\n:host button:hover {\n  background-color: var(--color-slate-200);\n  color: var(--color-slate-900);\n}\n:host button.selected {\n  background-color: var(--color-slate-900);\n  color: var(--color-slate-50);\n  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n}\n:host button.selected:hover {\n  background-color: var(--color-slate-900);\n  color: var(--color-slate-50);\n}\n:host button:disabled {\n  cursor: not-allowed;\n  background-color: var(--color-slate-100);\n  color: var(--color-slate-400);\n}\n:host button:disabled:hover {\n  background-color: var(--color-slate-100);\n  color: var(--color-slate-400);\n}\n:host button:focus-visible {\n  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor);\n  box-shadow:\n    var(--tw-inset-shadow),\n    var(--tw-inset-ring-shadow),\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow);\n  --tw-ring-color: var(--color-slate-900);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-offset-color: var(--color-white);\n  --tw-outline-style: none;\n  outline-style: none;\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n@property --tw-font-weight { syntax: "*"; inherits: false; }\n@property --tw-duration { syntax: "*"; inherits: false; }\n@property --tw-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-inset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-shadow-color { syntax: "*"; inherits: false; }\n@property --tw-ring-color { syntax: "*"; inherits: false; }\n@property --tw-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-inset-ring-color { syntax: "*"; inherits: false; }\n@property --tw-inset-ring-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n@property --tw-ring-inset { syntax: "*"; inherits: false; }\n@property --tw-ring-offset-width { syntax: "<length>"; inherits: false; initial-value: 0px; }\n@property --tw-ring-offset-color { syntax: "*"; inherits: false; initial-value: #fff; }\n@property --tw-ring-offset-shadow { syntax: "*"; inherits: false; initial-value: 0 0 #0000; }\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=button-group-item.component.css.map */\n'] }]
  }], null, { itemValue: [{ type: Input, args: [{ isSignal: true, alias: "itemValue", required: true }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonGroupItemComponent, { className: "ButtonGroupItemComponent", filePath: "projects/ngverse/src/lib/ui/button-group/button-group-item.component.ts", lineNumber: 17 });
})();

// projects/docs/src/app/examples/button-group/example-button-group-default.component.ts
var ExampleButtonGroupDefaultComponent = class _ExampleButtonGroupDefaultComponent {
  sizeControl = new FormControl("Medium", {
    nonNullable: true
  });
  sizeChanges = toSignal(this.sizeControl.valueChanges, {
    initialValue: this.sizeControl.value
  });
  selectedSize = computed(() => this.sizeChanges(), ...ngDevMode ? [{ debugName: "selectedSize" }] : []);
  static \u0275fac = function ExampleButtonGroupDefaultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonGroupDefaultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonGroupDefaultComponent, selectors: [["doc-example-button-group-default"]], decls: 12, vars: 5, consts: [[1, "flex", "flex-col", "gap-4"], [3, "formControl"], [3, "itemValue"], [1, "text-sm", "text-slate-600"], [1, "font-semibold", "text-slate-900"]], template: function ExampleButtonGroupDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-button-group", 1)(2, "app-button-group-item", 2);
      \u0275\u0275text(3, "Small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-button-group-item", 2);
      \u0275\u0275text(5, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-button-group-item", 2);
      \u0275\u0275text(7, "Large");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p", 3);
      \u0275\u0275text(9, " Selected size: ");
      \u0275\u0275elementStart(10, "span", 4);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.sizeControl);
      \u0275\u0275advance();
      \u0275\u0275property("itemValue", "Small");
      \u0275\u0275advance(2);
      \u0275\u0275property("itemValue", "Medium");
      \u0275\u0275advance(2);
      \u0275\u0275property("itemValue", "Large");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.selectedSize());
    }
  }, dependencies: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ReactiveFormsModule,
    NgControlStatus,
    FormControlDirective
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonGroupDefaultComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-group-default",
      imports: [
        ButtonGroupComponent,
        ButtonGroupItemComponent,
        ReactiveFormsModule
      ],
      template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="sizeControl">
        <app-button-group-item [itemValue]="'Small'"
          >Small</app-button-group-item
        >
        <app-button-group-item [itemValue]="'Medium'"
          >Medium</app-button-group-item
        >
        <app-button-group-item [itemValue]="'Large'"
          >Large</app-button-group-item
        >
      </app-button-group>
      <p class="text-sm text-slate-600">
        Selected size:
        <span class="font-semibold text-slate-900">{{ selectedSize() }}</span>
      </p>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonGroupDefaultComponent, { className: "ExampleButtonGroupDefaultComponent", filePath: "projects/docs/src/app/examples/button-group/example-button-group-default.component.ts", lineNumber: 35 });
})();

// projects/docs/src/app/examples/button-group/example-button-group-disabled.component.ts
var ExampleButtonGroupDisabledComponent = class _ExampleButtonGroupDisabledComponent {
  billingControl = new FormControl({
    value: "monthly",
    disabled: true
  });
  billingValue = toSignal(this.billingControl.valueChanges, {
    initialValue: this.billingControl.value
  });
  currentBilling = computed(() => this.billingValue() ?? "monthly", ...ngDevMode ? [{ debugName: "currentBilling" }] : []);
  toggleDisabled() {
    if (this.billingControl.disabled) {
      this.billingControl.enable();
    } else {
      this.billingControl.disable();
    }
  }
  static \u0275fac = function ExampleButtonGroupDisabledComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonGroupDisabledComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonGroupDisabledComponent, selectors: [["doc-example-button-group-disabled"]], decls: 13, vars: 5, consts: [[1, "flex", "flex-col", "gap-4"], [3, "formControl"], [3, "itemValue"], [1, "flex", "items-center", "gap-3"], [1, "text-sm", "text-slate-600"], [1, "font-semibold", "text-slate-900"], ["appButton", "", "variant", "ghost", 3, "click"]], template: function ExampleButtonGroupDisabledComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-button-group", 1)(2, "app-button-group-item", 2);
      \u0275\u0275text(3, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-button-group-item", 2);
      \u0275\u0275text(5, "Yearly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "p", 4);
      \u0275\u0275text(8, " Current selection: ");
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function ExampleButtonGroupDisabledComponent_Template_button_click_11_listener() {
        return ctx.toggleDisabled();
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.billingControl);
      \u0275\u0275advance();
      \u0275\u0275property("itemValue", "monthly");
      \u0275\u0275advance(2);
      \u0275\u0275property("itemValue", "yearly");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.currentBilling());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.billingControl.disabled ? "Enable" : "Disable", " group ");
    }
  }, dependencies: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ButtonComponent,
    ReactiveFormsModule,
    NgControlStatus,
    FormControlDirective
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonGroupDisabledComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-group-disabled",
      imports: [
        ButtonGroupComponent,
        ButtonGroupItemComponent,
        ButtonComponent,
        ReactiveFormsModule
      ],
      template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="billingControl">
        <app-button-group-item [itemValue]="'monthly'"
          >Monthly</app-button-group-item
        >
        <app-button-group-item [itemValue]="'yearly'"
          >Yearly</app-button-group-item
        >
      </app-button-group>
      <div class="flex items-center gap-3">
        <p class="text-sm text-slate-600">
          Current selection:
          <span class="font-semibold text-slate-900">{{
            currentBilling()
          }}</span>
        </p>
        <button appButton variant="ghost" (click)="toggleDisabled()">
          {{ billingControl.disabled ? 'Enable' : 'Disable' }} group
        </button>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonGroupDisabledComponent, { className: "ExampleButtonGroupDisabledComponent", filePath: "projects/docs/src/app/examples/button-group/example-button-group-disabled.component.ts", lineNumber: 41 });
})();

// projects/docs/src/app/examples/button-group/example-button-group-disabled-items.component.ts
var ExampleButtonGroupDisabledItemsComponent = class _ExampleButtonGroupDisabledItemsComponent {
  planControl = new FormControl("starter", { nonNullable: true });
  planValue = toSignal(this.planControl.valueChanges, {
    initialValue: this.planControl.value
  });
  planLabel = computed(() => {
    const value = this.planValue();
    return value === "starter" ? "Starter" : "Enterprise";
  }, ...ngDevMode ? [{ debugName: "planLabel" }] : []);
  static \u0275fac = function ExampleButtonGroupDisabledItemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonGroupDisabledItemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonGroupDisabledItemsComponent, selectors: [["doc-example-button-group-disabled-items"]], decls: 12, vars: 6, consts: [[1, "flex", "flex-col", "gap-4"], [3, "formControl"], [3, "itemValue"], [3, "itemValue", "disabled"], [1, "text-sm", "text-slate-600"], [1, "font-semibold", "text-slate-900"]], template: function ExampleButtonGroupDisabledItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-button-group", 1)(2, "app-button-group-item", 2);
      \u0275\u0275text(3, "Starter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-button-group-item", 3);
      \u0275\u0275text(5, "Pro (Coming Soon)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-button-group-item", 2);
      \u0275\u0275text(7, "Enterprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, " Selected plan: ");
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.planControl);
      \u0275\u0275advance();
      \u0275\u0275property("itemValue", "starter");
      \u0275\u0275advance(2);
      \u0275\u0275property("itemValue", "pro")("disabled", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("itemValue", "enterprise");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.planLabel());
    }
  }, dependencies: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ReactiveFormsModule,
    NgControlStatus,
    FormControlDirective
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonGroupDisabledItemsComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-group-disabled-items",
      imports: [
        ButtonGroupComponent,
        ButtonGroupItemComponent,
        ReactiveFormsModule
      ],
      template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="planControl">
        <app-button-group-item [itemValue]="'starter'"
          >Starter</app-button-group-item
        >
        <app-button-group-item [itemValue]="'pro'" [disabled]="true"
          >Pro (Coming Soon)</app-button-group-item
        >
        <app-button-group-item [itemValue]="'enterprise'"
          >Enterprise</app-button-group-item
        >
      </app-button-group>
      <p class="text-sm text-slate-600">
        Selected plan:
        <span class="font-semibold text-slate-900">{{ planLabel() }}</span>
      </p>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonGroupDisabledItemsComponent, { className: "ExampleButtonGroupDisabledItemsComponent", filePath: "projects/docs/src/app/examples/button-group/example-button-group-disabled-items.component.ts", lineNumber: 35 });
})();

// projects/docs/src/app/examples/button-group/example-button-group-filter.component.ts
var ExampleButtonGroupFilterComponent = class _ExampleButtonGroupFilterComponent {
  filterControl = new FormControl("all");
  filterValue = toSignal(this.filterControl.valueChanges, {
    initialValue: this.filterControl.value
  });
  filterLabel = computed(() => {
    const value = this.filterValue();
    if (!value) {
      return "None";
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }, ...ngDevMode ? [{ debugName: "filterLabel" }] : []);
  clearFilter() {
    this.filterControl.setValue(null);
  }
  static \u0275fac = function ExampleButtonGroupFilterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonGroupFilterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonGroupFilterComponent, selectors: [["doc-example-button-group-filter"]], decls: 15, vars: 5, consts: [[1, "flex", "flex-col", "gap-4"], [3, "formControl"], [3, "itemValue"], [1, "flex", "items-center", "gap-3"], [1, "text-sm", "text-slate-600"], [1, "font-semibold", "text-slate-900"], ["appButton", "", "variant", "ghost", 3, "click"]], template: function ExampleButtonGroupFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-button-group", 1)(2, "app-button-group-item", 2);
      \u0275\u0275text(3, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-button-group-item", 2);
      \u0275\u0275text(5, "Published");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-button-group-item", 2);
      \u0275\u0275text(7, "Draft");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "p", 4);
      \u0275\u0275text(10, " Active filter: ");
      \u0275\u0275elementStart(11, "span", 5);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 6);
      \u0275\u0275listener("click", function ExampleButtonGroupFilterComponent_Template_button_click_13_listener() {
        return ctx.clearFilter();
      });
      \u0275\u0275text(14, " Clear filter ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.filterControl);
      \u0275\u0275advance();
      \u0275\u0275property("itemValue", "all");
      \u0275\u0275advance(2);
      \u0275\u0275property("itemValue", "published");
      \u0275\u0275advance(2);
      \u0275\u0275property("itemValue", "draft");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.filterLabel());
    }
  }, dependencies: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ButtonComponent,
    ReactiveFormsModule,
    NgControlStatus,
    FormControlDirective
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonGroupFilterComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-group-filter",
      imports: [
        ButtonGroupComponent,
        ButtonGroupItemComponent,
        ButtonComponent,
        ReactiveFormsModule
      ],
      template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="filterControl">
        <app-button-group-item [itemValue]="'all'">All</app-button-group-item>
        <app-button-group-item [itemValue]="'published'"
          >Published</app-button-group-item
        >
        <app-button-group-item [itemValue]="'draft'"
          >Draft</app-button-group-item
        >
      </app-button-group>
      <div class="flex items-center gap-3">
        <p class="text-sm text-slate-600">
          Active filter:
          <span class="font-semibold text-slate-900">{{ filterLabel() }}</span>
        </p>
        <button appButton variant="ghost" (click)="clearFilter()">
          Clear filter
        </button>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonGroupFilterComponent, { className: "ExampleButtonGroupFilterComponent", filePath: "projects/docs/src/app/examples/button-group/example-button-group-filter.component.ts", lineNumber: 40 });
})();

// projects/docs/src/app/examples/button-group/example-button-group-with-icons.component.ts
var ExampleButtonGroupWithIconsComponent = class _ExampleButtonGroupWithIconsComponent {
  layoutControl = new FormControl("grid", { nonNullable: true });
  layoutChanges = toSignal(this.layoutControl.valueChanges, {
    initialValue: this.layoutControl.value
  });
  layout = computed(() => this.layoutChanges(), ...ngDevMode ? [{ debugName: "layout" }] : []);
  static \u0275fac = function ExampleButtonGroupWithIconsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonGroupWithIconsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonGroupWithIconsComponent, selectors: [["doc-example-button-group-with-icons"]], decls: 21, vars: 5, consts: [[1, "flex", "flex-col", "gap-4"], [3, "formControl"], [3, "itemValue"], [1, "flex", "items-center", "gap-2"], [1, "text-sm", "text-slate-600"], [1, "font-semibold", "text-slate-900"]], template: function ExampleButtonGroupWithIconsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-button-group", 1)(2, "app-button-group-item", 2)(3, "span", 3)(4, "app-font-icon");
      \u0275\u0275text(5, "grid_view");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Grid ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "app-button-group-item", 2)(8, "span", 3)(9, "app-font-icon");
      \u0275\u0275text(10, "view_list");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " List ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "app-button-group-item", 2)(13, "span", 3)(14, "app-font-icon");
      \u0275\u0275text(15, "view_kanban");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Board ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "p", 4);
      \u0275\u0275text(18, " Selected layout: ");
      \u0275\u0275elementStart(19, "span", 5);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formControl", ctx.layoutControl);
      \u0275\u0275advance();
      \u0275\u0275property("itemValue", "grid");
      \u0275\u0275advance(5);
      \u0275\u0275property("itemValue", "list");
      \u0275\u0275advance(5);
      \u0275\u0275property("itemValue", "kanban");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.layout());
    }
  }, dependencies: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    FontIconComponent,
    ReactiveFormsModule,
    NgControlStatus,
    FormControlDirective
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonGroupWithIconsComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-group-with-icons",
      imports: [
        ButtonGroupComponent,
        ButtonGroupItemComponent,
        FontIconComponent,
        ReactiveFormsModule
      ],
      template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="layoutControl">
        <app-button-group-item [itemValue]="'grid'">
          <span class="flex items-center gap-2">
            <app-font-icon>grid_view</app-font-icon>
            Grid
          </span>
        </app-button-group-item>
        <app-button-group-item [itemValue]="'list'">
          <span class="flex items-center gap-2">
            <app-font-icon>view_list</app-font-icon>
            List
          </span>
        </app-button-group-item>
        <app-button-group-item [itemValue]="'kanban'">
          <span class="flex items-center gap-2">
            <app-font-icon>view_kanban</app-font-icon>
            Board
          </span>
        </app-button-group-item>
      </app-button-group>
      <p class="text-sm text-slate-600">
        Selected layout:
        <span class="font-semibold text-slate-900">{{ layout() }}</span>
      </p>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonGroupWithIconsComponent, { className: "ExampleButtonGroupWithIconsComponent", filePath: "projects/docs/src/app/examples/button-group/example-button-group-with-icons.component.ts", lineNumber: 46 });
})();

// projects/docs/src/app/examples/button-group/preview-button-group.component.ts
var PreviewButtonGroupComponent = class _PreviewButtonGroupComponent {
  billingCycleControl = new FormControl("monthly", {
    nonNullable: true
  });
  static \u0275fac = function PreviewButtonGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreviewButtonGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewButtonGroupComponent, selectors: [["doc-preview-button-group"]], decls: 7, vars: 4, consts: [[3, "formControl"], [3, "itemValue"]], template: function PreviewButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-button-group", 0)(1, "app-button-group-item", 1);
      \u0275\u0275text(2, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-button-group-item", 1);
      \u0275\u0275text(4, "Quarterly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-button-group-item", 1);
      \u0275\u0275text(6, "Annually");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formControl", ctx.billingCycleControl);
      \u0275\u0275advance();
      \u0275\u0275property("itemValue", "monthly");
      \u0275\u0275advance(2);
      \u0275\u0275property("itemValue", "quarterly");
      \u0275\u0275advance(2);
      \u0275\u0275property("itemValue", "annually");
    }
  }, dependencies: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ReactiveFormsModule,
    NgControlStatus,
    FormControlDirective
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewButtonGroupComponent, [{
    type: Component,
    args: [{
      selector: "doc-preview-button-group",
      imports: [
        ButtonGroupComponent,
        ButtonGroupItemComponent,
        ReactiveFormsModule
      ],
      template: `
    <app-button-group [formControl]="billingCycleControl">
      <app-button-group-item [itemValue]="'monthly'"
        >Monthly</app-button-group-item
      >
      <app-button-group-item [itemValue]="'quarterly'"
        >Quarterly</app-button-group-item
      >
      <app-button-group-item [itemValue]="'annually'"
        >Annually</app-button-group-item
      >
    </app-button-group>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewButtonGroupComponent, { className: "PreviewButtonGroupComponent", filePath: "projects/docs/src/app/examples/button-group/preview-button-group.component.ts", lineNumber: 28 });
})();

// projects/docs/src/app/features/button-group-page/button-group-page.component.ts
var ROOT = "button-group";
var ButtonGroupPageComponent = class _ButtonGroupPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        ...this.sourceTreeBuilder.componentFiles("button-group-item", ROOT, [
          "spec.ts"
        ])
      ],
      hideName: true
    }
  ];
  apiInfo = {
    ariaDescription: "Button Group wraps related actions in a segmented control with single-selection behavior and keyboard accessibility.",
    entities: [
      {
        name: "ButtonGroupComponent",
        type: "component",
        selector: "app-button-group",
        description: "Container component that manages a collection of button group items with exclusive selection. Implements ControlValueAccessor for seamless integration with Angular forms.",
        formBindable: true
      },
      {
        name: "ButtonGroupItemComponent",
        type: "component",
        selector: "app-button-group-item",
        description: "Individual option projected into the button group. Emits its value when selected.",
        inputs: [
          {
            name: "itemValue",
            type: "unknown",
            description: "Value associated with the item.",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Disables the item and prevents it from being selected.",
            default: "false"
          }
        ]
      }
    ]
  };
  static \u0275fac = function ButtonGroupPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonGroupPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonGroupPageComponent, selectors: [["doc-button-group-page"]], decls: 17, vars: 4, consts: [["key", "button-group", 3, "subTitle", "label"], ["type", "component", "name", "button-group"], ["name", "button-group", 3, "sourceTree"], [3, "apiInfo"], ["name", "default"], ["name", "with-icons"], ["name", "disabled-items"], ["name", "disabled-group"], ["name", "filter"]], template: function ButtonGroupPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-preview");
      \u0275\u0275element(2, "doc-preview-button-group");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 1)(4, "doc-source-tree", 2)(5, "doc-api-info", 3);
      \u0275\u0275elementStart(6, "doc-examples")(7, "doc-example-item", 4);
      \u0275\u0275element(8, "doc-example-button-group-default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "doc-example-item", 5);
      \u0275\u0275element(10, "doc-example-button-group-with-icons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "doc-example-item", 6);
      \u0275\u0275element(12, "doc-example-button-group-disabled-items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "doc-example-item", 7);
      \u0275\u0275element(14, "doc-example-button-group-disabled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "doc-example-item", 8);
      \u0275\u0275element(16, "doc-example-button-group-filter");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "Group related actions into a single segmented control")("label", "Button Group");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    PreviewComponent,
    PreviewButtonGroupComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleButtonGroupDefaultComponent,
    ExampleButtonGroupDisabledComponent,
    ExampleButtonGroupDisabledItemsComponent,
    ExampleButtonGroupWithIconsComponent,
    ExampleButtonGroupFilterComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupPageComponent, [{
    type: Component,
    args: [{ selector: "doc-button-group-page", imports: [
      BlueprintPageComponent,
      PreviewComponent,
      PreviewButtonGroupComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ExamplesComponent,
      ExampleItemComponent,
      ExampleButtonGroupDefaultComponent,
      ExampleButtonGroupDisabledComponent,
      ExampleButtonGroupDisabledItemsComponent,
      ExampleButtonGroupWithIconsComponent,
      ExampleButtonGroupFilterComponent,
      ApiInfoComponent,
      ImplementationComponent
    ], template: `<doc-blueprint-page
  [subTitle]="'Group related actions into a single segmented control'"
  [label]="'Button Group'"
  key="button-group"
>
  <doc-preview>
    <doc-preview-button-group></doc-preview-button-group>
  </doc-preview>
  <doc-command-installation type="component" name="button-group">
  </doc-command-installation>
  <doc-source-tree
    [sourceTree]="sourceTree"
    name="button-group"
  ></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"></doc-api-info>
  <doc-examples>
    <doc-example-item name="default">
      <doc-example-button-group-default></doc-example-button-group-default>
    </doc-example-item>
    <doc-example-item name="with-icons">
      <doc-example-button-group-with-icons></doc-example-button-group-with-icons>
    </doc-example-item>
    <doc-example-item name="disabled-items">
      <doc-example-button-group-disabled-items></doc-example-button-group-disabled-items>
    </doc-example-item>
    <doc-example-item name="disabled-group">
      <doc-example-button-group-disabled></doc-example-button-group-disabled>
    </doc-example-item>
    <doc-example-item name="filter">
      <doc-example-button-group-filter></doc-example-button-group-filter>
    </doc-example-item>
  </doc-examples>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonGroupPageComponent, { className: "ButtonGroupPageComponent", filePath: "projects/docs/src/app/features/button-group-page/button-group-page.component.ts", lineNumber: 48 });
})();
export {
  ButtonGroupPageComponent
};
//# sourceMappingURL=chunk-XWRVQSVJ.js.map
