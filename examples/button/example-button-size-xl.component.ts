import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-size-xl',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton size="xl">Extra Large</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonSizeXlComponent {}
