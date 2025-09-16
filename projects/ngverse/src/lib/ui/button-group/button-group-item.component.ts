import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { ButtonGroupComponent } from './button-group.component';

@Component({
  selector: 'app-button-group-item',
  imports: [],
  templateUrl: './button-group-item.component.html',
  styleUrl: './button-group-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupItemComponent {
  itemValue = input.required<unknown>();

  disabled = input(false);

  private readonly buttonGroup = inject(ButtonGroupComponent);

  protected readonly selected = computed(() =>
    this.buttonGroup.isSelected(this.itemValue())
  );

  protected readonly isDisabled = computed(() => {
    return this.disabled() || this.buttonGroup.isDisabled();
  });

  protected onSelect() {
    if (this.isDisabled()) {
      return;
    }
    this.buttonGroup.selectItem(this.itemValue());
  }
}
