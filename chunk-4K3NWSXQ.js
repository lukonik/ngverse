import {
  ApiDescriptionComponent
} from "./chunk-R6NCU6QH.js";
import {
  ButtonComponent
} from "./chunk-3AYE667Y.js";
import {
  ApiInfoComponent
} from "./chunk-BF7ARAHW.js";
import "./chunk-APVNZA6G.js";
import {
  CommandInstallationComponent
} from "./chunk-CTKIHVNQ.js";
import {
  ShowCaseComponent
} from "./chunk-NXTRMWBG.js";
import "./chunk-FVG5D4KT.js";
import {
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-PQL4JFHV.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import "./chunk-3GLWUNBJ.js";
import "./chunk-BC37M6ZP.js";
import "./chunk-FK22TT2X.js";
import "./chunk-4YTCSZ5T.js";
import "./chunk-XGFB36A5.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-633NCXCE.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-K3WRTE43.js";
import {
  isPlatformBrowser
} from "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Injectable,
  InjectionToken,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/session-storage/session-storage.service.ts
function mockSessionStorage() {
  return {
    length: 0,
    key: () => null,
    getItem: () => null,
    setItem: () => null,
    removeItem: () => null,
    clear: () => null
  };
}
var SESSION_STORAGE_TOKEN = new InjectionToken("SESSION_STORAGE_TOKEN", {
  factory: () => {
    const platformId = inject(PLATFORM_ID);
    const isBrowser = isPlatformBrowser(platformId);
    const document = inject(DOCUMENT);
    if (isBrowser) {
      return document.defaultView?.sessionStorage ?? mockSessionStorage();
    } else {
      return mockSessionStorage();
    }
  }
});
var SessionStorageService = class _SessionStorageService {
  _storage = inject(SESSION_STORAGE_TOKEN);
  enabled = isPlatformBrowser(inject(PLATFORM_ID));
  get length() {
    return this._storage.length;
  }
  clear() {
    this._storage.clear();
  }
  getItem(key) {
    return this._storage.getItem(key);
  }
  key(index) {
    return this._storage.key(index);
  }
  removeItem(key) {
    this._storage.removeItem(key);
  }
  setItem(key, value) {
    this._storage.setItem(key, value);
  }
  static \u0275fac = function SessionStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionStorageService, factory: _SessionStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// projects/docs/src/app/examples/session-storage/show-case-session-storage/show-case-session-storage.component.ts
var STORAGE_KEY = "current-date";
var ShowCaseSessionStorageComponent = class _ShowCaseSessionStorageComponent {
  sessionStorageService = inject(SessionStorageService);
  dateValue = signal(void 0, ...ngDevMode ? [{ debugName: "dateValue" }] : []);
  store() {
    this.sessionStorageService.setItem(STORAGE_KEY, (/* @__PURE__ */ new Date()).toString());
  }
  read() {
    const date = this.sessionStorageService.getItem(STORAGE_KEY);
    if (date) {
      this.dateValue.set(date);
    }
  }
  ngOnDestroy() {
    this.sessionStorageService.removeItem(STORAGE_KEY);
  }
  static \u0275fac = function ShowCaseSessionStorageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseSessionStorageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseSessionStorageComponent, selectors: [["doc-show-case-session-storage"]], decls: 8, vars: 1, consts: [[1, "show-case"], [1, "buttons"], ["appButton", "", "variant", "outline", "size", "sm", 3, "click"], ["appButton", "", "size", "sm", "variant", "outline", "color", "secondary", 3, "click"], [1, "date-label"]], template: function ShowCaseSessionStorageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function ShowCaseSessionStorageComponent_Template_button_click_2_listener() {
        return ctx.store();
      });
      \u0275\u0275text(3, " Store current date ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function ShowCaseSessionStorageComponent_Template_button_click_4_listener() {
        return ctx.read();
      });
      \u0275\u0275text(5, " Read the value ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.dateValue(), " ");
    }
  }, dependencies: [ButtonComponent], styles: ["\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=show-case-session-storage.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseSessionStorageComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-session-storage", imports: [ButtonComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="show-case">\n  <div class="buttons">\n    <button (click)="store()" appButton variant="outline" size="sm">\n      Store current date\n    </button>\n\n    <button\n      appButton\n      (click)="read()"\n      size="sm"\n      variant="outline"\n      color="secondary"\n    >\n      Read the value\n    </button>\n  </div>\n  <p class="date-label">\n    {{ dateValue() }}\n  </p>\n</div>\n', styles: ["/* projects/docs/src/app/examples/session-storage/show-case-session-storage/show-case-session-storage.component.css */\n.buttons {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=show-case-session-storage.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseSessionStorageComponent, { className: "ShowCaseSessionStorageComponent", filePath: "projects/docs/src/app/examples/session-storage/show-case-session-storage/show-case-session-storage.component.ts", lineNumber: 19 });
})();

