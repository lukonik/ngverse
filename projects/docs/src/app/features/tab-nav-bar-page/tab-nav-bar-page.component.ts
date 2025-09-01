import { Component, inject, signal } from '@angular/core';
import {
  ApiInfo,
  ApiInfoComponent,
} from '../../blueprint/api-info/api-info.component';
import { BlueprintPageComponent } from '../../blueprint/blueprint-page/blueprint-page.component';
import { CommandInstallationComponent } from '../../blueprint/command-installation/command-installation.component';
import { ExampleItemComponent } from '../../blueprint/examples/example-item/example-item.component';
import { ExamplesComponent } from '../../blueprint/examples/examples.component';
import { PreviewComponent } from '../../blueprint/preview/preview.component';
import {
  SourceTreeBuilder,
  SourceTreeFolder,
} from '../../blueprint/source-tree/source-tree-builder';
import { SourceTreeComponent } from '../../blueprint/source-tree/source-tree.component';
import { ExampleTabNavBarBasicComponent } from '../../examples/tab-nav-bar/example-tab-nav-bar-basic.component';
import { ExampleTabNavBarDisabledComponent } from '../../examples/tab-nav-bar/example-tab-nav-bar-disabled.component';
import { ExampleTabNavBarIconsComponent } from '../../examples/tab-nav-bar/example-tab-nav-bar-icons.component';
import { PreviewTabNavBarComponent } from '../../examples/tab-nav-bar/preview-tab-nav-bar.component';

const ROOT = 'tab-nav-bar';

@Component({
  selector: 'doc-tab-nav-bar-page',
  imports: [
    BlueprintPageComponent,
    CommandInstallationComponent,
    PreviewComponent,
    PreviewTabNavBarComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleTabNavBarBasicComponent,
    ExampleTabNavBarDisabledComponent,
    ExampleTabNavBarIconsComponent,
    SourceTreeComponent,
    ApiInfoComponent,
  ],
  templateUrl: './tab-nav-bar-page.component.html',
  styleUrl: './tab-nav-bar-page.component.css',
})
export class TabNavBarPageComponent {
  selectedIndex = signal(0);
  sourceTreeBuilder = inject(SourceTreeBuilder);

  apiInfo: ApiInfo = {
    ariaDescription:
      'The Tab Nav Bar components implement WAI-ARIA tab panel pattern for navigation purposes with full keyboard navigation support and proper focus management.',
    entities: [
      {
        name: 'TabNavBarComponent',
        type: 'component',
        selector: 'app-tab-nav-bar',
        description:
          'Navigation container component that manages a collection of navigation items with keyboard navigation and accessibility support',
        inputs: [
          {
            name: 'selectedTabValue',
            type: 'string | undefined',
            description: 'The currently selected tab value (two-way bindable)',
            default: 'undefined',
          },
        ],
        outputs: [
          {
            name: 'tabChanged',
            value: 'string | undefined',
            description: 'Event emitted when the selected tab value changes',
          },
        ],
      },
      {
        name: 'TabNavBarItemComponent',
        type: 'component',
        selector: 'app-tab-nav-bar-item',
        description:
          'Individual navigation item that represents a single navigation option with unique value',
        inputs: [
          {
            name: 'tabValue',
            type: 'string',
            description: 'The unique value for this navigation item (required)',
            default: 'required',
          },
          {
            name: 'disabled',
            type: 'boolean',
            description:
              'Whether this navigation item is disabled and cannot be selected',
            default: 'false',
          },
        ],
      },
    ],
  };

  sourceTree: SourceTreeFolder[] = [
    {
      name: ROOT,
      files: [
        // tab-nav-bar files (directly in tab-nav-bar folder)
        ...this.sourceTreeBuilder.componentFiles('tab-nav-bar', ROOT, []),

        // tab-nav-bar-item files (in sub-folder with CSS)
        ...this.sourceTreeBuilder.componentFiles(
          'tab-nav-bar-item',
          `${ROOT}/tab-nav-bar-item`,
          []
        ),
      ],
      hideName: true,
    },
  ];
}
