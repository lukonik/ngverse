import {
  CheckboxComponent
} from "./chunk-PHTO2FBY.js";
import {
  AUTO_GENERATED_API_DEFAULT_VALUE,
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
  ReactiveFormsModule
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

// projects/docs/src/app/examples/checkbox/show-case-checkbox/show-case-checkbox.component.ts
var ShowCaseCheckboxComponent = class _ShowCaseCheckboxComponent {
  formControl = new FormControl(false);
  static \u0275fac = function ShowCaseCheckboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseCheckboxComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseCheckboxComponent, selectors: [["doc-show-case-checkbox"]], decls: 2, vars: 1, consts: [[3, "formControl"]], template: function ShowCaseCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-checkbox", 0);
      \u0275\u0275text(1, "I am kind checkbox ");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("formControl", ctx.formControl);
    }
  }, dependencies: [ReactiveFormsModule, NgControlStatus, FormControlDirective, CheckboxComponent, FormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseCheckboxComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-checkbox", imports: [ReactiveFormsModule, CheckboxComponent, FormsModule], template: '<app-checkbox [formControl]="formControl">I am kind checkbox </app-checkbox>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseCheckboxComponent, { className: "ShowCaseCheckboxComponent", filePath: "projects/docs/src/app/examples/checkbox/show-case-checkbox/show-case-checkbox.component.ts", lineNumber: 11 });
})();

// projects/docs/src/app/features/checkbox-page/checkbox-page.component.ts
var ROOT = "checkbox";
var CheckboxPageComponent = class _CheckboxPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        this.sourceTreeBuilder.file("checkbox-icon.component", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    ariaDescription: "The checkbox leverages native HTML input and label elements to ensure proper accessibility and seamless interaction with assistive technologies.",
    entities: [
      {
        name: "CheckboxComponent",
        selector: "app-checkbox",
        type: "component",
        formBindable: true,
        inputs: [
          {
            name: "disabled",
            type: "boolean",
            description: "Disables the checkbox",
            default: "false"
          },
          {
            name: "required",
            type: "boolean",
            description: "Adds required validation to the checkbox",
            default: "false"
          },
          {
            name: "labelAlign",
            type: "start | end",
            description: "Aligns the label of the checkbox",
            default: "end"
          },
          {
            name: "inputId",
            type: "string",
            description: "Sets id attribute to the native checkbox",
            default: AUTO_GENERATED_API_DEFAULT_VALUE
          }
        ]
      }
    ]
  };
  static \u0275fac = function CheckboxPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckboxPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckboxPageComponent, selectors: [["doc-checkbox-page"]], decls: 6, vars: 2, consts: [["label", "Checkbox", "subTitle", "Checkbox component wraps the native HTML checkbox element and adds theme and functionality"], ["name", "checkbox"], ["type", "component", "name", "checkbox"], ["name", "checkbox", 3, "sourceTree"], [3, "apiInfo"]], template: function CheckboxPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-checkbox");
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
    ReactiveFormsModule,
    ShowCaseCheckboxComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxPageComponent, [{
    type: Component,
    args: [{ selector: "doc-checkbox-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ReactiveFormsModule,
      ShowCaseCheckboxComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: '<doc-blueprint-page\n  label="Checkbox"\n  subTitle="Checkbox component wraps the native HTML checkbox element and adds theme and functionality"\n>\n  <doc-show-case name="checkbox">\n    <doc-show-case-checkbox></doc-show-case-checkbox>\n  </doc-show-case>\n  <doc-command-installation\n    type="component"\n    name="checkbox"\n  ></doc-command-installation>\n  <doc-source-tree [sourceTree]="sourceTree" name="checkbox"></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckboxPageComponent, { className: "CheckboxPageComponent", filePath: "projects/docs/src/app/features/checkbox-page/checkbox-page.component.ts", lineNumber: 34 });
})();
export {
  CheckboxPageComponent
};
//# sourceMappingURL=chunk-NOZ66RUT.js.map
