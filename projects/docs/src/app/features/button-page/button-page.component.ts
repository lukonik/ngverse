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
import { ShowCaseButtonComponent } from '../../examples/button/show-case-button/show-case-button.component';
const ROOT = 'button';
@Component({
  selector: 'doc-button-page',
  imports: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseComponent,
    ApiInfoComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    ShowCaseButtonComponent,
  ],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.css',
})
export class ButtonPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree: SourceTreeFolder[] = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(ROOT, ROOT),
        ...this.sourceTreeBuilder.fullComponent('icon-button', ROOT),
        ...this.sourceTreeBuilder.fullInlineComponent('button-loader', ROOT),
      ],
      hideName: true,
    },
  ];

  apiInfo: ApiInfo = {
    ariaDescription:
      'The Button component uses the native <button> element as its host, making all accessibility features readily available.',
    entities: [
      {
        name: 'ButtonComponent',
        type: 'component',
        selector: 'button[appButton]',
        description:
          'appButton is used with native button element, so all native input attributes can be used',
        inputs: [
          {
            name: 'variant',
            type: 'default | secondary | destructive | outline | ghost | link | icon | with-icon | loading',
            description: 'Defines the button variant style and behavior',
            default: 'default',
          },
          {
            name: 'size',
            type: 'sm | md | lg | xl | none',
            description: 'Changes the size of the button',
            default: 'md',
          },
          {
            name: 'icon',
            type: 'boolean',
            description:
              'Converts to icon button (circular shape for icon-only buttons)',
            default: 'false',
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Disables the button',
            default: 'false',
          },
          {
            name: 'loading',
            type: 'boolean',
            description:
              'Adds spinner on the button. The button will not emit any event while loading is true',
            default: 'false',
          },
        ],
      },
    ],
  };
}
