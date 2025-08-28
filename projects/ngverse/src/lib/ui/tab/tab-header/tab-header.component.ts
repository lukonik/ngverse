import { Highlightable } from '@angular/cdk/a11y';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-header',
  imports: [NgTemplateOutlet],
  templateUrl: './tab-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './tab-header.component.css',
  host: {
    '[class.is-active]': 'enabledTabIndex()',
    '[class.is-selected]': 'isSelected()',
  },
})
export class TabHeaderComponent implements Highlightable {
  disabled?: boolean | undefined;

  activate = signal(false);

  tab = input.required<TabPanelComponent>();
  element = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>)
    .nativeElement;
  enabledTabIndex = signal(false);
  isSelected = input.required<boolean>();

  setActiveStyles(): void {
    this.enabledTabIndex.set(true);
    this.element.focus();
  }
  setInactiveStyles(): void {
    this.enabledTabIndex.set(false);
  }
}
