import { TabNavBarComponent } from '@/ui/tab-nav-bar/tab-nav-bar.component';
import { TabNavBarItemComponent } from '@/ui/tab-nav-bar/tab-nav-bar-item/tab-nav-bar-item.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'doc-preview-tab-nav-bar',
  imports: [TabNavBarComponent, TabNavBarItemComponent],
  template: `
    <div class="space-y-4">
      <app-tab-nav-bar [(selectedTabValue)]="selectedTab">
        <app-tab-nav-bar-item tabValue="dashboard"
          >Dashboard</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="analytics"
          >Analytics</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="reports">Reports</app-tab-nav-bar-item>
        <app-tab-nav-bar-item tabValue="settings"
          >Settings</app-tab-nav-bar-item
        >
      </app-tab-nav-bar>

      <div class="mt-6 rounded-lg bg-gray-50 p-4">
        <p class="text-sm text-gray-600">
          Selected:
          <span class="font-medium">{{ selectedTab() || 'None' }}</span>
        </p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewTabNavBarComponent {
  selectedTab = signal<string | undefined>('dashboard');
}
