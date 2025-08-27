import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-outline',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton variant="outline">Outline</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonOutlineComponent {}
