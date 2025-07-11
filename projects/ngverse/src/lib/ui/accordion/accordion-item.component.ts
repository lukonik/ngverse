import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { _IdGenerator } from '@angular/cdk/a11y';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  imports: [FontIconComponent],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block mb-3 pb-3 border-b border-divider',
  },
})
export class AccordionItemComponent extends CdkAccordionItem {
  label = input<string>();
  accordionBodyId = inject(_IdGenerator).getId('accordion-item-body-');
  accordionTriggerId = inject(_IdGenerator).getId('accordion-item-trigger-');
}
