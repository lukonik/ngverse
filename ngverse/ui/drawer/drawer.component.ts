import { ButtonComponent } from '@/ui/button/button.component';
import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import {
  animate,
  animation,
  AnimationEvent,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ComponentType } from '@angular/cdk/portal';
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { DrawerCloseDirective } from './drawer-close.directive';

const ENTER_ANIMATION = transition('* => enter', [
  animation(
    animate(
      '250ms ease-in',
      keyframes([
        style({
          visibility: 'visible',
          transform: 'translate3d(100%, 0, 0)',
          easing: 'ease',
          offset: 0,
        }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
      ])
    )
  ),
]);

const LEAVE_ANIMATION = transition('* => exit', [
  animation(
    animate(
      '250ms ease-out',
      keyframes([
        style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        style({
          transform: 'translate3d(100%, 0, 0)',
          visibility: 'hidden',
          easing: 'ease',
          offset: 1,
        }),
      ])
    )
  ),
]);

@Component({
  selector: 'app-drawer',
  imports: [
    DrawerCloseDirective,
    ButtonComponent,
    NgComponentOutlet,
    FontIconComponent,
  ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
  animations: [trigger('toggle', [ENTER_ANIMATION, LEAVE_ANIMATION])],
  host: {
    '[@toggle]': 'animationState()',
    '(@toggle.done)': 'onDone($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  title = signal<string | undefined>(undefined);
  animationState = signal<'enter' | 'exit'>('enter');
  component!: ComponentType<unknown>;
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
