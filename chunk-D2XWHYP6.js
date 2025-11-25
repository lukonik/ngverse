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
  ChangeDetectionStrategy,
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

// projects/docs/src/app/pages/ui/ui-schematics-page/ui-schematics-page.component.ts
var UiSchematicsPageComponent = class _UiSchematicsPageComponent {
  postcssCode = `{
    "plugins": {
      "@tailwindcss/postcss": {}
    }
  }`;
  animationsCode = `import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

  export const appConfig: ApplicationConfig = {
    providers: [
         provideAnimationsAsync()
       ],
  };`;
  configCode = `
  ...
  "projectType": "application",
  "schematics": {
    "ngverse:ui": {
      "path": "ui" // the path where ui components will be generated, adjust as needed
      // you can add other options as well
    }
  }
  ...
  `;
  tsImportPath = `
  ...
   "paths": {
      "@/ui/*": ["./src/app/ui/*"] // the path where ui components will be, adjust as needed
    },
  ...
  `;
  angularCDKStyleImport = `@import '@angular/cdk/overlay-prebuilt.css';`;
  globalsCode = signal("", ...ngDevMode ? [{ debugName: "globalsCode" }] : []);
  fileService = inject(FileService);
  ngOnInit() {
    this.fileService.getFile("ngverse/ngverse.css").subscribe((data) => {
      this.globalsCode.set(data);
    });
  }
  static \u0275fac = function UiSchematicsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiSchematicsPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiSchematicsPageComponent, selectors: [["doc-ui-schematics-page"]], decls: 71, vars: 3, consts: [["label", "Schematics"], ["language", "bash", 3, "code"], [1, "font-bold"], ["language", "json", 3, "code"], [1, "bold"], ["language", "ts", "code", "import { ButtonComponent } from '@/ui/button/button.component';"]], template: function UiSchematicsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blog-page", 0)(1, "p")(2, "code");
      \u0275\u0275text(3, "ngverse:ui");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Schematic is used to generate UI components in your app. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, " For example: ");
      \u0275\u0275elementStart(7, "code");
      \u0275\u0275text(8, "ng g ngverse:ui button");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " will generate a button component. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h2");
      \u0275\u0275text(11, "Schematic Options");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "doc-source-code", 1);
      \u0275\u0275elementStart(13, "ul")(14, "li")(15, "span", 2)(16, "code");
      \u0275\u0275text(17, "path");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(18, ": Specifies where to place the component folder. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "span", 2)(21, "code");
      \u0275\u0275text(22, "project");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(23, ": The name of the Angular project where the component should be added. By default it will use defaultProject ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "li")(25, "span", 2)(26, "code");
      \u0275\u0275text(27, "prefix");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(28, ": Specifies the prefix of component. By default, it will use the project's prefix, or 'app' if no project is provided. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li")(30, "span", 2)(31, "code");
      \u0275\u0275text(32, "includeTests");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(33, ": Specifies whether to include test files for the element. ");
      \u0275\u0275elementStart(34, "code");
      \u0275\u0275text(35, "False");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " by Default ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "li")(38, "span", 2)(39, "code");
      \u0275\u0275text(40, "replace");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(41, ": If component already exists, overwrite it. ");
      \u0275\u0275elementStart(42, "code");
      \u0275\u0275text(43, "False");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " by Default ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "h2");
      \u0275\u0275text(46, "Configure Schematics globally");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, " In order to generate components in the same parent folder by default, you can configure schematics in ");
      \u0275\u0275elementStart(49, "code");
      \u0275\u0275text(50, "angular.json");
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " file. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p");
      \u0275\u0275text(53, " Add following code to your ");
      \u0275\u0275elementStart(54, "code");
      \u0275\u0275text(55, "angular.json");
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " project configuration ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "doc-source-code", 3);
      \u0275\u0275elementStart(58, "h2");
      \u0275\u0275text(59, "Add Typescript Import Path");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p");
      \u0275\u0275text(61, "Add the following path to your ");
      \u0275\u0275elementStart(62, "code");
      \u0275\u0275text(63, "tsconfig.json");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(64, "doc-source-code", 3);
      \u0275\u0275elementStart(65, "p");
      \u0275\u0275text(66, " By that you will import ");
      \u0275\u0275elementStart(67, "span", 4);
      \u0275\u0275text(68, "UI");
      \u0275\u0275elementEnd();
      \u0275\u0275text(69, " components, like that ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "doc-source-code", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("code", "ng g ngverse:ui [name]");
      \u0275\u0275advance(45);
      \u0275\u0275property("code", ctx.configCode);
      \u0275\u0275advance(7);
      \u0275\u0275property("code", ctx.tsImportPath);
    }
  }, dependencies: [BlogPageComponent, SourceCodeComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiSchematicsPageComponent, [{
    type: Component,
    args: [{ selector: "doc-ui-schematics-page", imports: [BlogPageComponent, SourceCodeComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<doc-blog-page label="Schematics">
  <p>
    <code>ngverse:ui</code> Schematic is used to generate UI components in your
    app.
  </p>
  <p>
    For example: <code>ng g ngverse:ui button</code> will generate a button
    component.
  </p>
  <h2>Schematic Options</h2>
  <doc-source-code
    language="bash"
    [code]="'ng g ngverse:ui [name]'"
  ></doc-source-code>
  <ul>
    <li>
      <span class="font-bold"><code>path</code></span
      >: Specifies where to place the component folder.
    </li>
    <li>
      <span class="font-bold"><code>project</code></span
      >: The name of the Angular project where the component should be added. By
      default it will use defaultProject
    </li>
    <li>
      <span class="font-bold"><code>prefix</code></span
      >: Specifies the prefix of component. By default, it will use the
      project's prefix, or 'app' if no project is provided.
    </li>
    <li>
      <span class="font-bold"><code>includeTests</code></span
      >: Specifies whether to include test files for the element.
      <code>False</code> by Default
    </li>
    <li>
      <span class="font-bold"><code>replace</code></span
      >: If component already exists, overwrite it. <code>False</code> by
      Default
    </li>
  </ul>
  <h2>Configure Schematics globally</h2>
  <p>
    In order to generate components in the same parent folder by default, you
    can configure schematics in <code>angular.json</code> file.
  </p>
  <p>
    Add following code to your <code>angular.json</code> project configuration
  </p>
  <doc-source-code language="json" [code]="configCode"></doc-source-code>

  <h2>Add Typescript Import Path</h2>
  <p>Add the following path to your <code>tsconfig.json</code></p>
  <doc-source-code language="json" [code]="tsImportPath"></doc-source-code>
  <p>
    By that you will import <span class="bold">UI</span> components, like that
  </p>
  <doc-source-code
    language="ts"
    code="import { ButtonComponent } from '@/ui/button/button.component';"
  ></doc-source-code>
</doc-blog-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiSchematicsPageComponent, { className: "UiSchematicsPageComponent", filePath: "projects/docs/src/app/pages/ui/ui-schematics-page/ui-schematics-page.component.ts", lineNumber: 19 });
})();
export {
  UiSchematicsPageComponent
};
//# sourceMappingURL=chunk-D2XWHYP6.js.map
