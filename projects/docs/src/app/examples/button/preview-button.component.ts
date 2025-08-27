import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-preview-button',
  imports: [ButtonComponent],
  template: ` <button appButton>Button</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewButtonComponent {}
