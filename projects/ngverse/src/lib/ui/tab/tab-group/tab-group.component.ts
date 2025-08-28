import {
  animate,
  animation,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  inject,
  Injector,
  input,
  model,
  output,
  signal,
  viewChildren,
} from '@angular/core';
import { TabHeaderComponent } from '../tab-header/tab-header.component';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

const TAB_CHANGE_ANIMATION = transition('* => *', [
  animation(
    animate(
      '250ms ease-in',
      keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 1, offset: 1 }),
      ])
    )
  ),
]);

@Component({
  selector: 'app-tab-group',
  imports: [NgTemplateOutlet, TabHeaderComponent],
  templateUrl: './tab-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('tabChange', [TAB_CHANGE_ANIMATION])],
})
export class TabGroupComponent {
  tabs = contentChildren(TabPanelComponent);
  selectedIndex = model(0);
  bodyGap = input(true);

  tabHeaders = viewChildren(TabHeaderComponent);

  direction = inject(Directionality);

  keyManager = new ActiveDescendantKeyManager(
    this.tabHeaders,
    inject(Injector)
  ).withHorizontalOrientation(this.direction.value);

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.keyManager.activeItemIndex !== null) {
      this.selectTab(this.keyManager.activeItemIndex);
    }
    this.keyManager.onKeydown(event);
  }

  tabChanged = output<number>();

  selectedTab = computed(() =>
    this.tabs().find((_, index) => index === this.selectedIndex())
  );

  tabInkWidth = signal(0);
  tabInkLeft = signal(0);

  onTabGroupFocus() {
    if (!this.keyManager.activeItem) {
      this.keyManager.setFirstItemActive();
    }
  }

  selectTab($event: number) {
    this.keyManager.setActiveItem($event);
    this.selectedIndex.set($event);
    this.tabChanged.emit($event);
  }
}
