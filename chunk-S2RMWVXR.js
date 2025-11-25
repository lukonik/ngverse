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
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2NN34RDL.js";

// projects/docs/src/app/blog/blog-page/blog-page.component.ts
var _c0 = ["*"];
var BlogPageComponent = class _BlogPageComponent {
  label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
  title = inject(Title);
  meta = inject(Meta);
  document = inject(DOCUMENT);
  constructor() {
    effect(() => {
      const label = this.label();
      this.title.setTitle(`${label} | ngverse`);
      this.meta.addTags([
        { property: "og:title", content: this.label() },
        {
          property: "og:description"
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
  static \u0275fac = function BlogPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogPageComponent, selectors: [["doc-blog-page"]], inputs: { label: [1, "label"] }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "prose", "prose-sm", "px-2.5", "pt-10", "lg:prose-lg", "dark:prose-invert", "prose-headings:my-8", "prose-h1:mt-0", "prose-h4:my-4", "prose-p:my-3"]], template: function BlogPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "article", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275projection(3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label());
    }
  }, styles: ["\n\n.prose[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=blog-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogPageComponent, [{
    type: Component,
    args: [{ selector: "doc-blog-page", imports: [], template: '<article\n  class="prose prose-sm px-2.5 pt-10 lg:prose-lg dark:prose-invert prose-headings:my-8 prose-h1:mt-0 prose-h4:my-4 prose-p:my-3"\n>\n  <h1>{{ label() }}</h1>\n  <ng-content></ng-content>\n</article>\n', styles: ["/* projects/docs/src/app/blog/blog-page/blog-page.component.css */\n.prose {\n  max-width: 100%;\n}\n/*# sourceMappingURL=blog-page.component.css.map */\n"] }]
  }], () => [], { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogPageComponent, { className: "BlogPageComponent", filePath: "projects/docs/src/app/blog/blog-page/blog-page.component.ts", lineNumber: 11 });
})();

export {
  BlogPageComponent
};
//# sourceMappingURL=chunk-S2RMWVXR.js.map
