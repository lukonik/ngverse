import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-size-sm',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton size="sm">Small</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonSizeSmComponent {}
