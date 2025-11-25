import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-2NN34RDL.js";

// projects/docs/src/app/blueprint/implementation/implementation.component.ts
var _c0 = ["*"];
var ImplementationComponent = class _ImplementationComponent {
  static \u0275fac = function ImplementationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImplementationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImplementationComponent, selectors: [["doc-implementation"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "prose"]], template: function ImplementationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImplementationComponent, [{
    type: Component,
    args: [{ selector: "doc-implementation", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="prose">\n  <ng-content></ng-content>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImplementationComponent, { className: "ImplementationComponent", filePath: "projects/docs/src/app/blueprint/implementation/implementation.component.ts", lineNumber: 10 });
})();

export {
  ImplementationComponent
};
//# sourceMappingURL=chunk-AC2HR3YF.js.map
