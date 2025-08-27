import { AccordionBodyComponent } from '@/ui/accordion/accordion-body.component';
import { AccordionItemComponent } from '@/ui/accordion/accordion-item.component';
import { AccordionComponent } from '@/ui/accordion/accordion.component';
import { Component } from '@angular/core';

@Component({
  selector: 'doc-preview-accordion',
  imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
  template: `
    <app-accordion>
      <app-accordion-item label="Is it accessible?">
        <app-accordion-body>
          Yes. It adheres to the WAI-ARIA design pattern and uses Angular CDK's
          accordion primitives.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Is it styled?">
        <app-accordion-body>
          Yes. It comes with default styles that you can customize with your own
          CSS.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="Is it animated?">
        <app-accordion-body>
          Yes. It uses CSS transitions for smooth expand/collapse animations.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `,
})
export class PreviewAccordionComponent {}
