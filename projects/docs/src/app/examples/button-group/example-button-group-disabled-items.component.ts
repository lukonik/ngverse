import { ButtonGroupComponent } from '@/ui/button-group/button-group.component';
import { ButtonGroupItemComponent } from '@/ui/button-group/button-group-item.component';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'doc-example-button-group-disabled-items',
  imports: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ReactiveFormsModule,
  ],
  template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="planControl">
        <app-button-group-item [itemValue]="'starter'"
          >Starter</app-button-group-item
        >
        <app-button-group-item [itemValue]="'pro'" [disabled]="true"
          >Pro (Coming Soon)</app-button-group-item
        >
        <app-button-group-item [itemValue]="'enterprise'"
          >Enterprise</app-button-group-item
        >
      </app-button-group>
      <p class="text-sm text-slate-600">
        Selected plan:
        <span class="font-semibold text-slate-900">{{ planLabel() }}</span>
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonGroupDisabledItemsComponent {
  protected readonly planControl = new FormControl<'starter' | 'enterprise'>(
    'starter',
    { nonNullable: true }
  );

  private readonly planValue = toSignal(this.planControl.valueChanges, {
    initialValue: this.planControl.value,
  });

  protected readonly planLabel = computed(() => {
    const value = this.planValue();
    return value === 'starter' ? 'Starter' : 'Enterprise';
  });
}
