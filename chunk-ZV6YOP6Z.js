import {
  DialogCloseDirective,
  DialogService
} from "./chunk-HVOURX6R.js";
import {
  LabelComponent
} from "./chunk-RUFJODDP.js";
import {
  FormFieldComponent
} from "./chunk-B4G5D2YK.js";
import "./chunk-G4KCLVF4.js";
import {
  PrerequisitesComponent
} from "./chunk-NQLNCJ2F.js";
import {
  InputDirective
} from "./chunk-7Y5KJBG7.js";
import {
  ButtonComponent
} from "./chunk-GPD647ZZ.js";
import {
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE
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
import "./chunk-4UYB5JXN.js";
import "./chunk-JX5YVH27.js";
import "./chunk-RBCCWOK3.js";
import "./chunk-EPTODCGW.js";
import "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  Output,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/dialog/confirm.directive.ts
var ConfirmDirective = class _ConfirmDirective {
  confirmOptions = input.required(...ngDevMode ? [{ debugName: "confirmOptions" }] : []);
  approved = output();
  rejected = output();
  dialogService = inject(DialogService);
  open() {
    this.dialogService.confirm(this.confirmOptions()).closed.subscribe((result) => {
      if (result) {
        this.approved.emit();
      } else {
        this.rejected.emit();
      }
    });
  }
  static \u0275fac = function ConfirmDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ConfirmDirective, selectors: [["", "appConfirm", ""]], hostBindings: function ConfirmDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ConfirmDirective_click_HostBindingHandler() {
        return ctx.open();
      });
    }
  }, inputs: { confirmOptions: [1, "confirmOptions"] }, outputs: { approved: "approved", rejected: "rejected" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDirective, [{
    type: Directive,
    args: [{
      selector: "[appConfirm]",
      host: {
        "(click)": "open()"
      }
    }]
  }], null, { confirmOptions: [{ type: Input, args: [{ isSignal: true, alias: "confirmOptions", required: true }] }], approved: [{ type: Output, args: ["approved"] }], rejected: [{ type: Output, args: ["rejected"] }] });
})();

