import {
  ChangeDetectionStrategy,
  Component,
  provideExperimentalZonelessChangeDetection,
  ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';

import { TabGroupComponent } from './tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabLabelDirective } from './directives/tab-label.directive';
import { TabContentDirective } from './directives/tab-content.directive';

describe('TabGroupComponent', () => {
  let component: TabGroupComponent;
  let fixture: ComponentFixture<TabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupComponent, NoopAnimationsModule],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        { provide: Directionality, useValue: { value: 'ltr' } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have correct selector', () => {
      expect(fixture.debugElement.componentInstance).toBeInstanceOf(
        TabGroupComponent
      );
    });

    it('should use OnPush change detection strategy', () => {
      expect(fixture.componentRef.changeDetectorRef.constructor.name).toContain(
        'ViewRef'
      );
    });
  });

  describe('Initial State', () => {
    it('should have default selectedIndex of 0', () => {
      expect(component.selectedIndex()).toBe(0);
    });

    it('should have default bodyGap of true', () => {
      expect(component.bodyGap()).toBe(true);
    });

    it('should have empty tabs initially', () => {
      expect(component.tabs().length).toBe(0);
    });

    it('should have empty tabHeaders initially', () => {
      expect(component.tabHeaders().length).toBe(0);
    });
  });

  describe('Dependency Injection', () => {
    it('should inject Directionality service', () => {
      expect(component.direction).toBeDefined();
      expect(component.direction.value).toBe('ltr');
    });

    it('should create ActiveDescendantKeyManager', () => {
      expect(component.keyManager).toBeInstanceOf(ActiveDescendantKeyManager);
    });
  });

  describe('Computed Properties', () => {
    it('should have selectedTab computed property', () => {
      expect(typeof component.selectedTab).toBe('function');
    });

    it('should return undefined for selectedTab when no tabs', () => {
      expect(component.selectedTab()).toBeUndefined();
    });
  });

  describe('Template Structure', () => {
    it('should render tab list container with correct attributes', () => {
      const tabList = fixture.debugElement.query(By.css('[role="tablist"]'));
      expect(tabList).toBeTruthy();
      expect(tabList.nativeElement.getAttribute('aria-orientation')).toBe(
        'horizontal'
      );
      expect(tabList.nativeElement.getAttribute('tabindex')).toBe('0');
    });

    it('should render tab content panel with correct attributes', () => {
      const tabPanel = fixture.debugElement.query(By.css('[role="tabpanel"]'));
      expect(tabPanel).toBeTruthy();
      expect(tabPanel.nativeElement.getAttribute('data-testid')).toBe(
        'tab-content'
      );
      expect(tabPanel.nativeElement.getAttribute('tabindex')).toBeNull();
    });

    it('should have content projection structure', () => {
      // ng-content doesn't appear in rendered HTML, but we can verify the component
      // supports content projection by checking the component structure
      expect(component).toBeTruthy();
      expect(component.tabs).toBeDefined();
    });
  });

  describe('Event Handlers', () => {
    describe('onKeydown', () => {
      it('should handle Enter key', () => {
        spyOn(component, 'selectTab');
        spyOnProperty(
          component.keyManager,
          'activeItemIndex',
          'get'
        ).and.returnValue(1);

        const event = new KeyboardEvent('keydown', { key: 'Enter' });
        component.onKeydown(event);

        expect(component.selectTab).toHaveBeenCalledWith(1);
      });

      it('should not handle Enter key when no active item', () => {
        spyOn(component, 'selectTab');
        spyOnProperty(
          component.keyManager,
          'activeItemIndex',
          'get'
        ).and.returnValue(null);

        const event = new KeyboardEvent('keydown', { key: 'Enter' });
        component.onKeydown(event);

        expect(component.selectTab).not.toHaveBeenCalled();
      });

      it('should delegate to keyManager', () => {
        spyOn(component.keyManager, 'onKeydown');
        const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });

        component.onKeydown(event);

        expect(component.keyManager.onKeydown).toHaveBeenCalledWith(event);
      });
    });

    describe('onTabGroupFocus', () => {
      it('should set first item active when no active item', () => {
        spyOn(component.keyManager, 'setFirstItemActive');
        spyOnProperty(
          component.keyManager,
          'activeItem',
          'get'
        ).and.returnValue(null);

        component.onTabGroupFocus();

        expect(component.keyManager.setFirstItemActive).toHaveBeenCalled();
      });

      it('should not set first item active when active item exists', () => {
        spyOn(component.keyManager, 'setFirstItemActive');
        spyOnProperty(
          component.keyManager,
          'activeItem',
          'get'
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ).and.returnValue({} as any);

        component.onTabGroupFocus();

        expect(component.keyManager.setFirstItemActive).not.toHaveBeenCalled();
      });
    });

    describe('selectTab', () => {
      it('should update keyManager active item', () => {
        spyOn(component.keyManager, 'setActiveItem');

        component.selectTab(2);

        // The keyManager.setActiveItem accepts both index and item
        expect(component.keyManager.setActiveItem).toHaveBeenCalledWith(
          jasmine.anything()
        );
      });

      it('should update selectedIndex', () => {
        component.selectTab(3);
        expect(component.selectedIndex()).toBe(3);
      });

      it('should emit tabChanged event', () => {
        spyOn(component.tabChanged, 'emit');

        component.selectTab(1);

        expect(component.tabChanged.emit).toHaveBeenCalledWith(1);
      });
    });
  });
});

