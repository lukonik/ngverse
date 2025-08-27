import { AccordionBodyComponent } from '@/ui/accordion/accordion-body.component';
import { AccordionItemComponent } from '@/ui/accordion/accordion-item.component';
import { AccordionComponent } from '@/ui/accordion/accordion.component';
import { Component } from '@angular/core';

@Component({
  selector: 'doc-example-accordion-expanded',
  imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
  template: `
    <app-accordion>
      <app-accordion-item label="Pre-expanded Item" [expanded]="true">
        <app-accordion-body>
          This accordion item is expanded by default when the component loads.
          This is useful for highlighting important content.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Collapsed Item">
        <app-accordion-body>
          This item starts collapsed and can be expanded by clicking the header.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Another Collapsed Item">
        <app-accordion-body>
          Multiple items can have different initial states based on your
          requirements.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `,
})
export class ExampleAccordionExpandedComponent {}
