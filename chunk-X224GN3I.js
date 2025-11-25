import {
  ButtonComponent
} from "./chunk-ESRFV6V7.js";
import {
  Platform
} from "./chunk-64HPILVO.js";
import {
  FontIconComponent,
  coerceBooleanProperty
} from "./chunk-MTAP3RFR.js";
import {
  isPlatformBrowser
} from "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Injectable,
  afterRenderEffect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2NN34RDL.js";

// projects/ngverse/src/lib/ui/dark-mode/dark-mode.service.ts
var DARK_MODE_STORAGE_KEY = "dark-mode";
var DarkModeService = class _DarkModeService {
  _isEnabled = signal(false, ...ngDevMode ? [{ debugName: "_isEnabled" }] : []);
  isEnabled = this._isEnabled.asReadonly();
  platform = inject(Platform);
  document = inject(DOCUMENT);
  rootHtml = this.document.documentElement;
  window = this.document.defaultView;
  constructor() {
    this.initialize();
    afterRenderEffect(() => {
      const darkMode = this._isEnabled();
      localStorage.setItem(DARK_MODE_STORAGE_KEY, darkMode + "");
      this.setHtmlDarkModeAttribute(darkMode);
    });
  }
  toggle() {
    this._isEnabled.update((darkMode) => !darkMode);
  }
  enable() {
    this._isEnabled.set(true);
  }
  disable() {
    this._isEnabled.set(false);
  }
  setHtmlDarkModeAttribute(darkMode) {
    if (darkMode) {
      this.rootHtml.classList.add("dark");
    } else {
      this.rootHtml.classList.remove("dark");
    }
  }
  initialize() {
    if (isPlatformBrowser(this.platform)) {
      const storedDarkMode = localStorage.getItem(DARK_MODE_STORAGE_KEY);
      if (storedDarkMode) {
        this._isEnabled.set(coerceBooleanProperty(storedDarkMode));
        return;
      }
      if (this.platform.isBrowser && this.window?.matchMedia("(prefers-color-scheme: dark)").matches) {
        this._isEnabled.set(true);
        return;
      }
      this._isEnabled.set(false);
    }
  }
  static \u0275fac = function DarkModeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DarkModeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DarkModeService, factory: _DarkModeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DarkModeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// projects/ngverse/src/lib/ui/dark-mode/dark-mode-toggle.component.ts
var DarkModeToggleComponent = class _DarkModeToggleComponent {
  darkModeService = inject(DarkModeService);
  isEnabled = this.darkModeService.isEnabled;
  toggleDarkMode() {
    this.darkModeService.toggle();
  }
  static \u0275fac = function DarkModeToggleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DarkModeToggleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DarkModeToggleComponent, selectors: [["app-dark-mode-toggle"]], decls: 3, vars: 1, consts: [["appButton", "", "icon", "", "variant", "link", "color", "secondary", "size", "sm", "aria-label", "Dark Mode", 3, "click"]], template: function DarkModeToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function DarkModeToggleComponent_Template_button_click_0_listener() {
        return ctx.toggleDarkMode();
      });
      \u0275\u0275elementStart(1, "app-font-icon");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEnabled() ? "dark_mode" : "light_mode");
    }
  }, dependencies: [ButtonComponent, FontIconComponent], styles: ["\n\n.dark-mode-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  display: inline-block;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=dark-mode-toggle.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DarkModeToggleComponent, [{
    type: Component,
    args: [{ selector: "app-dark-mode-toggle", imports: [ButtonComponent, FontIconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<button
  appButton
  icon
  variant="link"
  color="secondary"
  (click)="toggleDarkMode()"
  size="sm"
  aria-label="Dark Mode"
>
  <app-font-icon>{{ isEnabled() ? 'dark_mode' : 'light_mode' }}</app-font-icon>
</button>
`, styles: ["/* projects/ngverse/src/lib/ui/dark-mode/dark-mode-toggle.component.css */\n.dark-mode-icon {\n  width: 18px;\n  height: 18px;\n  display: inline-block;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=dark-mode-toggle.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DarkModeToggleComponent, { className: "DarkModeToggleComponent", filePath: "projects/ngverse/src/lib/ui/dark-mode/dark-mode-toggle.component.ts", lineNumber: 13 });
})();

export {
  DarkModeService,
  DarkModeToggleComponent
};
//# sourceMappingURL=chunk-X224GN3I.js.map
