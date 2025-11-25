import {
  AccordionBodyComponent,
  AccordionComponent,
  AccordionItemComponent
} from "./chunk-NLXPGKL3.js";
import {
  DividerComponent
} from "./chunk-MKNWGWE3.js";
import {
  RouterLink
} from "./chunk-VQYCA752.js";
import {
  CardComponent
} from "./chunk-RBCCWOK3.js";
import {
  NgClass
} from "./chunk-QLTUCGP5.js";
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
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UGZKGHRZ.js";

// projects/ngverse/src/lib/ui/accordion/accordion-header.component.ts
var _c0 = ["*"];
var AccordionHeaderComponent = class _AccordionHeaderComponent {
  static \u0275fac = function AccordionHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccordionHeaderComponent, selectors: [["app-accordion-header"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AccordionHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionHeaderComponent, [{
    type: Component,
    args: [{
      selector: "app-accordion-header",
      template: `<ng-content> </ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccordionHeaderComponent, { className: "AccordionHeaderComponent", filePath: "projects/ngverse/src/lib/ui/accordion/accordion-header.component.ts", lineNumber: 8 });
})();

// projects/docs/src/app/blueprint/api-info/api-inputs/api-inputs.component.ts
function ApiInputsComponent_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apiInput_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(apiInput_r1.selector);
  }
}
function ApiInputsComponent_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Form Bindable");
    \u0275\u0275elementEnd();
  }
}
function ApiInputsComponent_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apiInput_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", apiInput_r1.description, " ");
  }
}
function ApiInputsComponent_For_1_Conditional_10_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 13)(1, "th", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const apiInput_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", apiInput_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(apiInput_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(apiInput_r2.default);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", apiInput_r2.description, " ");
  }
}
function ApiInputsComponent_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Inputs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-card", 9)(3, "table", 10)(4, "thead", 11)(5, "tr")(6, "th", 12);
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 12);
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 12);
    \u0275\u0275text(11, "Default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 12);
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, ApiInputsComponent_For_1_Conditional_10_For_16_Template, 9, 4, "tr", 13, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const apiInput_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("gap", false);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(apiInput_r1.inputs);
  }
}
function ApiInputsComponent_For_1_Conditional_11_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 13)(1, "th", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const apiOutput_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", apiOutput_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(apiOutput_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", apiOutput_r3.description, " ");
  }
}
function ApiInputsComponent_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Outputs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-card", 9)(3, "table", 10)(4, "thead", 11)(5, "tr")(6, "th", 12);
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 12);
    \u0275\u0275text(9, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 12);
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ApiInputsComponent_For_1_Conditional_11_For_14_Template, 7, 3, "tr", 13, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const apiInput_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("gap", false);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(apiInput_r1.outputs);
  }
}
function ApiInputsComponent_For_1_Conditional_12_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 17)(1, "th", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const apiProp_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", apiProp_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(apiProp_r4.returnType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(apiProp_r4.propType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(apiProp_r4.description);
  }
}
function ApiInputsComponent_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Properties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-card", 9)(3, "table", 10)(4, "thead", 11)(5, "tr")(6, "th", 12);
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 12);
    \u0275\u0275text(9, "Return Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 12);
    \u0275\u0275text(11, "Property Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 12);
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, ApiInputsComponent_For_1_Conditional_12_For_16_Template, 9, 4, "tr", 17, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const apiInput_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("gap", false);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(apiInput_r1.properties);
  }
}
function ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" : ", method_r5.returnDescription);
  }
}
function ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" : ", param_r6.description);
  }
}
function ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Conditional_6_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" : ", field_r7.description);
  }
}
function ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Conditional_6_For_2_Conditional_5_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", field_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", field_r7.type, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r7.description ? 5 : -1);
  }
}
function ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 25);
    \u0275\u0275repeaterCreate(1, ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Conditional_6_For_2_Template, 6, 3, "li", 26, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(param_r6.fields);
  }
}
function ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Conditional_5_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Conditional_6_Template, 3, 0, "ul", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", param_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", param_r6.type, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(param_r6.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((param_r6.fields == null ? null : param_r6.fields.length) ? 6 : -1);
  }
}
function ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "Params:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 22);
    \u0275\u0275repeaterCreate(3, ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_For_4_Template, 7, 4, "li", 23, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(method_r5.params);
  }
}
function ApiInputsComponent_For_1_Conditional_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-accordion-item")(1, "app-accordion-header");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "app-accordion-body")(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_8_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ApiInputsComponent_For_1_Conditional_13_For_4_Conditional_9_Template, 5, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", method_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", method_r5.description, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Returns: ", method_r5.returnType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(method_r5.returnDescription ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((method_r5.params == null ? null : method_r5.params.length) ? 9 : -1);
  }
}
function ApiInputsComponent_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Methods");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-accordion", 18);
    \u0275\u0275repeaterCreate(3, ApiInputsComponent_For_1_Conditional_13_For_4_Template, 10, 5, "app-accordion-item", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apiInput_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("multi", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(apiInput_r1.methods);
  }
}
function ApiInputsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ApiInputsComponent_For_1_Conditional_7_Template, 2, 1, "span", 5);
    \u0275\u0275conditionalCreate(8, ApiInputsComponent_For_1_Conditional_8_Template, 2, 0, "span", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ApiInputsComponent_For_1_Conditional_9_Template, 2, 1, "p", 7);
    \u0275\u0275conditionalCreate(10, ApiInputsComponent_For_1_Conditional_10_Template, 17, 1);
    \u0275\u0275conditionalCreate(11, ApiInputsComponent_For_1_Conditional_11_Template, 15, 1);
    \u0275\u0275conditionalCreate(12, ApiInputsComponent_For_1_Conditional_12_Template, 17, 1);
    \u0275\u0275conditionalCreate(13, ApiInputsComponent_For_1_Conditional_13_Template, 5, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apiInput_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(apiInput_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", apiInput_r1.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(apiInput_r1.type);
    \u0275\u0275advance();
    \u0275\u0275conditional(apiInput_r1.selector ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(apiInput_r1.formBindable ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(apiInput_r1.description ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((apiInput_r1.inputs == null ? null : apiInput_r1.inputs.length) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((apiInput_r1.outputs == null ? null : apiInput_r1.outputs.length) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((apiInput_r1.properties == null ? null : apiInput_r1.properties.length) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((apiInput_r1.methods == null ? null : apiInput_r1.methods.length) ? 13 : -1);
  }
}
var VOID_API_RETURN_TYPE = "void";
var EMPTY_API_INPUT_DEFAULT_VALUE = "--";
var AUTO_GENERATED_API_DEFAULT_VALUE = "Auto Generated";
var ApiInputsComponent = class _ApiInputsComponent {
  apiInputs = input.required(...ngDevMode ? [{ debugName: "apiInputs" }] : []);
  static \u0275fac = function ApiInputsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiInputsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiInputsComponent, selectors: [["doc-api-inputs"]], inputs: { apiInputs: [1, "apiInputs"] }, decls: 2, vars: 0, consts: [[1, "mb-8"], [1, "mb-4"], [1, "pr-1", "font-medium"], [1, "mt-1", "flex", "items-center", "gap-1", "text-sm", "lg:mt-0", "lg:inline-flex"], [1, "rounded-xl", "px-2", "py-0.5", "text-white", "shadow-sm", 3, "ngClass"], [1, "rounded-xl", "bg-amber-600", "px-2", "py-0.5", "text-white", "shadow-sm"], [1, "rounded-xl", "bg-teal-600", "px-2", "py-0.5", "text-white", "shadow-sm"], [1, "mb-4", "text-sm", "text-gray-700", "dark:text-gray-100"], [1, "mb-2", "text-sm"], [1, "card", 3, "gap"], [1, "table"], [1, "head"], ["scope", "col", 1, "px-6", "py-3"], [1, "border-b"], ["scope", "row", 1, "px-6", "py-4", "font-medium", "whitespace-nowrap", "text-gray-900", "dark:text-white"], [1, "px-6", "py-4"], [1, "px-6", "py-4", "lowercase"], [1, "border-b", "bg-white"], [3, "multi"], [1, "pl-2", "text-sm", "font-normal", "text-gray-700", "italic", "dark:text-gray-100"], [1, "text-sm", "text-gray-700", "italic", "dark:text-gray-100"], [1, "mt-2"], [1, "mb-4", "pl-4"], [1, "my-2"], [1, "text-sm"], [1, "pl-6"], [1, "my-2", "list-disc"]], template: function ApiInputsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, ApiInputsComponent_For_1_Template, 14, 10, "div", 0, \u0275\u0275repeaterTrackByIndex);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.apiInputs());
    }
  }, dependencies: [
    NgClass,
    AccordionComponent,
    AccordionItemComponent,
    AccordionBodyComponent,
    AccordionHeaderComponent,
    CardComponent
  ], styles: ["\n\n@layer theme {\n  [_ngcontent-%COMP%]:root, \n   [_nghost-%COMP%] {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-teal-600: oklch(0.6 0.118 184.704);\n    --color-cyan-600: oklch(0.609 0.126 221.723);\n    --color-sky-600: oklch(0.588 0.158 241.966);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-200: oklch(0.929 0.013 255.508);\n    --color-slate-500: oklch(0.554 0.046 257.417);\n    --color-slate-700: oklch(0.372 0.044 257.287);\n    --color-gray-50: oklch(0.985 0.002 247.839);\n    --color-gray-200: oklch(0.928 0.006 264.531);\n    --color-gray-300: oklch(0.872 0.01 258.338);\n    --spacing: 0.25rem;\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n  }\n}\n.api-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.api-inputs[_ngcontent-%COMP%]   .api-inputs-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  width: 100%;\n}\n.api-inputs[_ngcontent-%COMP%]   .api-inputs-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.api-inputs[_ngcontent-%COMP%]   .api-inputs-body[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.api-inputs[_ngcontent-%COMP%]   .api-inputs-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.api-inputs[_ngcontent-%COMP%]   .api-inputs-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.component[_ngcontent-%COMP%] {\n  background-color: var(--color-cyan-600);\n}\n.directive[_ngcontent-%COMP%] {\n  background-color: var(--color-teal-600);\n}\n.service[_ngcontent-%COMP%] {\n  background-color: var(--color-sky-600);\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  font-size: var(--text-sm);\n  line-height: var(--tw-leading, var(--text-sm--line-height));\n  color: var(--color-slate-500);\n}\n.table[_ngcontent-%COMP%]:where(:dir(rtl), [dir=rtl], [dir=rtl] *) {\n  text-align: right;\n}\n@media (prefers-color-scheme: dark) {\n  .table[_ngcontent-%COMP%] {\n    color: var(--color-gray-200);\n  }\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-gray-300);\n}\n.head[_ngcontent-%COMP%] {\n  background-color: var(--color-gray-50);\n  font-size: var(--text-xs);\n  line-height: var(--tw-leading, var(--text-xs--line-height));\n  color: var(--color-slate-700);\n  text-transform: uppercase;\n}\n@media (prefers-color-scheme: dark) {\n  .head[_ngcontent-%COMP%] {\n    background-color: var(--color-slate-700);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .head[_ngcontent-%COMP%] {\n    color: var(--color-slate-200);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  margin-bottom: calc(var(--spacing) * 10);\n  display: block;\n  overflow-x: auto;\n}\n\n\n/*# sourceMappingURL=api-inputs.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiInputsComponent, [{
    type: Component,
    args: [{ selector: "doc-api-inputs", imports: [
      NgClass,
      AccordionComponent,
      AccordionItemComponent,
      AccordionBodyComponent,
      AccordionHeaderComponent,
      CardComponent
    ], template: '@for (apiInput of apiInputs(); track $index) {\n  <div class="mb-8">\n    <h4 class="mb-4">\n      <span class="pr-1 font-medium">{{ apiInput.name }}</span>\n      <div class="mt-1 flex items-center gap-1 text-sm lg:mt-0 lg:inline-flex">\n        <span\n          [ngClass]="apiInput.type"\n          class="rounded-xl px-2 py-0.5 text-white shadow-sm"\n          >{{ apiInput.type }}</span\n        >\n        @if (apiInput.selector) {\n          <span\n            class="rounded-xl bg-amber-600 px-2 py-0.5 text-white shadow-sm"\n            >{{ apiInput.selector }}</span\n          >\n        }\n        @if (apiInput.formBindable) {\n          <span class="rounded-xl bg-teal-600 px-2 py-0.5 text-white shadow-sm"\n            >Form Bindable</span\n          >\n        }\n      </div>\n    </h4>\n    @if (apiInput.description) {\n      <p class="mb-4 text-sm text-gray-700 dark:text-gray-100">\n        {{ apiInput.description }}\n      </p>\n    }\n    @if (apiInput.inputs?.length) {\n      <p class="mb-2 text-sm">Inputs</p>\n      <app-card class="card" [gap]="false">\n        <table class="table">\n          <thead class="head">\n            <tr>\n              <th scope="col" class="px-6 py-3">Name</th>\n              <th scope="col" class="px-6 py-3">Type</th>\n              <th scope="col" class="px-6 py-3">Default</th>\n\n              <th scope="col" class="px-6 py-3">Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (apiInput of apiInput.inputs; track $index) {\n              <tr class="border-b">\n                <th\n                  scope="row"\n                  class="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"\n                >\n                  {{ apiInput.name }}\n                </th>\n                <td class="px-6 py-4">{{ apiInput.type }}</td>\n                <td class="px-6 py-4">{{ apiInput.default }}</td>\n\n                <td class="px-6 py-4 lowercase">\n                  {{ apiInput.description }}\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </app-card>\n    }\n    @if (apiInput.outputs?.length) {\n      <p class="mb-2 text-sm">Outputs</p>\n\n      <app-card class="card" [gap]="false">\n        <table class="table">\n          <thead class="head">\n            <tr>\n              <th scope="col" class="px-6 py-3">Name</th>\n              <th scope="col" class="px-6 py-3">Value</th>\n              <th scope="col" class="px-6 py-3">Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (apiOutput of apiInput.outputs; track $index) {\n              <tr class="border-b">\n                <th\n                  scope="row"\n                  class="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"\n                >\n                  {{ apiOutput.name }}\n                </th>\n                <td class="px-6 py-4">{{ apiOutput.value }}</td>\n                <td class="px-6 py-4 lowercase">\n                  {{ apiOutput.description }}\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </app-card>\n    }\n    @if (apiInput.properties?.length) {\n      <p class="mb-2 text-sm">Properties</p>\n\n      <app-card [gap]="false" class="card">\n        <table class="table">\n          <thead class="head">\n            <tr>\n              <th scope="col" class="px-6 py-3">Name</th>\n              <th scope="col" class="px-6 py-3">Return Type</th>\n              <th scope="col" class="px-6 py-3">Property Type</th>\n              <th scope="col" class="px-6 py-3">Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (apiProp of apiInput.properties; track $index) {\n              <tr class="border-b bg-white">\n                <th\n                  scope="row"\n                  class="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"\n                >\n                  {{ apiProp.name }}\n                </th>\n                <td class="px-6 py-4">{{ apiProp.returnType }}</td>\n                <td class="px-6 py-4">{{ apiProp.propType }}</td>\n                <td class="px-6 py-4 lowercase">{{ apiProp.description }}</td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </app-card>\n    }\n    @if (apiInput.methods?.length) {\n      <p class="mb-2 text-sm">Methods</p>\n      <app-accordion [multi]="true">\n        @for (method of apiInput.methods; track $index) {\n          <app-accordion-item>\n            <app-accordion-header>\n              {{ method.name }}\n              <span\n                class="pl-2 text-sm font-normal text-gray-700 italic dark:text-gray-100"\n                >({{ method.description }})</span\n              >\n            </app-accordion-header>\n            <app-accordion-body>\n              <p>\n                Returns: {{ method.returnType }}\n                @if (method.returnDescription) {\n                  <span class="text-sm text-gray-700 italic dark:text-gray-100">\n                    : {{ method.returnDescription }}</span\n                  >\n                }\n              </p>\n              @if (method.params?.length) {\n                <p class="mt-2">Params:</p>\n                <ul class="mb-4 pl-4">\n                  @for (param of method.params; track $index) {\n                    <li class="my-2">\n                      <p>\n                        {{ param.name }}\n                        <span class="text-sm">({{ param.type }})</span>\n                        @if (param.description) {\n                          <span\n                            class="text-sm text-gray-700 italic dark:text-gray-100"\n                          >\n                            : {{ param.description }}</span\n                          >\n                        }\n                      </p>\n                      @if (param.fields?.length) {\n                        <ul class="pl-6">\n                          @for (field of param.fields; track $index) {\n                            <li class="my-2 list-disc">\n                              <span\n                                >{{ field.name }}\n                                <span class="text-sm">({{ field.type }})</span>\n                                @if (field.description) {\n                                  <span\n                                    class="text-sm text-gray-700 italic dark:text-gray-100"\n                                  >\n                                    : {{ field.description }}</span\n                                  >\n                                }\n                              </span>\n                            </li>\n                          }\n                        </ul>\n                      }\n                    </li>\n                  }\n                </ul>\n              }\n            </app-accordion-body>\n          </app-accordion-item>\n        }\n      </app-accordion>\n    }\n  </div>\n}\n', styles: ["/* projects/docs/src/app/blueprint/api-info/api-inputs/api-inputs.component.css */\n@layer theme {\n  :root,\n  :host {\n    --color-amber-500: oklch(0.769 0.188 70.08);\n    --color-teal-600: oklch(0.6 0.118 184.704);\n    --color-cyan-600: oklch(0.609 0.126 221.723);\n    --color-sky-600: oklch(0.588 0.158 241.966);\n    --color-blue-500: oklch(0.623 0.214 259.815);\n    --color-slate-200: oklch(0.929 0.013 255.508);\n    --color-slate-500: oklch(0.554 0.046 257.417);\n    --color-slate-700: oklch(0.372 0.044 257.287);\n    --color-gray-50: oklch(0.985 0.002 247.839);\n    --color-gray-200: oklch(0.928 0.006 264.531);\n    --color-gray-300: oklch(0.872 0.01 258.338);\n    --spacing: 0.25rem;\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n  }\n}\n.api-inputs {\n  width: 100%;\n  overflow-x: auto;\n}\n.api-inputs .api-inputs-header {\n  display: flex;\n  gap: 12px;\n  width: 100%;\n}\n.api-inputs .api-inputs-header div {\n  width: 25%;\n}\n.api-inputs .api-inputs-body {\n  width: 100%;\n}\n.api-inputs .api-inputs-row {\n  display: flex;\n  gap: 12px;\n}\n.api-inputs .api-inputs-row div {\n  width: 25%;\n}\n.component {\n  background-color: var(--color-cyan-600);\n}\n.directive {\n  background-color: var(--color-teal-600);\n}\n.service {\n  background-color: var(--color-sky-600);\n}\n.table {\n  width: 100%;\n  text-align: left;\n  font-size: var(--text-sm);\n  line-height: var(--tw-leading, var(--text-sm--line-height));\n  color: var(--color-slate-500);\n}\n.table:where(:dir(rtl), [dir=rtl], [dir=rtl] *) {\n  text-align: right;\n}\n@media (prefers-color-scheme: dark) {\n  .table {\n    color: var(--color-gray-200);\n  }\n}\n.table td,\n.table th {\n  border-bottom: 1px solid var(--color-gray-300);\n}\n.head {\n  background-color: var(--color-gray-50);\n  font-size: var(--text-xs);\n  line-height: var(--tw-leading, var(--text-xs--line-height));\n  color: var(--color-slate-700);\n  text-transform: uppercase;\n}\n@media (prefers-color-scheme: dark) {\n  .head {\n    background-color: var(--color-slate-700);\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .head {\n    color: var(--color-slate-200);\n  }\n}\n.card {\n  margin-bottom: calc(var(--spacing) * 10);\n  display: block;\n  overflow-x: auto;\n}\n/*! tailwindcss v4.0.8 | MIT License | https://tailwindcss.com */\n/*# sourceMappingURL=api-inputs.component.css.map */\n"] }]
  }], null, { apiInputs: [{ type: Input, args: [{ isSignal: true, alias: "apiInputs", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiInputsComponent, { className: "ApiInputsComponent", filePath: "projects/docs/src/app/blueprint/api-info/api-inputs/api-inputs.component.ts", lineNumber: 87 });
})();

// projects/docs/src/app/blueprint/api-info/api-info.component.ts
var _c02 = [[["doc-api-description"]], [["doc-api-inputs"]]];
var _c1 = ["doc-api-description", "doc-api-inputs"];
var _c2 = () => ["/doc/theming"];
function ApiInfoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, " Read the ");
    \u0275\u0275elementStart(2, "a", 5);
    \u0275\u0275text(3, "Article ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const api_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", api_r1.articleLink, \u0275\u0275sanitizeUrl);
  }
}
function ApiInfoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, " WAI-ARIA ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const api_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("href", api_r1.ariaLink, \u0275\u0275sanitizeUrl);
  }
}
function ApiInfoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, " Relies on ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const api_r1 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("href", api_r1.reliesOn, \u0275\u0275sanitizeUrl);
  }
}
function ApiInfoComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const api_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("WAI-ARIA: ", api_r2.ariaDescription);
  }
}
function ApiInfoComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, " The styles can be found in the ");
    \u0275\u0275elementStart(2, "a", 7);
    \u0275\u0275text(3, "ngverse.css");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " file. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c2));
  }
}
function ApiInfoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ApiInfoComponent_Conditional_8_Conditional_0_Template, 2, 1, "p", 0);
    \u0275\u0275conditionalCreate(1, ApiInfoComponent_Conditional_8_Conditional_1_Template, 5, 2, "p", 0);
    \u0275\u0275projection(2);
    \u0275\u0275projection(3, 1);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "doc-api-inputs", 6);
  }
  if (rf & 2) {
    const api_r2 = ctx;
    \u0275\u0275conditional(api_r2.ariaDescription ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(api_r2.stylesInGlobal ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(api_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("apiInputs", api_r2.entities);
  }
}
var ApiInfoComponent = class _ApiInfoComponent {
  apiInfo = input.required(...ngDevMode ? [{ debugName: "apiInfo" }] : []);
  static \u0275fac = function ApiInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiInfoComponent, selectors: [["doc-api-info"]], inputs: { apiInfo: [1, "apiInfo"] }, ngContentSelectors: _c1, decls: 9, vars: 5, consts: [[1, "mb-6"], [1, "my-0", "pb-2", "text-lg", "font-medium"], [1, "flex", "items-center", "gap-2"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-1", "rounded-xl", "bg-slate-200", "px-2", "py-1", "text-xs", 3, "href"], [1, "mt-2", "mb-6"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-1", "underline", 3, "href"], [3, "apiInputs"], [1, "underline", 3, "routerLink"]], template: function ApiInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275declareLet(0);
      \u0275\u0275conditionalCreate(1, ApiInfoComponent_Conditional_1_Template, 4, 1, "p", 0);
      \u0275\u0275elementStart(2, "h5", 1);
      \u0275\u0275text(3, "API");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275conditionalCreate(5, ApiInfoComponent_Conditional_5_Template, 2, 1, "a", 3);
      \u0275\u0275conditionalCreate(6, ApiInfoComponent_Conditional_6_Template, 2, 1, "a", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "app-divider", 4);
      \u0275\u0275conditionalCreate(8, ApiInfoComponent_Conditional_8_Template, 7, 4);
    }
    if (rf & 2) {
      let tmp_4_0;
      const api_r3 = \u0275\u0275storeLet(ctx.apiInfo());
      \u0275\u0275advance();
      \u0275\u0275conditional(api_r3.articleLink ? 1 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(api_r3.ariaLink ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(api_r3.reliesOn ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_4_0 = api_r3) ? 8 : -1, tmp_4_0);
    }
  }, dependencies: [ApiInputsComponent, RouterLink, DividerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiInfoComponent, [{
    type: Component,
    args: [{ selector: "doc-api-info", imports: [ApiInputsComponent, RouterLink, DividerComponent], template: `@let api = apiInfo();

@if (api.articleLink) {
  <p class="mb-6">
    Read the
    <a
      class="inline-flex items-center gap-1 underline"
      [href]="api.articleLink"
      target="_blank"
      >Article
    </a>
  </p>
}

<h5 class="my-0 pb-2 text-lg font-medium">API</h5>
<div class="flex items-center gap-2">
  @if (api.ariaLink) {
    <a
      [href]="api.ariaLink"
      target="_blank"
      class="inline-flex items-center gap-1 rounded-xl bg-slate-200 px-2 py-1 text-xs"
    >
      WAI-ARIA
    </a>
  }
  @if (api.reliesOn) {
    <a
      [href]="api.reliesOn"
      target="_blank"
      class="inline-flex items-center gap-1 rounded-xl bg-slate-200 px-2 py-1 text-xs"
    >
      Relies on
    </a>
  }
</div>

<app-divider class="mt-2 mb-6"></app-divider>
@if (api; as api) {
  @if (api.ariaDescription) {
    <p class="mb-6">WAI-ARIA: {{ api.ariaDescription }}</p>
  }
  @if (api.stylesInGlobal) {
    <p class="mb-6">
      The styles can be found in the
      <a [routerLink]="['/doc/theming']" class="underline">ngverse.css</a>
      file.
    </p>
  }
  <ng-content select="doc-api-description"></ng-content>
  <ng-content select="doc-api-inputs"></ng-content>

  <p>{{ api.description }}</p>

  <doc-api-inputs [apiInputs]="api.entities"></doc-api-inputs>
}
` }]
  }], null, { apiInfo: [{ type: Input, args: [{ isSignal: true, alias: "apiInfo", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiInfoComponent, { className: "ApiInfoComponent", filePath: "projects/docs/src/app/blueprint/api-info/api-info.component.ts", lineNumber: 23 });
})();

export {
  AccordionHeaderComponent,
  VOID_API_RETURN_TYPE,
  EMPTY_API_INPUT_DEFAULT_VALUE,
  AUTO_GENERATED_API_DEFAULT_VALUE,
  ApiInfoComponent
};
//# sourceMappingURL=chunk-HUMT7RIH.js.map
