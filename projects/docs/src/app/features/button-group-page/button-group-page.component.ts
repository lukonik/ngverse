import { Component, inject } from '@angular/core';
import {
  ApiInfo,
  ApiInfoComponent,
} from '../../blueprint/api-info/api-info.component';
import { EMPTY_API_INPUT_DEFAULT_VALUE } from '../../blueprint/api-info/api-inputs/api-inputs.component';
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
import { ImplementationComponent } from '../../blueprint/implementation/implementation.component';
import { ExampleButtonGroupDefaultComponent } from '../../examples/button-group/example-button-group-default.component';
import { ExampleButtonGroupDisabledComponent } from '../../examples/button-group/example-button-group-disabled.component';
import { ExampleButtonGroupDisabledItemsComponent } from '../../examples/button-group/example-button-group-disabled-items.component';
import { ExampleButtonGroupFilterComponent } from '../../examples/button-group/example-button-group-filter.component';
import { ExampleButtonGroupWithIconsComponent } from '../../examples/button-group/example-button-group-with-icons.component';
import { PreviewButtonGroupComponent } from '../../examples/button-group/preview-button-group.component';

const ROOT = 'button-group';

@Component({
  selector: 'doc-button-group-page',
  imports: [
    BlueprintPageComponent,
    PreviewComponent,
    PreviewButtonGroupComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleButtonGroupDefaultComponent,
    ExampleButtonGroupDisabledComponent,
    ExampleButtonGroupDisabledItemsComponent,
    ExampleButtonGroupWithIconsComponent,
    ExampleButtonGroupFilterComponent,
    ApiInfoComponent,
    ImplementationComponent,
  ],
  templateUrl: './button-group-page.component.html',
  styleUrl: './button-group-page.component.css',
})
export class ButtonGroupPageComponent {
  private readonly sourceTreeBuilder = inject(SourceTreeBuilder);

  readonly sourceTree: SourceTreeFolder[] = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        ...this.sourceTreeBuilder.componentFiles('button-group-item', ROOT, [
          'spec.ts',
        ]),
      ],
      hideName: true,
    },
  ];

  readonly apiInfo: ApiInfo = {
    ariaDescription:
      'Button Group wraps related actions in a segmented control with single-selection behavior and keyboard accessibility.',
    entities: [
      {
        name: 'ButtonGroupComponent',
        type: 'component',
        selector: 'app-button-group',
        description:
          'Container component that manages a collection of button group items with exclusive selection. Implements ControlValueAccessor for seamless integration with Angular forms.',
        formBindable: true,
      },
      {
        name: 'ButtonGroupItemComponent',
        type: 'component',
        selector: 'app-button-group-item',
        description:
          'Individual option projected into the button group. Emits its value when selected.',
        inputs: [
          {
            name: 'itemValue',
            type: 'unknown',
            description: 'Value associated with the item.',
            default: EMPTY_API_INPUT_DEFAULT_VALUE,
          },
          {
            name: 'disabled',
            type: 'boolean',
            description:
              'Disables the item and prevents it from being selected.',
            default: 'false',
          },
        ],
      },
    ],
  };
}
