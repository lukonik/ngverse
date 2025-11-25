import {
  DIALOG_DATA,
  Dialog,
  DialogRef
} from "./chunk-INRZUO4S.js";
import {
  ButtonComponent
} from "./chunk-3AYE667Y.js";
import {
  CdkPortalOutlet,
  ComponentPortal
} from "./chunk-XGFB36A5.js";
import {
  FontIconComponent
} from "./chunk-K3WRTE43.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/dialog/dialog-close.directive.ts
var DialogCloseDirective = class _DialogCloseDirective {
  dialogRef = inject(DialogRef);
  value = input(void 0, ...ngDevMode ? [{ debugName: "value", alias: "appDialogClose" }] : [{ alias: "appDialogClose" }]);
  onClick() {
    this.dialogRef.close(this.value());
  }
  static \u0275fac = function DialogCloseDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogCloseDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DialogCloseDirective, selectors: [["", "appDialogClose", ""]], hostBindings: function DialogCloseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DialogCloseDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  }, inputs: { value: [1, "appDialogClose", "value"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[appDialogClose]",
      host: {
        "(click)": "onClick()"
      }
    }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "appDialogClose", required: false }] }] });
})();

// projects/ngverse/src/lib/ui/dialog/alert-dialog/alert-dialog.component.ts
var AlertDialogComponent = class _AlertDialogComponent {
  dialogData = inject(DIALOG_DATA);
  dialogRef = inject(DialogRef);
  get title() {
    return this.dialogData.title;
  }
  get description() {
    return this.dialogData.description;
  }
  get buttonLabel() {
    return this.dialogData.buttonLabel;
  }
  static \u0275fac = function AlertDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 8, vars: 3, consts: [[1, "shadow-default", "min-w-80", "rounded-md", "bg-background", "p-4"], [1, "text-lg", "font-medium"], [1, "mt-3", "flex", "items-center", "justify-end"], ["type", "button", "appButton", "", "variant", "link", "appDialogClose", ""]], template: function AlertDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.description);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.buttonLabel, " ");
    }
  }, dependencies: [DialogCloseDirective, ButtonComponent], styles: ["\n\n.alert[_ngcontent-%COMP%] {\n  background: var(--color-background);\n  border-radius: 6px;\n  border: var(--border);\n  box-shadow: var(--color-shadow);\n  min-width: 300px;\n  padding: 16px;\n}\n.alert-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.alert-actions[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n  justify-content: end;\n  align-items: center;\n}\n/*# sourceMappingURL=alert-dialog.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertDialogComponent, [{
    type: Component,
    args: [{ selector: "app-alert-dialog", imports: [DialogCloseDirective, ButtonComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="shadow-default min-w-80 rounded-md bg-background p-4">\n  <h2 class="text-lg font-medium">{{ title }}</h2>\n  <p>{{ description }}</p>\n  <div class="mt-3 flex items-center justify-end">\n    <button type="button" appButton variant="link" appDialogClose>\n      {{ buttonLabel }}\n    </button>\n  </div>\n</div>\n', styles: ["/* projects/ngverse/src/lib/ui/dialog/alert-dialog/alert-dialog.component.css */\n.alert {\n  background: var(--color-background);\n  border-radius: 6px;\n  border: var(--border);\n  box-shadow: var(--color-shadow);\n  min-width: 300px;\n  padding: 16px;\n}\n.alert-title {\n  font-size: 18px;\n  font-weight: 500;\n}\n.alert-actions {\n  display: flex;\n  margin-top: 10px;\n  justify-content: end;\n  align-items: center;\n}\n/*# sourceMappingURL=alert-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertDialogComponent, { className: "AlertDialogComponent", filePath: "projects/ngverse/src/lib/ui/dialog/alert-dialog/alert-dialog.component.ts", lineNumber: 19 });
})();

// projects/ngverse/src/lib/ui/dialog/confirm-dialog/confirm-dialog.component.ts
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  dialogData = inject(DIALOG_DATA);
  dialogRef = inject(DialogRef);
  get title() {
    return this.dialogData.title;
  }
  get description() {
    return this.dialogData.description;
  }
  get yesLabel() {
    return this.dialogData.yesLabel;
  }
  get noLabel() {
    return this.dialogData.noLabel;
  }
  yes() {
    this.dialogRef.close(true);
    this.dialogRef.close();
  }
  no() {
    this.dialogRef.close(false);
    this.dialogRef.close();
  }
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 10, vars: 4, consts: [[1, "shadow-default", "min-w-80", "rounded-md", "bg-background", "p-4"], [1, "text-lg", "font-medium"], [1, "mt-3", "flex", "items-center", "justify-end", "gap-2"], ["type", "button", "appButton", "", "variant", "link", "color", "primary", 3, "click"], ["type", "button", "appButton", "", "color", "secondary", "variant", "link", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
        return ctx.yes();
      });
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
        return ctx.no();
      });
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.description);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.yesLabel, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.noLabel, " ");
    }
  }, dependencies: [ButtonComponent], styles: ["\n\n.confirm[_ngcontent-%COMP%] {\n  background: var(--color-background);\n  border-radius: 6px;\n  border: var(--border);\n  box-shadow: var(--color-shadow);\n  min-width: 300px;\n  padding: 16px;\n}\n.confirm-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n  justify-content: end;\n  align-items: center;\n  gap: 6px;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", imports: [ButtonComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="shadow-default min-w-80 rounded-md bg-background p-4">\n  <h2 class="text-lg font-medium">{{ title }}</h2>\n  <p>{{ description }}</p>\n  <div class="mt-3 flex items-center justify-end gap-2">\n    <button\n      type="button"\n      appButton\n      variant="link"\n      color="primary"\n      (click)="yes()"\n    >\n      {{ yesLabel }}\n    </button>\n    <button\n      type="button"\n      appButton\n      color="secondary"\n      variant="link"\n      (click)="no()"\n    >\n      {{ noLabel }}\n    </button>\n  </div>\n</div>\n', styles: ["/* projects/ngverse/src/lib/ui/dialog/confirm-dialog/confirm-dialog.component.css */\n.confirm {\n  background: var(--color-background);\n  border-radius: 6px;\n  border: var(--border);\n  box-shadow: var(--color-shadow);\n  min-width: 300px;\n  padding: 16px;\n}\n.confirm-title {\n  font-size: 18px;\n  font-weight: 500;\n}\n.confirm-actions {\n  display: flex;\n  margin-top: 10px;\n  justify-content: end;\n  align-items: center;\n  gap: 6px;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "projects/ngverse/src/lib/ui/dialog/confirm-dialog/confirm-dialog.component.ts", lineNumber: 19 });
})();

