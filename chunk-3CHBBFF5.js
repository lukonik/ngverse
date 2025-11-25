import {
  ApiDescriptionComponent
} from "./chunk-ECUXDSH5.js";
import {
  PrerequisitesComponent
} from "./chunk-NQLNCJ2F.js";
import {
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE
} from "./chunk-HUMT7RIH.js";
import "./chunk-NLXPGKL3.js";
import {
  CommandInstallationComponent
} from "./chunk-6YZNQOOO.js";
import {
  ShowCaseComponent
} from "./chunk-3W43G4LV.js";
import "./chunk-Y4J6H3UA.js";
import {
  PopoverComponent,
  PopoverOriginDirective,
  SourceTreeBuilder,
  SourceTreeComponent,
  toSignal
} from "./chunk-NMRQOH2N.js";
import {
  BlueprintPageComponent
} from "./chunk-WVO5Q45R.js";
import {
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-J4OMZXTK.js";
import {
  ActiveDescendantKeyManager
} from "./chunk-QF5VCJ6S.js";
import "./chunk-MKNWGWE3.js";
import {
  RouterLink
} from "./chunk-VQYCA752.js";
import "./chunk-GAYAR7LB.js";
import {
  _IdGenerator
} from "./chunk-4UYB5JXN.js";
import "./chunk-JX5YVH27.js";
import "./chunk-RBCCWOK3.js";
import "./chunk-EPTODCGW.js";
import {
  FontIconComponent
} from "./chunk-EKFZFPCR.js";
import {
  NgTemplateOutlet
} from "./chunk-QLTUCGP5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  Injector,
  Input,
  TemplateRef,
  ViewChild,
  computed,
  contentChild,
  contentChildren,
  forwardRef,
  inject,
  input,
  map,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-UGZKGHRZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/multi-select/multi-option-group-label.component.ts
var _c0 = ["*"];
var MultiOptionGroupLabelComponent = class _MultiOptionGroupLabelComponent {
  static \u0275fac = function MultiOptionGroupLabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiOptionGroupLabelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultiOptionGroupLabelComponent, selectors: [["app-multi-option-group-label"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MultiOptionGroupLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiOptionGroupLabelComponent, [{
    type: Component,
    args: [{
      selector: "app-multi-option-group-label",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiOptionGroupLabelComponent, { className: "MultiOptionGroupLabelComponent", filePath: "projects/ngverse/src/lib/ui/multi-select/multi-option-group-label.component.ts", lineNumber: 8 });
})();

// projects/ngverse/src/lib/ui/multi-select/multi-option-group.component.ts
var _c02 = [[["app-multi-option-group-label"]], [["app-multi-option"]]];
var _c1 = ["app-multi-option-group-label", "app-multi-option"];
var MultiOptionGroupComponent = class _MultiOptionGroupComponent {
  label = input(...ngDevMode ? [void 0, { debugName: "label" }] : []);
  static \u0275fac = function MultiOptionGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiOptionGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultiOptionGroupComponent, selectors: [["app-multi-option-group"]], hostAttrs: [1, "block"], inputs: { label: [1, "label"] }, ngContentSelectors: _c1, decls: 4, vars: 1, consts: [[1, "px-3", "py-2.5", "text-sm"]], template: function MultiOptionGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275projection(2);
      \u0275\u0275domElementEnd();
      \u0275\u0275projection(3, 1);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.label(), " ");
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiOptionGroupComponent, [{
    type: Component,
    args: [{
      selector: "app-multi-option-group",
      imports: [],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="px-3 py-2.5 text-sm">
      {{ label() }}
      <ng-content select="app-multi-option-group-label"> </ng-content>
    </div>
    <ng-content select="app-multi-option"></ng-content>
  `,
      host: {
        class: "block"
      }
    }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiOptionGroupComponent, { className: "MultiOptionGroupComponent", filePath: "projects/ngverse/src/lib/ui/multi-select/multi-option-group.component.ts", lineNumber: 18 });
})();

// projects/ngverse/src/lib/ui/multi-select/multi-option-content.directive.ts
var MultiOptionContentDirective = class _MultiOptionContentDirective {
  _element = inject(ElementRef).nativeElement;
  get content() {
    return this._element.textContent;
  }
  static \u0275fac = function MultiOptionContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiOptionContentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _MultiOptionContentDirective, selectors: [["", "appMultiOptionContent", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiOptionContentDirective, [{
    type: Directive,
    args: [{
      selector: "[appMultiOptionContent]"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/multi-select/multi-select-label.directive.ts
var MultiSelectLabelDirective = class _MultiSelectLabelDirective {
  ref = inject(TemplateRef);
  static \u0275fac = function MultiSelectLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelectLabelDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _MultiSelectLabelDirective, selectors: [["ng-template", "appMultiSelectLabel", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectLabelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[appMultiSelectLabel]"
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/multi-select/multi-select.component.ts
var _c03 = ["optionsList"];
var _c12 = [[["app-multi-option-group"]], [["app-multi-option"]]];
var _c2 = ["app-multi-option-group", "app-multi-option"];
var _c3 = (a0) => ({ $implicit: a0 });
function MultiSelectComponent_Conditional_3_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelectComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectComponent_Conditional_3_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx.ref)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, ctx_r1.selectedOptions()));
  }
}
function MultiSelectComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const selectedOptionsLabel_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", selectedOptionsLabel_r3, " ");
  }
}
function MultiSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MultiSelectComponent_Conditional_3_Conditional_0_Template, 1, 4, "ng-container")(1, MultiSelectComponent_Conditional_3_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.selectLabel()) ? 0 : 1, tmp_3_0);
  }
}
function MultiSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.placeholder(), " ");
  }
}
function MultiSelectComponent_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyText());
  }
}
function MultiSelectComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, MultiSelectComponent_ng_template_9_Conditional_0_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(1, "div", 8, 1);
    \u0275\u0275listener("keydown", function MultiSelectComponent_ng_template_9_Template_div_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275projection(3);
    \u0275\u0275projection(4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.options().length && ctx_r1.emptyText() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-activedescendant", ctx_r1.activeDescendantId());
  }
}
var MultiSelectComponent = class _MultiSelectComponent {
  placeholder = input(...ngDevMode ? [void 0, { debugName: "placeholder" }] : []);
  emptyText = input(...ngDevMode ? [void 0, { debugName: "emptyText" }] : []);
  selectLabel = contentChild(MultiSelectLabelDirective, ...ngDevMode ? [{ debugName: "selectLabel" }] : []);
  options = contentChildren(forwardRef(() => MultiOptionComponent), ...ngDevMode ? [{ debugName: "options", descendants: true }] : [{ descendants: true }]);
  keyManager = new ActiveDescendantKeyManager(this.options, inject(Injector)).withTypeAhead();
  optionsList = viewChild("optionsList", ...ngDevMode ? [{ debugName: "optionsList" }] : []);
  compareWith = input((o1, o2) => o1 === o2, ...ngDevMode ? [{ debugName: "compareWith" }] : []);
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  disabled = signal(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  stretch = input(true, ...ngDevMode ? [{ debugName: "stretch" }] : []);
  activeDescendantId = toSignal(this.keyManager.change.pipe(map(() => this.keyManager.activeItem?.id())));
  onKeydown($event) {
    if ($event.key === "Enter" && this.keyManager.activeItem) {
      this.toggleValue(this.keyManager.activeItem);
    }
    this.keyManager.onKeydown($event);
  }
  _values = signal([], ...ngDevMode ? [{ debugName: "_values" }] : []);
  _onTouched;
  _registerOnChangeFn;
  selectedOptions = computed(() => {
    const selectedOptions = this.options().filter((option) => this._values().some((v) => this.compareWith()(v, option.value())));
    return selectedOptions;
  }, ...ngDevMode ? [{ debugName: "selectedOptions" }] : []);
  selectedOptionsLabel = computed(() => {
    return this.selectedOptions()?.map((opt) => opt.content).join(", ");
  }, ...ngDevMode ? [{ debugName: "selectedOptionsLabel" }] : []);
  isSelected(value) {
    return this._values().some((v) => this.compareWith()(v, value));
  }
  writeValue(value) {
    if (value === null || value === void 0) {
      this._values.set([]);
    } else {
      this._values.set(value);
    }
  }
  toggleValue(option) {
    this.keyManager.setActiveItem(option);
    const isSelected = this.isSelected(option.value());
    if (isSelected) {
      this._values.update((values) => values.filter((v) => !this.compareWith()(v, option.value())));
    } else {
      this._values.update((values) => [...values, option.value()]);
    }
    this._registerOnChangeFn?.(this._values());
  }
  registerOnChange(fn) {
    this._registerOnChangeFn = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  togglePanel() {
    this.isOpen.update((isOpen) => !isOpen);
  }
  panelOpened() {
    this.optionsList()?.nativeElement.focus();
    this.keyManager.activeItem?.scrollIntoView();
    const selectedOption = this.selectedOptions();
    if (selectedOption.length) {
      this.keyManager.setActiveItem(selectedOption[0]);
    }
  }
  panelClosed() {
    this._onTouched?.();
  }
  ngOnDestroy() {
    this.keyManager.destroy();
  }
  clear($event) {
    this._values.set([]);
    this._registerOnChangeFn?.(this._values());
    $event.stopPropagation();
  }
  static \u0275fac = function MultiSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultiSelectComponent, selectors: [["app-multi-select"]], contentQueries: function MultiSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.selectLabel, MultiSelectLabelDirective, 5);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.options, MultiOptionComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, viewQuery: function MultiSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.optionsList, _c03, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostAttrs: ["role", "combobox", 1, "inline-block", "group"], hostVars: 1, hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-expanded", ctx.isOpen());
    }
  }, inputs: { placeholder: [1, "placeholder"], emptyText: [1, "emptyText"], compareWith: [1, "compareWith"], stretch: [1, "stretch"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: _MultiSelectComponent
    }
  ])], ngContentSelectors: _c2, decls: 10, vars: 14, consts: [["origin", "appPopoverOrigin"], ["optionsList", ""], ["appPopoverOrigin", "", 1, "flex", "h-9", "cursor-pointer", "items-center", "justify-between", "rounded-md", "border", "border-border", "p-2", "group-[.ng-invalid.ng-touched]:border-danger", "focus-visible:outline", "focus-visible:outline-ring", "disabled:bg-disabled", "disabled:text-disabled-foreground", 3, "click", "disabled"], [1, "mr-auto", "flex-1", "truncate", "text-left"], [1, "transition-transform"], [3, "opened", "closed", "isOpenChange", "outsideClose", "restoreFocus", "blockScroll", "styled", "stretchToOrigin", "isOpen", "origin", "offsetY"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-2"], ["tabindex", "0", "role", "listbox", 1, "max-h-52", "overflow-y-auto", 3, "keydown"]], template: function MultiSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c12);
      \u0275\u0275elementStart(0, "button", 2, 0);
      \u0275\u0275listener("click", function MultiSelectComponent_Template_button_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePanel());
      });
      \u0275\u0275elementStart(2, "span", 3);
      \u0275\u0275conditionalCreate(3, MultiSelectComponent_Conditional_3_Template, 2, 1)(4, MultiSelectComponent_Conditional_4_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button")(6, "app-font-icon", 4);
      \u0275\u0275text(7, "keyboard_arrow_down");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "app-popover", 5);
      \u0275\u0275listener("opened", function MultiSelectComponent_Template_app_popover_opened_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.panelOpened());
      })("closed", function MultiSelectComponent_Template_app_popover_closed_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.panelClosed());
      });
      \u0275\u0275twoWayListener("isOpenChange", function MultiSelectComponent_Template_app_popover_isOpenChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.isOpen, $event) || (ctx.isOpen = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, MultiSelectComponent_ng_template_9_Template, 5, 2, "ng-template");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      const origin_r5 = \u0275\u0275reference(1);
      \u0275\u0275classProp("w-full", ctx.stretch());
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_3_0 = ctx.selectedOptionsLabel()) ? 3 : 4, tmp_3_0);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("rotate-180", ctx.isOpen());
      \u0275\u0275advance(2);
      \u0275\u0275property("outsideClose", true)("restoreFocus", true)("blockScroll", true)("styled", true)("stretchToOrigin", true);
      \u0275\u0275twoWayProperty("isOpen", ctx.isOpen);
      \u0275\u0275property("origin", origin_r5)("offsetY", 8);
    }
  }, dependencies: [
    ReactiveFormsModule,
    PopoverOriginDirective,
    PopoverComponent,
    FontIconComponent,
    NgTemplateOutlet
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectComponent, [{
    type: Component,
    args: [{ selector: "app-multi-select", imports: [
      ReactiveFormsModule,
      PopoverOriginDirective,
      PopoverComponent,
      FontIconComponent,
      NgTemplateOutlet
    ], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: MultiSelectComponent
      }
    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "combobox",
      class: "inline-block group",
      "[attr.aria-expanded]": "isOpen()"
    }, template: '<button\n  class="flex h-9 cursor-pointer items-center justify-between rounded-md border border-border p-2 group-[.ng-invalid.ng-touched]:border-danger focus-visible:outline focus-visible:outline-ring disabled:bg-disabled disabled:text-disabled-foreground"\n  [class.w-full]="stretch()"\n  appPopoverOrigin\n  #origin="appPopoverOrigin"\n  (click)="togglePanel()"\n  [disabled]="disabled()"\n>\n  <span class="mr-auto flex-1 truncate text-left">\n    @if (selectedOptionsLabel(); as selectedOptionsLabel) {\n      @if (selectLabel(); as selectLabel) {\n        <ng-container\n          *ngTemplateOutlet="\n            selectLabel.ref;\n            context: { $implicit: selectedOptions() }\n          "\n        ></ng-container>\n      } @else {\n        {{ selectedOptionsLabel }}\n      }\n    } @else {\n      {{ placeholder() }}\n    }\n  </span>\n\n  <button>\n    <app-font-icon class="transition-transform" [class.rotate-180]="isOpen()"\n      >keyboard_arrow_down</app-font-icon\n    >\n  </button>\n</button>\n<app-popover\n  [outsideClose]="true"\n  [restoreFocus]="true"\n  [blockScroll]="true"\n  [styled]="true"\n  [stretchToOrigin]="true"\n  (opened)="panelOpened()"\n  (closed)="panelClosed()"\n  [(isOpen)]="isOpen"\n  [origin]="origin"\n  [offsetY]="8"\n>\n  <ng-template>\n    @if (!options().length && emptyText()) {\n      <div class="p-2">{{ emptyText() }}</div>\n    }\n    <div\n      [attr.aria-activedescendant]="activeDescendantId()"\n      tabindex="0"\n      #optionsList\n      (keydown)="onKeydown($event)"\n      class="max-h-52 overflow-y-auto"\n      role="listbox"\n    >\n      <ng-content select="app-multi-option-group"></ng-content>\n      <ng-content select="app-multi-option"></ng-content>\n    </div>\n  </ng-template>\n</app-popover>\n' }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], emptyText: [{ type: Input, args: [{ isSignal: true, alias: "emptyText", required: false }] }], selectLabel: [{ type: ContentChild, args: [forwardRef(() => MultiSelectLabelDirective), { isSignal: true }] }], options: [{ type: ContentChildren, args: [forwardRef(() => MultiOptionComponent), __spreadProps(__spreadValues({}, { descendants: true }), { isSignal: true })] }], optionsList: [{ type: ViewChild, args: ["optionsList", { isSignal: true }] }], compareWith: [{ type: Input, args: [{ isSignal: true, alias: "compareWith", required: false }] }], stretch: [{ type: Input, args: [{ isSignal: true, alias: "stretch", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiSelectComponent, { className: "MultiSelectComponent", filePath: "projects/ngverse/src/lib/ui/multi-select/multi-select.component.ts", lineNumber: 64 });
})();

// projects/ngverse/src/lib/ui/multi-select/multi-option.component.ts
var _c04 = ["content"];
var _c13 = ["*"];
var MultiOptionComponent = class _MultiOptionComponent {
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  disabled;
  id = input(inject(_IdGenerator).getId("option-"), ...ngDevMode ? [{ debugName: "id" }] : []);
  isActive = signal(false, ...ngDevMode ? [{ debugName: "isActive" }] : []);
  isSelected = () => this.select.isSelected(this.value());
  optionGroup = inject(MultiOptionGroupComponent, { optional: true });
  optionContent = contentChild(MultiOptionContentDirective, ...ngDevMode ? [{ debugName: "optionContent" }] : []);
  contentEl = viewChild.required("content");
  element = inject(ElementRef).nativeElement;
  select = inject(forwardRef(() => MultiSelectComponent));
  inGroup = !!this.optionGroup;
  get content() {
    const optionContent = this.optionContent();
    return optionContent ? optionContent.content : this.contentEl().nativeElement.textContent;
  }
  getLabel() {
    return this.content ?? "";
  }
  onClick() {
    this.select.toggleValue(this);
  }
  setActiveStyles() {
    this.isActive.set(true);
    this.scrollIntoView();
  }
  scrollIntoView() {
    this.element.scrollIntoView({
      block: "nearest",
      inline: "nearest"
    });
  }
  setInactiveStyles() {
    this.isActive.set(false);
  }
  static \u0275fac = function MultiOptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiOptionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultiOptionComponent, selectors: [["app-multi-option"]], contentQueries: function MultiOptionComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.optionContent, MultiOptionContentDirective, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, viewQuery: function MultiOptionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.contentEl, _c04, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostAttrs: ["role", "option"], hostVars: 9, hostBindings: function MultiOptionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MultiOptionComponent_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      \u0275\u0275domProperty("id", ctx.id());
      \u0275\u0275attribute("aria-selected", ctx.isSelected())("aria-disabled", ctx.disabled);
      \u0275\u0275classProp("is-active", ctx.isActive())("in-group", ctx.inGroup)("selected", ctx.isSelected());
    }
  }, inputs: { value: [1, "value"], disabled: "disabled", id: [1, "id"] }, ngContentSelectors: _c13, decls: 5, vars: 1, consts: [["content", ""], [1, "flex", "w-full", "items-center"]], template: function MultiOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-font-icon");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isSelected() ? "check_box" : "check_box_outline_blank");
    }
  }, dependencies: [FontIconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px;\n  cursor: pointer;\n  background: transparent;\n  border: 0px;\n  font-size: 1rem;\n}\n.in-group[_nghost-%COMP%] {\n  padding-left: 24px;\n}\n.is-active[_nghost-%COMP%], \n[_nghost-%COMP%]:hover:not([disabled]), \n.selected[_nghost-%COMP%] {\n  background: var(--color-accent);\n  color: var(--color-accent-foreground);\n}\n[_nghost-%COMP%]:focus-visible {\n  outline: 1px solid var(--color-ring);\n}\n[disabled][_nghost-%COMP%] {\n  color: var(--color-disabled-foreground);\n}\n/*# sourceMappingURL=multi-option.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiOptionComponent, [{
    type: Component,
    args: [{ selector: "app-multi-option", changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "option",
      "(click)": "onClick()",
      "[class.is-active]": "isActive()",
      "[class.in-group]": "inGroup",
      "[class.selected]": "isSelected()",
      "[id]": "id()",
      "[attr.aria-selected]": "isSelected()",
      "[attr.aria-disabled]": "disabled"
    }, imports: [FontIconComponent], template: `<div class="flex w-full items-center" #content>
  <ng-content></ng-content>
</div>
<app-font-icon>{{
  isSelected() ? 'check_box' : 'check_box_outline_blank'
}}</app-font-icon>
`, styles: ["/* projects/ngverse/src/lib/ui/multi-select/multi-option.component.css */\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px;\n  cursor: pointer;\n  background: transparent;\n  border: 0px;\n  font-size: 1rem;\n}\n:host.in-group {\n  padding-left: 24px;\n}\n:host.is-active,\n:host:hover:not([disabled]),\n:host.selected {\n  background: var(--color-accent);\n  color: var(--color-accent-foreground);\n}\n:host:focus-visible {\n  outline: 1px solid var(--color-ring);\n}\n:host[disabled] {\n  color: var(--color-disabled-foreground);\n}\n/*# sourceMappingURL=multi-option.component.css.map */\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], disabled: [{
    type: Input
  }], id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false }] }], optionContent: [{ type: ContentChild, args: [forwardRef(() => MultiOptionContentDirective), { isSignal: true }] }], contentEl: [{ type: ViewChild, args: ["content", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiOptionComponent, { className: "MultiOptionComponent", filePath: "projects/ngverse/src/lib/ui/multi-select/multi-option.component.ts", lineNumber: 36 });
})();

// projects/docs/src/app/examples/multi-select/show-case-multi-select/show-case-multi-select.component.ts
function ShowCaseMultiSelectComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-multi-option", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r1.name);
  }
}
function ShowCaseMultiSelectComponent_For_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-multi-option", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r2 = ctx.$implicit;
    \u0275\u0275property("value", file_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r2.name);
  }
}
function ShowCaseMultiSelectComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-multi-option-group")(1, "app-multi-option-group-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ShowCaseMultiSelectComponent_For_9_For_4_Template, 2, 2, "app-multi-option", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dir_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dir_r3.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(dir_r3.files);
  }
}
var countries = [
  { code: "KA", name: "Georgia" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "AU", name: "Australia" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "CN", name: "China" },
  { code: "IN", name: "India" },
  { code: "BR", name: "Brazil" },
  { code: "ZA", name: "South Africa" },
  { code: "RU", name: "Russia" },
  { code: "MX", name: "Mexico" },
  { code: "KR", name: "South Korea" },
  { code: "AR", name: "Argentina" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "NG", name: "Nigeria" },
  { code: "EG", name: "Egypt" }
];
var directories = [
  {
    name: "Documents",
    files: [
      {
        name: "Profile Picture"
      },
      {
        name: "Work File"
      }
    ]
  },
  {
    name: "Downloads",
    files: [
      {
        name: "The Dark Knight"
      },
      {
        name: "Joker"
      }
    ]
  }
];
var customOptions = [
  { label: "Danger", value: "red" },
  { label: "Warning", value: "orange" },
  { label: "OK", value: "blue" }
];
var ShowCaseMultiSelectComponent = class _ShowCaseMultiSelectComponent {
  countries = countries;
  directories = directories;
  customOptions = customOptions;
  formControlSingle = new FormControl(null, Validators.required);
  formControlMulti = new FormControl(null, Validators.required);
  dirFormControl = new FormControl(null);
  customLabelControl = new FormControl(null);
  static \u0275fac = function ShowCaseMultiSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseMultiSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseMultiSelectComponent, selectors: [["doc-show-case-multi-select"]], decls: 10, vars: 2, consts: [[1, "mb-2"], ["placeholder", "Countries", 1, "w-[250px]", 3, "formControl"], [3, "value"], [1, "mt-4", "mb-2"]], template: function ShowCaseMultiSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p", 0);
      \u0275\u0275text(1, "Single select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-multi-select", 1);
      \u0275\u0275repeaterCreate(3, ShowCaseMultiSelectComponent_For_4_Template, 2, 2, "app-multi-option", 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Directories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-multi-select", 1);
      \u0275\u0275repeaterCreate(8, ShowCaseMultiSelectComponent_For_9_Template, 5, 1, "app-multi-option-group", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", ctx.formControlSingle);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.countries);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.dirFormControl);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.directories);
    }
  }, dependencies: [
    MultiSelectComponent,
    MultiOptionComponent,
    ReactiveFormsModule,
    NgControlStatus,
    FormControlDirective,
    MultiOptionGroupComponent,
    MultiOptionGroupLabelComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseMultiSelectComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-multi-select", imports: [
      MultiSelectComponent,
      MultiOptionComponent,
      ReactiveFormsModule,
      MultiOptionGroupComponent,
      MultiOptionGroupLabelComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<p class="mb-2">Single select</p>\n<app-multi-select\n  [formControl]="formControlSingle"\n  placeholder="Countries"\n  class="w-[250px]"\n>\n  @for (option of countries; track $index) {\n    <app-multi-option [value]="option.code">{{ option.name }}</app-multi-option>\n  }\n</app-multi-select>\n\n<p class="mt-4 mb-2">Directories</p>\n<app-multi-select\n  [formControl]="dirFormControl"\n  placeholder="Countries"\n  class="w-[250px]"\n>\n  @for (dir of directories; track $index) {\n    <app-multi-option-group>\n      <app-multi-option-group-label>{{\n        dir.name\n      }}</app-multi-option-group-label>\n      @for (file of dir.files; track $index) {\n        <app-multi-option [value]="file.name">{{ file.name }}</app-multi-option>\n      }\n    </app-multi-option-group>\n  }\n</app-multi-select>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseMultiSelectComponent, { className: "ShowCaseMultiSelectComponent", filePath: "projects/docs/src/app/examples/multi-select/show-case-multi-select/show-case-multi-select.component.ts", lineNumber: 74 });
})();

// projects/docs/src/app/pages/ui/multi-select-page/multi-select-page.component.ts
var _c05 = () => ["../", "select"];
var ROOT = "multi-select";
var MultiSelectPageComponent = class _MultiSelectPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        ...this.sourceTreeBuilder.fullComponent("multi-option", ROOT),
        this.sourceTreeBuilder.component("multi-option-group", ROOT),
        this.sourceTreeBuilder.component("multi-option-group-label", ROOT)
      ],
      hideName: true
    }
  ];
  prerequisites = [
    {
      name: "popover",
      label: "Popover"
    },
    {
      name: "font-icon",
      label: "Font Icon"
    }
  ];
  apiInfo = {
    ariaLink: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",
    entities: [
      {
        name: "MultiSelectComponent",
        type: "component",
        selector: "app-multi-select",
        formBindable: true,
        inputs: [
          {
            name: "placeholder",
            type: "string",
            default: EMPTY_API_INPUT_DEFAULT_VALUE,
            description: "determines the placeholder text"
          },
          {
            name: "compareWith",
            type: "(o1: unknown, o2: unknown) => o1 === o2",
            default: "o1 === o2",
            description: "determines the compare function"
          },
          {
            name: "stretch",
            type: "boolean",
            default: "false",
            description: "determines whether the select button should take the full width of the container"
          },
          {
            name: "emptyText",
            type: "string",
            default: EMPTY_API_INPUT_DEFAULT_VALUE,
            description: "determines the empty text to be displayed when no options are available"
          }
        ]
      },
      {
        name: "MultiOptionComponent",
        type: "component",
        selector: "app-option",
        inputs: [
          {
            name: "value",
            type: "unknown",
            description: "The value of the option",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Determines whether the option is disabled",
            default: "false"
          }
        ]
      },
      {
        name: "MultiSelectLabelDirective",
        type: "directive",
        selector: "ng-template[appMultiSelectLabel]",
        description: "The label of the select, you can use this directive instead of label input, when you need more customization. The template context will be the selected options"
      },
      {
        name: "MultiOptionContentDirective",
        type: "directive",
        selector: "[appMultiOptionContent]",
        description: `The content of the option, you can use this directive when your option includes different text content and you want to use specific text as a select label`
      },
      {
        name: "MultiOptionGroupComponent",
        type: "component",
        selector: "app-multi-option-group",
        description: "Groups related options",
        inputs: [
          {
            name: "label",
            type: "string",
            description: "The label of the option group",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          }
        ]
      },
      {
        name: "MultiOptionGroupLabelComponent",
        type: "component",
        selector: "app-multi-option-group-label",
        description: "The label of the option group, you can use this component instead of label input, when you need more customization"
      }
    ]
  };
  static \u0275fac = function MultiSelectPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelectPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultiSelectPageComponent, selectors: [["doc-multi-select-page"]], decls: 11, vars: 5, consts: [["label", "Multi Select", "subTitle", "Displays a list of options for the user to select from, supporting multiple selections."], ["name", "multi-select"], ["name", "Multi Select", 3, "preprsAuto"], ["type", "component", "name", "multi-select"], ["name", "select", 3, "sourceTree"], [3, "apiInfo"], [1, "underline", 3, "routerLink"]], template: function MultiSelectPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-multi-select");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-prerequisites", 2)(4, "doc-command-installation", 3)(5, "doc-source-tree", 4);
      \u0275\u0275elementStart(6, "doc-api-info", 5)(7, "doc-api-description");
      \u0275\u0275text(8, " For single selection, check ");
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10, "Select");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("preprsAuto", ctx.prerequisites);
      \u0275\u0275advance(2);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c05));
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseMultiSelectComponent,
    CommandInstallationComponent,
    PrerequisitesComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    ApiDescriptionComponent,
    RouterLink
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectPageComponent, [{
    type: Component,
    args: [{ selector: "doc-multi-select-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseMultiSelectComponent,
      CommandInstallationComponent,
      PrerequisitesComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ApiDescriptionComponent,
      RouterLink
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<doc-blueprint-page
  label="Multi Select"
  subTitle="Displays a list of options for the user to select from, supporting multiple selections."
>
  <doc-show-case name="multi-select">
    <doc-show-case-multi-select></doc-show-case-multi-select>
  </doc-show-case>
  <doc-prerequisites name="Multi Select" [preprsAuto]="prerequisites">
  </doc-prerequisites>
  <doc-command-installation type="component" name="multi-select">
  </doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="select"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo">
    <doc-api-description>
      For single selection, check
      <a [routerLink]="['../', 'select']" class="underline">Select</a>
    </doc-api-description>
  </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiSelectPageComponent, { className: "MultiSelectPageComponent", filePath: "projects/docs/src/app/pages/ui/multi-select-page/multi-select-page.component.ts", lineNumber: 40 });
})();
export {
  MultiSelectPageComponent
};
//# sourceMappingURL=chunk-3CHBBFF5.js.map
