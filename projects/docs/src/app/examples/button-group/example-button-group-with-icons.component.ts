import { ButtonGroupComponent } from '@/ui/button-group/button-group.component';
import { ButtonGroupItemComponent } from '@/ui/button-group/button-group-item.component';
import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'doc-example-button-group-with-icons',
  imports: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    FontIconComponent,
    ReactiveFormsModule,
  ],
  template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="layoutControl">
        <app-button-group-item [itemValue]="'grid'">
          <span class="flex items-center gap-2">
            <app-font-icon>grid_view</app-font-icon>
            Grid
          </span>
        </app-button-group-item>
        <app-button-group-item [itemValue]="'list'">
          <span class="flex items-center gap-2">
            <app-font-icon>view_list</app-font-icon>
            List
          </span>
        </app-button-group-item>
        <app-button-group-item [itemValue]="'kanban'">
          <span class="flex items-center gap-2">
            <app-font-icon>view_kanban</app-font-icon>
            Board
          </span>
        </app-button-group-item>
      </app-button-group>
      <p class="text-sm text-slate-600">
        Selected layout:
        <span class="font-semibold text-slate-900">{{ layout() }}</span>
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonGroupWithIconsComponent {
  protected readonly layoutControl = new FormControl<
    'grid' | 'list' | 'kanban'
  >('grid', { nonNullable: true });

  private readonly layoutChanges = toSignal(this.layoutControl.valueChanges, {
    initialValue: this.layoutControl.value,
  });

  protected readonly layout = computed(() => this.layoutChanges());
}
