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
import { DatepickerInputComponent } from './datepicker-input.component';

class FixedDayjsDateAdapter extends DpDayjsDateAdapter {
  override currentDate(): Dayjs {
    return dayjs('2024-01-01');
  }
}

describe('DatepickerInputComponent', () => {
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

    it('should render placeholder when no value is selected', () => {
      const input = getInput(fixture);
      expect(input.getAttribute('placeholder')).toBe('Pick a date');
      expect((input as HTMLInputElement).value).toBe('');
    });

    it('should open overlay on click', async () => {
      getInput(fixture).dispatchEvent(new Event('click'));
      fixture.detectChanges();
      await fixture.whenStable();
      expect(isOverlayOpen(overlayContainer)).toBe(true);
    });

    it('should update value and close overlay after selecting a date', async () => {
      openOverlay(fixture);
      clickDay(overlayContainer, '12');
      fixture.detectChanges();
      await fixture.whenStable();
      const input = getInput(fixture);
      expect((input as HTMLInputElement).value).toBe('Jan 12, 2024');
      expect(isOverlayOpen(overlayContainer)).toBe(false);
    });

    it('should reflect programmatic value changes', async () => {
      fixture.componentInstance.control.setValue(dayjs('2024-01-20'));
      fixture.detectChanges();
      await fixture.whenStable();
      const input = getInput(fixture);
      expect((input as HTMLInputElement).value).toBe('Jan 20, 2024');
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

    it('should display range after both endpoints selected', async () => {
      openOverlay(fixture);
      clickDay(overlayContainer, '6');
      fixture.detectChanges();
      await fixture.whenStable();
      expect(isOverlayOpen(overlayContainer)).toBe(true);
      clickDay(overlayContainer, '10');
      fixture.detectChanges();
      await fixture.whenStable();
      const input = getInput(fixture);
      expect((input as HTMLInputElement).value).toBe(
        'Jan 6, 2024 - Jan 10, 2024'
      );
      expect(isOverlayOpen(overlayContainer)).toBe(false);
    });

    it('should write range from form control', async () => {
      fixture.componentInstance.control.setValue({
        start: dayjs('2024-01-05'),
        end: dayjs('2024-01-08'),
      });
      fixture.detectChanges();
      await fixture.whenStable();
      const input = getInput(fixture);
      expect((input as HTMLInputElement).value).toBe(
        'Jan 5, 2024 - Jan 8, 2024'
      );
    });
  });
});

function getInput(fixture: ComponentFixture<unknown>) {
  return fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
}

function isOverlayOpen(overlayContainer: OverlayContainer) {
  const popover = overlayContainer
    .getContainerElement()
    .querySelector('.popover');
  return !!popover && !popover.hasAttribute('hidden');
}

function openOverlay(fixture: ComponentFixture<unknown>) {
  const input = getInput(fixture);
  input.dispatchEvent(new Event('click'));
  fixture.detectChanges();
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
  selector: 'app-single-mode-input-host',
  template: `<app-datepicker-input
    placeholder="Pick a date"
    [formControl]="control"
  ></app-datepicker-input>`,
  imports: [ReactiveFormsModule, DatepickerInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
class SingleModeHostComponent {
  control = new FormControl<Dayjs | null>(null);
}

@Component({
  selector: 'app-range-mode-input-host',
  template: `<app-datepicker-input
    selectionMode="range"
    [formControl]="control"
  ></app-datepicker-input>`,
  imports: [ReactiveFormsModule, DatepickerInputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
class RangeModeHostComponent {
  control = new FormControl<DpDateRange<Dayjs> | null>(null);
}
