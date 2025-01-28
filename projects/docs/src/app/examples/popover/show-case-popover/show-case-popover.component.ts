import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent } from '@ngverse/button/button.component';
import { PopoverOriginDirective } from '@ngverse/popover/popover-origin.directive';
import { PopoverComponent } from '../../../../../../ngverse/src/lib/popover/popover.component';

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
