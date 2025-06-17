import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { FontIconComponent } from './font-icon.component';

describe('FontIconComponent', () => {
  let component: FontIconComponent;
  let fixture: ComponentFixture<FontIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontIconComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(FontIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
