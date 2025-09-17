import { DatepickerComponent } from '@/ui/datepicker/datepicker/datepicker.component';
import { provideDpDayjsDateAdapter } from '@/ui/datepicker/dayjs/dayjs-date.adapter.token';
import { Component, inject } from '@angular/core';
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
import { ExampleDatepickerDisabledComponent } from '../../examples/datepicker/example-datepicker-disabled.component';
import { ExampleDatepickerMinMaxComponent } from '../../examples/datepicker/example-datepicker-min-max.component';
import { ExampleDatepickerRangeComponent } from '../../examples/datepicker/example-datepicker-range.component';
import { ExampleDatepickerSingleComponent } from '../../examples/datepicker/example-datepicker-single.component';
import { PreviewDatepickerComponent } from '../../examples/datepicker/preview-datepicker.component';

const ROOT = 'datepicker';

@Component({
  selector: 'doc-datepicker-page',
  imports: [
    BlueprintPageComponent,
    CommandInstallationComponent,
    SourceTreeComponent,
    ApiInfoComponent,
    PreviewComponent,
    PreviewDatepickerComponent,
    ExamplesComponent,
    ExampleItemComponent,
    ExampleDatepickerSingleComponent,
    ExampleDatepickerRangeComponent,
    ExampleDatepickerMinMaxComponent,
    ExampleDatepickerDisabledComponent,
    DatepickerComponent,
  ],
  templateUrl: './datepicker-page.component.html',
  styleUrl: './datepicker-page.component.css',
  providers: [provideDpDayjsDateAdapter()],
})
export class DatepickerPageComponent {
  private readonly sourceTreeBuilder = inject(SourceTreeBuilder);

  readonly sourceTree: SourceTreeFolder[] = [
    {
      name: ROOT,
      files: [
        ...this.sourceTreeBuilder.fullComponent(
          'datepicker',
          `${ROOT}/datepicker`
        ),
        ...this.sourceTreeBuilder.fullComponent('calendar', `${ROOT}/calendar`),
        ...this.sourceTreeBuilder.fullComponent('day-view', `${ROOT}/day-view`),
        ...this.sourceTreeBuilder.fullComponent(
          'month-view',
          `${ROOT}/month-view`
        ),
        ...this.sourceTreeBuilder.fullComponent(
          'year-view',
          `${ROOT}/year-view`
        ),
      ],
      hideName: true,
    },
    this.sourceTreeBuilder.folder(
      'adapter',
      `${ROOT}/adapter`,
      (adapterRoot) => [
        this.sourceTreeBuilder.file('date.adapter', adapterRoot),
        this.sourceTreeBuilder.file('date.token', adapterRoot),
      ]
    ),
    this.sourceTreeBuilder.folder('dayjs', `${ROOT}/dayjs`, (dayjsRoot) => [
      this.sourceTreeBuilder.file('dayjs-date.adapter', dayjsRoot),
      this.sourceTreeBuilder.file('dayjs-date.adapter.token', dayjsRoot),
    ]),
    this.sourceTreeBuilder.folder('types', `${ROOT}/types`, (typesRoot) => [
      this.sourceTreeBuilder.file('date-range', typesRoot),
      this.sourceTreeBuilder.file('selection-mode', typesRoot),
      this.sourceTreeBuilder.file('week-start', typesRoot),
    ]),
  ];

  readonly apiInfo: ApiInfo = {
    ariaDescription:
      'A standalone calendar input that supports keyboard navigation, date ranges, and custom adapters.',
    entities: [
      {
        name: 'DatepickerComponent',
        type: 'component',
        selector: 'app-datepicker',
        formBindable: true,
        description:
          'Renders an inline calendar for choosing a single date or date range.',
        inputs: [
          {
            name: 'selectionMode',
            type: "'single' | 'range'",
            default: "'single'",
            description:
              'Switches between single date selection and range selection.',
          },
          {
            name: 'minDate',
            type: 'T | null',
            default: 'null',
            description:
              'Sets the earliest selectable value enforced by the active date adapter.',
          },
          {
            name: 'maxDate',
            type: 'T | null',
            default: 'null',
            description:
              'Sets the latest selectable value enforced by the active date adapter.',
          },
          {
            name: 'startOfWeek',
            type: 'DpWeekStart',
            default: '0',
            description:
              'Configures which weekday is rendered in the first column (0 = Sunday).',
          },
        ],
      },
    ],
  };
}
