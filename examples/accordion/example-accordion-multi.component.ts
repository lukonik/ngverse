import { AccordionBodyComponent } from '@/ui/accordion/accordion-body.component';
import { AccordionItemComponent } from '@/ui/accordion/accordion-item.component';
import { AccordionComponent } from '@/ui/accordion/accordion.component';
import { Component } from '@angular/core';

@Component({
  selector: 'doc-example-accordion-multi',
  imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
  template: `
    <app-accordion [multi]="true">
      <app-accordion-item label="Frontend Technologies" [expanded]="true">
        <app-accordion-body>
          Modern frontend technologies include HTML5, CSS3, JavaScript,
          TypeScript, React, Angular, Vue.js, and various build tools like
          Webpack and Vite.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Backend Technologies" [expanded]="true">
        <app-accordion-body>
          Backend development involves Node.js, Python, Java, C#, databases like
          PostgreSQL and MongoDB, and deployment platforms like AWS and Docker.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Development Tools">
        <app-accordion-body>
          Essential development tools include Git for version control, VS Code
          or other IDEs, debugging tools, testing frameworks like Jest and
          Cypress.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `,
})
export class ExampleAccordionMultiComponent {}
