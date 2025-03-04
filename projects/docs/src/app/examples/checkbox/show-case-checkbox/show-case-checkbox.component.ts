import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from '@/ui/checkbox/checkbox.component';

@Component({
  selector: 'doc-show-case-checkbox',
  imports: [ReactiveFormsModule, CheckboxComponent, FormsModule],
  templateUrl: './show-case-checkbox.component.html',
  styleUrl: './show-case-checkbox.component.css',
})
export class ShowCaseCheckboxComponent {
  formControl = new FormControl(false);
}
