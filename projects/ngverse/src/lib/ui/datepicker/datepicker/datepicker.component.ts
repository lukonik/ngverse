import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { injectDpDateAdapter } from '../adapter/date.token';
import { CalendarComponent } from '../calendar/calendar.component';
import { DpDateRange } from '../types/date-range';
import { DpSelectionMode } from '../types/selection-mode';
import { DpWeekStart } from '../types/week-start';

@Component({
  selector: 'app-datepicker',
  imports: [CalendarComponent, NgClass],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DatepickerComponent,
      multi: true,
    },
  ],
})
export class DatepickerComponent<T> implements ControlValueAccessor {
  private readonly _dateAdapter = injectDpDateAdapter<T>();
  private readonly _disabled = signal(false);
  protected readonly disabled = this._disabled.asReadonly();

  selectionMode = input<DpSelectionMode>('single');
  minDate = input<T | null>(null);
  maxDate = input<T | null>(null);
  startOfWeek = input<DpWeekStart>(0);

  private readonly _selectedDate = signal<T | null>(null);
  private readonly _selectedRange = signal<DpDateRange<T>>({
    start: null,
    end: null,
  });

  private _onChange: ((value: DpDateRange<T> | T | null) => void) | null = null;
  private _onTouched: (() => void) | null = null;

  protected readonly selectionLabel = computed(() => {
    if (this.selectionMode() === 'single') {
      const value = this._selectedDate();
      return value
        ? this._dateAdapter.format(value, 'MMM D, YYYY')
        : 'No date selected';
    }
    const range = this._selectedRange();
    if (!range.start && !range.end) {
      return 'No range selected';
    }
    const start = range.start
      ? this._dateAdapter.format(range.start, 'MMM D, YYYY')
      : 'Start';
    const end = range.end
      ? this._dateAdapter.format(range.end, 'MMM D, YYYY')
      : 'End';
    return `${start} - ${end}`;
  });

  constructor() {
    effect(() => {
      if (this.selectionMode() === 'single') {
        this._selectedRange.set({ start: null, end: null });
      } else {
        this._selectedDate.set(null);
      }
    });

    effect(() => {
      const mode = this.selectionMode();
      this.minDate();
      this.maxDate();

      if (mode === 'single') {
        const current = this._selectedDate();
        if (current && !this._isDateInRange(current)) {
          this._selectedDate.set(null);
          this._emitChange(null);
        }
      } else {
        const range = this._selectedRange();
        const normalized = this._normalizeRange(range);
        if (!this._rangesEqual(range, normalized)) {
          this._selectedRange.set(normalized);
          this._emitChange(normalized);
        }
      }
    });
  }

  protected handleDateSelected(date: T): void {
    if (this.disabled()) {
      return;
    }

    this._onTouched?.();

    if (!this._isDateInRange(date)) {
      return;
    }

    if (this.selectionMode() === 'single') {
      const cloned = this._dateAdapter.clone(date);
      this._selectedDate.set(cloned);
      this._emitChange(cloned);
      return;
    }

    const current = this._selectedRange();
    if (!current.start || (current.start && current.end)) {
      const start = this._dateAdapter.clone(date);
      const range = { start, end: null };
      this._selectedRange.set(range);
      this._emitChange(range);
      return;
    }

    const start = current.start;
    const endCandidate = this._dateAdapter.clone(date);
    if (!this._isDateInRange(endCandidate)) {
      return;
    }
    const compare = this._dateAdapter.compare(start, endCandidate);

    if (compare <= 0) {
      const range = this._createRange(start, endCandidate);
      this._selectedRange.set(range);
      this._emitChange(range);
    } else {
      const range = this._createRange(endCandidate, start);
      this._selectedRange.set(range);
      this._emitChange(range);
    }
  }

  protected selectedDate(): T | null {
    return this.selectionMode() === 'single' ? this._selectedDate() : null;
  }

  protected selectedRange(): DpDateRange<T> | null {
    return this.selectionMode() === 'range' ? this._selectedRange() : null;
  }

  writeValue(value: DpDateRange<T> | T | null): void {
    if (value === null) {
      this._selectedDate.set(null);
      this._selectedRange.set({ start: null, end: null });
      return;
    }

    if (this._isRangeValue(value)) {
      const normalized = this._normalizeRange(value);
      this._selectedRange.set(normalized);
      this._selectedDate.set(normalized.start ?? null);
      return;
    }

    this._selectedDate.set(this._dateAdapter.clone(value as T));
    this._selectedRange.set({ start: null, end: null });
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this._onChange = fn as (value: DpDateRange<T> | T | null) => void;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled.set(isDisabled);
  }

  private _emitChange(value: DpDateRange<T> | T | null): void {
    if (!this._onChange) {
      return;
    }
    if (value === null) {
      this._onChange(null);
      return;
    }
    if (this._isRangeValue(value)) {
      this._onChange({
        start: value.start ? this._dateAdapter.clone(value.start) : null,
        end: value.end ? this._dateAdapter.clone(value.end) : null,
      });
      return;
    }
    this._onChange(this._dateAdapter.clone(value as T));
  }

  private _isRangeValue(
    value: DpDateRange<T> | T | null
  ): value is DpDateRange<T> {
    return (
      value !== null &&
      typeof value === 'object' &&
      'start' in value &&
      'end' in value
    );
  }

  private _isDateInRange(date: T): boolean {
    const minDate = this.minDate();
    const maxDate = this.maxDate();
    if (minDate && this._dateAdapter.compare(date, minDate) < 0) {
      return false;
    }
    if (maxDate && this._dateAdapter.compare(date, maxDate) > 0) {
      return false;
    }
    return true;
  }

  private _createRange(start: T, end: T): DpDateRange<T> {
    const [orderedStart, orderedEnd] = this._orderDates(start, end);
    return { start: orderedStart, end: orderedEnd };
  }

  private _orderDates(dateA: T, dateB: T): [T, T] {
    const compare = this._dateAdapter.compare(dateA, dateB);
    if (compare <= 0) {
      return [this._dateAdapter.clone(dateA), this._dateAdapter.clone(dateB)];
    }
    return [this._dateAdapter.clone(dateB), this._dateAdapter.clone(dateA)];
  }

  private _rangesEqual(
    rangeA: DpDateRange<T>,
    rangeB: DpDateRange<T>
  ): boolean {
    const startEqual = this._datesEqual(rangeA.start, rangeB.start);
    const endEqual = this._datesEqual(rangeA.end, rangeB.end);
    return startEqual && endEqual;
  }

  private _datesEqual(a: T | null, b: T | null): boolean {
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return this._dateAdapter.isSameDay(a, b);
  }

  private _normalizeRange(range: DpDateRange<T>): DpDateRange<T> {
    const startInRange =
      range.start && this._isDateInRange(range.start)
        ? this._dateAdapter.clone(range.start)
        : null;
    const endInRange =
      range.end && this._isDateInRange(range.end)
        ? this._dateAdapter.clone(range.end)
        : null;

    if (startInRange && endInRange) {
      const [start, end] = this._orderDates(startInRange, endInRange);
      return { start, end };
    }

    return {
      start: startInRange,
      end: endInRange,
    };
  }
}
