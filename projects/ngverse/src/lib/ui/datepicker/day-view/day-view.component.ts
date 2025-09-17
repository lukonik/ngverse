import { NgClass, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { injectDpDateAdapter } from '../adapter/date.token';
import { CellDirective } from '../core/cell.directive';
import { DayCell } from '../core/day-cell';
import { DpDateRange } from '../types/date-range';
import { DpSelectionMode } from '../types/selection-mode';
import { DpWeekStart } from '../types/week-start';

@Component({
  selector: 'app-day-view',
  imports: [NgFor, NgClass, CellDirective],
  templateUrl: './day-view.component.html',
  styleUrl: './day-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayViewComponent<T> {
  private readonly _dateAdapter = injectDpDateAdapter<T>();

  activeDate = input.required<T>();
  selectedDate = input<T | null>(null);
  selectedRange = input<DpDateRange<T> | null>(null);
  selectionMode = input<DpSelectionMode>('single');
  minDate = input<T | null>(null);
  maxDate = input<T | null>(null);
  startOfWeek = input<DpWeekStart>(0);

  readonly dateSelected = output<T>();

  protected readonly weekLabels = computed(() =>
    this._rotateWeekLabels(this._dateAdapter.getDayOfWeekNames('narrow'))
  );

  protected readonly weeks = computed(() => {
    const activeDate = this.activeDate();
    const minDate = this.minDate();
    const maxDate = this.maxDate();
    const startOfMonth = this._dateAdapter.startOfMonth(activeDate);
    const endOfMonth = this._dateAdapter.endOfMonth(activeDate);

    const calendarStart = this._startOfWeek(startOfMonth);
    const calendarEnd = this._endOfWeek(endOfMonth);

    let current = this._dateAdapter.clone(calendarStart);
    const today = this._dateAdapter.currentDate();

    const rows: DayCell<T>[][] = [];

    while (
      this._dateAdapter.isBefore(current, calendarEnd) ||
      this._dateAdapter.isSameDay(current, calendarEnd)
    ) {
      const row: DayCell<T>[] = [];
      for (let i = 0; i < 7; i++) {
        const cellDate = this._dateAdapter.clone(current);
        const isDisabled = this._isDisabled(cellDate, minDate, maxDate);
        row.push({
          date: cellDate,
          display: this._dateAdapter.format(cellDate, 'D'),
          inCurrentMonth: this._dateAdapter.isSameMonth(cellDate, activeDate),
          isToday: this._dateAdapter.isSameDay(cellDate, today),
          isDisabled,
        });
        current = this._dateAdapter.addDay(current, 1);
      }
      rows.push(row);
    }

    return rows;
  });

  protected trackByDay = (_index: number, cell: DayCell<T>) =>
    this._dateAdapter.format(cell.date, 'YYYY-MM-DD');

  protected trackByWeek = (_index: number, week: DayCell<T>[]) =>
    week[0] ? this._dateAdapter.format(week[0].date, 'YYYY-MM-DD') : _index;

  protected onSelectDay(cell: DayCell<T>): void {
    if (cell.isDisabled) {
      return;
    }
    this.dateSelected.emit(this._dateAdapter.clone(cell.date));
  }

  protected dateLabel(cell: DayCell<T>): string {
    return this._dateAdapter.format(cell.date, 'YYYY-MM-DD');
  }

  protected isSelected(cell: DayCell<T>): boolean {
    if (this.selectionMode() === 'range') {
      return false;
    }

    const selected = this.selectedDate();
    return !!selected && this._dateAdapter.isSameDay(cell.date, selected);
  }

  protected isRangeStart(cell: DayCell<T>): boolean {
    if (this.selectionMode() !== 'range') {
      return false;
    }
    const range = this.selectedRange();
    if (!range?.start || cell.isDisabled) {
      return false;
    }
    return this._dateAdapter.isSameDay(cell.date, range.start);
  }

  protected isRangeEnd(cell: DayCell<T>): boolean {
    if (this.selectionMode() !== 'range') {
      return false;
    }
    const range = this.selectedRange();
    if (!range?.end || cell.isDisabled) {
      return false;
    }
    return this._dateAdapter.isSameDay(cell.date, range.end);
  }

  protected isInRange(cell: DayCell<T>): boolean {
    if (this.selectionMode() !== 'range') {
      return false;
    }
    const range = this.selectedRange();
    if (!range?.start || !range?.end || cell.isDisabled) {
      return false;
    }

    const [start, end] = this._orderedRange(range.start, range.end);
    const afterStart =
      this._dateAdapter.compare(cell.date, start) >= 0 ||
      this._dateAdapter.isSameDay(cell.date, start);
    const beforeEnd =
      this._dateAdapter.compare(cell.date, end) <= 0 ||
      this._dateAdapter.isSameDay(cell.date, end);

    return afterStart && beforeEnd;
  }

  protected isDisabled(cell: DayCell<T>): boolean {
    return cell.isDisabled;
  }

  private _orderedRange(start: T, end: T): [T, T] {
    const compare = this._dateAdapter.compare(start, end);
    if (compare <= 0) {
      return [start, end];
    }
    return [end, start];
  }

  private _startOfWeek(date: T): T {
    const startOfWeek = this.startOfWeek();
    const dayOfWeek = this._dateAdapter.dayOfWeek(date);
    const diff = (dayOfWeek - startOfWeek + 7) % 7;
    if (diff === 0) {
      return this._dateAdapter.clone(date);
    }
    return this._dateAdapter.addDay(date, -diff);
  }

  private _endOfWeek(date: T): T {
    const start = this._startOfWeek(date);
    return this._dateAdapter.addDay(start, 6);
  }

  private _isDisabled(date: T, minDate: T | null, maxDate: T | null): boolean {
    if (minDate && this._dateAdapter.compare(date, minDate) < 0) {
      return true;
    }
    if (maxDate && this._dateAdapter.compare(date, maxDate) > 0) {
      return true;
    }
    return false;
  }

  private _rotateWeekLabels(labels: string[]): string[] {
    const start = this.startOfWeek();
    if (start === 0) {
      return labels;
    }
    return [...labels.slice(start), ...labels.slice(0, start)];
  }
}
