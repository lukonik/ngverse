import { CardComponent } from '@/ui/card/card.component';
import { TabGroupComponent } from '@/ui/tab/tab-group.component';
import { TabPanelComponent } from '@/ui/tab/tab-panel/tab-panel.component';
import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FileService } from '../../services/file.service';
import { BlueprintPageComponent } from '../blueprint-page/blueprint-page.component';
import { SourceCodeComponent } from '../source-code/source-code.component';

@Component({
  selector: 'doc-preview',
  imports: [
    CardComponent,
    TabGroupComponent,
    TabPanelComponent,
    UpperCasePipe,
    SourceCodeComponent,
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent {
  tabs = ['Code'];
  fileService = inject(FileService);
  code = signal<string>('');
  blueprintPage = inject(BlueprintPageComponent);

  tabChanged($event: number) {
    if ($event !== 0) {
      this.fileService
        .getFile(
          `examples/${this.blueprintPage.key()}/preview-${this.blueprintPage.key()}.component.ts`
        )
        .subscribe((response) => {
          this.code.set(response);
        });
    }
  }
}
