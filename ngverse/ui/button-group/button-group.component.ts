import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button-group',
  imports: [],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'group',
    class: 'app-button-group',
    '[class.app-button-group-disabled]': 'isDisabled()',
    '[attr.aria-disabled]': 'isDisabled()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ButtonGroupComponent,
      multi: true,
    },
  ],
})
export class ButtonGroupComponent implements ControlValueAccessor {
  private readonly valueSignal = signal<unknown | null>(null);

  private onChange?: (value: unknown | null) => void;
  private onTouched?: () => void;

  private readonly disabledSignal = signal(false);

  selectItem(value: unknown) {
    if (this.isDisabled()) {
      return;
    }
    this.valueSignal.set(value ?? null);
    this.onChange?.(this.valueSignal());
    this.onTouched?.();
  }

  isSelected(value: unknown) {
    return this.valueSignal() === value;
  }

  isDisabled() {
    return this.disabledSignal();
  }

  writeValue(value: unknown): void {
    this.valueSignal.set(value ?? null);
  }

  registerOnChange(fn: (value: unknown | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledSignal.set(isDisabled);
  }
}
