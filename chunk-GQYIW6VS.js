import {
  ImplementationComponent
} from "./chunk-AC2HR3YF.js";
import {
  ExampleItemComponent,
  ExamplesComponent,
  PreviewComponent
} from "./chunk-WXCG4QTE.js";
import {
  AccordionHeaderComponent,
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE,
  VOID_API_RETURN_TYPE
} from "./chunk-YTQ3XDMW.js";
import {
  AccordionBodyComponent,
  AccordionComponent,
  AccordionItemComponent
} from "./chunk-XNVPQ5U3.js";
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
import {
  FontIconComponent
} from "./chunk-MTAP3RFR.js";
import "./chunk-232UVHOA.js";
import {
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
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/accordion/example-accordion-custom-header.component.ts
var ExampleAccordionCustomHeaderComponent = class _ExampleAccordionCustomHeaderComponent {
  static \u0275fac = function ExampleAccordionCustomHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleAccordionCustomHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleAccordionCustomHeaderComponent, selectors: [["doc-example-accordion-custom-header"]], decls: 19, vars: 0, consts: [[1, "flex", "items-center", "gap-2"], [1, "text-blue-600"], [1, "font-medium"], [1, "flex", "w-full", "items-center", "justify-between"], [1, "font-semibold", "text-green-700"], [1, "rounded", "bg-green-100", "px-2", "py-1", "text-xs", "text-green-800"]], template: function ExampleAccordionCustomHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-accordion")(1, "app-accordion-item")(2, "app-accordion-header")(3, "div", 0)(4, "app-font-icon", 1);
      \u0275\u0275text(5, "code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 2);
      \u0275\u0275text(7, "Custom Header with Icon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "app-accordion-body");
      \u0275\u0275text(9, " This accordion item uses a custom header component with an icon and styled text instead of the default label attribute. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "app-accordion-item")(11, "app-accordion-header")(12, "div", 3)(13, "span", 4);
      \u0275\u0275text(14, "Styled Header");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 5);
      \u0275\u0275text(16, "New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "app-accordion-body");
      \u0275\u0275text(18, " You can add any HTML content to the custom header, including badges, icons, or complex layouts. ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionBodyComponent,
    AccordionHeaderComponent,
    FontIconComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleAccordionCustomHeaderComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-accordion-custom-header",
      imports: [
        AccordionComponent,
        AccordionItemComponent,
        AccordionBodyComponent,
        AccordionHeaderComponent,
        FontIconComponent
      ],
      template: `
    <app-accordion>
      <app-accordion-item>
        <app-accordion-header>
          <div class="flex items-center gap-2">
            <app-font-icon class="text-blue-600">code</app-font-icon>
            <span class="font-medium">Custom Header with Icon</span>
          </div>
        </app-accordion-header>
        <app-accordion-body>
          This accordion item uses a custom header component with an icon and
          styled text instead of the default label attribute.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item>
        <app-accordion-header>
          <div class="flex w-full items-center justify-between">
            <span class="font-semibold text-green-700">Styled Header</span>
            <span class="rounded bg-green-100 px-2 py-1 text-xs text-green-800"
              >New</span
            >
          </div>
        </app-accordion-header>
        <app-accordion-body>
          You can add any HTML content to the custom header, including badges,
          icons, or complex layouts.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleAccordionCustomHeaderComponent, { className: "ExampleAccordionCustomHeaderComponent", filePath: "projects/docs/src/app/examples/accordion/example-accordion-custom-header.component.ts", lineNumber: 48 });
})();

// projects/docs/src/app/examples/accordion/example-accordion-default.component.ts
var ExampleAccordionDefaultComponent = class _ExampleAccordionDefaultComponent {
  static \u0275fac = function ExampleAccordionDefaultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleAccordionDefaultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleAccordionDefaultComponent, selectors: [["doc-example-accordion-default"]], decls: 10, vars: 0, consts: [["label", "What is Angular?"], ["label", "What is TypeScript?"], ["label", "What is RxJS?"]], template: function ExampleAccordionDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-accordion")(1, "app-accordion-item", 0)(2, "app-accordion-body");
      \u0275\u0275text(3, " Angular is a platform and framework for building single-page client applications using HTML and TypeScript. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "app-accordion-item", 1)(5, "app-accordion-body");
      \u0275\u0275text(6, " TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "app-accordion-item", 2)(8, "app-accordion-body");
      \u0275\u0275text(9, " RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleAccordionDefaultComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-accordion-default",
      imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
      template: `
    <app-accordion>
      <app-accordion-item label="What is Angular?">
        <app-accordion-body>
          Angular is a platform and framework for building single-page client
          applications using HTML and TypeScript.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="What is TypeScript?">
        <app-accordion-body>
          TypeScript is a strongly typed programming language that builds on
          JavaScript, giving you better tooling at any scale.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="What is RxJS?">
        <app-accordion-body>
          RxJS is a library for reactive programming using Observables, to make
          it easier to compose asynchronous or callback-based code.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleAccordionDefaultComponent, { className: "ExampleAccordionDefaultComponent", filePath: "projects/docs/src/app/examples/accordion/example-accordion-default.component.ts", lineNumber: 32 });
})();

// projects/docs/src/app/examples/accordion/example-accordion-disabled.component.ts
var ExampleAccordionDisabledComponent = class _ExampleAccordionDisabledComponent {
  static \u0275fac = function ExampleAccordionDisabledComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleAccordionDisabledComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleAccordionDisabledComponent, selectors: [["doc-example-accordion-disabled"]], decls: 10, vars: 1, consts: [["label", "Available Item"], ["label", "Disabled Item", 3, "disabled"], ["label", "Another Available Item"]], template: function ExampleAccordionDisabledComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-accordion")(1, "app-accordion-item", 0)(2, "app-accordion-body");
      \u0275\u0275text(3, " This accordion item is available and can be expanded normally. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "app-accordion-item", 1)(5, "app-accordion-body");
      \u0275\u0275text(6, " This content is not accessible because the item is disabled. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "app-accordion-item", 2)(8, "app-accordion-body");
      \u0275\u0275text(9, " This item demonstrates normal functionality alongside disabled items. ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", true);
    }
  }, dependencies: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleAccordionDisabledComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-accordion-disabled",
      imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
      template: `
    <app-accordion>
      <app-accordion-item label="Available Item">
        <app-accordion-body>
          This accordion item is available and can be expanded normally.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Disabled Item" [disabled]="true">
        <app-accordion-body>
          This content is not accessible because the item is disabled.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Another Available Item">
        <app-accordion-body>
          This item demonstrates normal functionality alongside disabled items.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleAccordionDisabledComponent, { className: "ExampleAccordionDisabledComponent", filePath: "projects/docs/src/app/examples/accordion/example-accordion-disabled.component.ts", lineNumber: 29 });
})();

// projects/docs/src/app/examples/accordion/example-accordion-expanded.component.ts
var ExampleAccordionExpandedComponent = class _ExampleAccordionExpandedComponent {
  static \u0275fac = function ExampleAccordionExpandedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleAccordionExpandedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleAccordionExpandedComponent, selectors: [["doc-example-accordion-expanded"]], decls: 10, vars: 1, consts: [["label", "Pre-expanded Item", 3, "expanded"], ["label", "Collapsed Item"], ["label", "Another Collapsed Item"]], template: function ExampleAccordionExpandedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-accordion")(1, "app-accordion-item", 0)(2, "app-accordion-body");
      \u0275\u0275text(3, " This accordion item is expanded by default when the component loads. This is useful for highlighting important content. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "app-accordion-item", 1)(5, "app-accordion-body");
      \u0275\u0275text(6, " This item starts collapsed and can be expanded by clicking the header. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "app-accordion-item", 2)(8, "app-accordion-body");
      \u0275\u0275text(9, " Multiple items can have different initial states based on your requirements. ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("expanded", true);
    }
  }, dependencies: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleAccordionExpandedComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-accordion-expanded",
      imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
      template: `
    <app-accordion>
      <app-accordion-item label="Pre-expanded Item" [expanded]="true">
        <app-accordion-body>
          This accordion item is expanded by default when the component loads.
          This is useful for highlighting important content.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Collapsed Item">
        <app-accordion-body>
          This item starts collapsed and can be expanded by clicking the header.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Another Collapsed Item">
        <app-accordion-body>
          Multiple items can have different initial states based on your
          requirements.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleAccordionExpandedComponent, { className: "ExampleAccordionExpandedComponent", filePath: "projects/docs/src/app/examples/accordion/example-accordion-expanded.component.ts", lineNumber: 31 });
})();

// projects/docs/src/app/examples/accordion/example-accordion-multi.component.ts
var ExampleAccordionMultiComponent = class _ExampleAccordionMultiComponent {
  static \u0275fac = function ExampleAccordionMultiComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleAccordionMultiComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleAccordionMultiComponent, selectors: [["doc-example-accordion-multi"]], decls: 10, vars: 3, consts: [[3, "multi"], ["label", "Frontend Technologies", 3, "expanded"], ["label", "Backend Technologies", 3, "expanded"], ["label", "Development Tools"]], template: function ExampleAccordionMultiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-accordion", 0)(1, "app-accordion-item", 1)(2, "app-accordion-body");
      \u0275\u0275text(3, " Modern frontend technologies include HTML5, CSS3, JavaScript, TypeScript, React, Angular, Vue.js, and various build tools like Webpack and Vite. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "app-accordion-item", 2)(5, "app-accordion-body");
      \u0275\u0275text(6, " Backend development involves Node.js, Python, Java, C#, databases like PostgreSQL and MongoDB, and deployment platforms like AWS and Docker. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "app-accordion-item", 3)(8, "app-accordion-body");
      \u0275\u0275text(9, " Essential development tools include Git for version control, VS Code or other IDEs, debugging tools, testing frameworks like Jest and Cypress. ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("multi", true);
      \u0275\u0275advance();
      \u0275\u0275property("expanded", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("expanded", true);
    }
  }, dependencies: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleAccordionMultiComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-accordion-multi",
      imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
      template: `
    <app-accordion [multi]="true">
      <app-accordion-item label="Frontend Technologies" [expanded]="true">
        <app-accordion-body>
          Modern frontend technologies include HTML5, CSS3, JavaScript,
          TypeScript, React, Angular, Vue.js, and various build tools like
          Webpack and Vite.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Backend Technologies" [expanded]="true">
        <app-accordion-body>
          Backend development involves Node.js, Python, Java, C#, databases like
          PostgreSQL and MongoDB, and deployment platforms like AWS and Docker.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Development Tools">
        <app-accordion-body>
          Essential development tools include Git for version control, VS Code
          or other IDEs, debugging tools, testing frameworks like Jest and
          Cypress.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleAccordionMultiComponent, { className: "ExampleAccordionMultiComponent", filePath: "projects/docs/src/app/examples/accordion/example-accordion-multi.component.ts", lineNumber: 34 });
})();

// projects/docs/src/app/examples/accordion/preview-accordion.component.ts
var PreviewAccordionComponent = class _PreviewAccordionComponent {
  static \u0275fac = function PreviewAccordionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreviewAccordionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewAccordionComponent, selectors: [["doc-preview-accordion"]], decls: 10, vars: 0, consts: [["label", "Is it accessible?"], ["label", "Is it styled?"], ["label", "Is it animated?"]], template: function PreviewAccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-accordion")(1, "app-accordion-item", 0)(2, "app-accordion-body");
      \u0275\u0275text(3, " Yes. It adheres to the WAI-ARIA design pattern and uses Angular CDK's accordion primitives. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "app-accordion-item", 1)(5, "app-accordion-body");
      \u0275\u0275text(6, " Yes. It comes with default styles that you can customize with your own CSS. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "app-accordion-item", 2)(8, "app-accordion-body");
      \u0275\u0275text(9, " Yes. It uses CSS transitions for smooth expand/collapse animations. ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewAccordionComponent, [{
    type: Component,
    args: [{
      selector: "doc-preview-accordion",
      imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
      template: `
    <app-accordion>
      <app-accordion-item label="Is it accessible?">
        <app-accordion-body>
          Yes. It adheres to the WAI-ARIA design pattern and uses Angular CDK's
          accordion primitives.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Is it styled?">
        <app-accordion-body>
          Yes. It comes with default styles that you can customize with your own
          CSS.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Is it animated?">
        <app-accordion-body>
          Yes. It uses CSS transitions for smooth expand/collapse animations.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewAccordionComponent, { className: "PreviewAccordionComponent", filePath: "projects/docs/src/app/examples/accordion/preview-accordion.component.ts", lineNumber: 31 });
})();

// projects/docs/src/app/features/accordion-page/accordion-page.component.ts
var ROOT = "accordion";
var AccordionPageComponent = class _AccordionPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent("accordion", ROOT),
        ...this.sourceTreeBuilder.fullComponent("accordion-item", ROOT),
        this.sourceTreeBuilder.component("accordion-header", ROOT),
        this.sourceTreeBuilder.component("accordion-body", ROOT),
        this.sourceTreeBuilder.component("expand-icon", ROOT),
        this.sourceTreeBuilder.file("accordion-animations", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    reliesOn: "https://material.angular.io/cdk/accordion/overview",
    ariaLink: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
    entities: [
      {
        name: "AccordionComponent",
        selector: "app-accordion",
        type: "component",
        description: "The main component, that includes accordion-items",
        inputs: [
          {
            name: "multi",
            type: "boolean",
            description: "allows multiple panels to be open simultaneously",
            default: "false"
          }
        ],
        methods: [
          {
            name: "closeAll",
            returnType: VOID_API_RETURN_TYPE,
            description: "closes all accordion-items"
          },
          {
            name: "openAll",
            returnType: VOID_API_RETURN_TYPE,
            description: "opens all accordion-items"
          }
        ]
      },
      {
        name: "AccordionItemComponent",
        selector: "app-accordion-item",
        type: "component",
        description: "The component is used within an accordion to render an item.",
        inputs: [
          {
            name: "label",
            type: "string",
            description: "label of the accordion-item",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          },
          {
            name: "disabled",
            type: "boolean",
            description: "disables accordion-item",
            default: "false"
          },
          {
            name: "expanded",
            type: "boolean",
            description: "expands the accordion-item",
            default: "false"
          }
        ],
        outputs: [
          {
            name: "opened",
            value: VOID_API_RETURN_TYPE,
            description: "emits when the accordion item is opened"
          },
          {
            name: "closed",
            value: VOID_API_RETURN_TYPE,
            description: "emits when the accordion item is closed"
          },
          {
            name: "destroyed",
            value: VOID_API_RETURN_TYPE,
            description: "emits when the accordion item is destroyed"
          }
        ],
        methods: [
          {
            name: "toggle",
            description: "toggles the accordion-item",
            returnType: "void",
            params: []
          },
          {
            name: "open",
            description: "opens the accordion-item",
            returnType: "void",
            params: []
          },
          {
            name: "close",
            description: "closes the accordion-item",
            returnType: "void"
          }
        ]
      },
      {
        name: "AccordionBodyComponent",
        selector: "app-accordion-body",
        type: "component",
        description: "The component is used within an accordion-item to render its ng-content.",
        inputs: []
      },
      {
        name: "AccordionHeaderComponent",
        selector: "app-accordion-header",
        type: "component",
        description: "The component can replace the label inside an accordion item and uses ng-content to render its content.",
        inputs: []
      }
    ]
  };
  static \u0275fac = function AccordionPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccordionPageComponent, selectors: [["doc-accordion-page"]], decls: 17, vars: 4, consts: [["key", "accordion", 3, "subTitle", "label"], [1, "w-full"], ["type", "component", "name", "accordion"], ["name", "accordion", 3, "sourceTree"], [3, "apiInfo"], ["name", "default"], ["name", "multi"], ["name", "custom-header"], ["name", "disabled"], ["name", "expanded"]], template: function AccordionPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-preview");
      \u0275\u0275element(2, "doc-preview-accordion", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementStart(6, "doc-examples")(7, "doc-example-item", 5);
      \u0275\u0275element(8, "doc-example-accordion-default", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "doc-example-item", 6);
      \u0275\u0275element(10, "doc-example-accordion-multi", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "doc-example-item", 7);
      \u0275\u0275element(12, "doc-example-accordion-custom-header", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "doc-example-item", 8);
      \u0275\u0275element(14, "doc-example-accordion-disabled", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "doc-example-item", 9);
      \u0275\u0275element(16, "doc-example-accordion-expanded", 1);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "An accordion is a vertically stacked set of interactive headings that each contain a title and expandable content.")("label", "Accordion");
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
    PreviewComponent,
    PreviewAccordionComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleAccordionDefaultComponent,
    ExampleAccordionMultiComponent,
    ExampleAccordionCustomHeaderComponent,
    ExampleAccordionDisabledComponent,
    ExampleAccordionExpandedComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionPageComponent, [{
    type: Component,
    args: [{ selector: "doc-accordion-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ApiInfoComponent,
      SourceTreeComponent,
      CommandInstallationComponent,
      PreviewComponent,
      PreviewAccordionComponent,
      ExamplesComponent,
      ExampleItemComponent,
      ExampleAccordionDefaultComponent,
      ExampleAccordionMultiComponent,
      ExampleAccordionCustomHeaderComponent,
      ExampleAccordionDisabledComponent,
      ExampleAccordionExpandedComponent,
      ImplementationComponent
    ], template: `<doc-blueprint-page
  [subTitle]="
    'An accordion is a vertically stacked set of interactive headings that each contain a title and expandable content.'
  "
  [label]="'Accordion'"
  key="accordion"
>
  <doc-preview>
    <doc-preview-accordion class="w-full"></doc-preview-accordion>
  </doc-preview>
  <doc-command-installation
    type="component"
    name="accordion"
  ></doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="accordion"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
  <doc-examples>
    <doc-example-item name="default">
      <doc-example-accordion-default
        class="w-full"
      ></doc-example-accordion-default>
    </doc-example-item>
    <doc-example-item name="multi">
      <doc-example-accordion-multi class="w-full"></doc-example-accordion-multi>
    </doc-example-item>
    <doc-example-item name="custom-header">
      <doc-example-accordion-custom-header
        class="w-full"
      ></doc-example-accordion-custom-header>
    </doc-example-item>
    <doc-example-item name="disabled">
      <doc-example-accordion-disabled
        class="w-full"
      ></doc-example-accordion-disabled>
    </doc-example-item>
    <doc-example-item name="expanded">
      <doc-example-accordion-expanded
        class="w-full"
      ></doc-example-accordion-expanded>
    </doc-example-item>
  </doc-examples>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccordionPageComponent, { className: "AccordionPageComponent", filePath: "projects/docs/src/app/features/accordion-page/accordion-page.component.ts", lineNumber: 53 });
})();
export {
  AccordionPageComponent
};
//# sourceMappingURL=chunk-GQYIW6VS.js.map
