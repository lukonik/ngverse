import { ButtonComponent } from '@/ui/button/button.component';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: ` <button
    appButton
    [size]="size()"
    [color]="color()"
    [disabled]="disabled()"
    [loading]="loading()"
  >
    {{ label() }}
  </button>`,
})
export class ButtonStory extends ButtonComponent {
  label = input<string>('Button');
}
