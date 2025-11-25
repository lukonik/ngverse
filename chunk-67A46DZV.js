import {
  LabelComponent
} from "./chunk-X4ETKPWP.js";
import {
  FormFieldComponent
} from "./chunk-74UXXUOO.js";
import {
  ToastService
} from "./chunk-BGYGIA7C.js";
import {
  ButtonComponent
} from "./chunk-ESRFV6V7.js";
import {
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE
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
  OptionComponent,
  SelectComponent,
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-Y6XO3YM5.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/toast/show-case-toast/show-case-toast.component.ts
function ShowCaseToastComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const position_r1 = ctx.$implicit;
    \u0275\u0275property("value", position_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", position_r1.name, " ");
  }
}
function ShowCaseToastComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2, " ");
  }
}
var ShowCaseToastComponent = class _ShowCaseToastComponent {
  toastService = inject(ToastService);
  position = model("bottom_center", ...ngDevMode ? [{ debugName: "position" }] : []);
  positions = [
    { value: "top_left", name: "Top Left" },
    { value: "top_center", name: "Top Center" },
    { value: "top_right", name: "Top Right" },
    { value: "right_center", name: "Right Center" },
    { value: "bottom_left", name: "Bottom Left" },
    { value: "bottom_center", name: "Bottom Center" },
    { value: "left_center", name: "Left Center" },
    { value: "right_bottom", name: "Right Bottom" }
  ];
  types = ["success", "warning", "danger"];
  type = model(void 0, ...ngDevMode ? [{ debugName: "type" }] : []);
  showToast() {
    this.toastService.open({
      position: this.position(),
      type: this.type(),
      message: "Current time is: " + (/* @__PURE__ */ new Date()).toLocaleTimeString()
    });
  }
  static \u0275fac = function ShowCaseToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseToastComponent, selectors: [["doc-show-case-toast"]], inputs: { position: [1, "position"], type: [1, "type"] }, outputs: { position: "positionChange", type: "typeChange" }, decls: 16, vars: 2, consts: [[1, "show-case"], [1, "configuration"], [1, "option", 3, "ngModelChange", "ngModel"], [3, "value"], ["placeholder", "Default", 1, "option", 3, "ngModelChange", "ngModel"], ["appButton", "", 3, "click"]], template: function ShowCaseToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-form-field")(3, "app-label");
      \u0275\u0275text(4, "Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-select", 2);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseToastComponent_Template_app_select_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.position, $event) || (ctx.position = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(6, ShowCaseToastComponent_For_7_Template, 2, 2, "app-option", 3, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "app-form-field")(9, "app-label");
      \u0275\u0275text(10, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseToastComponent_Template_app_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.type, $event) || (ctx.type = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(12, ShowCaseToastComponent_For_13_Template, 2, 2, "app-option", 3, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "button", 5);
      \u0275\u0275listener("click", function ShowCaseToastComponent_Template_button_click_14_listener() {
        return ctx.showToast();
      });
      \u0275\u0275text(15, "Show Toast");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.position);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.positions);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.type);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.types);
    }
  }, dependencies: [
    ButtonComponent,
    SelectComponent,
    OptionComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    FormFieldComponent,
    LabelComponent
  ], styles: ["\n\n.option[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.configuration[_ngcontent-%COMP%] {\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n/*# sourceMappingURL=show-case-toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseToastComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-toast", imports: [
      ButtonComponent,
      SelectComponent,
      OptionComponent,
      FormsModule,
      FormFieldComponent,
      LabelComponent
    ], template: '<div class="show-case">\n  <div class="configuration">\n    <app-form-field>\n      <app-label>Position</app-label>\n      <app-select class="option" [(ngModel)]="position">\n        @for (position of positions; track $index) {\n          <app-option [value]="position.value">\n            {{ position.name }}\n          </app-option>\n        }\n      </app-select>\n    </app-form-field>\n    <app-form-field>\n      <app-label>Type</app-label>\n      <app-select placeholder="Default" class="option" [(ngModel)]="type">\n        @for (type of types; track $index) {\n          <app-option [value]="type">\n            {{ type }}\n          </app-option>\n        }\n      </app-select>\n    </app-form-field>\n  </div>\n  <button appButton (click)="showToast()">Show Toast</button>\n</div>\n', styles: ["/* projects/docs/src/app/examples/toast/show-case-toast/show-case-toast.component.css */\n.option {\n  width: 250px;\n}\n.configuration {\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n/*# sourceMappingURL=show-case-toast.component.css.map */\n"] }]
  }], null, { position: [{ type: Input, args: [{ isSignal: true, alias: "position", required: false }] }, { type: Output, args: ["positionChange"] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }, { type: Output, args: ["typeChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseToastComponent, { className: "ShowCaseToastComponent", filePath: "projects/docs/src/app/examples/toast/show-case-toast/show-case-toast.component.ts", lineNumber: 27 });
})();

// projects/docs/src/app/features/toast-page/toast-page.component.ts
var ROOT = "toast";
var ToastPageComponent = class _ToastPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: "toast",
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        ...this.sourceTreeBuilder.service("toast", ROOT),
        this.sourceTreeBuilder.component("toast-close", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    entities: [
      {
        name: "ToastService",
        type: "service",
        description: "Service for toast",
        methods: [
          {
            name: "open",
            returnType: "Observable<void>",
            returnDescription: "returns observable that emits when the toast is closed",
            description: "Opens the toast",
            params: [
              {
                name: "options",
                type: "object",
                fields: [
                  {
                    name: "message",
                    type: "string",
                    description: "text to display",
                    default: EMPTY_API_INPUT_DEFAULT_VALUE
                  },
                  {
                    name: "position",
                    type: `top_left
                    | top_center
                    | top_right
                    | right_center
                    | right_bottom
                    | bottom_center
                    | bottom_left
                    | left_center`,
                    description: "Defines where to put the toast",
                    default: "right_bottom"
                  },
                  {
                    name: "showCloseIcon",
                    type: "boolean",
                    description: "Shows close icon",
                    default: "true"
                  },
                  {
                    name: "autoClose",
                    type: "boolean",
                    description: "Automatically closes the toast when the closeDelay expires.",
                    default: "true"
                  },
                  {
                    name: "closeDelay",
                    type: "number",
                    description: "The duration (in milliseconds) to wait before automatically closing the toast.",
                    default: "3000ms"
                  },
                  {
                    name: "type",
                    type: "default | success | warning | danger",
                    description: "Type of the toast",
                    default: "defaukt"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  static \u0275fac = function ToastPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastPageComponent, selectors: [["doc-toast-page"]], decls: 6, vars: 4, consts: [[3, "subTitle", "label"], ["name", "toast"], ["name", "toast", 3, "sourceTree"], [3, "apiInfo"]], template: function ToastPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-toast");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 1)(4, "doc-source-tree", 2)(5, "doc-api-info", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "A toast is a brief message that provides user feedback, often disappearing automatically.")("label", "Toast");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseToastComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastPageComponent, [{
    type: Component,
    args: [{ selector: "doc-toast-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseToastComponent,
      SourceTreeComponent,
      CommandInstallationComponent,
      ApiInfoComponent
    ], template: `<doc-blueprint-page
  [subTitle]="
    'A toast is a brief message that provides user feedback, often disappearing automatically.'
  "
  [label]="'Toast'"
>
  <doc-show-case name="toast">
    <doc-show-case-toast></doc-show-case-toast>
  </doc-show-case>
  <doc-command-installation name="toast"></doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="toast"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastPageComponent, { className: "ToastPageComponent", filePath: "projects/docs/src/app/features/toast-page/toast-page.component.ts", lineNumber: 32 });
})();
export {
  ToastPageComponent
};
//# sourceMappingURL=chunk-67A46DZV.js.map
