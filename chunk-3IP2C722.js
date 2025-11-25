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
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator
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
  Directive,
  Input,
  Output,
  inject,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/textarea/textarea.directive.ts
var TextareaDirective = class _TextareaDirective {
  static \u0275fac = function TextareaDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextareaDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TextareaDirective, selectors: [["textarea", "appTextarea", ""]], hostAttrs: [1, "border", "focus-visible:outline-ring", "focus-visible:outline", "border-border", "rounded-md", "py-1.5", "px-2.5", "bg-background", "[.ng-invalid.ng-touched]:border-danger", "disabled:bg-disabled", "disabled:text-disabled-foreground", "read-only:bg-disabled", "read-only:text-disabled-foreground"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaDirective, [{
    type: Directive,
    args: [{
      selector: "textarea[appTextarea]",
      host: {
        class: "border focus-visible:outline-ring focus-visible:outline border-border rounded-md py-1.5 px-2.5 bg-background [.ng-invalid.ng-touched]:border-danger disabled:bg-disabled disabled:text-disabled-foreground read-only:bg-disabled read-only:text-disabled-foreground"
      }
    }]
  }], null, null);
})();

// projects/docs/src/app/examples/textarea/show-case-textarea/show-case-textarea.component.ts
var ShowCaseTextareaComponent = class _ShowCaseTextareaComponent {
  title = model(...ngDevMode ? [void 0, { debugName: "title" }] : []);
  description = model(...ngDevMode ? [void 0, { debugName: "description" }] : []);
  static \u0275fac = function ShowCaseTextareaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseTextareaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseTextareaComponent, selectors: [["doc-show-case-textarea"]], inputs: { title: [1, "title"], description: [1, "description"] }, outputs: { title: "titleChange", description: "descriptionChange" }, decls: 3, vars: 2, consts: [[1, "show-case"], ["appTextarea", "", "rows", "30", "placeholder", "Non resizable, fixed rows with required validation", "required", "", 1, "h-[200px]", 3, "ngModelChange", "ngModel"], ["resize", "vertical", "appTextarea", "", "placeholder", "Resizable", 3, "ngModelChange", "ngModel"]], template: function ShowCaseTextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "textarea", 1);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseTextareaComponent_Template_textarea_ngModelChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "textarea", 2);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseTextareaComponent_Template_textarea_ngModelChange_2_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.title);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.description);
    }
  }, dependencies: [TextareaDirective, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n}\n.resize-none[_ngcontent-%COMP%] {\n  resize: none;\n}\n/*# sourceMappingURL=show-case-textarea.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseTextareaComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-textarea", imports: [TextareaDirective, FormsModule], template: '<div class="show-case">\n  <textarea\n    appTextarea\n    rows="30"\n    class="h-[200px]"\n    placeholder="Non resizable, fixed rows with required validation"\n    required\n    [(ngModel)]="title"\n  ></textarea>\n\n  <textarea\n    resize="vertical"\n    appTextarea\n    placeholder="Resizable"\n    [(ngModel)]="description"\n  ></textarea>\n</div>\n', styles: ["/* projects/docs/src/app/examples/textarea/show-case-textarea/show-case-textarea.component.css */\n.show-case {\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n}\n.resize-none {\n  resize: none;\n}\n/*# sourceMappingURL=show-case-textarea.component.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }, { type: Output, args: ["titleChange"] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }, { type: Output, args: ["descriptionChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseTextareaComponent, { className: "ShowCaseTextareaComponent", filePath: "projects/docs/src/app/examples/textarea/show-case-textarea/show-case-textarea.component.ts", lineNumber: 11 });
})();

// projects/docs/src/app/features/textarea-page/textarea-page.component.ts
var ROOT = "textarea";
var TextareaPageComponent = class _TextareaPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: "textarea",
      files: [...this.sourceTreeBuilder.directive(ROOT, ROOT, true)],
      hideName: true
    }
  ];
  apiInfo = {
    ariaDescription: "The Textarea directive uses the native <textarea> element as its host, making all accessibility features readily available.",
    stylesInGlobal: true,
    entities: [
      {
        name: "TextareaDirective",
        type: "directive",
        selector: "textarea[appTextarea]",
        inputs: [
          {
            name: "resize",
            type: "none | both | horizontal | vertical | block | inline",
            description: "resize type",
            default: "none"
          }
        ]
      }
    ]
  };
  static \u0275fac = function TextareaPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextareaPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextareaPageComponent, selectors: [["doc-textarea-page"]], decls: 6, vars: 3, consts: [["label", "textarea", 3, "subTitle"], ["name", "textarea"], ["type", "component", "name", "textarea"], ["name", "textarea", 3, "sourceTree"], [3, "apiInfo"]], template: function TextareaPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-textarea");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "Textarea directive enhances native textarea with style");
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
    ShowCaseTextareaComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaPageComponent, [{
    type: Component,
    args: [{ selector: "doc-textarea-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ShowCaseTextareaComponent
    ], template: `<doc-blueprint-page
  label="textarea"
  [subTitle]="'Textarea directive enhances native textarea with style'"
>
  <doc-show-case name="textarea">
    <doc-show-case-textarea></doc-show-case-textarea>
  </doc-show-case>
  <doc-command-installation type="component" name="textarea">
  </doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="textarea"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextareaPageComponent, { className: "TextareaPageComponent", filePath: "projects/docs/src/app/features/textarea-page/textarea-page.component.ts", lineNumber: 29 });
})();
export {
  TextareaPageComponent
};
//# sourceMappingURL=chunk-3IP2C722.js.map
