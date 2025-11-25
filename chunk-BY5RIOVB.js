import {
  DividerComponent
} from "./chunk-FK22TT2X.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive
} from "./chunk-4YTCSZ5T.js";
import {
  LowerCasePipe
} from "./chunk-232UVHOA.js";
import {
  Component,
  Injectable,
  computed,
  filter,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";

// projects/docs/src/app/features/sidebar/guide-links.ts
var GUIDES_LINKS = {
  name: "Guides",
  children: [
    {
      name: "Introduction",
      url: "introduction"
    },
    {
      name: "Installation",
      url: "installation"
    }
  ]
};

// projects/docs/src/app/features/sidebar/ui-links.ts
var UI_LINKS = {
  name: "UI",
  statics: [
    {
      name: "Schematics",
      url: "schematics"
    },
    {
      name: "Theming",
      url: "theming"
    }
  ],
  children: [
    {
      name: "Input",
      url: "input"
    },
    {
      name: "Form Field",
      url: "form-field"
    },
    {
      name: "Multi Select",
      url: "multi-select"
    },
    {
      name: "OTP Input",
      url: "otp-input"
    },
    {
      name: "Select",
      url: "select"
    },
    {
      name: "Checkbox",
      url: "checkbox"
    },
    {
      name: "Radio Button",
      url: "radio-button"
    },
    {
      name: "Textarea",
      url: "textarea"
    },
    {
      name: "Switch",
      url: "switch"
    },
    {
      name: "Accordion",
      url: "accordion"
    },
    {
      name: "Alert",
      url: "alert"
    },
    {
      name: "Card",
      url: "card"
    },
    {
      name: "Tab",
      url: "tab"
    },
    {
      name: "Tab Nav Bar",
      url: "tab-nav-bar"
    },
    {
      name: "Button",
      url: "button"
    },
    {
      name: "Button Group",
      url: "button-group"
    },
    {
      name: "Dialog",
      url: "dialog"
    },
    {
      name: "Drawer",
      url: "drawer"
    },
    {
      name: "Popover",
      url: "popover"
    },
    {
      name: "Toast",
      url: "toast"
    },
    {
      name: "Tooltip",
      url: "tooltip"
    },
    {
      name: "Context Menu",
      url: "context-menu"
    },
    {
      name: "Pagination",
      url: "pagination"
    },
    {
      name: "Dark Mode",
      url: "dark-mode"
    },
    {
      name: "Divider",
      url: "divider"
    },
    {
      name: "Loader",
      url: "loader"
    },
    {
      name: "Progress Bar",
      url: "progress-bar"
    },
    {
      name: "Skeleton",
      url: "skeleton"
    },
    {
      name: "Badge",
      url: "badge"
    },
    {
      name: "Font Icon",
      url: "font-icon"
    },
    {
      name: "Icon",
      url: "icon"
    }
  ].sort((a, b) => a.name.localeCompare(b.name))
};

// projects/docs/src/app/features/sidebar/sidebar.state.ts
var SIDEBAR_ROUTES = [GUIDES_LINKS, UI_LINKS];
var SidebarState = class _SidebarState {
  allRoutes = SIDEBAR_ROUTES;
  _group = signal(void 0, ...ngDevMode ? [{ debugName: "_group" }] : []);
  _router = inject(Router);
  allLinks = computed(() => {
    const links = [];
    for (const group of this.allRoutes) {
      if (group.statics) {
        links.push(...group.statics.map((s) => ({
          name: s.name,
          url: group.name.toLowerCase() + "/" + s.url
        })));
      }
      const children = group.children;
      for (const child of children) {
        if ("url" in child) {
          links.push({
            name: child.name,
            url: group.name.toLowerCase() + "/" + child.url
          });
        } else {
          for (const childChild of child.children) {
            links.push({
              name: childChild.name,
              url: group.name.toLowerCase() + "/" + childChild.url
            });
          }
        }
      }
    }
    return links;
  }, ...ngDevMode ? [{ debugName: "allLinks" }] : []);
  constructor() {
    this._router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      if (this._router.url.includes("guides")) {
        this._group.set(this.allRoutes[0]);
      } else if (this._router.url.includes("ui")) {
        this._group.set(this.allRoutes[1]);
      } else if (this._router.url.includes("utils")) {
        this._group.set(this.allRoutes[2]);
      } else if (this._router.url.includes("pipes")) {
        this._group.set(this.allRoutes[3]);
      } else if (this._router.url.includes("animations")) {
        this._group.set(this.allRoutes[4]);
      }
    });
  }
  static \u0275fac = function SidebarState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarState, factory: _SidebarState.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// projects/docs/src/app/features/sidebar/sidebar.component.ts
