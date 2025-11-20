import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { vi, type MockedObject } from 'vitest';
import { DialogCloseDirective } from './dialog-close.directive';

@Component({
  template: ` <button appDialogClose [appDialogClose]="value()">Test</button>`,
  imports: [DialogCloseDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestCloseComponent {
  value = signal<string | undefined>(undefined);
}

describe('DialogCloseDirective', () => {
  let fixture: ComponentFixture<TestCloseComponent>;
  let mockDialogRef: MockedObject<DialogRef>;

  beforeEach(async () => {
    mockDialogRef = {
      close: vi.fn(),
    };

    TestBed.configureTestingModule({
      imports: [TestCloseComponent],
      providers: [{ provide: DialogRef, useValue: mockDialogRef }, ],
    });

    fixture = TestBed.createComponent(TestCloseComponent);
    await fixture.whenStable();
  });

  it('should create the directive', () => {
    const directiveEl = fixture.debugElement.query(
      By.directive(DialogCloseDirective)
    );
    expect(directiveEl).toBeTruthy();
  });

  it('should call dialogRef.close() with undefined when clicked and no value is set', () => {
    const buttonEl = fixture.debugElement.query(
      By.directive(DialogCloseDirective)
    );
    buttonEl.triggerEventHandler('click', null);

    expect(mockDialogRef.close).toHaveBeenCalledWith(undefined);
  });

  it('should call dialogRef.close() with the provided value when clicked', async () => {
    const buttonEl = fixture.debugElement.query(
      By.directive(DialogCloseDirective)
    );

    fixture.componentInstance.value.set('Test Value');

    await fixture.whenStable();

    buttonEl.triggerEventHandler('click', null);

    expect(mockDialogRef.close).toHaveBeenCalledWith('Test Value');
  });
});
