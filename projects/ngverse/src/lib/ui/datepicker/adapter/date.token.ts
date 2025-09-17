import { InjectionToken, inject } from '@angular/core';
import { DpDateAdapter } from './date.adapter';

const DP_DATE_ADAPTER_TOKEN = new InjectionToken<DpDateAdapter<unknown>>(
  'DP_DATE_ADAPTER_TOKEN'
);

export const injectDpDateAdapter = <T>() =>
  inject(DP_DATE_ADAPTER_TOKEN) as DpDateAdapter<T>;

export const provideDpDateAdapter = <T>(adapter: DpDateAdapter<T>) => ({
  provide: DP_DATE_ADAPTER_TOKEN,
  useValue: adapter,
});
