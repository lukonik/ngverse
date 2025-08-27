import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-size-lg',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton size="lg">Large</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonSizeLgComponent {}
