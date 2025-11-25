import {
  CheckboxComponent
} from "./chunk-NHZUYPQY.js";
import {
  InputDirective
} from "./chunk-7Y5KJBG7.js";
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
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-J4OMZXTK.js";
import "./chunk-QF5VCJ6S.js";
import "./chunk-MKNWGWE3.js";
import "./chunk-VQYCA752.js";
import "./chunk-GAYAR7LB.js";
import "./chunk-4UYB5JXN.js";
import "./chunk-JX5YVH27.js";
import "./chunk-RBCCWOK3.js";
import "./chunk-EPTODCGW.js";
import "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  Component,
  Input,
  Output,
  inject,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/input/show-case-input/show-case-input.component.ts
var ShowCaseInputComponent = class _ShowCaseInputComponent {
  username = model(...ngDevMode ? [void 0, { debugName: "username" }] : []);
  password = model(...ngDevMode ? [void 0, { debugName: "password" }] : []);
  age = model(false, ...ngDevMode ? [{ debugName: "age" }] : []);
  static \u0275fac = function ShowCaseInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseInputComponent, selectors: [["doc-show-case-input"]], inputs: { username: [1, "username"], password: [1, "password"], age: [1, "age"] }, outputs: { username: "usernameChange", password: "passwordChange", age: "ageChange" }, decls: 7, vars: 6, consts: [[1, "show-case"], ["appInput", "", "placeholder", "username", "name", "username", 3, "ngModelChange", "required", "ngModel"], ["appInput", "", "placeholder", "password", "type", "password", "name", "password", 3, "ngModelChange", "required", "ngModel"], [1, "age-container"], ["labelAlign", "start", "name", "age", 3, "ngModelChange", "ngModel"], ["appInput", "", "placeholder", "Age", "type", "number", 3, "disabled"]], template: function ShowCaseInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0)(1, "input", 1);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseInputComponent_Template_input_ngModelChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseInputComponent_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "app-checkbox", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseInputComponent_Template_app_checkbox_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.age, $event) || (ctx.age = $event);
        return $event;
      });
      \u0275\u0275text(5, "Age");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "input", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("required", true);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance();
      \u0275\u0275property("required", true);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.age);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.age());
    }
  }, dependencies: [InputDirective, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, CheckboxComponent], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  margin: 0 auto;\n  gap: 20px;\n}\n.show-case[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.age-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n/*# sourceMappingURL=show-case-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseInputComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-input", imports: [InputDirective, FormsModule, CheckboxComponent, FormsModule], template: '<form class="show-case">\n  <input\n    appInput\n    [required]="true"\n    placeholder="username"\n    [(ngModel)]="username"\n    name="username"\n  />\n  <input\n    appInput\n    placeholder="password"\n    type="password"\n    [required]="true"\n    [(ngModel)]="password"\n    name="password"\n  />\n  <div class="age-container">\n    <app-checkbox labelAlign="start" name="age" [(ngModel)]="age"\n      >Age</app-checkbox\n    >\n    <input appInput placeholder="Age" type="number" [disabled]="!age()" />\n  </div>\n</form>\n', styles: ["/* projects/docs/src/app/examples/input/show-case-input/show-case-input.component.css */\n.show-case {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  margin: 0 auto;\n  gap: 20px;\n}\n.show-case > * {\n  width: 100%;\n}\n.age-container {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n/*# sourceMappingURL=show-case-input.component.css.map */\n"] }]
  }], null, { username: [{ type: Input, args: [{ isSignal: true, alias: "username", required: false }] }, { type: Output, args: ["usernameChange"] }], password: [{ type: Input, args: [{ isSignal: true, alias: "password", required: false }] }, { type: Output, args: ["passwordChange"] }], age: [{ type: Input, args: [{ isSignal: true, alias: "age", required: false }] }, { type: Output, args: ["ageChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseInputComponent, { className: "ShowCaseInputComponent", filePath: "projects/docs/src/app/examples/input/show-case-input/show-case-input.component.ts", lineNumber: 12 });
})();

// projects/docs/src/app/features/input-page/input-page.component.ts
var ROOT = "input";
var InputPageComponent = class _InputPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [...this.sourceTreeBuilder.directive(ROOT, ROOT, true)],
      hideName: true
    }
  ];
  apiInfo = {
    stylesInGlobal: true,
    ariaDescription: "The Input directive uses the native <input> element as its host, making all accessibility features readily available.",
    entities: [
      {
        name: "InputDirective",
        type: "directive",
        selector: "input[appInput]"
      }
    ]
  };
  static \u0275fac = function InputPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputPageComponent, selectors: [["doc-input-page"]], decls: 6, vars: 4, consts: [[3, "subTitle", "label"], ["name", "input"], ["type", "component", "name", "input"], ["name", "input", 3, "sourceTree"], [3, "apiInfo"]], template: function InputPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-input");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "Input directive enhances native input with style")("label", "Input");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseInputComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputPageComponent, [{
    type: Component,
    args: [{ selector: "doc-input-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseInputComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: `<doc-blueprint-page
  [subTitle]="'Input directive enhances native input with style'"
  [label]="'Input'"
>
  <doc-show-case name="input">
    <doc-show-case-input></doc-show-case-input>
  </doc-show-case>
  <doc-command-installation type="component" name="input">
  </doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="input"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputPageComponent, { className: "InputPageComponent", filePath: "projects/docs/src/app/features/input-page/input-page.component.ts", lineNumber: 31 });
})();
export {
  InputPageComponent
};
//# sourceMappingURL=chunk-2ONOD6MW.js.map
