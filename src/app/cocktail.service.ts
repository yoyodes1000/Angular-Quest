import { Injectable, inject } from '@angular/core';
import { Cocktail } from './models/cocktail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private http = inject(HttpClient);

  constructor() { }

  getCocktails(): Observable<Cocktail[]> {
    console.log(this.http.get<Cocktail[]>("assets/cocktail.json"));
    return this.http.get<Cocktail[]>("assets/cocktail.json");
  }
}