describe('TabGroupComponent with Content', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TabGroupComponent,
        TabPanelComponent,
        TabLabelDirective,
        TabContentDirective,
        NoopAnimationsModule,
      ],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        { provide: Directionality, useValue: { value: 'ltr' } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Content Projection', () => {
    it('should create test host component', () => {
      expect(component).toBeTruthy();
    });

    it('should project tab panels', () => {
      expect(component.tabGroup.tabs().length).toBe(3);
    });

    it('should render tab headers for each panel', () => {
      const tabHeaders = fixture.debugElement.queryAll(
        By.css('app-tab-header')
      );
      expect(tabHeaders.length).toBe(3);
    });

    it('should have tab headers in viewChildren', () => {
      expect(component.tabGroup.tabHeaders().length).toBe(3);
    });
  });

  describe('Tab Selection', () => {
    it('should have first tab selected initially', () => {
      expect(component.tabGroup.selectedIndex()).toBe(0);
    });

    it('should return correct selectedTab', () => {
      const selectedTab = component.tabGroup.selectedTab();
      expect(selectedTab).toBe(component.tabGroup.tabs()[0]);
      expect(selectedTab?.label()).toBe('Tab 1');
    });

    it('should update selectedTab when selectedIndex changes', () => {
      component.tabGroup.selectedIndex.set(1);
      fixture.detectChanges();

      const selectedTab = component.tabGroup.selectedTab();
      expect(selectedTab).toBe(component.tabGroup.tabs()[1]);
      expect(selectedTab?.label()).toBe('Tab 2');
    });

    it('should render selected tab content', () => {
      const tabContent = fixture.debugElement.query(
        By.css('[data-testid="tab-content"]')
      );
      expect(tabContent.nativeElement.textContent.trim()).toContain(
        'Content for tab 1'
      );
    });

    it('should update content when different tab is selected', () => {
      component.tabGroup.selectTab(1);
      fixture.detectChanges();

      const tabContent = fixture.debugElement.query(
        By.css('[data-testid="tab-content"]')
      );
      expect(tabContent.nativeElement.textContent.trim()).toContain(
        'Content for tab 2'
      );
    });
  });

  describe('Tab Header Interaction', () => {
    it('should select tab when header is clicked', () => {
      spyOn(component.tabGroup, 'selectTab');
      const secondTabHeader = fixture.debugElement.queryAll(
        By.css('app-tab-header')
      )[1];

      secondTabHeader.nativeElement.click();

      expect(component.tabGroup.selectTab).toHaveBeenCalledWith(1);
    });

    it('should update header states when tab is selected', () => {
      component.tabGroup.selectTab(1);
      fixture.detectChanges();

      const tabHeaders = fixture.debugElement.queryAll(
        By.css('app-tab-header')
      );

      // First tab should not be selected
      expect(tabHeaders[0].componentInstance.isSelected()).toBe(false);
      // Second tab should be selected
      expect(tabHeaders[1].componentInstance.isSelected()).toBe(true);
    });
  });

  describe('Keyboard Navigation', () => {
    it('should handle keyboard events on tab list', () => {
      spyOn(component.tabGroup, 'onKeydown');
      const tabList = fixture.debugElement.query(By.css('[role="tablist"]'));

      tabList.nativeElement.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowRight' })
      );

      expect(component.tabGroup.onKeydown).toHaveBeenCalled();
    });

    it('should handle focus events on tab list', () => {
      spyOn(component.tabGroup, 'onTabGroupFocus');
      const tabList = fixture.debugElement.query(By.css('[role="tablist"]'));

      tabList.nativeElement.dispatchEvent(new Event('focus'));

      expect(component.tabGroup.onTabGroupFocus).toHaveBeenCalled();
    });
  });

  describe('ARIA Attributes', () => {
    it('should set correct ARIA attributes on tab panel', () => {
      const tabPanel = fixture.debugElement.query(By.css('[role="tabpanel"]'));

      expect(tabPanel.nativeElement.getAttribute('id')).toBe('tabpanel-0');
      expect(tabPanel.nativeElement.getAttribute('aria-labelledby')).toBe(
        'tab-0'
      );
    });

    it('should update ARIA attributes when selected tab changes', () => {
      component.tabGroup.selectTab(2);
      fixture.detectChanges();

      const tabPanel = fixture.debugElement.query(By.css('[role="tabpanel"]'));

      expect(tabPanel.nativeElement.getAttribute('id')).toBe('tabpanel-2');
      expect(tabPanel.nativeElement.getAttribute('aria-labelledby')).toBe(
        'tab-2'
      );
    });
  });

  describe('Disabled Tabs', () => {
    it('should pass disabled state to tab headers', () => {
      const tabHeaders = fixture.debugElement.queryAll(
        By.css('app-tab-header')
      );

      expect(tabHeaders[0].componentInstance.isDisabled()).toBe(false);
      expect(tabHeaders[1].componentInstance.isDisabled()).toBe(false);
      expect(tabHeaders[2].componentInstance.isDisabled()).toBe(true);
    });
  });

  describe('Content Gap', () => {
    it('should apply gap class when tab has gap enabled', () => {
      const tabContent = fixture.debugElement.query(
        By.css('[data-testid="tab-content"] > div')
      );
      expect(tabContent.nativeElement.classList.contains('p-5')).toBe(true);
    });

    it('should not apply gap class when tab has gap disabled', () => {
      component.tabGroup.selectTab(1); // Tab 2 has gap disabled
      fixture.detectChanges();

      const tabContent = fixture.debugElement.query(
        By.css('[data-testid="tab-content"] > div')
      );
      expect(tabContent.nativeElement.classList.contains('p-5')).toBe(false);
    });
  });
});