// projects/docs/src/app/examples/dialog/dialog-test/dialog-test.component.ts
var DialogTestComponent = class _DialogTestComponent {
  static \u0275fac = function DialogTestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogTestComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogTestComponent, selectors: [["doc-dialog-test"]], decls: 15, vars: 0, consts: [[1, "dialog-test"], ["appInput", "", 1, "w-full"], ["appButton", "", "appDialogClose", "", "color", "primary", 1, "submit-button"]], template: function DialogTestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-form-field")(2, "app-label");
      \u0275\u0275text(3, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "input", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-form-field")(6, "app-label");
      \u0275\u0275text(7, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "app-form-field")(10, "app-label");
      \u0275\u0275text(11, "Best Movie");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 2);
      \u0275\u0275text(14, " Submit ");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [
    FormFieldComponent,
    InputDirective,
    ButtonComponent,
    DialogCloseDirective,
    LabelComponent
  ], styles: ["\n\n.dialog-test[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin-top: 14px;\n}\n/*# sourceMappingURL=dialog-test.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogTestComponent, [{
    type: Component,
    args: [{ selector: "doc-dialog-test", imports: [
      FormFieldComponent,
      InputDirective,
      ButtonComponent,
      DialogCloseDirective,
      LabelComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="dialog-test">\n  <app-form-field>\n    <app-label>First Name</app-label>\n    <input appInput class="w-full" />\n  </app-form-field>\n  <app-form-field>\n    <app-label>Last Name</app-label>\n    <input appInput class="w-full" />\n  </app-form-field>\n  <app-form-field>\n    <app-label>Best Movie</app-label>\n    <input appInput class="w-full" />\n  </app-form-field>\n  <button appButton class="submit-button" appDialogClose color="primary">\n    Submit\n  </button>\n</div>\n', styles: ["/* projects/docs/src/app/examples/dialog/dialog-test/dialog-test.component.css */\n.dialog-test {\n  padding: 12px;\n  margin-top: 14px;\n}\n/*# sourceMappingURL=dialog-test.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogTestComponent, { className: "DialogTestComponent", filePath: "projects/docs/src/app/examples/dialog/dialog-test/dialog-test.component.ts", lineNumber: 21 });
})();

// projects/docs/src/app/examples/dialog/show-case-dialog/show-case-dialog.component.ts
var _c0 = () => ({ title: "Delete this item?", description: "Once deleted you cannot undo this action", yesLabel: "Delete", noLabel: "Cancel" });
var ShowCaseDialogComponent = class _ShowCaseDialogComponent {
  dialogService = inject(DialogService);
  showDialog() {
    this.dialogService.dialog(DialogTestComponent, {
      title: "Fill the user data"
    });
  }
  showConfirm() {
    this.dialogService.confirm({
      title: "Are you sure?",
      description: "It will delete user data"
    });
  }
  showAlert() {
    this.dialogService.alert({
      title: "Immediate action",
      description: "Please review the document",
      buttonLabel: "OK"
    });
  }
  deleteItem() {
    setTimeout(() => {
      alert("Delete item");
    });
  }
  static \u0275fac = function ShowCaseDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseDialogComponent, selectors: [["doc-show-case-dialog"]], decls: 9, vars: 2, consts: [[1, "section"], ["appButton", "", "variant", "outline", "color", "success", 3, "click"], ["appButton", "", "variant", "outline", 3, "click"], ["appButton", "", "variant", "outline", "color", "secondary", 3, "click"], ["appButton", "", "appConfirm", "", "variant", "outline", "color", "danger", 3, "approved", "confirmOptions"]], template: function ShowCaseDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function ShowCaseDialogComponent_Template_button_click_1_listener() {
        return ctx.showDialog();
      });
      \u0275\u0275text(2, " Dialog ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 2);
      \u0275\u0275listener("click", function ShowCaseDialogComponent_Template_button_click_3_listener() {
        return ctx.showAlert();
      });
      \u0275\u0275text(4, "Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function ShowCaseDialogComponent_Template_button_click_5_listener() {
        return ctx.showConfirm();
      });
      \u0275\u0275text(6, " Confirm ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("approved", function ShowCaseDialogComponent_Template_button_approved_7_listener() {
        return ctx.deleteItem();
      });
      \u0275\u0275text(8, " Inline Confirm ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("confirmOptions", \u0275\u0275pureFunction0(1, _c0));
    }
  }, dependencies: [ButtonComponent, ConfirmDirective], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n/*# sourceMappingURL=show-case-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseDialogComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-dialog", imports: [ButtonComponent, ConfirmDirective], template: `<div class="section">
  <button appButton (click)="showDialog()" variant="outline" color="success">
    Dialog
  </button>
  <button appButton (click)="showAlert()" variant="outline">Alert</button>
  <button appButton (click)="showConfirm()" variant="outline" color="secondary">
    Confirm
  </button>

  <button
    appButton
    appConfirm
    [confirmOptions]="{
      title: 'Delete this item?',
      description: 'Once deleted you cannot undo this action',
      yesLabel: 'Delete',
      noLabel: 'Cancel',
    }"
    (approved)="deleteItem()"
    variant="outline"
    color="danger"
  >
    Inline Confirm
  </button>
</div>
`, styles: ["/* projects/docs/src/app/examples/dialog/show-case-dialog/show-case-dialog.component.css */\n.section {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n/*# sourceMappingURL=show-case-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseDialogComponent, { className: "ShowCaseDialogComponent", filePath: "projects/docs/src/app/examples/dialog/show-case-dialog/show-case-dialog.component.ts", lineNumber: 13 });
})();

// projects/docs/src/app/features/dialog-page/dialog-page.component.ts
var ROOT = "dialog";
var DialogPageComponent = class _DialogPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  prerequisites = [
    {
      name: "button",
      label: "Button"
    }
  ];
  sourceTree = [
    {
      name: "/",
      files: [
        ...this.sourceTreeBuilder.service("dialog", ROOT),
        ...this.sourceTreeBuilder.directive("dialog-close", `${ROOT}`, true),
        this.sourceTreeBuilder.component("dialog-close-icon", `${ROOT}`)
      ],
      hideName: true
    },
    {
      name: `dialog`,
      files: [
        ...this.sourceTreeBuilder.fullComponent("dialog", `${ROOT}/dialog`)
      ]
    },
    {
      name: `alert-dialog`,
      files: [
        ...this.sourceTreeBuilder.fullComponent("alert-dialog", `${ROOT}/alert-dialog`)
      ]
    },
    {
      name: `confirm-dialog`,
      files: [
        ...this.sourceTreeBuilder.fullComponent("confirm-dialog", `${ROOT}/confirm-dialog`)
      ]
    }
  ];
  apiInfo = {
    ariaLink: "https://material.angular.io/cdk/dialog/overview#accessibility",
    entities: [
      {
        name: "DialogService",
        type: "service",
        description: "service that opens a dialog",
        methods: [
          {
            name: "dialog",
            description: "opens the dialog",
            returnType: "DialogReturn<T>",
            params: [
              {
                name: "component",
                type: "ComponentType<unknown>",
                description: "component to render inside the dialog."
              },
              {
                name: "options",
                type: "object",
                fields: [
                  {
                    name: "data",
                    type: "unknown",
                    description: "data to pass to the component."
                  },
                  {
                    name: "title",
                    type: "string",
                    description: "title of the drawer."
                  },
                  {
                    name: "hasBackdrop",
                    type: "boolean",
                    description: "whether the dialog has a backdrop.",
                    default: "true"
                  },
                  {
                    name: "disableClose",
                    type: "boolean",
                    description: "whether the dialog closes with the escape key or pointer events outside the panel element.",
                    default: "false"
                  },
                  {
                    name: "showClose",
                    type: "boolean",
                    description: "whether to show close icon",
                    default: "true"
                  }
                ]
              }
            ]
          },
          {
            name: "confirm",
            description: "opens a confirm dialog",
            returnType: "DialogReturn<T>",
            params: [
              {
                name: "options",
                type: "object",
                fields: [
                  {
                    name: "title",
                    type: "string",
                    description: "title of the dialog."
                  },
                  {
                    name: "description",
                    type: "string",
                    description: "description of the dialog."
                  },
                  {
                    name: "yesLabel",
                    type: "string",
                    description: "confirm button label",
                    default: "Yes"
                  },
                  {
                    name: "noLabel",
                    type: "string",
                    description: "cancel/reject button label",
                    default: "No"
                  }
                ]
              }
            ]
          },
          {
            name: "alert",
            description: "opens a alert dialog",
            returnType: "DialogReturn<T>",
            params: [
              {
                name: "options",
                type: "object",
                fields: [
                  {
                    name: "title",
                    type: "string",
                    description: "title of the alert dialog."
                  },
                  {
                    name: "description",
                    type: "string",
                    description: "description of the alert dialog."
                  },
                  {
                    name: "buttonLabel",
                    type: "string",
                    description: "alert button label",
                    default: "OK"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "DialogCloseDirective",
        selector: "[appDialogClose]",
        type: "directive",
        description: "A directive used to close the dialog. It can be placed on any element inside the dialog.",
        inputs: [
          {
            name: "appDialogClose",
            type: "unknown",
            description: "value to pass to the close method"
          }
        ]
      },
      {
        name: "ConfirmDirective",
        selector: "[appConfirm]",
        type: "directive",
        description: "A directive used to open a confirm dialog. It can be placed on any element.",
        inputs: [
          {
            name: "confirmOptions",
            type: `{title: string;
  description: string;
  yesLabel?: string;
  noLabel?: string;}`,
            description: "object with options for the confirm",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          }
        ],
        outputs: [
          {
            name: "approved",
            description: "emits when the dialog is approved",
            value: "void"
          },
          {
            name: "rejected",
            description: "emits when the dialog is rejected",
            value: "void"
          }
        ]
      }
    ]
  };
  static \u0275fac = function DialogPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogPageComponent, selectors: [["doc-dialog-page"]], decls: 7, vars: 4, consts: [[3, "label", "subTitle"], ["name", "dialog"], [3, "preprsAuto"], ["type", "component", "name", "dialog"], [3, "apiInfo"]], template: function DialogPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-dialog");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-prerequisites", 2)(4, "doc-command-installation", 3)(5, "doc-source-tree", 1)(6, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("label", "Dialog")("subTitle", "A window overlaid on either the primary window. It have three different types, confirm, alert and dialog");
      \u0275\u0275advance(3);
      \u0275\u0275property("preprsAuto", ctx.prerequisites);
      \u0275\u0275advance(3);
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseDialogComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    PrerequisitesComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogPageComponent, [{
    type: Component,
    args: [{ selector: "doc-dialog-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseDialogComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      PrerequisitesComponent
    ], template: `<doc-blueprint-page
  [label]="'Dialog'"
  [subTitle]="
    'A window overlaid on either the primary window. It have three different types, confirm, alert and dialog'
  "
>
  <doc-show-case name="dialog">
    <doc-show-case-dialog></doc-show-case-dialog>
  </doc-show-case>
  <doc-prerequisites [preprsAuto]="prerequisites"> </doc-prerequisites>
  <doc-command-installation type="component" name="dialog">
  </doc-command-installation>
  <doc-source-tree name="dialog"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogPageComponent, { className: "DialogPageComponent", filePath: "projects/docs/src/app/features/dialog-page/dialog-page.component.ts", lineNumber: 36 });
})();
export {
  DialogPageComponent
};
//# sourceMappingURL=chunk-ZV6YOP6Z.js.map
