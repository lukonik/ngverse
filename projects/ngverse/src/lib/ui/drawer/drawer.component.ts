import { ButtonComponent } from '@/ui/button/button.component';
import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { ComponentType } from '@angular/cdk/portal';
import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { fromEvent, take } from 'rxjs';
import { DrawerCloseDirective } from './drawer-close.directive';

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
  animations: [],
  host: {
    '[class.drawer-on-leave]': 'leaving()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  title = signal<string | undefined>(undefined);
  component!: ComponentType<unknown>;
  private _host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private leaving = signal(false);

  leave() {
    this.leaving.set(true);
    return fromEvent<TransitionEvent>(this._host, 'transitionend').pipe(
      take(1)
    );
  }
}
