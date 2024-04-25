import { Component, inject } from '@angular/core';
import { Cocktail } from '../models/cocktail';
import { CocktailService } from '../cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss'
})
export class CocktailComponent {
  cocktails: Cocktail[] = [];

  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktailsFromJsonFile: Cocktail[]) => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
}