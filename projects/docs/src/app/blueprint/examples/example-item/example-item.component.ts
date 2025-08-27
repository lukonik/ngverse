import { CardComponent } from '@/ui/card/card.component';
import { TabGroupComponent } from '@/ui/tab/tab-group.component';
import { TabComponent } from '@/ui/tab/tab.component';
import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { FileService } from '../../../services/file.service';
import { BlueprintPageComponent } from '../../blueprint-page/blueprint-page.component';
import { SourceCodeComponent } from '../../source-code/source-code.component';
import { ExamplesComponent } from '../examples.component';

@Component({
  selector: 'doc-example-item',
  imports: [
    CardComponent,
    TabGroupComponent,
    TabComponent,
    UpperCasePipe,
    SourceCodeComponent,
  ],
  templateUrl: './example-item.component.html',
  styleUrl: './example-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleItemComponent {
  examples = inject(ExamplesComponent);
  tabs = ['Code'];
  fileService = inject(FileService);
  code = signal<string>('');
  name = input.required<string>();
  blueprintPage = inject(BlueprintPageComponent);
  label = input<string>();

  displayName = computed(() => (this.label() ? this.label() : this.name()));

  tabChanged($event: number) {
    if ($event !== 0) {
      this.fileService
        .getFile(
          `examples/${this.blueprintPage.key()}/example-${this.blueprintPage.key()}-${this.name()}.component.ts`
        )
        .subscribe((response) => {
          this.code.set(response);
        });
    }
  }
}
