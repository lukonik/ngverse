import { Directive } from '@angular/core';

@Directive({
  selector: 'input[appInput]',
  host: {
    class: `h-10 border border-neutral-300
    focus:outline-neutral-500
    rounded-md
    px-2
    [.ng-invalid.ng-touched]:border-red-600
    disabled:bg-neutral-100 disabled:text-neutral-500 disabled:border-neutral-100
    read-only:bg-neutral-100 read-only:text-neutral-500 read-only:border-neutral-100
    `,
  },
})
export class InputDirective {}
