import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelector } from '../../components/language-selector/language-selector';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LanguageSelector],
  templateUrl: './products.html',
})
export default class Products {}
