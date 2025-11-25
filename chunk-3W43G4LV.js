import {
  TabGroupComponent,
  TabPanelComponent
} from "./chunk-Y4J6H3UA.js";
import {
  CardComponent,
  FileService,
  SourceCodeComponent
} from "./chunk-RBCCWOK3.js";
import {
  UpperCasePipe
} from "./chunk-QLTUCGP5.js";
import {
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext
} from "./chunk-UGZKGHRZ.js";

// projects/docs/src/app/blueprint/show-case/show-case.component.ts
var _c0 = ["*"];
function ShowCaseComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tab-panel", 4);
    \u0275\u0275pipe(1, "uppercase");
    \u0275\u0275element(2, "doc-source-code", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 5, item_r1))("gap", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("outline", false)("code", ctx_r1.code())("language", ctx_r1.language());
  }
}
var ShowCaseComponent = class _ShowCaseComponent {
  tabs = ["html", "ts", "css"];
  fileService = inject(FileService);
  code = signal("", ...ngDevMode ? [{ debugName: "code" }] : []);
  language = signal("", ...ngDevMode ? [{ debugName: "language" }] : []);
  name = input.required(...ngDevMode ? [{ debugName: "name" }] : []);
  tabChanged($event) {
    if ($event !== 0) {
      const extension = this.tabs[$event - 1];
      this.language.set(extension);
      this.fileService.getFile(`examples/${this.name()}/show-case-${this.name()}/show-case-${this.name()}.component.${extension}`).subscribe((response) => {
        this.code.set(response);
      });
    }
  }
  static \u0275fac = function ShowCaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseComponent, selectors: [["doc-show-case"]], inputs: { name: [1, "name"] }, ngContentSelectors: _c0, decls: 8, vars: 2, consts: [[1, "my-0", "mb-3", "text-lg", "font-medium"], [1, "block", 3, "gap"], [3, "tabChanged", "selectedIndex"], ["label", "PREVIEW"], [3, "label", "gap"], [3, "outline", "code", "language"]], template: function ShowCaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "h5", 0);
      \u0275\u0275text(1, "Showcase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-card", 1)(3, "app-tab-group", 2);
      \u0275\u0275listener("tabChanged", function ShowCaseComponent_Template_app_tab_group_tabChanged_3_listener($event) {
        return ctx.tabChanged($event);
      });
      \u0275\u0275elementStart(4, "app-tab-panel", 3);
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(6, ShowCaseComponent_For_7_Template, 3, 7, "app-tab-panel", 4, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("gap", false);
      \u0275\u0275advance();
      \u0275\u0275property("selectedIndex", 0);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.tabs);
    }
  }, dependencies: [
    SourceCodeComponent,
    TabGroupComponent,
    TabPanelComponent,
    CardComponent,
    UpperCasePipe
  ], styles: ['\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n  }\n}\n.active-tab[_ngcontent-%COMP%] {\n  border-bottom-style: var(--tw-border-style);\n  border-bottom-width: 2px;\n  --tw-border-style: solid;\n  border-style: solid;\n  border-color: var(--color-primary);\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n\n\n/*# sourceMappingURL=show-case.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case", imports: [
      SourceCodeComponent,
      TabGroupComponent,
      TabPanelComponent,
      UpperCasePipe,
      CardComponent
    ], template: '<h5 class="my-0 mb-3 text-lg font-medium">Showcase</h5>\n<app-card class="block" [gap]="false">\n  <app-tab-group [selectedIndex]="0" (tabChanged)="tabChanged($event)">\n    <app-tab-panel label="PREVIEW">\n      <ng-content></ng-content>\n    </app-tab-panel>\n    @for (item of tabs; track $index) {\n      <app-tab-panel [label]="item | uppercase" [gap]="false">\n        <doc-source-code\n          [outline]="false"\n          [code]="code()"\n          [language]="language()"\n        ></doc-source-code>\n      </app-tab-panel>\n    }\n  </app-tab-group>\n</app-card>\n', styles: ['/* projects/docs/src/app/blueprint/show-case/show-case.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n  }\n}\n.active-tab {\n  border-bottom-style: var(--tw-border-style);\n  border-bottom-width: 2px;\n  --tw-border-style: solid;\n  border-style: solid;\n  border-color: var(--color-primary);\n}\n@property --tw-border-style { syntax: "*"; inherits: false; initial-value: solid; }\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=show-case.component.css.map */\n'] }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseComponent, { className: "ShowCaseComponent", filePath: "projects/docs/src/app/blueprint/show-case/show-case.component.ts", lineNumber: 21 });
})();

export {
  ShowCaseComponent
};
//# sourceMappingURL=chunk-3W43G4LV.js.map
