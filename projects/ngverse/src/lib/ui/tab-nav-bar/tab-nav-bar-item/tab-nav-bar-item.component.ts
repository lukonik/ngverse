import { Highlightable } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Input,
  input,
} from '@angular/core';
import { TabNavBarComponent } from '../tab-nav-bar.component';

/**
 * A tab navigation bar item component that represents a single navigation item.
 * Designed to be projected into TabNavBarComponent via ng-content.
 *
 * @example
 * ```html
 * <app-tab-nav-bar-item tabValue="home">
 *   Home
 * </app-tab-nav-bar-item>
 * ```
 *
 * Features:
 * - Keyboard navigation support via Highlightable interface
 * - Accessible with proper ARIA attributes
 * - Visual feedback for selected and active states
 */
@Component({
  selector: 'app-tab-nav-bar-item',
  imports: [],
  template: `
    <button
      type="button"
      class="relative px-4 py-2 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-700 focus:text-slate-900 focus:outline-none"
      [class.text-slate-900]="isSelected()"
      [class.border-b-2]="isSelected()"
      [class.border-slate-900]="isSelected()"
      [class.is-active]="isActive"
      [attr.id]="'tab-nav-' + tabValue()"
      [attr.aria-selected]="isSelected()"
      [attr.aria-disabled]="disabled"
      [tabindex]="isSelected() ? 0 : -1"
      role="tab"
      (click)="onClick()"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './tab-nav-bar-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.aria-disabled]': 'disabled',
    '[class.is-active]': 'isActive',
  },
})
export class TabNavBarItemComponent implements Highlightable {
  /** The unique value for this tab nav bar item */
  tabValue = input.required<string>();

  /** Whether this tab nav bar item is disabled  */
  @Input()
  disabled: boolean | undefined;

  /** Reference to the parent tab nav bar component */
  private tabNavBar = inject(TabNavBarComponent);

  /** Whether this tab nav bar item currently has keyboard focus */
  isActive = false;

  /** Computed property that determines if this tab nav bar item is currently selected */
  isSelected = computed(
    () => this.tabNavBar.selectedTabValue() === this.tabValue()
  );

  /**
   * Handles click events on the tab nav bar item.
   * Selects this tab by notifying the parent tab nav bar component.
   */
  onClick() {
    if (!this.disabled) {
      this.tabNavBar.selectTabValue(this.tabValue());
    }
  }

  /**
   * Sets the active state of this tab nav bar item.
   * Called by the CDK KeyManager for keyboard navigation.
   */
  setActiveStyles(): void {
    this.isActive = true;
  }

  /**
   * Removes the active state of this tab nav bar item.
   * Called by the CDK KeyManager for keyboard navigation.
   */
  setInactiveStyles(): void {
    this.isActive = false;
  }
}
