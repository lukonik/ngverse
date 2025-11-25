import {
  Meta,
  Title
} from "./chunk-232UVHOA.js";
import {
  Component,
  DOCUMENT,
  Input,
  effect,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";

// projects/docs/src/app/blueprint/blueprint-page/blueprint-page.component.ts
var _c0 = [[["doc-preview"]], [["doc-show-case"]], [["doc-prerequisites"]], [["doc-command-installation"]], [["doc-source-tree"]], [["doc-examples"]], [["doc-api-info"]], [["doc-implementation"]]];
var _c1 = ["doc-preview", "doc-show-case", "doc-prerequisites", "doc-command-installation", "doc-source-tree", "doc-examples", "doc-api-info", "doc-implementation"];
function BlueprintPageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subTitle());
  }
}
var BlueprintPageComponent = class _BlueprintPageComponent {
  label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
  subTitle = input(...ngDevMode ? [void 0, { debugName: "subTitle" }] : []);
  title = inject(Title);
  meta = inject(Meta);
  document = inject(DOCUMENT);
  key = input(...ngDevMode ? [void 0, { debugName: "key" }] : []);
  constructor() {
    effect(() => {
      const label = this.label();
      const subTitle = this.subTitle();
      this.title.setTitle(`${label} | ngverse`);
      if (subTitle) {
        this.meta.updateTag({ name: "description", content: subTitle });
      }
      this.meta.addTags([
        { property: "og:title", content: this.label() },
        {
          property: "og:description",
          content: this.subTitle() ?? this.label()
        },
        {
          property: "og:image",
          content: "https://lukonik.github.io/ngverse/logo.png"
        },
        { property: "og:image:alt", content: "NgVerse logo" },
        { property: "og:url", content: this.document.location.href },
        { property: "og:type", content: "website" }
      ]);
    });
  }
  static \u0275fac = function BlueprintPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlueprintPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlueprintPageComponent, selectors: [["doc-blueprint-page"]], inputs: { label: [1, "label"], subTitle: [1, "subTitle"], key: [1, "key"] }, ngContentSelectors: _c1, decls: 13, vars: 2, consts: [[1, "blueprint-page", "px-5", "pt-10", "lg:px-0"], [1, "mb-2", "text-4xl", "font-bold", "capitalize", "lg:text-5xl"], [1, "m-0", "text-lg", "font-light"]], template: function BlueprintPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, BlueprintPageComponent_Conditional_4_Template, 2, 1, "p", 2);
      \u0275\u0275domElementEnd();
      \u0275\u0275projection(5);
      \u0275\u0275projection(6, 1);
      \u0275\u0275projection(7, 2);
      \u0275\u0275projection(8, 3);
      \u0275\u0275projection(9, 4);
      \u0275\u0275projection(10, 5);
      \u0275\u0275projection(11, 6);
      \u0275\u0275projection(12, 7);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.label(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.subTitle() ? 4 : -1);
    }
  }, styles: ["\n\n.blueprint-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n/*# sourceMappingURL=blueprint-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlueprintPageComponent, [{
    type: Component,
    args: [{ selector: "doc-blueprint-page", template: '<div class="blueprint-page px-5 pt-10 lg:px-0">\n  <div>\n    <h1 class="mb-2 text-4xl font-bold capitalize lg:text-5xl">\n      {{ label() }}\n    </h1>\n    @if (subTitle()) {\n      <p class="m-0 text-lg font-light">{{ subTitle() }}</p>\n    }\n  </div>\n  <ng-content select="doc-preview"></ng-content>\n  <ng-content select="doc-show-case"></ng-content>\n\n  <ng-content select="doc-prerequisites"></ng-content>\n  <ng-content select="doc-command-installation"></ng-content>\n\n  <ng-content select="doc-source-tree"></ng-content>\n\n  <ng-content select="doc-examples"></ng-content>\n\n  <ng-content select="doc-api-info"></ng-content>\n  <ng-content select="doc-implementation"></ng-content>\n</div>\n', styles: ["/* projects/docs/src/app/blueprint/blueprint-page/blueprint-page.component.css */\n.blueprint-page {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n/*# sourceMappingURL=blueprint-page.component.css.map */\n"] }]
  }], () => [], { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], subTitle: [{ type: Input, args: [{ isSignal: true, alias: "subTitle", required: false }] }], key: [{ type: Input, args: [{ isSignal: true, alias: "key", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlueprintPageComponent, { className: "BlueprintPageComponent", filePath: "projects/docs/src/app/blueprint/blueprint-page/blueprint-page.component.ts", lineNumber: 10 });
})();

export {
  BlueprintPageComponent
};
//# sourceMappingURL=chunk-GMGVBBLD.js.map