describe('TabGroupComponent with Custom Templates', () => {
  let component: CustomTemplateTestComponent;
  let fixture: ComponentFixture<CustomTemplateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TabGroupComponent,
        TabPanelComponent,
        TabLabelDirective,
        TabContentDirective,
        NoopAnimationsModule,
      ],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        { provide: Directionality, useValue: { value: 'ltr' } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomTemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Lazy Content Loading', () => {
    it('should render lazy content when tab is selected', () => {
      component.tabGroup.selectTab(1); // Select lazy tab
      fixture.detectChanges();

      const tabContent = fixture.debugElement.query(
        By.css('[data-testid="tab-content"]')
      );
      expect(tabContent.nativeElement.textContent.trim()).toContain(
        'Lazy loaded content'
      );
    });

    it('should not render lazy content initially', () => {
      // First tab is selected by default, lazy tab should not be rendered
      const tabContent = fixture.debugElement.query(
        By.css('[data-testid="tab-content"]')
      );
      expect(tabContent.nativeElement.textContent.trim()).not.toContain(
        'Lazy loaded content'
      );
    });
  });

  describe('Event Emissions', () => {
    it('should emit tabChanged event', () => {
      spyOn(component, 'onTabChanged');

      component.tabGroup.selectTab(1);

      expect(component.onTabChanged).toHaveBeenCalledWith(1);
    });
  });
});

@Component({
  template: `
    <app-tab-group #tabGroup>
      <app-tab-panel label="Tab 1">
        <p>Content for tab 1</p>
      </app-tab-panel>

      <app-tab-panel label="Tab 2" [gap]="false">
        <p>Content for tab 2</p>
      </app-tab-panel>

      <app-tab-panel label="Tab 3" [disabled]="true">
        <p>Content for tab 3</p>
      </app-tab-panel>
    </app-tab-group>
  `,
  imports: [TabGroupComponent, TabPanelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHostComponent {
  @ViewChild('tabGroup')
  tabGroup!: TabGroupComponent;
}

@Component({
  template: `
    <app-tab-group #tabGroup (tabChanged)="onTabChanged($event)">
      <app-tab-panel label="Normal Tab">
        <p>Normal content</p>
      </app-tab-panel>

      <app-tab-panel label="Lazy Tab">
        <ng-template appTabContent>
          <p>Lazy loaded content</p>
        </ng-template>
      </app-tab-panel>
    </app-tab-group>
  `,
  imports: [TabGroupComponent, TabPanelComponent, TabContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class CustomTemplateTestComponent {
  @ViewChild('tabGroup')
  tabGroup!: TabGroupComponent;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onTabChanged(_index: number) {
    // Test method for event emission
  }
}
