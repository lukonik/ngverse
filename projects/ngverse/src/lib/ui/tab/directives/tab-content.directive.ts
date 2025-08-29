import { Directive, inject, TemplateRef } from '@angular/core';

/**
 * Directive that marks a template as lazy-loaded tab content.
 * Content wrapped with this directive will only be rendered when its tab becomes active.
 *
 * @example
 * ```html
 * <app-tab-panel label="Lazy Tab">
 *   <ng-template appTabContent>
 *     <p>This content only loads when the tab is selected</p>
 *     <expensive-component></expensive-component>
 *   </ng-template>
 * </app-tab-panel>
 * ```
 *
 * Benefits:
 * - Improves initial render performance by deferring content
 * - Useful for tabs containing expensive components or large data sets
 * - Content is cached once rendered (not re-created on tab switches)
 */
@Directive({
  selector: 'ng-template[appTabContent]',
})
export class TabContentDirective {
  /** Reference to the template containing the lazy-loaded content */
  templateRef = inject(TemplateRef<unknown>);
}
