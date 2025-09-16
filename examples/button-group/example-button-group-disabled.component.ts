import { ButtonGroupComponent } from '@/ui/button-group/button-group.component';
import { ButtonGroupItemComponent } from '@/ui/button-group/button-group-item.component';
import { ButtonComponent } from '@/ui/button/button.component';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'doc-example-button-group-disabled',
  imports: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="billingControl">
        <app-button-group-item [itemValue]="'monthly'"
          >Monthly</app-button-group-item
        >
        <app-button-group-item [itemValue]="'yearly'"
          >Yearly</app-button-group-item
        >
      </app-button-group>
      <div class="flex items-center gap-3">
        <p class="text-sm text-slate-600">
          Current selection:
          <span class="font-semibold text-slate-900">{{
            currentBilling()
          }}</span>
        </p>
        <button appButton variant="ghost" (click)="toggleDisabled()">
          {{ billingControl.disabled ? 'Enable' : 'Disable' }} group
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonGroupDisabledComponent {
  protected readonly billingControl = new FormControl<'monthly' | 'yearly'>({
    value: 'monthly',
    disabled: true,
  });

  private readonly billingValue = toSignal(this.billingControl.valueChanges, {
    initialValue: this.billingControl.value,
  });

  protected readonly currentBilling = computed(
    () => this.billingValue() ?? 'monthly'
  );

  protected toggleDisabled() {
    if (this.billingControl.disabled) {
      this.billingControl.enable();
    } else {
      this.billingControl.disable();
    }
  }
}
