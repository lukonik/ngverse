import {
  SidebarComponent,
  SidebarState
} from "./chunk-WOJVUR7A.js";
import {
  ButtonComponent
} from "./chunk-GPD647ZZ.js";
import "./chunk-MKNWGWE3.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-VQYCA752.js";
import {
  FontIconComponent
} from "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  Component,
  filter,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/features/doc-sibling-navigations/doc-sibling-navigations.component.ts
var _c0 = (a0) => [a0];
var DocSiblingNavigationsComponent = class _DocSiblingNavigationsComponent {
  router = inject(Router);
  _sidebarState = inject(SidebarState);
  prevRoute = signal(void 0, ...ngDevMode ? [{ debugName: "prevRoute" }] : []);
  nextRoute = signal(void 0, ...ngDevMode ? [{ debugName: "nextRoute" }] : []);
  constructor() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      const currentPath = this.router.url;
      const allLinks = this._sidebarState.allLinks();
      if (!allLinks.length) {
        return;
      }
      const foundRouteIndex = this._sidebarState.allLinks().findIndex((r) => currentPath.includes(r.url));
      this.prevRoute.set(void 0);
      this.nextRoute.set(void 0);
      if (foundRouteIndex !== -1) {
        if (foundRouteIndex !== 0) {
          const prevRouteIndex = foundRouteIndex - 1;
          this.prevRoute.set({
            name: allLinks[prevRouteIndex].name,
            url: allLinks[prevRouteIndex].url
          });
        }
        if (foundRouteIndex !== allLinks.length - 1) {
          const nextRouteIndex = foundRouteIndex + 1;
          this.nextRoute.set({
            name: allLinks[nextRouteIndex].name,
            url: allLinks[nextRouteIndex].url
          });
        }
      }
    });
  }
  static \u0275fac = function DocSiblingNavigationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocSiblingNavigationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocSiblingNavigationsComponent, selectors: [["doc-doc-sibling-navigations"]], decls: 9, vars: 12, consts: [[1, "flex", "gap-2.5", "px-2", "pt-20", "lg:gap-6"], ["appButton", "", "size", "none", "color", "secondary", "variant", "outline", 1, "sibling-navigation", 3, "routerLink"], ["appButton", "", "size", "none", "color", "secondary", "variant", "outline", 1, "sibling-navigation", "ml-auto", "lg:justify-end", 3, "routerLink"]], template: function DocSiblingNavigationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1)(2, "app-font-icon");
      \u0275\u0275text(3, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 2);
      \u0275\u0275text(6);
      \u0275\u0275elementStart(7, "app-font-icon");
      \u0275\u0275text(8, "arrow_forward");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("invisible", !ctx.prevRoute());
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, (tmp_1_0 = ctx.prevRoute()) == null ? null : tmp_1_0.url));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx.prevRoute()) == null ? null : tmp_2_0.name, " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("invisible", !ctx.nextRoute());
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, (tmp_4_0 = ctx.nextRoute()) == null ? null : tmp_4_0.url));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx.nextRoute()) == null ? null : tmp_5_0.name, " ");
    }
  }, dependencies: [RouterLink, ButtonComponent, FontIconComponent], styles: ['\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --spacing: 0.25rem;\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --radius-md: 0.375rem;\n  }\n}\n.sibling-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(var(--spacing) * 12);\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  gap: calc(var(--spacing) * 2);\n  border-radius: var(--radius-md);\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  --tw-border-style: solid;\n  border-style: solid;\n  padding-inline: calc(var(--spacing) * 5);\n  font-size: var(--text-sm);\n  line-height: var(--tw-leading, var(--text-sm--line-height));\n}\n@media (width >= 64rem) {\n  .sibling-navigation[_ngcontent-%COMP%] {\n    height: calc(var(--spacing) * 20);\n    flex: 1;\n    padding-inline: calc(var(--spacing) * 10);\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n  @media (width >= 64rem) {\n    .sibling-navigation[_ngcontent-%COMP%] {\n      width: 300px;\n    }\n  }\n  .sibling-navigation[_ngcontent-%COMP%]:first-child {\n    justify-content: flex-start;\n  }\n  .sibling-navigation[_ngcontent-%COMP%]:last-child {\n    justify-content: flex-end;\n  }\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n\n\n/*# sourceMappingURL=doc-sibling-navigations.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocSiblingNavigationsComponent, [{
    type: Component,
    args: [{ selector: "doc-doc-sibling-navigations", imports: [RouterLink, ButtonComponent, FontIconComponent], template: '<div class="flex gap-2.5 px-2 pt-20 lg:gap-6">\n  <button\n    appButton\n    size="none"\n    color="secondary"\n    variant="outline"\n    class="sibling-navigation"\n    [class.invisible]="!prevRoute()"\n    [routerLink]="[prevRoute()?.url]"\n  >\n    <app-font-icon>arrow_back</app-font-icon>\n    {{ prevRoute()?.name }}\n  </button>\n  <button\n    appButton\n    size="none"\n    color="secondary"\n    variant="outline"\n    [class.invisible]="!nextRoute()"\n    class="sibling-navigation ml-auto lg:justify-end"\n    [routerLink]="[nextRoute()?.url]"\n  >\n    {{ nextRoute()?.name }}\n    <app-font-icon>arrow_forward</app-font-icon>\n  </button>\n</div>\n', styles: ['/* projects/docs/src/app/features/doc-sibling-navigations/doc-sibling-navigations.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --spacing: 0.25rem;\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --radius-md: 0.375rem;\n  }\n}\n.sibling-navigation {\n  display: flex;\n  height: calc(var(--spacing) * 12);\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  gap: calc(var(--spacing) * 2);\n  border-radius: var(--radius-md);\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  --tw-border-style: solid;\n  border-style: solid;\n  padding-inline: calc(var(--spacing) * 5);\n  font-size: var(--text-sm);\n  line-height: var(--tw-leading, var(--text-sm--line-height));\n}\n@media (width >= 64rem) {\n  .sibling-navigation {\n    height: calc(var(--spacing) * 20);\n    flex: 1;\n    padding-inline: calc(var(--spacing) * 10);\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n  @media (width >= 64rem) {\n    .sibling-navigation {\n      width: 300px;\n    }\n  }\n  .sibling-navigation:first-child {\n    justify-content: flex-start;\n  }\n  .sibling-navigation:last-child {\n    justify-content: flex-end;\n  }\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=doc-sibling-navigations.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocSiblingNavigationsComponent, { className: "DocSiblingNavigationsComponent", filePath: "projects/docs/src/app/features/doc-sibling-navigations/doc-sibling-navigations.component.ts", lineNumber: 15 });
})();

// projects/docs/src/app/features/doc-container-page/doc-container-page.component.ts
var DocContainerPageComponent = class _DocContainerPageComponent {
  static \u0275fac = function DocContainerPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocContainerPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocContainerPageComponent, selectors: [["doc-doc-container-page"]], decls: 6, vars: 0, consts: [[1, "doc-container-page"], [1, "hidden", "lg:block"], [1, "pb-20", "lg:flex-1"], [1, "w-full", "max-w-[1024px]", "pr-1", "lg:pr-3"]], template: function DocContainerPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "doc-sidebar", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "router-outlet")(5, "doc-doc-sibling-navigations");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [SidebarComponent, RouterOutlet, DocSiblingNavigationsComponent], styles: ["\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --spacing: 0.25rem;\n  }\n}\n@media (width >= 64rem) {\n  .doc-container-page[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (width >= 64rem) {\n  .doc-container-page[_ngcontent-%COMP%] {\n    gap: calc(var(--spacing) * 10);\n  }\n}\n\n\n/*# sourceMappingURL=doc-container-page.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocContainerPageComponent, [{
    type: Component,
    args: [{ selector: "doc-doc-container-page", imports: [SidebarComponent, RouterOutlet, DocSiblingNavigationsComponent], template: '<div class="doc-container-page">\n  <doc-sidebar class="hidden lg:block"></doc-sidebar>\n  <div class="pb-20 lg:flex-1">\n    <div class="w-full max-w-[1024px] pr-1 lg:pr-3">\n      <router-outlet></router-outlet>\n      <doc-doc-sibling-navigations></doc-doc-sibling-navigations>\n    </div>\n  </div>\n</div>\n', styles: ["/* projects/docs/src/app/features/doc-container-page/doc-container-page.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --spacing: 0.25rem;\n  }\n}\n@media (width >= 64rem) {\n  .doc-container-page {\n    display: flex;\n  }\n}\n@media (width >= 64rem) {\n  .doc-container-page {\n    gap: calc(var(--spacing) * 10);\n  }\n}\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=doc-container-page.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocContainerPageComponent, { className: "DocContainerPageComponent", filePath: "projects/docs/src/app/features/doc-container-page/doc-container-page.component.ts", lineNumber: 12 });
})();
export {
  DocContainerPageComponent
};
//# sourceMappingURL=chunk-3SVFSKEV.js.map
