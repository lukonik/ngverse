import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let inputName = 0;

function getInputName() {
  return `radio-group-${inputName++}`;
}

export type OnTouchedFunction = (() => void) | undefined;
export type OnChangeFunction = ((_: unknown) => void) | undefined;
export type ValidatorChangeFunction = (() => void) | undefined;

export type CompareWith = (o1: unknown, o2: unknown) => boolean;

@Component({
  selector: 'app-radio-group',
  imports: [],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RadioGroupComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent implements ControlValueAccessor {
  compareWith = input<CompareWith>((o1, o2) => o1 === o2);
  value = signal<unknown>(undefined);

  name = input(getInputName());
  vertical = input<boolean>(false);
  disabled = signal(false);

  registerOnChangefn: OnChangeFunction;
  validatorChangefn: ValidatorChangeFunction;
  onTouchedfn: OnTouchedFunction;

  writeValue(value: unknown): void {
    this.value.set(value);
  }

  registerOnChange(fn: OnChangeFunction): void {
    this.registerOnChangefn = fn;
  }
  registerOnTouched(fn: OnTouchedFunction): void {
    this.onTouchedfn = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  selected(value: unknown) {
    this.value.set(value);
    this.registerOnChangefn?.(this.value());
    this.onTouchedfn?.();
  }
}
