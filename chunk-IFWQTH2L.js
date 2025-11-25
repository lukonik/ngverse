import {
  Dialog
} from "./chunk-INRZUO4S.js";
import {
  CheckboxComponent
} from "./chunk-6YJUT34Z.js";
import {
  ButtonComponent
} from "./chunk-3AYE667Y.js";
import {
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE,
  VOID_API_RETURN_TYPE
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
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-3GLWUNBJ.js";
import "./chunk-BC37M6ZP.js";
import "./chunk-FK22TT2X.js";
import "./chunk-4YTCSZ5T.js";
import {
  Overlay
} from "./chunk-XGFB36A5.js";
import "./chunk-64HPILVO.js";
import {
  animate,
  animation,
  keyframes,
  style,
  transition,
  trigger
} from "./chunk-JX5YVH27.js";
import "./chunk-633NCXCE.js";
import "./chunk-ICIB3IHR.js";
import {
  FontIconComponent
} from "./chunk-K3WRTE43.js";
import {
  NgComponentOutlet
} from "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  InjectionToken,
  Input,
  Subject,
  filter,
  inject,
  input,
  merge,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";
import {
  __spreadValues
} from "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/drawer/drawer-ref.ts
var DRAWER_DATA = new InjectionToken("DRAWER_DATA");
var DrawerRef = class {
  dialogRef;
  get closed() {
    return this.dialogRef.closed;
  }
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  close(value) {
    const instance = this.dialogRef.componentInstance;
    instance.onExit.subscribe(() => {
      this.dialogRef.close(value);
    });
    instance.exit();
  }
};

// projects/ngverse/src/lib/ui/drawer/drawer-close.directive.ts
var DrawerCloseDirective = class _DrawerCloseDirective {
  drawerRef = inject(DrawerRef);
  value = input(void 0, ...ngDevMode ? [{ debugName: "value", alias: "appDrawerClose" }] : [{ alias: "appDrawerClose" }]);
  close() {
    const value = this.value();
    this.drawerRef.close(value);
  }
  static \u0275fac = function DrawerCloseDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerCloseDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DrawerCloseDirective, selectors: [["", "appDrawerClose", ""]], hostBindings: function DrawerCloseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DrawerCloseDirective_click_HostBindingHandler() {
        return ctx.close();
      });
    }
  }, inputs: { value: [1, "appDrawerClose", "value"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[appDrawerClose]",
      host: {
        "(click)": "close()"
      }
    }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "appDrawerClose", required: false }] }] });
})();

