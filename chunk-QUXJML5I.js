import {
  Directive,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-2NN34RDL.js";

// projects/ngverse/src/lib/ui/input/input.directive.ts
var InputDirective = class _InputDirective {
  static \u0275fac = function InputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _InputDirective, selectors: [["input", "appInput", ""]], hostAttrs: [1, "h-9", "focus-visible:outline-ring", "focus-visible:outline", "border", "border-border", "rounded-md", "py-1.5", "px-2.5", "bg-background", "[.ng-invalid.ng-touched]:border-danger", "disabled:bg-disabled", "disabled:text-disabled-foreground", "read-only:bg-disabled", "read-only:text-disabled-foreground"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputDirective, [{
    type: Directive,
    args: [{
      selector: "input[appInput]",
      host: {
        class: "h-9 focus-visible:outline-ring focus-visible:outline border border-border rounded-md py-1.5 px-2.5 bg-background [.ng-invalid.ng-touched]:border-danger disabled:bg-disabled disabled:text-disabled-foreground read-only:bg-disabled read-only:text-disabled-foreground"
      }
    }]
  }], null, null);
})();

export {
  InputDirective
};
//# sourceMappingURL=chunk-QUXJML5I.js.map
