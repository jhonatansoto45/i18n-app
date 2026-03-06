import { Component, computed, inject, signal } from '@angular/core';
import { Language } from '../../services/language';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  imports: [TranslatePipe],
  templateUrl: './language-selector.html',
})
export class LanguageSelector {
  private languageService = inject(Language);

  readonly languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  readonly currentLang = computed(() => this.languageService.currentLang());

  changeLanguage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.languageService.changeLanguage(lang);
  }
}
