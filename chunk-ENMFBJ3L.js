import "./chunk-ILWOXVJI.js";
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
import {
  Platform
} from "./chunk-4UYB5JXN.js";
import "./chunk-JX5YVH27.js";
import "./chunk-RBCCWOK3.js";
import "./chunk-EPTODCGW.js";
import "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  afterNextRender,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtext
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/progress-bar/progress-bar.component.ts
function ProgressBarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2)(1, "div", 3)(2, "div", 4);
  }
}
function ProgressBarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", ctx_r0.transformValue());
  }
}
var minMaxTransform = (value) => {
  if (value < 0) {
    return 0;
  }
  if (value > 100) {
    return 100;
  }
  return value;
};
var ProgressBarComponent = class _ProgressBarComponent {
  value = input(0, ...ngDevMode ? [{ debugName: "value", transform: minMaxTransform }] : [{ transform: minMaxTransform }]);
  indeterminate = input(false, ...ngDevMode ? [{ debugName: "indeterminate" }] : []);
  transformValue() {
    return `scaleX(${this.value()}%)`;
  }
  static \u0275fac = function ProgressBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgressBarComponent, selectors: [["app-progress-bar"]], inputs: { value: [1, "value"], indeterminate: [1, "indeterminate"] }, decls: 3, vars: 1, consts: [[1, "relative", "h-3", "overflow-x-hidden", "rounded-md", "border", "border-border"], ["aria-label", "progress bar", "role", "progressbar", 1, "h-full", "origin-left", "bg-primary", "transition-transform", "duration-300", "ease-in-out", 3, "transform"], [1, "absolute", "h-full", "w-[150%]", "bg-surface", "opacity-40"], [1, "inc", "absolute", "h-full", "bg-primary"], [1, "dec", "absolute", "h-full", "bg-primary"], ["aria-label", "progress bar", "role", "progressbar", 1, "h-full", "origin-left", "bg-primary", "transition-transform", "duration-300", "ease-in-out"]], template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ProgressBarComponent_Conditional_1_Template, 3, 0)(2, ProgressBarComponent_Conditional_2_Template, 1, 2, "div", 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.indeterminate() ? 1 : 2);
    }
  }, styles: ["\n\n.inc[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_indeterminateIncrease 2s infinite;\n}\n.dec[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_indeterminateDecrease 2s 0.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_indeterminateIncrease {\n  from {\n    left: -5%;\n    width: 5%;\n  }\n  to {\n    left: 130%;\n    width: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_indeterminateDecrease {\n  from {\n    left: -80%;\n    width: 80%;\n  }\n  to {\n    left: 110%;\n    width: 10%;\n  }\n}\n/*# sourceMappingURL=progress-bar.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarComponent, [{
    type: Component,
    args: [{ selector: "app-progress-bar", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="relative h-3 overflow-x-hidden rounded-md border border-border">\n  @if (indeterminate()) {\n    <div class="absolute h-full w-[150%] bg-surface opacity-40"></div>\n    <div class="inc absolute h-full bg-primary"></div>\n    <div class="dec absolute h-full bg-primary"></div>\n  } @else {\n    <div\n      aria-label="progress bar"\n      class="h-full origin-left bg-primary transition-transform duration-300 ease-in-out"\n      role="progressbar"\n      [style.transform]="transformValue()"\n    ></div>\n  }\n</div>\n', styles: ["/* projects/ngverse/src/lib/ui/progress-bar/progress-bar.component.css */\n.inc {\n  animation: indeterminateIncrease 2s infinite;\n}\n.dec {\n  animation: indeterminateDecrease 2s 0.5s infinite;\n}\n@keyframes indeterminateIncrease {\n  from {\n    left: -5%;\n    width: 5%;\n  }\n  to {\n    left: 130%;\n    width: 100%;\n  }\n}\n@keyframes indeterminateDecrease {\n  from {\n    left: -80%;\n    width: 80%;\n  }\n  to {\n    left: 110%;\n    width: 10%;\n  }\n}\n/*# sourceMappingURL=progress-bar.component.css.map */\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], indeterminate: [{ type: Input, args: [{ isSignal: true, alias: "indeterminate", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgressBarComponent, { className: "ProgressBarComponent", filePath: "projects/ngverse/src/lib/ui/progress-bar/progress-bar.component.ts", lineNumber: 20 });
})();

// projects/docs/src/app/examples/progress-bar/show-case-progress-bar/show-case-progress-bar.component.ts
var ShowCaseProgressBarComponent = class _ShowCaseProgressBarComponent {
  value = signal(0, ...ngDevMode ? [{ debugName: "value" }] : []);
  platform = inject(Platform);
  constructor() {
    afterNextRender(() => {
      setInterval(() => {
        this.value.update((val) => val + 10);
      }, 1e3);
    });
  }
  static \u0275fac = function ShowCaseProgressBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseProgressBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseProgressBarComponent, selectors: [["doc-show-case-progress-bar"]], decls: 9, vars: 2, consts: [[1, "show-case"], [3, "value"], [3, "indeterminate"]], template: function ShowCaseProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "p");
      \u0275\u0275text(3, "Determinate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-progress-bar", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "p");
      \u0275\u0275text(7, "Indeterminate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-progress-bar", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.value());
      \u0275\u0275advance(4);
      \u0275\u0275property("indeterminate", true);
    }
  }, dependencies: [ProgressBarComponent], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n/*# sourceMappingURL=show-case-progress-bar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseProgressBarComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-progress-bar", imports: [ProgressBarComponent], template: '<div class="show-case">\n  <div>\n    <p>Determinate</p>\n    <app-progress-bar [value]="value()"></app-progress-bar>\n  </div>\n  <div>\n    <p>Indeterminate</p>\n    <app-progress-bar [indeterminate]="true"></app-progress-bar>\n  </div>\n</div>\n', styles: ["/* projects/docs/src/app/examples/progress-bar/show-case-progress-bar/show-case-progress-bar.component.css */\n.show-case {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n/*# sourceMappingURL=show-case-progress-bar.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseProgressBarComponent, { className: "ShowCaseProgressBarComponent", filePath: "projects/docs/src/app/examples/progress-bar/show-case-progress-bar/show-case-progress-bar.component.ts", lineNumber: 11 });
})();

// projects/docs/src/app/features/progress-bar-page/progress-bar-page.component.ts
var ROOT = "progress-bar";
var ProgressBarPageComponent = class _ProgressBarPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
      hideName: true
    }
  ];
  apiInfo = {
    entities: [
      {
        name: "ProgressBarComponent",
        selector: "app-progress-bar",
        type: "component",
        inputs: [
          {
            name: "indeterminate",
            type: "boolean",
            default: "false",
            description: "show an indeterminate progress bar"
          }
        ]
      }
    ]
  };
  static \u0275fac = function ProgressBarPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgressBarPageComponent, selectors: [["doc-progress-bar-page"]], decls: 6, vars: 2, consts: [["subTitle", "Displays an indicator showing the progress of a task", "label", "Progress Bar"], ["name", "progress-bar"], ["type", "component", "name", "progress-bar"], ["name", "progress-bar", 3, "sourceTree"], [3, "apiInfo"]], template: function ProgressBarPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-progress-bar");
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
    ShowCaseProgressBarComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarPageComponent, [{
    type: Component,
    args: [{ selector: "doc-progress-bar-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseProgressBarComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: '<doc-blueprint-page\n  subTitle="Displays an indicator showing the progress of a task"\n  label="Progress Bar"\n>\n  <doc-show-case name="progress-bar">\n    <doc-show-case-progress-bar></doc-show-case-progress-bar>\n  </doc-show-case>\n  <doc-command-installation type="component" name="progress-bar">\n  </doc-command-installation>\n  <doc-source-tree\n    [sourceTree]="sourceTree"\n    name="progress-bar"\n  ></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"></doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgressBarPageComponent, { className: "ProgressBarPageComponent", filePath: "projects/docs/src/app/features/progress-bar-page/progress-bar-page.component.ts", lineNumber: 30 });
})();
export {
  ProgressBarPageComponent
};
//# sourceMappingURL=chunk-ENMFBJ3L.js.map
