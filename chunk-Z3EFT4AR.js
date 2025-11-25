import {
  DialogService
} from "./chunk-OFSTEJM7.js";
import {
  LabelComponent
} from "./chunk-X4ETKPWP.js";
import {
  ErrorComponent,
  FormFieldComponent,
  FormFieldErrorRegistry
} from "./chunk-TWN5LMSH.js";
import "./chunk-INRZUO4S.js";
import {
  InputDirective
} from "./chunk-QUXJML5I.js";
import {
  ButtonComponent
} from "./chunk-3AYE667Y.js";
import {
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE
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
  OptionComponent,
  SelectComponent,
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-PQL4JFHV.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-3GLWUNBJ.js";
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
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/form-field/show-case-form-field/show-case-form-field.component.ts
var _c0 = () => ["required"];
function ShowCaseFormFieldComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-error");
    \u0275\u0275text(1, "Lastname is important please fill");
    \u0275\u0275elementEnd();
  }
}
function ShowCaseFormFieldComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    \u0275\u0275property("value", country_r1.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(country_r1.name);
  }
}
var ShowCaseFormFieldComponent = class _ShowCaseFormFieldComponent {
  formBuilder = inject(FormBuilder);
  dialog = inject(DialogService);
  formFieldErrorRegistry = inject(FormFieldErrorRegistry);
  group = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    age: ["", Validators.compose([Validators.required, Validators.min(10)])],
    country: [void 0, Validators.required]
  });
  countries = [
    { code: "KA", name: "Georgia" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "JP", name: "Japan" },
    { code: "AU", name: "Australia" },
    { code: "IT", name: "Italy" },
    { code: "ES", name: "Spain" },
    { code: "CN", name: "China" }
  ];
  constructor() {
    this.formFieldErrorRegistry.addErrors({
      min: (error) => `Min value is ${error.min}, but your value is ${error.actual}`
    });
  }
  register() {
    this.dialog.alert({
      title: "Registration",
      description: "User registered successfully"
    });
  }
  static \u0275fac = function ShowCaseFormFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseFormFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseFormFieldComponent, selectors: [["doc-show-case-form-field"]], decls: 26, vars: 4, consts: [[1, "show-case", 3, "formGroup"], ["appInput", "", "formControlName", "firstName", 1, "w-full"], [3, "silentErrors"], ["appInput", "", "formControlName", "lastName", 1, "w-full"], ["appInput", "", "type", "email", "formControlName", "email", 1, "w-full"], ["appInput", "", "type", "number", "formControlName", "age", 1, "w-full"], ["formControlName", "country", "placeholder", "Select a country", 1, "w-full"], [3, "value"], ["appButton", "", 3, "click"]], template: function ShowCaseFormFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "app-form-field")(2, "app-label");
      \u0275\u0275text(3, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "input", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-form-field", 2)(6, "app-label");
      \u0275\u0275text(7, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 3);
      \u0275\u0275conditionalCreate(9, ShowCaseFormFieldComponent_Conditional_9_Template, 2, 0, "app-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "app-form-field")(11, "app-label");
      \u0275\u0275text(12, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-form-field")(15, "app-label");
      \u0275\u0275text(16, "Age");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "app-form-field")(19, "app-label");
      \u0275\u0275text(20, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "app-select", 6);
      \u0275\u0275repeaterCreate(22, ShowCaseFormFieldComponent_For_23_Template, 2, 2, "app-option", 7, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "button", 8);
      \u0275\u0275listener("click", function ShowCaseFormFieldComponent_Template_button_click_24_listener() {
        return ctx.register();
      });
      \u0275\u0275text(25, "Register");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.group);
      \u0275\u0275advance(5);
      \u0275\u0275property("silentErrors", \u0275\u0275pureFunction0(3, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275conditional((ctx.group.controls.lastName.errors == null ? null : ctx.group.controls.lastName.errors["required"]) ? 9 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.countries);
    }
  }, dependencies: [
    FormFieldComponent,
    LabelComponent,
    InputDirective,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    ButtonComponent,
    ErrorComponent,
    SelectComponent,
    OptionComponent
  ], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 250px;\n}\n/*# sourceMappingURL=show-case-form-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseFormFieldComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-form-field", imports: [
      FormFieldComponent,
      LabelComponent,
      InputDirective,
      ReactiveFormsModule,
      ButtonComponent,
      ErrorComponent,
      SelectComponent,
      OptionComponent
    ], template: `<form class="show-case" [formGroup]="group">
  <app-form-field>
    <app-label>First Name</app-label>
    <input appInput class="w-full" formControlName="firstName" />
  </app-form-field>
  <app-form-field [silentErrors]="['required']">
    <app-label>Last Name</app-label>
    <input appInput class="w-full" formControlName="lastName" />
    @if (group.controls.lastName.errors?.['required']) {
      <app-error>Lastname is important please fill</app-error>
    }
  </app-form-field>
  <app-form-field>
    <app-label>Email</app-label>
    <input appInput class="w-full" type="email" formControlName="email" />
  </app-form-field>
  <app-form-field>
    <app-label>Age</app-label>
    <input appInput class="w-full" type="number" formControlName="age" />
  </app-form-field>
  <app-form-field>
    <app-label>Country</app-label>
    <app-select
      class="w-full"
      formControlName="country"
      placeholder="Select a country"
    >
      @for (country of countries; track $index) {
        <app-option [value]="country.code">{{ country.name }}</app-option>
      }
    </app-select>
  </app-form-field>
  <button appButton (click)="register()">Register</button>
</form>
`, styles: ["/* projects/docs/src/app/examples/form-field/show-case-form-field/show-case-form-field.component.css */\n.show-case {\n  margin: 0 auto;\n  width: 250px;\n}\n/*# sourceMappingURL=show-case-form-field.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseFormFieldComponent, { className: "ShowCaseFormFieldComponent", filePath: "projects/docs/src/app/examples/form-field/show-case-form-field/show-case-form-field.component.ts", lineNumber: 28 });
})();

// projects/docs/src/app/features/form-field-page/form-field-page.component.ts
var ROOT = "form-field";
var FormFieldPageComponent = class _FormFieldPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        this.sourceTreeBuilder.file("form-field-error.registry", ROOT),
        this.sourceTreeBuilder.file("form-field-error.registry", ROOT, "spec.ts")
      ],
      hideName: true
    },
    {
      name: "label",
      files: this.sourceTreeBuilder.fullComponent("label", `${ROOT}/label`)
    },
    {
      name: "error",
      files: this.sourceTreeBuilder.fullComponent("error", `${ROOT}/error`)
    }
  ];
  apiInfo = {
    entities: [
      {
        name: "FormFieldComponent",
        type: "component",
        selector: "app-form-field",
        description: "A form field is a block element with field and label",
        inputs: [
          {
            name: "showErrors",
            type: "boolean",
            default: "true",
            description: "Whether to show auto generated errors, custom errors will be still shown, it has to be controlled manually."
          },
          {
            name: "silentErrors",
            type: "string[] | undefined",
            default: EMPTY_API_INPUT_DEFAULT_VALUE,
            description: "List of errors to ignore. This can be useful when you want to display most of the errors with error group, but handle specific errors with app-error and provide customized error messages"
          },
          {
            name: "hideRequiredMarker",
            type: "boolean",
            default: "false",
            description: "Hides the required marker"
          }
        ]
      },
      {
        name: "LabelComponent",
        type: "component",
        selector: "app-label",
        description: "Form Field label"
      },
      {
        name: "ErrorComponent",
        type: "component",
        selector: "app-error",
        description: "app-error displays an error message"
      },
      {
        name: "FormFieldErrorRegistry",
        type: "service",
        description: "Service for registering error messages",
        methods: [
          {
            name: "addErrors",
            returnType: "void",
            description: "adds errors to the registry",
            params: [
              {
                name: "errors",
                type: "Record<string, string | ((params: unknown) => string)>",
                description: "message value can be string or function where error object will be passed"
              }
            ]
          },
          {
            name: "setErrors",
            returnType: "void",
            description: "clears existing errors and sets new errors to the registry",
            params: [
              {
                name: "errors",
                type: "Record<string, string | ((params: unknown) => string)>",
                description: "message value can be string or function where error object will be passed"
              }
            ]
          },
          {
            name: "getMessage",
            returnType: "string | undefined",
            description: "gets error message by code",
            params: [
              {
                name: "code",
                type: "string",
                description: "error code"
              }
            ]
          }
        ]
      }
    ]
  };
  static \u0275fac = function FormFieldPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFieldPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFieldPageComponent, selectors: [["doc-form-field-page"]], decls: 6, vars: 4, consts: [[3, "subTitle", "label"], ["name", "form-field"], ["type", "component", "name", "form-field"], ["name", "form-field", 3, "sourceTree"], [3, "apiInfo"]], template: function FormFieldPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-form-field");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "Form Field is a block element with field and label")("label", "Form Field");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    ShowCaseFormFieldComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldPageComponent, [{
    type: Component,
    args: [{ selector: "doc-form-field-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      SourceTreeComponent,
      CommandInstallationComponent,
      ShowCaseFormFieldComponent,
      ApiInfoComponent
    ], template: `<doc-blueprint-page
  [subTitle]="'Form Field is a block element with field and label'"
  [label]="'Form Field'"
>
  <doc-show-case name="form-field">
    <doc-show-case-form-field></doc-show-case-form-field>
  </doc-show-case>
  <doc-command-installation type="component" name="form-field">
  </doc-command-installation>
  <doc-source-tree
    [sourceTree]="sourceTree"
    name="form-field"
  ></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"></doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFieldPageComponent, { className: "FormFieldPageComponent", filePath: "projects/docs/src/app/features/form-field-page/form-field-page.component.ts", lineNumber: 30 });
})();
export {
  FormFieldPageComponent
};
//# sourceMappingURL=chunk-Z3EFT4AR.js.map
