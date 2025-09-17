import { NgClass, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { injectDpDateAdapter } from '../adapter/date.token';

@Component({
  selector: 'app-year-view',
  imports: [NgFor, NgClass],
  templateUrl: './year-view.component.html',
  styleUrl: './year-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearViewComponent<T> {
  private readonly _dateAdapter = injectDpDateAdapter<T>();

  years = input.required<number[]>();
  activeDate = input.required<T>();
  minDate = input<T | null>(null);
  maxDate = input<T | null>(null);

  readonly yearSelected = output<number>();

  protected readonly activeYear = computed(() =>
    this._dateAdapter.year(this.activeDate())
  );

  protected readonly yearItems = computed(() =>
    this.years().map((year) => ({
      value: year,
      disabled: this._isYearDisabled(year),
    }))
  );

  protected onSelect(year: { value: number; disabled: boolean }): void {
    if (year.disabled) {
      return;
    }
    this.yearSelected.emit(year.value);
  }

  private _isYearDisabled(year: number): boolean {
    const minDate = this.minDate();
    const maxDate = this.maxDate();
    if (minDate && year < this._dateAdapter.year(minDate)) {
      return true;
    }
    if (maxDate && year > this._dateAdapter.year(maxDate)) {
      return true;
    }
    return false;
  }
}
