import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-examples',
  imports: [],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesComponent {}
