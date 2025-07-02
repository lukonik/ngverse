export interface SidebarGroup {
  name: string;
  children: SidebarLink[];
  statics?: SidebarLink[];
}

export interface SidebarLink {
  name: string;
  url: string;
  mode?: 'experimental';
}
