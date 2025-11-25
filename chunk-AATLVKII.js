import {
  ButtonComponent
} from "./chunk-ESRFV6V7.js";
import {
  ShowCaseComponent
} from "./chunk-FNG7BR3D.js";
import "./chunk-EEYNYO2D.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import "./chunk-4XRX3M6E.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-GOCNYIRL.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-MTAP3RFR.js";
import "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Input,
  Output,
  booleanAttribute,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/table/sort.directive.ts
var SortDirective = class _SortDirective {
  sortChange = output();
  sort(change) {
    this.sortChange.emit(change);
  }
  static \u0275fac = function SortDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SortDirective, selectors: [["table", "appSort", ""]], outputs: { sortChange: "sortChange" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortDirective, [{
    type: Directive,
    args: [{
      selector: "table[appSort]"
    }]
  }], null, { sortChange: [{ type: Output, args: ["sortChange"] }] });
})();

// projects/ngverse/src/lib/ui/table/sort-header.component.ts
var _c0 = ["appSortHeader", ""];
var _c1 = ["*"];
var SortHeaderComponent = class _SortHeaderComponent {
  _sort = inject(SortDirective);
  direction = signal(void 0, ...ngDevMode ? [{ debugName: "direction" }] : []);
  isAsc = computed(() => this.direction() === "asc", ...ngDevMode ? [{ debugName: "isAsc" }] : []);
  isDesc = computed(() => this.direction() === "desc", ...ngDevMode ? [{ debugName: "isDesc" }] : []);
  field = input(void 0, ...ngDevMode ? [{ debugName: "field", alias: "appSortHeader" }] : [{ alias: "appSortHeader" }]);
  element = inject(ElementRef).nativeElement;
  get fieldKey() {
    return this.field() ? this.field() : this.element.textContent?.toLowerCase();
  }
  onClick() {
    const nextSort = this.nextSortType();
    const fieldKey = this.fieldKey;
    this.direction.set(nextSort);
    if (fieldKey && nextSort) {
      this._sort.sort({
        name: fieldKey,
        direction: nextSort
      });
    }
  }
  nextSortType() {
    const direction = this.direction();
    if (!direction || direction === "desc") {
      return "asc";
    }
    return "desc";
  }
  static \u0275fac = function SortHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SortHeaderComponent, selectors: [["th", "appSortHeader", ""]], hostAttrs: [1, "cursor-pointer"], hostBindings: function SortHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SortHeaderComponent_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  }, inputs: { field: [1, "appSortHeader", "field"] }, attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [[1, "flex", "items-center", "gap-1"]], template: function SortHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortHeaderComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "th[appSortHeader]",
      template: `<div class="flex items-center gap-1">
    <ng-content></ng-content>
  </div> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(click)": "onClick()",
        class: "cursor-pointer"
      }
    }]
  }], null, { field: [{ type: Input, args: [{ isSignal: true, alias: "appSortHeader", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SortHeaderComponent, { className: "SortHeaderComponent", filePath: "projects/ngverse/src/lib/ui/table/sort-header.component.ts", lineNumber: 26 });
})();

// projects/ngverse/src/lib/ui/table/table-layout.component.ts
var _c02 = [[["table", "appTable", ""]], [["app-table-pagination"]]];
var _c12 = ["table[appTable]", "app-table-pagination"];
var TableLayoutComponent = class _TableLayoutComponent {
  static \u0275fac = function TableLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableLayoutComponent, selectors: [["app-table-layout"]], hostAttrs: [1, "block"], ngContentSelectors: _c12, decls: 3, vars: 0, consts: [[1, "sticky", "bottom-0", "bg-background"]], template: function TableLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275projection(0);
      \u0275\u0275domElementStart(1, "div", 0);
      \u0275\u0275projection(2, 1);
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableLayoutComponent, [{
    type: Component,
    args: [{
      selector: "app-table-layout",
      imports: [],
      host: {
        class: "block"
      },
      template: `
    <ng-content select="table[appTable]"></ng-content>
    <div class="sticky bottom-0 bg-background">
      <ng-content select="app-table-pagination"></ng-content>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableLayoutComponent, { className: "TableLayoutComponent", filePath: "projects/ngverse/src/lib/ui/table/table-layout.component.ts", lineNumber: 17 });
})();

