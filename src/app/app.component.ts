import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CreateOnomatopiaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= "Pimpoye";
  onomatopiaList: string[] = ["ba", "be", "bi", "bou"];

  onReceiveOnomatopia(event: string): void {
    this.onomatopiaList.push(event);
    console.log(this.onomatopiaList);
  }
}
