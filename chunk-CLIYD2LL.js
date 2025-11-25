import {
  PrerequisitesComponent
} from "./chunk-TAEOHQRX.js";
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
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/pagination/pagination.component.ts
function PaginationComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function PaginationComponent_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 4);
    \u0275\u0275listener("click", function PaginationComponent_For_9_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const page_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setPage(page_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active-page", ctx_r2.currentPage() === page_r2);
    \u0275\u0275attribute("aria-label", ctx_r2.pageAriaLabel() + page_r2)("aria-current", ctx_r2.currentPage() === page_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r2, " ");
  }
}
function PaginationComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaginationComponent_For_9_Conditional_0_Template, 2, 0, "li", 3)(1, PaginationComponent_For_9_Conditional_1_Template, 3, 5, "li");
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(page_r2 === ctx_r2.ELLIPSIS ? 0 : 1);
  }
}
var ALWAYS_VISIBLE_ITEMS = 7;
var ELLIPSIS = "...";
function generatePages(totalPages, currentPage) {
  const pages = [];
  if (totalPages <= ALWAYS_VISIBLE_ITEMS) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  pages.push(1);
  if (currentPage > 4) {
    pages.push(ELLIPSIS);
  }
  let start = Math.max(2, currentPage - 1);
  let end = Math.min(totalPages - 1, currentPage + 1);
  if (currentPage <= 4) {
    start = 2;
    end = 5;
  } else if (currentPage >= totalPages - 3) {
    start = totalPages - 4;
    end = totalPages - 1;
  }
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  if (currentPage < totalPages - 3) {
    pages.push(ELLIPSIS);
  }
  pages.push(totalPages);
  return pages;
}
var PaginationComponent = class _PaginationComponent {
  currentPage = input.required(...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = input.required(...ngDevMode ? [{ debugName: "totalPages" }] : []);
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : []);
  prevPageAriaLabel = input("Previus Page", ...ngDevMode ? [{ debugName: "prevPageAriaLabel" }] : []);
  nextPageAriaLabel = input("Next Page", ...ngDevMode ? [{ debugName: "nextPageAriaLabel" }] : []);
  pageAriaLabel = input("Page ", ...ngDevMode ? [{ debugName: "pageAriaLabel" }] : []);
  pageChange = output();
  ELLIPSIS = ELLIPSIS;
  visiblePages = computed(() => {
    return generatePages(this.totalPages(), this.currentPage());
  }, ...ngDevMode ? [{ debugName: "visiblePages" }] : []);
  prevPage() {
    this.pageChange.emit(this.currentPage() - 1);
  }
  nextPage() {
    this.pageChange.emit(this.currentPage() + 1);
  }
  setPage(page) {
    this.pageChange.emit(page);
  }
  hasNextPage() {
    return this.currentPage() < this.totalPages();
  }
  hasPrevPage() {
    return this.currentPage() > 1;
  }
  static \u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { currentPage: [1, "currentPage"], totalPages: [1, "totalPages"], ariaLabel: [1, "ariaLabel"], prevPageAriaLabel: [1, "prevPageAriaLabel"], nextPageAriaLabel: [1, "nextPageAriaLabel"], pageAriaLabel: [1, "pageAriaLabel"] }, outputs: { pageChange: "pageChange" }, decls: 16, vars: 5, consts: [["role", "navigation"], [1, "pagination"], ["size", "sm", "variant", "link", "color", "secondary", "appButton", "", 3, "click", "disabled"], [1, "pagination-ellipsis"], ["appButton", "", "icon", "", "variant", "link", "size", "sm", "color", "secondary", 3, "click"]], template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "ul", 1)(2, "li")(3, "button", 2);
      \u0275\u0275listener("click", function PaginationComponent_Template_button_click_3_listener() {
        return ctx.prevPage();
      });
      \u0275\u0275elementStart(4, "app-font-icon");
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "Previous");
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(8, PaginationComponent_For_9_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(10, "li")(11, "button", 2);
      \u0275\u0275listener("click", function PaginationComponent_Template_button_click_11_listener() {
        return ctx.nextPage();
      });
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Next");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-font-icon");
      \u0275\u0275text(15, "arrow_forward");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.ariaLabel());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.hasPrevPage());
      \u0275\u0275attribute("aria-label", ctx.prevPageAriaLabel());
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.visiblePages());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.hasNextPage());
      \u0275\u0275attribute("aria-label", ctx.nextPageAriaLabel());
    }
  }, dependencies: [ButtonComponent, FontIconComponent], styles: ["\n\n[_nghost-%COMP%]   .active-page[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-ring);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 6px;\n}\n.pagination-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  padding: 4px 8px;\n  cursor: pointer;\n  background: transparent;\n  min-width: 36px;\n  column-gap: 8px;\n  min-height: 36px;\n}\n.pagination-button[_ngcontent-%COMP%]:hover {\n  background-color: #ededed;\n}\n.pagination-button[_ngcontent-%COMP%]:disabled {\n  background: var(--color-disabled);\n  color: var(--color-disabled-foreground);\n}\n.pagination-ellipsis[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 36px;\n}\n/*# sourceMappingURL=pagination.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{ selector: "app-pagination", imports: [ButtonComponent, FontIconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<nav role="navigation" [attr.aria-label]="ariaLabel()">\n  <ul class="pagination">\n    <li>\n      <button\n        size="sm"\n        variant="link"\n        color="secondary"\n        appButton\n        [attr.aria-label]="prevPageAriaLabel()"\n        (click)="prevPage()"\n        [disabled]="!hasPrevPage()"\n      >\n        <app-font-icon>arrow_back</app-font-icon>\n        <span>Previous</span>\n      </button>\n    </li>\n\n    @for (page of visiblePages(); track $index) {\n      @if (page === ELLIPSIS) {\n        <li class="pagination-ellipsis">...</li>\n      } @else {\n        <li>\n          <button\n            appButton\n            icon\n            [class.active-page]="currentPage() === page"\n            (click)="setPage($any(page))"\n            [attr.aria-label]="pageAriaLabel() + page"\n            [attr.aria-current]="currentPage() === page"\n            variant="link"\n            size="sm"\n            color="secondary"\n          >\n            {{ page }}\n          </button>\n        </li>\n      }\n    }\n\n    <li>\n      <button\n        size="sm"\n        variant="link"\n        color="secondary"\n        appButton\n        (click)="nextPage()"\n        [disabled]="!hasNextPage()"\n        [attr.aria-label]="nextPageAriaLabel()"\n      >\n        <span>Next</span>\n        <app-font-icon>arrow_forward</app-font-icon>\n      </button>\n    </li>\n  </ul>\n</nav>\n', styles: ["/* projects/ngverse/src/lib/ui/pagination/pagination.component.css */\n:host .active-page {\n  border: 1px solid var(--color-ring);\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 6px;\n}\n.pagination-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  padding: 4px 8px;\n  cursor: pointer;\n  background: transparent;\n  min-width: 36px;\n  column-gap: 8px;\n  min-height: 36px;\n}\n.pagination-button:hover {\n  background-color: #ededed;\n}\n.pagination-button:disabled {\n  background: var(--color-disabled);\n  color: var(--color-disabled-foreground);\n}\n.pagination-ellipsis {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 36px;\n}\n/*# sourceMappingURL=pagination.component.css.map */\n"] }]
  }], null, { currentPage: [{ type: Input, args: [{ isSignal: true, alias: "currentPage", required: true }] }], totalPages: [{ type: Input, args: [{ isSignal: true, alias: "totalPages", required: true }] }], ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], prevPageAriaLabel: [{ type: Input, args: [{ isSignal: true, alias: "prevPageAriaLabel", required: false }] }], nextPageAriaLabel: [{ type: Input, args: [{ isSignal: true, alias: "nextPageAriaLabel", required: false }] }], pageAriaLabel: [{ type: Input, args: [{ isSignal: true, alias: "pageAriaLabel", required: false }] }], pageChange: [{ type: Output, args: ["pageChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "projects/ngverse/src/lib/ui/pagination/pagination.component.ts", lineNumber: 60 });
})();

// projects/docs/src/app/examples/pagination/show-case-pagination/show-case-pagination.component.ts
var ShowCasePaginationComponent = class _ShowCasePaginationComponent {
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = signal(10, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  setPage(page) {
    this.currentPage.set(page);
  }
  static \u0275fac = function ShowCasePaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCasePaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCasePaginationComponent, selectors: [["doc-show-case-pagination"]], decls: 1, vars: 2, consts: [[3, "pageChange", "currentPage", "totalPages"]], template: function ShowCasePaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-pagination", 0);
      \u0275\u0275listener("pageChange", function ShowCasePaginationComponent_Template_app_pagination_pageChange_0_listener($event) {
        return ctx.setPage($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("currentPage", ctx.currentPage())("totalPages", ctx.totalPages());
    }
  }, dependencies: [PaginationComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCasePaginationComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-pagination", imports: [PaginationComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<app-pagination\n  [currentPage]="currentPage()"\n  [totalPages]="totalPages()"\n  (pageChange)="setPage($event)"\n></app-pagination>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCasePaginationComponent, { className: "ShowCasePaginationComponent", filePath: "projects/docs/src/app/examples/pagination/show-case-pagination/show-case-pagination.component.ts", lineNumber: 11 });
})();

// projects/docs/src/app/features/pagination-page/pagination-page.component.ts
var ROOT = "pagination";
var PaginationPageComponent = class _PaginationPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  prerequisites = [
    {
      name: "button",
      label: "Button"
    }
  ];
  sourceTree = [
    {
      name: "pagination",
      files: [
        ...this.sourceTreeBuilder.inlineComponent(ROOT, ROOT),
        this.sourceTreeBuilder.file("pagination-next-icon.component", ROOT),
        this.sourceTreeBuilder.file("pagination-prev-icon.component", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://www.a11ymatters.com/pattern/pagination",
    entities: [
      {
        name: "PaginationComponent",
        type: "component",
        selector: "app-pagination",
        inputs: [
          {
            name: "currentPage",
            type: "number",
            description: "Specifies the current page",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          },
          {
            name: "totalPages",
            type: "number",
            description: "Specifies the total pages",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          }
        ],
        outputs: [
          {
            name: "pageChange",
            description: "Emits when the page has been changed with the new page number",
            value: "number"
          }
        ]
      }
    ]
  };
  static \u0275fac = function PaginationPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationPageComponent, selectors: [["doc-pagination-page"]], decls: 7, vars: 3, consts: [["label", "pagination", "subTitle", "Pagination is a component that allows users to navigate between pages of content"], ["name", "pagination"], [3, "preprsAuto"], ["type", "component", "name", "pagination"], ["name", "pagination", 3, "sourceTree"], [3, "apiInfo"]], template: function PaginationPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-pagination");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-prerequisites", 2)(4, "doc-command-installation", 3)(5, "doc-source-tree", 4)(6, "doc-api-info", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("preprsAuto", ctx.prerequisites);
      \u0275\u0275advance(2);
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
    ShowCasePaginationComponent,
    PrerequisitesComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationPageComponent, [{
    type: Component,
    args: [{ selector: "doc-pagination-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ShowCasePaginationComponent,
      PrerequisitesComponent
    ], template: '<doc-blueprint-page\n  label="pagination"\n  subTitle="Pagination is a component that allows users to navigate between pages of content"\n>\n  <doc-show-case name="pagination">\n    <doc-show-case-pagination></doc-show-case-pagination>\n  </doc-show-case>\n  <doc-prerequisites [preprsAuto]="prerequisites"> </doc-prerequisites>\n  <doc-command-installation type="component" name="pagination">\n  </doc-command-installation>\n  <doc-source-tree\n    [sourceTree]="sourceTree"\n    name="pagination"\n  ></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationPageComponent, { className: "PaginationPageComponent", filePath: "projects/docs/src/app/features/pagination-page/pagination-page.component.ts", lineNumber: 36 });
})();
export {
  PaginationPageComponent
};
//# sourceMappingURL=chunk-CLIYD2LL.js.map