// projects/ngverse/src/lib/ui/table/table-pagination.component.ts
var TablePaginationComponent = class _TablePaginationComponent {
  currentPage = input.required(...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = input.required(...ngDevMode ? [{ debugName: "totalPages" }] : []);
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : []);
  prevPageAriaLabel = input("Previus Page", ...ngDevMode ? [{ debugName: "prevPageAriaLabel" }] : []);
  nextPageAriaLabel = input("Next Page", ...ngDevMode ? [{ debugName: "nextPageAriaLabel" }] : []);
  pageAriaLabel = input("Page ", ...ngDevMode ? [{ debugName: "pageAriaLabel" }] : []);
  pageChange = output();
  hasNextPage = computed(() => this.currentPage() < this.totalPages(), ...ngDevMode ? [{ debugName: "hasNextPage" }] : []);
  hasPrevPage = computed(() => this.currentPage() > 0, ...ngDevMode ? [{ debugName: "hasPrevPage" }] : []);
  pages = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1), ...ngDevMode ? [{ debugName: "pages" }] : []);
  firstPage() {
    this.pageChange.emit(0);
  }
  lastPage() {
    this.pageChange.emit(this.totalPages());
  }
  prevPage() {
    this.pageChange.emit(this.currentPage() - 1);
  }
  nextPage() {
    this.pageChange.emit(this.currentPage() + 1);
  }
  setPage(page) {
    this.pageChange.emit(page);
  }
  static \u0275fac = function TablePaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TablePaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablePaginationComponent, selectors: [["app-table-pagination"]], hostAttrs: [1, "sticky", "bottom-0"], inputs: { currentPage: [1, "currentPage"], totalPages: [1, "totalPages"], ariaLabel: [1, "ariaLabel"], prevPageAriaLabel: [1, "prevPageAriaLabel"], nextPageAriaLabel: [1, "nextPageAriaLabel"], pageAriaLabel: [1, "pageAriaLabel"] }, outputs: { pageChange: "pageChange" }, decls: 7, vars: 7, consts: [[1, "flex", "items-center", "justify-end", "gap-1"], ["variant", "link", "color", "secondary", "icon", "", "appButton", "", "aria-label", "Go to first page", "size", "sm", 3, "click", "disabled"], ["icon", "", "variant", "link", "color", "secondary", "size", "sm", "appButton", "", "aria-label", "Go to previous page", 3, "click", "disabled"], ["icon", "", "variant", "link", "color", "secondary", "size", "sm", "appButton", "", "aria-label", "Go to next page", 3, "click", "disabled"], ["variant", "link", "color", "secondary", "icon", "", "size", "sm", "appButton", "", "aria-label", "Go to last page", 3, "click", "disabled"]], template: function TablePaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 1);
      \u0275\u0275listener("click", function TablePaginationComponent_Template_button_click_3_listener() {
        return ctx.firstPage();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function TablePaginationComponent_Template_button_click_4_listener() {
        return ctx.prevPage();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function TablePaginationComponent_Template_button_click_5_listener() {
        return ctx.nextPage();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function TablePaginationComponent_Template_button_click_6_listener() {
        return ctx.lastPage();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.currentPage(), " / ", ctx.totalPages());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.hasPrevPage());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.hasPrevPage())("disabled", !ctx.hasPrevPage());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.hasNextPage());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.hasNextPage());
    }
  }, dependencies: [ButtonComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablePaginationComponent, [{
    type: Component,
    args: [{ selector: "app-table-pagination", imports: [ButtonComponent], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      class: "sticky bottom-0"
    }, template: '<div class="flex items-center justify-end gap-1">\n  <div>{{ currentPage() }} / {{ totalPages() }}</div>\n\n  <button\n    variant="link"\n    color="secondary"\n    icon\n    appButton\n    aria-label="Go to first page"\n    size="sm"\n    (click)="firstPage()"\n    [disabled]="!hasPrevPage()"\n  ></button>\n  <button\n    icon\n    variant="link"\n    color="secondary"\n    size="sm"\n    appButton\n    aria-label="Go to previous page"\n    (click)="prevPage()"\n    [disabled]="hasPrevPage()"\n    [disabled]="!hasPrevPage()"\n  ></button>\n  <button\n    icon\n    variant="link"\n    color="secondary"\n    size="sm"\n    appButton\n    aria-label="Go to next page"\n    (click)="nextPage()"\n    [disabled]="!hasNextPage()"\n  ></button>\n  <button\n    variant="link"\n    color="secondary"\n    icon\n    size="sm"\n    appButton\n    aria-label="Go to last page"\n    [disabled]="!hasNextPage()"\n    (click)="lastPage()"\n  ></button>\n</div>\n' }]
  }], null, { currentPage: [{ type: Input, args: [{ isSignal: true, alias: "currentPage", required: true }] }], totalPages: [{ type: Input, args: [{ isSignal: true, alias: "totalPages", required: true }] }], ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], prevPageAriaLabel: [{ type: Input, args: [{ isSignal: true, alias: "prevPageAriaLabel", required: false }] }], nextPageAriaLabel: [{ type: Input, args: [{ isSignal: true, alias: "nextPageAriaLabel", required: false }] }], pageAriaLabel: [{ type: Input, args: [{ isSignal: true, alias: "pageAriaLabel", required: false }] }], pageChange: [{ type: Output, args: ["pageChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablePaginationComponent, { className: "TablePaginationComponent", filePath: "projects/ngverse/src/lib/ui/table/table-pagination.component.ts", lineNumber: 20 });
})();

// projects/ngverse/src/lib/ui/table/table.directive.ts
var TableDirective = class _TableDirective {
  selectable = input(false, ...ngDevMode ? [{ debugName: "selectable", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
  static \u0275fac = function TableDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TableDirective, selectors: [["table", "appTable", ""]], inputs: { selectable: [1, "selectable"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableDirective, [{
    type: Directive,
    args: [{
      selector: "table[appTable]"
    }]
  }], null, { selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false }] }] });
})();

