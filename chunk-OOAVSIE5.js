import {
  InputDirective
} from "./chunk-QUXJML5I.js";
import {
  ButtonComponent
} from "./chunk-ESRFV6V7.js";
import {
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE
} from "./chunk-YTQ3XDMW.js";
import "./chunk-XNVPQ5U3.js";
import {
  CommandInstallationComponent
} from "./chunk-JIB3DNZG.js";
import {
  ShowCaseComponent
} from "./chunk-FNG7BR3D.js";
import "./chunk-EEYNYO2D.js";
import {
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-Y6XO3YM5.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import "./chunk-3GLWUNBJ.js";
import "./chunk-4XRX3M6E.js";
import "./chunk-HIR2OVX3.js";
import "./chunk-4YTCSZ5T.js";
import {
  CdkPortalOutlet,
  ComponentPortal,
  Overlay,
  TemplatePortal
} from "./chunk-P53KIQU7.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-GOCNYIRL.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-MTAP3RFR.js";
import {
  NgClass
} from "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  Input,
  ViewContainerRef,
  computed,
  fromEvent,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/ngverse/src/lib/ui/tooltip/tooltip-container.component.ts
function TooltipContainerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkPortalOutlet", ctx_r0.contentPortal());
  }
}
function TooltipContainerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.message(), " ");
  }
}
var TooltipContainerComponent = class _TooltipContainerComponent {
  message = signal("", ...ngDevMode ? [{ debugName: "message" }] : []);
  position = signal("top", ...ngDevMode ? [{ debugName: "position" }] : []);
  content = signal(void 0, ...ngDevMode ? [{ debugName: "content" }] : []);
  vf = inject(ViewContainerRef);
  id = signal("", ...ngDevMode ? [{ debugName: "id" }] : []);
  contentPortal = computed(() => {
    const content = this.content();
    if (content) {
      return new TemplatePortal(content, this.vf);
    }
    return;
  }, ...ngDevMode ? [{ debugName: "contentPortal" }] : []);
  static \u0275fac = function TooltipContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TooltipContainerComponent, selectors: [["app-tooltip-container"]], decls: 3, vars: 3, consts: [["role", "tooltip", 1, "tooltip", 3, "ngClass", "id"], [3, "cdkPortalOutlet"]], template: function TooltipContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, TooltipContainerComponent_Conditional_1_Template, 1, 1, "ng-container", 1)(2, TooltipContainerComponent_Conditional_2_Template, 1, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.position())("id", ctx.id());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.contentPortal() ? 1 : 2);
    }
  }, dependencies: [CdkPortalOutlet, NgClass], styles: ['\n\n.tooltip[_ngcontent-%COMP%] {\n  background-color: var(--color-inverse);\n  color: var(--color-inverse-foreground);\n  padding: 8px;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: opacity 0.3s ease;\n  position: relative;\n}\n.tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n.tooltip.top[_ngcontent-%COMP%]::after {\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 6px 6px 0 6px;\n  border-color: var(--color-inverse) transparent transparent transparent;\n}\n.tooltip.right[_ngcontent-%COMP%]::after {\n  top: 50%;\n  left: -6px;\n  transform: translateY(-50%);\n  border-width: 6px 6px 6px 0;\n  border-color: transparent var(--color-inverse) transparent transparent;\n}\n.tooltip.bottom[_ngcontent-%COMP%]::after {\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 0 6px 6px 6px;\n  border-color: transparent transparent var(--color-inverse) transparent;\n}\n.tooltip.left[_ngcontent-%COMP%]::after {\n  top: 50%;\n  right: -6px;\n  transform: translateY(-50%);\n  border-width: 6px 0 6px 6px;\n  border-color: transparent transparent transparent var(--color-inverse);\n}\n/*# sourceMappingURL=tooltip-container.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipContainerComponent, [{
    type: Component,
    args: [{ selector: "app-tooltip-container", imports: [CdkPortalOutlet, NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="tooltip" role="tooltip" [ngClass]="position()" [id]="id()">\n  @if (contentPortal()) {\n    <ng-container [cdkPortalOutlet]="contentPortal()"></ng-container>\n  } @else {\n    {{ message() }}\n  }\n</div>\n', styles: ['/* projects/ngverse/src/lib/ui/tooltip/tooltip-container.component.css */\n.tooltip {\n  background-color: var(--color-inverse);\n  color: var(--color-inverse-foreground);\n  padding: 8px;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: opacity 0.3s ease;\n  position: relative;\n}\n.tooltip::after {\n  content: "";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n.tooltip.top::after {\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 6px 6px 0 6px;\n  border-color: var(--color-inverse) transparent transparent transparent;\n}\n.tooltip.right::after {\n  top: 50%;\n  left: -6px;\n  transform: translateY(-50%);\n  border-width: 6px 6px 6px 0;\n  border-color: transparent var(--color-inverse) transparent transparent;\n}\n.tooltip.bottom::after {\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 0 6px 6px 6px;\n  border-color: transparent transparent var(--color-inverse) transparent;\n}\n.tooltip.left::after {\n  top: 50%;\n  right: -6px;\n  transform: translateY(-50%);\n  border-width: 6px 0 6px 6px;\n  border-color: transparent transparent transparent var(--color-inverse);\n}\n/*# sourceMappingURL=tooltip-container.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TooltipContainerComponent, { className: "TooltipContainerComponent", filePath: "projects/ngverse/src/lib/ui/tooltip/tooltip-container.component.ts", lineNumber: 20 });
})();

// projects/ngverse/src/lib/ui/tooltip/tooltip.directive.ts
var tooltipId = 0;
function getTooltipId() {
  return `tooltip-${tooltipId++}`;
}
var TooltipDirective = class _TooltipDirective {
  message = input.required(...ngDevMode ? [{ debugName: "message", alias: "appTooltip" }] : [{ alias: "appTooltip" }]);
  tooltipPosition = input("top", ...ngDevMode ? [{ debugName: "tooltipPosition" }] : []);
  tooltipEvent = input("hover", ...ngDevMode ? [{ debugName: "tooltipEvent" }] : []);
  tooltipDelay = input(0, ...ngDevMode ? [{ debugName: "tooltipDelay", transform: numberAttribute }] : [{ transform: numberAttribute }]);
  tooltipContent = input(...ngDevMode ? [void 0, { debugName: "tooltipContent" }] : []);
  tooltipId = getTooltipId();
  overlay = inject(Overlay);
  el = inject(ElementRef);
  document = inject(DOCUMENT);
  overlayRef;
  timeoutId;
  escapeSub;
  onFocus() {
    if (this.tooltipEvent() === "focus") {
      this.show();
    }
  }
  onBlur() {
    if (this.tooltipEvent() === "focus") {
      this.hide();
    }
  }
  onMouseEnter() {
    if (this.tooltipEvent() === "hover") {
      this.show();
    }
  }
  onMouseLeave() {
    if (this.tooltipEvent() === "hover") {
      this.hide();
    }
  }
  show() {
    this.clearSchedule();
    this.timeoutId = setTimeout(() => {
      const originElement = this.el.nativeElement;
      const tooltipContent = this.tooltipContent();
      const portal = new ComponentPortal(TooltipContainerComponent);
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position().flexibleConnectedTo(originElement).withPositions([this.getOverlayPosition()])
      });
      const componentRef = this.overlayRef.attach(portal);
      componentRef.instance.content.set(tooltipContent);
      componentRef.instance.message.set(this.message());
      componentRef.instance.position.set(this.tooltipPosition());
      componentRef.instance.id.set(this.tooltipId);
      this.listenToEscape();
    }, this.tooltipDelay());
  }
  hide() {
    this.escapeSub?.unsubscribe();
    this.clearSchedule();
    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach();
      this.overlayRef = void 0;
    }
  }
  getOverlayPosition() {
    const offset = 6;
    const tooltipPosition = this.tooltipPosition();
    switch (tooltipPosition) {
      case "top":
        return {
          originX: "center",
          originY: "top",
          overlayX: "center",
          overlayY: "bottom",
          offsetY: -offset
        };
      case "right":
        return {
          originX: "end",
          originY: "center",
          overlayX: "start",
          overlayY: "center",
          offsetX: offset
        };
      case "bottom":
        return {
          originX: "center",
          originY: "bottom",
          overlayX: "center",
          overlayY: "top",
          offsetY: offset
        };
      case "left":
        return {
          originX: "start",
          originY: "center",
          overlayX: "end",
          overlayY: "center",
          offsetX: -offset
        };
    }
  }
  clearSchedule() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = void 0;
    }
  }
  listenToEscape() {
    this.escapeSub?.unsubscribe();
    this.escapeSub = fromEvent(this.document, "keydown").subscribe((event) => {
      if (event.key === "Escape") {
        this.hide();
      }
    });
  }
  ngOnDestroy() {
    this.clearSchedule();
    this.escapeSub?.unsubscribe();
  }
  static \u0275fac = function TooltipDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TooltipDirective, selectors: [["", "appTooltip", ""]], hostVars: 1, hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", function TooltipDirective_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function TooltipDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-describedby", ctx.tooltipId);
    }
  }, inputs: { message: [1, "appTooltip", "message"], tooltipPosition: [1, "tooltipPosition"], tooltipEvent: [1, "tooltipEvent"], tooltipDelay: [1, "tooltipDelay"], tooltipContent: [1, "tooltipContent"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[appTooltip]",
      host: {
        "(focus)": "onFocus()",
        "(blur)": "onBlur()",
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()",
        "[attr.aria-describedby]": "tooltipId"
      }
    }]
  }], null, { message: [{ type: Input, args: [{ isSignal: true, alias: "appTooltip", required: true }] }], tooltipPosition: [{ type: Input, args: [{ isSignal: true, alias: "tooltipPosition", required: false }] }], tooltipEvent: [{ type: Input, args: [{ isSignal: true, alias: "tooltipEvent", required: false }] }], tooltipDelay: [{ type: Input, args: [{ isSignal: true, alias: "tooltipDelay", required: false }] }], tooltipContent: [{ type: Input, args: [{ isSignal: true, alias: "tooltipContent", required: false }] }] });
})();

// projects/docs/src/app/examples/tooltip/show-case-tooltip/show-case-tooltip.component.ts
function ShowCaseTooltipComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275text(2, " I love NgVerse! ");
    \u0275\u0275elementEnd();
  }
}
var ShowCaseTooltipComponent = class _ShowCaseTooltipComponent {
  static \u0275fac = function ShowCaseTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseTooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseTooltipComponent, selectors: [["doc-show-case-tooltip"]], decls: 10, vars: 1, consts: [["customContent", ""], [1, "tooltips"], ["appButton", "", "appTooltip", "Top tooltip", "tooltipPosition", "top"], ["appButton", "", "appTooltip", "Right tooltip", "tooltipPosition", "right"], ["appInput", "", "appTooltip", "Bottom Tooltip", "tooltipPosition", "bottom", "placeholder", "Focus to show", "tooltipEvent", "focus"], ["appButton", "", "appTooltip", "", "tooltipPosition", "left", 3, "tooltipContent"], [1, "custom-tooltip-content"], ["src", "show-case-tooltip/thanos.webp", "alt", "thanos", "width", "100", "height", "100"]], template: function ShowCaseTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
      \u0275\u0275text(2, " Top Tooltip ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275text(4, " Right Tooltip ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "input", 4);
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275text(7, " Custom Content Tooltip ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ShowCaseTooltipComponent_ng_template_8_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const customContent_r1 = \u0275\u0275reference(9);
      \u0275\u0275advance(6);
      \u0275\u0275property("tooltipContent", customContent_r1);
    }
  }, dependencies: [TooltipDirective, ButtonComponent, InputDirective], styles: ["\n\n.tooltips[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.custom-tooltip-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=show-case-tooltip.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseTooltipComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-tooltip", imports: [TooltipDirective, ButtonComponent, InputDirective], template: '<div class="tooltips">\n  <button appButton appTooltip="Top tooltip" tooltipPosition="top">\n    Top Tooltip\n  </button>\n  <button appButton appTooltip="Right tooltip" tooltipPosition="right">\n    Right Tooltip\n  </button>\n  <input\n    appInput\n    appTooltip="Bottom Tooltip"\n    tooltipPosition="bottom"\n    placeholder="Focus to show"\n    tooltipEvent="focus"\n  />\n  <button\n    appButton\n    appTooltip\n    tooltipPosition="left"\n    [tooltipContent]="customContent"\n  >\n    Custom Content Tooltip\n  </button>\n  <ng-template #customContent>\n    <div class="custom-tooltip-content">\n      <img\n        src="show-case-tooltip/thanos.webp"\n        alt="thanos"\n        width="100"\n        height="100"\n      />\n      I love NgVerse!\n    </div>\n  </ng-template>\n</div>\n', styles: ["/* projects/docs/src/app/examples/tooltip/show-case-tooltip/show-case-tooltip.component.css */\n.tooltips {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.custom-tooltip-content {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n/*# sourceMappingURL=show-case-tooltip.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseTooltipComponent, { className: "ShowCaseTooltipComponent", filePath: "projects/docs/src/app/examples/tooltip/show-case-tooltip/show-case-tooltip.component.ts", lineNumber: 12 });
})();

// projects/docs/src/app/features/tooltip-page/tooltip-page.component.ts
var ROOT = "tooltip";
var TooltipPageComponent = class _TooltipPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.directive("tooltip", ROOT, true),
        ...this.sourceTreeBuilder.fullComponent("tooltip-container", `${ROOT}`)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",
    entities: [
      {
        name: "TooltipDirective",
        type: "directive",
        selector: "[appTooltip]",
        inputs: [
          {
            name: "appTooltip",
            type: "string",
            description: "text to display on tooltip",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          },
          {
            name: "tooltipPosition",
            type: "top | right | bottom | left",
            description: "tooltip position",
            default: "top"
          },
          {
            name: "tooltipEvent",
            type: "hover | focus",
            description: "defines when to display tooltip",
            default: "hover"
          },
          {
            name: "tooltipDelay",
            type: "number",
            description: "A delay (in milliseconds) before the tooltip appears.",
            default: "0"
          },
          {
            name: "tooltipContent",
            type: "ng-template",
            description: "The content template to be displayed inside the tooltip.",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          }
        ]
      }
    ]
  };
  static \u0275fac = function TooltipPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TooltipPageComponent, selectors: [["doc-tooltip-page"]], decls: 6, vars: 4, consts: [[3, "subTitle", "label"], ["name", "tooltip"], ["type", "component", "name", "tooltip"], ["name", "tooltip", 3, "sourceTree"], [3, "apiInfo"]], template: function TooltipPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-tooltip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("subTitle", "A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. ")("label", "Tooltip");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    CommandInstallationComponent,
    ShowCaseTooltipComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipPageComponent, [{
    type: Component,
    args: [{ selector: "doc-tooltip-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      ShowCaseComponent,
      CommandInstallationComponent,
      ShowCaseTooltipComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], template: `<doc-blueprint-page
  [subTitle]="
    'A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. '
  "
  [label]="'Tooltip'"
>
  <doc-show-case name="tooltip">
    <doc-show-case-tooltip></doc-show-case-tooltip>
  </doc-show-case>
  <doc-command-installation type="component" name="tooltip">
  </doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="tooltip"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TooltipPageComponent, { className: "TooltipPageComponent", filePath: "projects/docs/src/app/features/tooltip-page/tooltip-page.component.ts", lineNumber: 32 });
})();
export {
  TooltipPageComponent
};
//# sourceMappingURL=chunk-OOAVSIE5.js.map
