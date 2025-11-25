import {
  SourceCodeComponent
} from "./chunk-GOCNYIRL.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-2NN34RDL.js";

// projects/docs/src/app/blueprint/command-installation/command-installation.component.ts
var CommandInstallationComponent = class _CommandInstallationComponent {
  name = input.required(...ngDevMode ? [{ debugName: "name" }] : []);
  cmd = input("ui", ...ngDevMode ? [{ debugName: "cmd" }] : []);
  installation = computed(() => `ng g ngverse:${this.cmd()} ${this.name()}`, ...ngDevMode ? [{ debugName: "installation" }] : []);
  static \u0275fac = function CommandInstallationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommandInstallationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommandInstallationComponent, selectors: [["doc-command-installation"]], inputs: { name: [1, "name"], cmd: [1, "cmd"] }, decls: 3, vars: 2, consts: [[1, "m-0", "mb-3", "text-xl", "font-normal"], ["language", "bash", 3, "surface", "code"]], template: function CommandInstallationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h4", 0);
      \u0275\u0275text(1, "Installation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "doc-source-code", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("surface", true)("code", ctx.installation());
    }
  }, dependencies: [SourceCodeComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandInstallationComponent, [{
    type: Component,
    args: [{ selector: "doc-command-installation", imports: [SourceCodeComponent], template: '<h4 class="m-0 mb-3 text-xl font-normal">Installation</h4>\n<doc-source-code\n  [surface]="true"\n  [code]="installation()"\n  language="bash"\n></doc-source-code>\n' }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true }] }], cmd: [{ type: Input, args: [{ isSignal: true, alias: "cmd", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommandInstallationComponent, { className: "CommandInstallationComponent", filePath: "projects/docs/src/app/blueprint/command-installation/command-installation.component.ts", lineNumber: 10 });
})();

export {
  CommandInstallationComponent
};
//# sourceMappingURL=chunk-JIB3DNZG.js.map
