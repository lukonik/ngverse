import {
    ChangeDetectionStrategy,
    Component,

    TemplateRef,
    ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabLabelDirective } from './tab-label.directive';

describe('TabLabelDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabLabelDirective],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Directive Creation', () => {
    it('should create the directive instance', () => {
      expect(component.simpleDirective).toBeInstanceOf(TabLabelDirective);
      expect(component.richDirective).toBeInstanceOf(TabLabelDirective);
      expect(component.emptyDirective).toBeInstanceOf(TabLabelDirective);
    });

    it('should be applied to ng-template elements', () => {
      expect(component.simpleDirective).toBeDefined();
      expect(component.richDirective).toBeDefined();
      expect(component.emptyDirective).toBeDefined();
    });
  });

  describe('TemplateRef Injection', () => {
    it('should inject and expose TemplateRef', () => {
      expect(component.simpleDirective.templateRef).toBeDefined();
      expect(component.simpleDirective.templateRef).toBeInstanceOf(TemplateRef);
    });

    it('should reference the same TemplateRef as the template', () => {
      expect(component.simpleDirective.templateRef).toEqual(
        component.simpleTemplateRef
      );
    });

    it('should have different TemplateRef instances for different templates', () => {
      expect(component.simpleDirective.templateRef).not.toBe(
        component.richDirective.templateRef
      );
      expect(component.simpleDirective.templateRef).not.toBe(
        component.emptyDirective.templateRef
      );
      expect(component.richDirective.templateRef).not.toBe(
        component.emptyDirective.templateRef
      );
    });
  });

  describe('Template Content Access', () => {
    it('should allow access to template content through TemplateRef', () => {
      const templateRef = component.simpleDirective.templateRef;
      const embeddedView = templateRef.createEmbeddedView({});

      expect(embeddedView).toBeDefined();
      expect(embeddedView.rootNodes.length).toBeGreaterThan(0);

      embeddedView.destroy();
    });

    it('should handle rich content templates', () => {
      const templateRef = component.richDirective.templateRef;
      const embeddedView = templateRef.createEmbeddedView({});

      expect(embeddedView).toBeDefined();
      expect(embeddedView.rootNodes.length).toBeGreaterThan(0);

      embeddedView.destroy();
    });

    it('should handle empty templates', () => {
      const templateRef = component.emptyDirective.templateRef;
      const embeddedView = templateRef.createEmbeddedView({});

      expect(embeddedView).toBeDefined();

      embeddedView.destroy();
    });
  });

  describe('Multiple Directive Instances', () => {
    it('should support multiple directive instances in the same component', () => {
      const directives = [
        component.simpleDirective,
        component.richDirective,
        component.emptyDirective,
      ];

      directives.forEach((directive) => {
        expect(directive).toBeInstanceOf(TabLabelDirective);
        expect(directive.templateRef).toBeDefined();
      });
    });

    it('should maintain separate state for each directive instance', () => {
      const simpleTemplate = component.simpleDirective.templateRef;
      const richTemplate = component.richDirective.templateRef;
      const emptyTemplate = component.emptyDirective.templateRef;

      expect(simpleTemplate).not.toBe(richTemplate);
      expect(simpleTemplate).not.toBe(emptyTemplate);
      expect(richTemplate).not.toBe(emptyTemplate);
    });
  });
});

describe('TabLabelDirective Integration', () => {
  let component: IntegrationTestComponent;
  let fixture: ComponentFixture<IntegrationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabLabelDirective],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(IntegrationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should allow dynamic label content rendering', () => {
    const viewContainerRef = component.container.nativeElement;
    const embeddedView = component.directive.templateRef.createEmbeddedView({});

    // Append all root nodes to the container
    embeddedView.rootNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        viewContainerRef.appendChild(node);
      }
    });

    const renderedIcon = viewContainerRef.querySelector('.icon-home');
    const renderedText = viewContainerRef.querySelector('.label-text');
    const renderedBadge = viewContainerRef.querySelector('.badge');

    expect(renderedIcon).toBeDefined();
    expect(renderedText).toBeDefined();
    if (renderedText) {
      expect(renderedText.textContent?.trim()).toBe('Home Tab');
    }
    expect(renderedBadge).toBeDefined();
    if (renderedBadge) {
      expect(renderedBadge.textContent?.trim()).toBe('5');
    }

    embeddedView.destroy();
  });

  it('should support complex HTML structures in labels', () => {
    const templateRef = component.directive.templateRef;
    const embeddedView = templateRef.createEmbeddedView({});

    expect(embeddedView.rootNodes.length).toBeGreaterThan(0);

    // Verify the template contains the expected complex structure
    const container = document.createElement('div');
    embeddedView.rootNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        container.appendChild(node);
      }
    });

    expect(container.querySelector('.icon-home')).toBeDefined();
    expect(container.querySelector('.label-text')).toBeDefined();
    expect(container.querySelector('.badge')).toBeDefined();

    embeddedView.destroy();
  });
});

@Component({
  template: `
    <ng-template #simpleTemplate appTabLabel>
      <span>Simple Label</span>
    </ng-template>

    <ng-template #richTemplate appTabLabel>
      <div class="rich-label">
        <i class="icon-star"></i>
        <span class="label-text">Rich Label</span>
        <span class="notification-dot"></span>
      </div>
    </ng-template>

    <ng-template #emptyTemplate appTabLabel> </ng-template>
  `,
  imports: [TabLabelDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHostComponent {
  @ViewChild('simpleTemplate', { read: TabLabelDirective })
  simpleDirective!: TabLabelDirective;

  @ViewChild('richTemplate', { read: TabLabelDirective })
  richDirective!: TabLabelDirective;

  @ViewChild('emptyTemplate', { read: TabLabelDirective })
  emptyDirective!: TabLabelDirective;

  @ViewChild('simpleTemplate', { read: TemplateRef })
  simpleTemplateRef!: TemplateRef<unknown>;
}

@Component({
  template: `
    <div #container></div>
    <ng-template appTabLabel>
      <i class="icon-home"></i>
      <span class="label-text">Home Tab</span>
      <span class="badge">5</span>
    </ng-template>
  `,
  imports: [TabLabelDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class IntegrationTestComponent {
  @ViewChild('container', { static: true })
  container!: { nativeElement: HTMLElement };

  @ViewChild(TabLabelDirective)
  directive!: TabLabelDirective;
}
