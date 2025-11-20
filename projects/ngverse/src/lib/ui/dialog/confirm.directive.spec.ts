import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ConfirmDirective } from './confirm.directive';
import { DialogService } from './dialog.service';

class MockDialogService {
  confirm = vi.fn().mockReturnValue({
    closed: of(true),
  });
}

@Component({
  template: ` <button
    appConfirm
    [confirmOptions]="options"
    (approved)="onApproved()"
    (rejected)="onRejected()"
  >
    Click me
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ConfirmDirective],
})
class TestHostComponent {
  options = {
    title: 'Delete this item?',
    description: 'Once deleted you cannot undo this action',
    yesLabel: 'Delete',
    noLabel: 'Cancel',
  };
  @Output()
  approved = new EventEmitter<void>();
  @Output()
  rejected = new EventEmitter<void>();

  onApproved() {
    this.approved.emit();
  }

  onRejected() {
    this.rejected.emit();
  }
}

describe('ConfirmDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let dialogService: MockDialogService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [{ provide: DialogService, useClass: MockDialogService }, ,],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    dialogService = TestBed.inject(
      DialogService
    ) as unknown as MockDialogService;

    await fixture.whenStable();
  });

  it('should call the open method when the button is clicked', async () => {
    const button = fixture.debugElement.query(By.css('button'));
    vi.spyOn(fixture.componentInstance, 'onApproved');

    button.triggerEventHandler('click', null);
    await fixture.whenStable();

    expect(dialogService.confirm).toHaveBeenCalledWith(
      fixture.componentInstance.options
    );
  });

  it('should emit approved event when the dialog result is true', async () => {
    dialogService.confirm.mockReturnValue({
      closed: of(true),
    });

    const button = fixture.debugElement.query(By.css('button'));
    const approvedSpy = vi.spyOn(fixture.componentInstance, 'onApproved');

    button.triggerEventHandler('click', null);

    await fixture.whenStable();

    expect(approvedSpy).toHaveBeenCalled();
  });

  it('should emit rejected event when the dialog result is false', async () => {
    dialogService.confirm.mockReturnValue({
      closed: of(false),
    });

    const button = fixture.debugElement.query(By.css('button'));
    const rejectedSpy = vi.spyOn(fixture.componentInstance, 'onRejected');

    button.triggerEventHandler('click', null);

    await fixture.whenStable();

    expect(rejectedSpy).toHaveBeenCalled();
  });
});
