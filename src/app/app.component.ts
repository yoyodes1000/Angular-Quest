import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CocktailComponent } from './cocktail/cocktail.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet, CocktailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFirstApp';
}
