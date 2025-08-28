import { Component, inject, signal } from '@angular/core';
import {
  ApiInfo,
  ApiInfoComponent,
} from '../../blueprint/api-info/api-info.component';
import { BlueprintPageComponent } from '../../blueprint/blueprint-page/blueprint-page.component';
import { ShowCaseComponent } from '../../blueprint/show-case/show-case.component';
import {
  SourceTreeBuilder,
  SourceTreeFolder,
} from '../../blueprint/source-tree/source-tree-builder';
import { SourceTreeComponent } from '../../blueprint/source-tree/source-tree.component';
import { ShowCaseTabComponent } from '../../examples/tab/show-case-tab/show-case-tab.component';
const ROOT = 'tab';
@Component({
  selector: 'doc-tab-page',
  imports: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseTabComponent,
    SourceTreeComponent,
    ApiInfoComponent,
  ],
  templateUrl: './tab-page.component.html',
  styleUrl: './tab-page.component.css',
})
export class TabPageComponent {
  selectedIndex = signal(0);
  sourceTreeBuilder = inject(SourceTreeBuilder);

  apiInfo: ApiInfo = {
    entities: [
      {
        name: 'TabGroupComponent',
        type: 'component',
        selector: 'app-tab-group',
      },
      {
        name: 'TabPanelComponent',
        type: 'component',
        selector: 'app-tab-panel',
      },
      {
        name: 'TabHeaderComponent',
        type: 'component',
        selector: 'app-tab-header',
      },
      {
        name: 'TabContentDirective',
        type: 'directive',
        selector: '[appTabContent]',
      },
      {
        name: 'TabLabelDirective',
        type: 'directive',
        selector: '[appTabLabel]',
      },
    ],
  };

  sourceTree: SourceTreeFolder[] = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(
          'tab-panel',
          `${ROOT}/tab-panel`
        ),
        ...this.sourceTreeBuilder.fullComponent(
          'tab-header',
          `${ROOT}/tab-header`
        ),
        ...this.sourceTreeBuilder.fullComponent(
          'tab-group',
          `${ROOT}/tab-group`
        ),
        ...this.sourceTreeBuilder.directive(
          'tab-content',
          `${ROOT}/directives`
        ),
        ...this.sourceTreeBuilder.directive('tab-label', `${ROOT}/directives`),
      ],
      hideName: true,
    },
  ];
}
