import { TabContentDirective } from '@/ui/tab/directives/tab-content.directive';
import { TabLabelDirective } from '@/ui/tab/directives/tab-label.directive';
import { TabGroupComponent } from '@/ui/tab/tab-group.component';
import { TabPanelComponent } from '@/ui/tab/tab-panel/tab-panel.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-preview-tab',
  imports: [
    TabGroupComponent,
    TabPanelComponent,
    TabContentDirective,
    TabLabelDirective,
  ],
  template: `
    <app-tab-group>
      <app-tab-panel label="Dashboard">
        <div class="p-4">
          <h3 class="mb-2 text-lg font-semibold">Dashboard Overview</h3>
          <p class="text-gray-600">
            Welcome to your dashboard. Here you can view your latest activities
            and statistics.
          </p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Projects">
        <div class="p-4">
          <h3 class="mb-2 text-lg font-semibold">My Projects</h3>
          <p class="text-gray-600">
            Manage and track all your ongoing projects from this centralized
            location.
          </p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Settings">
        <div class="p-4">
          <h3 class="mb-2 text-lg font-semibold">Account Settings</h3>
          <p class="text-gray-600">
            Configure your account preferences and security settings.
          </p>
        </div>
      </app-tab-panel>
    </app-tab-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewTabComponent {}
