import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgpAccordion } from 'ng-primitives/accordion';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: NgpAccordion,
      inputs: [
        'ngpAccordionType:type',
        'ngpAccordionCollapsible:collapsible',
        'ngpAccordionValue:value',
        'ngpAccordionDisabled:disabled',
        'ngpAccordionOrientation:orientation',
      ],
      outputs: ['ngpAccordionValueChange:valueChange'],
    },
  ],
})
export class AccordionComponent {}
