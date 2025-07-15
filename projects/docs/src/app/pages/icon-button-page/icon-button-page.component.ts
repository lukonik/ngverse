import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
import { ShowCaseIconButtonComponent } from '../../examples/icon-button/show-case-icon-button/show-case-icon-button.component';
const ROOT = 'icon-button';

@Component({
  selector: 'doc-icon-button-page',
  imports: [
    BlueprintPageComponent,
    ShowCaseComponent,
    ShowCaseComponent,
    ApiInfoComponent,
    SourceTreeComponent,
    CommandInstallationComponent,
    ShowCaseIconButtonComponent,
  ],
  templateUrl: './icon-button-page.component.html',
  styleUrl: './icon-button-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonPageComponent {
  sourceTreeBuilder = inject(SourceTreeBuilder);
  sourceTree: SourceTreeFolder[] = [
    {
      name: ROOT,
      files: [...this.sourceTreeBuilder.fullComponent(ROOT, ROOT)],
      hideName: true,
    },
  ];

  apiInfo: ApiInfo = {
    ariaDescription:
      'The Icon Button component uses the native <button> element as its host, making all accessibility features readily available.',
    entities: [
      {
        name: 'IconButtonComponent',
        type: 'component',
        selector: 'button[appIconButton]',
        description:
          'appButton is used with native button element, so all native input attributes can be used',
        inputs: [
          {
            name: 'color',
            type: 'primary | secondary | danger | success',
            description: "Defines the button's color type",
            default: 'primary',
          },
          {
            name: 'disabled',
            type: 'boolean',
            description: 'disables the button',
            default: 'false',
          },
          {
            name: 'loading',
            type: 'boolean',
            description:
              'adds spinner on the button. The button will not emit any event while loading is true',
            default: 'false',
          },
        ],
      },
    ],
  };
}
