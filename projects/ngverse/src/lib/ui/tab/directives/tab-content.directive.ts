import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[appTabContent]',
})
export class TabContentDirective {
  templateRef = inject(TemplateRef<unknown>);
}
