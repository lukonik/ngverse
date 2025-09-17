import { provideDpDateAdapter } from '../adapter/date.token';
import { DpDayjsDateAdapter } from './dayjs-date.adapter';

export function withDpDayjsDateAdapter() {
  return new DpDayjsDateAdapter();
}

export function provideDpDayjsDateAdapter() {
  return provideDpDateAdapter(withDpDayjsDateAdapter());
}
