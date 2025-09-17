import { DatepickerToggleComponent } from '@/ui/datepicker/datepicker-toggle/datepicker-toggle.component';
import { provideDpDayjsDateAdapter } from '@/ui/datepicker/dayjs/dayjs-date.adapter.token';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'doc-example-datepicker-toggle-single',
  imports: [DatepickerToggleComponent, ReactiveFormsModule],
  providers: [provideDpDayjsDateAdapter()],
  template: `
    <div class="space-y-3">
      <app-datepicker-toggle
        placeholder="Pick a date"
        [formControl]="control"
      ></app-datepicker-toggle>
      <p class="text-sm text-muted-foreground">{{ label() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDatepickerToggleSingleComponent {
  readonly control = new FormControl<Dayjs | null>(null);

  protected readonly label = computed(
    () => this.control.value?.format('MMM D, YYYY') ?? 'Waiting for selection'
  );
}
