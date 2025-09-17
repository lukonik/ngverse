import { DpDateAdapter } from '../adapter/date.adapter';
import dayjs, { Dayjs } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

const START_OF_DAY = 'day';

export class DpDayjsDateAdapter implements DpDateAdapter<Dayjs> {
  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    if (style === 'long') {
      return dayjs.weekdays();
    }
    if (style === 'short') {
      return dayjs.weekdaysShort();
    }
    return dayjs.weekdaysMin().map((label) => label.charAt(0));
  }

  getMonthNames(style: 'long' | 'short'): string[] {
    if (style === 'long') {
      return dayjs.months();
    }
    return dayjs.monthsShort();
  }

  currentDate(): Dayjs {
    return dayjs().startOf(START_OF_DAY);
  }

  createDate(year: number, month: number, date: number): Dayjs {
    return dayjs(new Date(year, month, date)).startOf(START_OF_DAY);
  }

  clone(date: Dayjs): Dayjs {
    return date.clone();
  }

  toDate(date: Dayjs): Date {
    return date.toDate();
  }

  startOfMonth(date: Dayjs): Dayjs {
    return date.startOf('month');
  }

  endOfMonth(date: Dayjs): Dayjs {
    return date.endOf('month');
  }

  startOfWeek(date: Dayjs): Dayjs {
    return date.startOf('week');
  }

  endOfWeek(date: Dayjs): Dayjs {
    return date.endOf('week');
  }

  startOfYear(date: Dayjs): Dayjs {
    return date.startOf('year');
  }

  endOfYear(date: Dayjs): Dayjs {
    return date.endOf('year');
  }

  month(date: Dayjs): number {
    return date.month();
  }

  year(date: Dayjs): number {
    return date.year();
  }

  date(date: Dayjs): number {
    return date.date();
  }

  dayOfWeek(date: Dayjs): number {
    return date.day();
  }

  daysInMonth(date: Dayjs): number {
    return date.daysInMonth();
  }

  addDay(date: Dayjs, amount: number): Dayjs {
    return date.add(amount, 'day');
  }

  addMonths(date: Dayjs, amount: number): Dayjs {
    return date.add(amount, 'month');
  }

  addYears(date: Dayjs, amount: number): Dayjs {
    return date.add(amount, 'year');
  }

  setMonth(date: Dayjs, month: number): Dayjs {
    return date.set('month', month);
  }

  setYear(date: Dayjs, year: number): Dayjs {
    return date.set('year', year);
  }

  isSame(date1: Dayjs, date2: Dayjs): boolean {
    return date1.isSame(date2);
  }

  isSameDay(date1: Dayjs, date2: Dayjs): boolean {
    return date1.isSame(date2, 'day');
  }

  isSameMonth(date1: Dayjs, date2: Dayjs): boolean {
    return date1.isSame(date2, 'month');
  }

  isSameYear(date1: Dayjs, date2: Dayjs): boolean {
    return date1.isSame(date2, 'year');
  }

  isBefore(date1: Dayjs, date2: Dayjs): boolean {
    return date1.isBefore(date2);
  }

  compare(date1: Dayjs, date2: Dayjs): number {
    if (date1.isSame(date2)) {
      return 0;
    }
    return date1.isBefore(date2) ? -1 : 1;
  }

  format(date: Dayjs, format: string): string {
    return date.format(format);
  }
}
