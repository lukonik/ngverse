import {
  ApiDescriptionComponent
} from "./chunk-R6NCU6QH.js";
import {
  PrerequisitesComponent
} from "./chunk-4XDKCJNW.js";
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
  OptionGroupComponent,
  OptionGroupLabelComponent,
  SelectComponent,
  SelectLabelDirective,
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-PQL4JFHV.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import {
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-3GLWUNBJ.js";
import "./chunk-BC37M6ZP.js";
import "./chunk-FK22TT2X.js";
import {
  RouterLink
} from "./chunk-4YTCSZ5T.js";
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/select/show-case-select/show-case-select.component.ts
function ShowCaseSelectComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r1.name);
  }
}
function ShowCaseSelectComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("The value is: ", option_r2.content);
  }
}
function ShowCaseSelectComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
  }
}
function ShowCaseSelectComponent_For_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r4 = ctx.$implicit;
    \u0275\u0275property("value", file_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r4.name);
  }
}
function ShowCaseSelectComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option-group")(1, "app-option-group-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ShowCaseSelectComponent_For_15_For_4_Template, 2, 2, "app-option", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dir_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dir_r5.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(dir_r5.files);
  }
}
var countries = [
  { code: "KA", name: "Georgia" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "AU", name: "Australia" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "CN", name: "China" },
  { code: "IN", name: "India" },
  { code: "BR", name: "Brazil" },
  { code: "ZA", name: "South Africa" },
  { code: "RU", name: "Russia" },
  { code: "MX", name: "Mexico" },
  { code: "KR", name: "South Korea" },
  { code: "AR", name: "Argentina" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "NG", name: "Nigeria" },
  { code: "EG", name: "Egypt" }
];
var directories = [
  {
    name: "Documents",
    files: [
      {
        name: "Profile Picture"
      },
      {
        name: "Work File"
      }
    ]
  },
  {
    name: "Downloads",
    files: [
      {
        name: "The Dark Knight"
      },
      {
        name: "Joker"
      }
    ]
  }
];
var customOptions = [
  { label: "Danger", value: "red" },
  { label: "Warning", value: "orange" },
  { label: "OK", value: "blue" }
];
var ShowCaseSelectComponent = class _ShowCaseSelectComponent {
  countries = countries;
  directories = directories;
  customOptions = customOptions;
  formControlSingle = new FormControl(null, Validators.required);
  formControlMulti = new FormControl(null, Validators.required);
  dirFormControl = new FormControl(null);
  customLabelControl = new FormControl(null);
  static \u0275fac = function ShowCaseSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseSelectComponent, selectors: [["doc-show-case-select"]], decls: 16, vars: 4, consts: [[1, "mb-2"], ["placeholder", "Countries", 1, "w-[250px]", 3, "formControl", "showClear"], [3, "value"], [1, "mt-4", "mb-2"], ["placeholder", "Countries", 1, "w-[250px]", 3, "formControl"], ["appSelectLabel", ""]], template: function ShowCaseSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p", 0);
      \u0275\u0275text(1, "Sselect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-select", 1);
      \u0275\u0275repeaterCreate(3, ShowCaseSelectComponent_For_4_Template, 2, 2, "app-option", 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Custom label");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-select", 4);
      \u0275\u0275template(8, ShowCaseSelectComponent_ng_template_8_Template, 2, 1, "ng-template", 5);
      \u0275\u0275repeaterCreate(9, ShowCaseSelectComponent_For_10_Template, 2, 2, "app-option", 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 3);
      \u0275\u0275text(12, "Directories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-select", 4);
      \u0275\u0275repeaterCreate(14, ShowCaseSelectComponent_For_15_Template, 5, 1, "app-option-group", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.formControlSingle)("showClear", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.countries);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.formControlMulti);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.countries);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.dirFormControl);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.directories);
    }
  }, dependencies: [
    SelectComponent,
    ReactiveFormsModule,
    NgControlStatus,
    FormControlDirective,
    OptionComponent,
    OptionGroupComponent,
    OptionGroupLabelComponent,
    SelectLabelDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseSelectComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-select", imports: [
      SelectComponent,
      ReactiveFormsModule,
      OptionComponent,
      OptionGroupComponent,
      OptionGroupLabelComponent,
      SelectLabelDirective
    ], template: '<p class="mb-2">Sselect</p>\n<app-select\n  [formControl]="formControlSingle"\n  placeholder="Countries"\n  class="w-[250px]"\n  [showClear]="true"\n>\n  @for (option of countries; track $index) {\n    <app-option [value]="option.code">{{ option.name }}</app-option>\n  }\n</app-select>\n\n<p class="mt-4 mb-2">Custom label</p>\n<app-select\n  [formControl]="formControlMulti"\n  placeholder="Countries"\n  class="w-[250px]"\n>\n  <ng-template appSelectLabel let-option>\n    <p>The value is: {{ option.content }}</p>\n  </ng-template>\n  @for (option of countries; track $index) {\n    <app-option [value]="option.code"> {{ option.name }} </app-option>\n  }\n</app-select>\n\n<p class="mt-4 mb-2">Directories</p>\n<app-select\n  [formControl]="dirFormControl"\n  placeholder="Countries"\n  class="w-[250px]"\n>\n  @for (dir of directories; track $index) {\n    <app-option-group>\n      <app-option-group-label>{{ dir.name }}</app-option-group-label>\n      @for (file of dir.files; track $index) {\n        <app-option [value]="file.name">{{ file.name }}</app-option>\n      }\n    </app-option-group>\n  }\n</app-select>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseSelectComponent, { className: "ShowCaseSelectComponent", filePath: "projects/docs/src/app/examples/select/show-case-select/show-case-select.component.ts", lineNumber: 76 });
})();

