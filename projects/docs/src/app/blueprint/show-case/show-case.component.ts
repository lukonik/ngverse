import { CardComponent } from '@/ui/card/card.component';
import { TabGroupComponent } from '@/ui/tab/tab-group/tab-group.component';
import { TabPanelComponent } from '@/ui/tab/tab-panel/tab-panel.component';
import { UpperCasePipe } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { FileService } from '../../services/file.service';
import { SourceCodeComponent } from '../source-code/source-code.component';

@Component({
  selector: 'doc-show-case',
  imports: [
    SourceCodeComponent,
    TabGroupComponent,
    TabPanelComponent,
    UpperCasePipe,
    CardComponent,
  ],
  templateUrl: './show-case.component.html',
  styleUrl: './show-case.component.css',
})
export class ShowCaseComponent {
  tabs = ['html', 'ts', 'css'];
  fileService = inject(FileService);
  code = signal<string>('');
  language = signal<string>('');
  name = input.required<string>();

  tabChanged($event: number) {
    if ($event !== 0) {
      const extension = this.tabs[$event - 1];
      this.language.set(extension);
      this.fileService
        .getFile(
          `examples/${this.name()}/show-case-${this.name()}/show-case-${this.name()}.component.${extension}`
        )
        .subscribe((response) => {
          this.code.set(response);
        });
    }
  }
}
