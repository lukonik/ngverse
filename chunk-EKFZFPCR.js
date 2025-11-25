import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleMap,
  ɵɵstyleProp
} from "./chunk-UGZKGHRZ.js";

// node_modules/@angular/cdk/fesm2022/_css-pixel-value-chunk.mjs
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}

// node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// projects/ngverse/src/lib/ui/font-icon/font-icon.component.ts
var _c0 = ["*"];
var FontIconComponent = class _FontIconComponent {
  size = input("24px", ...ngDevMode ? [{ debugName: "size", transform: (value) => coerceCssPixelValue(numberAttribute(value)) }] : [{
    transform: (value) => coerceCssPixelValue(numberAttribute(value))
  }]);
  variant = input("outlined", ...ngDevMode ? [{ debugName: "variant" }] : []);
  variantClass = computed(() => {
    if (this.variant()) {
      return `material-symbols-${this.variant()}`;
    }
    return void 0;
  }, ...ngDevMode ? [{ debugName: "variantClass" }] : []);
  fill = input(false, ...ngDevMode ? [{ debugName: "fill", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
  fillStyles = computed(() => {
    if (this.fill()) {
      return { fontVariationSettings: "'FILL' 1" };
    }
    return void 0;
  }, ...ngDevMode ? [{ debugName: "fillStyles" }] : []);
  static \u0275fac = function FontIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FontIconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FontIconComponent, selectors: [["app-font-icon"]], hostAttrs: ["role", "img"], hostVars: 7, hostBindings: function FontIconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-hidden", true);
      \u0275\u0275styleMap(ctx.fillStyles());
      \u0275\u0275classMap(ctx.variantClass());
      \u0275\u0275styleProp("font-size", ctx.size());
    }
  }, inputs: { size: [1, "size"], variant: [1, "variant"], fill: [1, "fill"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function FontIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=font-icon.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FontIconComponent, [{
    type: Component,
    args: [{ selector: "app-font-icon", imports: [], template: `<ng-content></ng-content>`, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "img",
      "[attr.aria-hidden]": "true",
      "[class]": "variantClass()",
      "[style.fontSize]": "size()",
      "[style]": "fillStyles()"
    }, styles: ["/* angular:styles/component:css;4f744392aa4dcb465ff7a57553c2fec8eb0adf6462dae63799e4c75649252070;/home/runner/work/ngverse/ngverse/projects/ngverse/src/lib/ui/font-icon/font-icon.component.ts */\n:host {\n  display: flex;\n}\n/*# sourceMappingURL=font-icon.component.css.map */\n"] }]
  }], null, { size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], fill: [{ type: Input, args: [{ isSignal: true, alias: "fill", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FontIconComponent, { className: "FontIconComponent", filePath: "projects/ngverse/src/lib/ui/font-icon/font-icon.component.ts", lineNumber: 31 });
})();

export {
  coerceNumberProperty,
  coerceElement,
  coerceArray,
  coerceCssPixelValue,
  coerceBooleanProperty,
  FontIconComponent
};
//# sourceMappingURL=chunk-EKFZFPCR.js.map
