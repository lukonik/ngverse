import { Directive, inject, TemplateRef } from '@angular/core';

/**
 * Directive that marks a template as a custom tab label.
 * Allows for rich, interactive tab headers beyond simple text labels.
 *
 * @example
 * ```html
 * <app-tab-panel>
 *   <ng-template appTabLabel>
 *     <i class="icon-home"></i>
 *     <span>Home</span>
 *     <span class="badge">3</span>
 *   </ng-template>
 *   <p>Tab content goes here</p>
 * </app-tab-panel>
 * ```
 *
 * Use cases:
 * - Icons with text labels
 * - Badge or notification indicators
 * - Complex styling that requires HTML structure
 * - Dynamic content in tab headers
 *
 * Note: When using this directive, the `label` input on TabPanelComponent is ignored.
 */
@Directive({
  selector: 'ng-template[appTabLabel]',
})
export class TabLabelDirective {
  /** Reference to the template containing the custom tab label content */
  templateRef = inject(TemplateRef<unknown>);
}
