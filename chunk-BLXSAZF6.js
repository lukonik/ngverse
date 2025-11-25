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
  TabContentDirective,
  TabGroupComponent,
  TabLabelDirective,
  TabPanelComponent
} from "./chunk-Y4J6H3UA.js";
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
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/tab/example-tab-basic.component.ts
var ExampleTabBasicComponent = class _ExampleTabBasicComponent {
  static \u0275fac = function ExampleTabBasicComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleTabBasicComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTabBasicComponent, selectors: [["doc-example-tab-basic"]], decls: 7, vars: 0, consts: [["label", "Tab 1"], ["label", "Tab 2"], ["label", "Tab 3"]], template: function ExampleTabBasicComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tab-group")(1, "app-tab-panel", 0);
      \u0275\u0275text(2, " Content for the first tab ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-tab-panel", 1);
      \u0275\u0275text(4, " Content for the second tab ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "app-tab-panel", 2);
      \u0275\u0275text(6, " Content for the third tab ");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [TabGroupComponent, TabPanelComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTabBasicComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-tab-basic",
      imports: [TabGroupComponent, TabPanelComponent],
      template: `
    <app-tab-group>
      <app-tab-panel label="Tab 1"> Content for the first tab </app-tab-panel>
      <app-tab-panel label="Tab 2"> Content for the second tab </app-tab-panel>
      <app-tab-panel label="Tab 3"> Content for the third tab </app-tab-panel>
    </app-tab-group>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTabBasicComponent, { className: "ExampleTabBasicComponent", filePath: "projects/docs/src/app/examples/tab/example-tab-basic.component.ts", lineNumber: 17 });
})();

// projects/docs/src/app/examples/tab/example-tab-custom-labels.component.ts
function ExampleTabCustomLabelsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 3);
    \u0275\u0275element(2, "path", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Dashboard ");
    \u0275\u0275elementEnd();
  }
}
function ExampleTabCustomLabelsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 3);
    \u0275\u0275element(2, "path", 5)(3, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Tasks ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6, "3");
    \u0275\u0275elementEnd()();
  }
}
function ExampleTabCustomLabelsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 3);
    \u0275\u0275element(2, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Profile ");
    \u0275\u0275elementEnd();
  }
}
var ExampleTabCustomLabelsComponent = class _ExampleTabCustomLabelsComponent {
  static \u0275fac = function ExampleTabCustomLabelsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleTabCustomLabelsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTabCustomLabelsComponent, selectors: [["doc-example-tab-custom-labels"]], decls: 13, vars: 0, consts: [["appTabLabel", ""], [1, "p-4"], [1, "flex", "items-center", "gap-2"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "d", "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", "clip-rule", "evenodd"], ["d", "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"], ["fill-rule", "evenodd", "d", "M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z", "clip-rule", "evenodd"], [1, "ml-1", "rounded-full", "bg-blue-100", "px-2", "py-0.5", "text-xs", "font-medium", "text-blue-800"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z", "clip-rule", "evenodd"]], template: function ExampleTabCustomLabelsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tab-group")(1, "app-tab-panel");
      \u0275\u0275template(2, ExampleTabCustomLabelsComponent_ng_template_2_Template, 4, 0, "ng-template", 0);
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275text(4, "Dashboard content with custom icon label");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "app-tab-panel");
      \u0275\u0275template(6, ExampleTabCustomLabelsComponent_ng_template_6_Template, 7, 0, "ng-template", 0);
      \u0275\u0275elementStart(7, "div", 1);
      \u0275\u0275text(8, "Task management with badge indicator");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "app-tab-panel");
      \u0275\u0275template(10, ExampleTabCustomLabelsComponent_ng_template_10_Template, 4, 0, "ng-template", 0);
      \u0275\u0275elementStart(11, "div", 1);
      \u0275\u0275text(12, "User profile settings and information");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [TabGroupComponent, TabPanelComponent, TabLabelDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTabCustomLabelsComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-tab-custom-labels",
      imports: [TabGroupComponent, TabPanelComponent, TabLabelDirective],
      template: `
    <app-tab-group>
      <app-tab-panel>
        <ng-template appTabLabel>
          <span class="flex items-center gap-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Dashboard
          </span>
        </ng-template>
        <div class="p-4">Dashboard content with custom icon label</div>
      </app-tab-panel>

      <app-tab-panel>
        <ng-template appTabLabel>
          <span class="flex items-center gap-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              />
            </svg>
            Tasks
            <span
              class="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800"
              >3</span
            >
          </span>
        </ng-template>
        <div class="p-4">Task management with badge indicator</div>
      </app-tab-panel>

      <app-tab-panel>
        <ng-template appTabLabel>
          <span class="flex items-center gap-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg>
            Profile
          </span>
        </ng-template>
        <div class="p-4">User profile settings and information</div>
      </app-tab-panel>
    </app-tab-group>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTabCustomLabelsComponent, { className: "ExampleTabCustomLabelsComponent", filePath: "projects/docs/src/app/examples/tab/example-tab-custom-labels.component.ts", lineNumber: 67 });
})();

