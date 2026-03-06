import { inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class Language {
  private cookieService = inject(SsrCookieService);

  changeLanguage(lang: string): void {
    console.log(lang);
    this.cookieService.set('lang', lang);

    //TODO: Cambio de idioma
  }
}
