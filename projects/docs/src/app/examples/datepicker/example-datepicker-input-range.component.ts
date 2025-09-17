import { DatepickerInputComponent } from '@/ui/datepicker/datepicker-input/datepicker-input.component';
import { provideDpDayjsDateAdapter } from '@/ui/datepicker/dayjs/dayjs-date.adapter.token';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';
import { DpDateRange } from '@/ui/datepicker/types/date-range';

@Component({
  selector: 'doc-example-datepicker-input-range',
  imports: [DatepickerInputComponent, ReactiveFormsModule],
  providers: [provideDpDayjsDateAdapter()],
  template: `
    <div class="space-y-3">
      <app-datepicker-input
        selectionMode="range"
        placeholder="Select travel dates"
        [formControl]="control"
      ></app-datepicker-input>
      <p class="text-sm text-muted-foreground">{{ label() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDatepickerInputRangeComponent {
  readonly control = new FormControl<DpDateRange<Dayjs> | null>({
    start: dayjs(),
    end: dayjs().add(4, 'day'),
  });

  protected readonly label = computed(() => {
    const range = this.control.value;
    if (!range || (!range.start && !range.end)) {
      return 'Waiting for start and end date';
    }
    const start = range.start?.format('MMM D, YYYY') ?? 'Start';
    const end = range.end?.format('MMM D, YYYY') ?? 'End';
    return `${start} - ${end}`;
  });
}
