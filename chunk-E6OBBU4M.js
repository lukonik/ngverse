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
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-Y6XO3YM5.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import {
  FormsModule
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
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  afterNextRender,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/badge/badge.component.ts
function BadgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.value(), " ");
  }
}
var BadgeComponent = class _BadgeComponent {
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  hide = input(false, ...ngDevMode ? [{ debugName: "hide" }] : []);
  useParent = input(true, ...ngDevMode ? [{ debugName: "useParent" }] : []);
  renderer = inject(Renderer2);
  host = inject(ElementRef);
  constructor() {
    afterNextRender({
      write: () => {
        if (this.useParent()) {
          this.renderer.setStyle(this.host.nativeElement, "position", "relative");
        }
      }
    });
  }
  static \u0275fac = function BadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BadgeComponent, selectors: [["app-badge"]], hostAttrs: ["role", "status"], inputs: { value: [1, "value"], hide: [1, "hide"], useParent: [1, "useParent"] }, decls: 1, vars: 1, consts: [[1, "badge"]], template: function BadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, BadgeComponent_Conditional_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.hide() ? 0 : -1);
    }
  }, styles: ['\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-red-600: oklch(0.577 0.245 27.325);\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --font-weight-medium: 500;\n  }\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  left: 100%;\n  margin-block: calc(var(--spacing) * -2);\n  display: flex;\n  height: calc(var(--spacing) * 5);\n  width: calc(var(--spacing) * 5);\n  align-items: center;\n  justify-content: center;\n  border-radius: calc(infinity * 1px);\n  background-color: var(--color-red-600);\n  font-size: var(--text-xs);\n  line-height: var(--tw-leading, var(--text-xs--line-height));\n  --tw-font-weight: var(--font-weight-medium);\n  font-weight: var(--font-weight-medium);\n  color: var(--color-white);\n}\n@property --tw-font-weight { syntax: "*"; inherits: false; }\n\n\n/*# sourceMappingURL=badge.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{ selector: "app-badge", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "status"
    }, template: '@if (!hide()) {\n  <div class="badge">\n    {{ value() }}\n  </div>\n}\n', styles: ['/* projects/ngverse/src/lib/ui/badge/badge.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-red-600: oklch(0.577 0.245 27.325);\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-white: #fff;\n    --spacing: 0.25rem;\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --font-weight-medium: 500;\n  }\n}\n.badge {\n  position: absolute;\n  bottom: 100%;\n  left: 100%;\n  margin-block: calc(var(--spacing) * -2);\n  display: flex;\n  height: calc(var(--spacing) * 5);\n  width: calc(var(--spacing) * 5);\n  align-items: center;\n  justify-content: center;\n  border-radius: calc(infinity * 1px);\n  background-color: var(--color-red-600);\n  font-size: var(--text-xs);\n  line-height: var(--tw-leading, var(--text-xs--line-height));\n  --tw-font-weight: var(--font-weight-medium);\n  font-weight: var(--font-weight-medium);\n  color: var(--color-white);\n}\n@property --tw-font-weight { syntax: "*"; inherits: false; }\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=badge.component.css.map */\n'] }]
  }], () => [], { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], hide: [{ type: Input, args: [{ isSignal: true, alias: "hide", required: false }] }], useParent: [{ type: Input, args: [{ isSignal: true, alias: "useParent", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BadgeComponent, { className: "BadgeComponent", filePath: "projects/ngverse/src/lib/ui/badge/badge.component.ts", lineNumber: 21 });
})();

// projects/docs/src/app/examples/badge/show-case-badge/show-case-badge.component.ts
var ShowCaseBadgeComponent = class _ShowCaseBadgeComponent {
  count = signal(8, ...ngDevMode ? [{ debugName: "count" }] : []);
  decreese() {
    if (!this.count()) {
      return;
    }
    this.count.update((c) => c - 1);
  }
  static \u0275fac = function ShowCaseBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseBadgeComponent, selectors: [["doc-show-case-badge"]], decls: 6, vars: 2, consts: [[1, "show-case"], [3, "value", "hide"], ["appButton", "", "variant", "outline", "size", "sm", 3, "click"]], template: function ShowCaseBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div");
      \u0275\u0275text(2, " Notifications ");
      \u0275\u0275element(3, "app-badge", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function ShowCaseBadgeComponent_Template_button_click_4_listener() {
        return ctx.decreese();
      });
      \u0275\u0275text(5, " Decrease Notification ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.count())("hide", !ctx.count());
    }
  }, dependencies: [FormsModule, ButtonComponent, BadgeComponent], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  justify-content: start;\n  align-items: start;\n}\n/*# sourceMappingURL=show-case-badge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseBadgeComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-badge", imports: [FormsModule, ButtonComponent, BadgeComponent], template: '<div class="show-case">\n  <div>\n    Notifications <app-badge [value]="count()" [hide]="!count()"></app-badge>\n  </div>\n  <button appButton variant="outline" (click)="decreese()" size="sm">\n    Decrease Notification\n  </button>\n</div>\n', styles: ["/* projects/docs/src/app/examples/badge/show-case-badge/show-case-badge.component.css */\n.show-case {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  justify-content: start;\n  align-items: start;\n}\n/*# sourceMappingURL=show-case-badge.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseBadgeComponent, { className: "ShowCaseBadgeComponent", filePath: "projects/docs/src/app/examples/badge/show-case-badge/show-case-badge.component.ts", lineNumber: 12 });
})();

// projects/docs/src/app/features/badge-page/badge-page.component.ts
var ROOT = "badge";
var BadgePageComponent = class _BadgePageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: "badge",
      files: [...this.sourceTreeBuilder.fullComponent(ROOT, ROOT)],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role",
    entities: [
      {
        name: "BadgeComponent",
        type: "component",
        selector: "app-badge",
        inputs: [
          {
            name: "value",
            type: "number | string | null | undefined",
            description: "text to display in badge",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          },
          {
            name: "hide",
            type: "boolean",
            description: "hides the badge content",
            default: "false"
          },
          {
            name: "useParent",
            type: "boolean",
            description: "If true, the parent element's style is automatically set to relative. If false, you must explicitly set it to either relative or absolute.",
            default: "true"
          }
        ]
      }
    ]
  };
  static \u0275fac = function BadgePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BadgePageComponent, selectors: [["doc-badge-page"]], decls: 6, vars: 2, consts: [["label", "Badge", "subTitle", "Badge is a small status descriptor for UI elements"], ["name", "badge"], ["type", "component", "name", "badge"], ["name", "badge", 3, "sourceTree"], [3, "apiInfo"]], template: function BadgePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-badge");
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
    ShowCaseBadgeComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgePageComponent, [{
    type: Component,
    args: [{ selector: "doc-badge-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ShowCaseBadgeComponent
    ], template: '<doc-blueprint-page\n  label="Badge"\n  subTitle="Badge is a small status descriptor for UI elements"\n>\n  <doc-show-case name="badge">\n    <doc-show-case-badge></doc-show-case-badge>\n  </doc-show-case>\n  <doc-command-installation type="component" name="badge">\n  </doc-command-installation>\n  <doc-source-tree [sourceTree]="sourceTree" name="badge"></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BadgePageComponent, { className: "BadgePageComponent", filePath: "projects/docs/src/app/features/badge-page/badge-page.component.ts", lineNumber: 30 });
})();
export {
  BadgePageComponent
};
//# sourceMappingURL=chunk-E6OBBU4M.js.map
