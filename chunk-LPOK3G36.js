import {
  ButtonComponent
} from "./chunk-GPD647ZZ.js";
import {
  ImplementationComponent
} from "./chunk-LXTKOHBV.js";
import {
  ExampleItemComponent,
  ExamplesComponent,
  PreviewComponent
} from "./chunk-42Q7DX77.js";
import {
  ApiInfoComponent
} from "./chunk-HUMT7RIH.js";
import "./chunk-NLXPGKL3.js";
import {
  CommandInstallationComponent
} from "./chunk-6YZNQOOO.js";
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
import {
  FontIconComponent
} from "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/button/example-button-default.component.ts
var ExampleButtonDefaultComponent = class _ExampleButtonDefaultComponent {
  static \u0275fac = function ExampleButtonDefaultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonDefaultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonDefaultComponent, selectors: [["doc-example-button-default"]], decls: 3, vars: 0, consts: [["appButton", "", "variant", "default"]], template: function ExampleButtonDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Default");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonDefaultComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-default",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton variant="default">Default</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonDefaultComponent, { className: "ExampleButtonDefaultComponent", filePath: "projects/docs/src/app/examples/button/example-button-default.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-destructive.component.ts
var ExampleButtonDestructiveComponent = class _ExampleButtonDestructiveComponent {
  static \u0275fac = function ExampleButtonDestructiveComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonDestructiveComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonDestructiveComponent, selectors: [["doc-example-button-destructive"]], decls: 3, vars: 0, consts: [["appButton", "", "variant", "destructive"]], template: function ExampleButtonDestructiveComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Delete Account");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonDestructiveComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-destructive",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton variant="destructive">Delete Account</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonDestructiveComponent, { className: "ExampleButtonDestructiveComponent", filePath: "projects/docs/src/app/examples/button/example-button-destructive.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-ghost.component.ts
var ExampleButtonGhostComponent = class _ExampleButtonGhostComponent {
  static \u0275fac = function ExampleButtonGhostComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonGhostComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonGhostComponent, selectors: [["doc-example-button-ghost"]], decls: 3, vars: 0, consts: [["appButton", "", "variant", "ghost"]], template: function ExampleButtonGhostComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Ghost");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonGhostComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-ghost",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton variant="ghost">Ghost</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonGhostComponent, { className: "ExampleButtonGhostComponent", filePath: "projects/docs/src/app/examples/button/example-button-ghost.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-icon.component.ts
var ExampleButtonIconComponent = class _ExampleButtonIconComponent {
  static \u0275fac = function ExampleButtonIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonIconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonIconComponent, selectors: [["doc-example-button-icon"]], decls: 4, vars: 0, consts: [["appButton", "", "variant", "icon", "icon", "", "aria-label", "Settings"]], template: function ExampleButtonIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0)(2, "app-font-icon");
      \u0275\u0275text(3, "settings");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [ButtonComponent, FontIconComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonIconComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-icon",
      imports: [ButtonComponent, FontIconComponent],
      template: `
    <div>
      <button appButton variant="icon" icon aria-label="Settings">
        <app-font-icon>settings</app-font-icon>
      </button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonIconComponent, { className: "ExampleButtonIconComponent", filePath: "projects/docs/src/app/examples/button/example-button-icon.component.ts", lineNumber: 17 });
})();

// projects/docs/src/app/examples/button/example-button-link.component.ts
var ExampleButtonLinkComponent = class _ExampleButtonLinkComponent {
  static \u0275fac = function ExampleButtonLinkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonLinkComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonLinkComponent, selectors: [["doc-example-button-link"]], decls: 3, vars: 0, consts: [["appButton", "", "variant", "link"]], template: function ExampleButtonLinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Link Button");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonLinkComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-link",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton variant="link">Link Button</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonLinkComponent, { className: "ExampleButtonLinkComponent", filePath: "projects/docs/src/app/examples/button/example-button-link.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-loading.component.ts
var ExampleButtonLoadingComponent = class _ExampleButtonLoadingComponent {
  static \u0275fac = function ExampleButtonLoadingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonLoadingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonLoadingComponent, selectors: [["doc-example-button-loading"]], decls: 3, vars: 1, consts: [["appButton", "", "variant", "loading", 3, "loading"]], template: function ExampleButtonLoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Loading...");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("loading", true);
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonLoadingComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-loading",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton variant="loading" [loading]="true">Loading...</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonLoadingComponent, { className: "ExampleButtonLoadingComponent", filePath: "projects/docs/src/app/examples/button/example-button-loading.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-outline.component.ts
var ExampleButtonOutlineComponent = class _ExampleButtonOutlineComponent {
  static \u0275fac = function ExampleButtonOutlineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonOutlineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonOutlineComponent, selectors: [["doc-example-button-outline"]], decls: 3, vars: 0, consts: [["appButton", "", "variant", "outline"]], template: function ExampleButtonOutlineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Outline");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonOutlineComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-outline",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton variant="outline">Outline</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonOutlineComponent, { className: "ExampleButtonOutlineComponent", filePath: "projects/docs/src/app/examples/button/example-button-outline.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-secondary.component.ts
var ExampleButtonSecondaryComponent = class _ExampleButtonSecondaryComponent {
  static \u0275fac = function ExampleButtonSecondaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonSecondaryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonSecondaryComponent, selectors: [["doc-example-button-secondary"]], decls: 3, vars: 0, consts: [["appButton", "", "variant", "secondary"]], template: function ExampleButtonSecondaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Secondary");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonSecondaryComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-secondary",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton variant="secondary">Secondary</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonSecondaryComponent, { className: "ExampleButtonSecondaryComponent", filePath: "projects/docs/src/app/examples/button/example-button-secondary.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-size-lg.component.ts
var ExampleButtonSizeLgComponent = class _ExampleButtonSizeLgComponent {
  static \u0275fac = function ExampleButtonSizeLgComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonSizeLgComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonSizeLgComponent, selectors: [["doc-example-button-size-lg"]], decls: 3, vars: 0, consts: [["appButton", "", "size", "lg"]], template: function ExampleButtonSizeLgComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Large");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonSizeLgComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-size-lg",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton size="lg">Large</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonSizeLgComponent, { className: "ExampleButtonSizeLgComponent", filePath: "projects/docs/src/app/examples/button/example-button-size-lg.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-size-md.component.ts
var ExampleButtonSizeMdComponent = class _ExampleButtonSizeMdComponent {
  static \u0275fac = function ExampleButtonSizeMdComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonSizeMdComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonSizeMdComponent, selectors: [["doc-example-button-size-md"]], decls: 3, vars: 0, consts: [["appButton", "", "size", "md"]], template: function ExampleButtonSizeMdComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Medium");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonSizeMdComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-size-md",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton size="md">Medium</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonSizeMdComponent, { className: "ExampleButtonSizeMdComponent", filePath: "projects/docs/src/app/examples/button/example-button-size-md.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-size-sm.component.ts
var ExampleButtonSizeSmComponent = class _ExampleButtonSizeSmComponent {
  static \u0275fac = function ExampleButtonSizeSmComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonSizeSmComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonSizeSmComponent, selectors: [["doc-example-button-size-sm"]], decls: 3, vars: 0, consts: [["appButton", "", "size", "sm"]], template: function ExampleButtonSizeSmComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Small");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonSizeSmComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-size-sm",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton size="sm">Small</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonSizeSmComponent, { className: "ExampleButtonSizeSmComponent", filePath: "projects/docs/src/app/examples/button/example-button-size-sm.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-size-xl.component.ts
var ExampleButtonSizeXlComponent = class _ExampleButtonSizeXlComponent {
  static \u0275fac = function ExampleButtonSizeXlComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonSizeXlComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonSizeXlComponent, selectors: [["doc-example-button-size-xl"]], decls: 3, vars: 0, consts: [["appButton", "", "size", "xl"]], template: function ExampleButtonSizeXlComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0);
      \u0275\u0275text(2, "Extra Large");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonSizeXlComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-size-xl",
      imports: [ButtonComponent],
      template: `
    <div>
      <button appButton size="xl">Extra Large</button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonSizeXlComponent, { className: "ExampleButtonSizeXlComponent", filePath: "projects/docs/src/app/examples/button/example-button-size-xl.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/examples/button/example-button-with-icon.component.ts
var ExampleButtonWithIconComponent = class _ExampleButtonWithIconComponent {
  static \u0275fac = function ExampleButtonWithIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleButtonWithIconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleButtonWithIconComponent, selectors: [["doc-example-button-with-icon"]], decls: 5, vars: 0, consts: [["appButton", "", "variant", "with-icon"]], template: function ExampleButtonWithIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "button", 0)(2, "app-font-icon");
      \u0275\u0275text(3, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Create New ");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonComponent, FontIconComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleButtonWithIconComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-button-with-icon",
      imports: [ButtonComponent, FontIconComponent],
      template: `
    <div>
      <button appButton variant="with-icon">
        <app-font-icon>add</app-font-icon>
        Create New
      </button>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleButtonWithIconComponent, { className: "ExampleButtonWithIconComponent", filePath: "projects/docs/src/app/examples/button/example-button-with-icon.component.ts", lineNumber: 18 });
})();

// projects/docs/src/app/examples/button/preview-button.component.ts
var PreviewButtonComponent = class _PreviewButtonComponent {
  static \u0275fac = function PreviewButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreviewButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewButtonComponent, selectors: [["doc-preview-button"]], decls: 2, vars: 0, consts: [["appButton", ""]], template: function PreviewButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275text(1, "Button");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewButtonComponent, [{
    type: Component,
    args: [{
      selector: "doc-preview-button",
      imports: [ButtonComponent],
      template: ` <button appButton>Button</button>`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewButtonComponent, { className: "PreviewButtonComponent", filePath: "projects/docs/src/app/examples/button/preview-button.component.ts", lineNumber: 10 });
})();

// projects/docs/src/app/features/button-page/button-page.component.ts
var ROOT = "button";
var ButtonPageComponent = class _ButtonPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        ...this.sourceTreeBuilder.fullComponent("icon-button", ROOT),
        ...this.sourceTreeBuilder.fullInlineComponent("button-loader", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    ariaDescription: "The Button component uses the native <button> element as its host, making all accessibility features readily available.",
    entities: [
      {
        name: "ButtonComponent",
        type: "component",
        selector: "button[appButton]",
        description: "appButton is used with native button element, so all native input attributes can be used",
        inputs: [
          {
            name: "variant",
            type: "default | secondary | destructive | outline | ghost | link | icon | with-icon | loading",
            description: "Defines the button variant style and behavior",
            default: "default"
          },
          {
            name: "size",
            type: "sm | md | lg | xl | none",
            description: "Changes the size of the button",
            default: "md"
          },
          {
            name: "icon",
            type: "boolean",
            description: "Converts to icon button (circular shape for icon-only buttons)",
            default: "false"
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Disables the button",
            default: "false"
          },
          {
            name: "loading",
            type: "boolean",
            description: "Adds spinner on the button. The button will not emit any event while loading is true",
            default: "false"
          }
        ]
      }
    ]
  };
  static \u0275fac = function ButtonPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonPageComponent, selectors: [["doc-button-page"]], decls: 33, vars: 4, consts: [["key", "button", 3, "subTitle", "label"], ["type", "component", "name", "button"], ["name", "button", 3, "sourceTree"], [3, "apiInfo"], ["name", "default"], ["name", "secondary"], ["name", "destructive"], ["name", "outline"], ["name", "ghost"], ["name", "link"], ["name", "icon"], ["name", "with-icon"], ["name", "loading"], ["name", "size-sm"], ["name", "size-md"], ["name", "size-lg"], ["name", "size-xl"]], template: function ButtonPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-preview");
      \u0275\u0275element(2, "doc-preview-button");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 1)(4, "doc-source-tree", 2)(5, "doc-api-info", 3);
      \u0275\u0275elementStart(6, "doc-examples")(7, "doc-example-item", 4);
      \u0275\u0275element(8, "doc-example-button-default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "doc-example-item", 5);
      \u0275\u0275element(10, "doc-example-button-secondary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "doc-example-item", 6);
      \u0275\u0275element(12, "doc-example-button-destructive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "doc-example-item", 7);
      \u0275\u0275element(14, "doc-example-button-outline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "doc-example-item", 8);
      \u0275\u0275element(16, "doc-example-button-ghost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "doc-example-item", 9);
      \u0275\u0275element(18, "doc-example-button-link");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "doc-example-item", 10);
      \u0275\u0275element(20, "doc-example-button-icon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "doc-example-item", 11);
      \u0275\u0275element(22, "doc-example-button-with-icon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "doc-example-item", 12);
      \u0275\u0275element(24, "doc-example-button-loading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "doc-example-item", 13);
      \u0275\u0275element(26, "doc-example-button-size-sm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "doc-example-item", 14);
      \u0275\u0275element(28, "doc-example-button-size-md");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "doc-example-item", 15);
      \u0275\u0275element(30, "doc-example-button-size-lg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "doc-example-item", 16);
      \u0275\u0275element(32, "doc-example-button-size-xl");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "Button component enhances native button with style and functionality")("label", "Button");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ApiInfoComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleButtonDefaultComponent,
    ExampleButtonSecondaryComponent,
    ExampleButtonDestructiveComponent,
    ExampleButtonOutlineComponent,
    ExampleButtonGhostComponent,
    ExampleButtonLinkComponent,
    ExampleButtonIconComponent,
    ExampleButtonWithIconComponent,
    ExampleButtonLoadingComponent,
    ExampleButtonSizeSmComponent,
    ExampleButtonSizeMdComponent,
    ExampleButtonSizeLgComponent,
    ExampleButtonSizeXlComponent,
    PreviewComponent,
    PreviewButtonComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonPageComponent, [{
    type: Component,
    args: [{ selector: "doc-button-page", imports: [
      BlueprintPageComponent,
      ApiInfoComponent,
      SourceTreeComponent,
      CommandInstallationComponent,
      ExamplesComponent,
      ExampleItemComponent,
      ExampleButtonDefaultComponent,
      ExampleButtonSecondaryComponent,
      ExampleButtonDestructiveComponent,
      ExampleButtonOutlineComponent,
      ExampleButtonGhostComponent,
      ExampleButtonLinkComponent,
      ExampleButtonIconComponent,
      ExampleButtonWithIconComponent,
      ExampleButtonLoadingComponent,
      ExampleButtonSizeSmComponent,
      ExampleButtonSizeMdComponent,
      ExampleButtonSizeLgComponent,
      ExampleButtonSizeXlComponent,
      PreviewComponent,
      PreviewButtonComponent,
      ImplementationComponent
    ], template: `<doc-blueprint-page
  [subTitle]="
    'Button component enhances native button with style and functionality'
  "
  [label]="'Button'"
  key="button"
>
  <doc-preview>
    <doc-preview-button></doc-preview-button>
  </doc-preview>
  <doc-command-installation type="component" name="button">
  </doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="button"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
  <doc-examples>
    <doc-example-item name="default">
      <doc-example-button-default></doc-example-button-default>
    </doc-example-item>
    <doc-example-item name="secondary">
      <doc-example-button-secondary></doc-example-button-secondary>
    </doc-example-item>
    <doc-example-item name="destructive">
      <doc-example-button-destructive></doc-example-button-destructive>
    </doc-example-item>
    <doc-example-item name="outline">
      <doc-example-button-outline></doc-example-button-outline>
    </doc-example-item>
    <doc-example-item name="ghost">
      <doc-example-button-ghost></doc-example-button-ghost>
    </doc-example-item>
    <doc-example-item name="link">
      <doc-example-button-link></doc-example-button-link>
    </doc-example-item>
    <doc-example-item name="icon">
      <doc-example-button-icon></doc-example-button-icon>
    </doc-example-item>
    <doc-example-item name="with-icon">
      <doc-example-button-with-icon></doc-example-button-with-icon>
    </doc-example-item>
    <doc-example-item name="loading">
      <doc-example-button-loading></doc-example-button-loading>
    </doc-example-item>
    <doc-example-item name="size-sm">
      <doc-example-button-size-sm></doc-example-button-size-sm>
    </doc-example-item>
    <doc-example-item name="size-md">
      <doc-example-button-size-md></doc-example-button-size-md>
    </doc-example-item>
    <doc-example-item name="size-lg">
      <doc-example-button-size-lg></doc-example-button-size-lg>
    </doc-example-item>
    <doc-example-item name="size-xl">
      <doc-example-button-size-xl></doc-example-button-size-xl>
    </doc-example-item>
  </doc-examples>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonPageComponent, { className: "ButtonPageComponent", filePath: "projects/docs/src/app/features/button-page/button-page.component.ts", lineNumber: 61 });
})();
export {
  ButtonPageComponent
};
//# sourceMappingURL=chunk-LPOK3G36.js.map
