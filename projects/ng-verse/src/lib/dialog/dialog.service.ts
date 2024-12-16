import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import {
  AlertDialogComponent,
  AlertDialogOption,
} from './alert-dialog/alert-dialog.component';
import {
  ConfirmDialogComponent,
  ConfirmDialogOptions,
} from './confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialog = inject(Dialog);
  open() {
    // const dialogRef = this.dialog.open<string>(DialogComponent, {
    //   width: '250px',
    // });
  }

  confirm(options: ConfirmDialogOptions) {
    const dialogRef = this.dialog.open<string>(ConfirmDialogComponent, {
      width: '250px',
      data: options,
      disableClose: options.disableClose,
      hasBackdrop: options.hasBackdrop,
    });
    return dialogRef.closed;
  }

  alert(options: AlertDialogOption) {
    const dialogRef = this.dialog.open<string>(AlertDialogComponent, {
      width: '250px',
      data: options,
      disableClose: options.disableClose,
      hasBackdrop: options.hasBackdrop,
    });
    return dialogRef.closed;
  }
}
