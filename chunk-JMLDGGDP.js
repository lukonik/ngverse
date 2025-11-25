import {
  InputDirective
} from "./chunk-QUXJML5I.js";
import {
  Platform,
  _CdkPrivateStyleLoader
} from "./chunk-64HPILVO.js";
import {
  coerceElement,
  coerceNumberProperty
} from "./chunk-MTAP3RFR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  RendererFactory2,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  auditTime,
  booleanAttribute,
  computed,
  inject,
  input,
  interval,
  output,
  setClassMetadata,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵviewQuerySignal
} from "./chunk-2NN34RDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VL5VAURS.js";

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var _CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
  static \u0275fac = function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkTextFieldStyleLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __CdkTextFieldStyleLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-text-field-style-loader", ""],
    decls: 0,
    vars: 0,
    template: function _CdkTextFieldStyleLoader_Template(rf, ctx) {
    },
    styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkTextFieldStyleLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "cdk-text-field-style-loader": ""
      },
      styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"]
    }]
  }], null, null);
})();
var listenerOptions = {
  passive: true
};
var AutofillMonitor = class _AutofillMonitor {
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _monitoredElements = /* @__PURE__ */ new Map();
  constructor() {
  }
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return EMPTY;
    }
    this._styleLoader.load(_CdkTextFieldStyleLoader);
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const subject = new Subject();
    const cssClass = "cdk-text-field-autofilled";
    const listener = (event) => {
      if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    };
    const unlisten = this._ngZone.runOutsideAngular(() => {
      element.classList.add("cdk-text-field-autofill-monitored");
      return this._renderer.listen(element, "animationstart", listener, listenerOptions);
    });
    this._monitoredElements.set(element, {
      subject,
      unlisten
    });
    return subject;
  }
  stopMonitoring(elementOrRef) {
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove("cdk-text-field-autofill-monitored");
      element.classList.remove("cdk-text-field-autofilled");
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
  static \u0275fac = function AutofillMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutofillMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutofillMonitor,
    factory: _AutofillMonitor.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofillMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkAutofill = class _CdkAutofill {
  _elementRef = inject(ElementRef);
  _autofillMonitor = inject(AutofillMonitor);
  cdkAutofill = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
  static \u0275fac = function CdkAutofill_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAutofill)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAutofill,
    selectors: [["", "cdkAutofill", ""]],
    outputs: {
      cdkAutofill: "cdkAutofill"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAutofill, [{
    type: Directive,
    args: [{
      selector: "[cdkAutofill]"
    }]
  }], () => [], {
    cdkAutofill: [{
      type: Output
    }]
  });
})();
var CdkTextareaAutosize = class _CdkTextareaAutosize {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _resizeEvents = new Subject();
  _previousValue;
  _initialHeight;
  _destroyed = new Subject();
  _listenerCleanups;
  _minRows;
  _maxRows;
  _enabled = true;
  _previousMinRows = -1;
  _textareaElement;
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = coerceNumberProperty(value);
    this._setMinHeight();
  }
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = coerceNumberProperty(value);
    this._setMaxHeight();
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = void 0;
    if (value) {
      this._textareaElement.setAttribute("placeholder", value);
    } else {
      this._textareaElement.removeAttribute("placeholder");
    }
    this._cacheTextareaPlaceholderHeight();
  }
  _cachedLineHeight;
  _cachedPlaceholderHeight;
  _document = inject(DOCUMENT);
  _hasFocus;
  _isViewInited = false;
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_CdkTextFieldStyleLoader);
    this._textareaElement = this._elementRef.nativeElement;
  }
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)];
        this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
          this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
          this.resizeToFitContent(true);
        });
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
    this._resizeEvents.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    const textareaClone = this._textareaElement.cloneNode(false);
    const cloneStyles = textareaClone.style;
    textareaClone.rows = 1;
    cloneStyles.position = "absolute";
    cloneStyles.visibility = "hidden";
    cloneStyles.border = "none";
    cloneStyles.padding = "0";
    cloneStyles.height = "";
    cloneStyles.minHeight = "";
    cloneStyles.maxHeight = "";
    cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
    cloneStyles.overflow = "hidden";
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || "";
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = isFirefox && this._hasFocus;
    const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    element.classList.add(measuringClass);
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  _handleFocusEvent = (event) => {
    this._hasFocus = event.type === "focus";
  };
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  resizeToFitContent(force = false) {
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  reset() {
    if (this._initialHeight !== void 0) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
  }
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }
  }
  static \u0275fac = function CdkTextareaAutosize_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTextareaAutosize)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTextareaAutosize,
    selectors: [["textarea", "cdkTextareaAutosize", ""]],
    hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
    hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function CdkTextareaAutosize_input_HostBindingHandler() {
          return ctx._noopInputHandler();
        });
      }
    },
    inputs: {
      minRows: [0, "cdkAutosizeMinRows", "minRows"],
      maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
      enabled: [2, "cdkTextareaAutosize", "enabled", booleanAttribute],
      placeholder: "placeholder"
    },
    exportAs: ["cdkTextareaAutosize"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextareaAutosize, [{
    type: Directive,
    args: [{
      selector: "textarea[cdkTextareaAutosize]",
      exportAs: "cdkTextareaAutosize",
      host: {
        "class": "cdk-textarea-autosize",
        "rows": "1",
        "(input)": "_noopInputHandler()"
      }
    }]
  }], () => [], {
    minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }],
    maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }],
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTextareaAutosize",
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var TextFieldModule = class _TextFieldModule {
  static \u0275fac = function TextFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextFieldModule,
    imports: [CdkAutofill, CdkTextareaAutosize],
    exports: [CdkAutofill, CdkTextareaAutosize]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

// projects/ngverse/src/lib/ui/otp-input/otp-input.component.ts
var _c0 = ["firstInput"];
var _c1 = ["inputs"];
function OtpInputComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 5, 1);
    \u0275\u0275listener("input", function OtpInputComponent_For_5_Template_input_input_0_listener($event) {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3._onInput($event, $index_r3 + 1));
    })("keydown", function OtpInputComponent_For_5_Template_input_keydown_0_listener($event) {
      const $index_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3._onKeydown($event, $index_r3 + 1));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("inputMode", ctx_r3.inputMode());
    \u0275\u0275attribute("aria-label", "OTP Digit " + ($index_r3 + 2));
  }
}
var OtpInputComponent = class _OtpInputComponent {
  codeLength = input(4, ...ngDevMode ? [{ debugName: "codeLength" }] : []);
  codeLengthArray = computed(() => new Array(this.codeLength() - 1).fill(1), ...ngDevMode ? [{ debugName: "codeLengthArray" }] : []);
  inputMode = input("numeric", ...ngDevMode ? [{ debugName: "inputMode" }] : []);
  filled = output();
  firstInput = viewChild.required("firstInput");
  inputs = viewChildren("inputs", ...ngDevMode ? [{ debugName: "inputs", read: ElementRef }] : [{
    read: ElementRef
  }]);
  cf = inject(ChangeDetectorRef);
  autoFillSub;
  focus() {
    this.firstInput().nativeElement.focus();
  }
  fillFromText(text) {
    if (!text) {
      return;
    }
    const inputs = this.inputs();
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const input2 = inputs[i];
      if (input2) {
        input2.nativeElement.value = char;
      }
    }
    this.cf.detectChanges();
    this.checkIfFilled();
  }
  clear() {
    for (const input2 of this.inputs()) {
      input2.nativeElement.value = "";
    }
    this.cf.detectChanges();
  }
  _autoFilled() {
    const MAX_TICK = 10;
    let currentIteration = 0;
    const INTERVAL_TIME = 100;
    this.autoFillSub?.unsubscribe();
    this.autoFillSub = interval(INTERVAL_TIME).subscribe(() => {
      try {
        const value = this.firstInput().nativeElement.value;
        if (value) {
          this.fillFromText(value);
          this.autoFillSub?.unsubscribe();
          return;
        }
        if (currentIteration > MAX_TICK) {
          this.autoFillSub?.unsubscribe();
        }
        currentIteration++;
      } catch {
        this.autoFillSub?.unsubscribe();
      }
    });
  }
  _onInput(event, index) {
    const inputEvent = event;
    if (inputEvent.inputType === "insertFromPaste") {
      return;
    } else if (inputEvent.inputType === "deleteContentBackward") {
      this.moveToPrev(index);
    } else if (inputEvent.inputType === "insertText" || inputEvent.inputType === "deleteContentForward") {
      this.moveToNext(index);
    }
    this.checkIfFilled();
  }
  _onKeydown($event, index) {
    if ($event.key === "ArrowRight") {
      this.moveToNext(index);
    } else if ($event.key === "ArrowLeft") {
      this.moveToPrev(index);
    }
  }
  _onPaste(event) {
    const text = event.clipboardData?.getData("text");
    this.fillFromText(text);
  }
  checkIfFilled() {
    const allField = this.inputs().every((inp) => inp.nativeElement.value !== null && inp.nativeElement.value !== void 0 && inp.nativeElement.value !== "");
    if (!allField) {
      return;
    }
    const value = this.inputs().map((input2) => input2.nativeElement.value).join("");
    if (allField) {
      this.filled.emit(value);
    }
  }
  moveToPrev(index) {
    const prevInput = this.prevInput(index);
    if (prevInput) {
      prevInput.nativeElement.focus();
    }
  }
  moveToNext(index) {
    const nextInput = this.nextInput(index);
    if (nextInput) {
      nextInput.nativeElement.focus();
    }
  }
  nextInput(index) {
    const inputs = this.inputs();
    if (inputs.length - 1 === index) {
      return;
    }
    const nextIndex = index + 1;
    return inputs[nextIndex];
  }
  prevInput(index) {
    const inputs = this.inputs();
    if (index === 0) {
      return;
    }
    const prevIndex = index - 1;
    return inputs[prevIndex];
  }
  ngOnDestroy() {
    this.autoFillSub?.unsubscribe();
  }
  static \u0275fac = function OtpInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtpInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpInputComponent, selectors: [["app-otp-input"]], viewQuery: function OtpInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.firstInput, _c0, 5);
      \u0275\u0275viewQuerySignal(ctx.inputs, _c1, 5, ElementRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { codeLength: [1, "codeLength"], inputMode: [1, "inputMode"] }, outputs: { filled: "filled" }, decls: 6, vars: 4, consts: [["firstInput", "", "inputs", ""], ["inputs", ""], ["role", "group", "aria-labelledby", "otp-label", 1, "code-container", 3, "paste"], ["appInput", "", "autocomplete", "one-time-code", "maxlength", "1", 1, "code-input", 3, "cdkAutofill", "input", "keydown", "inputMode"], ["appInput", "", "autocomplete", "off", "maxlength", "1", 1, "code-input", 3, "inputMode"], ["appInput", "", "autocomplete", "off", "maxlength", "1", 1, "code-input", 3, "input", "keydown", "inputMode"]], template: function OtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("paste", function OtpInputComponent_Template_div_paste_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onPaste($event));
      });
      \u0275\u0275elementStart(1, "input", 3, 0);
      \u0275\u0275listener("cdkAutofill", function OtpInputComponent_Template_input_cdkAutofill_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._autoFilled());
      })("input", function OtpInputComponent_Template_input_input_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onInput($event, 0));
      })("keydown", function OtpInputComponent_Template_input_keydown_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onKeydown($event, 0));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(4, OtpInputComponent_For_5_Template, 2, 2, "input", 4, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", \u0275\u0275interpolate1("Enter the ", ctx.codeLength(), "-digit verification code sent to your phone."));
      \u0275\u0275advance();
      \u0275\u0275property("inputMode", ctx.inputMode());
      \u0275\u0275attribute("aria-label", "OTP Digit 1");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.codeLengthArray());
    }
  }, dependencies: [InputDirective, CdkAutofill], styles: ["\n\n.listbox-item-active[_ngcontent-%COMP%] {\n  outline: 1px solid var(--color-ring);\n}\n.code-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  height: 40px;\n}\n.code-input[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=otp-input.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtpInputComponent, [{
    type: Component,
    args: [{ selector: "app-otp-input", imports: [InputDirective, CdkAutofill], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div
  (paste)="_onPaste($event)"
  class="code-container"
  role="group"
  attr.aria-label="Enter the {{
    codeLength()
  }}-digit verification code sent to your phone."
  aria-labelledby="otp-label"
>
  <!--First input is rendered statically, so we can implement auto-complete feature-->
  <input
    appInput
    #firstInput
    autocomplete="one-time-code"
    (cdkAutofill)="_autoFilled()"
    (input)="_onInput($event, 0)"
    (keydown)="_onKeydown($event, 0)"
    maxlength="1"
    class="code-input"
    [inputMode]="inputMode()"
    [attr.aria-label]="'OTP Digit 1'"
    #inputs
  />
  @for (item of codeLengthArray(); track $index) {
    <input
      appInput
      autocomplete="off"
      #inputs
      (input)="_onInput($event, $index + 1)"
      (keydown)="_onKeydown($event, $index + 1)"
      maxlength="1"
      class="code-input"
      [inputMode]="inputMode()"
      [attr.aria-label]="'OTP Digit ' + ($index + 2)"
    />
  }
</div>
`, styles: ["/* projects/ngverse/src/lib/ui/otp-input/otp-input.component.css */\n.listbox-item-active {\n  outline: 1px solid var(--color-ring);\n}\n.code-container {\n  display: flex;\n  gap: 6px;\n  height: 40px;\n}\n.code-input {\n  width: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=otp-input.component.css.map */\n"] }]
  }], null, { codeLength: [{ type: Input, args: [{ isSignal: true, alias: "codeLength", required: false }] }], inputMode: [{ type: Input, args: [{ isSignal: true, alias: "inputMode", required: false }] }], filled: [{ type: Output, args: ["filled"] }], firstInput: [{ type: ViewChild, args: ["firstInput", { isSignal: true }] }], inputs: [{ type: ViewChildren, args: ["inputs", __spreadProps(__spreadValues({}, {
    read: ElementRef
  }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpInputComponent, { className: "OtpInputComponent", filePath: "projects/ngverse/src/lib/ui/otp-input/otp-input.component.ts", lineNumber: 25 });
})();

export {
  OtpInputComponent
};
//# sourceMappingURL=chunk-JMLDGGDP.js.map
