import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-ghost',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton variant="ghost">Ghost</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonGhostComponent {}
