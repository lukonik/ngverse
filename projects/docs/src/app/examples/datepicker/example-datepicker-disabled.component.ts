import { DatepickerComponent } from '@/ui/datepicker/datepicker/datepicker.component';
import { provideDpDayjsDateAdapter } from '@/ui/datepicker/dayjs/dayjs-date.adapter.token';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'doc-example-datepicker-disabled',
  imports: [DatepickerComponent, ReactiveFormsModule],
  providers: [provideDpDayjsDateAdapter()],
  template: `
    <div class="space-y-3">
      <div class="space-y-1">
        <p class="text-sm font-medium text-foreground">Disabled state</p>
        <p class="text-xs text-muted-foreground">
          The control is disabled via the reactive form API.
        </p>
      </div>
      <app-datepicker [formControl]="dateControl"></app-datepicker>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDatepickerDisabledComponent {
  readonly dateControl = new FormControl<Dayjs | null>({
    value: dayjs().add(1, 'week'),
    disabled: true,
  });
}
