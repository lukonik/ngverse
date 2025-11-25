import {
  TabGroupComponent,
  TabPanelComponent
} from "./chunk-FVG5D4KT.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import {
  CardComponent,
  FileService,
  SourceCodeComponent
} from "./chunk-633NCXCE.js";
import {
  UpperCasePipe
} from "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2NN34RDL.js";

// projects/docs/src/app/blueprint/examples/examples.component.ts
var _c0 = [[["doc-example-item"]]];
var _c1 = ["doc-example-item"];
var ExamplesComponent = class _ExamplesComponent {
  static \u0275fac = function ExamplesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExamplesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamplesComponent, selectors: [["doc-examples"]], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "my-0", "mb-3", "text-lg", "font-medium", "capitalize"], [1, "flex", "flex-col", "gap-20"]], template: function ExamplesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275domElementStart(0, "h5", 0);
      \u0275\u0275text(1, "Examples");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(2, "div", 1);
      \u0275\u0275projection(3);
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamplesComponent, [{
    type: Component,
    args: [{ selector: "doc-examples", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '<h5 class="my-0 mb-3 text-lg font-medium capitalize">Examples</h5>\n\n<div class="flex flex-col gap-20">\n  <ng-content select="doc-example-item"></ng-content>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/docs/src/app/blueprint/examples/examples.component.ts", lineNumber: 10 });
})();

// projects/docs/src/app/blueprint/examples/example-item/example-item.component.ts
var _c02 = ["*"];
function ExampleItemComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tab-panel", 5);
    \u0275\u0275pipe(1, "uppercase");
    \u0275\u0275element(2, "doc-source-code", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 5, item_r1))("gap", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("outline", false)("code", ctx_r1.code())("language", "ts");
  }
}
var ExampleItemComponent = class _ExampleItemComponent {
  examples = inject(ExamplesComponent);
  tabs = ["Code"];
  fileService = inject(FileService);
  code = signal("", ...ngDevMode ? [{ debugName: "code" }] : []);
  name = input.required(...ngDevMode ? [{ debugName: "name" }] : []);
  blueprintPage = inject(BlueprintPageComponent);
  label = input(...ngDevMode ? [void 0, { debugName: "label" }] : []);
  displayName = computed(() => this.label() ? this.label() : this.name(), ...ngDevMode ? [{ debugName: "displayName" }] : []);
  tabChanged($event) {
    if ($event !== 0) {
      this.fileService.getFile(`examples/${this.blueprintPage.key()}/example-${this.blueprintPage.key()}-${this.name()}.component.ts`).subscribe((response) => {
        this.code.set(response);
      });
    }
  }
  static \u0275fac = function ExampleItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExampleItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleItemComponent, selectors: [["doc-example-item"]], inputs: { name: [1, "name"], label: [1, "label"] }, ngContentSelectors: _c02, decls: 9, vars: 3, consts: [[1, "my-0", "mb-3", "text-lg", "capitalize"], [1, "block", 3, "gap"], [3, "tabChanged", "selectedIndex"], ["label", "PREVIEW"], [1, "flex", "h-[300px]", "items-center", "justify-center", "p-10"], [3, "label", "gap"], [3, "outline", "code", "language"]], template: function ExampleItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "h5", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-card", 1)(3, "app-tab-group", 2);
      \u0275\u0275listener("tabChanged", function ExampleItemComponent_Template_app_tab_group_tabChanged_3_listener($event) {
        return ctx.tabChanged($event);
      });
      \u0275\u0275elementStart(4, "app-tab-panel", 3)(5, "div", 4);
      \u0275\u0275projection(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(7, ExampleItemComponent_For_8_Template, 3, 7, "app-tab-panel", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.displayName());
      \u0275\u0275advance();
      \u0275\u0275property("gap", false);
      \u0275\u0275advance();
      \u0275\u0275property("selectedIndex", 0);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.tabs);
    }
  }, dependencies: [
    CardComponent,
    TabGroupComponent,
    TabPanelComponent,
    SourceCodeComponent,
    UpperCasePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleItemComponent, [{
    type: Component,
    args: [{ selector: "doc-example-item", imports: [
      CardComponent,
      TabGroupComponent,
      TabPanelComponent,
      UpperCasePipe,
      SourceCodeComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h5 class="my-0 mb-3 text-lg capitalize">{{ displayName() }}</h5>
<app-card class="block" [gap]="false">
  <app-tab-group [selectedIndex]="0" (tabChanged)="tabChanged($event)">
    <app-tab-panel label="PREVIEW">
      <div class="flex h-[300px] items-center justify-center p-10">
        <ng-content></ng-content>
      </div>
    </app-tab-panel>
    @for (item of tabs; track $index) {
      <app-tab-panel [label]="item | uppercase" [gap]="false">
        <doc-source-code
          [outline]="false"
          [code]="code()"
          [language]="'ts'"
        ></doc-source-code>
      </app-tab-panel>
    }
  </app-tab-group>
</app-card>
` }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleItemComponent, { className: "ExampleItemComponent", filePath: "projects/docs/src/app/blueprint/examples/example-item/example-item.component.ts", lineNumber: 31 });
})();

// projects/docs/src/app/blueprint/preview/preview.component.ts
var _c03 = ["*"];
function PreviewComponent_For_6_Template(rf, ctx) {
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
    \u0275\u0275property("outline", false)("code", ctx_r1.code())("language", "ts");
  }
}
var PreviewComponent = class _PreviewComponent {
  tabs = ["Code"];
  fileService = inject(FileService);
  code = signal("", ...ngDevMode ? [{ debugName: "code" }] : []);
  blueprintPage = inject(BlueprintPageComponent);
  tabChanged($event) {
    if ($event !== 0) {
      this.fileService.getFile(`examples/${this.blueprintPage.key()}/preview-${this.blueprintPage.key()}.component.ts`).subscribe((response) => {
        this.code.set(response);
      });
    }
  }
  static \u0275fac = function PreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreviewComponent, selectors: [["doc-preview"]], ngContentSelectors: _c03, decls: 7, vars: 2, consts: [[1, "block", 3, "gap"], [3, "tabChanged", "selectedIndex"], ["label", "PREVIEW"], [1, "flex", "h-[300px]", "items-center", "justify-center", "p-10"], [3, "label", "gap"], [3, "outline", "code", "language"]], template: function PreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "app-card", 0)(1, "app-tab-group", 1);
      \u0275\u0275listener("tabChanged", function PreviewComponent_Template_app_tab_group_tabChanged_1_listener($event) {
        return ctx.tabChanged($event);
      });
      \u0275\u0275elementStart(2, "app-tab-panel", 2)(3, "div", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(5, PreviewComponent_For_6_Template, 3, 7, "app-tab-panel", 4, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("gap", false);
      \u0275\u0275advance();
      \u0275\u0275property("selectedIndex", 0);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.tabs);
    }
  }, dependencies: [
    CardComponent,
    TabGroupComponent,
    TabPanelComponent,
    SourceCodeComponent,
    UpperCasePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewComponent, [{
    type: Component,
    args: [{ selector: "doc-preview", imports: [
      CardComponent,
      TabGroupComponent,
      TabPanelComponent,
      UpperCasePipe,
      SourceCodeComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-card class="block" [gap]="false">
  <app-tab-group [selectedIndex]="0" (tabChanged)="tabChanged($event)">
    <app-tab-panel label="PREVIEW">
      <div class="flex h-[300px] items-center justify-center p-10">
        <ng-content></ng-content>
      </div>
    </app-tab-panel>
    @for (item of tabs; track $index) {
      <app-tab-panel [label]="item | uppercase" [gap]="false">
        <doc-source-code
          [outline]="false"
          [code]="code()"
          [language]="'ts'"
        ></doc-source-code>
      </app-tab-panel>
    }
  </app-tab-group>
</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreviewComponent, { className: "PreviewComponent", filePath: "projects/docs/src/app/blueprint/preview/preview.component.ts", lineNumber: 28 });
})();

export {
  ExamplesComponent,
  ExampleItemComponent,
  PreviewComponent
};
//# sourceMappingURL=chunk-LIQZACRZ.js.map
