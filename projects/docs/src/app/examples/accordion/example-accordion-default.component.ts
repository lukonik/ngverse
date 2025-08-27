import { AccordionBodyComponent } from '@/ui/accordion/accordion-body.component';
import { AccordionItemComponent } from '@/ui/accordion/accordion-item.component';
import { AccordionComponent } from '@/ui/accordion/accordion.component';
import { Component } from '@angular/core';

@Component({
  selector: 'doc-example-accordion-default',
  imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
  template: `
    <app-accordion>
      <app-accordion-item label="What is Angular?">
        <app-accordion-body>
          Angular is a platform and framework for building single-page client
          applications using HTML and TypeScript.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="What is TypeScript?">
        <app-accordion-body>
          TypeScript is a strongly typed programming language that builds on
          JavaScript, giving you better tooling at any scale.
        </app-accordion-body>
      </app-accordion-item>
      <app-accordion-item label="What is RxJS?">
        <app-accordion-body>
          RxJS is a library for reactive programming using Observables, to make
          it easier to compose asynchronous or callback-based code.
        </app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `,
})
export class ExampleAccordionDefaultComponent {}
