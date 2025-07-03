import {
  animate,
  animation,
  AnimationEvent,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastCloseIconComponent } from './toast-close.component';
import { TOAST_POSITION } from './toast.service';

const ZOOM_IN_ANIMATION = transition('* => enter', [
  animation(
    animate(
      '250ms ease-in',
      keyframes([
        style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
        style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0.5 }),
      ])
    )
  ),
]);

const ZOOM_OUT_ANIMATION = transition('* => exit', [
  animation(
    animate(
      '250ms ease-out',
      keyframes([
        style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }),
        style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0.5 }),
        style({ opacity: 0, offset: 1 }),
      ])
    )
  ),
]);

@Component({
  selector: 'app-toast',
  imports: [ToastCloseIconComponent, NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('toggle', [ZOOM_IN_ANIMATION, ZOOM_OUT_ANIMATION])],
  host: {
    role: 'alert',
    '[class.toaster]': 'true',
    '[class]': 'type()',
    '[@toggle]': 'animationState()',
    '(@toggle.done)': 'onDone($event)',
  },
})
export class ToastComponent {
  message = signal<string>('');
  type = signal<string | undefined>(undefined);
  showCloseIcon = signal<boolean>(true);
  position = signal<TOAST_POSITION>('right_bottom');
  animationState = signal<'enter' | 'exit'>('enter');
  private _onExit = new Subject<void>();
  onExit = this._onExit.asObservable();

  onDone($event: AnimationEvent) {
    if ($event.toState === 'exit') {
      this._onExit.next();
      this._onExit.complete();
    }
  }

  exit() {
    this.animationState.set('exit');
  }
}
