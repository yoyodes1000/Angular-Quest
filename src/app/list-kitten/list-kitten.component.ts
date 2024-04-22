import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateKittenComponent } from '../create-kitten/create-kitten.component';
import { Kitten } from '../models/classes/kitten.class';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CreateKittenComponent, CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent implements OnInit {


  @Input()
  kittenList : Kitten[] = [];
  
  @Output()
  removeKitten: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    console.log("ca marche???");
  }

  onClick(index: number): void {
    this.removeKitten.emit(index);
  }
}