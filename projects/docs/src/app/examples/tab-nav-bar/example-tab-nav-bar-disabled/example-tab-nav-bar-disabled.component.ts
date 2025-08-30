import { TabNavBarComponent } from '@/ui/tab-nav-bar/tab-nav-bar.component';
import { TabNavBarItemComponent } from '@/ui/tab-nav-bar/tab-nav-bar-item/tab-nav-bar-item.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'doc-example-tab-nav-bar-disabled',
  imports: [TabNavBarComponent, TabNavBarItemComponent],
  template: `
    <div class="space-y-4">
      <app-tab-nav-bar [(selectedTabValue)]="selectedTab">
        <app-tab-nav-bar-item tabValue="overview"
          >Overview</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="features"
          >Features</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="pricing" [disabled]="true"
          >Pricing</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="support" [disabled]="true"
          >Support</app-tab-nav-bar-item
        >
      </app-tab-nav-bar>

      <div class="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p class="mb-2 text-sm text-gray-600">
          Selected Tab:
          <span class="font-medium">{{ selectedTab() || 'None' }}</span>
        </p>
        <p class="text-xs text-gray-500">
          Note: "Pricing" and "Support" tabs are disabled and cannot be
          selected.
        </p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTabNavBarDisabledComponent {
  selectedTab = signal<string | undefined>('overview');
}
