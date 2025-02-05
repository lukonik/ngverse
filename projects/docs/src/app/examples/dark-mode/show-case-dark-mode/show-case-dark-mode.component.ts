import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DarkModeToggleComponent } from 'ng-verse/dark-mode/dark-mode-toggle/dark-mode-toggle.component';
import { DarkModeService } from 'ng-verse/dark-mode/dark-mode.service';

@Component({
  selector: 'doc-show-case-dark-mode',
  imports: [DarkModeToggleComponent],
  templateUrl: './show-case-dark-mode.component.html',
  styleUrl: './show-case-dark-mode.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseDarkModeComponent {
  private readonly darkModeService = inject(DarkModeService);

  isDarkMode = this.darkModeService.darkMode;
}
