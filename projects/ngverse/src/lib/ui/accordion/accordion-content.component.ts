import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  template: `<ng-content> </ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pt-2 block',
  },
})
export class AccordionContentComponent {}
