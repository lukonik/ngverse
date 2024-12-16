import { Component, computed, inject, input } from '@angular/core';
import { RadioButtonIconComponent } from './radio-button-icon.component';
import { RadioButtonState } from './radio-button.state';

let inputId = 0;

function genInputId() {
  return `radio-button-${inputId++}`;
}

@Component({
  selector: 'app-radio-button',
  imports: [RadioButtonIconComponent],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {
  disabled = input<boolean>();

  radioButtonDisabled = computed(
    () => this.disabled() || this.radioButtonState.disabled()
  );

  radioButtonState = inject(RadioButtonState);

  value = input.required<unknown>();

  id = input(genInputId());

  name = this.radioButtonState.name;

  selected = computed(() => {
    return this.radioButtonState.compareWith(
      this.radioButtonState.getValue(),
      this.value()
    );
  });

  toggle() {
    this.radioButtonState.setValue(this.value());
  }
}
