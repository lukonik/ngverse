import {
  ChangeDetectionStrategy,
  Component,
  provideExperimentalZonelessChangeDetection,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabContentDirective } from './tab-content.directive';

describe('TabContentDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContentDirective],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Directive Creation', () => {
    it('should create the directive instance', () => {
      expect(component.basicDirective).toBeInstanceOf(TabContentDirective);
      expect(component.complexDirective).toBeInstanceOf(TabContentDirective);
      expect(component.emptyDirective).toBeInstanceOf(TabContentDirective);
    });

    it('should be applied to ng-template elements', () => {
      expect(component.basicDirective).toBeDefined();
      expect(component.complexDirective).toBeDefined();
      expect(component.emptyDirective).toBeDefined();
    });
  });

  describe('TemplateRef Injection', () => {
    it('should inject and expose TemplateRef', () => {
      expect(component.basicDirective.templateRef).toBeDefined();
      expect(component.basicDirective.templateRef).toBeInstanceOf(TemplateRef);
    });

    it('should reference the same TemplateRef as the template', () => {
      expect(component.basicDirective.templateRef).toEqual(
        component.basicTemplateRef
      );
    });

    it('should have different TemplateRef instances for different templates', () => {
      expect(component.basicDirective.templateRef).not.toBe(
        component.complexDirective.templateRef
      );
      expect(component.basicDirective.templateRef).not.toBe(
        component.emptyDirective.templateRef
      );
      expect(component.complexDirective.templateRef).not.toBe(
        component.emptyDirective.templateRef
      );
    });
  });

  describe('Template Content Access', () => {
    it('should allow access to template content through TemplateRef', () => {
      const templateRef = component.basicDirective.templateRef;
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
        component.basicDirective,
        component.complexDirective,
        component.emptyDirective,
      ];

      directives.forEach((directive) => {
        expect(directive).toBeInstanceOf(TabContentDirective);
        expect(directive.templateRef).toBeDefined();
      });
    });

    it('should maintain separate state for each directive instance', () => {
      const basicTemplate = component.basicDirective.templateRef;
      const complexTemplate = component.complexDirective.templateRef;
      const emptyTemplate = component.emptyDirective.templateRef;

      expect(basicTemplate).not.toBe(complexTemplate);
      expect(basicTemplate).not.toBe(emptyTemplate);
      expect(complexTemplate).not.toBe(emptyTemplate);
    });
  });
});

describe('TabContentDirective Integration', () => {
  let component: IntegrationTestComponent;
  let fixture: ComponentFixture<IntegrationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContentDirective],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(IntegrationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should allow dynamic content rendering', () => {
    const viewContainerRef = component.container.nativeElement;
    const embeddedView = component.directive.templateRef.createEmbeddedView({});

    viewContainerRef.appendChild(embeddedView.rootNodes[0]);

    const renderedContent = viewContainerRef.querySelector('.test-content');
    expect(renderedContent).toBeDefined();
    expect(renderedContent?.textContent).toBe('Integration test content');

    embeddedView.destroy();
  });
});

@Component({
  template: `
    <ng-template #basicTemplate appTabContent>
      <p>Basic tab content</p>
    </ng-template>

    <ng-template #complexTemplate appTabContent>
      <div class="complex-content">
        <h3>Complex Tab Content</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #emptyTemplate appTabContent> </ng-template>
  `,
  imports: [TabContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHostComponent {
  @ViewChild('basicTemplate', { read: TabContentDirective })
  basicDirective!: TabContentDirective;

  @ViewChild('complexTemplate', { read: TabContentDirective })
  complexDirective!: TabContentDirective;

  @ViewChild('emptyTemplate', { read: TabContentDirective })
  emptyDirective!: TabContentDirective;

  @ViewChild('basicTemplate', { read: TemplateRef })
  basicTemplateRef!: TemplateRef<unknown>;
}

@Component({
  template: `
    <div #container></div>
    <ng-template appTabContent>
      <span class="test-content">Integration test content</span>
    </ng-template>
  `,
  imports: [TabContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class IntegrationTestComponent {
  @ViewChild('container', { static: true })
  container!: { nativeElement: HTMLElement };

  @ViewChild(TabContentDirective)
  directive!: TabContentDirective;
}
