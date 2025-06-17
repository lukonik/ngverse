import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  model,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  imports: [FontIconComponent],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block mb-3 pb-3 border-b border-divider',
  },
})
export class AccordionItemComponent {
  label = input<string>();
  disabled = input<boolean>();
  closed = output();
  opened = output();
  expanded = model<boolean>();

  protected accordionBodyId = inject(_IdGenerator).getId(
    'accordion-item-body-'
  );
  protected accordionTriggerId = inject(_IdGenerator).getId(
    'accordion-item-trigger-'
  );
  protected leaving = signal(false);

  protected onAnimationEnd() {
    this.leaving.set(false);
    this.expanded.set(false);
    this.closed.emit();
  }

  toggle() {
    if (!this.expanded()) {
      this.open();
      return;
    }
    this.close();
  }

  close() {
    if (this.expanded()) {
      this.leaving.set(true);
    }
  }

  open() {
    this.expanded.set(true);
    this.opened.emit();
  }
}
