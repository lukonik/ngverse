import { ButtonComponent } from '@/ui/button/button.component';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

export interface ConfirmDialogOptions {
  title: string;
  description: string;
  yesLabel?: string;
  noLabel?: string;
}

@Component({
  selector: 'app-confirm-dialog',
  imports: [ButtonComponent],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  dialogData = inject<ConfirmDialogOptions>(DIALOG_DATA);
  dialogRef = inject(DialogRef);

  get title() {
    return this.dialogData.title;
  }

  get description() {
    return this.dialogData.description;
  }

  get yesLabel() {
    return this.dialogData.yesLabel;
  }

  get noLabel() {
    return this.dialogData.noLabel;
  }

  yes() {
    this.dialogRef.close(true);
    this.dialogRef.close();
  }

  no() {
    this.dialogRef.close(false);
    this.dialogRef.close();
  }
}
