import {
  ButtonComponent
} from "./chunk-3AYE667Y.js";
import {
  ApiInfoComponent,
  EMPTY_API_INPUT_DEFAULT_VALUE
} from "./chunk-BF7ARAHW.js";
import "./chunk-APVNZA6G.js";
import {
  ShowCaseComponent
} from "./chunk-NXTRMWBG.js";
import "./chunk-FVG5D4KT.js";
import {
  PopoverComponent,
  PopoverOriginDirective,
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-PQL4JFHV.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import "./chunk-3GLWUNBJ.js";
import "./chunk-BC37M6ZP.js";
import "./chunk-FK22TT2X.js";
import "./chunk-4YTCSZ5T.js";
import "./chunk-XGFB36A5.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-633NCXCE.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-K3WRTE43.js";
import "./chunk-232UVHOA.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/popover/show-case-popover/show-case-popover.component.ts
function ShowCasePopoverComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p");
    \u0275\u0275text(2, "Are you sure you want to do this?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "button", 5);
    \u0275\u0275listener("click", function ShowCasePopoverComponent_ng_template_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteUser());
    });
    \u0275\u0275text(5, " Yes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275listener("click", function ShowCasePopoverComponent_ng_template_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isOpen.set(false));
    });
    \u0275\u0275text(7, " No ");
    \u0275\u0275elementEnd()()();
  }
}
var ShowCasePopoverComponent = class _ShowCasePopoverComponent {
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
  deleteUser() {
    alert("User deleted");
    this.isOpen.set(false);
  }
  static \u0275fac = function ShowCasePopoverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCasePopoverComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCasePopoverComponent, selectors: [["doc-show-case-popover"]], decls: 5, vars: 7, consts: [["popoverTrigger", "appPopoverOrigin"], ["appButton", "", "appPopoverOrigin", "", 3, "click"], [3, "isOpenChange", "isOpen", "stretchToOrigin", "origin", "offsetY", "outsideClose", "styled", "positionY"], [1, "popover"], [1, "popover-actions"], ["size", "sm", "appButton", "", "color", "danger", 3, "click"], ["size", "sm", "appButton", "", "variant", "outline", 3, "click"]], template: function ShowCasePopoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "button", 1, 0);
      \u0275\u0275listener("click", function ShowCasePopoverComponent_Template_button_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggle());
      });
      \u0275\u0275text(2, " Delete User\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-popover", 2);
      \u0275\u0275twoWayListener("isOpenChange", function ShowCasePopoverComponent_Template_app_popover_isOpenChange_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.isOpen, $event) || (ctx.isOpen = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(4, ShowCasePopoverComponent_ng_template_4_Template, 8, 0, "ng-template");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const popoverTrigger_r4 = \u0275\u0275reference(1);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("isOpen", ctx.isOpen);
      \u0275\u0275property("stretchToOrigin", false)("origin", popoverTrigger_r4)("offsetY", 10)("outsideClose", true)("styled", true)("positionY", "bottom");
    }
  }, dependencies: [PopoverOriginDirective, ButtonComponent, PopoverComponent], styles: ["\n\n.popover[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 200px;\n}\n.popover-actions[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  justify-content: end;\n}\n/*# sourceMappingURL=show-case-popover.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCasePopoverComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-popover", imports: [PopoverOriginDirective, ButtonComponent, PopoverComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<button
  appButton
  appPopoverOrigin
  #popoverTrigger="appPopoverOrigin"
  (click)="toggle()"
>
  Delete User
</button>
<app-popover
  [(isOpen)]="isOpen"
  [stretchToOrigin]="false"
  [origin]="popoverTrigger"
  [offsetY]="10"
  [outsideClose]="true"
  [styled]="true"
  [positionY]="'bottom'"
>
  <ng-template>
    <div class="popover">
      <p>Are you sure you want to do this?</p>
      <div class="popover-actions">
        <button size="sm" appButton color="danger" (click)="deleteUser()">
          Yes
        </button>
        <button
          size="sm"
          appButton
          (click)="isOpen.set(false)"
          variant="outline"
        >
          No
        </button>
      </div>
    </div>
  </ng-template>
</app-popover>
`, styles: ["/* projects/docs/src/app/examples/popover/show-case-popover/show-case-popover.component.css */\n.popover {\n  padding: 10px;\n  width: 200px;\n}\n.popover-actions {\n  margin-top: 10px;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  justify-content: end;\n}\n/*# sourceMappingURL=show-case-popover.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCasePopoverComponent, { className: "ShowCasePopoverComponent", filePath: "projects/docs/src/app/examples/popover/show-case-popover/show-case-popover.component.ts", lineNumber: 13 });
})();

// projects/docs/src/app/features/popover-page/popover-page.component.ts
var ROOT = "popover";
var PopoverPageComponent = class _PopoverPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  apiInfo = {
    entities: [
      {
        name: "PopoverComponent",
        type: "component",
        selector: "app-popover",
        inputs: [
          {
            name: "isOpen",
            type: "model<boolean>()",
            description: "Determines whether the popover is open or closed",
            default: "false"
          },
          {
            name: "origin",
            type: "PopoverOriginDirective",
            description: "The element to which the popover should be attached",
            default: EMPTY_API_INPUT_DEFAULT_VALUE
          },
          {
            name: "offsetX",
            type: "number",
            description: "The horizontal offset of the popover relative to the origin",
            default: "0"
          },
          {
            name: "offsetY",
            type: "number",
            description: "The vertical offset of the popover relative to the origin",
            default: "0"
          },
          {
            name: "styled",
            type: "boolean",
            description: "Applies default styles to the popover",
            default: "false"
          },
          {
            name: "hasBackdrop",
            type: "boolean",
            description: "Displays a backdrop behind the popover",
            default: "false"
          },
          {
            name: "blockScroll",
            type: "boolean",
            description: "Prevents scrolling of the page when popover is open",
            default: "false"
          },
          {
            name: "outsideClose",
            type: "boolean",
            description: "Closes the popover when the user clicks outside or presses the escape key",
            default: "false"
          },
          {
            name: "stretchToOrigin",
            type: "boolean",
            description: "Stretches the width of the popover to fit the origin element",
            default: "false"
          },
          {
            name: "restoreFocus",
            type: "boolean",
            description: "Restores focus to the origin element after the popover is closed",
            default: "false"
          },
          {
            name: "positionY",
            type: "top | right | bottom | left",
            description: "The vertical position of the popover relative to the origin",
            default: "bottom"
          }
        ],
        outputs: [
          {
            name: "opened",
            description: "Emits when the popover is opened",
            value: "void"
          },
          {
            name: "closed",
            description: "Emits when the popover is closed",
            value: "void"
          }
        ]
      },
      {
        name: "PopoverOriginDirective",
        type: "directive",
        selector: "[appPopoverOrigin]",
        description: "The element to which the popover should be attached"
      }
    ]
  };
  sourceTree = [
    {
      name: "popover",
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        ...this.sourceTreeBuilder.directive("popover-origin", ROOT, true)
      ],
      hideName: true
    }
  ];
  static \u0275fac = function PopoverPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopoverPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PopoverPageComponent, selectors: [["doc-popover-page"]], decls: 5, vars: 3, consts: [["subTitle", "Popover is an generic element that displays content in a floating window", 3, "label"], ["name", "popover"], ["name", "popover", 3, "sourceTree"], [3, "apiInfo"]], template: function PopoverPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-popover");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-source-tree", 2)(4, "doc-api-info", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("label", "Popover");
      \u0275\u0275advance(3);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    ShowCasePopoverComponent,
    BlueprintPageComponent,
    ShowCaseComponent,
    SourceTreeComponent,
    ApiInfoComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverPageComponent, [{
    type: Component,
    args: [{ selector: "doc-popover-page", imports: [
      ShowCasePopoverComponent,
      BlueprintPageComponent,
      ShowCaseComponent,
      SourceTreeComponent,
      ApiInfoComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<doc-blueprint-page
  [label]="'Popover'"
  subTitle="Popover is an generic element that displays content in a floating window"
>
  <doc-show-case name="popover">
    <doc-show-case-popover></doc-show-case-popover>
  </doc-show-case>
  <doc-source-tree name="popover" [sourceTree]="sourceTree"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"></doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PopoverPageComponent, { className: "PopoverPageComponent", filePath: "projects/docs/src/app/features/popover-page/popover-page.component.ts", lineNumber: 29 });
})();
export {
  PopoverPageComponent
};
//# sourceMappingURL=chunk-X7TT6UNO.js.map