// projects/ngverse/src/lib/ui/table/td.directive.ts
var TdDirective = class _TdDirective {
  sticky = input(false, ...ngDevMode ? [{ debugName: "sticky", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
  static \u0275fac = function TdDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TdDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TdDirective, selectors: [["td", "appTd", ""]], hostAttrs: [1, "px-6", "py-3"], hostVars: 4, hostBindings: function TdDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("sticky", ctx.sticky())("left-0", ctx.sticky());
    }
  }, inputs: { sticky: [1, "sticky"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TdDirective, [{
    type: Directive,
    args: [{
      selector: "td[appTd]",
      host: {
        class: "px-6 py-3",
        "[class.sticky]": "sticky()",
        "[class.left-0]": "sticky()"
      }
    }]
  }], null, { sticky: [{ type: Input, args: [{ isSignal: true, alias: "sticky", required: false }] }] });
})();

// projects/ngverse/src/lib/ui/table/th.directive.ts
var ThDirective = class _ThDirective {
  static \u0275fac = function ThDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ThDirective, selectors: [["th", "appTh", ""]], hostAttrs: [1, "px-6", "py-3"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThDirective, [{
    type: Directive,
    args: [{
      selector: "th[appTh]",
      host: {
        class: "px-6 py-3"
      }
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/table/tr-head.directive.ts
var TrHeadDirective = class _TrHeadDirective {
  sticky = input(false, ...ngDevMode ? [{ debugName: "sticky", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
  static \u0275fac = function TrHeadDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrHeadDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TrHeadDirective, selectors: [["", "appTrHead", ""]], hostAttrs: [1, "text-xs", "text-left", "text-on-surface", "uppercase", "bg-surface"], hostVars: 6, hostBindings: function TrHeadDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("sticky", ctx.sticky())("top-0", ctx.sticky())("z-1", ctx.sticky());
    }
  }, inputs: { sticky: [1, "sticky"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrHeadDirective, [{
    type: Directive,
    args: [{
      selector: "[appTrHead]",
      host: {
        class: "text-xs text-left text-on-surface uppercase bg-surface",
        "[class.sticky]": "sticky()",
        "[class.top-0]": "sticky()",
        "[class.z-1]": "sticky()"
      }
    }]
  }], null, { sticky: [{ type: Input, args: [{ isSignal: true, alias: "sticky", required: false }] }] });
})();

// projects/ngverse/src/lib/ui/table/tr.directive.ts
var TrDirective = class _TrDirective {
  table = inject(TableDirective);
  isSelected = input(...ngDevMode ? [void 0, { debugName: "isSelected" }] : []);
  highlight = computed(() => {
    let classes = "";
    if (this.table.selectable()) {
      classes += "hover:bg-accent hover:text-accent-foreground cursor-pointer";
    }
    if (this.isSelected()) {
      classes += " bg-accent text-accent-foreground";
    } else {
      classes += " bg-background";
    }
    return classes;
  }, ...ngDevMode ? [{ debugName: "highlight" }] : []);
  static \u0275fac = function TrDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TrDirective, selectors: [["", "appTr", ""]], hostAttrs: [1, "border-b", "border-border"], hostVars: 2, hostBindings: function TrDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.highlight());
    }
  }, inputs: { isSelected: [1, "isSelected"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrDirective, [{
    type: Directive,
    args: [{
      selector: "[appTr]",
      host: {
        class: "border-b border-border",
        "[class]": "highlight()"
      }
    }]
  }], null, { isSelected: [{ type: Input, args: [{ isSignal: true, alias: "isSelected", required: false }] }] });
})();

// projects/docs/src/app/examples/table/show-case-table/show-case-table.component.ts
function ShowCaseTableComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 7);
    \u0275\u0275listener("click", function ShowCaseTableComponent_For_14_Template_tr_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRow(row_r2));
    });
    \u0275\u0275elementStart(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("isSelected", row_r2 === ctx_r2.selectedRow());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.weight);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.symbol);
  }
}
var LIMIT = 30;
var elementNames = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon"
];
var elementSymbols = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne"];
function generatePeriodicElements(count = 500) {
  const elements = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * elementNames.length);
    elements.push({
      name: elementNames[randomIndex],
      position: i + 1,
      weight: parseFloat((Math.random() * 200).toFixed(2)),
      symbol: elementSymbols[randomIndex]
    });
  }
  return elements;
}
var ELEMENT_DATA = generatePeriodicElements();
var ShowCaseTableComponent = class _ShowCaseTableComponent {
  data = signal(ELEMENT_DATA, ...ngDevMode ? [{ debugName: "data" }] : []);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = computed(() => Math.ceil(this.data().length / LIMIT), ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  selectedRow = signal(void 0, ...ngDevMode ? [{ debugName: "selectedRow" }] : []);
  sortChange($event) {
    console.log($event);
  }
  setPage(page) {
    this.currentPage.set(page);
  }
  selectRow($event) {
    this.selectedRow.set($event);
  }
  static \u0275fac = function ShowCaseTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseTableComponent, selectors: [["doc-show-case-table"]], decls: 16, vars: 2, consts: [[1, "h-[250px]", "overflow-auto"], ["appTable", "", "appSort", "", "selectable", "", 1, "w-full", 3, "sortChange"], ["appTrHead", "", "sticky", ""], ["appTh", "", "appSortHeader", "", "scope", "col"], ["appTh", "", "scope", "col"], ["appTr", "", 3, "isSelected"], [3, "pageChange", "totalPages", "currentPage"], ["appTr", "", 3, "click", "isSelected"], ["appTd", "", "sticky", ""], ["appTd", ""]], template: function ShowCaseTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-table-layout", 0)(1, "table", 1);
      \u0275\u0275listener("sortChange", function ShowCaseTableComponent_Template_table_sortChange_1_listener($event) {
        return ctx.sortChange($event);
      });
      \u0275\u0275elementStart(2, "thead")(3, "tr", 2)(4, "th", 3);
      \u0275\u0275text(5, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "th", 4);
      \u0275\u0275text(7, "Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "th", 4);
      \u0275\u0275text(9, "Weight");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th", 4);
      \u0275\u0275text(11, "Symbol");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "tbody");
      \u0275\u0275repeaterCreate(13, ShowCaseTableComponent_For_14_Template, 9, 5, "tr", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "app-table-pagination", 6);
      \u0275\u0275listener("pageChange", function ShowCaseTableComponent_Template_app_table_pagination_pageChange_15_listener($event) {
        return ctx.setPage($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.data());
      \u0275\u0275advance(2);
      \u0275\u0275property("totalPages", ctx.totalPages())("currentPage", ctx.currentPage());
    }
  }, dependencies: [
    SortDirective,
    TableDirective,
    TrDirective,
    TdDirective,
    ThDirective,
    TrHeadDirective,
    TableLayoutComponent,
    SortHeaderComponent,
    TablePaginationComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseTableComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-table", imports: [
      SortDirective,
      TableDirective,
      TrDirective,
      TdDirective,
      ThDirective,
      TrHeadDirective,
      TableLayoutComponent,
      SortHeaderComponent,
      SortDirective,
      TablePaginationComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<app-table-layout class="h-[250px] overflow-auto">\n  <table\n    appTable\n    appSort\n    selectable\n    (sortChange)="sortChange($event)"\n    class="w-full"\n  >\n    <thead>\n      <tr appTrHead sticky>\n        <th appTh appSortHeader scope="col">Name</th>\n        <th appTh scope="col">Position</th>\n        <th appTh scope="col">Weight</th>\n        <th appTh scope="col">Symbol</th>\n      </tr>\n    </thead>\n    <tbody>\n      @for (row of data(); track $index) {\n        <tr appTr (click)="selectRow(row)" [isSelected]="row === selectedRow()">\n          <td appTd sticky>{{ row.name }}</td>\n          <td appTd>{{ row.position }}</td>\n          <td appTd>{{ row.weight }}</td>\n          <td appTd>{{ row.symbol }}</td>\n        </tr>\n      }\n    </tbody>\n  </table>\n  <app-table-pagination\n    (pageChange)="setPage($event)"\n    [totalPages]="totalPages()"\n    [currentPage]="currentPage()"\n  ></app-table-pagination>\n</app-table-layout>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseTableComponent, { className: "ShowCaseTableComponent", filePath: "projects/docs/src/app/examples/table/show-case-table/show-case-table.component.ts", lineNumber: 78 });
})();

// projects/docs/src/app/features/table-page/table-page.component.ts
var TablePageComponent = class _TablePageComponent {
  static \u0275fac = function TablePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TablePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablePageComponent, selectors: [["doc-table-page"]], decls: 3, vars: 2, consts: [[3, "subTitle", "label"], ["name", "table"]], template: function TablePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-table");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "Table displayes tabular data")("label", "Table");
    }
  }, dependencies: [BlueprintPageComponent, ShowCaseComponent, ShowCaseTableComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablePageComponent, [{
    type: Component,
    args: [{ selector: "doc-table-page", imports: [BlueprintPageComponent, ShowCaseComponent, ShowCaseTableComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<doc-blueprint-page
  [subTitle]="'Table displayes tabular data'"
  [label]="'Table'"
>
  <doc-show-case name="table">
    <doc-show-case-table></doc-show-case-table>
  </doc-show-case>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablePageComponent, { className: "TablePageComponent", filePath: "projects/docs/src/app/features/table-page/table-page.component.ts", lineNumber: 13 });
})();
export {
  TablePageComponent
};
//# sourceMappingURL=chunk-AATLVKII.js.map
