import { DatepickerComponent } from '@/ui/datepicker/datepicker/datepicker.component';
import { provideDpDayjsDateAdapter } from '@/ui/datepicker/dayjs/dayjs-date.adapter.token';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'doc-preview-datepicker',
  imports: [DatepickerComponent, ReactiveFormsModule],
  providers: [provideDpDayjsDateAdapter()],
  template: `
    <div class="space-y-3">
      <app-datepicker [formControl]="dateControl"></app-datepicker>
      <p class="text-sm text-muted-foreground">{{ selectedDate() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewDatepickerComponent {
  readonly dateControl = new FormControl<Dayjs | null>(dayjs());

  protected readonly selectedDate = computed(
    () => this.dateControl.value?.format('MMM D, YYYY') ?? 'No date selected'
  );
}
