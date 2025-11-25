import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent
} from "./chunk-2NN34RDL.js";

// projects/ngverse/src/lib/ui/skeleton/skeleton.component.ts
var SkeletonComponent = class _SkeletonComponent {
  static \u0275fac = function SkeletonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkeletonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonComponent, selectors: [["app-skeleton"]], hostAttrs: [1, "animate-pulse", "block", "bg-mute"], decls: 0, vars: 0, template: function SkeletonComponent_Template(rf, ctx) {
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonComponent, [{
    type: Component,
    args: [{
      selector: "app-skeleton",
      template: ``,
      host: {
        class: "animate-pulse block bg-mute"
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonComponent, { className: "SkeletonComponent", filePath: "projects/ngverse/src/lib/ui/skeleton/skeleton.component.ts", lineNumber: 11 });
})();

export {
  SkeletonComponent
};
//# sourceMappingURL=chunk-IDBH4QGV.js.map