var _c0 = (a0, a1) => ["/doc/", a0, a1];
function SidebarComponent_For_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 3);
    \u0275\u0275pipe(2, "lowercase");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const group_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLinkActive", "selected")("routerLink", \u0275\u0275pureFunction2(5, _c0, \u0275\u0275pipeBind1(2, 3, group_r2.name), link_r1.url));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", link_r1.name, " ");
  }
}
function SidebarComponent_For_3_For_6_Conditional_0_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r3.mode, " ");
  }
}
function SidebarComponent_For_3_For_6_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 5);
    \u0275\u0275pipe(2, "lowercase");
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, SidebarComponent_For_3_For_6_Conditional_0_For_4_Conditional_4_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const group_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLinkActive", "selected")("routerLink", \u0275\u0275pureFunction2(6, _c0, \u0275\u0275pipeBind1(2, 4, group_r2.name), link_r3.url));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", link_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r3.mode === "experimental" ? 4 : -1);
  }
}
function SidebarComponent_For_3_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul");
    \u0275\u0275repeaterCreate(3, SidebarComponent_For_3_For_6_Conditional_0_For_4_Template, 5, 9, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const linkOrGroup_r4 = \u0275\u0275nextContext().$implicit;
    const childGroup_r5 = linkOrGroup_r4;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(childGroup_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(childGroup_r5.children);
  }
}
function SidebarComponent_For_3_For_6_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const link_r6 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r6.mode, " ");
  }
}
function SidebarComponent_For_3_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "li")(2, "a", 3);
    \u0275\u0275pipe(3, "lowercase");
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, SidebarComponent_For_3_For_6_Conditional_1_Conditional_5_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const linkOrGroup_r4 = \u0275\u0275nextContext().$implicit;
    const group_r2 = \u0275\u0275nextContext().$implicit;
    const link_r7 = \u0275\u0275storeLet(linkOrGroup_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActive", "selected")("routerLink", \u0275\u0275pureFunction2(7, _c0, \u0275\u0275pipeBind1(3, 5, group_r2.name), link_r7.url));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", link_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r7.mode === "experimental" ? 5 : -1);
  }
}
function SidebarComponent_For_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarComponent_For_3_For_6_Conditional_0_Template, 5, 1)(1, SidebarComponent_For_3_For_6_Conditional_1_Template, 6, 10, "li");
  }
  if (rf & 2) {
    const linkOrGroup_r4 = ctx.$implicit;
    \u0275\u0275conditional(linkOrGroup_r4.children ? 0 : 1);
  }
}
function SidebarComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 1)(1, "li", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SidebarComponent_For_3_For_4_Template, 4, 8, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(5, SidebarComponent_For_3_For_6_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-divider");
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r2.statics);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r2.children);
  }
}
var SidebarComponent = class _SidebarComponent {
  sidebarState = inject(SidebarState);
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["doc-sidebar"]], decls: 4, vars: 0, consts: [[1, "sidebar", "h-[600px]", "w-[250px]", "overflow-auto", "px-5", "pt-4", "lg:w-[300px]"], [1, "mt-4", "list-none", "pl-0"], [1, "mb-2", "font-medium"], [1, "sidebar-link", "my-3", "ml-0", "flex", "h-8", "cursor-pointer", "items-center", "justify-between", "rounded-md", "pr-2", "pl-4", "hover:bg-slate-100", 3, "routerLinkActive", "routerLink"], [1, "mb-2", "pl-4", "font-medium"], [1, "sidebar-link", "my-3", "ml-0", "flex", "h-8", "cursor-pointer", "items-center", "justify-between", "rounded-md", "pr-2", "pl-10", "hover:bg-slate-100", 3, "routerLinkActive", "routerLink"], [1, "inline-flex", "items-center", "gap-1", "rounded-xl", "bg-slate-200", "px-2", "py-1", "text-xs"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav");
      \u0275\u0275repeaterCreate(2, SidebarComponent_For_3_Template, 8, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.sidebarState.allRoutes);
    }
  }, dependencies: [RouterLink, RouterLinkActive, DividerComponent, LowerCasePipe], styles: ["\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-100: oklch(0.968 0.007 247.896);\n    --color-gray-400: oklch(0.707 0.022 261.325);\n  }\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-slate-100);\n}\n.sidebar[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--color-border);\n  background: var(--color-background);\n  height: 100vh;\n  padding-bottom: 60px;\n}\n@media (width >= 64rem) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: calc(100vh - 56px);\n    position: sticky;\n    top: 56px;\n  }\n}\n.in-progress[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: var(--color-gray-400);\n}\n.sidebar-link[_ngcontent-%COMP%]:hover, \n.sidebar-link.selected[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  color: var(--color-accent-foreground);\n}\n\n\n/*# sourceMappingURL=sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "doc-sidebar", imports: [RouterLink, RouterLinkActive, LowerCasePipe, DividerComponent], template: `<div class="sidebar h-[600px] w-[250px] overflow-auto px-5 pt-4 lg:w-[300px]">
  <nav>
    @for (group of sidebarState.allRoutes; track $index) {
      <ul class="mt-4 list-none pl-0">
        <li class="mb-2 font-medium">{{ group.name }}</li>
        @for (link of group.statics; track $index) {
          <li>
            <a
              [routerLinkActive]="'selected'"
              class="sidebar-link my-3 ml-0 flex h-8 cursor-pointer items-center justify-between rounded-md pr-2 pl-4 hover:bg-slate-100"
              [routerLink]="['/doc/', group.name | lowercase, link.url]"
              >{{ link.name }}
            </a>
          </li>
        }

        @for (linkOrGroup of group.children; track $index) {
          @if ($any(linkOrGroup).children) {
            @let childGroup = $any(linkOrGroup);

            <li class="mb-2 pl-4 font-medium">{{ childGroup.name }}</li>

            <ul>
              @for (link of $any(childGroup).children; track $index) {
                <li>
                  <a
                    [routerLinkActive]="'selected'"
                    class="sidebar-link my-3 ml-0 flex h-8 cursor-pointer items-center justify-between rounded-md pr-2 pl-10 hover:bg-slate-100"
                    [routerLink]="['/doc/', group.name | lowercase, link.url]"
                    >{{ link.name }}
                    @if (link.mode === 'experimental') {
                      <span
                        class="inline-flex items-center gap-1 rounded-xl bg-slate-200 px-2 py-1 text-xs"
                      >
                        {{ link.mode }}
                      </span>
                    }
                  </a>
                </li>
              }
            </ul>
          } @else {
            @let link = $any(linkOrGroup);
            <li>
              <a
                [routerLinkActive]="'selected'"
                class="sidebar-link my-3 ml-0 flex h-8 cursor-pointer items-center justify-between rounded-md pr-2 pl-4 hover:bg-slate-100"
                [routerLink]="['/doc/', group.name | lowercase, link.url]"
                >{{ link.name }}
                @if (link.mode === 'experimental') {
                  <span
                    class="inline-flex items-center gap-1 rounded-xl bg-slate-200 px-2 py-1 text-xs"
                  >
                    {{ link.mode }}
                  </span>
                }
              </a>
            </li>
          }
        }
      </ul>
      <app-divider></app-divider>
    }
  </nav>
</div>
`, styles: ["/* projects/docs/src/app/features/sidebar/sidebar.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-100: oklch(0.968 0.007 247.896);\n    --color-gray-400: oklch(0.707 0.022 261.325);\n  }\n}\na {\n  text-decoration: none;\n}\n.selected {\n  background-color: var(--color-slate-100);\n}\n.sidebar {\n  border-right: 1px solid var(--color-border);\n  background: var(--color-background);\n  height: 100vh;\n  padding-bottom: 60px;\n}\n@media (width >= 64rem) {\n  .sidebar {\n    height: calc(100vh - 56px);\n    position: sticky;\n    top: 56px;\n  }\n}\n.in-progress {\n  pointer-events: none;\n  color: var(--color-gray-400);\n}\n.sidebar-link:hover,\n.sidebar-link.selected {\n  background: var(--color-accent);\n  color: var(--color-accent-foreground);\n}\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "projects/docs/src/app/features/sidebar/sidebar.component.ts", lineNumber: 13 });
})();

export {
  SidebarState,
  SidebarComponent
};
//# sourceMappingURL=chunk-BY5RIOVB.js.map
