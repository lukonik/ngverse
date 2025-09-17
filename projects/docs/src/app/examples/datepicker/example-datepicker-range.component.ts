import { DatepickerComponent } from '@/ui/datepicker/datepicker/datepicker.component';
import { provideDpDayjsDateAdapter } from '@/ui/datepicker/dayjs/dayjs-date.adapter.token';
import { DpDateRange } from '@/ui/datepicker/types/date-range';
import { DpWeekStart } from '@/ui/datepicker/types/week-start';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'doc-example-datepicker-range',
  imports: [DatepickerComponent, ReactiveFormsModule],
  providers: [provideDpDayjsDateAdapter()],
  template: `
    <div class="space-y-3">
      <div class="space-y-1">
        <p class="text-sm font-medium text-foreground">Select a range</p>
        <p class="text-xs text-muted-foreground">
          Uses range mode with Monday as the first day of the week.
        </p>
      </div>
      <app-datepicker
        selectionMode="range"
        [startOfWeek]="mondayStart"
        [formControl]="rangeControl"
      ></app-datepicker>
      <p class="text-sm text-muted-foreground">
        {{ selectedRange() }}
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDatepickerRangeComponent {
  protected readonly mondayStart: DpWeekStart = 1;

  readonly rangeControl = new FormControl<DpDateRange<Dayjs> | null>({
    start: dayjs().startOf('week'),
    end: dayjs().startOf('week').add(3, 'day'),
  });

  protected readonly selectedRange = computed(() => {
    const value = this.rangeControl.value;
    if (!value?.start && !value?.end) {
      return 'No range selected';
    }

    const start = value?.start?.format('MMM D, YYYY') ?? 'Start';
    const end = value?.end?.format('MMM D, YYYY') ?? 'End';
    return `${start} - ${end}`;
  });
}
