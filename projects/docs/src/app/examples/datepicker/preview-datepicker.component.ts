import { DatepickerComponent } from '@/ui/datepicker/datepicker/datepicker.component';
import { DatepickerToggleComponent } from '@/ui/datepicker/datepicker-toggle/datepicker-toggle.component';
import { provideDpDayjsDateAdapter } from '@/ui/datepicker/dayjs/dayjs-date.adapter.token';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'doc-preview-datepicker',
  imports: [
    DatepickerComponent,
    DatepickerToggleComponent,
    ReactiveFormsModule,
  ],
  providers: [provideDpDayjsDateAdapter()],
  template: `
    <div class="space-y-6">
      <div class="space-y-2">
        <h3 class="text-sm font-semibold text-foreground">Overlay toggle</h3>
        <app-datepicker-toggle
          [formControl]="toggleControl"
        ></app-datepicker-toggle>
        <p class="text-sm text-muted-foreground">{{ toggleLabel() }}</p>
      </div>
      <div class="space-y-2">
        <h3 class="text-sm font-semibold text-foreground">Inline calendar</h3>
        <app-datepicker [formControl]="inlineControl"></app-datepicker>
        <p class="text-sm text-muted-foreground">{{ inlineLabel() }}</p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewDatepickerComponent {
  readonly toggleControl = new FormControl<Dayjs | null>(dayjs());
  readonly inlineControl = new FormControl<Dayjs | null>(dayjs());

  protected readonly toggleLabel = computed(
    () => this.toggleControl.value?.format('MMM D, YYYY') ?? 'No date selected'
  );

  protected readonly inlineLabel = computed(
    () => this.inlineControl.value?.format('MMM D, YYYY') ?? 'No date selected'
  );
}
