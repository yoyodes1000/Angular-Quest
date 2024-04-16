import { Component } from '@angular/core';
import { DeveloperComponent } from '../developer/developer.component';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [DeveloperComponent],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @input()
  skillName : string = "";

  @input()
  skillLogo : string = "";

  @input
  skillSite : string = "";
}
