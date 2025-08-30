import { Component, inject } from '@angular/core';
import {
  ApiInfo,
  ApiInfoComponent,
} from '../../blueprint/api-info/api-info.component';
import {
  EMPTY_API_INPUT_DEFAULT_VALUE,
  VOID_API_RETURN_TYPE,
} from '../../blueprint/api-info/api-inputs/api-inputs.component';
import { BlueprintPageComponent } from '../../blueprint/blueprint-page/blueprint-page.component';
import { CommandInstallationComponent } from '../../blueprint/command-installation/command-installation.component';
import { ExampleItemComponent } from '../../blueprint/examples/example-item/example-item.component';
import { ExamplesComponent } from '../../blueprint/examples/examples.component';
import { ImplementationComponent } from '../../blueprint/implementation/implementation.component';
import { PreviewComponent } from '../../blueprint/preview/preview.component';
import { ShowCaseComponent } from '../../blueprint/show-case/show-case.component';
import {
  SourceTreeBuilder,
  SourceTreeFolder,
} from '../../blueprint/source-tree/source-tree-builder';
import { SourceTreeComponent } from '../../blueprint/source-tree/source-tree.component';
import { ExampleAccordionCustomHeaderComponent } from '../../examples/accordion/example-accordion-custom-header.component';
import { ExampleAccordionDefaultComponent } from '../../examples/accordion/example-accordion-default.component';
import { ExampleAccordionDisabledComponent } from '../../examples/accordion/example-accordion-disabled.component';
import { ExampleAccordionExpandedComponent } from '../../examples/accordion/example-accordion-expanded.component';
import { ExampleAccordionMultiComponent } from '../../examples/accordion/example-accordion-multi.component';
import { PreviewAccordionComponent } from '../../examples/accordion/preview-accordion.component';

const ROOT = 'accordion';

@Component({
  selector: 'doc-accordion-page',
  imports: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ApiInfoComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    PreviewComponent,
    PreviewAccordionComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleAccordionDefaultComponent,
    ExampleAccordionMultiComponent,
    ExampleAccordionCustomHeaderComponent,
    ExampleAccordionDisabledComponent,
    ExampleAccordionExpandedComponent,
    ImplementationComponent,
  ],
  templateUrl: './accordion-page.component.html',
  styleUrl: './accordion-page.component.css',
})
export class AccordionPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);

  sourceTree: SourceTreeFolder[] = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent('accordion', ROOT),
        ...this.sourceTreeBuilder.fullComponent('accordion-item', ROOT),
        this.sourceTreeBuilder.component('accordion-header', ROOT),
        this.sourceTreeBuilder.component('accordion-body', ROOT),
        this.sourceTreeBuilder.component('expand-icon', ROOT),
        this.sourceTreeBuilder.file('accordion-animations', ROOT),
      ],
      hideName: true,
    },
  ];

  apiInfo: ApiInfo = {
    reliesOn: 'https://material.angular.io/cdk/accordion/overview',
    ariaLink: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
    entities: [
      {
        name: 'AccordionComponent',
        selector: 'app-accordion',
        type: 'component',
        description: 'The main component, that includes accordion-items',
        inputs: [
          {
            name: 'multi',
            type: 'boolean',
            description: 'allows multiple panels to be open simultaneously',
            default: 'false',
          },
        ],
        methods: [
          {
            name: 'closeAll',
            returnType: VOID_API_RETURN_TYPE,
            description: 'closes all accordion-items',
          },
          {
            name: 'openAll',
            returnType: VOID_API_RETURN_TYPE,
            description: 'opens all accordion-items',
          },
        ],
      },
      {
        name: 'AccordionItemComponent',
        selector: 'app-accordion-item',
        type: 'component',
        description:
          'The component is used within an accordion to render an item.',
        inputs: [
          {
            name: 'label',
            type: 'string',
            description: 'label of the accordion-item',
            default: EMPTY_API_INPUT_DEFAULT_VALUE,
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'disables accordion-item',
            default: 'false',
          },
          {
            name: 'expanded',
            type: 'boolean',
            description: 'expands the accordion-item',
            default: 'false',
          },
        ],
        outputs: [
          {
            name: 'opened',
            value: VOID_API_RETURN_TYPE,
            description: 'emits when the accordion item is opened',
          },
          {
            name: 'closed',
            value: VOID_API_RETURN_TYPE,
            description: 'emits when the accordion item is closed',
          },
          {
            name: 'destroyed',
            value: VOID_API_RETURN_TYPE,
            description: 'emits when the accordion item is destroyed',
          },
        ],
        methods: [
          {
            name: 'toggle',
            description: 'toggles the accordion-item',
            returnType: 'void',
            params: [],
          },
          {
            name: 'open',
            description: 'opens the accordion-item',
            returnType: 'void',
            params: [],
          },
          {
            name: 'close',
            description: 'closes the accordion-item',
            returnType: 'void',
          },
        ],
      },
      {
        name: 'AccordionBodyComponent',
        selector: 'app-accordion-body',
        type: 'component',
        description:
          'The component is used within an accordion-item to render its ng-content.',
        inputs: [],
      },
      {
        name: 'AccordionHeaderComponent',
        selector: 'app-accordion-header',
        type: 'component',
        description:
          'The component can replace the label inside an accordion item and uses ng-content to render its content.',
        inputs: [],
      },
    ],
  };
}
