import { computed, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GUIDES_LINKS } from './guide-links';
import { SidebarGroup, SidebarLink } from './sidebar-types';
import { UI_LINKS } from './ui-links';
export const SIDEBAR_ROUTES = [GUIDES_LINKS, UI_LINKS] as SidebarGroup[];
@Injectable({
  providedIn: 'root',
})
export class SidebarState {
  readonly allRoutes = SIDEBAR_ROUTES;
  private _group = signal<SidebarGroup | undefined>(undefined);
  private _router = inject(Router);

  allLinks = computed(() => {
    const links: SidebarLink[] = [];

    for (const group of this.allRoutes) {
      if (group.statics) {
        links.push(
          ...group.statics.map((s) => ({
            name: s.name,
            url: group.name.toLowerCase() + '/' + s.url,
          }))
        );
      }
      links.push(
        ...group.children.map((c) => ({
          name: c.name,
          url: group.name.toLowerCase() + '/' + c.url,
        }))
      );
    }
    return links;
  });

  constructor() {
    this._router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        if (this._router.url.includes('guides')) {
          this._group.set(this.allRoutes[0]);
        } else if (this._router.url.includes('ui')) {
          this._group.set(this.allRoutes[1]);
        } else if (this._router.url.includes('utils')) {
          this._group.set(this.allRoutes[2]);
        } else if (this._router.url.includes('pipes')) {
          this._group.set(this.allRoutes[3]);
        } else if (this._router.url.includes('animations')) {
          this._group.set(this.allRoutes[4]);
        }
      });
  }
}
