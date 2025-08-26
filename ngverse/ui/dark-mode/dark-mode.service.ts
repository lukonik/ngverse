import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { afterRenderEffect, inject, Injectable, signal } from '@angular/core';

const DARK_MODE_STORAGE_KEY = 'dark-mode';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private _isEnabled = signal(false);

  isEnabled = this._isEnabled.asReadonly();

  private readonly platform = inject(Platform);
  private readonly document = inject(DOCUMENT);

  private readonly rootHtml = this.document.documentElement;
  private readonly window = this.document.defaultView;

  constructor() {
    this.initialize();

    afterRenderEffect(() => {
      const darkMode = this._isEnabled();
      localStorage.setItem(DARK_MODE_STORAGE_KEY, darkMode + '');
      this.setHtmlDarkModeAttribute(darkMode);
    });
  }

  toggle() {
    this._isEnabled.update((darkMode) => !darkMode);
  }

  enable() {
    this._isEnabled.set(true);
  }
  disable() {
    this._isEnabled.set(false);
  }

  private setHtmlDarkModeAttribute(darkMode: boolean) {
    if (darkMode) {
      this.rootHtml.classList.add('dark');
    } else {
      this.rootHtml.classList.remove('dark');
    }
  }

  private initialize() {
    if (isPlatformBrowser(this.platform)) {
      const storedDarkMode = localStorage.getItem(DARK_MODE_STORAGE_KEY);

      if (storedDarkMode) {
        this._isEnabled.set(coerceBooleanProperty(storedDarkMode));
        return;
      }
      if (
        this.platform.isBrowser &&
        this.window?.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        this._isEnabled.set(true);
        return;
      }

      this._isEnabled.set(false);
    }
  }
}
