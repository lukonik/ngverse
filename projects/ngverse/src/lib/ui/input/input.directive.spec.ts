import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  ChangeDetectionStrategy,
  Component,
  provideZonelessChangeDetection,
} from '@angular/core';
import { InputDirective } from './input.directive';

describe('InputComponent', () => {
  let fixture: ComponentFixture<InputTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDirective],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTestComponent);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});

@Component({
  imports: [InputDirective],
  template: ` <input appInput />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class InputTestComponent {}
