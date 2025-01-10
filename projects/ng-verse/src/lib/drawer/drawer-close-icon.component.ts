import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer-close-icon',
  styles: [
    `
      :host {
        display: flex;
        width: 20px;
        height: 20px;
      }
    `,
  ],
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-x"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>`,
})
export class DrawerCloseIconComponent {}