// projects/ngverse/src/lib/ui/drawer/drawer.component.ts
function DrawerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.title(), " ");
  }
}
function DrawerComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var ENTER_ANIMATION = transition("* => enter", [
  animation(animate("250ms ease-in", keyframes([
    style({
      visibility: "visible",
      transform: "translate3d(100%, 0, 0)",
      easing: "ease",
      offset: 0
    }),
    style({ transform: "translate3d(0, 0, 0)", offset: 1 })
  ])))
]);
var LEAVE_ANIMATION = transition("* => exit", [
  animation(animate("250ms ease-out", keyframes([
    style({ transform: "translate3d(0, 0, 0)", easing: "ease", offset: 0 }),
    style({
      transform: "translate3d(100%, 0, 0)",
      visibility: "hidden",
      easing: "ease",
      offset: 1
    })
  ])))
]);
var DrawerComponent = class _DrawerComponent {
  title = signal(void 0, ...ngDevMode ? [{ debugName: "title" }] : []);
  animationState = signal("enter", ...ngDevMode ? [{ debugName: "animationState" }] : []);
  component;
  _onExit = new Subject();
  onExit = this._onExit.asObservable();
  onDone($event) {
    if ($event.toState === "exit") {
      this._onExit.next();
      this._onExit.complete();
    }
  }
  exit() {
    this.animationState.set("exit");
  }
  static \u0275fac = function DrawerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DrawerComponent, selectors: [["app-drawer"]], hostVars: 1, hostBindings: function DrawerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275syntheticHostListener("@toggle.done", function DrawerComponent_animation_toggle_done_HostBindingHandler($event) {
        return ctx.onDone($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275syntheticHostProperty("@toggle", ctx.animationState());
    }
  }, decls: 7, vars: 2, consts: [[1, "h-screen", "w-auto", "overflow-auto", "bg-background", "p-4", "text-foreground"], [1, "mb-3", "flex", "items-center", "font-bold"], ["appDrawerClose", "", "appButton", "", "icon", "", "size", "sm", "variant", "link", "color", "secondary", "aria-label", "Close the drawer", 1, "ml-auto"], [4, "ngComponentOutlet"]], template: function DrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, DrawerComponent_Conditional_2_Template, 2, 1, "h1");
      \u0275\u0275elementStart(3, "button", 2)(4, "app-font-icon");
      \u0275\u0275text(5, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(6, DrawerComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.title() ? 2 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngComponentOutlet", ctx.component);
    }
  }, dependencies: [
    DrawerCloseDirective,
    ButtonComponent,
    NgComponentOutlet,
    FontIconComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  width: auto;\n  background: var(--color-background);\n  color: var(--color-foreground);\n  padding: 16px;\n  overflow: auto;\n}\n.drawer-title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 1rem;\n}\n.close-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n}\n.drawer-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=drawer.component.css.map */"], data: { animation: [trigger("toggle", [ENTER_ANIMATION, LEAVE_ANIMATION])] }, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerComponent, [{
    type: Component,
    args: [{ selector: "app-drawer", imports: [
      DrawerCloseDirective,
      ButtonComponent,
      NgComponentOutlet,
      FontIconComponent
    ], animations: [trigger("toggle", [ENTER_ANIMATION, LEAVE_ANIMATION])], host: {
      "[@toggle]": "animationState()",
      "(@toggle.done)": "onDone($event)"
    }, changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="h-screen w-auto overflow-auto bg-background p-4 text-foreground">\n  <div class="mb-3 flex items-center font-bold">\n    @if (title()) {\n      <h1>\n        {{ title() }}\n      </h1>\n    }\n\n    <button\n      appDrawerClose\n      appButton\n      icon\n      size="sm"\n      variant="link"\n      color="secondary"\n      aria-label="Close the drawer"\n      class="ml-auto"\n    >\n      <app-font-icon>close</app-font-icon>\n    </button>\n  </div>\n\n  <ng-container *ngComponentOutlet="component" />\n</div>\n\n<!--\n\n.close-button {\n  margin-left: auto;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n}\n\n.drawer-header {\n  font-weight: bold;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n} -->\n', styles: ["/* projects/ngverse/src/lib/ui/drawer/drawer.component.css */\n:host {\n  display: block;\n  height: 100vh;\n  width: auto;\n  background: var(--color-background);\n  color: var(--color-foreground);\n  padding: 16px;\n  overflow: auto;\n}\n.drawer-title {\n  margin: 0;\n  padding: 0;\n  font-size: 1rem;\n}\n.close-button {\n  margin-left: auto;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n}\n.drawer-header {\n  font-weight: bold;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=drawer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DrawerComponent, { className: "DrawerComponent", filePath: "projects/ngverse/src/lib/ui/drawer/drawer.component.ts", lineNumber: 69 });
})();

