import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { injectDpDateAdapter } from '../adapter/date.token';
import { provideKeyState } from '../state/key.state';
import { DayViewComponent } from '../day-view/day-view.component';
import { MonthViewComponent } from '../month-view/month-view.component';
import { YearViewComponent } from '../year-view/year-view.component';
import { DpDateRange } from '../types/date-range';
import { DpSelectionMode } from '../types/selection-mode';
import { ViewType } from '../types/view-type';
import { DpWeekStart } from '../types/week-start';

@Component({
  selector: 'app-calendar',
  imports: [DayViewComponent, MonthViewComponent, YearViewComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideKeyState],
})
export class CalendarComponent<T> {
  private readonly _dateAdapter = injectDpDateAdapter<T>();

  selectionMode = input<DpSelectionMode>('single');
  selectedDate = input<T | null>(null);
  selectedRange = input<DpDateRange<T> | null>(null);
  minDate = input<T | null>(null);
  maxDate = input<T | null>(null);
  startOfWeek = input<DpWeekStart>(0);

  protected readonly viewType = signal<ViewType>('day');
  protected readonly activeDate = signal<T>(
    this._dateAdapter.clone(this._dateAdapter.currentDate())
  );

  private readonly yearViewAnchor = signal<number>(
    this._dateAdapter.year(this.activeDate()) - 6
  );

  protected readonly monthLabel = computed(() =>
    this._dateAdapter.format(this.activeDate(), 'MMMM')
  );

  protected readonly yearLabel = computed(() =>
    this._dateAdapter.format(this.activeDate(), 'YYYY')
  );

  protected readonly yearOptions = computed(() => {
    const start = this.yearViewAnchor();
    return Array.from({ length: 12 }, (_, index) => start + index);
  });

  readonly dateSelected = output<T>();

  constructor() {
    effect(() => {
      const selected = this.selectedDate();
      const range = this.selectedRange();

      if (selected) {
        const normalized = this._clampToRange(selected);
        this.activeDate.set(normalized);
        this._syncYearAnchor(normalized);
        return;
      }

      const start = range?.start;
      if (start) {
        const normalized = this._clampToRange(start);
        this.activeDate.set(normalized);
        this._syncYearAnchor(normalized);
        return;
      }
    });

    effect(() => {
      const active = this.activeDate();
      this._syncYearAnchor(active);
    });

    effect(() => {
      const active = this.activeDate();
      const clamped = this._clampToRange(active);
      if (!this._dateAdapter.isSameDay(clamped, active)) {
        this.activeDate.set(clamped);
      }
    });
  }

  protected showMonthView(): void {
    this.viewType.set('month');
  }

  protected showYearView(): void {
    this.viewType.set('year');
  }

  protected showDayView(): void {
    this.viewType.set('day');
  }

  protected handleDaySelected(date: T): void {
    this.dateSelected.emit(date);
  }

  protected handleMonthSelected(monthIndex: number): void {
    const updated = this._dateAdapter.setMonth(this.activeDate(), monthIndex);
    this.activeDate.set(updated);
    this.showDayView();
  }

  protected handleYearSelected(year: number): void {
    const updated = this._dateAdapter.setYear(this.activeDate(), year);
    this.activeDate.set(updated);
    if (this.viewType() !== 'day') {
      this.showMonthView();
    }
  }

  protected previous(): void {
    if (!this.canGoPrevious()) {
      return;
    }
    const view = this.viewType();
    if (view === 'day') {
      this.activeDate.update((date) =>
        this._clampToRange(this._dateAdapter.addMonths(date, -1))
      );
    } else if (view === 'month') {
      this.activeDate.update((date) =>
        this._clampToRange(this._dateAdapter.addYears(date, -1))
      );
    } else {
      const updated = this._clampToRange(
        this._dateAdapter.addYears(this.activeDate(), -12)
      );
      this.activeDate.set(updated);
    }
  }

  protected next(): void {
    if (!this.canGoNext()) {
      return;
    }
    const view = this.viewType();
    if (view === 'day') {
      this.activeDate.update((date) =>
        this._clampToRange(this._dateAdapter.addMonths(date, 1))
      );
    } else if (view === 'month') {
      this.activeDate.update((date) =>
        this._clampToRange(this._dateAdapter.addYears(date, 1))
      );
    } else {
      const updated = this._clampToRange(
        this._dateAdapter.addYears(this.activeDate(), 12)
      );
      this.activeDate.set(updated);
    }
  }

  protected canGoPrevious(): boolean {
    const view = this.viewType();
    const candidate = this._candidateForNavigation(view, -1);
    if (!candidate) {
      return false;
    }
    return !this._dateAdapter.isSameDay(
      this._clampToRange(candidate),
      this._clampToRange(this.activeDate())
    );
  }

  protected canGoNext(): boolean {
    const view = this.viewType();
    const candidate = this._candidateForNavigation(view, 1);
    if (!candidate) {
      return false;
    }
    return !this._dateAdapter.isSameDay(
      this._clampToRange(candidate),
      this._clampToRange(this.activeDate())
    );
  }

  private _syncYearAnchor(active: T): void {
    const activeYear = this._dateAdapter.year(active);
    const start = this.yearViewAnchor();
    if (activeYear < start || activeYear >= start + 12) {
      this.yearViewAnchor.set(activeYear - 6);
    }
  }

  private _candidateForNavigation(view: ViewType, direction: 1 | -1): T | null {
    if (view === 'day') {
      return this._dateAdapter.addMonths(this.activeDate(), direction);
    }
    if (view === 'month') {
      return this._dateAdapter.addYears(this.activeDate(), direction);
    }
    return this._dateAdapter.addYears(this.activeDate(), 12 * direction);
  }

  private _clampToRange(date: T): T {
    let result = this._dateAdapter.clone(date);
    const minDate = this.minDate();
    const maxDate = this.maxDate();

    if (minDate && this._dateAdapter.compare(result, minDate) < 0) {
      result = this._dateAdapter.clone(minDate);
    }
    if (maxDate && this._dateAdapter.compare(result, maxDate) > 0) {
      result = this._dateAdapter.clone(maxDate);
    }
    return result;
  }
}
