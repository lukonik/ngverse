import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { ButtonComponent } from '../../../../../../ngverse/src/lib/button/button.component';
import { SessionStorageService } from '../../../../../../ngverse/src/lib/session-storage/session-storage.service';
const STORAGE_KEY = 'current-date';

@Component({
  selector: 'doc-show-case-session-storage',
  imports: [ButtonComponent],
  templateUrl: './show-case-session-storage.component.html',
  styleUrl: './show-case-session-storage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCaseSessionStorageComponent implements OnDestroy {
  private sessionStorageService = inject(SessionStorageService);
  dateValue = signal<string | undefined>(undefined);

  store() {
    this.sessionStorageService.setItem(STORAGE_KEY, new Date().toString());
  }

  read() {
    const date = this.sessionStorageService.getItem(STORAGE_KEY);
    if (date) {
      this.dateValue.set(date);
    }
  }

  ngOnDestroy(): void {
    this.sessionStorageService.removeItem(STORAGE_KEY);
  }
}
