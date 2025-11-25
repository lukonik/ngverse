import {
  SkeletonComponent
} from "./chunk-SHYYMVML.js";
import {
  ApiInfoComponent
} from "./chunk-HUMT7RIH.js";
import "./chunk-NLXPGKL3.js";
import {
  CommandInstallationComponent
} from "./chunk-6YZNQOOO.js";
import {
  ShowCaseComponent
} from "./chunk-3W43G4LV.js";
import "./chunk-Y4J6H3UA.js";
import {
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-NMRQOH2N.js";
import {
  BlueprintPageComponent
} from "./chunk-WVO5Q45R.js";
import "./chunk-J4OMZXTK.js";
import "./chunk-QF5VCJ6S.js";
import "./chunk-MKNWGWE3.js";
import "./chunk-VQYCA752.js";
import "./chunk-GAYAR7LB.js";
import "./chunk-4UYB5JXN.js";
import "./chunk-JX5YVH27.js";
import "./chunk-RBCCWOK3.js";
import "./chunk-EPTODCGW.js";
import "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/skeleton/show-case-skeleton/show-case-skeleton.component.ts
var ShowCaseSkeletonComponent = class _ShowCaseSkeletonComponent {
  static \u0275fac = function ShowCaseSkeletonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseSkeletonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseSkeletonComponent, selectors: [["doc-show-case-skeleton"]], decls: 3, vars: 0, consts: [[1, "h-16", "w-16", "rounded-full"], [1, "my-4", "h-6", "w-full", "rounded-md"], [1, "h-6", "w-full", "rounded-md"]], template: function ShowCaseSkeletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-skeleton", 0)(1, "app-skeleton", 1)(2, "app-skeleton", 2);
    }
  }, dependencies: [SkeletonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseSkeletonComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-skeleton", imports: [SkeletonComponent], template: '<app-skeleton class="h-16 w-16 rounded-full"></app-skeleton>\n<app-skeleton class="my-4 h-6 w-full rounded-md"></app-skeleton>\n<app-skeleton class="h-6 w-full rounded-md"></app-skeleton>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseSkeletonComponent, { className: "ShowCaseSkeletonComponent", filePath: "projects/docs/src/app/examples/skeleton/show-case-skeleton/show-case-skeleton.component.ts", lineNumber: 10 });
})();

// projects/docs/src/app/features/skeleton-page/skeleton-page.component.ts
var ROOT = "skeleton";
var SkeletonPageComponent = class _SkeletonPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: "skeleton",
      files: [...this.sourceTreeBuilder.inlineComponent(ROOT, ROOT)],
      hideName: true
    }
  ];
  apiInfo = {
    entities: [
      {
        name: "SkeletonComponent",
        type: "component",
        selector: "app-skeleton",
        description: `The Skeleton component is an placeholder used to indicate loading content.
        It can be styled with CSS to customize its size, shape.`
      }
    ]
  };
  static \u0275fac = function SkeletonPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkeletonPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonPageComponent, selectors: [["doc-skeleton-page"]], decls: 6, vars: 2, consts: [["label", "Skeleton", "subTitle", "Skeleton is a placeholder to display while content is loading"], ["name", "skeleton"], ["type", "component", "name", "skeleton"], ["name", "skeleton", 3, "sourceTree"], [3, "apiInfo"]], template: function SkeletonPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-skeleton");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    CommandInstallationComponent,
    ShowCaseSkeletonComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonPageComponent, [{
    type: Component,
    args: [{ selector: "doc-skeleton-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      CommandInstallationComponent,
      ShowCaseSkeletonComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: '<doc-blueprint-page\n  label="Skeleton"\n  subTitle="Skeleton is a placeholder to display while content is loading"\n>\n  <doc-show-case name="skeleton">\n    <doc-show-case-skeleton></doc-show-case-skeleton>\n  </doc-show-case>\n  <doc-command-installation type="component" name="skeleton">\n  </doc-command-installation>\n  <doc-source-tree [sourceTree]="sourceTree" name="skeleton"></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonPageComponent, { className: "SkeletonPageComponent", filePath: "projects/docs/src/app/features/skeleton-page/skeleton-page.component.ts", lineNumber: 29 });
})();
export {
  SkeletonPageComponent
};
//# sourceMappingURL=chunk-6ENPYY7A.js.map
