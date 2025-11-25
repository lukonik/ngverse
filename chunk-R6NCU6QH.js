import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-2NN34RDL.js";

// projects/docs/src/app/blueprint/api-info/api-description/api-description.component.ts
var _c0 = ["*"];
var ApiDescriptionComponent = class _ApiDescriptionComponent {
  static \u0275fac = function ApiDescriptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiDescriptionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiDescriptionComponent, selectors: [["doc-api-description"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "prose-md", "prose", "mb-8", "w-full", "max-w-max"]], template: function ApiDescriptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiDescriptionComponent, [{
    type: Component,
    args: [{ selector: "doc-api-description", imports: [], template: '<div class="prose-md prose mb-8 w-full max-w-max">\n  <ng-content></ng-content>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiDescriptionComponent, { className: "ApiDescriptionComponent", filePath: "projects/docs/src/app/blueprint/api-info/api-description/api-description.component.ts", lineNumber: 9 });
})();

export {
  ApiDescriptionComponent
};
//# sourceMappingURL=chunk-R6NCU6QH.js.map
