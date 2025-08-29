import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  inject,
  input,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { TabContentDirective } from '../directives/tab-content.directive';
import { TabLabelDirective } from '../directives/tab-label.directive';

/**
 * Tab panel component that represents a single tab's content and configuration.
 * Contains the tab's label, content, and metadata such as disabled state and styling options.
 *
 * @example
 * ```html
 * <!-- Simple tab with text label -->
 * <app-tab-panel label="Tab 1">
 *   <p>Tab content goes here</p>
 * </app-tab-panel>
 *
 * <!-- Tab with custom label template -->
 * <app-tab-panel>
 *   <ng-template appTabLabel>
 *     <i class="icon"></i> Custom Label
 *   </ng-template>
 *   <p>Tab content</p>
 * </app-tab-panel>
 *
 * <!-- Tab with lazy-loaded content -->
 * <app-tab-panel label="Lazy Tab">
 *   <ng-template appTabContent>
 *     <p>This content loads only when tab is selected</p>
 *   </ng-template>
 * </app-tab-panel>
 * ```
 *
 * Features:
 * - Support for simple text labels or custom label templates
 * - Lazy loading of tab content via appTabContent directive
 * - Disabled state support
 * - Configurable padding for content area
 */
@Component({
  selector: 'app-tab-panel',
  imports: [],
  templateUrl: './tab-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabPanelComponent {
  /** The text label displayed in the tab header. Optional if using a custom label template. */
  label = input<string>();

  /** Reference to the component's template for content projection */
  templateRef = viewChild(TemplateRef);

  /** View container reference for dynamic component creation (if needed) */
  vf = inject(ViewContainerRef);

  /** Custom template for the tab header label, projected via appTabLabel directive */
  headerTemplate = contentChild(TabLabelDirective);

  /** Template for lazy-loaded tab content, projected via appTabContent directive */
  bodyTemplate = contentChild(TabContentDirective);

  /** Whether to apply default padding to the tab content area */
  gap = input(true);

  /** Portal instance for advanced content projection scenarios (currently unused) */
  portal: TemplatePortal | undefined;

  /** Whether this tab is disabled and cannot be selected */
  disabled = input(false);
}
