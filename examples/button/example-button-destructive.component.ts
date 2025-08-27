import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-destructive',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton variant="destructive">Delete Account</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonDestructiveComponent {}
