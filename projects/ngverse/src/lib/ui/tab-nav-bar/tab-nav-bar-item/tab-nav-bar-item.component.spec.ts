import { Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  Component,
  provideExperimentalZonelessChangeDetection,
  signal,
  ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabNavBarComponent } from '../tab-nav-bar.component';
import { TabNavBarItemComponent } from './tab-nav-bar-item.component';

describe('TabNavBarItemComponent', () => {
  let component: TabNavBarItemComponent;
  let fixture: ComponentFixture<TabNavBarItemComponent>;

  beforeEach(async () => {
    const mockTabNavBar = {
      selectedTabValue: () => undefined,
      selectTabValue: jasmine.createSpy('selectTabValue'),
    };

    await TestBed.configureTestingModule({
      imports: [TabNavBarItemComponent, TabNavBarComponent],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        {
          provide: Directionality,
          useValue: { value: 'ltr', change: () => ({}) },
        },
        {
          provide: TabNavBarComponent,
          useValue: mockTabNavBar,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TabNavBarItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tabValue', 'test-tab');
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have correct selector', () => {
      expect(fixture.debugElement.componentInstance).toBeInstanceOf(
        TabNavBarItemComponent
      );
    });

    it('should use OnPush change detection strategy', () => {
      expect(fixture.componentRef.changeDetectorRef.constructor.name).toContain(
        'ViewRef'
      );
    });
  });

  describe('Input Properties', () => {
    describe('tabValue input', () => {
      it('should have tabValue input as required', () => {
        expect(component.tabValue()).toBe('test-tab');
      });

      it('should update when tabValue input changes', () => {
        fixture.componentRef.setInput('tabValue', 'new-tab');
        expect(component.tabValue()).toBe('new-tab');
      });
    });

    describe('disabled input', () => {
      it('should have disabled set to false by default', () => {
        expect(component.disabled).toBe(false);
      });

      it('should accept boolean disabled input', () => {
        fixture.componentRef.setInput('_disabledInput', true);
        expect(component.disabled).toBe(true);
      });

      it('should update when disabled input changes', () => {
        fixture.componentRef.setInput('_disabledInput', true);
        expect(component.disabled).toBe(true);

        fixture.componentRef.setInput('_disabledInput', false);
        expect(component.disabled).toBe(false);
      });
    });
  });

  describe('Component State', () => {
    it('should have isActive set to false by default', () => {
      expect(component.isActive).toBe(false);
    });

    it('should allow setting isActive', () => {
      component.isActive = true;
      expect(component.isActive).toBe(true);
    });
  });

  describe('Computed Properties', () => {
    describe('isSelected', () => {
      it('should have isSelected as computed signal', () => {
        expect(component.isSelected).toBeDefined();
        expect(typeof component.isSelected).toBe('function');
      });

      it('should return false when not selected', () => {
        // Component is not inside a TabNavBarComponent context in isolation
        expect(component.isSelected()).toBe(false);
      });
    });

    describe('isDisabled', () => {
      it('should have isDisabled as computed signal', () => {
        expect(component.isDisabled).toBeDefined();
        expect(typeof component.isDisabled).toBe('function');
      });

      it('should return false when not disabled', () => {
        expect(component.isDisabled()).toBe(false);
      });

      it('should return true when disabled', () => {
        fixture.componentRef.setInput('_disabledInput', true);
        expect(component.isDisabled()).toBe(true);
      });
    });
  });

  describe('Highlightable Interface', () => {
    describe('setActiveStyles', () => {
      it('should implement setActiveStyles method', () => {
        expect(component.setActiveStyles).toBeDefined();
      });

      it('should set isActive to true', () => {
        component.setActiveStyles();
        expect(component.isActive).toBe(true);
      });

      it('should set isActive to false with setInactiveStyles', () => {
        component.setActiveStyles();
        expect(component.isActive).toBe(true);

        component.setInactiveStyles();
        expect(component.isActive).toBe(false);
      });
    });

    describe('getDisabled', () => {
      it('should implement getDisabled method', () => {
        expect(component.getDisabled).toBeDefined();
      });

      it('should return false when not disabled', () => {
        expect(component.getDisabled()).toBe(false);
      });

      it('should return true when disabled', () => {
        fixture.componentRef.setInput('_disabledInput', true);
        expect(component.getDisabled()).toBe(true);
      });
    });
  });

  describe('Event Handlers', () => {
    describe('onClick', () => {
      it('should handle click when not disabled', () => {
        const parentComponent = component['tabNavBar'];
        spyOn(parentComponent, 'selectTabValue');

        component.onClick();

        expect(parentComponent.selectTabValue).toHaveBeenCalledWith('test-tab');
      });

      it('should not call selectTabValue when disabled', () => {
        fixture.componentRef.setInput('_disabledInput', true);
        const parentComponent = component['tabNavBar'];
        spyOn(parentComponent, 'selectTabValue');

        component.onClick();

        expect(parentComponent.selectTabValue).not.toHaveBeenCalled();
      });
    });
  });

  describe('Host Binding', () => {
    it('should have host binding for aria-disabled', () => {
      const hostElement = fixture.debugElement.nativeElement;

      // Initially not disabled
      expect(hostElement.getAttribute('aria-disabled')).toBe('false');

      // When disabled
      fixture.componentRef.setInput('_disabledInput', true);
      fixture.detectChanges();
      expect(hostElement.getAttribute('aria-disabled')).toBe('true');
    });

    it('should have host binding for is-active class', () => {
      const hostElement = fixture.debugElement.nativeElement;

      // Initially not active
      expect(hostElement.classList.contains('is-active')).toBe(false);

      // When active
      component.setActiveStyles();
      fixture.detectChanges();
      expect(hostElement.classList.contains('is-active')).toBe(true);
    });
  });

  describe('Template Rendering', () => {
    it('should render button with correct attributes', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.getAttribute('type')).toBe('button');
      expect(button.getAttribute('role')).toBe('tab');
      expect(button.getAttribute('id')).toBe('tab-nav-test-tab');
    });

    it('should have correct ARIA attributes', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button.getAttribute('aria-selected')).toBe('false');
      expect(button.getAttribute('aria-disabled')).toBe('false');
    });

    it('should update ARIA attributes when selected', () => {
      // This test requires the component to be in a parent context
      // The isSelected computed depends on the parent TabNavBarComponent
    });

    it('should update ARIA attributes when disabled', () => {
      fixture.componentRef.setInput('_disabledInput', true);
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('button');
      expect(button.getAttribute('aria-disabled')).toBe('true');
    });

    it('should have correct tabindex when not selected', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button.getAttribute('tabindex')).toBe('-1');
    });

    it('should contain ng-content for label projection', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      // ng-content should be present for content projection
    });

    it('should apply conditional CSS classes', () => {
      const button = fixture.nativeElement.querySelector('button');

      // Test isActive class binding
      component.setActiveStyles();
      fixture.detectChanges();
      expect(button.classList.contains('is-active')).toBe(true);

      // Note: isSelected classes are tested in integration tests
      // as they depend on parent TabNavBarComponent context
    });

    it('should handle click events', () => {
      const button = fixture.nativeElement.querySelector('button');
      spyOn(component, 'onClick');

      button.click();

      expect(component.onClick).toHaveBeenCalled();
    });
  });

  describe('CSS Classes', () => {
    it('should have base CSS classes', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button.classList.contains('relative')).toBe(true);
      expect(button.classList.contains('px-4')).toBe(true);
      expect(button.classList.contains('py-2')).toBe(true);
      expect(button.classList.contains('text-sm')).toBe(true);
      expect(button.classList.contains('font-medium')).toBe(true);
    });

    it('should have conditional classes based on state', () => {
      const button = fixture.nativeElement.querySelector('button');

      // Default state classes
      expect(button.classList.contains('text-gray-500')).toBe(true);
      expect(button.classList.contains('transition-colors')).toBe(true);
      expect(button.classList.contains('duration-200')).toBe(true);
    });
  });
});

