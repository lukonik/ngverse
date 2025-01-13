import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { ListboxItemDirective } from '@ng-verse/listbox/listbox-item.directive';
import { SelectCheckIconComponent } from '../select-check-icon.component';
import { OptionProxy, SelectState } from '../select.state';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
  imports: [SelectCheckIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ListboxItemDirective,
      inputs: ['disabled'],
    },
  ],
  host: {
    '[class.selected]': 'isSelected()',
  },
})
export class OptionComponent implements OptionProxy {
  private host = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);
  isActive = signal(false);
  value = input.required<unknown>();
  state = inject(SelectState);
  listboxItem = inject(ListboxItemDirective);

  isSelected = () => this.state.isSelected(this.value());

  constructor() {
    this.listboxItem.activated.subscribe(() => {
      this.state.toggleValue(this.value());
    });
  }

  get content() {
    return this.host.nativeElement.textContent;
  }
}
