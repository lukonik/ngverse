import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-size-md',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton size="md">Medium</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonSizeMdComponent {}
