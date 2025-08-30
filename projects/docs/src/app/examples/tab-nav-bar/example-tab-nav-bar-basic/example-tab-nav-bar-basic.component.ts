import { TabNavBarComponent } from '@/ui/tab-nav-bar/tab-nav-bar.component';
import { TabNavBarItemComponent } from '@/ui/tab-nav-bar/tab-nav-bar-item/tab-nav-bar-item.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'doc-example-tab-nav-bar-basic',
  imports: [TabNavBarComponent, TabNavBarItemComponent],
  template: `
    <div class="space-y-4">
      <app-tab-nav-bar [(selectedTabValue)]="selectedTab">
        <app-tab-nav-bar-item tabValue="home">Home</app-tab-nav-bar-item>
        <app-tab-nav-bar-item tabValue="about">About</app-tab-nav-bar-item>
        <app-tab-nav-bar-item tabValue="services"
          >Services</app-tab-nav-bar-item
        >
        <app-tab-nav-bar-item tabValue="contact">Contact</app-tab-nav-bar-item>
      </app-tab-nav-bar>

      <div class="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <h3 class="mb-2 text-lg font-semibold text-blue-900">
          {{ getPageTitle() }}
        </h3>
        <p class="text-blue-700">
          {{ getPageContent() }}
        </p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTabNavBarBasicComponent {
  selectedTab = signal<string | undefined>('home');

  getPageTitle(): string {
    const tab = this.selectedTab();
    switch (tab) {
      case 'home':
        return 'Welcome Home';
      case 'about':
        return 'About Us';
      case 'services':
        return 'Our Services';
      case 'contact':
        return 'Contact Information';
      default:
        return 'Select a Tab';
    }
  }

  getPageContent(): string {
    const tab = this.selectedTab();
    switch (tab) {
      case 'home':
        return 'This is the home page content. Welcome to our application!';
      case 'about':
        return 'Learn more about our company, mission, and team.';
      case 'services':
        return 'Discover the wide range of services we offer to our clients.';
      case 'contact':
        return 'Get in touch with us using the contact information below.';
      default:
        return 'Please select a navigation item to see the content.';
    }
  }
}