// projects/docs/src/app/features/session-storage-page/session-storage-page.component.ts
var ROOT = "session-storage";
var SessionStoragePageComponent = class _SessionStoragePageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [...this.sourceTreeBuilder.service(ROOT, ROOT)],
      hideName: true
    }
  ];
  apiInfo = {
    entities: [
      {
        name: "SessionStorageService",
        type: "service",
        methods: [
          {
            name: "getItem",
            returnType: "string | null",
            description: "Returns the value associated with the given key.",
            params: [
              {
                name: "key",
                type: "string",
                description: "The key of the value to retrieve."
              }
            ]
          },
          {
            name: "setItem",
            returnType: "void",
            description: "Associates a key with a given value.",
            params: [
              {
                name: "key",
                type: "string",
                description: "The key of the value to set."
              },
              {
                name: "value",
                type: "string",
                description: "The value to set."
              }
            ]
          },
          {
            name: "removeItem",
            returnType: "void",
            description: "Removes the value associated with the given key.",
            params: [
              {
                name: "key",
                type: "string",
                description: "The key of the value to remove."
              }
            ]
          },
          {
            name: "clear",
            returnType: "void",
            description: "Removes all values from the storage."
          },
          {
            name: "key",
            returnType: "string | null",
            description: "Returns the key of the item at the given index.",
            params: [
              {
                name: "index",
                type: "number",
                description: "The index of the item."
              }
            ]
          }
        ],
        properties: [
          {
            name: "length",
            propType: "get",
            returnType: "number",
            description: "The number of items in the storage."
          },
          {
            name: "enabled",
            propType: "get",
            returnType: "boolean",
            description: "Whether the session storage is enabled. if SSR the value is false."
          }
        ]
      }
    ]
  };
  static \u0275fac = function SessionStoragePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionStoragePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionStoragePageComponent, selectors: [["doc-session-storage-page"]], decls: 11, vars: 3, consts: [["subTitle", "SessionStorage is a secure wrapper for the browser's sessionStorage API, providing a mock implementation when operating in server-side rendering (SSR) mode.", 3, "label"], ["name", "session-storage"], ["type", "component", "name", "session-storage"], ["name", "session-storage", 3, "sourceTree"], [3, "apiInfo"], ["target", "_blank", "href", "https://developer.mozilla.org/en-US/docs/Web/API/Storage", 1, "underline"]], template: function SessionStoragePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-session-storage");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3);
      \u0275\u0275elementStart(5, "doc-api-info", 4)(6, "doc-api-description");
      \u0275\u0275text(7, " SessionStorageService implements ");
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Storage");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Interface so all native methods are available. ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("label", "SessionStorage");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    CommandInstallationComponent,
    ShowCaseComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    ShowCaseSessionStorageComponent,
    ApiDescriptionComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionStoragePageComponent, [{
    type: Component,
    args: [{ selector: "doc-session-storage-page", imports: [
      BlueprintPageComponent,
      CommandInstallationComponent,
      ShowCaseComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ShowCaseSessionStorageComponent,
      ApiDescriptionComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<doc-blueprint-page
  subTitle="SessionStorage is a secure wrapper for the browser's sessionStorage API, providing a mock implementation when operating in server-side rendering (SSR) mode."
  [label]="'SessionStorage'"
>
  <doc-show-case name="session-storage">
    <doc-show-case-session-storage></doc-show-case-session-storage>
  </doc-show-case>
  <doc-command-installation type="component" name="session-storage">
  </doc-command-installation>
  <doc-source-tree
    [sourceTree]="sourceTree"
    name="session-storage"
  ></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo">
    <doc-api-description>
      SessionStorageService implements
      <a
        class="underline"
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/API/Storage"
        >Storage</a
      >
      Interface so all native methods are available.
    </doc-api-description>
  </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionStoragePageComponent, { className: "SessionStoragePageComponent", filePath: "projects/docs/src/app/features/session-storage-page/session-storage-page.component.ts", lineNumber: 34 });
})();
export {
  SessionStoragePageComponent
};
//# sourceMappingURL=chunk-4K3NWSXQ.js.map
