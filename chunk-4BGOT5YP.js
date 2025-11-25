import {
  CommandInstallationComponent
} from "./chunk-JIB3DNZG.js";
import {
  ShowCaseComponent
} from "./chunk-FNG7BR3D.js";
import "./chunk-EEYNYO2D.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import "./chunk-4XRX3M6E.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-GOCNYIRL.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-MTAP3RFR.js";
import "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/datepicker/show-case-datepicker/show-case-datepicker.component.ts
var ShowCaseDatepickerComponent = class _ShowCaseDatepickerComponent {
  static \u0275fac = function ShowCaseDatepickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseDatepickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseDatepickerComponent, selectors: [["doc-show-case-datepicker"]], decls: 2, vars: 0, template: function ShowCaseDatepickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "show-case-datepicker works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseDatepickerComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-datepicker", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>show-case-datepicker works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseDatepickerComponent, { className: "ShowCaseDatepickerComponent", filePath: "projects/docs/src/app/examples/datepicker/show-case-datepicker/show-case-datepicker.component.ts", lineNumber: 10 });
})();

// projects/docs/src/app/pages/datepicker-page/datepicker-page.component.ts
var DatepickerPageComponent = class _DatepickerPageComponent {
  static \u0275fac = function DatepickerPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatepickerPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatepickerPageComponent, selectors: [["doc-datepicker-page"]], decls: 4, vars: 2, consts: [[3, "subTitle", "label"], ["name", "datepicker"], ["type", "component", "name", "datepicker"]], template: function DatepickerPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-datepicker");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "Datepicker")("label", "Datepicker");
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseDatepickerComponent,
    CommandInstallationComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatepickerPageComponent, [{
    type: Component,
    args: [{ selector: "doc-datepicker-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseDatepickerComponent,
      CommandInstallationComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<doc-blueprint-page [subTitle]="'Datepicker'" [label]="'Datepicker'">
  <doc-show-case name="datepicker">
    <doc-show-case-datepicker></doc-show-case-datepicker>
  </doc-show-case>
  <doc-command-installation type="component" name="datepicker">
  </doc-command-installation>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatepickerPageComponent, { className: "DatepickerPageComponent", filePath: "projects/docs/src/app/pages/datepicker-page/datepicker-page.component.ts", lineNumber: 19 });
})();
export {
  DatepickerPageComponent
};
//# sourceMappingURL=chunk-4BGOT5YP.js.map
