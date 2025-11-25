import {
  ApiInfoComponent
} from "./chunk-BF7ARAHW.js";
import "./chunk-APVNZA6G.js";
import {
  CommandInstallationComponent
} from "./chunk-CTKIHVNQ.js";
import {
  ShowCaseComponent
} from "./chunk-NXTRMWBG.js";
import "./chunk-FVG5D4KT.js";
import {
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-PQL4JFHV.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import "./chunk-3GLWUNBJ.js";
import "./chunk-BC37M6ZP.js";
import "./chunk-FK22TT2X.js";
import "./chunk-4YTCSZ5T.js";
import "./chunk-XGFB36A5.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-633NCXCE.js";
import "./chunk-ICIB3IHR.js";
import {
  FontIconComponent
} from "./chunk-K3WRTE43.js";
import "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
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

// projects/docs/src/app/examples/font-icon/show-case-font-icon/show-case-font-icon.component.ts
var ShowCaseFontIconComponent = class _ShowCaseFontIconComponent {
  static \u0275fac = function ShowCaseFontIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseFontIconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseFontIconComponent, selectors: [["doc-show-case-font-icon"]], decls: 9, vars: 0, consts: [[1, "flex", "gap-1"], ["title", "filled", "fill", ""], [1, "text-yellow-400"], ["fill", "", 1, "text-yellow-400"]], template: function ShowCaseFontIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-font-icon");
      \u0275\u0275text(2, "star");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-font-icon", 1);
      \u0275\u0275text(4, "star");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-font-icon", 2);
      \u0275\u0275text(6, "star");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-font-icon", 3);
      \u0275\u0275text(8, "star");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [FontIconComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseFontIconComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-font-icon", imports: [FontIconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="flex gap-1">\n  <app-font-icon>star</app-font-icon>\n  <app-font-icon title="filled" fill>star</app-font-icon>\n  <app-font-icon class="text-yellow-400">star</app-font-icon>\n  <app-font-icon fill class="text-yellow-400">star</app-font-icon>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseFontIconComponent, { className: "ShowCaseFontIconComponent", filePath: "projects/docs/src/app/examples/font-icon/show-case-font-icon/show-case-font-icon.component.ts", lineNumber: 11 });
})();

// projects/docs/src/app/pages/ui/font-icon-page/font-icon-page.component.ts
var ROOT = "font-icon";
var FontIconPageComponent = class _FontIconPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [...this.sourceTreeBuilder.fullInlineComponent("font-icon", ROOT)],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role",
    entities: [
      {
        name: "FontIconComponent",
        type: "component",
        selector: "app-font-icon",
        inputs: [
          {
            name: "ng-content",
            type: "ng-content",
            description: "The name of the icon to display."
          },
          {
            name: "size",
            type: "number | string",
            default: "24px",
            description: "The size of the icon."
          },
          {
            name: "fill",
            type: "boolean",
            description: "Whether the icon should be filled.",
            default: "false"
          },
          {
            name: "variant",
            type: "outlined | rounded | sharp",
            default: "outlined",
            description: "The variant of the icon."
          }
        ]
      }
    ]
  };
  static \u0275fac = function FontIconPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FontIconPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FontIconPageComponent, selectors: [["doc-font-icon-page"]], decls: 6, vars: 3, consts: [["subTitle", "The Font Icon component displayes font icons like Material Fonts", 3, "label"], ["name", "font-icon"], ["type", "component", "name", "font-icon"], ["name", "font-icon", 3, "sourceTree"], [3, "apiInfo"]], template: function FontIconPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-font-icon");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("label", "Font Icon");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseFontIconComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FontIconPageComponent, [{
    type: Component,
    args: [{ selector: "doc-font-icon-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseFontIconComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<doc-blueprint-page
  subTitle="The Font Icon component displayes font icons like Material Fonts"
  [label]="'Font Icon'"
>
  <doc-show-case name="font-icon">
    <doc-show-case-font-icon></doc-show-case-font-icon>
  </doc-show-case>
  <doc-command-installation type="component" name="font-icon">
  </doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="font-icon"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FontIconPageComponent, { className: "FontIconPageComponent", filePath: "projects/docs/src/app/pages/ui/font-icon-page/font-icon-page.component.ts", lineNumber: 32 });
})();
export {
  FontIconPageComponent
};
//# sourceMappingURL=chunk-G5HJT6VM.js.map
