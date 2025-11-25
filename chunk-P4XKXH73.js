import {
  SwitchComponent
} from "./chunk-6JWKQGR4.js";
import {
  ApiInfoComponent
} from "./chunk-YTQ3XDMW.js";
import "./chunk-XNVPQ5U3.js";
import {
  CommandInstallationComponent
} from "./chunk-JIB3DNZG.js";
import {
  ShowCaseComponent
} from "./chunk-FNG7BR3D.js";
import "./chunk-EEYNYO2D.js";
import {
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-Y6XO3YM5.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import {
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-3GLWUNBJ.js";
import "./chunk-4XRX3M6E.js";
import "./chunk-HIR2OVX3.js";
import "./chunk-4YTCSZ5T.js";
import "./chunk-P53KIQU7.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-GOCNYIRL.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-MTAP3RFR.js";
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

// projects/docs/src/app/examples/switch/show-case-switch/show-case-switch.component.ts
var ShowCaseSwitchComponent = class _ShowCaseSwitchComponent {
  formControl = new FormControl(null, Validators.requiredTrue);
  static \u0275fac = function ShowCaseSwitchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseSwitchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseSwitchComponent, selectors: [["doc-show-case-switch"]], decls: 2, vars: 1, consts: [[3, "formControl"]], template: function ShowCaseSwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-switch", 0);
      \u0275\u0275text(1, " Turn On");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("formControl", ctx.formControl);
    }
  }, dependencies: [SwitchComponent, ReactiveFormsModule, NgControlStatus, FormControlDirective, FormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseSwitchComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-switch", imports: [SwitchComponent, ReactiveFormsModule, FormsModule], template: '<app-switch [formControl]="formControl"> Turn On</app-switch>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseSwitchComponent, { className: "ShowCaseSwitchComponent", filePath: "projects/docs/src/app/examples/switch/show-case-switch/show-case-switch.component.ts", lineNumber: 16 });
})();

// projects/docs/src/app/features/switch-page/switch-page.component.ts
var ROOT = "switch";
var SwitchPageComponent = class _SwitchPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: "switch",
      files: [...this.sourceTreeBuilder.fullComponent(ROOT, ROOT)],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://www.w3.org/WAI/ARIA/apg/patterns/switch/",
    entities: [
      {
        name: "SwitchComponent",
        selector: "app-switch",
        type: "component",
        formBindable: true,
        inputs: [
          {
            name: "disabled",
            type: "boolean",
            description: "Disables the switch.",
            default: "false"
          },
          {
            name: "required",
            type: "boolean",
            description: "Applies required validation to the switch.",
            default: "false"
          },
          {
            name: "labelAlign",
            type: "start | end",
            description: "Specifies the alignment of the switch label.",
            default: "end"
          }
        ]
      }
    ]
  };
  static \u0275fac = function SwitchPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwitchPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SwitchPageComponent, selectors: [["doc-switch-page"]], decls: 6, vars: 2, consts: [["label", "Switch", "subTitle", "A switch is an input widget that enables users to toggle between two values: true and false."], ["name", "switch"], ["type", "component", "name", "switch"], ["name", "switch", 3, "sourceTree"], [3, "apiInfo"]], template: function SwitchPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-switch");
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
    FormsModule,
    ShowCaseSwitchComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchPageComponent, [{
    type: Component,
    args: [{ selector: "doc-switch-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      FormsModule,
      ShowCaseSwitchComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: '<doc-blueprint-page\n  label="Switch"\n  subTitle="A switch is an input widget that enables users to toggle between two values: true and false."\n>\n  <doc-show-case name="switch">\n    <doc-show-case-switch></doc-show-case-switch>\n  </doc-show-case>\n  <doc-command-installation\n    type="component"\n    name="switch"\n  ></doc-command-installation>\n  <doc-source-tree [sourceTree]="sourceTree" name="switch"></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"></doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SwitchPageComponent, { className: "SwitchPageComponent", filePath: "projects/docs/src/app/features/switch-page/switch-page.component.ts", lineNumber: 31 });
})();
export {
  SwitchPageComponent
};
//# sourceMappingURL=chunk-P4XKXH73.js.map
