import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Kitten } from './models/classes/kitten.class';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListKittenComponent, CreateKittenComponent, UserKittenComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MyFirstApp';

  kittenList : Kitten[] = [];

  auDinerCeSoir: Kitten[] = [];

  catchKitten(event: Kitten) {
    this.kittenList.push(event);
    console.log(this.kittenList, event);
  }

  canardLaque(index: number) {
    this.kittenList.splice(index, 1);
  }

  removeKitten(event: number) {
    const menuKitten: Kitten[] = this.kittenList.splice(event, 1);
    this.auDinerCeSoir.push(menuKitten[0]);
    }
}
