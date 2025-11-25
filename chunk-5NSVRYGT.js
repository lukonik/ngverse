import {
  FormFieldComponent
} from "./chunk-B4G5D2YK.js";
import {
  InputDirective
} from "./chunk-7Y5KJBG7.js";
import {
  ButtonComponent
} from "./chunk-GPD647ZZ.js";
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
import "./chunk-J4OMZXTK.js";
import "./chunk-QF5VCJ6S.js";
import "./chunk-MKNWGWE3.js";
import "./chunk-VQYCA752.js";
import "./chunk-GAYAR7LB.js";
import "./chunk-4UYB5JXN.js";
import "./chunk-JX5YVH27.js";
import {
  CardComponent
} from "./chunk-RBCCWOK3.js";
import "./chunk-EPTODCGW.js";
import "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtext
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/loader/loader.component.ts
var LoaderComponent = class _LoaderComponent {
  radius = input(50, ...ngDevMode ? [{ debugName: "radius" }] : []);
  overlay = input(false, ...ngDevMode ? [{ debugName: "overlay" }] : []);
  useParent = input(true, ...ngDevMode ? [{ debugName: "useParent" }] : []);
  transparency = input("semi", ...ngDevMode ? [{ debugName: "transparency" }] : []);
  renderer = inject(Renderer2);
  parentEl = inject(ElementRef, {
    skipSelf: true,
    optional: true
  });
  opacity = computed(() => {
    switch (this.transparency()) {
      case "full":
        return 1;
      case "semi":
        return 0.1;
      case "none":
        return 0;
    }
  }, ...ngDevMode ? [{ debugName: "opacity" }] : []);
  constructor() {
    effect(() => {
      if (this.useParent() && this.parentEl) {
        this.renderer.setStyle(this.parentEl.nativeElement, "position", "relative");
      }
    });
  }
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], hostVars: 4, hostBindings: function LoaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("--loader-overlay-opacity", ctx.opacity());
      \u0275\u0275classProp("overlay", ctx.overlay());
    }
  }, inputs: { radius: [1, "radius"], overlay: [1, "overlay"], useParent: [1, "useParent"], transparency: [1, "transparency"] }, decls: 1, vars: 4, consts: [[1, "loader"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.radius(), "px")("height", ctx.radius(), "px");
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: none;\n  display: flex;\n}\n.overlay[_nghost-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(var(--overlay), var(--loader-overlay-opacity));\n  z-index: 99999;\n}\n.loader[_ngcontent-%COMP%] {\n  border: 5px solid var(--color-primary);\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_rotation 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[class.overlay]": "overlay()",
      "[style.--loader-overlay-opacity]": "opacity()"
    }, template: '<div\n  class="loader"\n  [style.width.px]="radius()"\n  [style.height.px]="radius()"\n></div>\n', styles: ["/* projects/ngverse/src/lib/ui/loader/loader.component.css */\n:host {\n  display: none;\n  display: flex;\n}\n:host.overlay {\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background: rgba(var(--overlay), var(--loader-overlay-opacity));\n  z-index: 99999;\n}\n.loader {\n  border: 5px solid var(--color-primary);\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  animation: rotation 1s linear infinite;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */\n"] }]
  }], () => [], { radius: [{ type: Input, args: [{ isSignal: true, alias: "radius", required: false }] }], overlay: [{ type: Input, args: [{ isSignal: true, alias: "overlay", required: false }] }], useParent: [{ type: Input, args: [{ isSignal: true, alias: "useParent", required: false }] }], transparency: [{ type: Input, args: [{ isSignal: true, alias: "transparency", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "projects/ngverse/src/lib/ui/loader/loader.component.ts", lineNumber: 25 });
})();

// projects/docs/src/app/examples/loader/show-case-loader/show-case-loader.component.ts
function ShowCaseLoaderComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("overlay", true);
  }
}
var ShowCaseLoaderComponent = class _ShowCaseLoaderComponent {
  showLoader = signal(false, ...ngDevMode ? [{ debugName: "showLoader" }] : []);
  show() {
    this.showLoader.set(true);
    setTimeout(() => {
      this.showLoader.set(false);
    }, 3e3);
  }
  static \u0275fac = function ShowCaseLoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseLoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseLoaderComponent, selectors: [["doc-show-case-loader"]], decls: 11, vars: 1, consts: [[1, "show-case"], [1, "infinite-loader"], ["appInput", "", "type", "text", "placeholder", "Username", 1, "input"], ["appInput", "", "type", "password", "placeholder", "Password", 1, "input"], ["appButton", "", "color", "primary", "size", "sm", 1, "button", 3, "click"], [3, "overlay"]], template: function ShowCaseLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-card", 1);
      \u0275\u0275element(2, "app-loader");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-card")(4, "app-form-field");
      \u0275\u0275element(5, "input", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-form-field");
      \u0275\u0275element(7, "input", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ShowCaseLoaderComponent_Template_button_click_8_listener() {
        return ctx.show();
      });
      \u0275\u0275text(9, " Loader Overlay ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, ShowCaseLoaderComponent_Conditional_10_Template, 1, 1, "app-loader", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.showLoader() ? 10 : -1);
    }
  }, dependencies: [
    LoaderComponent,
    ButtonComponent,
    FormFieldComponent,
    InputDirective,
    CardComponent
  ], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.infinite-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\napp-card[_ngcontent-%COMP%] {\n  width: 200px;\n}\ninput[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=show-case-loader.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseLoaderComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-loader", imports: [
      LoaderComponent,
      ButtonComponent,
      FormFieldComponent,
      InputDirective,
      ButtonComponent,
      CardComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="show-case">\n  <app-card class="infinite-loader">\n    <app-loader></app-loader>\n  </app-card>\n  <app-card>\n    <app-form-field>\n      <input appInput type="text" placeholder="Username" class="input" />\n    </app-form-field>\n    <app-form-field>\n      <input appInput type="password" placeholder="Password" class="input" />\n    </app-form-field>\n    <button appButton color="primary" size="sm" (click)="show()" class="button">\n      Loader Overlay\n    </button>\n    @if (showLoader()) {\n      <app-loader [overlay]="true"></app-loader>\n    }\n  </app-card>\n</div>\n', styles: ["/* projects/docs/src/app/examples/loader/show-case-loader/show-case-loader.component.css */\n.show-case {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.infinite-loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\napp-card {\n  width: 200px;\n}\ninput,\nbutton {\n  width: 100%;\n}\n/*# sourceMappingURL=show-case-loader.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseLoaderComponent, { className: "ShowCaseLoaderComponent", filePath: "projects/docs/src/app/examples/loader/show-case-loader/show-case-loader.component.ts", lineNumber: 22 });
})();