// projects/docs/src/app/features/select-page/select-page.component.ts
var _c0 = () => ["../", "multi-select"];
var ROOT = "select";
var SelectPageComponent = class _SelectPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        ...this.sourceTreeBuilder.fullComponent("option", ROOT),
        this.sourceTreeBuilder.component("option-group", ROOT),
        this.sourceTreeBuilder.component("option-group-label", ROOT)
      ],
      hideName: true
    }
  ];
  prerequisites = [
    {
      name: "popover",
      label: "Popover"
    },
    {
      name: "font-icon",
      label: "Font Icon"
    }
  ];
  apiInfo = {
    ariaLink: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",
    entities: [
      {
        name: "SelectComponent",
        type: "component",
        selector: "app-select",
        formBindable: true,
        inputs: [
          {
            name: "placeholder",
            type: "string",
            default: EMPTY_API_INPUT_DEFAULT_VALUE,
            description: "determines the placeholder text"
          },
          {
            name: "compareWith",
            type: "(o1: unknown, o2: unknown) => o1 === o2",
            default: "o1 === o2",
            description: "determines the compare function"
          },
          {
            name: "stretch",
            type: "boolean",
            default: "false",
            description: "determines whether the select button should take the full width of the container"
          },
          {
            name: "emptyText",
            type: "string",
            default: EMPTY_API_INPUT_DEFAULT_VALUE,
            description: "determines the empty text to be displayed when no options are available"
          }
        ]
      },
      {
        name: "OptionComponent",
        type: "component",
        selector: "app-option",
        inputs: [
          {
            name: "value",
            type: "unknown",
            description: "The value of the option",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Determines whether the option is disabled",
            default: "false"
          }
        ]
      },
      {
        name: "SelectLabelDirective",
        type: "directive",
        selector: "ng-template[appSelectLabel]",
        description: "The label of the select, you can use this directive instead of label input, when you need more customization. The template context will be the selected option"
      },
      {
        name: "OptionContentDirective",
        type: "directive",
        selector: "[appOptionContent]",
        description: `The content of the option, you can use this directive when your option includes different text content and you want to use specific text as a select label`
      },
      {
        name: "OptionGroupComponent",
        type: "component",
        selector: "app-option-group",
        description: "Groups related options",
        inputs: [
          {
            name: "label",
            type: "string",
            description: "The label of the option group",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          }
        ]
      },
      {
        name: "OptionGroupLabelComponent",
        type: "component",
        selector: "app-option-group-label",
        description: "The label of the option group, you can use this component instead of label input, when you need more customization"
      }
    ]
  };
  static \u0275fac = function SelectPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectPageComponent, selectors: [["doc-select-page"]], decls: 11, vars: 5, consts: [["label", "Select", "subTitle", "Displays a list of options for the user to select from, supporting single selections."], ["name", "select"], ["name", "Select", 3, "preprsAuto"], ["type", "component", "name", "select"], ["name", "select", 3, "sourceTree"], [3, "apiInfo"], [1, "underline", 3, "routerLink"]], template: function SelectPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-select", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-prerequisites", 2)(4, "doc-command-installation", 3)(5, "doc-source-tree", 4);
      \u0275\u0275elementStart(6, "doc-api-info", 5)(7, "doc-api-description");
      \u0275\u0275text(8, " For multiple selection, check ");
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10, "Multi Select");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("preprsAuto", ctx.prerequisites);
      \u0275\u0275advance(2);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ReactiveFormsModule,
    ShowCaseSelectComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    PrerequisitesComponent,
    ApiDescriptionComponent,
    RouterLink
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectPageComponent, [{
    type: Component,
    args: [{ selector: "doc-select-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ReactiveFormsModule,
      ShowCaseSelectComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      PrerequisitesComponent,
      ApiDescriptionComponent,
      RouterLink
    ], template: `<doc-blueprint-page
  label="Select"
  subTitle="Displays a list of options for the user to select from, supporting single selections."
>
  <doc-show-case name="select">
    <doc-show-case-select name="select"></doc-show-case-select>
  </doc-show-case>
  <doc-prerequisites name="Select" [preprsAuto]="prerequisites">
  </doc-prerequisites>
  <doc-command-installation type="component" name="select">
  </doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="select"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo">
    <doc-api-description>
      For multiple selection, check
      <a [routerLink]="['../', 'multi-select']" class="underline"
        >Multi Select</a
      >
    </doc-api-description>
  </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectPageComponent, { className: "SelectPageComponent", filePath: "projects/docs/src/app/features/select-page/select-page.component.ts", lineNumber: 41 });
})();
export {
  SelectPageComponent
};
//# sourceMappingURL=chunk-OUFJLVF6.js.map
