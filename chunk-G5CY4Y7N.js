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
import {
  ActiveDescendantKeyManager
} from "./chunk-QF5VCJ6S.js";
import "./chunk-MKNWGWE3.js";
import "./chunk-VQYCA752.js";
import "./chunk-GAYAR7LB.js";
import {
  Directionality
} from "./chunk-4UYB5JXN.js";
import "./chunk-JX5YVH27.js";
import "./chunk-RBCCWOK3.js";
import "./chunk-EPTODCGW.js";
import "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Injector,
  Input,
  Output,
  computed,
  contentChildren,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/tab-nav-bar/tab-nav-bar-item/tab-nav-bar-item.component.ts
var _c0 = ["*"];
var TabNavBarItemComponent = class _TabNavBarItemComponent {
  /** The unique value for this tab nav bar item */
  tabValue = input.required(...ngDevMode ? [{ debugName: "tabValue" }] : []);
  /** Whether this tab nav bar item is disabled  */
  disabled;
  /** Reference to the parent tab nav bar component */
  tabNavBar = inject(forwardRef(() => TabNavBarComponent));
  /** Whether this tab nav bar item currently has keyboard focus */
  isActive = false;
  /** Computed property that determines if this tab nav bar item is currently selected */
  isSelected = computed(() => this.tabNavBar.selectedTabValue() === this.tabValue(), ...ngDevMode ? [{ debugName: "isSelected" }] : []);
  /**
   * Handles click events on the tab nav bar item.
   * Selects this tab by notifying the parent tab nav bar component.
   */
  onClick() {
    if (!this.disabled) {
      this.tabNavBar.selectTabValue(this.tabValue());
    }
  }
  /**
   * Sets the active state of this tab nav bar item.
   * Called by the CDK KeyManager for keyboard navigation.
   */
  setActiveStyles() {
    this.isActive = true;
  }
  /**
   * Removes the active state of this tab nav bar item.
   * Called by the CDK KeyManager for keyboard navigation.
   */
  setInactiveStyles() {
    this.isActive = false;
  }
  static \u0275fac = function TabNavBarItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabNavBarItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabNavBarItemComponent, selectors: [["app-tab-nav-bar-item"]], hostVars: 3, hostBindings: function TabNavBarItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-disabled", ctx.disabled);
      \u0275\u0275classProp("is-active", ctx.isActive);
    }
  }, inputs: { tabValue: [1, "tabValue"], disabled: "disabled" }, ngContentSelectors: _c0, decls: 2, vars: 12, consts: [["type", "button", "role", "tab", 1, "relative", "px-4", "py-2", "text-sm", "font-medium", "text-gray-500", "transition-colors", "duration-200", "hover:text-gray-700", "focus:text-slate-900", "focus:outline-none", 3, "click", "tabindex"]], template: function TabNavBarItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function TabNavBarItemComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("text-slate-900", ctx.isSelected())("border-b-2", ctx.isSelected())("border-slate-900", ctx.isSelected())("is-active", ctx.isActive);
      \u0275\u0275domProperty("tabIndex", ctx.isSelected() ? 0 : -1);
      \u0275\u0275attribute("id", "tab-nav-" + ctx.tabValue())("aria-selected", ctx.isSelected())("aria-disabled", ctx.disabled);
    }
  }, styles: ['\n\n[aria-disabled="true"][_nghost-%COMP%] {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.is-active[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: rgb(249, 250, 251);\n}\n/*# sourceMappingURL=tab-nav-bar-item.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabNavBarItemComponent, [{
    type: Component,
    args: [{ selector: "app-tab-nav-bar-item", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[attr.aria-disabled]": "disabled",
      "[class.is-active]": "isActive"
    }, template: `<button
  type="button"
  class="relative px-4 py-2 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-700 focus:text-slate-900 focus:outline-none"
  [class.text-slate-900]="isSelected()"
  [class.border-b-2]="isSelected()"
  [class.border-slate-900]="isSelected()"
  [class.is-active]="isActive"
  [attr.id]="'tab-nav-' + tabValue()"
  [attr.aria-selected]="isSelected()"
  [attr.aria-disabled]="disabled"
  [tabindex]="isSelected() ? 0 : -1"
  role="tab"
  (click)="onClick()"
>
  <ng-content></ng-content>
</button>
`, styles: ['/* projects/ngverse/src/lib/ui/tab-nav-bar/tab-nav-bar-item/tab-nav-bar-item.component.css */\n:host([aria-disabled="true"]) {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n:host(.is-active) button {\n  background-color: rgb(249, 250, 251);\n}\n/*# sourceMappingURL=tab-nav-bar-item.component.css.map */\n'] }]
  }], null, { tabValue: [{ type: Input, args: [{ isSignal: true, alias: "tabValue", required: true }] }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabNavBarItemComponent, { className: "TabNavBarItemComponent", filePath: "projects/ngverse/src/lib/ui/tab-nav-bar/tab-nav-bar-item/tab-nav-bar-item.component.ts", lineNumber: 40 });
})();

