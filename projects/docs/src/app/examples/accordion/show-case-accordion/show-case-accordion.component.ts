import { AccordionBodyComponent } from '@/ui/accordion/accordion-body.component';
import { AccordionItemComponent } from '@/ui/accordion/accordion-item.component';
import { AccordionComponent } from '@/ui/accordion/accordion.component';
import { Component } from '@angular/core';

@Component({
  selector: 'doc-show-case-accordion',
  imports: [AccordionComponent, AccordionItemComponent, AccordionBodyComponent],
  templateUrl: './show-case-accordion.component.html',
  styleUrl: './show-case-accordion.component.css',
})
export class ShowCaseAccordionComponent {
  items = [
    {
      title: 'Why do cats purr?',
      description:
        'Cats purr for various reasons, including relaxation, self-healing, or to communicate contentment or stress.',
    },
    {
      title: 'How long can a turtle live?',
      description:
        'Some turtles can live over 100 years, depending on the species and environment.',
    },
    {
      title: 'Do dogs see in color?',
      description:
        'Yes, but not like humans. Dogs see a limited range of colors, mostly shades of blue and yellow.',
    },
    {
      title: 'Can parrots really talk?',
      description:
        'Parrots can mimic human speech and sounds, especially when trained and exposed to repeated words.',
    },
  ];
}
