import{a as u}from"./chunk-5KOMC72X.js";import{b as g,c as f}from"./chunk-WWNGCGXD.js";import"./chunk-BTDR5EWH.js";import"./chunk-FDM76GLF.js";import"./chunk-YJKQC3LA.js";import{Fb as l,Ga as p,Ob as n,Pb as t,Qb as i,db as a,fa as m,gc as e,tb as d}from"./chunk-L4LO2SGZ.js";import"./chunk-HZ6M6AS2.js";var h=class s{postcssCode=`{
    "plugins": {
      "@tailwindcss/postcss": {}
    }
  }`;animationsCode=`import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

  export const appConfig: ApplicationConfig = {
    providers: [
         provideAnimationsAsync()
       ],
  };`;configCode=`
  ...
  "projectType": "application",
  "schematics": {
    "ngverse:ui": {
      "path": "ui" // the path where ui components will be generated, adjust as needed
      // you can add other options as well
    }
  }
  ...
  `;tsImportPath=`
  ...
   "paths": {
      "@/ui/*": ["./src/app/ui/*"] // the path where ui components will be, adjust as needed
    },
  ...
  `;angularCDKStyleImport="@import '@angular/cdk/overlay-prebuilt.css';";globalsCode=p("");fileService=m(g);ngOnInit(){this.fileService.getFile("ngverse/ngverse.css").subscribe(c=>{this.globalsCode.set(c)})}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=d({type:s,selectors:[["doc-ui-schematics-page"]],decls:71,vars:3,consts:[["label","Schematics"],["language","bash",3,"code"],[1,"font-bold"],["language","json",3,"code"],[1,"bold"],["language","ts","code","import { ButtonComponent } from '@/ui/button/button.component';"]],template:function(o,r){o&1&&(n(0,"doc-blog-page",0)(1,"p")(2,"code"),e(3,"ngverse:ui"),t(),e(4," Schematic is used to generate UI components in your app. "),t(),n(5,"p"),e(6," For example: "),n(7,"code"),e(8,"ng g ngverse:ui button"),t(),e(9," will generate a button component. "),t(),n(10,"h2"),e(11,"Schematic Options"),t(),i(12,"doc-source-code",1),n(13,"ul")(14,"li")(15,"span",2)(16,"code"),e(17,"path"),t()(),e(18,": Specifies where to place the component folder. "),t(),n(19,"li")(20,"span",2)(21,"code"),e(22,"project"),t()(),e(23,": The name of the Angular project where the component should be added. By default it will use defaultProject "),t(),n(24,"li")(25,"span",2)(26,"code"),e(27,"prefix"),t()(),e(28,": Specifies the prefix of component. By default, it will use the project's prefix, or 'app' if no project is provided. "),t(),n(29,"li")(30,"span",2)(31,"code"),e(32,"includeTests"),t()(),e(33,": Specifies whether to include test files for the element. "),n(34,"code"),e(35,"False"),t(),e(36," by Default "),t(),n(37,"li")(38,"span",2)(39,"code"),e(40,"replace"),t()(),e(41,": If component already exists, overwrite it. "),n(42,"code"),e(43,"False"),t(),e(44," by Default "),t()(),n(45,"h2"),e(46,"Configure Schematics globally"),t(),n(47,"p"),e(48," In order to generate components in the same parent folder by default, you can configure schematics in "),n(49,"code"),e(50,"angular.json"),t(),e(51," file. "),t(),n(52,"p"),e(53," Add following code to your "),n(54,"code"),e(55,"angular.json"),t(),e(56," project configuration "),t(),i(57,"doc-source-code",3),n(58,"h2"),e(59,"Add Typescript Import Path"),t(),n(60,"p"),e(61,"Add the following path to your "),n(62,"code"),e(63,"tsconfig.json"),t()(),i(64,"doc-source-code",3),n(65,"p"),e(66," By that you will import "),n(67,"span",4),e(68,"UI"),t(),e(69," components, like that "),t(),i(70,"doc-source-code",5),t()),o&2&&(a(12),l("code","ng g ngverse:ui [name]"),a(45),l("code",r.configCode),a(7),l("code",r.tsImportPath))},dependencies:[u,f],encapsulation:2,changeDetection:0})};export{h as UiSchematicsPageComponent};