// projects/docs/src/app/features/loader-page/loader-page.component.ts
var ROOT = "loader";
var LoaderPageComponent = class _LoaderPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
      hideName: true
    }
  ];
  apiInfo = {
    entities: [
      {
        name: "LoaderComponent",
        type: "component",
        selector: "app-loader",
        inputs: [
          {
            name: "radius",
            type: "number",
            default: "50",
            description: "The radius of the spinner."
          },
          {
            name: "overlay",
            type: "boolean",
            default: "false",
            description: "If overlay is set to true, it adds a background overlay that stretches to the size of the parent element."
          },
          {
            name: "userParent",
            type: "boolean",
            default: "true",
            description: "If true, the parent element's style is automatically set to relative. If false, you must explicitly set it to either relative or absolute. this input is needed when overlay=[true]"
          },
          {
            name: "transparency",
            type: "none | semi | full",
            default: "semi",
            description: "The transparency of the spinner background overlay"
          }
        ]
      }
    ]
  };
  static \u0275fac = function LoaderPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderPageComponent, selectors: [["doc-loader-page"]], decls: 6, vars: 2, consts: [["subTitle", "Displays an indicator showing the progress of a task", "label", "Loader"], ["name", "loader"], ["type", "component", "name", "loader"], ["name", "loader", 3, "sourceTree"], [3, "apiInfo"]], template: function LoaderPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-loader");
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
    ShowCaseLoaderComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderPageComponent, [{
    type: Component,
    args: [{ selector: "doc-loader-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseLoaderComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<doc-blueprint-page\n  subTitle="Displays an indicator showing the progress of a task"\n  label="Loader"\n>\n  <doc-show-case name="loader">\n    <doc-show-case-loader></doc-show-case-loader>\n  </doc-show-case>\n  <doc-command-installation type="component" name="loader">\n  </doc-command-installation>\n  <doc-source-tree [sourceTree]="sourceTree" name="loader"></doc-source-tree>\n\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderPageComponent, { className: "LoaderPageComponent", filePath: "projects/docs/src/app/features/loader-page/loader-page.component.ts", lineNumber: 30 });
})();
export {
  LoaderPageComponent
};
//# sourceMappingURL=chunk-5NSVRYGT.js.map
