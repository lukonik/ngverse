import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  inject,
  Injector,
  model,
  output,
  viewChildren,
} from '@angular/core';
import { TabNavBarItemComponent } from './tab-nav-bar-item/tab-nav-bar-item.component';

/**
 * A tab navigation bar component that displays navigation items without content bodies.
 * Similar to tab headers but designed for navigation purposes.
 *
 * @example
 * ```html
 * <app-tab-nav-bar [(selectedTabValue)]="activeTab">
 *   <app-tab-nav-bar-item tabValue="home">Home</app-tab-nav-bar-item>
 *   <app-tab-nav-bar-item tabValue="about">About</app-tab-nav-bar-item>
 * </app-tab-nav-bar>
 * ```
 *
 * Features:
 * - Keyboard navigation with arrow keys and Enter
 * - Full accessibility with ARIA attributes
 * - RTL/LTR direction support
 * - Model binding for selected tab value
 */
@Component({
  selector: 'app-tab-nav-bar',
  imports: [],
  template: `
    <div
      class="relative flex border-b border-gray-200 focus:outline-none focus-visible:[&_app-tab-nav-bar-item.is-active]:ring-1 focus-visible:[&_app-tab-nav-bar-item.is-active]:ring-slate-900"
      #tabNavBarHeader
      role="tablist"
      aria-orientation="horizontal"
      (keydown)="onKeydown($event)"
      tabindex="0"
      (focus)="onTabNavBarFocus()"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabNavBarComponent {
  /** Collection of tab nav bar item components projected into this component */
  tabItems = contentChildren(TabNavBarItemComponent);

  /** The currently selected tab value, two-way bindable */
  selectedTabValue = model<string | undefined>(undefined);

  /** Collection of tab nav bar item components for keyboard navigation */
  tabNavBarItems = viewChildren(TabNavBarItemComponent);

  /** Service for determining text direction (RTL/LTR) */
  direction = inject(Directionality);

  /**
   * Manages keyboard navigation between tab nav bar items.
   * Handles arrow key navigation and focus management according to ARIA best practices.
   */
  keyManager = new ActiveDescendantKeyManager(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.tabNavBarItems as any,
    inject(Injector)
  ).withHorizontalOrientation(this.direction.value);

  /** Event emitted when the selected tab value changes */
  tabChanged = output<string | undefined>();

  /** Computed property that returns the currently selected tab nav bar item component */
  selectedTabItem = computed(() =>
    this.tabItems().find((item) => item.tabValue() === this.selectedTabValue())
  );

  /**
   * Handles keyboard navigation events for the tab nav bar.
   * Responds to Enter key to select the currently focused tab and delegates
   * other navigation keys to the key manager.
   *
   * @param event - The keyboard event to process
   */
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.keyManager.activeItemIndex !== null) {
      const activeItem = this.keyManager
        .activeItem as unknown as TabNavBarItemComponent;
      if (activeItem) {
        this.selectTabValue(activeItem.tabValue());
      }
    }
    this.keyManager.onKeydown(event);
  }

  /**
   * Handles focus events on the tab nav bar container.
   * Ensures the first tab receives focus when the tab nav bar is focused for the first time.
   */
  onTabNavBarFocus() {
    if (!this.keyManager.activeItem) {
      this.keyManager.setFirstItemActive();
    }
  }

  /**
   * Programmatically selects a tab by value.
   * Updates the key manager's active item, sets the selected tab value, and emits the change event.
   *
   * @param tabValue - The value of the tab to select
   */
  selectTabValue(tabValue: string | undefined) {
    const itemIndex = this.tabItems().findIndex(
      (item) => item.tabValue() === tabValue
    );
    if (itemIndex !== -1) {
      this.keyManager.setActiveItem(itemIndex);
    }
    this.selectedTabValue.set(tabValue);
    this.tabChanged.emit(tabValue);
  }
}
