import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.html',
})
export class LanguageSelector {
  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);
}
