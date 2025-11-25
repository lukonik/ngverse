import {
  CommandInstallationComponent
} from "./chunk-JIB3DNZG.js";
import {
  ShowCaseComponent
} from "./chunk-FNG7BR3D.js";
import "./chunk-EEYNYO2D.js";
import {
  PopoverComponent,
  PopoverOriginDirective,
  SourceTreeBuilder,
  SourceTreeComponent,
  takeUntilDestroyed
} from "./chunk-Y6XO3YM5.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-3GLWUNBJ.js";
import {
  ActiveDescendantKeyManager
} from "./chunk-4XRX3M6E.js";
import "./chunk-P53KIQU7.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-GOCNYIRL.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-MTAP3RFR.js";
import "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  InjectionToken,
  Injector,
  Input,
  Output,
  Subject,
  computed,
  contentChildren,
  forwardRef,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2NN34RDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/autocomplete/autocomplete-item/autocomplete-item.component.ts
var _c0 = ["*"];
var AutocompleteItemComponent = class _AutocompleteItemComponent {
  isActive = signal(false, ...ngDevMode ? [{ debugName: "isActive" }] : []);
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  host = inject(ElementRef);
  select() {
    console.log("HELLI");
  }
  setActiveStyles() {
    this.isActive.set(true);
  }
  setInactiveStyles() {
    this.isActive.set(false);
  }
  static \u0275fac = function AutocompleteItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutocompleteItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutocompleteItemComponent, selectors: [["app-autocomplete-item"]], inputs: { value: [1, "value"] }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [["tabindex", "-1", 1, "autocomplete-item", 3, "click"]], template: function AutocompleteItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function AutocompleteItemComponent_Template_button_click_0_listener() {
        return ctx.select();
      });
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("is-active", ctx.isActive());
    }
  }, styles: ["\n\n.autocomplete-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: var(--option-padding);\n  cursor: var(--option-cursor);\n}\n.autocomplete-item[_ngcontent-%COMP%]:hover:not(.listbox-item-active, .option-disabled) {\n  background: var(--option-hover-bg-color);\n}\n.autocomplete-item.listbox-item-active[_ngcontent-%COMP%] {\n  background: var(--color-primary-color);\n  color: white;\n}\n.autocomplete-item.option-disabled[_ngcontent-%COMP%] {\n  color: var(--option-disabled-color);\n}\n.autocomplete-item.selected[_ngcontent-%COMP%], \n.autocomplete-item.is-active[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n  color: var(--color-accent-foreground);\n}\n/*# sourceMappingURL=autocomplete-item.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompleteItemComponent, [{
    type: Component,
    args: [{ selector: "app-autocomplete-item", changeDetection: ChangeDetectionStrategy.OnPush, template: '<button\n  (click)="select()"\n  class="autocomplete-item"\n  [class.is-active]="isActive()"\n  tabindex="-1"\n>\n  <ng-content></ng-content>\n</button>\n', styles: ["/* projects/ngverse/src/lib/ui/autocomplete/autocomplete-item/autocomplete-item.component.css */\n.autocomplete-item {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: var(--option-padding);\n  cursor: var(--option-cursor);\n}\n.autocomplete-item:hover:not(.listbox-item-active, .option-disabled) {\n  background: var(--option-hover-bg-color);\n}\n.autocomplete-item.listbox-item-active {\n  background: var(--color-primary-color);\n  color: white;\n}\n.autocomplete-item.option-disabled {\n  color: var(--option-disabled-color);\n}\n.autocomplete-item.selected,\n.autocomplete-item.is-active {\n  background: var(--color-accent);\n  color: var(--color-accent-foreground);\n}\n/*# sourceMappingURL=autocomplete-item.component.css.map */\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutocompleteItemComponent, { className: "AutocompleteItemComponent", filePath: "projects/ngverse/src/lib/ui/autocomplete/autocomplete-item/autocomplete-item.component.ts", lineNumber: 17 });
})();

// projects/ngverse/src/lib/ui/autocomplete/autocomplete.component.ts
var _c02 = [[["app-autocomplete-item"]]];
var _c1 = ["app-autocomplete-item"];
function AutocompleteComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
var SELECTION_EMITTER = new InjectionToken("SELECTION_EMITTER");
var AutocompleteComponent = class _AutocompleteComponent {
  label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
  displayWith = input(null, ...ngDevMode ? [{ debugName: "displayWith" }] : []);
  value = signal(void 0, ...ngDevMode ? [{ debugName: "value" }] : []);
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  inputValue = signal("", ...ngDevMode ? [{ debugName: "inputValue" }] : []);
  options = contentChildren(AutocompleteItemComponent, ...ngDevMode ? [{ debugName: "options", descendants: true }] : [{
    descendants: true
  }]);
  keyManager = new ActiveDescendantKeyManager(this.options, inject(Injector));
  disabled = signal(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  selectionEmitter = inject(SELECTION_EMITTER, { self: true });
  _onChange;
  _onTouched;
  onKeydown(event) {
    if (event.key === "Enter") {
      this.setValue(this.keyManager.activeItem?.value());
    }
    this.keyManager.onKeydown(event);
  }
  constructor() {
    this.selectionEmitter.pipe(takeUntilDestroyed()).subscribe((comp) => {
      this.select(comp);
    });
  }
  ngOnDestroy() {
    this.keyManager.destroy();
  }
  close() {
    this.isOpen.set(false);
  }
  open() {
    this.isOpen.set(true);
  }
  setValue(value) {
    this.inputValue.set(value);
  }
  select(comp) {
    const displayWith = this.displayWith();
    this.inputValue.set(displayWith ? displayWith(comp.value()) : comp.host.nativeElement.textContent ?? "");
    this._onChange?.(comp.value());
    this._onTouched?.();
    this.close();
  }
  writeValue(obj) {
    if (obj !== null && obj !== void 0) {
      this.inputValue.set(obj);
    } else {
      this.inputValue.set("");
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled.set(isDisabled);
  }
  onInput($event) {
    this.keyManager.setActiveItem(-1);
    const value = $event.target?.value.trim() ?? "";
    if (!this.isOpen()) {
      this.open();
    }
    this._onChange?.(value);
  }
  static \u0275fac = function AutocompleteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutocompleteComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutocompleteComponent, selectors: [["app-autocomplete"]], contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.options, AutocompleteItemComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { label: [1, "label"], displayWith: [1, "displayWith"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: _AutocompleteComponent
    },
    {
      provide: SELECTION_EMITTER,
      useValue: new Subject()
    }
  ])], ngContentSelectors: _c1, decls: 4, vars: 5, consts: [["trigger", "appPopoverOrigin"], ["appPopoverOrigin", "", 1, "input-field", 3, "ngModelChange", "focus", "keydown", "input", "ngModel", "disabled"], [3, "isOpenChange", "offsetY", "origin", "isOpen"], [1, "select-options"]], template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275elementStart(0, "input", 1, 0);
      \u0275\u0275listener("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.inputValue.set($event));
      })("focus", function AutocompleteComponent_Template_input_focus_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.open());
      })("keydown", function AutocompleteComponent_Template_input_keydown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeydown($event));
      })("input", function AutocompleteComponent_Template_input_input_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInput($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-popover", 2);
      \u0275\u0275twoWayListener("isOpenChange", function AutocompleteComponent_Template_app_popover_isOpenChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.isOpen, $event) || (ctx.isOpen = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(3, AutocompleteComponent_ng_template_3_Template, 2, 0, "ng-template");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const trigger_r2 = \u0275\u0275reference(1);
      \u0275\u0275property("ngModel", ctx.inputValue())("disabled", ctx.disabled());
      \u0275\u0275advance(2);
      \u0275\u0275property("offsetY", 8)("origin", trigger_r2);
      \u0275\u0275twoWayProperty("isOpen", ctx.isOpen);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, PopoverOriginDirective, PopoverComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.input-field[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  background: transparent;\n  border: var(--border);\n  border-radius: 6px;\n  padding: 4px 10px;\n  width: 200px;\n}\n.input-field[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  background: var(--color-disabled-color);\n}\n.select-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.select-options[_ngcontent-%COMP%] {\n  max-height: 200px;\n  min-width: 200px;\n  overflow: auto;\n}\n.select-options[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=autocomplete.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompleteComponent, [{
    type: Component,
    args: [{ selector: "app-autocomplete", imports: [FormsModule, PopoverOriginDirective, PopoverComponent], providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: AutocompleteComponent
      },
      {
        provide: SELECTION_EMITTER,
        useValue: new Subject()
      }
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<input\n  class="input-field"\n  [ngModel]="inputValue()"\n  (ngModelChange)="inputValue.set($event)"\n  appPopoverOrigin\n  #trigger="appPopoverOrigin"\n  (focus)="open()"\n  [disabled]="disabled()"\n  (keydown)="onKeydown($event)"\n  (input)="onInput($event)"\n/>\n\n<app-popover [offsetY]="8" [origin]="trigger" [(isOpen)]="isOpen">\n  <ng-template>\n    <div class="select-options">\n      <ng-content select="app-autocomplete-item"></ng-content>\n    </div>\n  </ng-template>\n</app-popover>\n<!-- (blur)="close()" -->\n', styles: ["/* projects/ngverse/src/lib/ui/autocomplete/autocomplete.component.css */\n:host {\n  display: inline-block;\n}\n.input-field {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  background: transparent;\n  border: var(--border);\n  border-radius: 6px;\n  padding: 4px 10px;\n  width: 200px;\n}\n.input-field:disabled {\n  cursor: not-allowed;\n  background: var(--color-disabled-color);\n}\n.select-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.select-options {\n  max-height: 200px;\n  min-width: 200px;\n  overflow: auto;\n}\n.select-options:focus {\n  outline: none;\n}\n/*# sourceMappingURL=autocomplete.component.css.map */\n"] }]
  }], () => [], { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], displayWith: [{ type: Input, args: [{ isSignal: true, alias: "displayWith", required: false }] }], options: [{ type: ContentChildren, args: [forwardRef(() => AutocompleteItemComponent), __spreadProps(__spreadValues({}, {
    descendants: true
  }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutocompleteComponent, { className: "AutocompleteComponent", filePath: "projects/ngverse/src/lib/ui/autocomplete/autocomplete.component.ts", lineNumber: 52 });
})();

// projects/docs/src/app/examples/autocomplete/show-case-autocomplete/show-case-autocomplete.component.ts
function ShowCaseAutocompleteComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-autocomplete-item", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("value", item_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
var ShowCaseAutocompleteComponent = class _ShowCaseAutocompleteComponent {
  items = ["Angular", "React", "Vue", "Svelte", "Next.js"];
  currentFilter = model("", ...ngDevMode ? [{ debugName: "currentFilter" }] : []);
  filteredItems = computed(() => {
    return this.items.filter((item) => item.toLowerCase().includes(this.currentFilter().toLowerCase()));
  }, ...ngDevMode ? [{ debugName: "filteredItems" }] : []);
  static \u0275fac = function ShowCaseAutocompleteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseAutocompleteComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseAutocompleteComponent, selectors: [["doc-show-case-autocomplete"]], inputs: { currentFilter: [1, "currentFilter"] }, outputs: { currentFilter: "currentFilterChange" }, decls: 3, vars: 2, consts: [[3, "ngModelChange", "label", "ngModel"], [3, "value"]], template: function ShowCaseAutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-autocomplete", 0);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseAutocompleteComponent_Template_app_autocomplete_ngModelChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.currentFilter, $event) || (ctx.currentFilter = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(1, ShowCaseAutocompleteComponent_For_2_Template, 2, 2, "app-autocomplete-item", 1, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("label", "Select Framework");
      \u0275\u0275twoWayProperty("ngModel", ctx.currentFilter);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.filteredItems());
    }
  }, dependencies: [AutocompleteComponent, AutocompleteItemComponent, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseAutocompleteComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-autocomplete", imports: [AutocompleteComponent, AutocompleteItemComponent, FormsModule], template: `<app-autocomplete [label]="'Select Framework'" [(ngModel)]="currentFilter">
  @for (item of filteredItems(); track $index) {
    <app-autocomplete-item [value]="item">{{ item }}</app-autocomplete-item>
  }
</app-autocomplete>
` }]
  }], null, { currentFilter: [{ type: Input, args: [{ isSignal: true, alias: "currentFilter", required: false }] }, { type: Output, args: ["currentFilterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseAutocompleteComponent, { className: "ShowCaseAutocompleteComponent", filePath: "projects/docs/src/app/examples/autocomplete/show-case-autocomplete/show-case-autocomplete.component.ts", lineNumber: 12 });
})();

// projects/docs/src/app/features/autocomplete-page/autocomplete-page.component.ts
var AutocompletePageComponent = class _AutocompletePageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = this.sourceTreeBuilder.sourceTree("autocomplete", (root) => [
    this.sourceTreeBuilder.folder(root, root, () => this.sourceTreeBuilder.fullComponent("autocomplete", root), true)
  ]);
  static \u0275fac = function AutocompletePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutocompletePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutocompletePageComponent, selectors: [["doc-autocomplete-page"]], decls: 5, vars: 2, consts: [["subTitle", "This is autocomplete", 3, "label"], ["name", "autocomplete"], ["type", "component", "name", "autocomplete"], ["name", "autocomplete", 3, "sourceTree"]], template: function AutocompletePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-autocomplete");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("label", "Autocomplete");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    ShowCaseAutocompleteComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompletePageComponent, [{
    type: Component,
    args: [{ selector: "doc-autocomplete-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseComponent,
      SourceTreeComponent,
      CommandInstallationComponent,
      ShowCaseAutocompleteComponent
    ], template: `<doc-blueprint-page subTitle="This is autocomplete" [label]="'Autocomplete'">
  <doc-show-case name="autocomplete">
    <doc-show-case-autocomplete></doc-show-case-autocomplete>
  </doc-show-case>
  <doc-command-installation type="component" name="autocomplete">
  </doc-command-installation>
  <doc-source-tree
    [sourceTree]="sourceTree"
    name="autocomplete"
  ></doc-source-tree>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutocompletePageComponent, { className: "AutocompletePageComponent", filePath: "projects/docs/src/app/features/autocomplete-page/autocomplete-page.component.ts", lineNumber: 22 });
})();
export {
  AutocompletePageComponent
};
//# sourceMappingURL=chunk-52UL3ZON.js.map
