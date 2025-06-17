import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  effect,
  input,
  OnDestroy,
  untracked,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements OnDestroy {
  multi = input<boolean>();
  private _items = contentChildren<AccordionItemComponent>(
    AccordionItemComponent
  );
  sub: Subscription | undefined;

  constructor() {
    effect(() => {
      const items = this._items();
      this.sub?.unsubscribe();
      this.sub = new Subscription();
      for (const item of items) {
        item.opened.subscribe(() => {
          untracked(() => {
            const multi = this.multi();
            if (!multi) {
              for (const i of items) {
                if (i !== item) {
                  i.close();
                }
              }
            }
          });
        });
      }
    });
  }

  expandAll() {
    const items = this._items();
    for (const item of items) {
      item.close();
    }
  }

  collapseAll() {
    const items = this._items();
    for (const item of items) {
      item.open();
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
