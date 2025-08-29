import { TabLabelDirective } from '@/ui/tab/directives/tab-label.directive';
import { TabGroupComponent } from '@/ui/tab/tab-group.component';
import { TabPanelComponent } from '@/ui/tab/tab-panel/tab-panel.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-tab-custom-labels',
  imports: [TabGroupComponent, TabPanelComponent, TabLabelDirective],
  template: `
    <app-tab-group>
      <app-tab-panel>
        <ng-template appTabLabel>
          <span class="flex items-center gap-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Dashboard
          </span>
        </ng-template>
        <div class="p-4">Dashboard content with custom icon label</div>
      </app-tab-panel>

      <app-tab-panel>
        <ng-template appTabLabel>
          <span class="flex items-center gap-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              />
            </svg>
            Tasks
            <span
              class="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800"
              >3</span
            >
          </span>
        </ng-template>
        <div class="p-4">Task management with badge indicator</div>
      </app-tab-panel>

      <app-tab-panel>
        <ng-template appTabLabel>
          <span class="flex items-center gap-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg>
            Profile
          </span>
        </ng-template>
        <div class="p-4">User profile settings and information</div>
      </app-tab-panel>
    </app-tab-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTabCustomLabelsComponent {}
