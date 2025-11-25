import {
  AUTO_GENERATED_API_DEFAULT_VALUE,
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE
} from "./chunk-BF7ARAHW.js";
import "./chunk-APVNZA6G.js";
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
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-3GLWUNBJ.js";
import "./chunk-BC37M6ZP.js";
import "./chunk-FK22TT2X.js";
import "./chunk-4YTCSZ5T.js";
import "./chunk-XGFB36A5.js";
import {
  _IdGenerator
} from "./chunk-64HPILVO.js";
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
  Input,
  Output,
  computed,
  forwardRef,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/radio-button/radio-group.component.ts
var _c0 = [[["app-radio-button"]]];
var _c1 = ["app-radio-button"];
var RadioGroupComponent = class _RadioGroupComponent {
  compareWith = input((o1, o2) => o1 === o2, ...ngDevMode ? [{ debugName: "compareWith" }] : []);
  name = input(inject(_IdGenerator).getId("radio-group-"), ...ngDevMode ? [{ debugName: "name" }] : []);
  vertical = input(false, ...ngDevMode ? [{ debugName: "vertical" }] : []);
  value = signal(void 0, ...ngDevMode ? [{ debugName: "value" }] : []);
  disabled = signal(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  registerOnChangefn;
  onTouchedfn;
  writeValue(value) {
    this.value.set(value);
  }
  registerOnChange(fn) {
    this.registerOnChangefn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedfn = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  selected(value) {
    this.value.set(value);
    this.registerOnChangefn?.(this.value());
    this.onTouchedfn?.();
  }
  static \u0275fac = function RadioGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadioGroupComponent, selectors: [["app-radio-group"]], inputs: { compareWith: [1, "compareWith"], name: [1, "name"], vertical: [1, "vertical"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: _RadioGroupComponent
    }
  ])], ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[1, "radio-group"]], template: function RadioGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("vertical", ctx.vertical());
    }
  }, styles: ["\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.radio-group.vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.ng-invalid.ng-touched[_nghost-%COMP%] {\n  color: var(--color-danger-color);\n}\n/*# sourceMappingURL=radio-group.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioGroupComponent, [{
    type: Component,
    args: [{ selector: "app-radio-group", imports: [], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: RadioGroupComponent
      }
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="radio-group" [class.vertical]="vertical()">\n  <ng-content select="app-radio-button"></ng-content>\n</div>\n', styles: ["/* projects/ngverse/src/lib/ui/radio-button/radio-group.component.css */\n.radio-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.radio-group.vertical {\n  flex-direction: column;\n  align-items: flex-start;\n}\n:host.ng-invalid.ng-touched {\n  color: var(--color-danger-color);\n}\n/*# sourceMappingURL=radio-group.component.css.map */\n"] }]
  }], null, { compareWith: [{ type: Input, args: [{ isSignal: true, alias: "compareWith", required: false }] }], name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], vertical: [{ type: Input, args: [{ isSignal: true, alias: "vertical", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadioGroupComponent, { className: "RadioGroupComponent", filePath: "projects/ngverse/src/lib/ui/radio-button/radio-group.component.ts", lineNumber: 31 });
})();

// projects/ngverse/src/lib/ui/radio-button/radio-button.component.ts
var _c02 = ["*"];
var RadioButtonComponent = class _RadioButtonComponent {
  disabled = input(...ngDevMode ? [void 0, { debugName: "disabled" }] : []);
  id = input(inject(_IdGenerator).getId("radio-button-"), ...ngDevMode ? [{ debugName: "id" }] : []);
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  radioGroup = inject(forwardRef(() => RadioGroupComponent));
  name = this.radioGroup.name;
  radioButtonDisabled = computed(() => {
    return this.disabled() || this.radioGroup.disabled();
  }, ...ngDevMode ? [{ debugName: "radioButtonDisabled" }] : []);
  selected = computed(() => {
    return this.radioGroup.compareWith()(this.radioGroup.value(), this.value());
  }, ...ngDevMode ? [{ debugName: "selected" }] : []);
  toggle() {
    this.radioGroup.selected(this.value());
  }
  static \u0275fac = function RadioButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadioButtonComponent, selectors: [["app-radio-button"]], inputs: { disabled: [1, "disabled"], id: [1, "id"], value: [1, "value"] }, ngContentSelectors: _c02, decls: 7, vars: 8, consts: [[1, "radio-button"], [1, "native-radio-button-container"], ["type", "radio", 1, "native-radio-button", 3, "change", "disabled", "id", "name", "checked"], [1, "radio-button-label", 3, "for"]], template: function RadioButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
      \u0275\u0275listener("change", function RadioButtonComponent_Template_input_change_2_listener() {
        return ctx.toggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-font-icon");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "label", 3);
      \u0275\u0275projection(6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("disabled", ctx.radioButtonDisabled());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.radioButtonDisabled())("id", ctx.id())("name", ctx.name())("checked", ctx.selected());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.selected() ? "radio_button_checked" : "radio_button_unchecked");
      \u0275\u0275advance();
      \u0275\u0275property("for", ctx.id());
    }
  }, dependencies: [FontIconComponent], styles: ["\n\n.native-radio-button-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.native-radio-button[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1;\n}\n.radio-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.radio-button.disabled[_ngcontent-%COMP%] {\n  color: var(--color-disabled-foreground);\n}\n.radio-button-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n}\n.radio-button-icon.checked[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.native-radio-button[_ngcontent-%COMP%]:focus-visible    + .radio-button-icon[_ngcontent-%COMP%] {\n  outline: 1px solid var(--color-ring);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=radio-button.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonComponent, [{
    type: Component,
    args: [{ selector: "app-radio-button", imports: [FontIconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="radio-button" [class.disabled]="radioButtonDisabled()">
  <div class="native-radio-button-container">
    <input
      [disabled]="radioButtonDisabled()"
      (change)="toggle()"
      class="native-radio-button"
      [id]="id()"
      type="radio"
      [name]="name()"
      [checked]="selected()"
    />
    <app-font-icon>{{
      selected() ? 'radio_button_checked' : 'radio_button_unchecked'
    }}</app-font-icon>
  </div>
  <label class="radio-button-label" [for]="id()">
    <ng-content></ng-content>
  </label>
</div>
`, styles: ["/* projects/ngverse/src/lib/ui/radio-button/radio-button.component.css */\n.native-radio-button-container {\n  position: relative;\n}\n.native-radio-button {\n  position: absolute;\n  opacity: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1;\n}\n.radio-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.radio-button.disabled {\n  color: var(--color-disabled-foreground);\n}\n.radio-button-icon {\n  cursor: pointer;\n  display: flex;\n}\n.radio-button-icon.checked {\n  color: var(--color-primary);\n}\n.native-radio-button:focus-visible + .radio-button-icon {\n  outline: 1px solid var(--color-ring);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=radio-button.component.css.map */\n"] }]
  }], null, { disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadioButtonComponent, { className: "RadioButtonComponent", filePath: "projects/ngverse/src/lib/ui/radio-button/radio-button.component.ts", lineNumber: 19 });
})();

// projects/docs/src/app/examples/radio-button/show-case-radio-button/show-case-radio-button.component.ts
function ShowCaseRadioButtonComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-radio-button", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("value", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.firstName);
  }
}
var ShowCaseRadioButtonComponent = class _ShowCaseRadioButtonComponent {
  values = [
    {
      firstName: "Apple",
      price: 30
    },
    {
      firstName: "Orange",
      price: 70
    },
    {
      firstName: "Cherry",
      price: 100
    }
  ];
  val = model(this.values[0], ...ngDevMode ? [{ debugName: "val" }] : []);
  compare(o1, o2) {
    return o1?.price === o2.price;
  }
  static \u0275fac = function ShowCaseRadioButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseRadioButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseRadioButtonComponent, selectors: [["doc-show-case-radio-button"]], inputs: { val: [1, "val"] }, outputs: { val: "valChange" }, decls: 3, vars: 3, consts: [[3, "ngModelChange", "ngModel", "vertical", "compareWith"], [3, "value"]], template: function ShowCaseRadioButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-radio-group", 0);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseRadioButtonComponent_Template_app_radio_group_ngModelChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.val, $event) || (ctx.val = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(1, ShowCaseRadioButtonComponent_For_2_Template, 2, 2, "app-radio-button", 1, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275twoWayProperty("ngModel", ctx.val);
      \u0275\u0275property("vertical", true)("compareWith", ctx.compare);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.values);
    }
  }, dependencies: [
    RadioButtonComponent,
    RadioGroupComponent,
    ReactiveFormsModule,
    NgControlStatus,
    FormsModule,
    NgModel
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseRadioButtonComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-radio-button", imports: [
      RadioButtonComponent,
      RadioGroupComponent,
      ReactiveFormsModule,
      FormsModule
    ], template: '<app-radio-group [(ngModel)]="val" [vertical]="true" [compareWith]="compare">\n  @for (item of values; track $index) {\n    <app-radio-button [value]="item"> {{ item.firstName }}</app-radio-button>\n  }\n</app-radio-group>\n' }]
  }], null, { val: [{ type: Input, args: [{ isSignal: true, alias: "val", required: false }] }, { type: Output, args: ["valChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseRadioButtonComponent, { className: "ShowCaseRadioButtonComponent", filePath: "projects/docs/src/app/examples/radio-button/show-case-radio-button/show-case-radio-button.component.ts", lineNumber: 17 });
})();

// projects/docs/src/app/features/radio-button-page/radio-button-page.component.ts
var ROOT = "radio-button";
var RadioButtonPageComponent = class _RadioButtonPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: "radio-button",
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        this.sourceTreeBuilder.component("radio-button-icon", ROOT),
        ...this.sourceTreeBuilder.fullComponent("radio-group", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    entities: [
      {
        name: "radio-group",
        selector: "app-radio-group",
        type: "component",
        formBindable: true,
        inputs: [
          {
            name: "vertical",
            type: "boolean",
            description: "displays radio-buttons vertically",
            default: "false"
          },
          {
            name: "name",
            type: "string",
            description: 'Sets name attribute of the all inner input[type="radio"]',
            default: AUTO_GENERATED_API_DEFAULT_VALUE
          },
          {
            name: "compareWith",
            type: "(o1: any, o2: any) => boolean",
            description: "Function to compare the option values with the selected values. The first argument is a value from an option. The second is a value from the selection",
            default: "(o1, o2) => o1 === o2"
          }
        ]
      },
      {
        name: "radio-button",
        selector: "app-radio-button",
        type: "component",
        inputs: [
          {
            name: "disabled",
            type: "boolean",
            description: "Disables the radio-button",
            default: "false"
          },
          {
            name: "id",
            type: "string",
            description: 'Sets id attribute to the input[type="radio"]',
            default: AUTO_GENERATED_API_DEFAULT_VALUE
          },
          {
            name: "value",
            type: "any",
            description: "Sets the value of radio-button",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          }
        ]
      }
    ]
  };
  static \u0275fac = function RadioButtonPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadioButtonPageComponent, selectors: [["doc-radio-button-page"]], decls: 5, vars: 2, consts: [["label", "Radio Button", "subTitle", "Radio button is a set of buttons wrapped in Radio Group, where no more than one of the buttons can be checked at a time."], ["name", "radio-button"], ["name", "radio-button", 3, "sourceTree"], [3, "apiInfo"]], template: function RadioButtonPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-radio-button");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-source-tree", 2)(4, "doc-api-info", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ReactiveFormsModule,
    ShowCaseRadioButtonComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonPageComponent, [{
    type: Component,
    args: [{ selector: "doc-radio-button-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ReactiveFormsModule,
      ShowCaseRadioButtonComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: '<doc-blueprint-page\n  label="Radio Button"\n  subTitle="Radio button is a set of buttons wrapped in Radio Group, where no more than one of the buttons can be checked at a time."\n>\n  <doc-show-case name="radio-button">\n    <doc-show-case-radio-button> </doc-show-case-radio-button>\n  </doc-show-case>\n  <doc-source-tree\n    [sourceTree]="sourceTree"\n    name="radio-button"\n  ></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadioButtonPageComponent, { className: "RadioButtonPageComponent", filePath: "projects/docs/src/app/features/radio-button-page/radio-button-page.component.ts", lineNumber: 33 });
})();
export {
  RadioButtonPageComponent
};
//# sourceMappingURL=chunk-QUQC2CCV.js.map
