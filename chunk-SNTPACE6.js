import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-UGZKGHRZ.js";

// projects/docs/src/app/core/project-name/project-name.component.ts
function ProjectNameComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "code");
    \u0275\u0275text(1, "ngverse");
    \u0275\u0275domElementEnd();
  }
}
function ProjectNameComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " ngverse\n");
  }
}
var ProjectNameComponent = class _ProjectNameComponent {
  code = input(false, ...ngDevMode ? [{ debugName: "code" }] : []);
  static \u0275fac = function ProjectNameComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectNameComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectNameComponent, selectors: [["doc-project-name"]], inputs: { code: [1, "code"] }, decls: 2, vars: 1, template: function ProjectNameComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProjectNameComponent_Conditional_0_Template, 2, 0, "code")(1, ProjectNameComponent_Conditional_1_Template, 1, 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.code() ? 0 : 1);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline;\n}\n/*# sourceMappingURL=project-name.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectNameComponent, [{
    type: Component,
    args: [{ selector: "doc-project-name", imports: [], template: "@if (code()) {\n  <code>ngverse</code>\n} @else {\n  ngverse\n}\n", styles: ["/* projects/docs/src/app/core/project-name/project-name.component.css */\n:host {\n  display: inline;\n}\n/*# sourceMappingURL=project-name.component.css.map */\n"] }]
  }], null, { code: [{ type: Input, args: [{ isSignal: true, alias: "code", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectNameComponent, { className: "ProjectNameComponent", filePath: "projects/docs/src/app/core/project-name/project-name.component.ts", lineNumber: 9 });
})();

export {
  ProjectNameComponent
};
//# sourceMappingURL=chunk-SNTPACE6.js.map
