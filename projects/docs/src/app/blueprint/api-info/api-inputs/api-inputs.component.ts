import { Component, input } from '@angular/core';

interface ApiInputType {
  name: string;
  type: string;
  description: string;
  default?: string;
}

interface ApiMethodType {
  name: string;
  returnType: string;
  description: string;
  params: ApiInputType[];
}

export const VOID_API_RETURN_TYPE = 'void';

export const EMPTY_API_INPUT_DEFAULT_VALUE = '--';

export const AUTO_GENERATED_API_DEFAULT_VALUE = 'Auto Generated';

export interface ApiEntity {
  name: string;
  inputs?: ApiInputType[];
  methods?: ApiMethodType[];
  description?: string;
  type?: 'component' | 'directive' | 'service';
  selector?: string;
}

@Component({
  selector: 'doc-api-inputs',
  imports: [],
  templateUrl: './api-inputs.component.html',
  styleUrl: './api-inputs.component.scss',
})
export class ApiInputsComponent {
  apiInputs = input.required<ApiEntity[]>();
}
