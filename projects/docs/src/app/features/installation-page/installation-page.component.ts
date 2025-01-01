import { Component } from '@angular/core';
import { BlogPageComponent } from '../../blog/blog-page/blog-page.component';
import { SourceCodeComponent } from '../../blueprint/source-code/source-code.component';

@Component({
  selector: 'doc-installation-page',
  imports: [BlogPageComponent, SourceCodeComponent],
  templateUrl: './installation-page.component.html',
  styleUrl: './installation-page.component.scss',
})
export class InstallationPageComponent {
  animationsCode = `import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
       provideAnimations(),
     ],
};`;
}
