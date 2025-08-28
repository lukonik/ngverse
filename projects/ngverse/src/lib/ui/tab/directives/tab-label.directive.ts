import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[appTabLabel]',
})
export class TabLabelDirective {
  templateRef = inject(TemplateRef<unknown>);
}
