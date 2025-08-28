import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  inject,
  input,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { TabContentDirective } from '../directives/tab-content.directive';
import { TabLabelDirective } from '../directives/tab-label.directive';

@Component({
  selector: 'app-tab-panel',
  imports: [],
  templateUrl: './tab-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabPanelComponent {
  label = input<string>();
  templateRef = viewChild(TemplateRef);
  vf = inject(ViewContainerRef);
  headerTemplate = contentChild(TabLabelDirective);

  bodyTemplate = contentChild(TabContentDirective);

  gap = input(true);

  portal: TemplatePortal | undefined;

  disabled = input(false);
}
