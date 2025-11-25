import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-2NN34RDL.js";

// projects/ngverse/src/lib/ui/form-field/label.component.ts
var _c0 = ["*"];
var LabelComponent = class _LabelComponent {
  static \u0275fac = function LabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LabelComponent, selectors: [["app-label"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelComponent, [{
    type: Component,
    args: [{
      selector: "app-label",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabelComponent, { className: "LabelComponent", filePath: "projects/ngverse/src/lib/ui/form-field/label.component.ts", lineNumber: 8 });
})();

export {
  LabelComponent
};
//# sourceMappingURL=chunk-X4ETKPWP.js.map
