import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { classed } from 'ngx-classed';
import { ButtonLoaderComponent } from './button-loader.component';

type VARIANT_TYPES =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'link';

type SIZE_TYPES = 'sm' | 'md' | 'lg' | 'xl';

const HOST_CLASSES = classed<{
  variant: VARIANT_TYPES;
  size: SIZE_TYPES;
  icon: boolean;
  loading: boolean;
  disabled: boolean;
}>({
  base: `inline-flex items-center justify-center gap-1.5
   text-base font-semibold
   rounded-md border border-solid
   relative cursor-pointer
   transition-colors duration-200`,
  variants: {
    variant: {
      default: `
     border-slate-900 bg-slate-900 text-slate-50
    hover:border-slate-800 hover:bg-slate-800
    focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2
    [--spinner-color:theme(colors.slate.50)]
      `,
      secondary: `
        border-slate-200 bg-slate-100 text-slate-900
    hover:border-slate-300 hover:bg-slate-200
    focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2
    [--spinner-color: theme('colors.slate.900')]
      `,
      destructive: `
      border-red-500 bg-red-500 text-white
   hover:border-red-600 hover:bg-red-600
     focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2
    [--spinner-color: theme('colors.white')]
      `,
      outline: `
         border-slate-200 bg-transparent text-slate-900
    hover:bg-slate-100 hover:text-slate-900
     focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2
    [--spinner-color: theme('colors.slate.900')]
      `,
      ghost: `
        border-transparent bg-transparent text-slate-900
    hover:bg-slate-100 hover:text-slate-900
     focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2
    [--spinner-color: theme('colors.slate.900')]
      `,
      link: ` border-transparent bg-transparent text-slate-900
    underline-offset-4 hover:underline
    focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2
    --spinner-color: theme('colors.slate.900')]`,
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50 pointer-events-none',
    },
  },
  compoundVariants: [
    {
      variants: {
        icon: true,
        size: 'sm',
      },
      classes: `h-8 w-8`,
    },
    {
      variants: {
        icon: true,
        size: 'md',
      },
      classes: 'h-9 w-9',
    },
    {
      variants: {
        icon: true,
        size: 'lg',
      },
      classes: 'h-10 w-10',
    },
    {
      variants: {
        icon: true,
        size: 'xl',
      },
      classes: 'h-12 w-12',
    },
    {
      variants: {
        icon: false,
        size: 'sm',
      },
      classes: `h-8 px-3 text-sm`,
    },
    {
      variants: {
        icon: false,
        size: 'md',
      },
      classes: 'h-9 px-4 text-sm',
    },
    {
      variants: {
        icon: false,
        size: 'lg',
      },
      classes: 'h-10 px-8',
    },

    {
      variants: {
        icon: false,
        size: 'xl',
      },
      classes: 'h-12 px-10 text-lg',
    },
  ],
});

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[appButton]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  imports: [ButtonLoaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClasses()',
    '[disabled]': 'disabled()',
  },
})
export class ButtonComponent {
  variant = input<VARIANT_TYPES>('default');

  disabled = input(false, { transform: booleanAttribute });

  size = input<SIZE_TYPES>('md');

  icon = input(false, { transform: booleanAttribute });

  loading = input<boolean>();

  hostClasses = HOST_CLASSES(() => ({
    variant: this.variant(),
    size: this.size(),
    icon: this.icon(),
    loading: this.loading(),
    disabled: this.disabled(),
  }));

  classNames = computed(() => {
    return [`btn-${this.variant()}`, `btn-${this.size()}`];
  });
}
