import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { AlertHeaderComponent } from './alert-header.component';

describe('AlertHeaderComponent', () => {
  let component: AlertHeaderComponent;
  let fixture: ComponentFixture<AlertHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertHeaderComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
