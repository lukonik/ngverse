import { TabGroupComponent } from '@/ui/tab/tab-group.component';
import { TabPanelComponent } from '@/ui/tab/tab-panel/tab-panel.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-tab-basic',
  imports: [TabGroupComponent, TabPanelComponent],
  template: `
    <app-tab-group>
      <app-tab-panel label="Tab 1"> Content for the first tab </app-tab-panel>
      <app-tab-panel label="Tab 2"> Content for the second tab </app-tab-panel>
      <app-tab-panel label="Tab 3"> Content for the third tab </app-tab-panel>
    </app-tab-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTabBasicComponent {}
