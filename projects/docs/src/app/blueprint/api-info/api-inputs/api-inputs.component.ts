import { Component, input } from '@angular/core';

interface ApiInputType {
  name: string;
  type: string;
  description: string;
  default?: string;
}

export const EMPTY_API_INPUT_DEFAULT_VALUE = '--';

export const AUTO_GENERATED_API_DEFAULT_VALUE = 'Auto Generated';

export interface ApiInputs {
  name: string;
  inputs: ApiInputType[];
}

@Component({
  selector: 'doc-api-inputs',
  imports: [],
  templateUrl: './api-inputs.component.html',
  styleUrl: './api-inputs.component.scss',
})
export class ApiInputsComponent {
  apiInputs = input.required<ApiInputs[]>();
  name = input('Inputs');
}
