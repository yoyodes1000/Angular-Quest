import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { Developer } from '../models/developer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent,
    CommonModule,
    SkillComponent,
  ],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {
  developer : Developer = {
    firstName : "Yoyo",
    lastName : "Pimpoye",
    age : 40,
    gender : "Masculin",
    bio : "Le bateau coule normalement",
    skill : [
      {
        name : "PHP",
        logo : "https://image.tmdb.org/t/p/original/7mPAXa0c0V9T596qOQi74C0e0le.jpg",
        site : "https://www.php.net/"
      },
      {
        name : "Javascript",
        logo : "https://w.notrecinema.com/images/usercontent/star/ron-jeremy-photo_159094_48358.jpg",
        site : "https://developer.mozilla.org/fr/docs/Web/JavaScript"
      }
    ],
  }
}
