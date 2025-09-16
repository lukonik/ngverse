import { ButtonGroupComponent } from '@/ui/button-group/button-group.component';
import { ButtonGroupItemComponent } from '@/ui/button-group/button-group-item.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'doc-preview-button-group',
  imports: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ReactiveFormsModule,
  ],
  template: `
    <app-button-group [formControl]="billingCycleControl">
      <app-button-group-item [itemValue]="'monthly'"
        >Monthly</app-button-group-item
      >
      <app-button-group-item [itemValue]="'quarterly'"
        >Quarterly</app-button-group-item
      >
      <app-button-group-item [itemValue]="'annually'"
        >Annually</app-button-group-item
      >
    </app-button-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewButtonGroupComponent {
  protected readonly billingCycleControl = new FormControl('monthly', {
    nonNullable: true,
  });
}
