import { ButtonComponent } from '@/ui/button/button.component';
import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-icon',
  imports: [ButtonComponent, FontIconComponent],
  template: `
    <div>
      <button appButton variant="icon" icon aria-label="Settings">
        <app-font-icon>settings</app-font-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonIconComponent {}
