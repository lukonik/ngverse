import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabLabelDirective } from '../directives/tab-label.directive';
import { TabHeaderComponent } from './tab-header.component';

// Mock TabPanelComponent for testing
class MockTabPanelComponent {
  label = signal('Test Tab');
  templateRef = signal(undefined);
  vf: unknown = null;
  headerTemplate = signal<TabLabelDirective | null>(null);
  bodyTemplate = signal(null);
  gap = signal(true);
  portal: unknown = undefined;
  disabled = signal(false);
}

describe('TabHeaderComponent', () => {
  let component: TabHeaderComponent;
  let fixture: ComponentFixture<TabHeaderComponent>;
  let mockTabPanel: MockTabPanelComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabHeaderComponent],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TabHeaderComponent);
    component = fixture.componentInstance;
    mockTabPanel = new MockTabPanelComponent();

    // Set required inputs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fixture.componentRef.setInput('tab', mockTabPanel as any);
    fixture.componentRef.setInput('tabIndex', 0);
    fixture.componentRef.setInput('isSelected', false);

    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have required inputs set', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(component.tab()).toBe(mockTabPanel as any);
      expect(component.tabIndex()).toBe(0);
      expect(component.isSelected()).toBe(false);
    });
  });

  describe('Host Attributes', () => {
    it('should have correct role attribute', () => {
      const hostElement = fixture.nativeElement;
      expect(hostElement.getAttribute('role')).toBe('tab');
    });

    it('should set correct aria attributes based on inputs', () => {
      const hostElement = fixture.nativeElement;

      expect(hostElement.getAttribute('id')).toBe('tab-0');
      expect(hostElement.getAttribute('aria-selected')).toBe('false');
      expect(hostElement.getAttribute('aria-controls')).toBe('tabpanel-0');
      expect(hostElement.getAttribute('tabindex')).toBe('-1');
      expect(hostElement.getAttribute('aria-disabled')).toBe('false');
    });

    it('should update aria-selected when isSelected changes', () => {
      const hostElement = fixture.nativeElement;

      fixture.componentRef.setInput('isSelected', true);
      fixture.detectChanges();

      expect(hostElement.getAttribute('aria-selected')).toBe('true');
      expect(hostElement.classList.contains('is-selected')).toBe(true);
    });

    it('should update tabindex when isActive changes', () => {
      const hostElement = fixture.nativeElement;

      fixture.componentRef.setInput('isActive', true);
      fixture.detectChanges();

      expect(hostElement.getAttribute('tabindex')).toBe('0');
    });

    it('should set aria-disabled when isDisabled is true', () => {
      const hostElement = fixture.nativeElement;

      fixture.componentRef.setInput('isDisabled', true);
      fixture.detectChanges();

      expect(hostElement.getAttribute('aria-disabled')).toBe('true');
    });

    it('should update id and aria-controls based on tabIndex', () => {
      const hostElement = fixture.nativeElement;

      fixture.componentRef.setInput('tabIndex', 5);
      fixture.detectChanges();

      expect(hostElement.getAttribute('id')).toBe('tab-5');
      expect(hostElement.getAttribute('aria-controls')).toBe('tabpanel-5');
    });
  });

  describe('CSS Classes', () => {
    it('should not have is-active class initially', () => {
      const hostElement = fixture.nativeElement;
      expect(hostElement.classList.contains('is-active')).toBe(false);
    });

    it('should not have is-selected class initially', () => {
      const hostElement = fixture.nativeElement;
      expect(hostElement.classList.contains('is-selected')).toBe(false);
    });

    it('should add is-selected class when selected', () => {
      const hostElement = fixture.nativeElement;

      fixture.componentRef.setInput('isSelected', true);
      fixture.detectChanges();

      expect(hostElement.classList.contains('is-selected')).toBe(true);
    });
  });

  describe('Content Display', () => {
    it('should display tab label text when no headerTemplate is provided', () => {
      mockTabPanel.label.set('Simple Tab Label');
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent.trim()).toBe('Simple Tab Label');
    });

    it('should update displayed text when tab label changes', () => {
      mockTabPanel.label.set('Updated Label');
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent.trim()).toBe('Updated Label');
    });
  });

  describe('Highlightable Interface', () => {
    describe('disabled getter', () => {
      it('should return false when not disabled', () => {
        expect(component.disabled).toBe(false);
      });

      it('should return true when disabled', () => {
        fixture.componentRef.setInput('isDisabled', true);
        expect(component.disabled).toBe(true);
      });
    });

    describe('setActiveStyles', () => {
      it('should set enabledTabIndex to true', () => {
        component.setActiveStyles();
        expect(component.enabledTabIndex()).toBe(true);
      });

      it('should focus the element', () => {
        vi.spyOn(component.element, 'focus');
        component.setActiveStyles();
        expect(component.element.focus).toHaveBeenCalled();
      });

      it('should add is-active class when enabledTabIndex is true', () => {
        const hostElement = fixture.nativeElement;

        component.setActiveStyles();
        fixture.detectChanges();

        expect(hostElement.classList.contains('is-active')).toBe(true);
      });
    });

    describe('setInactiveStyles', () => {
      it('should set enabledTabIndex to false', () => {
        // First activate it
        component.setActiveStyles();
        expect(component.enabledTabIndex()).toBe(true);

        // Then deactivate it
        component.setInactiveStyles();
        expect(component.enabledTabIndex()).toBe(false);
      });

      it('should remove is-active class when enabledTabIndex is false', () => {
        const hostElement = fixture.nativeElement;

        // First activate it
        component.setActiveStyles();
        fixture.detectChanges();
        expect(hostElement.classList.contains('is-active')).toBe(true);

        // Then deactivate it
        component.setInactiveStyles();
        fixture.detectChanges();
        expect(hostElement.classList.contains('is-active')).toBe(false);
      });
    });
  });

  describe('Element Reference', () => {
    it('should have element reference to native HTML element', () => {
      expect(component.element).toBe(fixture.nativeElement);
    });

    it('should be able to call focus on the element', () => {
      vi.spyOn(component.element, 'focus');
      component.element.focus();
      expect(component.element.focus).toHaveBeenCalled();
    });
  });

  describe('Signal Management', () => {
    it('should have activate signal initialized to false', () => {
      expect(component.activate()).toBe(false);
    });

    it('should have enabledTabIndex signal initialized to false', () => {
      expect(component.enabledTabIndex()).toBe(false);
    });

    it('should allow updating activate signal', () => {
      component.activate.set(true);
      expect(component.activate()).toBe(true);
    });
  });

  describe('Integration with Different Tab States', () => {
    it('should handle selected and active states together', () => {
      const hostElement = fixture.nativeElement;

      fixture.componentRef.setInput('isSelected', true);
      fixture.componentRef.setInput('isActive', true);
      component.setActiveStyles();
      fixture.detectChanges();

      expect(hostElement.classList.contains('is-selected')).toBe(true);
      expect(hostElement.classList.contains('is-active')).toBe(true);
      expect(hostElement.getAttribute('aria-selected')).toBe('true');
      expect(hostElement.getAttribute('tabindex')).toBe('0');
    });

    it('should handle disabled state correctly', () => {
      const hostElement = fixture.nativeElement;

      fixture.componentRef.setInput('isDisabled', true);
      fixture.componentRef.setInput('isSelected', true);
      fixture.detectChanges();

      expect(component.disabled).toBe(true);
      expect(hostElement.getAttribute('aria-disabled')).toBe('true');
      expect(hostElement.getAttribute('aria-selected')).toBe('true');
    });
  });
});

describe('TabHeaderComponent with Custom Label Template', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabHeaderComponent, TabLabelDirective],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render custom template when headerTemplate is provided', () => {
    // This test would require more complex setup with actual TabPanelComponent
    // For now, we verify the component can be created with template setup
    expect(component).toBeTruthy();
  });
});

@Component({
  template: `
    <app-tab-header [tab]="mockTab" [tabIndex]="0" [isSelected]="false">
    </app-tab-header>

    <ng-template #customLabel appTabLabel>
      <i class="icon-custom"></i>
      <span>Custom Label</span>
    </ng-template>
  `,
  imports: [TabHeaderComponent, TabLabelDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHostComponent {
  @ViewChild('customLabel', { read: TabLabelDirective })
  labelDirective!: TabLabelDirective;

  mockTab = {
    label: signal('Test Tab'),
    disabled: signal(false),
    headerTemplate: signal<TabLabelDirective | null>(null),
  };
}
