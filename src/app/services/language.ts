import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class Language {
  private cookieService = inject(SsrCookieService);
  private translateService = inject(TranslateService);

  readonly currentLang = signal('');

  changeLanguage(lang: string): void {
    this.currentLang.set(lang);
    this.cookieService.set('lang', lang);
    this.translateService.use(lang);
  }
}
