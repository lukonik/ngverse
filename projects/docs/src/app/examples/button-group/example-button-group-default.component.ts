import { ButtonGroupComponent } from '@/ui/button-group/button-group.component';
import { ButtonGroupItemComponent } from '@/ui/button-group/button-group-item.component';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'doc-example-button-group-default',
  imports: [
    ButtonGroupComponent,
    ButtonGroupItemComponent,
    ReactiveFormsModule,
  ],
  template: `
    <div class="flex flex-col gap-4">
      <app-button-group [formControl]="sizeControl">
        <app-button-group-item [itemValue]="'Small'"
          >Small</app-button-group-item
        >
        <app-button-group-item [itemValue]="'Medium'"
          >Medium</app-button-group-item
        >
        <app-button-group-item [itemValue]="'Large'"
          >Large</app-button-group-item
        >
      </app-button-group>
      <p class="text-sm text-slate-600">
        Selected size:
        <span class="font-semibold text-slate-900">{{ selectedSize() }}</span>
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonGroupDefaultComponent {
  protected readonly sizeControl = new FormControl<
    'Small' | 'Medium' | 'Large'
  >('Medium', {
    nonNullable: true,
  });

  private readonly sizeChanges = toSignal(this.sizeControl.valueChanges, {
    initialValue: this.sizeControl.value,
  });

  protected readonly selectedSize = computed(() => this.sizeChanges());
}
