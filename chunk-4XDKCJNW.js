import {
  RouterLink
} from "./chunk-4YTCSZ5T.js";
import {
  SourceCodeComponent
} from "./chunk-633NCXCE.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2NN34RDL.js";

// projects/docs/src/app/blueprint/prerequisites/prerequisites.component.ts
var _c0 = (a0) => ["../", a0];
function PrerequisitesComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "doc-source-code", 4);
  }
  if (rf & 2) {
    const dep_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, dep_r1.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dep_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("surface", true)("code", ctx_r1.getCode(dep_r1));
  }
}
function PrerequisitesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, PrerequisitesComponent_Conditional_2_For_2_Template, 4, 6, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx);
  }
}
var PrerequisitesComponent = class _PrerequisitesComponent {
  // preps = input<Prerequisite[]>();
  name = input(...ngDevMode ? [void 0, { debugName: "name" }] : []);
  preprsAuto = input(...ngDevMode ? [void 0, { debugName: "preprsAuto" }] : []);
  getCode(dep) {
    const name = dep.name;
    return `ng g ngverse:ui ${name}`;
  }
  static \u0275fac = function PrerequisitesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrerequisitesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrerequisitesComponent, selectors: [["doc-prerequisites"]], inputs: { name: [1, "name"], preprsAuto: [1, "preprsAuto"] }, decls: 3, vars: 1, consts: [[1, "m-0", "text-xl", "font-normal"], [1, "mt-4", "flex", "flex-col", "gap-2"], [1, "mt-2"], [1, "underline", 3, "routerLink"], ["language", "bash", 3, "surface", "code"]], template: function PrerequisitesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h4", 0);
      \u0275\u0275text(1, "Prerequisites");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(2, PrerequisitesComponent_Conditional_2_Template, 4, 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_0_0 = ctx.preprsAuto()) ? 2 : -1, tmp_0_0);
    }
  }, dependencies: [SourceCodeComponent, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrerequisitesComponent, [{
    type: Component,
    args: [{ selector: "doc-prerequisites", imports: [SourceCodeComponent, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h4 class="m-0 text-xl font-normal">Prerequisites</h4>

@if (preprsAuto(); as prepsAuto) {
  <div class="mt-4 flex flex-col gap-2">
    @for (dep of prepsAuto; track $index) {
      <div>
        <a class="underline" [routerLink]="['../', dep.name]">{{
          dep.label
        }}</a>
      </div>
      <doc-source-code
        [surface]="true"
        [code]="getCode(dep)"
        language="bash"
      ></doc-source-code>
    }
  </div>
  <p class="mt-2"></p>
}
` }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], preprsAuto: [{ type: Input, args: [{ isSignal: true, alias: "preprsAuto", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrerequisitesComponent, { className: "PrerequisitesComponent", filePath: "projects/docs/src/app/blueprint/prerequisites/prerequisites.component.ts", lineNumber: 15 });
})();

export {
  PrerequisitesComponent
};
//# sourceMappingURL=chunk-4XDKCJNW.js.map
