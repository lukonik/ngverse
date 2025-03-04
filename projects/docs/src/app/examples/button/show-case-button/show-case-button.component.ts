import { Component } from '@angular/core';
import { ButtonComponent } from '@/ui/button/button.component';
import { IconComponent } from '@/ui/icon/icon.component';

@Component({
  selector: 'doc-show-case-button',
  imports: [ButtonComponent, IconComponent],
  templateUrl: './show-case-button.component.html',
  styleUrl: './show-case-button.component.css',
})
export class ShowCaseButtonComponent {}
