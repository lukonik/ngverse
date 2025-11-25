import {
  OtpInputComponent
} from "./chunk-JMLDGGDP.js";
import {
  ToastService
} from "./chunk-BGYGIA7C.js";
import {
  PrerequisitesComponent
} from "./chunk-TAEOHQRX.js";
import "./chunk-QUXJML5I.js";
import {
  ButtonComponent
} from "./chunk-ESRFV6V7.js";
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
import "./chunk-3GLWUNBJ.js";
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
  ViewChild,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵviewQuerySignal
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/otp-input/show-case-otp-input/show-case-otp-input.component.ts
var ShowCaseOtpInputComponent = class _ShowCaseOtpInputComponent {
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  otpInput = viewChild.required(OtpInputComponent);
  toast = inject(ToastService);
  codeFilled(code) {
    this.toast.open({
      message: `Code filled: ${code}`,
      showCloseIcon: false
    });
  }
  recieveCode() {
    this.loading.set(true);
    setTimeout(() => {
      this.otpInput().fillFromText("1234");
      this.loading.set(false);
    }, 1e3);
  }
  static \u0275fac = function ShowCaseOtpInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseOtpInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseOtpInputComponent, selectors: [["doc-show-case-otp-input"]], viewQuery: function ShowCaseOtpInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.otpInput, OtpInputComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 5, vars: 1, consts: [["otpInput", ""], [1, "show-case"], [3, "filled"], ["appButton", "", 3, "click", "loading"]], template: function ShowCaseOtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-otp-input", 2, 0);
      \u0275\u0275listener("filled", function ShowCaseOtpInputComponent_Template_app_otp_input_filled_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.codeFilled($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function ShowCaseOtpInputComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.recieveCode());
      });
      \u0275\u0275text(4, " Recieve Code ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.loading());
    }
  }, dependencies: [OtpInputComponent, ButtonComponent], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=show-case-otp-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseOtpInputComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-otp-input", imports: [OtpInputComponent, ButtonComponent], template: '<div class="show-case">\n  <app-otp-input #otpInput (filled)="codeFilled($event)"></app-otp-input>\n  <button appButton (click)="recieveCode()" [loading]="loading()">\n    Recieve Code\n  </button>\n</div>\n', styles: ["/* projects/docs/src/app/examples/otp-input/show-case-otp-input/show-case-otp-input.component.css */\n.show-case {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n/*# sourceMappingURL=show-case-otp-input.component.css.map */\n"] }]
  }], null, { otpInput: [{ type: ViewChild, args: [forwardRef(() => OtpInputComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseOtpInputComponent, { className: "ShowCaseOtpInputComponent", filePath: "projects/docs/src/app/examples/otp-input/show-case-otp-input/show-case-otp-input.component.ts", lineNumber: 12 });
})();

// projects/docs/src/app/features/otp-input-page/otp-input-page.component.ts
var ROOT = "otp-input";
var OtpInputPageComponent = class _OtpInputPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  preprs = [
    {
      name: "input",
      label: "Input"
    }
  ];
  sourceTree = [
    {
      name: ROOT,
      files: [...this.sourceTreeBuilder.fullComponent(ROOT, ROOT)],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://ej2.syncfusion.com/react/documentation/otp-input/accessibility",
    entities: [
      {
        name: "OtpInputComponent",
        selector: "app-otp-input",
        type: "component",
        inputs: [
          {
            name: "codeLength",
            type: "number",
            default: "4",
            description: "The length of the OTP"
          },
          {
            name: "inputMode",
            type: "string",
            default: "numeric",
            description: "The input mode of the OTP"
          }
        ],
        outputs: [
          {
            name: "filled",
            description: "Emits the value of OTP when the OTP is filled",
            value: "string"
          }
        ],
        methods: [
          {
            name: "focus",
            returnType: "void",
            description: "Focuses the first input"
          },
          {
            name: "fillFromText",
            returnType: "void",
            description: "Fills the OTP from text",
            params: [
              {
                name: "text",
                type: "string",
                description: "The text to fill the OTP"
              }
            ]
          },
          {
            name: "clear",
            returnType: "void",
            description: "Clears the OTP"
          }
        ]
      }
    ]
  };
  static \u0275fac = function OtpInputPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtpInputPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpInputPageComponent, selectors: [["doc-otp-input-page"]], decls: 7, vars: 5, consts: [[3, "subTitle", "label"], ["name", "otp-input"], ["name", "OTP Input", 3, "preprsAuto"], ["name", "otp-input", 3, "sourceTree"], [3, "apiInfo"]], template: function OtpInputPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-otp-input");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-prerequisites", 2)(4, "doc-command-installation", 1)(5, "doc-source-tree", 3)(6, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "An OTP Input is a component for entering one-time passwords securely and efficiently.")("label", "OTP Input");
      \u0275\u0275advance(3);
      \u0275\u0275property("preprsAuto", ctx.preprs);
      \u0275\u0275advance(2);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseOtpInputComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    ApiInfoComponent,
    PrerequisitesComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtpInputPageComponent, [{
    type: Component,
    args: [{ selector: "doc-otp-input-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseOtpInputComponent,
      SourceTreeComponent,
      CommandInstallationComponent,
      ApiInfoComponent,
      PrerequisitesComponent
    ], template: `<doc-blueprint-page
  [subTitle]="
    'An OTP Input is a component for entering one-time passwords securely and efficiently.'
  "
  [label]="'OTP Input'"
>
  <doc-show-case name="otp-input">
    <doc-show-case-otp-input></doc-show-case-otp-input>
  </doc-show-case>
  <doc-prerequisites [preprsAuto]="preprs" name="OTP Input">
  </doc-prerequisites>

  <doc-command-installation name="otp-input"></doc-command-installation>
  <doc-source-tree name="otp-input" [sourceTree]="sourceTree"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"></doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpInputPageComponent, { className: "OtpInputPageComponent", filePath: "projects/docs/src/app/features/otp-input-page/otp-input-page.component.ts", lineNumber: 35 });
})();
export {
  OtpInputPageComponent
};
//# sourceMappingURL=chunk-FA45M6YV.js.map
