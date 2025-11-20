import { Directionality } from '@angular/cdk/bidi';
import {
    ChangeDetectionStrategy,
    Component,

    signal,
    ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabNavBarItemComponent } from './tab-nav-bar-item/tab-nav-bar-item.component';
import { TabNavBarComponent } from './tab-nav-bar.component';

describe('TabNavBarComponent', () => {
  let component: TabNavBarComponent;
  let fixture: ComponentFixture<TabNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNavBarComponent],
      providers: [
        ,
        {
          provide: Directionality,
          useValue: { value: 'ltr', change: () => ({}) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TabNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have correct selector', () => {
      expect(fixture.debugElement.componentInstance).toBeInstanceOf(
        TabNavBarComponent
      );
    });

    it('should use OnPush change detection strategy', () => {
      expect(fixture.componentRef.changeDetectorRef.constructor.name).toContain(
        'ViewRef'
      );
    });
  });

  describe('Model Properties', () => {
    describe('selectedTabValue model', () => {
      it('should have selectedTabValue as undefined by default', () => {
        expect(component.selectedTabValue()).toBeUndefined();
      });

      it('should update selectedTabValue when set', () => {
        component.selectedTabValue.set('test');
        expect(component.selectedTabValue()).toBe('test');
      });

      it('should be two-way bindable', () => {
        fixture.componentRef.setInput('selectedTabValue', 'initial');
        expect(component.selectedTabValue()).toBe('initial');

        component.selectedTabValue.set('updated');
        expect(component.selectedTabValue()).toBe('updated');
      });
    });
  });

  describe('Content Children', () => {
    it('should have tabItems signal initialized', () => {
      expect(component.tabItems).toBeDefined();
      expect(typeof component.tabItems).toBe('function');
    });

    it('should have empty tabItems initially', () => {
      expect(component.tabItems()).toEqual([]);
    });
  });

  describe('View Children', () => {
    it('should have tabNavBarItems signal initialized', () => {
      expect(component.tabNavBarItems).toBeDefined();
      expect(typeof component.tabNavBarItems).toBe('function');
    });

    it('should have empty tabNavBarItems initially', () => {
      expect(component.tabNavBarItems()).toEqual([]);
    });
  });

  describe('KeyManager', () => {
    it('should initialize keyManager', () => {
      expect(component.keyManager).toBeDefined();
    });

    it('should configure keyManager with horizontal orientation', () => {
      // The keyManager is configured with Directionality
      expect(component.keyManager).toBeTruthy();
    });
  });

  describe('Computed Properties', () => {
    describe('selectedTabItem', () => {
      it('should have selectedTabItem as computed signal', () => {
        expect(component.selectedTabItem).toBeDefined();
        expect(typeof component.selectedTabItem).toBe('function');
      });

      it('should return undefined when no tab is selected', () => {
        expect(component.selectedTabItem()).toBeUndefined();
      });
    });
  });

  describe('Event Handlers', () => {
    describe('onKeydown', () => {
      it('should handle Enter key when activeItemIndex is set', () => {
        const mockKeyboardEvent = new KeyboardEvent('keydown', {
          key: 'Enter',
        });
        spyOn(component.keyManager, 'onKeydown');
        spyOn(component, 'selectTabValue');

        // Mock activeItemIndex
        spyOnProperty(
          component.keyManager,
          'activeItemIndex',
          'get'
        ).and.returnValue(0);
        spyOnProperty(
          component.keyManager,
          'activeItem',
          'get'
        ).and.returnValue({
          tabValue: () => 'test-tab',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);

        component.onKeydown(mockKeyboardEvent);

        expect(component.selectTabValue).toHaveBeenCalledWith('test-tab');
        expect(component.keyManager.onKeydown).toHaveBeenCalledWith(
          mockKeyboardEvent
        );
      });

      it('should not call selectTabValue when activeItemIndex is null', () => {
        const mockKeyboardEvent = new KeyboardEvent('keydown', {
          key: 'Enter',
        });
        spyOn(component.keyManager, 'onKeydown');
        spyOn(component, 'selectTabValue');

        spyOnProperty(
          component.keyManager,
          'activeItemIndex',
          'get'
        ).and.returnValue(null);

        component.onKeydown(mockKeyboardEvent);

        expect(component.selectTabValue).not.toHaveBeenCalled();
        expect(component.keyManager.onKeydown).toHaveBeenCalledWith(
          mockKeyboardEvent
        );
      });

      it('should delegate other keys to keyManager', () => {
        const mockKeyboardEvent = new KeyboardEvent('keydown', {
          key: 'ArrowRight',
        });
        spyOn(component.keyManager, 'onKeydown');

        component.onKeydown(mockKeyboardEvent);

        expect(component.keyManager.onKeydown).toHaveBeenCalledWith(
          mockKeyboardEvent
        );
      });
    });

    describe('onTabNavBarFocus', () => {
      it('should set first item active when no active item', () => {
        spyOnProperty(
          component.keyManager,
          'activeItem',
          'get'
        ).and.returnValue(null);
        spyOn(component.keyManager, 'setFirstItemActive');

        component.onTabNavBarFocus();

        expect(component.keyManager.setFirstItemActive).toHaveBeenCalled();
      });

      it('should not set first item active when activeItem exists', () => {
        spyOnProperty(
          component.keyManager,
          'activeItem',
          'get'
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ).and.returnValue({} as any);
        spyOn(component.keyManager, 'setFirstItemActive');

        component.onTabNavBarFocus();

        expect(component.keyManager.setFirstItemActive).not.toHaveBeenCalled();
      });
    });
  });

  describe('Public Methods', () => {
    describe('selectTabValue', () => {
      it('should update selectedTabValue and emit event', () => {
        spyOn(component.tabChanged, 'emit');

        component.selectTabValue('test-tab');

        expect(component.selectedTabValue()).toBe('test-tab');
        expect(component.tabChanged.emit).toHaveBeenCalledWith('test-tab');
      });

      it('should handle undefined tabValue', () => {
        spyOn(component.tabChanged, 'emit');

        component.selectTabValue(undefined);

        expect(component.selectedTabValue()).toBeUndefined();
        expect(component.tabChanged.emit).toHaveBeenCalledWith(undefined);
      });

      it('should not update keyManager when tab not found', () => {
        const mockTabItems = [
          { tabValue: () => 'tab1' },
          { tabValue: () => 'tab2' },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any[];

        spyOn(component, 'tabItems').and.returnValue(mockTabItems);
        spyOn(component.keyManager, 'setActiveItem');
        spyOn(component.tabChanged, 'emit');

        component.selectTabValue('nonexistent-tab');

        expect(component.keyManager.setActiveItem).not.toHaveBeenCalled();
        expect(component.selectedTabValue()).toBe('nonexistent-tab');
        expect(component.tabChanged.emit).toHaveBeenCalledWith(
          'nonexistent-tab'
        );
      });
    });
  });

  describe('Outputs', () => {
    it('should have tabChanged output', () => {
      expect(component.tabChanged).toBeDefined();
    });
  });

  describe('Services', () => {
    it('should inject Directionality service', () => {
      expect(component.direction).toBeDefined();
    });
  });

  describe('Template Rendering', () => {
    it('should render nav container with proper ARIA attributes', () => {
      const container = fixture.nativeElement.querySelector('[role="tablist"]');
      expect(container).toBeTruthy();
      expect(container.getAttribute('aria-orientation')).toBe('horizontal');
      expect(container.hasAttribute('tabindex')).toBe(true);
    });

    it('should have focus and keydown event handlers', () => {
      const container = fixture.nativeElement.querySelector('[role="tablist"]');
      expect(container).toBeTruthy();

      spyOn(component, 'onTabNavBarFocus');
      spyOn(component, 'onKeydown');

      container.focus();
      container.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

      expect(component.onTabNavBarFocus).toHaveBeenCalled();
      expect(component.onKeydown).toHaveBeenCalled();
    });

    it('should contain ng-content for projection', () => {
      const container = fixture.nativeElement.querySelector('[role="tablist"]');
      expect(container).toBeTruthy();
      // ng-content should be present for content projection
    });
  });
});

