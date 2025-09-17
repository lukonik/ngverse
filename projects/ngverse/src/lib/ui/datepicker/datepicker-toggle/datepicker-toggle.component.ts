import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  forwardRef,
  inject,
  input,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

import { PopoverComponent } from '@/ui/popover/popover.component';
import { PopoverOriginDirective } from '@/ui/popover/popover-origin.directive';
import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { injectDpDateAdapter } from '../adapter/date.token';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { DpDateRange } from '../types/date-range';
import { DpSelectionMode } from '../types/selection-mode';
import { DpWeekStart } from '../types/week-start';

@Component({
  selector: 'app-datepicker-toggle',
  imports: [
    ReactiveFormsModule,
    PopoverOriginDirective,
    PopoverComponent,
    DatepickerComponent,
    FontIconComponent,
  ],
  templateUrl: './datepicker-toggle.component.html',
  styleUrl: './datepicker-toggle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerToggleComponent),
      multi: true,
    },
  ],
})
export class DatepickerToggleComponent<T> implements ControlValueAccessor {
  private readonly _adapter = injectDpDateAdapter<T>();
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _value = signal<DpDateRange<T> | T | null>(null);
  private readonly _disabled = signal(false);

  protected readonly disabled = this._disabled.asReadonly();
  protected readonly isOpen = signal(false);

  placeholder = input<string | null>(null);
  displayFormat = input<string>('MMM D, YYYY');
  selectionMode = input<DpSelectionMode>('single');
  minDate = input<T | null>(null);
  maxDate = input<T | null>(null);
  startOfWeek = input<DpWeekStart>(0);
  stretch = input(true);

  protected readonly dateControl = new FormControl<DpDateRange<T> | T | null>(
    null
  );

  private _onChange: ((value: DpDateRange<T> | T | null) => void) | null = null;
  private _onTouched: (() => void) | null = null;

  constructor() {
    const subscription = this.dateControl.valueChanges.subscribe((value) => {
      this._value.set(value as DpDateRange<T> | T | null);
      this._onChange?.(value);
      this.closeIfSelectionComplete(value);
    });

    this._destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  writeValue(value: DpDateRange<T> | T | null): void {
    this._value.set(value);
    this.dateControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: DpDateRange<T> | T | null) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled.set(isDisabled);
    if (isDisabled) {
      this.dateControl.disable({ emitEvent: false });
    } else {
      this.dateControl.enable({ emitEvent: false });
    }
  }

  protected toggle(): void {
    if (this.disabled()) {
      return;
    }
    this.isOpen.update((open) => !open);
  }

  protected handlePopoverClosed(): void {
    this.isOpen.set(false);
    this._onTouched?.();
    this.dateControl.markAsTouched();
  }

  protected readonly displayLabel = computed(() => {
    const mode = this.selectionMode();
    const placeholder =
      this.placeholder() ?? (mode === 'range' ? 'Select range' : 'Select date');
    const value = this._value();
    const format = this.displayFormat();

    if (mode === 'single') {
      if (!value) {
        return placeholder;
      }
      return this._adapter.format(value as T, format);
    }

    const range = value as DpDateRange<T> | null;
    if (!range || (!range.start && !range.end)) {
      return placeholder;
    }

    const start = range.start
      ? this._adapter.format(range.start, format)
      : 'Start';
    const end = range.end ? this._adapter.format(range.end, format) : 'End';

    return `${start} - ${end}`;
  });

  protected readonly isPlaceholder = computed(() => {
    const mode = this.selectionMode();
    const value = this._value();
    if (mode === 'single') {
      return !value;
    }
    const range = value as DpDateRange<T> | null;
    return !range || (!range.start && !range.end);
  });

  private closeIfSelectionComplete(value: DpDateRange<T> | T | null): void {
    if (!this.isOpen()) {
      return;
    }

    if (this.selectionMode() === 'single') {
      if (value) {
        this.isOpen.set(false);
      }
      return;
    }

    const range = value as DpDateRange<T> | null;
    if (range?.start && range?.end) {
      this.isOpen.set(false);
    }
  }
}