// projects/docs/src/app/examples/tab/example-tab-disabled.component.ts
var ExampleTabDisabledComponent = class _ExampleTabDisabledComponent {
  static \u0275fac = function ExampleTabDisabledComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleTabDisabledComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTabDisabledComponent, selectors: [["doc-example-tab-disabled"]], decls: 13, vars: 1, consts: [["label", "Available"], [1, "p-4"], ["label", "Disabled Tab", 3, "disabled"], ["label", "Another Available Tab"]], template: function ExampleTabDisabledComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tab-group")(1, "app-tab-panel", 0)(2, "div", 1)(3, "p");
      \u0275\u0275text(4, "This tab is available and can be selected.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "app-tab-panel", 2)(6, "div", 1)(7, "p");
      \u0275\u0275text(8, "This tab is disabled and cannot be selected.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "app-tab-panel", 3)(10, "div", 1)(11, "p");
      \u0275\u0275text(12, "This tab is also available for selection.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", true);
    }
  }, dependencies: [TabGroupComponent, TabPanelComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTabDisabledComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-tab-disabled",
      imports: [TabGroupComponent, TabPanelComponent],
      template: `
    <app-tab-group>
      <app-tab-panel label="Available">
        <div class="p-4">
          <p>This tab is available and can be selected.</p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Disabled Tab" [disabled]="true">
        <div class="p-4">
          <p>This tab is disabled and cannot be selected.</p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Another Available Tab">
        <div class="p-4">
          <p>This tab is also available for selection.</p>
        </div>
      </app-tab-panel>
    </app-tab-group>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTabDisabledComponent, { className: "ExampleTabDisabledComponent", filePath: "projects/docs/src/app/examples/tab/example-tab-disabled.component.ts", lineNumber: 31 });
})();

// projects/docs/src/app/examples/tab/lazy-tab/lazy-tab.component.ts
var LazyTabComponent = class _LazyTabComponent {
  time = /* @__PURE__ */ new Date();
  static \u0275fac = function LazyTabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LazyTabComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LazyTabComponent, selectors: [["doc-lazy-tab"]], decls: 2, vars: 1, template: function LazyTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("This body is rendered on demand, enjoy! current time : ", ctx.time);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyTabComponent, [{
    type: Component,
    args: [{ selector: "doc-lazy-tab", changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>This body is rendered on demand, enjoy! current time : {{ time }}</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LazyTabComponent, { className: "LazyTabComponent", filePath: "projects/docs/src/app/examples/tab/lazy-tab/lazy-tab.component.ts", lineNumber: 9 });
})();

// projects/docs/src/app/examples/tab/example-tab-lazy-content.component.ts
function ExampleTabLazyContentComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 5);
    \u0275\u0275text(2, " This content only loads when the tab is first selected! ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "doc-lazy-tab");
    \u0275\u0275elementEnd();
  }
}
function ExampleTabLazyContentComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h3", 6);
    \u0275\u0275text(2, "Expensive Component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4, " This could be a heavy component with API calls, large data sets, or complex calculations. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8)(6, "p", 9);
    \u0275\u0275text(7, " \u{1F4A1} This content was lazy-loaded for better performance! ");
    \u0275\u0275elementEnd()()();
  }
}
var ExampleTabLazyContentComponent = class _ExampleTabLazyContentComponent {
  static \u0275fac = function ExampleTabLazyContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleTabLazyContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTabLazyContentComponent, selectors: [["doc-example-tab-lazy-content"]], decls: 9, vars: 0, consts: [["label", "Immediate Content"], [1, "p-4"], ["label", "Lazy Content"], ["appTabContent", ""], ["label", "Another Lazy Tab"], [1, "mb-4"], [1, "mb-2", "text-lg", "font-semibold"], [1, "text-gray-600"], [1, "mt-4", "rounded", "border", "border-yellow-200", "bg-yellow-50", "p-3"], [1, "text-sm", "text-yellow-800"]], template: function ExampleTabLazyContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tab-group")(1, "app-tab-panel", 0)(2, "div", 1)(3, "p");
      \u0275\u0275text(4, " This content loads immediately when the component is initialized. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "app-tab-panel", 2);
      \u0275\u0275template(6, ExampleTabLazyContentComponent_ng_template_6_Template, 4, 0, "ng-template", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-tab-panel", 4);
      \u0275\u0275template(8, ExampleTabLazyContentComponent_ng_template_8_Template, 8, 0, "ng-template", 3);
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [
    TabGroupComponent,
    TabPanelComponent,
    TabContentDirective,
    LazyTabComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTabLazyContentComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-tab-lazy-content",
      imports: [
        TabGroupComponent,
        TabPanelComponent,
        TabContentDirective,
        LazyTabComponent
      ],
      template: `
    <app-tab-group>
      <app-tab-panel label="Immediate Content">
        <div class="p-4">
          <p>
            This content loads immediately when the component is initialized.
          </p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Lazy Content">
        <ng-template appTabContent>
          <div class="p-4">
            <p class="mb-4">
              This content only loads when the tab is first selected!
            </p>
            <doc-lazy-tab></doc-lazy-tab>
          </div>
        </ng-template>
      </app-tab-panel>

      <app-tab-panel label="Another Lazy Tab">
        <ng-template appTabContent>
          <div class="p-4">
            <h3 class="mb-2 text-lg font-semibold">Expensive Component</h3>
            <p class="text-gray-600">
              This could be a heavy component with API calls, large data sets,
              or complex calculations.
            </p>
            <div class="mt-4 rounded border border-yellow-200 bg-yellow-50 p-3">
              <p class="text-sm text-yellow-800">
                \u{1F4A1} This content was lazy-loaded for better performance!
              </p>
            </div>
          </div>
        </ng-template>
      </app-tab-panel>
    </app-tab-group>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTabLazyContentComponent, { className: "ExampleTabLazyContentComponent", filePath: "projects/docs/src/app/examples/tab/example-tab-lazy-content.component.ts", lineNumber: 56 });
})();

