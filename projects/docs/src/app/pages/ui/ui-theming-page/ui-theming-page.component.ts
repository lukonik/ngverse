import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { BlogPageComponent } from '../../../blog/blog-page/blog-page.component';
import { SourceCodeComponent } from '../../../blueprint/source-code/source-code.component';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'doc-ui-theming-page',
  imports: [BlogPageComponent, SourceCodeComponent],
  templateUrl: './ui-theming-page.component.html',
  styleUrl: './ui-theming-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiThemingPageComponent implements OnInit {
  globalsCode = signal('');
  fileService = inject(FileService);

  ngOnInit(): void {
    this.fileService.getFile('ngverse/ngverse.css').subscribe((data) => {
      this.globalsCode.set(data);
    });
  }
}
