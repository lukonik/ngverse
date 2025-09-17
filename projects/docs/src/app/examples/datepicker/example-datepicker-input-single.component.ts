import { DatepickerInputComponent } from '@/ui/datepicker/datepicker-input/datepicker-input.component';
import { provideDpDayjsDateAdapter } from '@/ui/datepicker/dayjs/dayjs-date.adapter.token';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'doc-example-datepicker-input-single',
  imports: [DatepickerInputComponent, ReactiveFormsModule],
  providers: [provideDpDayjsDateAdapter()],
  template: `
    <div class="space-y-3">
      <app-datepicker-input
        placeholder="Choose a check-in date"
        [formControl]="control"
      ></app-datepicker-input>
      <p class="text-sm text-muted-foreground">{{ label() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDatepickerInputSingleComponent {
  readonly control = new FormControl<Dayjs | null>(dayjs());

  protected readonly label = computed(
    () => this.control.value?.format('MMM D, YYYY') ?? 'Waiting for selection'
  );
}
