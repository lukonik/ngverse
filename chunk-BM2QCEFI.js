import {
  PrerequisitesComponent
} from "./chunk-4XDKCJNW.js";
import {
  DarkModeService,
  DarkModeToggleComponent
} from "./chunk-BNA7NIUS.js";
import "./chunk-3AYE667Y.js";
import "./chunk-FCEZILEW.js";
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
import "./chunk-K3WRTE43.js";
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/dark-mode/show-case-dark-mode/show-case-dark-mode.component.ts
var ShowCaseDarkModeComponent = class _ShowCaseDarkModeComponent {
  darkModeService = inject(DarkModeService);
  isDarkMode = this.darkModeService.isEnabled;
  static \u0275fac = function ShowCaseDarkModeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseDarkModeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseDarkModeComponent, selectors: [["doc-show-case-dark-mode"]], decls: 6, vars: 1, consts: [[1, "dark-mode-info"], [1, "dark-mode-status"]], template: function ShowCaseDarkModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-dark-mode-toggle");
      \u0275\u0275elementStart(1, "p", 0)(2, "span");
      \u0275\u0275text(3, " Dark mode is ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 1);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.isDarkMode() ? "enabled" : "disabled");
    }
  }, dependencies: [DarkModeToggleComponent], styles: ["\n\n.dark-mode-info[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.dark-mode-status[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=show-case-dark-mode.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseDarkModeComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-dark-mode", imports: [DarkModeToggleComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-dark-mode-toggle />

<p class="dark-mode-info">
  <span> Dark mode is </span>
  <span class="dark-mode-status">{{
    isDarkMode() ? 'enabled' : 'disabled'
  }}</span>
</p>
`, styles: ["/* projects/docs/src/app/examples/dark-mode/show-case-dark-mode/show-case-dark-mode.component.css */\n.dark-mode-info {\n  margin-top: 12px;\n}\n.dark-mode-status {\n  font-weight: bold;\n}\n/*# sourceMappingURL=show-case-dark-mode.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseDarkModeComponent, { className: "ShowCaseDarkModeComponent", filePath: "projects/docs/src/app/examples/dark-mode/show-case-dark-mode/show-case-dark-mode.component.ts", lineNumber: 12 });
})();

// projects/docs/src/app/features/dark-mode-page/dark-mode-page.component.ts
var ROOT = "dark-mode";
var DarkModePageComponent = class _DarkModePageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  preps = [
    { name: "button", label: "Button" },
    { name: "local-storage", label: "LocalStorage" }
  ];
  sourceTree = [
    {
      name: "dark-mode",
      files: [
        ...this.sourceTreeBuilder.fullComponent("dark-mode-toggle", ROOT),
        this.sourceTreeBuilder.component("dark-mode-icon", ROOT),
        this.sourceTreeBuilder.component("light-mode-icon", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    entities: [
      {
        name: "DarkModeToggleComponent",
        type: "component",
        selector: "app-dark-mode-toggle",
        description: "button that toggles dark mode"
      },
      {
        name: "DarkModeService",
        type: "service",
        description: "service that stores and control dark mode state",
        properties: [
          {
            name: "isEnabled",
            returnType: "Signal<boolean>",
            description: "indicates if dark mode is enabled",
            propType: "get"
          }
        ],
        methods: [
          {
            name: "toggle",
            description: "toggles dark mode",
            returnType: "void"
          },
          {
            name: "enable",
            description: "enables dark mode",
            returnType: "void"
          },
          {
            name: "disable",
            description: "disables dark mode",
            returnType: "void"
          }
        ]
      }
    ]
  };
  static \u0275fac = function DarkModePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DarkModePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DarkModePageComponent, selectors: [["doc-dark-mode-page"]], decls: 7, vars: 3, consts: [["label", "Dark Mode", "subTitle", "Dark mode is used to switch between light and dark theme"], ["name", "dark-mode"], [3, "preprsAuto"], ["type", "component", "name", "dark-mode"], ["name", "dark-mode", 3, "sourceTree"], [3, "apiInfo"]], template: function DarkModePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-dark-mode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-prerequisites", 2)(4, "doc-command-installation", 3)(5, "doc-source-tree", 4)(6, "doc-api-info", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("preprsAuto", ctx.preps);
      \u0275\u0275advance(2);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseDarkModeComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    ShowCaseComponent,
    CommandInstallationComponent,
    PrerequisitesComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DarkModePageComponent, [{
    type: Component,
    args: [{ selector: "doc-dark-mode-page", imports: [
      BlueprintPageComponent,
      ShowCaseDarkModeComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ShowCaseComponent,
      CommandInstallationComponent,
      PrerequisitesComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<doc-blueprint-page\n  label="Dark Mode"\n  subTitle="Dark mode is used to switch between light and dark theme"\n>\n  <doc-show-case name="dark-mode">\n    <doc-show-case-dark-mode></doc-show-case-dark-mode>\n  </doc-show-case>\n  <doc-prerequisites [preprsAuto]="preps"> </doc-prerequisites>\n  <doc-command-installation type="component" name="dark-mode">\n  </doc-command-installation>\n  <doc-source-tree [sourceTree]="sourceTree" name="dark-mode"></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DarkModePageComponent, { className: "DarkModePageComponent", filePath: "projects/docs/src/app/features/dark-mode-page/dark-mode-page.component.ts", lineNumber: 37 });
})();
export {
  DarkModePageComponent
};
//# sourceMappingURL=chunk-BM2QCEFI.js.map
