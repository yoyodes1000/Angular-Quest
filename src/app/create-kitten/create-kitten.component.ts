import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Kitten } from '../models/classes/kitten.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {

  @Output()
  emitKitten: EventEmitter<Kitten> = new EventEmitter();

  kitten: Kitten = new Kitten("", "", "https://lemagduchat.ouest-france.fr/images/dossiers/2023-06/chat-cinema-061213.jpg", new Date());

  constructor() {}

  onSubmit() {
    this.emitKitten.emit(this.kitten);
    this.kitten = new Kitten("", "", "https://lemagduchat.ouest-france.fr/images/dossiers/2023-06/chat-cinema-061213.jpg", new Date());
    }

}
