import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-loading',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton variant="loading" [loading]="true">Loading...</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonLoadingComponent {}
