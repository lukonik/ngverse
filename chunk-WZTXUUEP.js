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
import {
  DividerComponent
} from "./chunk-FK22TT2X.js";
import "./chunk-4YTCSZ5T.js";
import "./chunk-XGFB36A5.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-633NCXCE.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-K3WRTE43.js";
import "./chunk-232UVHOA.js";
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
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/divider/show-case-divider/show-case-divider.component.ts
var ShowCaseDividerComponent = class _ShowCaseDividerComponent {
  static \u0275fac = function ShowCaseDividerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseDividerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseDividerComponent, selectors: [["doc-show-case-divider"]], decls: 30, vars: 2, consts: [[1, "section-divider"], [1, "vertical"], [1, "divider", 3, "vertical"]], template: function ShowCaseDividerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "b");
      \u0275\u0275text(1, "Horizontal divider");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "ul")(3, "li")(4, "p");
      \u0275\u0275text(5, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-divider");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "li")(8, "p");
      \u0275\u0275text(9, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-divider");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "li")(12, "p");
      \u0275\u0275text(13, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(14, "app-divider", 0);
      \u0275\u0275elementStart(15, "div")(16, "b");
      \u0275\u0275text(17, "Vertical divider");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "ul", 1)(19, "li")(20, "p");
      \u0275\u0275text(21, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "app-divider", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "p");
      \u0275\u0275text(25, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "app-divider", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "li")(28, "p");
      \u0275\u0275text(29, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275property("vertical", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("vertical", true);
    }
  }, dependencies: [DividerComponent], styles: ["\n\n.vertical[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 16px;\n}\n.vertical[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n}\n.vertical[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\np[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n.section-divider[_ngcontent-%COMP%] {\n  margin: 32px 0;\n}\n/*# sourceMappingURL=show-case-divider.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseDividerComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-divider", imports: [DividerComponent], template: `<b>Horizontal divider</b>
<ul>
  <li>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book
    </p>
    <app-divider />
  </li>
  <li>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book
    </p>
    <app-divider />
  </li>
  <li>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book
    </p>
  </li>
</ul>
<app-divider class="section-divider" />
<div>
  <b>Vertical divider</b>
  <ul class="vertical">
    <li>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
      <app-divider class="divider" [vertical]="true" />
    </li>
    <li>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
      <app-divider class="divider" [vertical]="true" />
    </li>
    <li>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
    </li>
  </ul>
</div>
`, styles: ["/* projects/docs/src/app/examples/divider/show-case-divider/show-case-divider.component.css */\n.vertical {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 16px;\n}\n.vertical li {\n  display: flex;\n}\n.vertical .divider {\n  margin-left: 16px;\n}\np {\n  margin: 12px 0;\n}\n.section-divider {\n  margin: 32px 0;\n}\n/*# sourceMappingURL=show-case-divider.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseDividerComponent, { className: "ShowCaseDividerComponent", filePath: "projects/docs/src/app/examples/divider/show-case-divider/show-case-divider.component.ts", lineNumber: 10 });
})();

// projects/docs/src/app/features/divider-page/divider-page.component.ts
var ROOT = "divider";
var DividerPageComponent = class _DividerPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: "divider",
      files: [...this.sourceTreeBuilder.fullInlineComponent(ROOT, ROOT)],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role",
    entities: [
      {
        name: "DividerComponent",
        type: "component",
        selector: "app-divider",
        inputs: [
          {
            name: "vertical",
            type: "boolean",
            description: "Specifies whether the divider is vertical.",
            default: "false"
          }
        ]
      }
    ]
  };
  static \u0275fac = function DividerPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DividerPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DividerPageComponent, selectors: [["doc-divider-page"]], decls: 6, vars: 2, consts: [["label", "divider", "subTitle", "Divider component is used to visually separate content into distinct sections, it can be either horizontal or a vertical line."], ["name", "divider"], ["type", "component", "name", "divider"], ["name", "divider", 3, "sourceTree"], [3, "apiInfo"]], template: function DividerPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-divider");
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
    SourceTreeComponent,
    ApiInfoComponent,
    ShowCaseDividerComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerPageComponent, [{
    type: Component,
    args: [{ selector: "doc-divider-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ShowCaseDividerComponent
    ], template: '<doc-blueprint-page\n  label="divider"\n  subTitle="Divider component is used to visually separate content into distinct sections, it can be either horizontal or a vertical line."\n>\n  <doc-show-case name="divider">\n    <doc-show-case-divider></doc-show-case-divider>\n  </doc-show-case>\n  <doc-command-installation type="component" name="divider">\n  </doc-command-installation>\n  <doc-source-tree [sourceTree]="sourceTree" name="divider"></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DividerPageComponent, { className: "DividerPageComponent", filePath: "projects/docs/src/app/features/divider-page/divider-page.component.ts", lineNumber: 30 });
})();
export {
  DividerPageComponent
};
//# sourceMappingURL=chunk-WZTXUUEP.js.map
