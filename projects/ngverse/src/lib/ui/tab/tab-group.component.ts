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
  viewChildren,
} from '@angular/core';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

/**
 * Animation configuration for tab content transitions.
 * Creates a fade-in effect when switching between tab panels.
 */
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

/**
 * A tab group component that displays a collection of tab panels with keyboard navigation and accessibility support.
 *
 * @example
 * ```html
 * <app-tab-group>
 *   <app-tab-panel label="First Tab">Content 1</app-tab-panel>
 *   <app-tab-panel label="Second Tab">Content 2</app-tab-panel>
 * </app-tab-group>
 * ```
 *
 * Features:
 * - Keyboard navigation with arrow keys and Enter
 * - Full accessibility with ARIA attributes
 * - Smooth content transitions
 * - Lazy loading support for tab content
 * - RTL/LTR direction support
 */
@Component({
  selector: 'app-tab-group',
  imports: [NgTemplateOutlet, TabHeaderComponent],
  templateUrl: './tab-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('tabChange', [TAB_CHANGE_ANIMATION])],
})
export class TabGroupComponent {
  /** Collection of tab panel components projected into this tab group */
  tabs = contentChildren(TabPanelComponent);

  /** The currently selected tab index, two-way bindable */
  selectedIndex = model(0);

  /** Whether to add padding to the tab content area */
  bodyGap = input(true);

  /** Collection of tab header components for keyboard navigation */
  tabHeaders = viewChildren(TabHeaderComponent);

  /** Service for determining text direction (RTL/LTR) */
  direction = inject(Directionality);

  /**
   * Manages keyboard navigation between tab headers.
   * Handles arrow key navigation and focus management according to ARIA best practices.
   */
  keyManager = new ActiveDescendantKeyManager(
    this.tabHeaders,
    inject(Injector)
  ).withHorizontalOrientation(this.direction.value);

  /**
   * Handles keyboard navigation events for the tab group.
   * Responds to Enter key to select the currently focused tab and delegates
   * other navigation keys to the key manager.
   *
   * @param event - The keyboard event to process
   */
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.keyManager.activeItemIndex !== null) {
      this.selectTab(this.keyManager.activeItemIndex);
    }
    this.keyManager.onKeydown(event);
  }

  /** Event emitted when the selected tab changes, containing the new tab index */
  tabChanged = output<number>();

  /** Computed property that returns the currently selected tab panel component */
  selectedTab = computed(() =>
    this.tabs().find((_, index) => index === this.selectedIndex())
  );

  /**
   * Handles focus events on the tab group container.
   * Ensures the first tab receives focus when the tab group is focused for the first time.
   */
  onTabGroupFocus() {
    if (!this.keyManager.activeItem) {
      this.keyManager.setFirstItemActive();
    }
  }

  /**
   * Programmatically selects a tab by index.
   * Updates the key manager's active item, sets the selected index, and emits the change event.
   *
   * @param index - The zero-based index of the tab to select
   */
  selectTab(index: number) {
    this.keyManager.setActiveItem(index);
    this.selectedIndex.set(index);
    this.tabChanged.emit(index);
  }
}
