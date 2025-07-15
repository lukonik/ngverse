import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ButtonLoaderComponent } from './button-loader.component';

export type BUTTON_COLOR_TYPES =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'none';

export type BUTTON_VARIANT_TYPES = 'fill' | 'outline' | 'link' | 'none';

export type BUTTON_SIZE_TYPES = 'sm' | 'md' | 'lg' | 'none';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[appButton]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  imports: [ButtonLoaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classNames()',
    '[class.btn-loading]': 'loading()',
    '[disabled]': 'disabled()',
    '[class.icon]': 'icon()',
  },
})
export class ButtonComponent {
  color = input<BUTTON_COLOR_TYPES>('primary');

  variant = input<BUTTON_VARIANT_TYPES>('fill');

  disabled = input<boolean>();

  size = input<BUTTON_SIZE_TYPES>('md');

  icon = input(undefined, { transform: booleanAttribute });

  loading = input<boolean>();

  classNames = computed(() => {
    return [
      `btn-${this.variant()}`,
      `btn-${this.color()}`,
      `btn-${this.size()}`,
    ];
  });
}