// projects/ngverse/src/lib/ui/drawer/drawer.service.ts
var DrawerService = class _DrawerService {
  overlay = inject(Overlay);
  dialog = inject(Dialog);
  open(component, options) {
    const dialogRef = this.dialog.open(DrawerComponent, __spreadValues({
      disableClose: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().right(),
      providers(dialogRef2) {
        return [
          {
            provide: DrawerRef,
            useValue: new DrawerRef(dialogRef2)
          },
          { provide: DRAWER_DATA, useValue: options?.data }
        ];
      }
    }, options));
    const instance = dialogRef.componentInstance;
    instance.component = component;
    instance.title.set(options?.title);
    const drawerRef = dialogRef.componentRef?.injector.get(DrawerRef);
    const keydownEvent$ = dialogRef.keydownEvents.pipe(filter((event) => event.key === "Escape"));
    const backdropEvent$ = dialogRef.backdropClick;
    merge(keydownEvent$, backdropEvent$).pipe(take(1)).subscribe(() => {
      drawerRef.close();
    });
    return drawerRef;
  }
  static \u0275fac = function DrawerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DrawerService, factory: _DrawerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// projects/docs/src/app/examples/drawer/show-case-drawer/show-case-drawer.component.ts
var ShowCaseDrawerComponent = class _ShowCaseDrawerComponent {
  drawerService = inject(DrawerService);
  open() {
    this.drawerService.open(DrawerTestComponent, {
      title: "Edit Notification",
      data: {
        name: "John Doe"
      }
    });
  }
  static \u0275fac = function ShowCaseDrawerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseDrawerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseDrawerComponent, selectors: [["doc-show-case-drawer"]], decls: 2, vars: 0, consts: [["appButton", "", 3, "click"]], template: function ShowCaseDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ShowCaseDrawerComponent_Template_button_click_0_listener() {
        return ctx.open();
      });
      \u0275\u0275text(1, "Open Drawer");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseDrawerComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-drawer", imports: [ButtonComponent], template: '<button appButton (click)="open()">Open Drawer</button>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseDrawerComponent, { className: "ShowCaseDrawerComponent", filePath: "projects/docs/src/app/examples/drawer/show-case-drawer/show-case-drawer.component.ts", lineNumber: 15 });
})();
var DrawerTestComponent = class _DrawerTestComponent {
  data = inject(DRAWER_DATA);
  static \u0275fac = function DrawerTestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerTestComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DrawerTestComponent, selectors: [["doc-drawer-test"]], decls: 14, vars: 2, consts: [[1, "footer"], ["type", "button", "appButton", "", "variant", "outline", "appDrawerClose", ""], ["type", "button", "appButton", "", 3, "appDrawerClose"]], template: function DrawerTestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form")(1, "p");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-checkbox");
      \u0275\u0275text(4, "Receive newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-checkbox");
      \u0275\u0275text(6, "Allow data analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-checkbox");
      \u0275\u0275text(8, "Enable push notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 0)(10, "button", 1);
      \u0275\u0275text(11, " Close ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 2);
      \u0275\u0275text(13, "Update");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Hello ", ctx.data.name);
      \u0275\u0275advance(10);
      \u0275\u0275property("appDrawerClose", "test");
    }
  }, dependencies: [
    DrawerCloseDirective,
    ButtonComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatusGroup,
    CheckboxComponent
  ], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 12px;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n}\n/*# sourceMappingURL=show-case-drawer.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerTestComponent, [{
    type: Component,
    args: [{ selector: "doc-drawer-test", imports: [
      DrawerCloseDirective,
      ButtonComponent,
      ReactiveFormsModule,
      CheckboxComponent
    ], template: `<form>
    <p>Hello {{ data.name }}</p>
    <app-checkbox>Receive newsletter</app-checkbox>
    <app-checkbox>Allow data analytics</app-checkbox>
    <app-checkbox>Enable push notifications</app-checkbox>
    <div class="footer">
      <button type="button" appButton variant="outline" appDrawerClose>
        Close
      </button>
      <button type="button" appButton [appDrawerClose]="'test'">Update</button>
    </div>
  </form> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;4099268ab5d3fcc9b5ce8cb5db33336a2eb3aca9368e8742577b76900c006fb5;/Users/lukaonikadze/Documents/Projects/ngverse/projects/docs/src/app/examples/drawer/show-case-drawer/show-case-drawer.component.ts */\n.footer {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 12px;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n}\n/*# sourceMappingURL=show-case-drawer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DrawerTestComponent, { className: "DrawerTestComponent", filePath: "projects/docs/src/app/examples/drawer/show-case-drawer/show-case-drawer.component.ts", lineNumber: 63 });
})();

// projects/docs/src/app/features/drawer-page/drawer-page.component.ts
var ROOT = "drawer";
var DrawerPageComponent = class _DrawerPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: "drawer",
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, `${ROOT}`),
        ...this.sourceTreeBuilder.directive("drawer-close", `${ROOT}`, true),
        ...this.sourceTreeBuilder.service("drawer", `${ROOT}`),
        this.sourceTreeBuilder.file("drawer-ref", `${ROOT}`, "ts"),
        this.sourceTreeBuilder.component("drawer-close-icon", `${ROOT}`)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://material.angular.io/cdk/dialog/overview#accessibility",
    entities: [
      {
        name: "DrawerService",
        type: "service",
        description: "service that opens drawer component",
        methods: [
          {
            name: "open",
            description: "opens the drawer",
            returnType: "DrawerRef",
            params: [
              {
                name: "component",
                type: "ComponentType<unknown>",
                description: "component to render inside the drawer."
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
                    name: "ariaDescribedBy",
                    type: "string",
                    description: "ID of the element that describes the Drawer",
                    default: EMPTY_API_INPUT_DEFAULT_VALUE
                  },
                  {
                    name: "ariaLabel",
                    type: "string",
                    description: "Drawer label applied via aria-label",
                    default: EMPTY_API_INPUT_DEFAULT_VALUE
                  },
                  {
                    name: "ariaLabelledBy",
                    type: "string",
                    description: "ID of the element that labels the Drawer.",
                    default: EMPTY_API_INPUT_DEFAULT_VALUE
                  },
                  {
                    name: "autoFocus",
                    type: "dialog | first-tabbable | first-heading | boolean",
                    description: "Where the Drawer should focus on open.",
                    default: "first-tabbable"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "DrawerRef",
        type: "service",
        description: "DrawerRef is a class that represents a reference to a drawer component.",
        methods: [
          {
            name: "close",
            description: "close the drawer",
            returnType: VOID_API_RETURN_TYPE,
            params: []
          },
          {
            name: "closed",
            returnType: "Observable<unknown>>",
            description: "observable that emits when the drawer is closed. it passes the value that was passed to the close method."
          }
        ]
      },
      {
        name: "DrawerCloseDirective",
        selector: "[appDrawerClose]",
        type: "directive",
        description: "A directive used to close the drawer. It can be placed on any element inside the drawer.",
        inputs: [
          {
            name: "appDrawerClose",
            type: "unknown",
            description: "value to pass to the close method"
          }
        ]
      }
    ]
  };
  static \u0275fac = function DrawerPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DrawerPageComponent, selectors: [["doc-drawer-page"]], decls: 6, vars: 2, consts: [["label", "Drawer", "subTitle", "Drawer component is an element that slides in from the right, overlaying and blocking the scroll of the underlying content."], ["name", "drawer"], ["type", "component", "name", "drawer"], ["name", "drawer", 3, "sourceTree"], [3, "apiInfo"]], template: function DrawerPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-drawer");
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
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    ShowCaseDrawerComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerPageComponent, [{
    type: Component,
    args: [{ selector: "doc-drawer-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ShowCaseDrawerComponent
    ], template: '<doc-blueprint-page\n  label="Drawer"\n  subTitle="Drawer component is an element that slides in from the right, overlaying and blocking the scroll of the underlying content."\n>\n  <doc-show-case name="drawer">\n    <doc-show-case-drawer></doc-show-case-drawer>\n  </doc-show-case>\n  <doc-command-installation type="component" name="drawer">\n  </doc-command-installation>\n  <doc-source-tree [sourceTree]="sourceTree" name="drawer"></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DrawerPageComponent, { className: "DrawerPageComponent", filePath: "projects/docs/src/app/features/drawer-page/drawer-page.component.ts", lineNumber: 35 });
})();
export {
  DrawerPageComponent
};
//# sourceMappingURL=chunk-IFWQTH2L.js.map