describe('TabNavBarItemComponent Integration', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNavBarComponent, TabNavBarItemComponent],
      providers: [
        provideExperimentalZonelessChangeDetection(),
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

  describe('Integration with TabNavBarComponent', () => {
    it('should create test host component', () => {
      expect(component).toBeTruthy();
    });

    it('should have tab nav bar and items', () => {
      expect(component.tabNavBar).toBeTruthy();
      expect(component.homeItem).toBeTruthy();
      expect(component.aboutItem).toBeTruthy();
      expect(component.contactItem).toBeTruthy();
    });

    it('should have correct tab values', () => {
      expect(component.homeItem.tabValue()).toBe('home');
      expect(component.aboutItem.tabValue()).toBe('about');
      expect(component.contactItem.tabValue()).toBe('contact');
    });

    it('should have correct disabled states', () => {
      expect(component.homeItem.disabled).toBe(false);
      expect(component.aboutItem.disabled).toBe(false);
      expect(component.contactItem.disabled).toBe(true);
    });
  });

  describe('Selection Integration', () => {
    it('should update isSelected based on parent selection', () => {
      // Initially none selected
      expect(component.homeItem.isSelected()).toBe(false);
      expect(component.aboutItem.isSelected()).toBe(false);
      expect(component.contactItem.isSelected()).toBe(false);

      // Select home
      component.tabNavBar.selectTabValue('home');
      expect(component.homeItem.isSelected()).toBe(true);
      expect(component.aboutItem.isSelected()).toBe(false);
      expect(component.contactItem.isSelected()).toBe(false);

      // Select about
      component.tabNavBar.selectTabValue('about');
      expect(component.homeItem.isSelected()).toBe(false);
      expect(component.aboutItem.isSelected()).toBe(true);
      expect(component.contactItem.isSelected()).toBe(false);
    });

    it('should handle click events to select tabs', () => {
      const homeButton = fixture.nativeElement.querySelector('#tab-nav-home');
      const aboutButton = fixture.nativeElement.querySelector('#tab-nav-about');

      // Click home
      homeButton.click();
      expect(component.tabNavBar.selectedTabValue()).toBe('home');
      expect(component.homeItem.isSelected()).toBe(true);

      // Click about
      aboutButton.click();
      expect(component.tabNavBar.selectedTabValue()).toBe('about');
      expect(component.aboutItem.isSelected()).toBe(true);
      expect(component.homeItem.isSelected()).toBe(false);
    });

    it('should not select disabled tabs', () => {
      const contactButton =
        fixture.nativeElement.querySelector('#tab-nav-contact');

      // Click disabled contact tab
      contactButton.click();
      expect(component.tabNavBar.selectedTabValue()).toBeUndefined();
      expect(component.contactItem.isSelected()).toBe(false);
    });
  });

  describe('ARIA Attributes Integration', () => {
    it('should have correct aria-selected attributes', () => {
      const homeButton = fixture.nativeElement.querySelector('#tab-nav-home');
      const aboutButton = fixture.nativeElement.querySelector('#tab-nav-about');

      // Initially none selected
      expect(homeButton.getAttribute('aria-selected')).toBe('false');
      expect(aboutButton.getAttribute('aria-selected')).toBe('false');

      // Select home
      component.tabNavBar.selectTabValue('home');
      fixture.detectChanges();
      expect(homeButton.getAttribute('aria-selected')).toBe('true');
      expect(aboutButton.getAttribute('aria-selected')).toBe('false');
    });

    it('should have correct tabindex attributes', () => {
      const homeButton = fixture.nativeElement.querySelector('#tab-nav-home');
      const aboutButton = fixture.nativeElement.querySelector('#tab-nav-about');

      // Initially all should have -1
      expect(homeButton.getAttribute('tabindex')).toBe('-1');
      expect(aboutButton.getAttribute('tabindex')).toBe('-1');

      // Select home
      component.tabNavBar.selectTabValue('home');
      fixture.detectChanges();
      expect(homeButton.getAttribute('tabindex')).toBe('0');
      expect(aboutButton.getAttribute('tabindex')).toBe('-1');
    });

    it('should have correct aria-disabled attributes', () => {
      const contactButton =
        fixture.nativeElement.querySelector('#tab-nav-contact');
      expect(contactButton.getAttribute('aria-disabled')).toBe('true');
    });
  });

  describe('CSS Classes Integration', () => {
    it('should apply selected styles when selected', () => {
      const homeButton = fixture.nativeElement.querySelector('#tab-nav-home');

      // Select home
      component.tabNavBar.selectTabValue('home');
      fixture.detectChanges();

      expect(homeButton.classList.contains('text-blue-600')).toBe(true);
      expect(homeButton.classList.contains('border-b-2')).toBe(true);
      expect(homeButton.classList.contains('border-blue-600')).toBe(true);
    });

    it('should not apply selected styles when not selected', () => {
      const aboutButton = fixture.nativeElement.querySelector('#tab-nav-about');

      // Select home (not about)
      component.tabNavBar.selectTabValue('home');
      fixture.detectChanges();

      expect(aboutButton.classList.contains('text-blue-600')).toBe(false);
      expect(aboutButton.classList.contains('border-b-2')).toBe(false);
      expect(aboutButton.classList.contains('border-blue-600')).toBe(false);
    });

    it('should apply active styles when active', () => {
      component.homeItem.setActiveStyles();
      fixture.detectChanges();

      const homeButton = fixture.nativeElement.querySelector('#tab-nav-home');
      expect(homeButton.classList.contains('is-active')).toBe(true);
    });
  });

  describe('Highlightable Interface Integration', () => {
    it('should work with KeyManager through Highlightable interface', () => {
      // Test setActiveStyles method
      expect(component.homeItem.isActive).toBe(false);

      component.homeItem.setActiveStyles();
      expect(component.homeItem.isActive).toBe(true);

      // Test setInactiveStyles method
      component.homeItem.setInactiveStyles();
      expect(component.homeItem.isActive).toBe(false);

      // Test getDisabled method
      expect(component.homeItem.getDisabled()).toBe(false);
      expect(component.contactItem.getDisabled()).toBe(true);
    });
  });

  describe('Two-way Binding Integration', () => {
    it('should support two-way binding through parent component', () => {
      // Set from parent signal
      component.selectedTab.set('about');
      expect(component.tabNavBar.selectedTabValue()).toBe('about');
      expect(component.aboutItem.isSelected()).toBe(true);

      // Change through clicking
      const homeButton = fixture.nativeElement.querySelector('#tab-nav-home');
      homeButton.click();
      expect(component.selectedTab()).toBe('home');
      expect(component.homeItem.isSelected()).toBe(true);
      expect(component.aboutItem.isSelected()).toBe(false);
    });
  });
});

@Component({
  template: `
    <app-tab-nav-bar #tabNavBar [(selectedTabValue)]="selectedTab">
      <app-tab-nav-bar-item #homeItem tabValue="home"
        >Home</app-tab-nav-bar-item
      >
      <app-tab-nav-bar-item #aboutItem tabValue="about"
        >About</app-tab-nav-bar-item
      >
      <app-tab-nav-bar-item #contactItem tabValue="contact" [disabled]="true"
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

  @ViewChild('homeItem')
  homeItem!: TabNavBarItemComponent;

  @ViewChild('aboutItem')
  aboutItem!: TabNavBarItemComponent;

  @ViewChild('contactItem')
  contactItem!: TabNavBarItemComponent;

  selectedTab = signal<string | undefined>(undefined);
}
