import { OverlayContainer } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import dayjs, { Dayjs } from 'dayjs';
import { provideDpDateAdapter } from '../adapter/date.token';
import { DpDateRange } from '../types/date-range';
import { DpDayjsDateAdapter } from '../dayjs/dayjs-date.adapter';
import { DatepickerToggleComponent } from './datepicker-toggle.component';

class FixedDayjsDateAdapter extends DpDayjsDateAdapter {
  override currentDate(): Dayjs {
    return dayjs('2024-01-01');
  }
}

describe('DatepickerToggleComponent', () => {
  describe('single selection mode', () => {
    let fixture: ComponentFixture<SingleModeHostComponent>;
    let overlayContainer: OverlayContainer;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [SingleModeHostComponent],
        providers: [
          provideNoopAnimations(),
          provideExperimentalZonelessChangeDetection(),
          provideDpDateAdapter(new FixedDayjsDateAdapter()),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(SingleModeHostComponent);
      overlayContainer = TestBed.inject(OverlayContainer);
      fixture.detectChanges();
      await fixture.whenStable();
    });

    it('should create', () => {
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('should display placeholder when no value is set', () => {
      const label = fixture.debugElement.query(By.css('.dp-toggle__label'));
      expect(label.nativeElement.textContent.trim()).toBe('Select date');
    });

    it('should open calendar when toggle is clicked', async () => {
      openToggle(fixture);
      await fixture.whenStable();
      expect(isOverlayOpen(overlayContainer)).toBe(true);
    });

    it('should close calendar after selecting a date', async () => {
      openToggle(fixture);
      await fixture.whenStable();
      clickDay(overlayContainer, '5');
      fixture.detectChanges();
      await fixture.whenStable();
      expect(isOverlayOpen(overlayContainer)).toBe(false);
    });

    it('should update the displayed label after selection', async () => {
      openToggle(fixture);
      await fixture.whenStable();
      clickDay(overlayContainer, '12');
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();
      const label = fixture.debugElement.query(By.css('.dp-toggle__label'));
      expect(label.nativeElement.textContent.trim()).toBe('Jan 12, 2024');
    });

    it('should reflect programmatic value changes', async () => {
      fixture.componentInstance.control.setValue(dayjs('2024-01-20'));
      fixture.detectChanges();
      await fixture.whenStable();
      const label = fixture.debugElement.query(By.css('.dp-toggle__label'));
      expect(label.nativeElement.textContent.trim()).toBe('Jan 20, 2024');
    });
  });

  describe('range selection mode', () => {
    let fixture: ComponentFixture<RangeModeHostComponent>;
    let overlayContainer: OverlayContainer;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RangeModeHostComponent],
        providers: [
          provideNoopAnimations(),
          provideExperimentalZonelessChangeDetection(),
          provideDpDateAdapter(new FixedDayjsDateAdapter()),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(RangeModeHostComponent);
      overlayContainer = TestBed.inject(OverlayContainer);
      fixture.detectChanges();
      await fixture.whenStable();
    });

    it('should keep the calendar open until both range endpoints are selected', async () => {
      openToggle(fixture);
      await fixture.whenStable();
      clickDay(overlayContainer, '4');
      fixture.detectChanges();
      await fixture.whenStable();
      expect(isOverlayOpen(overlayContainer)).toBe(true);
      clickDay(overlayContainer, '10');
      fixture.detectChanges();
      await fixture.whenStable();
      expect(isOverlayOpen(overlayContainer)).toBe(false);
    });

    it('should display the chosen range', async () => {
      openToggle(fixture);
      await fixture.whenStable();
      clickDay(overlayContainer, '6');
      fixture.detectChanges();
      await fixture.whenStable();
      clickDay(overlayContainer, '9');
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();
      const label = fixture.debugElement.query(By.css('.dp-toggle__label'));
      expect(label.nativeElement.textContent.trim()).toBe(
        'Jan 6, 2024 - Jan 9, 2024'
      );
    });

    it('should update the form control with a complete range', async () => {
      openToggle(fixture);
      await fixture.whenStable();
      clickDay(overlayContainer, '15');
      fixture.detectChanges();
      await fixture.whenStable();
      clickDay(overlayContainer, '18');
      fixture.detectChanges();
      await fixture.whenStable();
      const value = fixture.componentInstance.control
        .value as DpDateRange<Dayjs>;
      expect(value.start?.format('YYYY-MM-DD')).toBe('2024-01-15');
      expect(value.end?.format('YYYY-MM-DD')).toBe('2024-01-18');
    });
  });
});

function openToggle(fixture: ComponentFixture<unknown>) {
  const button = fixture.debugElement.query(By.css('button'));
  button.nativeElement.click();
  fixture.detectChanges();
}

function isOverlayOpen(overlayContainer: OverlayContainer) {
  const popover = overlayContainer
    .getContainerElement()
    .querySelector('.popover');
  return !!popover && !popover.hasAttribute('hidden');
}

function clickDay(overlayContainer: OverlayContainer, text: string) {
  const dayButton = Array.from(
    overlayContainer
      .getContainerElement()
      .querySelectorAll<HTMLButtonElement>('button.dp-day')
  ).find((button) => button.textContent?.trim() === text);
  if (!dayButton) {
    throw new Error(`Day with label ${text} was not found`);
  }
  dayButton.click();
}

@Component({
  selector: 'app-single-mode-toggle-host',
  template: `<app-datepicker-toggle
    [formControl]="control"
  ></app-datepicker-toggle>`,
  imports: [ReactiveFormsModule, DatepickerToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
class SingleModeHostComponent {
  control = new FormControl<Dayjs | null>(null);
}

@Component({
  selector: 'app-range-mode-toggle-host',
  template: `<app-datepicker-toggle
    selectionMode="range"
    [formControl]="control"
  ></app-datepicker-toggle>`,
  imports: [ReactiveFormsModule, DatepickerToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
class RangeModeHostComponent {
  control = new FormControl<DpDateRange<Dayjs> | null>(null);
}
