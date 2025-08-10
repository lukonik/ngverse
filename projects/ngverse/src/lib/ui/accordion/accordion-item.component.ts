import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  NgpAccordionContent,
  NgpAccordionItem,
  NgpAccordionTrigger,
} from 'ng-primitives/accordion';
import { NgpButton } from 'ng-primitives/button';
@Component({
  selector: 'app-accordion-item',
  imports: [NgpAccordionTrigger, NgpAccordionContent, NgpButton],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'block mb-3 pb-3 border-b border-b border-gray-300 data-disabled:opacity-50',
  },
  hostDirectives: [
    {
      directive: NgpAccordionItem,
      inputs: [
        'ngpAccordionItemValue:value',
        'ngpAccordionItemDisabled:disabled',
      ],
    },
  ],
})
export class AccordionItemComponent {
  ngpAccordionItem = inject(NgpAccordionItem);
}
