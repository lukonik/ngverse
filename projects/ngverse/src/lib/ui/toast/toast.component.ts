import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ToastCloseIconComponent } from './toast-close.component';
import { TOAST_POSITION } from './toast.service';
const TOAST_LEAVE_CLASS = 'toast-on-leave';
@Component({
  selector: 'app-toast',
  imports: [ToastCloseIconComponent, NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'alert',
    '[class.toaster]': 'true',
    '[class]': 'type()',
    '(transitionend)': 'onTransitionEnd()',
  },
})
export class ToastComponent {
  message = signal<string>('');
  type = signal<string | undefined>(undefined);
  showCloseIcon = signal<boolean>(true);
  position = signal<TOAST_POSITION>('right_bottom');
  private _onLeave = new Subject<void>();
  onLeave = this._onLeave.asObservable();
  private _el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected onTransitionEnd() {
    if (this._el.classList.contains(TOAST_LEAVE_CLASS)) {
      this._onLeave.next();
      this._onLeave.complete();
    }
  }

  leave() {
    this._el.classList.add(TOAST_LEAVE_CLASS);
  }
}
