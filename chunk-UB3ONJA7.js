import {
  coerceCssPixelValue
} from "./chunk-EKFZFPCR.js";
import {
  HttpClient,
  isPlatformBrowser
} from "./chunk-QLTUCGP5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injectable,
  Input,
  PLATFORM_ID,
  Renderer2,
  effect,
  finalize,
  inject,
  input,
  map,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  tap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable
} from "./chunk-UGZKGHRZ.js";

// projects/ngverse/src/lib/ui/icon/icon.registry.ts
var IconRegistry = class _IconRegistry {
  icons = /* @__PURE__ */ new Map();
  addIcon(name, url) {
    this.icons.set(name, url);
  }
  getUrl(name) {
    return this.icons.get(name);
  }
  static \u0275fac = function IconRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IconRegistry, factory: _IconRegistry.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/icon/icon-loader.service.ts
function createDomParser() {
  const platformId = inject(PLATFORM_ID);
  if (isPlatformBrowser(platformId)) {
    return new DOMParser();
  }
  return null;
}
var IconLoaderService = class _IconLoaderService {
  _iconRegistry = inject(IconRegistry);
  http = inject(HttpClient);
  _domParser = createDomParser();
  _iconLoader = /* @__PURE__ */ new Map();
  _iconCache = /* @__PURE__ */ new Map();
  load(name) {
    const url = this._iconRegistry.getUrl(name);
    if (!url) {
      throw new Error(`Icon with name ${name} not found. Please use IconRegistry.addSvgIcon() to add it.`);
    }
    const cachedIcon = this._iconCache.get(url);
    if (cachedIcon) {
      return of(cachedIcon.cloneNode(true));
    }
    const iconIsLoading = this._iconLoader.get(url);
    if (iconIsLoading) {
      return iconIsLoading.pipe(map((svg) => svg?.cloneNode(true)));
    }
    return this.fetch(url);
  }
  fetch(url) {
    const http$ = this.http.get(url, {
      responseType: "text"
    }).pipe(map((svg) => this.stringToSvg(svg))).pipe(tap((svg) => {
      if (svg) {
        this._iconCache.set(url, svg);
      }
    })).pipe(finalize(() => this._iconLoader.delete(url))).pipe(shareReplay(1));
    this._iconLoader.set(url, http$);
    return http$;
  }
  stringToSvg(svgString) {
    if (!this._domParser) {
      return null;
    }
    const svg = this._domParser.parseFromString(svgString, "image/svg+xml").documentElement;
    if (svg.nodeName !== "svg") {
      return null;
    }
    return svg;
  }
  static \u0275fac = function IconLoaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconLoaderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IconLoaderService, factory: _IconLoaderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconLoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/icon/icon.component.ts
var INITIAL_WIDTH = 24;
var INITIAL_HEIGHT = 24;
var IconComponent = class _IconComponent {
  name = input.required(...ngDevMode ? [{ debugName: "name" }] : []);
  stretch = input(false, ...ngDevMode ? [{ debugName: "stretch" }] : []);
  width = input(INITIAL_WIDTH, ...ngDevMode ? [{ debugName: "width" }] : []);
  height = input(INITIAL_HEIGHT, ...ngDevMode ? [{ debugName: "height" }] : []);
  iconLoaderService = inject(IconLoaderService);
  renderer = inject(Renderer2);
  host = inject(ElementRef);
  icon = signal(void 0, ...ngDevMode ? [{ debugName: "icon" }] : []);
  constructor() {
    effect(() => {
      const name = this.name();
      if (!name) {
        return;
      }
      this.iconLoaderService.load(name).subscribe((icon) => {
        if (!icon) {
          return;
        }
        untracked(() => {
          const existingIcon = this.icon();
          if (existingIcon) {
            this.renderer.removeChild(this.host.nativeElement, existingIcon);
          }
        });
        this.icon.set(icon);
        this.renderer.appendChild(this.host.nativeElement, icon);
      });
    });
    effect(() => {
      const icon = this.icon();
      if (!icon) {
        return;
      }
      if (this.stretch()) {
        this.renderer.setAttribute(icon, "width", "100%");
        this.renderer.setAttribute(icon, "height", "100%");
      } else {
        const coerceWdth = coerceCssPixelValue(this.width());
        const coerceHeight = coerceCssPixelValue(this.height());
        this.renderer.setAttribute(icon, "width", coerceWdth);
        this.renderer.setAttribute(icon, "height", coerceHeight);
      }
    });
  }
  static \u0275fac = function IconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconComponent, selectors: [["app-icon"]], hostAttrs: ["role", "img"], hostVars: 1, hostBindings: function IconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-hidden", true);
    }
  }, inputs: { name: [1, "name"], stretch: [1, "stretch"], width: [1, "width"], height: [1, "height"] }, decls: 0, vars: 0, template: function IconComponent_Template(rf, ctx) {
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n/*# sourceMappingURL=icon.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{ selector: "app-icon", template: "", changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "img",
      "[attr.aria-hidden]": "true"
    }, styles: ["/* angular:styles/component:css;37210d7a92921efeeb835c600c2fc7e84bd7b015c3d3804ca40d8d29ba9329b3;/home/runner/work/ngverse/ngverse/projects/ngverse/src/lib/ui/icon/icon.component.ts */\n:host {\n  display: inline-flex;\n}\n/*# sourceMappingURL=icon.component.css.map */\n"] }]
  }], () => [], { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true }] }], stretch: [{ type: Input, args: [{ isSignal: true, alias: "stretch", required: false }] }], width: [{ type: Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: Input, args: [{ isSignal: true, alias: "height", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconComponent, { className: "IconComponent", filePath: "projects/ngverse/src/lib/ui/icon/icon.component.ts", lineNumber: 32 });
})();

export {
  IconRegistry,
  IconComponent
};
//# sourceMappingURL=chunk-UB3ONJA7.js.map
