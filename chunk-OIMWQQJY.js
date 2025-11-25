import {
  IconComponent,
  IconRegistry
} from "./chunk-QKJ63TWP.js";
import {
  ApiInfoComponent,
  VOID_API_RETURN_TYPE
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
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RangeValueAccessor
} from "./chunk-3GLWUNBJ.js";
import "./chunk-4XRX3M6E.js";
import {
  DividerComponent
} from "./chunk-HIR2OVX3.js";
import "./chunk-4YTCSZ5T.js";
import "./chunk-P53KIQU7.js";
import "./chunk-64HPILVO.js";
import "./chunk-JX5YVH27.js";
import "./chunk-GOCNYIRL.js";
import "./chunk-ICIB3IHR.js";
import {
  FontIconComponent
} from "./chunk-MTAP3RFR.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2NN34RDL.js";
import "./chunk-VL5VAURS.js";

// projects/docs/src/app/examples/icon/show-case-icon/show-case-icon.component.ts
function ShowCaseIconComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-icon", 8);
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r1.color());
    \u0275\u0275property("name", icon_r1)("width", ctx_r1.size())("height", ctx_r1.size());
  }
}
function ShowCaseIconComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-font-icon", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fontIcon_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r1.color());
    \u0275\u0275property("size", ctx_r1.size());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fontIcon_r3);
  }
}
var ShowCaseIconComponent = class _ShowCaseIconComponent {
  iconRegistry = inject(IconRegistry);
  icons = ["bird", "cat", "heart", "paw", "squirrel", "volleyball"];
  size = model(20, ...ngDevMode ? [{ debugName: "size" }] : []);
  color = model("#00000", ...ngDevMode ? [{ debugName: "color" }] : []);
  fontIcons = ["arrow_back", "arrow_forward", "menu"];
  constructor() {
    for (const icon of this.icons) {
      this.iconRegistry.addIcon(icon, `/show-case-icon/${icon}.svg`);
    }
  }
  static \u0275fac = function ShowCaseIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShowCaseIconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShowCaseIconComponent, selectors: [["doc-show-case-icon"]], inputs: { size: [1, "size"], color: [1, "color"] }, outputs: { size: "sizeChange", color: "colorChange" }, decls: 15, vars: 2, consts: [[1, "show-case"], [1, "header"], ["type", "range", "id", "volume", "name", "volume", "min", "10", "max", "100", 3, "ngModelChange", "ngModel"], ["type", "color", 3, "ngModelChange", "ngModel"], [1, "body"], [3, "name", "color", "width", "height"], [1, "flex", "items-center", "gap-1"], [3, "color", "size"], [3, "name", "width", "height"], [3, "size"]], template: function ShowCaseIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseIconComponent_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.size, $event) || (ctx.size = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function ShowCaseIconComponent_Template_input_ngModelChange_3_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.color, $event) || (ctx.color = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "SVG Icons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275repeaterCreate(7, ShowCaseIconComponent_For_8_Template, 1, 5, "app-icon", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "app-divider");
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Font Icons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275repeaterCreate(13, ShowCaseIconComponent_For_14_Template, 2, 4, "app-font-icon", 7, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.size);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.color);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.icons);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.fontIcons);
    }
  }, dependencies: [IconComponent, FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, DividerComponent, FontIconComponent], styles: ["\n\n.show-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n}\n.show-case[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.show-case[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.bird[_ngcontent-%COMP%] {\n}\n.cat[_ngcontent-%COMP%] {\n}\n.heart[_ngcontent-%COMP%] {\n}\n.paw[_ngcontent-%COMP%] {\n}\n.squirrel[_ngcontent-%COMP%] {\n}\n.volleyball[_ngcontent-%COMP%] {\n}\n/*# sourceMappingURL=show-case-icon.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowCaseIconComponent, [{
    type: Component,
    args: [{ selector: "doc-show-case-icon", imports: [IconComponent, FormsModule, DividerComponent, FontIconComponent], template: '<div class="show-case">\n  <div class="header">\n    <input\n      type="range"\n      id="volume"\n      name="volume"\n      min="10"\n      max="100"\n      [(ngModel)]="size"\n    />\n    <input type="color" [(ngModel)]="color" />\n  </div>\n  <p>SVG Icons</p>\n\n  <div class="body">\n    @for (icon of icons; track $index) {\n      <app-icon\n        [name]="icon"\n        [style.color]="color()"\n        [width]="size()"\n        [height]="size()"\n      ></app-icon>\n    }\n  </div>\n  <app-divider></app-divider>\n  <p>Font Icons</p>\n  <div class="flex items-center gap-1">\n    @for (fontIcon of fontIcons; track $index) {\n      <app-font-icon [style.color]="color()" [size]="size()">{{\n        fontIcon\n      }}</app-font-icon>\n    }\n  </div>\n</div>\n', styles: ["/* projects/docs/src/app/examples/icon/show-case-icon/show-case-icon.component.css */\n.show-case {\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n}\n.show-case .header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.show-case .body {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.bird {\n}\n.cat {\n}\n.heart {\n}\n.paw {\n}\n.squirrel {\n}\n.volleyball {\n}\n/*# sourceMappingURL=show-case-icon.component.css.map */\n"] }]
  }], () => [], { size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }, { type: Output, args: ["sizeChange"] }], color: [{ type: Input, args: [{ isSignal: true, alias: "color", required: false }] }, { type: Output, args: ["colorChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShowCaseIconComponent, { className: "ShowCaseIconComponent", filePath: "projects/docs/src/app/examples/icon/show-case-icon/show-case-icon.component.ts", lineNumber: 14 });
})();

// projects/docs/src/app/features/icon-page/icon-page.component.ts
var ROOT = "icon";
var IconPageComponent = class _IconPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullInlineComponent("icon", ROOT),
        ...this.sourceTreeBuilder.service("icon-registry", ROOT),
        ...this.sourceTreeBuilder.service("icon-loader", ROOT)
      ],
      hideName: true
    }
  ];
  apiInfo = {
    ariaLink: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role",
    entities: [
      {
        name: "IconComponent",
        selector: "app-icon",
        type: "component",
        inputs: [
          {
            name: "name",
            type: "string",
            description: "The name of the icon to display."
          },
          {
            name: "width",
            type: "number | string",
            description: "The width of the icon. it can be either px value like 16px or percentage like 50%."
          },
          {
            name: "height",
            type: "number | string",
            description: "The height of the icon. it can be either px value like 16px or percentage like 50%."
          },
          {
            name: "stretch",
            type: "boolean",
            description: "Whether to stretch the icon to fit the container."
          }
        ]
      },
      {
        name: "IconRegistry",
        type: "service",
        methods: [
          {
            name: "addIcon",
            description: "add an icon to the registry",
            returnType: VOID_API_RETURN_TYPE,
            params: [
              {
                name: "name",
                type: "string",
                description: "The name of the icon to add."
              },
              {
                name: "url",
                type: "string",
                description: "The url of the icon to add."
              }
            ]
          },
          {
            name: "getUrl",
            description: "get the url of an icon",
            returnType: "string | undefined",
            params: [
              {
                name: "name",
                type: "string",
                description: "The icon name"
              }
            ]
          }
        ]
      },
      {
        name: "FontIconComponent",
        type: "component",
        selector: "app-font-icon",
        inputs: [
          {
            name: "ng-content",
            type: "ng-content",
            description: "The name of the icon to display."
          },
          {
            name: "size",
            type: "number | string",
            default: "24px",
            description: "The size of the icon."
          },
          {
            name: "variant",
            type: "outlined | rounded | sharp",
            default: "outlined",
            description: "The variant of the icon."
          }
        ]
      }
    ]
  };
  static \u0275fac = function IconPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconPageComponent, selectors: [["doc-icon-page"]], decls: 6, vars: 3, consts: [["subTitle", "The Icon displays SVG images, which you can easily customize.", 3, "label"], ["name", "icon"], ["type", "component", "name", "icon"], ["name", "icon", 3, "sourceTree"], [3, "apiInfo"]], template: function IconPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "doc-blueprint-page", 0)(1, "doc-show-case", 1);
      \u0275\u0275element(2, "doc-show-case-icon");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "doc-command-installation", 2)(4, "doc-source-tree", 3)(5, "doc-api-info", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("label", "Icon");
      \u0275\u0275advance(4);
      \u0275\u0275property("sourceTree", ctx.sourceTree);
      \u0275\u0275advance();
      \u0275\u0275property("apiInfo", ctx.apiInfo);
    }
  }, dependencies: [
    BlueprintPageComponent,
    ShowCaseIconComponent,
    ShowCaseComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    ApiInfoComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconPageComponent, [{
    type: Component,
    args: [{ selector: "doc-icon-page", imports: [
      BlueprintPageComponent,
      ShowCaseIconComponent,
      ShowCaseComponent,
      SourceTreeComponent,
      CommandInstallationComponent,
      ApiInfoComponent
    ], template: `<doc-blueprint-page
  subTitle="The Icon displays SVG images, which you can easily customize."
  [label]="'Icon'"
>
  <doc-show-case name="icon">
    <doc-show-case-icon></doc-show-case-icon>
  </doc-show-case>
  <doc-command-installation type="component" name="icon">
  </doc-command-installation>
  <doc-source-tree [sourceTree]="sourceTree" name="icon"></doc-source-tree>
  <doc-api-info [apiInfo]="apiInfo"> </doc-api-info>
</doc-blueprint-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconPageComponent, { className: "IconPageComponent", filePath: "projects/docs/src/app/features/icon-page/icon-page.component.ts", lineNumber: 32 });
})();
export {
  IconPageComponent
};
//# sourceMappingURL=chunk-OIMWQQJY.js.map