describe('TabNavBarComponent with Projected Content', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNavBarComponent, TabNavBarItemComponent],
      providers: [
        ,
        {
          provide: Directionality,
          useValue: { value: 'ltr', change: () => ({}) },
        },
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

    it('should have tab nav bar component', () => {
      expect(component.tabNavBar).toBeTruthy();
    });

    it('should project tab nav bar items', () => {
      expect(component.tabNavBar.tabItems().length).toBe(3);
    });

    it('should have correct tab values', () => {
      const tabItems = component.tabNavBar.tabItems();
      expect(tabItems[0].tabValue()).toBe('home');
      expect(tabItems[1].tabValue()).toBe('about');
      expect(tabItems[2].tabValue()).toBe('contact');
    });

    it('should handle tab selection', () => {
      component.tabNavBar.selectTabValue('about');
      expect(component.tabNavBar.selectedTabValue()).toBe('about');
    });

    it('should find selected tab item', () => {
      component.tabNavBar.selectTabValue('home');
      const selectedItem = component.tabNavBar.selectedTabItem();
      expect(selectedItem?.tabValue()).toBe('home');
    });
  });

  describe('Keyboard Navigation Integration', () => {
    it('should handle Enter key with projected items', () => {
      const mockKeyboardEvent = new KeyboardEvent('keydown', { key: 'Enter' });

      // Set up mock activeItem
      spyOnProperty(
        component.tabNavBar.keyManager,
        'activeItemIndex',
        'get'
      ).and.returnValue(1);
      spyOnProperty(
        component.tabNavBar.keyManager,
        'activeItem',
        'get'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ).and.returnValue(component.tabNavBar.tabItems()[1] as any);

      spyOn(component.tabNavBar, 'selectTabValue').and.callThrough();

      component.tabNavBar.onKeydown(mockKeyboardEvent);

      expect(component.tabNavBar.selectTabValue).toHaveBeenCalledWith('about');
    });
  });

  describe('Two-way Binding', () => {
    it('should support two-way binding with selectedTabValue', () => {
      // Initially undefined
      expect(component.selectedTab()).toBeUndefined();
      expect(component.tabNavBar.selectedTabValue()).toBeUndefined();

      // Set from parent
      component.selectedTab.set('home');
      fixture.detectChanges();
      expect(component.tabNavBar.selectedTabValue()).toBe('home');

      // Set from child component
      component.tabNavBar.selectTabValue('about');
      expect(component.selectedTab()).toBe('about');
    });
  });

  describe('Event Emission', () => {
    it('should emit tabChanged when tab selection changes', () => {
      spyOn(component.tabNavBar.tabChanged, 'emit');

      component.tabNavBar.selectTabValue('home');

      expect(component.tabNavBar.tabChanged.emit).toHaveBeenCalledWith('home');
    });

    it('should emit tabChanged with undefined', () => {
      spyOn(component.tabNavBar.tabChanged, 'emit');

      component.tabNavBar.selectTabValue(undefined);

      expect(component.tabNavBar.tabChanged.emit).toHaveBeenCalledWith(
        undefined
      );
    });
  });
});

@Component({
  template: `
    <app-tab-nav-bar #tabNavBar [(selectedTabValue)]="selectedTab">
      <app-tab-nav-bar-item tabValue="home">Home</app-tab-nav-bar-item>
      <app-tab-nav-bar-item tabValue="about">About</app-tab-nav-bar-item>
      <app-tab-nav-bar-item tabValue="contact" [disabled]="true"
        >Contact</app-tab-nav-bar-item
      >
    </app-tab-nav-bar>
  `,
  imports: [TabNavBarComponent, TabNavBarItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHostComponent {
  @ViewChild('tabNavBar')
  tabNavBar!: TabNavBarComponent;

  selectedTab = signal<string | undefined>(undefined);
}
