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
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵtext
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/alert/alert-body.component.ts
var _c0 = ["*"];
var AlertBodyComponent = class _AlertBodyComponent {
  static \u0275fac = function AlertBodyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertBodyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertBodyComponent, selectors: [["app-alert-body"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AlertBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertBodyComponent, [{
    type: Component,
    args: [{
      selector: "app-alert-body",
      imports: [],
      template: `<ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertBodyComponent, { className: "AlertBodyComponent", filePath: "projects/ngverse/src/lib/ui/alert/alert-body.component.ts", lineNumber: 9 });
})();

// projects/ngverse/src/lib/ui/alert/alert-header.component.ts
var _c02 = ["*"];
var AlertHeaderComponent = class _AlertHeaderComponent {
  static \u0275fac = function AlertHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertHeaderComponent, selectors: [["app-alert-header"]], ngContentSelectors: _c02, decls: 1, vars: 0, template: function AlertHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  font-weight: 500;\n  display: block;\n}\n/*# sourceMappingURL=alert-header.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-alert-header", imports: [], template: `<ng-content></ng-content> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;aa445220264a4cc07f90bc268da7e7a4b102aef24b480212d919bb6a957389ae;/Users/lukaonikadze/Documents/Projects/ngverse/projects/ngverse/src/lib/ui/alert/alert-header.component.ts */\n:host {\n  font-weight: 500;\n  display: block;\n}\n/*# sourceMappingURL=alert-header.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertHeaderComponent, { className: "AlertHeaderComponent", filePath: "projects/ngverse/src/lib/ui/alert/alert-header.component.ts", lineNumber: 15 });
})();

// projects/ngverse/src/lib/ui/alert/alert.component.ts
var _c03 = (a0, a1) => [a0, a1];
var _c1 = [[["app-alert-header"]], [["app-alert-body"]]];
var _c2 = ["app-alert-header", "app-alert-body"];
var AlertComponent = class _AlertComponent {
  type = input("default", ...ngDevMode ? [{ debugName: "type" }] : []);
  variant = input("fill", ...ngDevMode ? [{ debugName: "variant" }] : []);
  static \u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["app-alert"]], hostAttrs: ["role", "alert"], hostVars: 5, hostBindings: function AlertComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(\u0275\u0275pureFunction2(2, _c03, ctx.type(), ctx.variant()));
    }
  }, inputs: { type: [1, "type"], variant: [1, "variant"] }, ngContentSelectors: _c2, decls: 2, vars: 0, template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c1);
      \u0275\u0275projection(0);
      \u0275\u0275projection(1, 1);
    }
  }, styles: ['\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-red-600: oklch(0.577 0.245 27.325);\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-amber-600: oklch(0.666 0.179 58.318);\n    --color-green-600: oklch(0.627 0.194 149.214);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-300: oklch(0.869 0.022 252.894);\n    --color-slate-950: oklch(0.129 0.042 264.695);\n    --color-white: #fff;\n  }\n}\n[_nghost-%COMP%] {\n  padding: 16px;\n  display: block;\n  border-radius: 6px;\n}\n.fill.success[_nghost-%COMP%] {\n  background-color: var(--color-green-600);\n  color: var(--color-white);\n}\n.fill.danger[_nghost-%COMP%] {\n  background-color: var(--color-red-600);\n  color: var(--color-white);\n}\n.fill.default[_nghost-%COMP%] {\n  background-color: var(--color-slate-950);\n  color: var(--color-white);\n}\n.fill.warning[_nghost-%COMP%] {\n  background-color: var(--color-amber-600);\n  color: var(--color-white);\n}\n.outline[_nghost-%COMP%] {\n  background: transparent;\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n}\n.outline.success[_nghost-%COMP%] {\n  border-color: var(--color-green-600);\n  color: var(--color-green-600);\n}\n.outline.danger[_nghost-%COMP%] {\n  border-color: var(--color-red-600);\n  color: var(--color-red-600);\n}\n.outline.default[_nghost-%COMP%] {\n  border-color: var(--color-slate-300);\n}\n.outline.warning[_nghost-%COMP%] {\n  border-color: var(--color-amber-600);\n  color: var(--color-amber-600);\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n\n\n/*# sourceMappingURL=alert.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{ selector: "app-alert", changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "alert",
      "[class]": "[type(), variant()]"
    }, template: '<ng-content select="app-alert-header"></ng-content>\n<ng-content select="app-alert-body"></ng-content>\n', styles: ['/* projects/ngverse/src/lib/ui/alert/alert.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-red-600: oklch(0.577 0.245 27.325);\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-amber-600: oklch(0.666 0.179 58.318);\n    --color-green-600: oklch(0.627 0.194 149.214);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-300: oklch(0.869 0.022 252.894);\n    --color-slate-950: oklch(0.129 0.042 264.695);\n    --color-white: #fff;\n  }\n}\n:host {\n  padding: 16px;\n  display: block;\n  border-radius: 6px;\n}\n:host.fill.success {\n  background-color: var(--color-green-600);\n  color: var(--color-white);\n}\n:host.fill.danger {\n  background-color: var(--color-red-600);\n  color: var(--color-white);\n}\n:host.fill.default {\n  background-color: var(--color-slate-950);\n  color: var(--color-white);\n}\n:host.fill.warning {\n  background-color: var(--color-amber-600);\n  color: var(--color-white);\n}\n:host.outline {\n  background: transparent;\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n}\n:host.outline.success {\n  border-color: var(--color-green-600);\n  color: var(--color-green-600);\n}\n:host.outline.danger {\n  border-color: var(--color-red-600);\n  color: var(--color-red-600);\n}\n:host.outline.default {\n  border-color: var(--color-slate-300);\n}\n:host.outline.warning {\n  border-color: var(--color-amber-600);\n  color: var(--color-amber-600);\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=alert.component.css.map */\n'] }]
  }], null, { type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "projects/ngverse/src/lib/ui/alert/alert.component.ts", lineNumber: 16 });
})();

// projects/docs/src/app/examples/alert/show-case-alert/show-case-alert.component.ts
var ShowCaseAlertComponent = class _ShowCaseAlertComponent {
  static \u0275fac = function ShowCaseAlertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseAlertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseAlertComponent, selectors: [["doc-show-case-alert"]], decls: 26, vars: 0, consts: [[1, "show-case"], ["type", "success"], ["type", "danger"], ["type", "warning"], ["type", "warning", "variant", "outline"]], template: function ShowCaseAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-alert")(2, "app-alert-header");
      \u0275\u0275text(3, "Accessibility !");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-alert-body");
      \u0275\u0275text(5, "We prioritize accessibility, ensuring that all elements adhere to WAI-ARIA best practices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "app-alert", 1)(7, "app-alert-header");
      \u0275\u0275text(8, "Isolation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "app-alert-body");
      \u0275\u0275text(10, "Almost all elements are self-contained, meaning that all the necessary files are located within the same directory.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "app-alert", 2)(12, "app-alert-header");
      \u0275\u0275text(13, "Dependencies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-alert-body");
      \u0275\u0275text(15, "only dependencies are angular/cdk and angular animations. they will be added automatically with ng add ngverse command");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "app-alert", 3)(17, "app-alert-header");
      \u0275\u0275text(18, "Contribute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-alert-body");
      \u0275\u0275text(20, "If you want to create a generic element or update an existing one with general behavior, go for it and contribute to helping others!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "app-alert", 4)(22, "app-alert-header");
      \u0275\u0275text(23, "Contribute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "app-alert-body");
      \u0275\u0275text(25, "If you want to create a generic element or update an existing one with general behavior, go for it and contribute to helping others!");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [AlertComponent, AlertHeaderComponent, AlertBodyComponent], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n}\n/*# sourceMappingURL=show-case-alert.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseAlertComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-alert", imports: [AlertComponent, AlertHeaderComponent, AlertBodyComponent], template: '<div class="show-case">\n  <app-alert>\n    <app-alert-header>Accessibility !</app-alert-header>\n    <app-alert-body\n      >We prioritize accessibility, ensuring that all elements adhere to\n      WAI-ARIA best practices</app-alert-body\n    >\n  </app-alert>\n  <app-alert type="success">\n    <app-alert-header>Isolation</app-alert-header>\n    <app-alert-body\n      >Almost all elements are self-contained, meaning that all the necessary\n      files are located within the same directory.</app-alert-body\n    >\n  </app-alert>\n  <app-alert type="danger">\n    <app-alert-header>Dependencies</app-alert-header>\n    <app-alert-body\n      >only dependencies are angular/cdk and angular animations. they will be\n      added automatically with ng add ngverse command</app-alert-body\n    >\n  </app-alert>\n  <app-alert type="warning">\n    <app-alert-header>Contribute</app-alert-header>\n    <app-alert-body\n      >If you want to create a generic element or update an existing one with\n      general behavior, go for it and contribute to helping\n      others!</app-alert-body\n    >\n  </app-alert>\n  <app-alert type="warning" variant="outline">\n    <app-alert-header>Contribute</app-alert-header>\n    <app-alert-body\n      >If you want to create a generic element or update an existing one with\n      general behavior, go for it and contribute to helping\n      others!</app-alert-body\n    >\n  </app-alert>\n</div>\n', styles: ["/* projects/docs/src/app/examples/alert/show-case-alert/show-case-alert.component.css */\n.show-case {\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n}\n/*# sourceMappingURL=show-case-alert.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseAlertComponent, { className: "ShowCaseAlertComponent", filePath: "projects/docs/src/app/examples/alert/show-case-alert/show-case-alert.component.ts", lineNumber: 12 });
})();

// projects/docs/src/app/features/alert-page/alert-page.component.ts
var ROOT = "alert";
var AlertPageComponent = class _AlertPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent("alert", ROOT),
        ...this.sourceTreeBuilder.fullInlineComponent("alert-header", ROOT),
        ...this.sourceTreeBuilder.fullInlineComponent("alert-body", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://www.w3.org/WAI/ARIA/apg/patterns/alert/",
    entities: [
      {
        name: "AlertComponent",
        selector: "app-alert",
        type: "component",
        inputs: [
          {
            name: "type",
            type: "default | success | danger | warning",
            default: "default",
            description: "defines the type of alert"
          },
          {
            name: "variant",
            type: "fill | outline",
            default: "fill",
            description: "defines the variant of alert"
          }
        ]
      },
      {
        name: "AlertHeaderComponent",
        selector: "app-alert-header",
        type: "component",
        description: "Renders the header of an alert component."
      },
      {
        name: "AlertBodyComponent",
        selector: "app-alert-body",
        type: "component",
        description: "Renders the body of an alert component."
      }
    ]
  };
  static \u0275fac = function AlertPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertPageComponent, selectors: [["doc-alert-page"]], decls: 6, vars: 3, consts: [["subTitle", "alert is an element that displays a brief, important message in a way that attracts the user's attention", 3, "label"], ["name", "alert"], ["type", "component", "name", "alert"], ["name", "alert", 3, "sourceTree"], [3, "apiInfo"]], template: function AlertPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("label", "Alert");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseAlertComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertPageComponent, [{
    type: Component,
    args: [{ selector: "doc-alert-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseAlertComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: `<doc-blueprint-page
  subTitle="alert is an element that displays a brief, important message in a way that attracts the user's attention"
  [label]="'Alert'"
>
  <doc-show-case name="alert">
    <doc-show-case-alert></doc-show-case-alert>
  </doc-show-case>
  <doc-command-installation type="component" name="alert">
  </doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="alert"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertPageComponent, { className: "AlertPageComponent", filePath: "projects/docs/src/app/features/alert-page/alert-page.component.ts", lineNumber: 31 });
})();
export {
  AlertPageComponent
};
//# sourceMappingURL=chunk-7OR3DZE3.js.map
