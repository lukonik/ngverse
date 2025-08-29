import{a as f}from"./chunk-WHI2EU32.js";import{a as p}from"./chunk-DGTBODGH.js";import{b as g,c as u}from"./chunk-ZFFSALUF.js";import"./chunk-F4WJRZPQ.js";import"./chunk-GP2QN3H7.js";import"./chunk-W57CNJZN.js";import{Gb as d,Ha as r,Pb as t,Qb as n,Rb as i,eb as c,fa as l,hc as e,ub as m}from"./chunk-UXDRYXR2.js";import"./chunk-HZ6M6AS2.js";var h=class s{ngVersefile="ngverse/ngverse.css";fileService=l(g);ngVerseStyleContent=r("");configCode=` "projectType": "application",
  "schematics": {
    "ngverse:add": {
      "path": "ui"
    }
  }`;tsImportCode=`
  ...
  "compilerOptions": {
    "paths": {
      "@/ui/*": ["./src/app/ui/*"]
    }
   ....
    `;iconLink='<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,check_box,check_box_outline_blank,close,dark_mode,keyboard_arrow_down,light_mode,radio_button_checked,radio_button_unchecked"/> ';allIconsLink='<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"/>';constructor(){this.fileService.getFile(this.ngVersefile).subscribe(a=>{this.ngVerseStyleContent.set(a)})}animationsCode=`import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
       provideAnimationsAsync()
     ],
};`;postcssCode=`{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}`;static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["doc-installation-page"]],decls:31,vars:1,consts:[["label","Installation"],[1,"!m-0"],["language","bash","code","npm install ngverse --save-dev"],["language","bash","code","npm install @angular/cdk --save-dev"],["language","ts",3,"code"],["target","_blank","href","https://tailwindcss.com/docs/installation/framework-guides/angular"]],template:function(o,v){o&1&&(t(0,"doc-blog-page",0)(1,"p",1),e(2," The minimum required Angular version for installation is "),t(3,"strong"),e(4,">=19.0.0"),n(),e(5,". "),n(),t(6,"h2"),e(7,"Install "),i(8,"doc-project-name"),e(9," schematics"),n(),i(10,"doc-source-code",2),t(11,"h2"),e(12,"Install @angular/cdk"),n(),i(13,"doc-source-code",3),t(14,"h2"),e(15,"Add Angular animations"),n(),t(16,"p"),e(17," Add "),t(18,"code"),e(19,"provideAnimationsAsync"),n(),e(20," provider to your "),t(21,"code"),e(22,"appConfig"),n(),e(23," file to enable animations "),n(),i(24,"doc-source-code",4),t(25,"h2"),e(26,"Install tailwind (v4)"),n(),t(27,"p"),e(28," Follow the instructions here: "),t(29,"a",5),e(30,"link"),n()()()),o&2&&(c(24),d("code",v.animationsCode))},dependencies:[p,u,f],encapsulation:2})};export{h as InstallationPageComponent};
