import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ArrowLeft, ArrowRight, LucideAngularModule } from 'lucide-angular';
import { filter } from 'rxjs';
import { ButtonComponent } from '../../../../../ngverse/src/lib/button/button.component';
import { IconComponent } from '../../../../../ngverse/src/lib/icon/icon.component';
import { getAllSidebarLinks, SidebarLink } from '../sidebar/sidebar.component';

const SIDEBAR_LINKS = getAllSidebarLinks();

@Component({
  selector: 'doc-doc-sibling-navigations',
  imports: [RouterLink, LucideAngularModule, ButtonComponent, IconComponent],
  templateUrl: './doc-sibling-navigations.component.html',
  styleUrl: './doc-sibling-navigations.component.scss',
})
export class DocSiblingNavigationsComponent {
  router = inject(Router);
  prevRoute = signal<SidebarLink | undefined>(undefined);
  nextRoute = signal<SidebarLink | undefined>(undefined);
  ArrowLeft = ArrowLeft;
  ArrowRight = ArrowRight;

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const currentPath = this.router.url;

        const foundRouteIndex = SIDEBAR_LINKS.findIndex(
          (r) => r.url === currentPath
        );
        this.prevRoute.set(undefined);
        this.nextRoute.set(undefined);
        if (foundRouteIndex !== -1) {
          if (foundRouteIndex !== 0) {
            this.prevRoute.set(SIDEBAR_LINKS[foundRouteIndex - 1]);
          }
          if (foundRouteIndex !== SIDEBAR_LINKS.length - 1) {
            this.nextRoute.set(SIDEBAR_LINKS[foundRouteIndex + 1]);
          }
        }
      });
  }
}
