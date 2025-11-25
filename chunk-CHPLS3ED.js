import {
  ProjectNameComponent
} from "./chunk-SNTPACE6.js";
import {
  BlogPageComponent
} from "./chunk-VQOEZPJ3.js";
import {
  FileService,
  SourceCodeComponent
} from "./chunk-RBCCWOK3.js";
import "./chunk-EPTODCGW.js";
import "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/features/installation-page/installation-page.component.ts
var InstallationPageComponent = class _InstallationPageComponent {
  ngVersefile = "ngverse/ngverse.css";
  fileService = inject(FileService);
  ngVerseStyleContent = signal("", ...ngDevMode ? [{ debugName: "ngVerseStyleContent" }] : []);
  configCode = ` "projectType": "application",
  "schematics": {
    "ngverse:add": {
      "path": "ui"
    }
  }`;
  tsImportCode = `
  ...
  "compilerOptions": {
    "paths": {
      "@/ui/*": ["./src/app/ui/*"]
    }
   ....
    `;
  iconLink = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,check_box,check_box_outline_blank,close,dark_mode,keyboard_arrow_down,light_mode,radio_button_checked,radio_button_unchecked"/> `;
  allIconsLink = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"/>`;
  constructor() {
    this.fileService.getFile(this.ngVersefile).subscribe((data) => {
      this.ngVerseStyleContent.set(data);
    });
  }
  animationsCode = `import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
       provideAnimationsAsync()
     ],
};`;
  postcssCode = `{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}`;
  static \u0275fac = function InstallationPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstallationPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstallationPageComponent, selectors: [["doc-installation-page"]], decls: 31, vars: 1, consts: [["label", "Installation"], [1, "!m-0"], ["language", "bash", "code", "npm install ngverse --save-dev"], ["language", "bash", "code", "npm install @angular/cdk --save-dev"], ["language", "ts", 3, "code"], ["target", "_blank", "href", "https://tailwindcss.com/docs/installation/framework-guides/angular"]], template: function InstallationPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blog-page", 0)(1, "p", 1);
      \u0275\u0275text(2, " The minimum required Angular version for installation is ");
      \u0275\u0275elementStart(3, "strong");
      \u0275\u0275text(4, ">=19.0.0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, ". ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7, "Install ");
      \u0275\u0275element(8, "doc-project-name");
      \u0275\u0275text(9, " schematics");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "doc-source-code", 2);
      \u0275\u0275elementStart(11, "h2");
      \u0275\u0275text(12, "Install @angular/cdk");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "doc-source-code", 3);
      \u0275\u0275elementStart(14, "h2");
      \u0275\u0275text(15, "Add Angular animations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, " Add ");
      \u0275\u0275elementStart(18, "code");
      \u0275\u0275text(19, "provideAnimationsAsync");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " provider to your ");
      \u0275\u0275elementStart(21, "code");
      \u0275\u0275text(22, "appConfig");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " file to enable animations ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "doc-source-code", 4);
      \u0275\u0275elementStart(25, "h2");
      \u0275\u0275text(26, "Install tailwind (v4)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, " Follow the instructions here: ");
      \u0275\u0275elementStart(29, "a", 5);
      \u0275\u0275text(30, "link");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275property("code", ctx.animationsCode);
    }
  }, dependencies: [BlogPageComponent, SourceCodeComponent, ProjectNameComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstallationPageComponent, [{
    type: Component,
    args: [{ selector: "doc-installation-page", imports: [BlogPageComponent, SourceCodeComponent, ProjectNameComponent], template: '<doc-blog-page label="Installation">\n  <p class="!m-0">\n    The minimum required Angular version for installation is\n    <strong>&gt;=19.0.0</strong>.\n  </p>\n  <h2>Install <doc-project-name></doc-project-name> schematics</h2>\n  <doc-source-code\n    language="bash"\n    code="npm install ngverse --save-dev"\n  ></doc-source-code>\n  <h2>Install &#64;angular/cdk</h2>\n  <doc-source-code\n    language="bash"\n    code="npm install @angular/cdk --save-dev"\n  ></doc-source-code>\n  <h2>Add Angular animations</h2>\n  <p>\n    Add <code>provideAnimationsAsync</code> provider to your\n    <code>appConfig</code> file to enable animations\n  </p>\n  <doc-source-code language="ts" [code]="animationsCode"></doc-source-code>\n  <h2>Install tailwind (v4)</h2>\n  <p>\n    Follow the instructions here:\n    <a\n      target="_blank"\n      href="https://tailwindcss.com/docs/installation/framework-guides/angular"\n      >link</a\n    >\n  </p>\n</doc-blog-page>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstallationPageComponent, { className: "InstallationPageComponent", filePath: "projects/docs/src/app/features/installation-page/installation-page.component.ts", lineNumber: 13 });
})();
export {
  InstallationPageComponent
};
//# sourceMappingURL=chunk-CHPLS3ED.js.map
