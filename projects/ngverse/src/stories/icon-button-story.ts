import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { IconButtonComponent } from '@/ui/icon-button/icon-button.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, IconButtonComponent, FontIconComponent],
  template: ` <button
    appIconButton
    [color]="color()"
    [disabled]="disabled()"
    [loading]="loading()"
  >
    <app-font-icon>arrow_forward</app-font-icon>
  </button>`,
})
export class IconButtonStory extends IconButtonComponent {}
