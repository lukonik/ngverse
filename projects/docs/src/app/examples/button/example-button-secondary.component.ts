import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-secondary',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton variant="secondary">Secondary</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonSecondaryComponent {}
