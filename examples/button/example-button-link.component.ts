import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-button-link',
  imports: [ButtonComponent],
  template: `
    <div>
      <button appButton variant="link">Link Button</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonLinkComponent {}
