import { Component, inject } from '@angular/core';
import {
  ApiInfo,
  ApiInfoComponent,
} from '../../blueprint/api-info/api-info.component';
import { BlueprintPageComponent } from '../../blueprint/blueprint-page/blueprint-page.component';
import { CommandInstallationComponent } from '../../blueprint/command-installation/command-installation.component';
import { ShowCaseComponent } from '../../blueprint/show-case/show-case.component';
import {
  SourceTreeBuilder,
  SourceTreeFolder,
} from '../../blueprint/source-tree/source-tree-builder';
import { SourceTreeComponent } from '../../blueprint/source-tree/source-tree.component';
import { ShowCaseAccordionComponent } from '../../examples/accordion/show-case-accordion/show-case-accordion.component';

const ROOT = 'accordion';

@Component({
  selector: 'doc-accordion-page',
  imports: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseComponent,
    ApiInfoComponent,
    SourceTreeComponent,
    ShowCaseAccordionComponent,
    CommandInstallationComponent,
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
      ],
      hideName: true,
    },
  ];

  apiInfo: ApiInfo = {
    reliesOn: 'https://angularprimitives.com/primitives/accordion',
    entities: [
      {
        name: 'AccordionComponent',
        selector: 'app-accordion',
        type: 'component',
        description: 'The main component, that includes accordion-items',
        inputs: [
          {
            name: 'type',
            type: "'single' | 'multiple'",
            description: 'The type of the accordion',
            default: 'single',
          },
          {
            name: 'collapsible',
            type: 'boolean',
            default: 'false',
            description: 'Whether the accordion is collapsible',
          },
          {
            name: 'value',
            type: 'T | T[] | null',
            description:
              'The value of the accordion, can be a single value or an array of values',
            default: 'null',
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Whether the accordion is disabled',
            default: 'false',
          },
          {
            name: 'orientation',
            type: "'horizontal' | 'vertical'",
            description: 'The orientation of the accordion',
            default: "'vertical'",
          },
        ],
        outputs: [
          {
            name: 'valueChange',
            value: 'T | T[] | null',
            description: 'Emitted when the value of the accordion changes',
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
            name: 'disabled',
            type: 'boolean',
            description: 'disables accordion-item',
            default: 'false',
          },
          {
            name: 'value',
            type: 'boolean',
            description: 'expands the accordion-item',
            default: 'false',
          },
        ],
      },
      {
        name: 'AccordionContentComponent',
        selector: 'app-accordion-content',
        type: 'component',
        description: 'The content of accordion-item',
      },
      {
        name: 'AccordionHeaderComponent',
        selector: 'app-accordion-header',
        type: 'component',
        description: 'The header of accordion-item',
      },
    ],
  };
}
