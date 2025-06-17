import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      opacity: 1;
      transition: opacity 250ms ease-out;
      @starting-style {
        opacity: 0;
      }
    }
  `,
  host: {
    class: 'text-sm text-danger',
  },
})
export class ErrorComponent {}
