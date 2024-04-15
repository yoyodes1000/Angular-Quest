import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginForm } from '../models/loginForm.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !');
  }

  newLoginForm: LoginForm = {
    firstname: "",
    lastname: "",
    email: "",
    password : ""
  }
}
