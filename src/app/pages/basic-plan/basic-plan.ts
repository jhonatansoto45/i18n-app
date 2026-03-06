import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelector } from '../../components/language-selector/language-selector';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-basic-plan',
  imports: [RouterLink, LanguageSelector, TranslatePipe],
  templateUrl: './basic-plan.html',
})
export default class BasicPlan {}
