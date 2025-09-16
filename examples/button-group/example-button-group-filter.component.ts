import { ButtonGroupComponent } from '@/ui/button-group/button-group.component';
import { ButtonGroupItemComponent } from '@/ui/button-group/button-group-item.component';
import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'doc-example-button-group-filter',
  imports: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="filterControl">
        <app-button-group-item [itemValue]="'all'">All</app-button-group-item>
        <app-button-group-item [itemValue]="'published'"
          >Published</app-button-group-item
        >
        <app-button-group-item [itemValue]="'draft'"
          >Draft</app-button-group-item
        >
      </app-button-group>
      <div class="flex items-center gap-3">
        <p class="text-sm text-slate-600">
          Active filter:
          <span class="font-semibold text-slate-900">{{ filterLabel() }}</span>
        </p>
        <button appButton variant="ghost" (click)="clearFilter()">
          Clear filter
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonGroupFilterComponent {
  protected readonly filterControl = new FormControl<FilterOption | null>(
    'all'
  );

  private readonly filterValue = toSignal(this.filterControl.valueChanges, {
    initialValue: this.filterControl.value,
  });

  protected readonly filterLabel = computed(() => {
    const value = this.filterValue();
    if (!value) {
      return 'None';
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
  });

  protected clearFilter() {
    this.filterControl.setValue(null);
  }
}

type FilterOption = 'all' | 'published' | 'draft';
