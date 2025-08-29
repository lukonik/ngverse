import { Highlightable } from '@angular/cdk/a11y';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

/**
 * Tab header component that displays the clickable tab label and handles focus management.
 * Implements the Highlightable interface for integration with Angular CDK's keyboard navigation.
 *
 * @example
 * ```html
 * <app-tab-header
 *   [tab]="tabPanel"
 *   [isSelected]="true"
 *   [tabIndex]="0"
 *   [isActive]="false">
 * </app-tab-header>
 * ```
 *
 * Features:
 * - Proper ARIA attributes for accessibility
 * - Focus management integration with KeyManager
 * - Support for custom tab labels via templates
 * - Visual feedback for active and selected states
 */
@Component({
  selector: 'app-tab-header',
  imports: [NgTemplateOutlet],
  templateUrl: './tab-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './tab-header.component.css',
  host: {
    role: 'tab',
    '[class.is-active]': 'enabledTabIndex()',
    '[class.is-selected]': 'isSelected()',
    '[attr.id]': '"tab-" + tabIndex()',
    '[attr.aria-selected]': 'isSelected()',
    '[attr.aria-controls]': '"tabpanel-" + tabIndex()',
    '[attr.tabindex]': 'isActive() ? "0" : "-1"',
    '[attr.aria-disabled]': 'isDisabled()',
  },
})
export class TabHeaderComponent implements Highlightable {
  /** Signal to track activation state (not currently used) */
  activate = signal(false);

  /** Reference to the associated tab panel component */
  tab = input.required<TabPanelComponent>();

  /** The zero-based index of this tab within the tab group */
  tabIndex = input.required<number>();

  /** Whether this tab header currently has keyboard focus */
  isActive = input(false);

  /** Whether this tab is disabled and cannot be selected */
  isDisabled = input(false);

  /**
   * Getter required by the Highlightable interface.
   * Returns the disabled state for compatibility with Angular CDK.
   */
  get disabled(): boolean | undefined {
    return this.isDisabled();
  }

  /** Reference to the native HTML element for direct DOM manipulation */
  element = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>)
    .nativeElement;

  /** Signal that controls whether this tab should receive focus */
  enabledTabIndex = signal(false);

  /** Whether this tab is currently selected (shows its content) */
  isSelected = input.required<boolean>();

  /**
   * Called by the KeyManager when this tab becomes the active (focused) item.
   * Enables tabindex and focuses the element for keyboard navigation.
   * Required by the Highlightable interface.
   */
  setActiveStyles(): void {
    this.enabledTabIndex.set(true);
    this.element.focus();
  }

  /**
   * Called by the KeyManager when this tab loses focus.
   * Disables tabindex to remove from tab order.
   * Required by the Highlightable interface.
   */
  setInactiveStyles(): void {
    this.enabledTabIndex.set(false);
  }
}
