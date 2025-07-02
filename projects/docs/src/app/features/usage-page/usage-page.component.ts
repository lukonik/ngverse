import { Component } from '@angular/core';
import { BlogPageComponent } from '../../blog/blog-page/blog-page.component';
import { ProjectNameComponent } from '../../core/project-name/project-name.component';

@Component({
  selector: 'doc-usage-page',
  imports: [BlogPageComponent, ProjectNameComponent],
  templateUrl: './usage-page.component.html',
  styleUrl: './usage-page.component.css',
})
export class UsagePageComponent {
  configCode = ` "projectType": "application",
  "schematics": {
    "ngverse:add": {
      "path": "ui"
    }
  }`;
}
