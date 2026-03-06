import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private cookieService = inject(SsrCookieService);
  title = 'i18n-app';

  cookieEffect = effect(() => {
    const lang = this.cookieService.get('lang');
    console.log({
      cookie: lang,
    });
  });
}
