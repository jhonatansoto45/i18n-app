import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { Language } from './services/language';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly title = 'i18n-app';

  private cookieService = inject(SsrCookieService);
  private languageService = inject(Language);

  cookieEffect = effect(() => {
    const lang = this.cookieService.check('lang')
      ? this.cookieService.get('lang')
      : 'en';

    console.log({ cookie: lang });

    this.languageService.changeLanguage(lang);
  });
}
