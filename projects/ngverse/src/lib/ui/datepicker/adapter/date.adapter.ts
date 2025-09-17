export interface DpDateAdapter<T> {
  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[];
  getMonthNames(style: 'long' | 'short'): string[];

  currentDate(): T;

  createDate(year: number, month: number, date: number): T;

  clone(date: T): T;

  toDate(date: T): Date;

  startOfMonth(date: T): T;

  endOfMonth(date: T): T;

  startOfWeek(date: T): T;

  endOfWeek(date: T): T;

  startOfYear(date: T): T;

  endOfYear(date: T): T;

  month(date: T): number;

  year(date: T): number;

  date(date: T): number;

  dayOfWeek(date: T): number;

  daysInMonth(date: T): number;

  addDay(date: T, amount: number): T;

  addMonths(date: T, amount: number): T;

  addYears(date: T, amount: number): T;

  setMonth(date: T, month: number): T;

  setYear(date: T, year: number): T;

  isSame(date1: T, date2: T): boolean;

  isSameDay(date1: T, date2: T): boolean;

  isSameMonth(date1: T, date2: T): boolean;

  isSameYear(date1: T, date2: T): boolean;

  isBefore(date1: T, date2: T): boolean;

  compare(date1: T, date2: T): number;

  format(date: T, format: string): string;
}
