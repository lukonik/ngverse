import { AccordionBodyComponent } from '@/ui/accordion/accordion-body.component';
import { AccordionHeaderComponent } from '@/ui/accordion/accordion-header.component';
import { AccordionItemComponent } from '@/ui/accordion/accordion-item.component';
import { AccordionComponent } from '@/ui/accordion/accordion.component';
import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { Component } from '@angular/core';

@Component({
  selector: 'doc-example-accordion-custom-header',
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionBodyComponent,
    AccordionHeaderComponent,
    FontIconComponent,
  ],
  template: `
    <app-accordion>
      <app-accordion-item>
        <app-accordion-header>
          <div class="flex items-center gap-2">
            <app-font-icon class="text-blue-600">code</app-font-icon>
            <span class="font-medium">Custom Header with Icon</span>
          </div>
        </app-accordion-header>
        <app-accordion-body>
          This accordion item uses a custom header component with an icon and
          styled text instead of the default label attribute.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item>
        <app-accordion-header>
          <div class="flex w-full items-center justify-between">
            <span class="font-semibold text-green-700">Styled Header</span>
            <span class="rounded bg-green-100 px-2 py-1 text-xs text-green-800"
              >New</span
            >
          </div>
        </app-accordion-header>
        <app-accordion-body>
          You can add any HTML content to the custom header, including badges,
          icons, or complex layouts.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `,
})
export class ExampleAccordionCustomHeaderComponent {}
