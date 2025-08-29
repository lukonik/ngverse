import { Component, inject, signal } from '@angular/core';
import {
  ApiInfo,
  ApiInfoComponent,
} from '../../blueprint/api-info/api-info.component';
import { BlueprintPageComponent } from '../../blueprint/blueprint-page/blueprint-page.component';
import { ExampleItemComponent } from '../../blueprint/examples/example-item/example-item.component';
import { ExamplesComponent } from '../../blueprint/examples/examples.component';
import { PreviewComponent } from '../../blueprint/preview/preview.component';
import {
  SourceTreeBuilder,
  SourceTreeFolder,
} from '../../blueprint/source-tree/source-tree-builder';
import { SourceTreeComponent } from '../../blueprint/source-tree/source-tree.component';
import { ExampleTabBasicComponent } from '../../examples/tab/example-tab-basic/example-tab-basic.component';
import { ExampleTabCustomLabelsComponent } from '../../examples/tab/example-tab-custom-labels/example-tab-custom-labels.component';
import { ExampleTabDisabledComponent } from '../../examples/tab/example-tab-disabled/example-tab-disabled.component';
import { ExampleTabLazyContentComponent } from '../../examples/tab/example-tab-lazy-content/example-tab-lazy-content.component';
import { PreviewTabComponent } from '../../examples/tab/preview-tab/preview-tab.component';
const ROOT = 'tab';
@Component({
  selector: 'doc-tab-page',
  imports: [
    BlueprintPageComponent,
    PreviewComponent,
    PreviewTabComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleTabBasicComponent,
    ExampleTabCustomLabelsComponent,
    ExampleTabLazyContentComponent,
    ExampleTabDisabledComponent,
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
    ariaDescription:
      'The Tab components implement WAI-ARIA tab panel pattern with full keyboard navigation support and proper focus management.',
    entities: [
      {
        name: 'TabGroupComponent',
        type: 'component',
        selector: 'app-tab-group',
        description:
          'Container component that manages a collection of tab panels with keyboard navigation and accessibility support',
        inputs: [
          {
            name: 'selectedIndex',
            type: 'number',
            description: 'The currently selected tab index (two-way bindable)',
            default: '0',
          },
          {
            name: 'bodyGap',
            type: 'boolean',
            description: 'Whether to add padding to the tab content area',
            default: 'true',
          },
        ],
        outputs: [
          {
            name: 'tabChanged',
            value: 'number',
            description: 'Event emitted when the selected tab changes',
          },
        ],
      },
      {
        name: 'TabPanelComponent',
        type: 'component',
        selector: 'app-tab-panel',
        description:
          "Individual tab panel that represents a single tab's content and configuration",
        inputs: [
          {
            name: 'label',
            type: 'string',
            description:
              'The text label displayed in the tab header (optional if using custom label template)',
            default: 'undefined',
          },
          {
            name: 'gap',
            type: 'boolean',
            description:
              'Whether to apply default padding to the tab content area',
            default: 'true',
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Whether this tab is disabled and cannot be selected',
            default: 'false',
          },
        ],
      },
      {
        name: 'TabHeaderComponent',
        type: 'component',
        selector: 'app-tab-header',
        description:
          'Tab header component that displays the clickable tab label and handles focus management',
        inputs: [
          {
            name: 'tab',
            type: 'TabPanelComponent',
            description: 'Reference to the associated tab panel component',
            default: 'required',
          },
          {
            name: 'tabIndex',
            type: 'number',
            description:
              'The zero-based index of this tab within the tab group',
            default: 'required',
          },
          {
            name: 'isSelected',
            type: 'boolean',
            description: 'Whether this tab is currently selected',
            default: 'required',
          },
          {
            name: 'isActive',
            type: 'boolean',
            description: 'Whether this tab header currently has keyboard focus',
            default: 'false',
          },
          {
            name: 'isDisabled',
            type: 'boolean',
            description: 'Whether this tab is disabled and cannot be selected',
            default: 'false',
          },
        ],
      },
      {
        name: 'TabContentDirective',
        type: 'directive',
        selector: 'ng-template[appTabContent]',
        description:
          'Directive that marks a template as lazy-loaded tab content. Content is only rendered when the tab becomes active.',
      },
      {
        name: 'TabLabelDirective',
        type: 'directive',
        selector: 'ng-template[appTabLabel]',
        description:
          'Directive that marks a template as a custom tab label. Allows for rich, interactive tab headers beyond simple text labels.',
      },
    ],
  };

  sourceTree: SourceTreeFolder[] = [
    {
      name: ROOT,
      files: [
        // tab-group files (directly in tab folder, no CSS file)
        ...this.sourceTreeBuilder.componentFiles('tab-group', ROOT, ['css']),

        // tab-panel files (no CSS or spec files)
        ...this.sourceTreeBuilder.componentFiles(
          'tab-panel',
          `${ROOT}/tab-panel`,
          ['css', 'spec.ts']
        ),

        // tab-header files (has all files)
        ...this.sourceTreeBuilder.componentFiles(
          'tab-header',
          `${ROOT}/tab-header`,
          []
        ),

        // directive files
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
