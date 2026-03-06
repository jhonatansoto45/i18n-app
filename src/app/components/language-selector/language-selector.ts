import { Component, inject, signal } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.html',
})
export class LanguageSelector {
  private languageService = inject(Language);

  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.languageService.changeLanguage(lang);
  }
}