// projects/ngverse/src/lib/ui/tab-nav-bar/tab-nav-bar.component.ts
var _c02 = ["*"];
var TabNavBarComponent = class _TabNavBarComponent {
  /** Collection of tab nav bar item components projected into this component */
  tabItems = contentChildren(forwardRef(() => TabNavBarItemComponent), ...ngDevMode ? [{ debugName: "tabItems" }] : []);
  /** The currently selected tab value, two-way bindable */
  selectedTabValue = model(void 0, ...ngDevMode ? [{ debugName: "selectedTabValue" }] : []);
  /** Collection of tab nav bar item components for keyboard navigation */
  tabNavBarItems = contentChildren(forwardRef(() => TabNavBarItemComponent), ...ngDevMode ? [{ debugName: "tabNavBarItems" }] : []);
  /** Service for determining text direction (RTL/LTR) */
  direction = inject(Directionality);
  /**
   * Manages keyboard navigation between tab nav bar items.
   * Handles arrow key navigation and focus management according to ARIA best practices.
   */
  keyManager = new ActiveDescendantKeyManager(this.tabNavBarItems, inject(Injector)).withHorizontalOrientation(this.direction.value);
  /** Event emitted when the selected tab value changes */
  tabChanged = output();
  /** Computed property that returns the currently selected tab nav bar item component */
  selectedTabItem = computed(() => this.tabItems().find((item) => item.tabValue() === this.selectedTabValue()), ...ngDevMode ? [{ debugName: "selectedTabItem" }] : []);
  /**
   * Handles keyboard navigation events for the tab nav bar.
   * Responds to Enter key to select the currently focused tab and delegates
   * other navigation keys to the key manager.
   *
   * @param event - The keyboard event to process
   */
  onKeydown(event) {
    if (event.key === "Enter" && this.keyManager.activeItemIndex !== null) {
      const activeItem = this.keyManager.activeItem;
      if (activeItem) {
        this.selectTabValue(activeItem.tabValue());
      }
    }
    this.keyManager.onKeydown(event);
  }
  /**
   * Handles focus events on the tab nav bar container.
   * Ensures the first tab receives focus when the tab nav bar is focused for the first time.
   */
  onTabNavBarFocus() {
    if (!this.keyManager.activeItem) {
      this.keyManager.setFirstItemActive();
    }
  }
  /**
   * Programmatically selects a tab by value.
   * Updates the key manager's active item, sets the selected tab value, and emits the change event.
   *
   * @param tabValue - The value of the tab to select
   */
  selectTabValue(tabValue) {
    const itemIndex = this.tabItems().findIndex((item) => item.tabValue() === tabValue);
    if (itemIndex !== -1) {
      this.keyManager.setActiveItem(itemIndex);
    }
    this.selectedTabValue.set(tabValue);
    this.tabChanged.emit(tabValue);
  }
  static \u0275fac = function TabNavBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabNavBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabNavBarComponent, selectors: [["app-tab-nav-bar"]], contentQueries: function TabNavBarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.tabItems, TabNavBarItemComponent, 4);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.tabNavBarItems, TabNavBarItemComponent, 4);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { selectedTabValue: [1, "selectedTabValue"] }, outputs: { selectedTabValue: "selectedTabValueChange", tabChanged: "tabChanged" }, ngContentSelectors: _c02, decls: 3, vars: 0, consts: [["tabNavBarHeader", ""], ["role", "tablist", "aria-orientation", "horizontal", "tabindex", "0", 1, "relative", "flex", "border-b", "border-gray-200", "focus:outline-none", "focus-visible:[&_app-tab-nav-bar-item.is-active]:ring-1", "focus-visible:[&_app-tab-nav-bar-item.is-active]:ring-slate-900", 3, "keydown", "focus"]], template: function TabNavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 1, 0);
      \u0275\u0275domListener("keydown", function TabNavBarComponent_Template_div_keydown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeydown($event));
      })("focus", function TabNavBarComponent_Template_div_focus_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabNavBarFocus());
      });
      \u0275\u0275projection(2);
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n/*# sourceMappingURL=tab-nav-bar.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabNavBarComponent, [{
    type: Component,
    args: [{ selector: "app-tab-nav-bar", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div\n  class="relative flex border-b border-gray-200 focus:outline-none focus-visible:[&_app-tab-nav-bar-item.is-active]:ring-1 focus-visible:[&_app-tab-nav-bar-item.is-active]:ring-slate-900"\n  #tabNavBarHeader\n  role="tablist"\n  aria-orientation="horizontal"\n  (keydown)="onKeydown($event)"\n  tabindex="0"\n  (focus)="onTabNavBarFocus()"\n>\n  <ng-content></ng-content>\n</div>\n', styles: ["/* projects/ngverse/src/lib/ui/tab-nav-bar/tab-nav-bar.component.css */\n/*# sourceMappingURL=tab-nav-bar.component.css.map */\n"] }]
  }], null, { tabItems: [{ type: ContentChildren, args: [forwardRef(() => TabNavBarItemComponent), { isSignal: true }] }], selectedTabValue: [{ type: Input, args: [{ isSignal: true, alias: "selectedTabValue", required: false }] }, { type: Output, args: ["selectedTabValueChange"] }], tabNavBarItems: [{ type: ContentChildren, args: [forwardRef(() => TabNavBarItemComponent), { isSignal: true }] }], tabChanged: [{ type: Output, args: ["tabChanged"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabNavBarComponent, { className: "TabNavBarComponent", filePath: "projects/ngverse/src/lib/ui/tab-nav-bar/tab-nav-bar.component.ts", lineNumber: 41 });
})();

// projects/docs/src/app/examples/tab-nav-bar/example-tab-nav-bar-basic.component.ts
var ExampleTabNavBarBasicComponent = class _ExampleTabNavBarBasicComponent {
  selectedTab = signal("home", ...ngDevMode ? [{ debugName: "selectedTab" }] : []);
  getPageTitle() {
    const tab = this.selectedTab();
    switch (tab) {
      case "home":
        return "Welcome Home";
      case "about":
        return "About Us";
      case "services":
        return "Our Services";
      case "contact":
        return "Contact Information";
      default:
        return "Select a Tab";
    }
  }
  getPageContent() {
    const tab = this.selectedTab();
    switch (tab) {
      case "home":
        return "This is the home page content. Welcome to our application!";
      case "about":
        return "Learn more about our company, mission, and team.";
      case "services":
        return "Discover the wide range of services we offer to our clients.";
      case "contact":
        return "Get in touch with us using the contact information below.";
      default:
        return "Please select a navigation item to see the content.";
    }
  }
  static \u0275fac = function ExampleTabNavBarBasicComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleTabNavBarBasicComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTabNavBarBasicComponent, selectors: [["doc-example-tab-nav-bar-basic"]], decls: 15, vars: 3, consts: [[1, "space-y-4"], [3, "selectedTabValueChange", "selectedTabValue"], ["tabValue", "home"], ["tabValue", "about"], ["tabValue", "services"], ["tabValue", "contact"], [1, "rounded-lg", "border", "border-blue-200", "bg-blue-50", "p-4"], [1, "mb-2", "text-lg", "font-semibold", "text-blue-900"], [1, "text-blue-700"]], template: function ExampleTabNavBarBasicComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-tab-nav-bar", 1);
      \u0275\u0275twoWayListener("selectedTabValueChange", function ExampleTabNavBarBasicComponent_Template_app_tab_nav_bar_selectedTabValueChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
        return $event;
      });
      \u0275\u0275elementStart(2, "app-tab-nav-bar-item", 2);
      \u0275\u0275text(3, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-tab-nav-bar-item", 3);
      \u0275\u0275text(5, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-tab-nav-bar-item", 4);
      \u0275\u0275text(7, "Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "app-tab-nav-bar-item", 5);
      \u0275\u0275text(9, "Contact");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "h3", 7);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("selectedTabValue", ctx.selectedTab);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.getPageTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.getPageContent(), " ");
    }
  }, dependencies: [TabNavBarComponent, TabNavBarItemComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTabNavBarBasicComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-tab-nav-bar-basic",
      imports: [TabNavBarComponent, TabNavBarItemComponent],
      template: `
    <div class="space-y-4">
      <app-tab-nav-bar [(selectedTabValue)]="selectedTab">
        <app-tab-nav-bar-item tabValue="home">Home</app-tab-nav-bar-item>
        <app-tab-nav-bar-item tabValue="about">About</app-tab-nav-bar-item>
        <app-tab-nav-bar-item tabValue="services"
          >Services</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="contact">Contact</app-tab-nav-bar-item>
      </app-tab-nav-bar>

      <div class="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <h3 class="mb-2 text-lg font-semibold text-blue-900">
          {{ getPageTitle() }}
        </h3>
        <p class="text-blue-700">
          {{ getPageContent() }}
        </p>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTabNavBarBasicComponent, { className: "ExampleTabNavBarBasicComponent", filePath: "projects/docs/src/app/examples/tab-nav-bar/example-tab-nav-bar-basic.component.ts", lineNumber: 31 });
})();

// projects/docs/src/app/examples/tab-nav-bar/example-tab-nav-bar-disabled.component.ts
var ExampleTabNavBarDisabledComponent = class _ExampleTabNavBarDisabledComponent {
  selectedTab = signal("overview", ...ngDevMode ? [{ debugName: "selectedTab" }] : []);
  static \u0275fac = function ExampleTabNavBarDisabledComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleTabNavBarDisabledComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTabNavBarDisabledComponent, selectors: [["doc-example-tab-nav-bar-disabled"]], decls: 17, vars: 4, consts: [[1, "space-y-4"], [3, "selectedTabValueChange", "selectedTabValue"], ["tabValue", "overview"], ["tabValue", "features"], ["tabValue", "pricing", 3, "disabled"], ["tabValue", "support", 3, "disabled"], [1, "rounded-lg", "border", "border-gray-200", "bg-gray-50", "p-4"], [1, "mb-2", "text-sm", "text-gray-600"], [1, "font-medium"], [1, "text-xs", "text-gray-500"]], template: function ExampleTabNavBarDisabledComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-tab-nav-bar", 1);
      \u0275\u0275twoWayListener("selectedTabValueChange", function ExampleTabNavBarDisabledComponent_Template_app_tab_nav_bar_selectedTabValueChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
        return $event;
      });
      \u0275\u0275elementStart(2, "app-tab-nav-bar-item", 2);
      \u0275\u0275text(3, "Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-tab-nav-bar-item", 3);
      \u0275\u0275text(5, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-tab-nav-bar-item", 4);
      \u0275\u0275text(7, "Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "app-tab-nav-bar-item", 5);
      \u0275\u0275text(9, "Support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "p", 7);
      \u0275\u0275text(12, " Selected Tab: ");
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p", 9);
      \u0275\u0275text(16, ' Note: "Pricing" and "Support" tabs are disabled and cannot be selected. ');
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("selectedTabValue", ctx.selectedTab);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.selectedTab() || "None");
    }
  }, dependencies: [TabNavBarComponent, TabNavBarItemComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTabNavBarDisabledComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-tab-nav-bar-disabled",
      imports: [TabNavBarComponent, TabNavBarItemComponent],
      template: `
    <div class="space-y-4">
      <app-tab-nav-bar [(selectedTabValue)]="selectedTab">
        <app-tab-nav-bar-item tabValue="overview"
          >Overview</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="features"
          >Features</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="pricing" [disabled]="true"
          >Pricing</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="support" [disabled]="true"
          >Support</app-tab-nav-bar-item
        >
      </app-tab-nav-bar>

      <div class="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p class="mb-2 text-sm text-gray-600">
          Selected Tab:
          <span class="font-medium">{{ selectedTab() || 'None' }}</span>
        </p>
        <p class="text-xs text-gray-500">
          Note: "Pricing" and "Support" tabs are disabled and cannot be
          selected.
        </p>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTabNavBarDisabledComponent, { className: "ExampleTabNavBarDisabledComponent", filePath: "projects/docs/src/app/examples/tab-nav-bar/example-tab-nav-bar-disabled.component.ts", lineNumber: 39 });
})();

