import { Component } from '@angular/core';
import { Cocktail } from '../../models/classes/cocktail';
import { CocktailServiceService } from '../../shared/cocktail-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

  cocktails: Cocktail[] = [];

  constructor (private service: CocktailServiceService) {
    this.cocktails = this.service.getCocktails();
  }


}
