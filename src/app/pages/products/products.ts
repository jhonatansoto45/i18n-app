import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSelector } from '../../components/language-selector/language-selector';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LanguageSelector, TranslatePipe],
  templateUrl: './products.html',
})
export default class Products {
  fullName = signal('Jhonatan Soto');
}
