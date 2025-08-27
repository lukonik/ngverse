import { ButtonComponent } from '@/ui/button/button.component';
import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-with-icon',
  imports: [ButtonComponent, FontIconComponent],
  template: `
    <div>
      <button appButton variant="with-icon">
        <app-font-icon>add</app-font-icon>
        Create New
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonWithIconComponent {}
