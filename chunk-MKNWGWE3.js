import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent
} from "./chunk-UGZKGHRZ.js";

// projects/ngverse/src/lib/ui/divider/divider.component.ts
var DividerComponent = class _DividerComponent {
  vertical = input(false, ...ngDevMode ? [{ debugName: "vertical" }] : []);
  static \u0275fac = function DividerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DividerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DividerComponent, selectors: [["app-divider"]], hostAttrs: ["role", "separator"], hostVars: 3, hostBindings: function DividerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-orientation", ctx.vertical() ? "vertical" : "horizontal");
      \u0275\u0275classProp("vertical", ctx.vertical());
    }
  }, inputs: { vertical: [1, "vertical"] }, decls: 0, vars: 0, template: function DividerComponent_Template(rf, ctx) {
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background-color: var(--color-divider);\n  height: 1px;\n  width: 100%;\n}\n.vertical[_nghost-%COMP%] {\n  height: 100%;\n  width: 1px;\n}\n/*# sourceMappingURL=divider.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerComponent, [{
    type: Component,
    args: [{ selector: "app-divider", imports: [], template: ``, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "separator",
      "[class.vertical]": "vertical()",
      "[attr.aria-orientation]": 'vertical() ? "vertical" : "horizontal"'
    }, styles: ["/* angular:styles/component:css;7e845b3cccdbf16b54beb5fc37dd67e2794d433989c5f267c8b5ed4eb4937d32;/home/runner/work/ngverse/ngverse/projects/ngverse/src/lib/ui/divider/divider.component.ts */\n:host {\n  display: block;\n  background-color: var(--color-divider);\n  height: 1px;\n  width: 100%;\n}\n:host.vertical {\n  height: 100%;\n  width: 1px;\n}\n/*# sourceMappingURL=divider.component.css.map */\n"] }]
  }], null, { vertical: [{ type: Input, args: [{ isSignal: true, alias: "vertical", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DividerComponent, { className: "DividerComponent", filePath: "projects/ngverse/src/lib/ui/divider/divider.component.ts", lineNumber: 27 });
})();

export {
  DividerComponent
};
//# sourceMappingURL=chunk-MKNWGWE3.js.map
