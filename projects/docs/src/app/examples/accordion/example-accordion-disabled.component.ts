import { AccordionBodyComponent } from '@/ui/accordion/accordion-body.component';
import { AccordionItemComponent } from '@/ui/accordion/accordion-item.component';
import { AccordionComponent } from '@/ui/accordion/accordion.component';
import { Component } from '@angular/core';

@Component({
  selector: 'doc-example-accordion-disabled',
  imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
  template: `
    <app-accordion>
      <app-accordion-item label="Available Item">
        <app-accordion-body>
          This accordion item is available and can be expanded normally.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Disabled Item" [disabled]="true">
        <app-accordion-body>
          This content is not accessible because the item is disabled.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Another Available Item">
        <app-accordion-body>
          This item demonstrates normal functionality alongside disabled items.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `,
})
export class ExampleAccordionDisabledComponent {}
