import { TabContentDirective } from '@/ui/tab/directives/tab-content.directive';
import { TabGroupComponent } from '@/ui/tab/tab-group.component';
import { TabPanelComponent } from '@/ui/tab/tab-panel/tab-panel.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyTabComponent } from './lazy-tab/lazy-tab.component';

@Component({
  selector: 'doc-example-tab-lazy-content',
  imports: [
    TabGroupComponent,
    TabPanelComponent,
    TabContentDirective,
    LazyTabComponent,
  ],
  template: `
    <app-tab-group>
      <app-tab-panel label="Immediate Content">
        <div class="p-4">
          <p>
            This content loads immediately when the component is initialized.
          </p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Lazy Content">
        <ng-template appTabContent>
          <div class="p-4">
            <p class="mb-4">
              This content only loads when the tab is first selected!
            </p>
            <doc-lazy-tab></doc-lazy-tab>
          </div>
        </ng-template>
      </app-tab-panel>

      <app-tab-panel label="Another Lazy Tab">
        <ng-template appTabContent>
          <div class="p-4">
            <h3 class="mb-2 text-lg font-semibold">Expensive Component</h3>
            <p class="text-gray-600">
              This could be a heavy component with API calls, large data sets,
              or complex calculations.
            </p>
            <div class="mt-4 rounded border border-yellow-200 bg-yellow-50 p-3">
              <p class="text-sm text-yellow-800">
                💡 This content was lazy-loaded for better performance!
              </p>
            </div>
          </div>
        </ng-template>
      </app-tab-panel>
    </app-tab-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTabLazyContentComponent {}