// projects/docs/src/app/examples/tab/preview-tab.component.ts
var PreviewTabComponent = class _PreviewTabComponent {
  static \u0275fac = function PreviewTabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreviewTabComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewTabComponent, selectors: [["doc-preview-tab"]], decls: 19, vars: 0, consts: [["label", "Dashboard"], [1, "p-4"], [1, "mb-2", "text-lg", "font-semibold"], [1, "text-gray-600"], ["label", "Projects"], ["label", "Settings"]], template: function PreviewTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tab-group")(1, "app-tab-panel", 0)(2, "div", 1)(3, "h3", 2);
      \u0275\u0275text(4, "Dashboard Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, " Welcome to your dashboard. Here you can view your latest activities and statistics. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "app-tab-panel", 4)(8, "div", 1)(9, "h3", 2);
      \u0275\u0275text(10, "My Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 3);
      \u0275\u0275text(12, " Manage and track all your ongoing projects from this centralized location. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "app-tab-panel", 5)(14, "div", 1)(15, "h3", 2);
      \u0275\u0275text(16, "Account Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 3);
      \u0275\u0275text(18, " Configure your account preferences and security settings. ");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [
    TabGroupComponent,
    TabPanelComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewTabComponent, [{
    type: Component,
    args: [{
      selector: "doc-preview-tab",
      imports: [
        TabGroupComponent,
        TabPanelComponent,
        TabContentDirective,
        TabLabelDirective
      ],
      template: `
    <app-tab-group>
      <app-tab-panel label="Dashboard">
        <div class="p-4">
          <h3 class="mb-2 text-lg font-semibold">Dashboard Overview</h3>
          <p class="text-gray-600">
            Welcome to your dashboard. Here you can view your latest activities
            and statistics.
          </p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Projects">
        <div class="p-4">
          <h3 class="mb-2 text-lg font-semibold">My Projects</h3>
          <p class="text-gray-600">
            Manage and track all your ongoing projects from this centralized
            location.
          </p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Settings">
        <div class="p-4">
          <h3 class="mb-2 text-lg font-semibold">Account Settings</h3>
          <p class="text-gray-600">
            Configure your account preferences and security settings.
          </p>
        </div>
      </app-tab-panel>
    </app-tab-group>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewTabComponent, { className: "PreviewTabComponent", filePath: "projects/docs/src/app/examples/tab/preview-tab.component.ts", lineNumber: 49 });
})();

// projects/docs/src/app/features/tab-page/tab-page.component.ts
var ROOT = "tab";
var TabPageComponent = class _TabPageComponent {
  selectedIndex = signal(0, ...ngDevMode ? [{ debugName: "selectedIndex" }] : []);
  sourceTreeBuilder = inject(SourceTreeBuilder);
  apiInfo = {
    ariaDescription: "The Tab components implement WAI-ARIA tab panel pattern with full keyboard navigation support and proper focus management.",
    entities: [
      {
        name: "TabGroupComponent",
        type: "component",
        selector: "app-tab-group",
        description: "Container component that manages a collection of tab panels with keyboard navigation and accessibility support",
        inputs: [
          {
            name: "selectedIndex",
            type: "number",
            description: "The currently selected tab index (two-way bindable)",
            default: "0"
          },
          {
            name: "bodyGap",
            type: "boolean",
            description: "Whether to add padding to the tab content area",
            default: "true"
          }
        ],
        outputs: [
          {
            name: "tabChanged",
            value: "number",
            description: "Event emitted when the selected tab changes"
          }
        ]
      },
      {
        name: "TabPanelComponent",
        type: "component",
        selector: "app-tab-panel",
        description: "Individual tab panel that represents a single tab's content and configuration",
        inputs: [
          {
            name: "label",
            type: "string",
            description: "The text label displayed in the tab header (optional if using custom label template)",
            default: "undefined"
          },
          {
            name: "gap",
            type: "boolean",
            description: "Whether to apply default padding to the tab content area",
            default: "true"
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Whether this tab is disabled and cannot be selected",
            default: "false"
          }
        ]
      },
      {
        name: "TabHeaderComponent",
        type: "component",
        selector: "app-tab-header",
        description: "Tab header component that displays the clickable tab label and handles focus management",
        inputs: [
          {
            name: "tab",
            type: "TabPanelComponent",
            description: "Reference to the associated tab panel component",
            default: "required"
          },
          {
            name: "tabIndex",
            type: "number",
            description: "The zero-based index of this tab within the tab group",
            default: "required"
          },
          {
            name: "isSelected",
            type: "boolean",
            description: "Whether this tab is currently selected",
            default: "required"
          },
          {
            name: "isActive",
            type: "boolean",
            description: "Whether this tab header currently has keyboard focus",
            default: "false"
          },
          {
            name: "isDisabled",
            type: "boolean",
            description: "Whether this tab is disabled and cannot be selected",
            default: "false"
          }
        ]
      },
      {
        name: "TabContentDirective",
        type: "directive",
        selector: "ng-template[appTabContent]",
        description: "Directive that marks a template as lazy-loaded tab content. Content is only rendered when the tab becomes active."
      },
      {
        name: "TabLabelDirective",
        type: "directive",
        selector: "ng-template[appTabLabel]",
        description: "Directive that marks a template as a custom tab label. Allows for rich, interactive tab headers beyond simple text labels."
      }
    ]
  };
  sourceTree = [
    {
      name: ROOT,
      files: [
        // tab-group files (directly in tab folder, no CSS file)
        ...this.sourceTreeBuilder.componentFiles("tab-group", ROOT, ["css"]),
        // tab-panel files (no CSS or spec files)
        ...this.sourceTreeBuilder.componentFiles("tab-panel", `${ROOT}/tab-panel`, ["css", "spec.ts"]),
        // tab-header files (has all files)
        ...this.sourceTreeBuilder.componentFiles("tab-header", `${ROOT}/tab-header`, []),
        // directive files
        ...this.sourceTreeBuilder.directive("tab-content", `${ROOT}/directives`),
        ...this.sourceTreeBuilder.directive("tab-label", `${ROOT}/directives`)
      ],
      hideName: true
    }
  ];
  static \u0275fac = function TabPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabPageComponent, selectors: [["doc-tab-page"]], decls: 14, vars: 2, consts: [["label", "Tab", "subTitle", "Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time.", "key", "tab"], [1, "w-full"], ["name", "tab", 3, "sourceTree"], [3, "apiInfo"], ["name", "basic"], ["name", "custom-labels", "label", "Custom Labels"], ["name", "lazy-content", "label", "Lazy Content"], ["name", "disabled"]], template: function TabPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-preview");
      \u0275\u0275element(2, "doc-preview-tab", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-source-tree", 2)(4, "doc-api-info", 3);
      \u0275\u0275elementStart(5, "doc-examples")(6, "doc-example-item", 4);
      \u0275\u0275element(7, "doc-example-tab-basic", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "doc-example-item", 5);
      \u0275\u0275element(9, "doc-example-tab-custom-labels", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "doc-example-item", 6);
      \u0275\u0275element(11, "doc-example-tab-lazy-content", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "doc-example-item", 7);
      \u0275\u0275element(13, "doc-example-tab-disabled", 1);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    PreviewComponent,
    PreviewTabComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleTabBasicComponent,
    ExampleTabCustomLabelsComponent,
    ExampleTabLazyContentComponent,
    ExampleTabDisabledComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPageComponent, [{
    type: Component,
    args: [{ selector: "doc-tab-page", imports: [
      BlueprintPageComponent,
      PreviewComponent,
      PreviewTabComponent,
      ExamplesComponent,
      ExampleItemComponent,
      ExampleTabBasicComponent,
      ExampleTabCustomLabelsComponent,
      ExampleTabLazyContentComponent,
      ExampleTabDisabledComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: '<doc-blueprint-page\n  label="Tab"\n  subTitle="Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time."\n  key="tab"\n>\n  <doc-preview>\n    <doc-preview-tab class="w-full"></doc-preview-tab>\n  </doc-preview>\n\n  <doc-source-tree [sourceTree]="sourceTree" name="tab"></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"></doc-api-info>\n\n  <doc-examples>\n    <doc-example-item name="basic">\n      <doc-example-tab-basic class="w-full"></doc-example-tab-basic>\n    </doc-example-item>\n\n    <doc-example-item name="custom-labels" label="Custom Labels">\n      <doc-example-tab-custom-labels\n        class="w-full"\n      ></doc-example-tab-custom-labels>\n    </doc-example-item>\n\n    <doc-example-item name="lazy-content" label="Lazy Content">\n      <doc-example-tab-lazy-content\n        class="w-full"\n      ></doc-example-tab-lazy-content>\n    </doc-example-item>\n\n    <doc-example-item name="disabled">\n      <doc-example-tab-disabled class="w-full"></doc-example-tab-disabled>\n    </doc-example-item>\n  </doc-examples>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabPageComponent, { className: "TabPageComponent", filePath: "projects/docs/src/app/features/tab-page/tab-page.component.ts", lineNumber: 39 });
})();
export {
  TabPageComponent
};
//# sourceMappingURL=chunk-BLXSAZF6.js.map
