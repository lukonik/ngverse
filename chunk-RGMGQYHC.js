import {
  InputDirective
} from "./chunk-QUXJML5I.js";
import {
  ButtonComponent
} from "./chunk-3AYE667Y.js";
import {
  ApiInfoComponent
} from "./chunk-BF7ARAHW.js";
import "./chunk-APVNZA6G.js";
import {
  CommandInstallationComponent
} from "./chunk-CTKIHVNQ.js";
import {
  ShowCaseComponent
} from "./chunk-NXTRMWBG.js";
import "./chunk-FVG5D4KT.js";
import {
  SourceTreeBuilder,
  SourceTreeComponent
} from "./chunk-PQL4JFHV.js";
import {
  BlueprintPageComponent
} from "./chunk-GMGVBBLD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3GLWUNBJ.js";
import "./chunk-BC37M6ZP.js";
import "./chunk-FK22TT2X.js";
import "./chunk-4YTCSZ5T.js";
import "./chunk-XGFB36A5.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import {
  CardComponent
} from "./chunk-633NCXCE.js";
import "./chunk-ICIB3IHR.js";
import "./chunk-K3WRTE43.js";
import "./chunk-232UVHOA.js";
import {
  Component,
  Input,
  Output,
  inject,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/card/show-case-card/show-case-card.component.ts
var ShowCaseCardComponent = class _ShowCaseCardComponent {
  username = model("", ...ngDevMode ? [{ debugName: "username" }] : []);
  password = model("", ...ngDevMode ? [{ debugName: "password" }] : []);
  static \u0275fac = function ShowCaseCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseCardComponent, selectors: [["doc-show-case-card"]], inputs: { username: [1, "username"], password: [1, "password"] }, outputs: { username: "usernameChange", password: "passwordChange" }, decls: 34, vars: 8, consts: [[1, "show-case"], [1, "card"], [1, "card-header"], [1, "card-content"], ["appInput", "", "placeholder", "Username", 3, "ngModelChange", "ngModel"], ["appInput", "", "placeholder", "Password", 3, "ngModelChange", "ngModel"], [1, "card-footer"], ["appButton", "", "variant", "outline", "color", "primary", "size", "sm"], ["appButton", "", "color", "primary", "size", "sm"], [1, "card", 3, "surface"], [1, "card", 3, "shadow"]], template: function ShowCaseCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-card", 1)(2, "div", 2);
      \u0275\u0275text(3, "With Outline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseCardComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseCardComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
      \u0275\u0275text(9, " Back ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275text(11, "Login");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "app-card", 9)(13, "div", 2);
      \u0275\u0275text(14, "With Surface");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 3)(16, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseCardComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseCardComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6)(19, "button", 7);
      \u0275\u0275text(20, " Back ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 8);
      \u0275\u0275text(22, "Login");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "app-card", 10)(24, "div", 2);
      \u0275\u0275text(25, "With Shadow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 3)(27, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseCardComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseCardComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 6)(30, "button", 7);
      \u0275\u0275text(31, " Back ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 8);
      \u0275\u0275text(33, "Login");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(6);
      \u0275\u0275property("surface", true);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(6);
      \u0275\u0275property("shadow", true);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
    }
  }, dependencies: [CardComponent, ButtonComponent, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, InputDirective], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.card[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n  margin-top: 12px;\n}\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n/*# sourceMappingURL=show-case-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseCardComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-card", imports: [CardComponent, ButtonComponent, FormsModule, InputDirective], template: '<div class="show-case">\n  <app-card class="card">\n    <div class="card-header">With Outline</div>\n    <div class="card-content">\n      <input appInput [(ngModel)]="username" placeholder="Username" />\n      <input appInput [(ngModel)]="password" placeholder="Password" />\n    </div>\n    <div class="card-footer">\n      <button appButton variant="outline" color="primary" size="sm">\n        Back\n      </button>\n      <button appButton color="primary" size="sm">Login</button>\n    </div>\n  </app-card>\n  <app-card class="card" [surface]="true">\n    <div class="card-header">With Surface</div>\n    <div class="card-content">\n      <input appInput [(ngModel)]="username" placeholder="Username" />\n      <input appInput [(ngModel)]="password" placeholder="Password" />\n    </div>\n    <div class="card-footer">\n      <button appButton variant="outline" color="primary" size="sm">\n        Back\n      </button>\n      <button appButton color="primary" size="sm">Login</button>\n    </div>\n  </app-card>\n  <app-card class="card" [shadow]="true">\n    <div class="card-header">With Shadow</div>\n    <div class="card-content">\n      <input appInput [(ngModel)]="username" placeholder="Username" />\n      <input appInput [(ngModel)]="password" placeholder="Password" />\n    </div>\n    <div class="card-footer">\n      <button appButton variant="outline" color="primary" size="sm">\n        Back\n      </button>\n      <button appButton color="primary" size="sm">Login</button>\n    </div>\n  </app-card>\n</div>\n', styles: ["/* projects/docs/src/app/examples/card/show-case-card/show-case-card.component.css */\n.show-case {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.card {\n  max-width: 300px;\n}\n.card-header {\n  margin-bottom: 12px;\n}\n.card-footer {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n  margin-top: 12px;\n}\n.card-content {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n/*# sourceMappingURL=show-case-card.component.css.map */\n"] }]
  }], null, { username: [{ type: Input, args: [{ isSignal: true, alias: "username", required: false }] }, { type: Output, args: ["usernameChange"] }], password: [{ type: Input, args: [{ isSignal: true, alias: "password", required: false }] }, { type: Output, args: ["passwordChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseCardComponent, { className: "ShowCaseCardComponent", filePath: "projects/docs/src/app/examples/card/show-case-card/show-case-card.component.ts", lineNumber: 13 });
})();

// projects/docs/src/app/features/card-page/card-page.component.ts
var ROOT = "card";
var CardPageComponent = class _CardPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [...this.sourceTreeBuilder.fullComponent(ROOT, ROOT)],
      hideName: true
    }
  ];
  apiInfo = {
    ariaDescription: "A card is simply a container, so its accessibility features depend on the content it holds.",
    entities: [
      {
        name: "CardComponent",
        type: "component",
        selector: "app-card",
        description: `The card has no default CSS display value, eliminating conflicts with CSS priorities during customization.`,
        inputs: [
          {
            name: "outline",
            type: "boolean",
            description: "adds border",
            default: "true"
          },
          {
            name: "surface",
            type: "boolean",
            description: "adds background color",
            default: "false"
          },
          {
            name: "shadow",
            type: "boolean",
            description: "adds shadow",
            default: "false"
          },
          {
            name: "gap",
            type: "boolean",
            description: "adds padding",
            default: "true"
          }
        ]
      }
    ]
  };
  static \u0275fac = function CardPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardPageComponent, selectors: [["doc-card-page"]], decls: 6, vars: 2, consts: [["label", "Card", "subTitle", "Card serves as a visual container, bringing multiple visual elements together in a cohesive way."], ["name", "card"], ["type", "component", "name", "card"], ["name", "card", 3, "sourceTree"], [3, "apiInfo"]], template: function CardPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-card");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    ShowCaseCardComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardPageComponent, [{
    type: Component,
    args: [{ selector: "doc-card-page", imports: [
      BlueprintPageComponent,
      ShowCaseComponent,
      CommandInstallationComponent,
      SourceTreeComponent,
      ApiInfoComponent,
      ShowCaseCardComponent
    ], template: '<doc-blueprint-page\n  label="Card"\n  subTitle="Card serves as a visual container, bringing multiple visual elements together in a cohesive way."\n>\n  <doc-show-case name="card">\n    <doc-show-case-card></doc-show-case-card>\n  </doc-show-case>\n  <doc-command-installation type="component" name="card">\n  </doc-command-installation>\n  <doc-source-tree [sourceTree]="sourceTree" name="card"></doc-source-tree>\n  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>\n</doc-blueprint-page>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardPageComponent, { className: "CardPageComponent", filePath: "projects/docs/src/app/features/card-page/card-page.component.ts", lineNumber: 30 });
})();
export {
  CardPageComponent
};
//# sourceMappingURL=chunk-RGMGQYHC.js.map
