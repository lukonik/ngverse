import { TabGroupComponent } from '@/ui/tab/tab-group.component';
import { TabPanelComponent } from '@/ui/tab/tab-panel/tab-panel.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-example-tab-disabled',
  imports: [TabGroupComponent, TabPanelComponent],
  template: `
    <app-tab-group>
      <app-tab-panel label="Available">
        <div class="p-4">
          <p>This tab is available and can be selected.</p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Disabled Tab" [disabled]="true">
        <div class="p-4">
          <p>This tab is disabled and cannot be selected.</p>
        </div>
      </app-tab-panel>

      <app-tab-panel label="Another Available Tab">
        <div class="p-4">
          <p>This tab is also available for selection.</p>
        </div>
      </app-tab-panel>
    </app-tab-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTabDisabledComponent {}
