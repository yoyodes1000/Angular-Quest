import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {
  devLastname : string = "";
  devFirstname : string = "";
  devAge : number = 0;
  devGender : string = "";
  devBio : string = "";
  devSkill : string[] = [];
}
