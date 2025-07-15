import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type ICON_BUTTON_COLOR_TYPES =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[appIconButton]',
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classNames()',
    '[class.btn-loading]': 'loading()',
    '[disabled]': 'disabled()',
  },
})
export class IconButtonComponent {
  color = input<ICON_BUTTON_COLOR_TYPES>('primary');

  disabled = input<boolean>();

  loading = input<boolean>();

  classNames = computed(() => {
    return [`icon-btn-${this.color()}`];
  });
}
