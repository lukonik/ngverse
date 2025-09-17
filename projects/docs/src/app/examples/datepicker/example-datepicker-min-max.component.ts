import { DatepickerComponent } from '@/ui/datepicker/datepicker/datepicker.component';
import { provideDpDayjsDateAdapter } from '@/ui/datepicker/dayjs/dayjs-date.adapter.token';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'doc-example-datepicker-min-max',
  imports: [DatepickerComponent, ReactiveFormsModule],
  providers: [provideDpDayjsDateAdapter()],
  template: `
    <div class="space-y-3">
      <div class="space-y-1">
        <p class="text-sm font-medium text-foreground">Restricted range</p>
        <p class="text-xs text-muted-foreground">
          Only allows dates within the next 30 days.
        </p>
      </div>
      <app-datepicker
        [formControl]="dateControl"
        [minDate]="minDate"
        [maxDate]="maxDate"
      ></app-datepicker>
      <p class="text-sm text-muted-foreground">
        {{ selectedDate() }}
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDatepickerMinMaxComponent {
  protected readonly minDate = dayjs();
  protected readonly maxDate = dayjs().add(30, 'day');

  readonly dateControl = new FormControl<Dayjs | null>(dayjs().add(3, 'day'));

  protected readonly selectedDate = computed(
    () => this.dateControl.value?.format('MMM D, YYYY') ?? 'No date selected'
  );
}
