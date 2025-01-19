import { Component, inject, input, signal } from '@angular/core';
import { ButtonComponent } from '@ng-verse/button/button.component';
import { FileService } from '../../services/file.service';
import { SourceCodeComponent } from '../source-code/source-code.component';
import {
  SOURCE_FILE_EXTENSION_TYPE,
  SourceTreeFile,
  SourceTreeFolder,
} from './source-tree-builder';
import { SourceTreeSelectComponent } from './source-tree-select/source-tree-select.component';

@Component({
  selector: 'doc-source-tree',
  imports: [SourceCodeComponent, SourceTreeSelectComponent, ButtonComponent],
  templateUrl: './source-tree.component.html',
  styleUrl: './source-tree.component.scss',
})
export class SourceTreeComponent {
  fileService = inject(FileService);

  files = ['html', 'css', 'js', 'spec'];

  code = signal<string>('');

  language = signal<SOURCE_FILE_EXTENSION_TYPE>('ts');

  sourceTree = input.required<SourceTreeFolder[]>();

  name = input.required<string>();

  fileSelected(file: SourceTreeFile) {
    this.language.set(file.language === 'spec.ts' ? 'ts' : file.language);
    this.fileService.getFile(file.path).subscribe((data) => {
      this.code.set(data);
    });
  }

  download() {
    this.fileService.downloadSourceTree(this.name(), this.sourceTree());
  }
}