// projects/ngverse/src/lib/ui/dialog/dialog/dialog.component.ts
function DialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function DialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "app-font-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DialogComponent_ng_template_4_Template(rf, ctx) {
}
var DialogComponent = class _DialogComponent {
  dialogData = inject(DIALOG_DATA);
  componentPortal;
  get showClose() {
    return this.dialogData.showClose;
  }
  get title() {
    return this.dialogData.title;
  }
  constructor() {
    this.componentPortal = new ComponentPortal(this.dialogData.component);
  }
  static \u0275fac = function DialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogComponent, selectors: [["app-dialog"]], decls: 5, vars: 3, consts: [[1, "rounded-md", "bg-background", "shadow-md"], [1, "flex", "items-center", "p-3"], ["appDialogClose", "", "appButton", "", "icon", "", "size", "sm", "variant", "link", "color", "secondary", "aria-label", "Close the dialog", 1, "ml-auto"], [3, "cdkPortalOutlet"]], template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, DialogComponent_Conditional_2_Template, 2, 1, "p");
      \u0275\u0275conditionalCreate(3, DialogComponent_Conditional_3_Template, 3, 0, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, DialogComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.title ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showClose ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("cdkPortalOutlet", ctx.componentPortal);
    }
  }, dependencies: [
    CdkPortalOutlet,
    DialogCloseDirective,
    ButtonComponent,
    FontIconComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogComponent, [{
    type: Component,
    args: [{ selector: "app-dialog", imports: [
      CdkPortalOutlet,
      DialogCloseDirective,
      ButtonComponent,
      FontIconComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="rounded-md bg-background shadow-md">\n  <div class="flex items-center p-3">\n    @if (title) {\n      <p>{{ title }}</p>\n    }\n    @if (showClose) {\n      <button\n        appDialogClose\n        appButton\n        icon\n        size="sm"\n        variant="link"\n        color="secondary"\n        aria-label="Close the dialog"\n        class="ml-auto"\n      >\n        <app-font-icon>close</app-font-icon>\n      </button>\n    }\n  </div>\n  <ng-template [cdkPortalOutlet]="componentPortal"></ng-template>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogComponent, { className: "DialogComponent", filePath: "projects/ngverse/src/lib/ui/dialog/dialog/dialog.component.ts", lineNumber: 31 });
})();

// projects/ngverse/src/lib/ui/dialog/dialog.service.ts
var DialogService = class _DialogService {
  _dialogService = inject(Dialog);
  dialog(component, options) {
    const title = options?.title;
    const showClose = options?.showClose === void 0 ? true : options?.showClose;
    const dialogRef = this._dialogService.open(DialogComponent, __spreadProps(__spreadValues({}, options), {
      data: {
        title,
        component,
        showClose
      }
    }));
    return dialogRef;
  }
  confirm(options) {
    const yesLabel = options.yesLabel ?? "Yes";
    const noLabel = options.noLabel ?? "No";
    const title = options.title;
    const description = options.description;
    const dialogRef = this._dialogService.open(ConfirmDialogComponent, {
      data: {
        yesLabel,
        noLabel,
        title,
        description
      },
      disableClose: false,
      hasBackdrop: true
    });
    return dialogRef;
  }
  alert(options) {
    const dialogRef = this._dialogService.open(AlertDialogComponent, {
      disableClose: false,
      hasBackdrop: true,
      backdropClass: "cdk-backdrop-transparent",
      data: {
        buttonLabel: options.buttonLabel ?? "OK",
        title: options.title,
        description: options.description
      }
    });
    return dialogRef;
  }
  static \u0275fac = function DialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DialogService, factory: _DialogService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  DialogCloseDirective,
  DialogService
};
//# sourceMappingURL=chunk-OFSTEJM7.js.map
