export interface DayCell<T> {
  date: T;
  display: string;
  inCurrentMonth: boolean;
  isToday: boolean;
  isDisabled: boolean;
}
