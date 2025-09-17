import {
  Component,
  ChangeDetectionStrategy,
  DebugElement,
  signal,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import dayjs, { Dayjs } from 'dayjs';
import { DatepickerComponent } from './datepicker.component';
import { provideDpDateAdapter } from '../adapter/date.token';
import { DpDateRange } from '../types/date-range';
import { DpDayjsDateAdapter } from '../dayjs/dayjs-date.adapter';
import { DpWeekStart } from '../types/week-start';

class FixedDayjsDateAdapter extends DpDayjsDateAdapter {
  override currentDate(): Dayjs {
    return dayjs('2024-01-01');
  }
}

describe('DatepickerComponent', () => {
  describe('single selection mode', () => {
    let fixture: ComponentFixture<SingleModeHostComponent>;
    let host: SingleModeHostComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          DatepickerComponent,
          SingleModeHostComponent,
          ReactiveFormsModule,
        ],
        providers: [
          provideExperimentalZonelessChangeDetection(),
          provideDpDateAdapter(new FixedDayjsDateAdapter()),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(SingleModeHostComponent);
      host = fixture.componentInstance;
      fixture.detectChanges();
      await fixture.whenStable();
    });

    it('should update the form control when a date is selected', async () => {
      const dayButton = getDayButton(fixture.debugElement, '5');
      dayButton?.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(host.control.value?.format('YYYY-MM-DD')).toBe('2024-01-05');
    });

    it('should render human readable selection', async () => {
      const dayButton = getDayButton(fixture.debugElement, '12');
      dayButton?.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();

      const label = fixture.nativeElement.querySelector(
        '.dp-datepicker__selection'
      )?.textContent;
      expect(label?.trim()).toBe('Jan 12, 2024');
    });

    it('should respect start of week setting', () => {
      const headers = fixture.debugElement
        .queryAll(By.css('thead th'))
        .map((th) => th.nativeElement.textContent.trim());

      expect(headers[0]).toBe('M');
    });

    it('should ignore selections before minDate', async () => {
      const early = getDayButton(fixture.debugElement, '1');
      early?.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(host.control.value).toBeNull();
    });
  });

  describe('range selection mode', () => {
    let fixture: ComponentFixture<RangeModeHostComponent>;
    let host: RangeModeHostComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          DatepickerComponent,
          RangeModeHostComponent,
          ReactiveFormsModule,
        ],
        providers: [
          provideExperimentalZonelessChangeDetection(),
          provideDpDateAdapter(new FixedDayjsDateAdapter()),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(RangeModeHostComponent);
      host = fixture.componentInstance;
      fixture.detectChanges();
      await fixture.whenStable();
    });

    it('should capture start and end dates', async () => {
      const startButton = getDayButton(fixture.debugElement, '3');
      startButton?.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(host.control.value?.start?.format('YYYY-MM-DD')).toBe(
        '2024-01-03'
      );
      expect(host.control.value?.end).toBeNull();

      const endButton = getDayButton(fixture.debugElement, '9');
      endButton?.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(host.control.value?.start?.format('YYYY-MM-DD')).toBe(
        '2024-01-03'
      );
      expect(host.control.value?.end?.format('YYYY-MM-DD')).toBe('2024-01-09');
    });

    it('should reorder range when end precedes start', async () => {
      const firstSelection = getDayButton(fixture.debugElement, '20');
      firstSelection?.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();

      const secondSelection = getDayButton(fixture.debugElement, '8');
      secondSelection?.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(host.control.value?.start?.format('YYYY-MM-DD')).toBe(
        '2024-01-08'
      );
      expect(host.control.value?.end?.format('YYYY-MM-DD')).toBe('2024-01-20');
    });

    it('should ignore selections after maxDate', async () => {
      const startButton = getDayButton(fixture.debugElement, '10');
      startButton?.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();

      const afterMax = getDayButton(fixture.debugElement, '31');
      afterMax?.nativeElement.click();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(host.control.value?.end).toBeNull();
    });
  });
});

function getDayButton(debugElement: DebugElement, text: string) {
  const buttons = debugElement
    .queryAll(By.css('td:not(.outside) > button.dp-day'))
    .filter((button) => button.nativeElement.textContent.trim() === text);
  return buttons[0];
}

@Component({
  selector: 'app-single-mode-host',
  imports: [DatepickerComponent, ReactiveFormsModule],
  template: `<app-datepicker
    [minDate]="minDate"
    [maxDate]="maxDate"
    [startOfWeek]="startOfWeek"
    [formControl]="control"
  ></app-datepicker>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
class SingleModeHostComponent {
  control = new FormControl<Dayjs | null>(null);
  readonly minDate = dayjs('2024-01-03');
  readonly maxDate = dayjs('2024-01-25');
  readonly startOfWeek: DpWeekStart = 1;
}

@Component({
  selector: 'app-range-mode-host',
  imports: [DatepickerComponent, ReactiveFormsModule],
  template: `<app-datepicker
    [selectionMode]="mode()"
    [minDate]="minDate"
    [maxDate]="maxDate"
    [startOfWeek]="startOfWeek"
    [formControl]="control"
  ></app-datepicker>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
class RangeModeHostComponent {
  control = new FormControl<DpDateRange<Dayjs> | null>(null);
  mode = signal<'range'>('range');
  readonly minDate = dayjs('2024-01-01');
  readonly maxDate = dayjs('2024-01-20');
  readonly startOfWeek: DpWeekStart = 1;
}
