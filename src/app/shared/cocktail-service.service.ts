import { Injectable } from '@angular/core';
import { Cocktail } from '../models/classes/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  cocktails: Cocktail[] = [new Cocktail("smooth criminal", 9.99, "https://www.tables-auberges.com/storage/uploads/2022/04/AdobeStock_77284076-2-1024x683.jpeg"), 
                                            new Cocktail("Pimpoye", 12.49, "https://www.cocktailmag.fr/media/k2/items/cache/c99e3db826c0f4cc2688a36ce3b60e1a_M.jpg")];
    
  constructor() { }

  getCocktails() {
    return this.cocktails;
  }
}
