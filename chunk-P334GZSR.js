import {
  BlogPageComponent
} from "./chunk-S2RMWVXR.js";
import {
  FileService,
  SourceCodeComponent
} from "./chunk-633NCXCE.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-K3WRTE43.js";
import "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/pages/ui/ui-theming-page/ui-theming-page.component.ts
var UiThemingPageComponent = class _UiThemingPageComponent {
  globalsCode = signal("", ...ngDevMode ? [{ debugName: "globalsCode" }] : []);
  fileService = inject(FileService);
  ngOnInit() {
    this.fileService.getFile("ngverse/ngverse.css").subscribe((data) => {
      this.globalsCode.set(data);
    });
  }
  static \u0275fac = function UiThemingPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiThemingPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiThemingPageComponent, selectors: [["doc-ui-theming-page"]], decls: 31, vars: 1, consts: [["label", "Theming"], [1, "font-bold"], ["language", "css", 3, "code"], [1, "!mt-6"], [1, "italic"]], template: function UiThemingPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blog-page", 0)(1, "p")(2, "span", 1);
      \u0275\u0275text(3, "UI");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " module comes with a predefined Tailwind CSS theme configuration, that is shared across the components. It includes light and dark mode. copy the styles and paste it into your ");
      \u0275\u0275elementStart(5, "code");
      \u0275\u0275text(6, "styles.css");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, " For example, by default, the primary color is: ");
      \u0275\u0275elementStart(9, "code");
      \u0275\u0275text(10, "--color-blue-500 ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " If you want to change it to amber, simply update it to: ");
      \u0275\u0275elementStart(12, "code");
      \u0275\u0275text(13, "--color-amber-500");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " This makes customization easy and ensures design consistency across your project. ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "doc-source-code", 2);
      \u0275\u0275elementStart(16, "p", 3);
      \u0275\u0275text(17, "CSS Variables follow the following pattern:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "ul")(19, "li")(20, "code");
      \u0275\u0275text(21, "--color-name");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, ": Background color");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "code");
      \u0275\u0275text(25, "--color-name-foreground");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, ": Text color");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, " These styles are meant to help you get started quickly with beautiful components that share a consistent look and feel. Your designers can explore countless ways to customize the design\u2014such as updating color tokens and more. Don\u2019t hesitate to modify the component styles directly to suit your needs. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p", 4);
      \u0275\u0275text(30, "After all the steps you are ready to add components.");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("code", ctx.globalsCode());
    }
  }, dependencies: [BlogPageComponent, SourceCodeComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiThemingPageComponent, [{
    type: Component,
    args: [{ selector: "doc-ui-theming-page", imports: [BlogPageComponent, SourceCodeComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<doc-blog-page label="Theming">\n  <p>\n    <span class="font-bold">UI</span> module comes with a predefined Tailwind\n    CSS theme configuration, that is shared across the components. It includes\n    light and dark mode. copy the styles and paste it into your\n    <code>styles.css</code>\n  </p>\n  <p>\n    For example, by default, the primary color is:\n    <code>--color-blue-500 </code> If you want to change it to amber, simply\n    update it to: <code>--color-amber-500</code>\n    This makes customization easy and ensures design consistency across your\n    project.\n  </p>\n\n  <doc-source-code language="css" [code]="globalsCode()"></doc-source-code>\n\n  <p class="!mt-6">CSS Variables follow the following pattern:</p>\n  <ul>\n    <li><code>--color-name</code>: Background color</li>\n    <li><code>--color-name-foreground</code>: Text color</li>\n  </ul>\n  <p>\n    These styles are meant to help you get started quickly with beautiful\n    components that share a consistent look and feel. Your designers can explore\n    countless ways to customize the design\u2014such as updating color tokens and\n    more. Don\u2019t hesitate to modify the component styles directly to suit your\n    needs.\n  </p>\n  <p class="italic">After all the steps you are ready to add components.</p>\n</doc-blog-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiThemingPageComponent, { className: "UiThemingPageComponent", filePath: "projects/docs/src/app/pages/ui/ui-theming-page/ui-theming-page.component.ts", lineNumber: 19 });
})();
export {
  UiThemingPageComponent
};
//# sourceMappingURL=chunk-P334GZSR.js.map
