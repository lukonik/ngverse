import { Component, inject } from '@angular/core';
import {
  ApiInfo,
  ApiInfoComponent,
} from '../../blueprint/api-info/api-info.component';
import { BlueprintPageComponent } from '../../blueprint/blueprint-page/blueprint-page.component';
import { CommandInstallationComponent } from '../../blueprint/command-installation/command-installation.component';
import { ExampleItemComponent } from '../../blueprint/examples/example-item/example-item.component';
import { ExamplesComponent } from '../../blueprint/examples/examples.component';
import { ImplementationComponent } from '../../blueprint/implementation/implementation.component';
import { PreviewComponent } from '../../blueprint/preview/preview.component';
import {
  SourceTreeBuilder,
  SourceTreeFolder,
} from '../../blueprint/source-tree/source-tree-builder';
import { SourceTreeComponent } from '../../blueprint/source-tree/source-tree.component';
import { ExampleButtonDefaultComponent } from '../../examples/button/example-button-default.component';
import { ExampleButtonDestructiveComponent } from '../../examples/button/example-button-destructive.component';
import { ExampleButtonGhostComponent } from '../../examples/button/example-button-ghost.component';
import { ExampleButtonIconComponent } from '../../examples/button/example-button-icon.component';
import { ExampleButtonLinkComponent } from '../../examples/button/example-button-link.component';
import { ExampleButtonLoadingComponent } from '../../examples/button/example-button-loading.component';
import { ExampleButtonOutlineComponent } from '../../examples/button/example-button-outline.component';
import { ExampleButtonSecondaryComponent } from '../../examples/button/example-button-secondary.component';
import { ExampleButtonSizeLgComponent } from '../../examples/button/example-button-size-lg.component';
import { ExampleButtonSizeMdComponent } from '../../examples/button/example-button-size-md.component';
import { ExampleButtonSizeSmComponent } from '../../examples/button/example-button-size-sm.component';
import { ExampleButtonSizeXlComponent } from '../../examples/button/example-button-size-xl.component';
import { ExampleButtonWithIconComponent } from '../../examples/button/example-button-with-icon.component';
import { PreviewButtonComponent } from '../../examples/button/preview-button.component';
const ROOT = 'button';
@Component({
  selector: 'doc-button-page',
  imports: [
    BlueprintPageComponent,
    ApiInfoComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleButtonDefaultComponent,
    ExampleButtonSecondaryComponent,
    ExampleButtonDestructiveComponent,
    ExampleButtonOutlineComponent,
    ExampleButtonGhostComponent,
    ExampleButtonLinkComponent,
    ExampleButtonIconComponent,
    ExampleButtonWithIconComponent,
    ExampleButtonLoadingComponent,
    ExampleButtonSizeSmComponent,
    ExampleButtonSizeMdComponent,
    ExampleButtonSizeLgComponent,
    ExampleButtonSizeXlComponent,
    PreviewComponent,
    PreviewButtonComponent,
    ImplementationComponent,
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
