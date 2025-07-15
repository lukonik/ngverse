import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type BUTTON_COLOR_TYPES =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning';

export type BUTTON_SIZE_TYPES = 'sm' | 'md' | 'lg' | 'none';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[appButton]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classNames()',
    '[class.btn-loading]': 'loading()',
    '[disabled]': 'disabled()',
  },
})
export class ButtonComponent {
  color = input<BUTTON_COLOR_TYPES>('primary');

  disabled = input<boolean>();

  size = input<BUTTON_SIZE_TYPES>();

  loading = input<boolean>();

  classNames = computed(() => {
    return [`btn-${this.size()}`, `btn-${this.color()}`];
  });
}
