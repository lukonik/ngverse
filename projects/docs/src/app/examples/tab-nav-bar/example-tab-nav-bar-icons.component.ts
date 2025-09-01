import { TabNavBarComponent } from '@/ui/tab-nav-bar/tab-nav-bar.component';
import { TabNavBarItemComponent } from '@/ui/tab-nav-bar/tab-nav-bar-item/tab-nav-bar-item.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'doc-example-tab-nav-bar-icons',
  imports: [TabNavBarComponent, TabNavBarItemComponent],
  template: `
    <div class="space-y-4">
      <app-tab-nav-bar [(selectedTabValue)]="selectedTab">
        <app-tab-nav-bar-item tabValue="dashboard">
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
              ></path>
            </svg>
            <span>Dashboard</span>
          </div>
        </app-tab-nav-bar-item>

        <app-tab-nav-bar-item tabValue="analytics">
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
              ></path>
            </svg>
            <span>Analytics</span>
          </div>
        </app-tab-nav-bar-item>

        <app-tab-nav-bar-item tabValue="reports">
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Reports</span>
          </div>
        </app-tab-nav-bar-item>

        <app-tab-nav-bar-item tabValue="settings">
          <div class="flex items-center space-x-2">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Settings</span>
          </div>
        </app-tab-nav-bar-item>
      </app-tab-nav-bar>

      <div class="rounded-lg border border-green-200 bg-green-50 p-4">
        <div class="mb-2 flex items-center space-x-2">
          <span class="font-medium text-green-800">{{
            getSelectedIcon()
          }}</span>
          <span class="text-green-700">{{ getSelectedTitle() }}</span>
        </div>
        <p class="text-sm text-green-600">
          {{ getSelectedDescription() }}
        </p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTabNavBarIconsComponent {
  selectedTab = signal<string | undefined>('dashboard');

  getSelectedIcon(): string {
    const tab = this.selectedTab();
    switch (tab) {
      case 'dashboard':
        return '📊';
      case 'analytics':
        return '📈';
      case 'reports':
        return '📋';
      case 'settings':
        return '⚙️';
      default:
        return '📄';
    }
  }

  getSelectedTitle(): string {
    const tab = this.selectedTab();
    switch (tab) {
      case 'dashboard':
        return 'Dashboard Overview';
      case 'analytics':
        return 'Analytics Data';
      case 'reports':
        return 'Generated Reports';
      case 'settings':
        return 'System Settings';
      default:
        return 'Select a Tab';
    }
  }

  getSelectedDescription(): string {
    const tab = this.selectedTab();
    switch (tab) {
      case 'dashboard':
        return 'View key metrics and performance indicators at a glance.';
      case 'analytics':
        return 'Deep dive into data trends and user behavior patterns.';
      case 'reports':
        return 'Access and download various business reports and summaries.';
      case 'settings':
        return 'Configure application preferences and account settings.';
      default:
        return 'Please select a navigation item to see more details.';
    }
  }
}
