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
  selector: 'app-month-view',
  imports: [NgFor, NgClass],
  templateUrl: './month-view.component.html',
  styleUrl: './month-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthViewComponent<T> {
  private readonly _dateAdapter = injectDpDateAdapter<T>();

  activeDate = input.required<T>();
  minDate = input<T | null>(null);
  maxDate = input<T | null>(null);

  readonly monthSelected = output<number>();

  protected readonly months = computed(() => {
    const minDate = this.minDate();
    const maxDate = this.maxDate();
    const activeDate = this.activeDate();
    const activeYear = this._dateAdapter.year(activeDate);

    return this._dateAdapter.getMonthNames('short').map((label, index) => {
      const startOfMonth = this._dateAdapter.createDate(activeYear, index, 1);
      const endOfMonth = this._dateAdapter.endOfMonth(startOfMonth);
      const disabled =
        (!!minDate && this._dateAdapter.compare(endOfMonth, minDate) < 0) ||
        (!!maxDate && this._dateAdapter.compare(startOfMonth, maxDate) > 0);
      return {
        label,
        index,
        disabled,
      };
    });
  });

  protected readonly activeMonth = computed(() =>
    this._dateAdapter.month(this.activeDate())
  );

  protected onSelect(month: { index: number; disabled: boolean }): void {
    if (month.disabled) {
      return;
    }
    this.monthSelected.emit(month.index);
  }
}
