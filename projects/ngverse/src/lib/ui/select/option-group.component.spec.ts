import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { OptionGroupComponent } from './option-group.component';

describe('OptionGroupComponent', () => {
  let component: OptionGroupComponent;
  let fixture: ComponentFixture<OptionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionGroupComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionGroupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