// projects/docs/src/app/examples/tab-nav-bar/example-tab-nav-bar-icons.component.ts
var ExampleTabNavBarIconsComponent = class _ExampleTabNavBarIconsComponent {
  selectedTab = signal("dashboard", ...ngDevMode ? [{ debugName: "selectedTab" }] : []);
  getSelectedIcon() {
    const tab = this.selectedTab();
    switch (tab) {
      case "dashboard":
        return "\u{1F4CA}";
      case "analytics":
        return "\u{1F4C8}";
      case "reports":
        return "\u{1F4CB}";
      case "settings":
        return "\u2699\uFE0F";
      default:
        return "\u{1F4C4}";
    }
  }
  getSelectedTitle() {
    const tab = this.selectedTab();
    switch (tab) {
      case "dashboard":
        return "Dashboard Overview";
      case "analytics":
        return "Analytics Data";
      case "reports":
        return "Generated Reports";
      case "settings":
        return "System Settings";
      default:
        return "Select a Tab";
    }
  }
  getSelectedDescription() {
    const tab = this.selectedTab();
    switch (tab) {
      case "dashboard":
        return "View key metrics and performance indicators at a glance.";
      case "analytics":
        return "Deep dive into data trends and user behavior patterns.";
      case "reports":
        return "Access and download various business reports and summaries.";
      case "settings":
        return "Configure application preferences and account settings.";
      default:
        return "Please select a navigation item to see more details.";
    }
  }
  static \u0275fac = function ExampleTabNavBarIconsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleTabNavBarIconsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTabNavBarIconsComponent, selectors: [["doc-example-tab-nav-bar-icons"]], decls: 34, vars: 4, consts: [[1, "space-y-4"], [3, "selectedTabValueChange", "selectedTabValue"], ["tabValue", "dashboard"], [1, "flex", "items-center", "space-x-2"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "h-4", "w-4"], ["d", "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"], ["tabValue", "analytics"], ["d", "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"], ["tabValue", "reports"], ["fill-rule", "evenodd", "d", "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z", "clip-rule", "evenodd"], ["tabValue", "settings"], ["fill-rule", "evenodd", "d", "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z", "clip-rule", "evenodd"], [1, "rounded-lg", "border", "border-green-200", "bg-green-50", "p-4"], [1, "mb-2", "flex", "items-center", "space-x-2"], [1, "font-medium", "text-green-800"], [1, "text-green-700"], [1, "text-sm", "text-green-600"]], template: function ExampleTabNavBarIconsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-tab-nav-bar", 1);
      \u0275\u0275twoWayListener("selectedTabValueChange", function ExampleTabNavBarIconsComponent_Template_app_tab_nav_bar_selectedTabValueChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
        return $event;
      });
      \u0275\u0275elementStart(2, "app-tab-nav-bar-item", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "Dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "app-tab-nav-bar-item", 6)(9, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 4);
      \u0275\u0275element(11, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Analytics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "app-tab-nav-bar-item", 8)(15, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 4);
      \u0275\u0275element(17, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Reports");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "app-tab-nav-bar-item", 10)(21, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 4);
      \u0275\u0275element(23, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Settings");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 12)(27, "div", 13)(28, "span", 14);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 15);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "p", 16);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("selectedTabValue", ctx.selectedTab);
      \u0275\u0275advance(28);
      \u0275\u0275textInterpolate(ctx.getSelectedIcon());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getSelectedTitle());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.getSelectedDescription(), " ");
    }
  }, dependencies: [TabNavBarComponent, TabNavBarItemComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTabNavBarIconsComponent, [{
    type: Component,
    args: [{
      selector: "doc-example-tab-nav-bar-icons",
      imports: [TabNavBarComponent, TabNavBarItemComponent],
      template: `
    <div class="space-y-4">
      <app-tab-nav-bar [(selectedTabValue)]="selectedTab">
        <app-tab-nav-bar-item tabValue="dashboard">
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
              ></path>
            </svg>
            <span>Dashboard</span>
          </div>
        </app-tab-nav-bar-item>

        <app-tab-nav-bar-item tabValue="analytics">
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
              ></path>
            </svg>
            <span>Analytics</span>
          </div>
        </app-tab-nav-bar-item>

        <app-tab-nav-bar-item tabValue="reports">
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Reports</span>
          </div>
        </app-tab-nav-bar-item>

        <app-tab-nav-bar-item tabValue="settings">
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Settings</span>
          </div>
        </app-tab-nav-bar-item>
      </app-tab-nav-bar>

      <div class="rounded-lg border border-green-200 bg-green-50 p-4">
        <div class="mb-2 flex items-center space-x-2">
          <span class="font-medium text-green-800">{{
            getSelectedIcon()
          }}</span>
          <span class="text-green-700">{{ getSelectedTitle() }}</span>
        </div>
        <p class="text-sm text-green-600">
          {{ getSelectedDescription() }}
        </p>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTabNavBarIconsComponent, { className: "ExampleTabNavBarIconsComponent", filePath: "projects/docs/src/app/examples/tab-nav-bar/example-tab-nav-bar-icons.component.ts", lineNumber: 75 });
})();

// projects/docs/src/app/examples/tab-nav-bar/preview-tab-nav-bar.component.ts
var PreviewTabNavBarComponent = class _PreviewTabNavBarComponent {
  selectedTab = signal("dashboard", ...ngDevMode ? [{ debugName: "selectedTab" }] : []);
  static \u0275fac = function PreviewTabNavBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreviewTabNavBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewTabNavBarComponent, selectors: [["doc-preview-tab-nav-bar"]], decls: 15, vars: 2, consts: [[1, "space-y-4"], [3, "selectedTabValueChange", "selectedTabValue"], ["tabValue", "dashboard"], ["tabValue", "analytics"], ["tabValue", "reports"], ["tabValue", "settings"], [1, "mt-6", "rounded-lg", "bg-gray-50", "p-4"], [1, "text-sm", "text-gray-600"], [1, "font-medium"]], template: function PreviewTabNavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-tab-nav-bar", 1);
      \u0275\u0275twoWayListener("selectedTabValueChange", function PreviewTabNavBarComponent_Template_app_tab_nav_bar_selectedTabValueChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
        return $event;
      });
      \u0275\u0275elementStart(2, "app-tab-nav-bar-item", 2);
      \u0275\u0275text(3, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-tab-nav-bar-item", 3);
      \u0275\u0275text(5, "Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-tab-nav-bar-item", 4);
      \u0275\u0275text(7, "Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "app-tab-nav-bar-item", 5);
      \u0275\u0275text(9, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "p", 7);
      \u0275\u0275text(12, " Selected: ");
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("selectedTabValue", ctx.selectedTab);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.selectedTab() || "None");
    }
  }, dependencies: [TabNavBarComponent, TabNavBarItemComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewTabNavBarComponent, [{
    type: Component,
    args: [{
      selector: "doc-preview-tab-nav-bar",
      imports: [TabNavBarComponent, TabNavBarItemComponent],
      template: `
    <div class="space-y-4">
      <app-tab-nav-bar [(selectedTabValue)]="selectedTab">
        <app-tab-nav-bar-item tabValue="dashboard"
          >Dashboard</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="analytics"
          >Analytics</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="reports">Reports</app-tab-nav-bar-item>
        <app-tab-nav-bar-item tabValue="settings"
          >Settings</app-tab-nav-bar-item
        >
      </app-tab-nav-bar>

      <div class="mt-6 rounded-lg bg-gray-50 p-4">
        <p class="text-sm text-gray-600">
          Selected:
          <span class="font-medium">{{ selectedTab() || 'None' }}</span>
        </p>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewTabNavBarComponent, { className: "PreviewTabNavBarComponent", filePath: "projects/docs/src/app/examples/tab-nav-bar/preview-tab-nav-bar.component.ts", lineNumber: 33 });
})();

// projects/docs/src/app/features/tab-nav-bar-page/tab-nav-bar-page.component.ts
var ROOT = "tab-nav-bar";
var TabNavBarPageComponent = class _TabNavBarPageComponent {
  selectedIndex = signal(0, ...ngDevMode ? [{ debugName: "selectedIndex" }] : []);
  sourceTreeBuilder = inject(SourceTreeBuilder);
  apiInfo = {
    ariaDescription: "The Tab Nav Bar components implement WAI-ARIA tab panel pattern for navigation purposes with full keyboard navigation support and proper focus management.",
    entities: [
      {
        name: "TabNavBarComponent",
        type: "component",
        selector: "app-tab-nav-bar",
        description: "Navigation container component that manages a collection of navigation items with keyboard navigation and accessibility support",
        inputs: [
          {
            name: "selectedTabValue",
            type: "string | undefined",
            description: "The currently selected tab value (two-way bindable)",
            default: "undefined"
          }
        ],
        outputs: [
          {
            name: "tabChanged",
            value: "string | undefined",
            description: "Event emitted when the selected tab value changes"
          }
        ]
      },
      {
        name: "TabNavBarItemComponent",
        type: "component",
        selector: "app-tab-nav-bar-item",
        description: "Individual navigation item that represents a single navigation option with unique value",
        inputs: [
          {
            name: "tabValue",
            type: "string",
            description: "The unique value for this navigation item (required)",
            default: "required"
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Whether this navigation item is disabled and cannot be selected",
            default: "false"
          }
        ]
      }
    ]
  };
  sourceTree = [
    {
      name: ROOT,
      files: [
        // tab-nav-bar files (directly in tab-nav-bar folder)
        ...this.sourceTreeBuilder.componentFiles("tab-nav-bar", ROOT, []),
        // tab-nav-bar-item files (in sub-folder with CSS)
        ...this.sourceTreeBuilder.componentFiles("tab-nav-bar-item", `${ROOT}/tab-nav-bar-item`, [])
      ],
      hideName: true
    }
  ];
  static \u0275fac = function TabNavBarPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabNavBarPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabNavBarPageComponent, selectors: [["doc-tab-nav-bar-page"]], decls: 13, vars: 3, consts: [["key", "tab-nav-bar", "label", "Tab Nav Bar", "description", "Navigation component with tab-like interface for switching between views or sections without content bodies", 3, "subTitle"], ["type", "component", "name", "tab-nav-bar"], ["name", "basic", "label", "Basic Usage"], ["name", "disabled", "label", "With Disabled Items"], ["name", "icons", "label", "With Icons"], [3, "sourceTree"], [3, "apiInfo"]], template: function TabNavBarPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-preview");
      \u0275\u0275element(2, "doc-preview-tab-nav-bar");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 1);
      \u0275\u0275elementStart(4, "doc-examples")(5, "doc-example-item", 2);
      \u0275\u0275element(6, "doc-example-tab-nav-bar-basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "doc-example-item", 3);
      \u0275\u0275element(8, "doc-example-tab-nav-bar-disabled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "doc-example-item", 4);
      \u0275\u0275element(10, "doc-example-tab-nav-bar-icons");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(11, "doc-source-tree", 5)(12, "doc-api-info", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "Tab navigation component for switching between views without content bodies");
      \u0275\u0275advance(11);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    CommandInstallationComponent,
    PreviewComponent,
    PreviewTabNavBarComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleTabNavBarBasicComponent,
    ExampleTabNavBarDisabledComponent,
    ExampleTabNavBarIconsComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], styles: ["\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n  }\n}\n\n\n/*# sourceMappingURL=tab-nav-bar-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabNavBarPageComponent, [{
    type: Component,
    args: [{ selector: "doc-tab-nav-bar-page", imports: [
      BlueprintPageComponent,
      CommandInstallationComponent,
      PreviewComponent,
      PreviewTabNavBarComponent,
      ExamplesComponent,
      ExampleItemComponent,
      ExampleTabNavBarBasicComponent,
      ExampleTabNavBarDisabledComponent,
      ExampleTabNavBarIconsComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: `<doc-blueprint-page
  key="tab-nav-bar"
  label="Tab Nav Bar"
  [subTitle]="
    'Tab navigation component for switching between views without content bodies'
  "
  description="Navigation component with tab-like interface for switching between views or sections without content bodies"
>
  <doc-preview>
    <doc-preview-tab-nav-bar />
  </doc-preview>

  <doc-command-installation type="component" name="tab-nav-bar">
  </doc-command-installation>

  <doc-examples>
    <doc-example-item name="basic" label="Basic Usage">
      <doc-example-tab-nav-bar-basic />
    </doc-example-item>

    <doc-example-item name="disabled" label="With Disabled Items">
      <doc-example-tab-nav-bar-disabled />
    </doc-example-item>

    <doc-example-item name="icons" label="With Icons">
      <doc-example-tab-nav-bar-icons />
    </doc-example-item>
  </doc-examples>

  <doc-source-tree [sourceTree]="sourceTree" />

  <doc-api-info [apiInfo]="apiInfo" />
</doc-blueprint-page>
`, styles: ["/* projects/docs/src/app/features/tab-nav-bar-page/tab-nav-bar-page.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n  }\n}\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=tab-nav-bar-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabNavBarPageComponent, { className: "TabNavBarPageComponent", filePath: "projects/docs/src/app/features/tab-nav-bar-page/tab-nav-bar-page.component.ts", lineNumber: 41 });
})();
export {
  TabNavBarPageComponent
};
//# sourceMappingURL=chunk-G5CY4Y7N.js.map
