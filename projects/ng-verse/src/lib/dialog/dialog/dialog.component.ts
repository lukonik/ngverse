import { DIALOG_DATA, DialogConfig } from '@angular/cdk/dialog';
import {
  CdkPortalOutlet,
  ComponentPortal,
  ComponentType,
} from '@angular/cdk/portal';
import { Component, inject } from '@angular/core';
import { DialogCloseIconComponent } from '../dialog-close-icon.component';
import { DialogCloseDirective } from '../dialog-close.directive';

export interface DialogOptions
  extends Pick<DialogConfig, 'disableClose' | 'hasBackdrop'> {
  component: ComponentType<unknown>;
  title?: string;
  showClose?: boolean;
}

@Component({
  selector: 'app-dialog',
  imports: [CdkPortalOutlet, DialogCloseIconComponent, DialogCloseDirective],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  dialogData = inject<DialogOptions>(DIALOG_DATA);
  componentPortal: ComponentPortal<unknown>;

  get showClose() {
    return this.dialogData.showClose;
  }

  get title() {
    return this.dialogData.title;
  }

  constructor() {
    this.componentPortal = new ComponentPortal(this.dialogData.component);
  }
}
