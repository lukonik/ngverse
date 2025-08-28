import { TabContentDirective } from '@/ui/tab/directives/tab-content.directive';
import { TabLabelDirective } from '@/ui/tab/directives/tab-label.directive';
import { TabGroupComponent } from '@/ui/tab/tab-group/tab-group.component';
import { TabPanelComponent } from '@/ui/tab/tab-panel/tab-panel.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyTabComponent } from '../lazy-tab/lazy-tab.component';

@Component({
  selector: 'doc-show-case-tab',
  imports: [
    TabGroupComponent,
    TabPanelComponent,
    TabContentDirective,
    TabLabelDirective,
    LazyTabComponent,
  ],
  templateUrl: './show-case-tab.component.html',
  styleUrl: './show-case-tab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseTabComponent {}
