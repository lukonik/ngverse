import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { IconButtonComponent } from '@/ui/icon-button/icon-button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-show-case-icon-button',
  imports: [FontIconComponent, IconButtonComponent],
  templateUrl: './show-case-icon-button.component.html',
  styleUrl: './show-case-icon-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseIconButtonComponent {}
