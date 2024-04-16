import { Component, Input } from '@angular/core';
import { DeveloperComponent } from '../developer/developer.component';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [DeveloperComponent],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() skill: Skill = {
    name: "",
    logo: "",
    site: ""
  }
}