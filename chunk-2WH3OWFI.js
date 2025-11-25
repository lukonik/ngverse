import {
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-NMRQOH2N.js";
import {
  BlueprintPageComponent
} from "./chunk-WVO5Q45R.js";
import "./chunk-J4OMZXTK.js";
import "./chunk-QF5VCJ6S.js";
import "./chunk-GAYAR7LB.js";
import "./chunk-4UYB5JXN.js";
import "./chunk-RBCCWOK3.js";
import "./chunk-EPTODCGW.js";
import "./chunk-EKFZFPCR.js";
import "./chunk-QLTUCGP5.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-UGZKGHRZ.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/features/outside-click-page/outside-click-page.component.ts
var OutsideClickPageComponent = class _OutsideClickPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = this.sourceTreeBuilder.sourceTree("outside-click", (root) => [
    this.sourceTreeBuilder.folder(root, root, () => [...this.sourceTreeBuilder.directive(root, root)], true)
  ]);
  static \u0275fac = function OutsideClickPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OutsideClickPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OutsideClickPageComponent, selectors: [["doc-outside-click-page"]], decls: 2, vars: 3, consts: [[3, "subTitle", "label"], ["name", "outsideClick", 3, "sourceTree"]], template: function OutsideClickPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0);
      \u0275\u0275element(1, "doc-source-tree", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "Button component that wraps native html Button")("label", "Outside click");
      \u0275\u0275advance();
      \u0275\u0275property("sourceTree", ctx.sourceTree);
    }
  }, dependencies: [BlueprintPageComponent, SourceTreeComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OutsideClickPageComponent, [{
    type: Component,
    args: [{ selector: "doc-outside-click-page", imports: [BlueprintPageComponent, SourceTreeComponent], template: `<doc-blueprint-page
  [subTitle]="'Button component that wraps native html Button'"
  [label]="'Outside click'"
>
  <doc-source-tree
    name="outsideClick"
    [sourceTree]="sourceTree"
  ></doc-source-tree>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OutsideClickPageComponent, { className: "OutsideClickPageComponent", filePath: "projects/docs/src/app/features/outside-click-page/outside-click-page.component.ts", lineNumber: 12 });
})();
export {
  OutsideClickPageComponent
};
//# sourceMappingURL=chunk-2WH3OWFI.js.map
