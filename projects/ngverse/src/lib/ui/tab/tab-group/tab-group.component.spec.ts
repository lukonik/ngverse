import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TabContentDirective } from '../directives/tab-content.directive';
import { TabGroupComponent } from './tab-group.component';
import { TabLabelDirective } from '../directives/tab-label.directive';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  imports: [
    TabGroupComponent,
    TabPanelComponent,
    TabLabelDirective,
    TabContentDirective,
  ],
  template: ` <app-tab-group>
    <app-tab-panel label="Default"> This is default tab </app-tab-panel>
    <app-tab-panel>
      <ng-template appTabLabel>
        <div class="custom-label">Custom Label</div>
      </ng-template>
      This is Custom Label Tab
    </app-tab-panel>
    <app-tab-panel label="Lazy Load Body">
      <ng-template appTabContent>Lazy tab</ng-template>
    </app-tab-panel>
  </app-tab-group>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TabGroupTestComponent {}

describe('TabGroupComponent', () => {
  let fixture: ComponentFixture<TabGroupTestComponent>;
  let tabHeaders: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideNoopAnimations(),
      ],
      imports: [TabGroupTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabGroupTestComponent);
    fixture.detectChanges();
    tabHeaders = fixture.debugElement.queryAll(By.css('app-tab-header'));
  });

  it('should render custom label', () => {
    const secondTabHeader = tabHeaders[1];
    expect(secondTabHeader.query(By.css('.custom-label'))).toBeTruthy();
    expect(secondTabHeader.nativeElement.textContent).toContain('Custom Label');
  });

  it('should render default label and a body', () => {
    const firstTabHeader = tabHeaders[0];
    const firstTabBody = fixture.debugElement.query(By.css('.tab-content'));
    expect(firstTabHeader.nativeElement.textContent).toContain('Default');
    expect(firstTabBody.nativeElement.textContent).toContain(
      'This is default tab'
    );
  });

  it('should change active tab', () => {
    const secondTabHeader = tabHeaders[1];
    secondTabHeader.nativeElement.click();
    fixture.detectChanges();

    const activeTabBody = fixture.debugElement.query(By.css('.tab-content'));
    expect(activeTabBody.nativeElement.textContent.trim()).toContain(
      'This is Custom Label Tab'
    );
  });

  it('should render lazy tab', () => {
    const lazyTab = tabHeaders[2];
    expect(lazyTab.nativeElement.textContent).toContain('Lazy Load Body');
    lazyTab.nativeElement.click();
    fixture.detectChanges();

    const activeTabBody = fixture.debugElement.query(By.css('.tab-content'));
    expect(activeTabBody.nativeElement.textContent).toContain('Lazy tab');
  });
});
