import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ButtonLoaderComponent } from './button-loader.component';

type VARIANT_TYPES =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'icon'
  | 'with-icon'
  | 'loading';

type SIZE_TYPES = 'sm' | 'md' | 'lg' | 'xl' | 'none';

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
  variant = input<VARIANT_TYPES>('default');

  disabled = input<boolean>();

  size = input<SIZE_TYPES>('md');

  icon = input(undefined, { transform: booleanAttribute });

  loading = input<boolean>();

  classNames = computed(() => {
    return [`btn-${this.variant()}`, `btn-${this.size()}`];
  });
}
