import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from '@ng-verse/button/button.component';
import { PopoverOriginDirective } from '@ng-verse/popover/popover-origin.directive';
import { PopoverComponent } from '../../../../../../ng-verse/src/lib/popover/popover.component';

@Component({
  selector: 'doc-show-case-popover',
  imports: [PopoverOriginDirective, ButtonComponent, PopoverComponent],
  templateUrl: './show-case-popover.component.html',
  styleUrl: './show-case-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCasePopoverComponent {
  isOpen = signal(false);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }

  deleteUser() {
    alert('User deleted');
    this.isOpen.set(false);
  }
}
