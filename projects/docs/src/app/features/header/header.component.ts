import { ButtonComponent } from '@/ui/button/button.component';
import { DarkModeToggleComponent } from '@/ui/dark-mode/dark-mode-toggle.component';
import { FontIconComponent } from '@/ui/font-icon/font-icon.component';
import { IconComponent } from '@/ui/icon/icon.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, take, takeUntil } from 'rxjs';
import { ProjectNameComponent } from '../../core/project-name/project-name.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'doc-header',
  imports: [
    RouterLink,
    ProjectNameComponent,
    ButtonComponent,
    IconComponent,
    DarkModeToggleComponent,
    FontIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  overlay = inject(Overlay);
  overlayRef: OverlayRef | undefined;
  router = inject(Router);

  constructor() {
    // afterNextRender(() => {
    //   docsearch({
    //     appId: 'PZQBHX8UM8',
    //     apiKey: '0b17f25c05f2160dbe75a2b43de39c0d',
    //     indexName: 'ui',
    //     container: '#docsearch',
    //   });
    // });
  }

  showSidebar() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().left(),

      hasBackdrop: true,
      disposeOnNavigation: true,
    });
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef?.dispose();
    });
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .pipe(take(1))
      .pipe(takeUntil(this.overlayRef.backdropClick().pipe(take(1))))
      .subscribe(() => {
        this.overlayRef?.dispose();
      });
    this.overlayRef.attach(new ComponentPortal(SidebarComponent));
  }
}
