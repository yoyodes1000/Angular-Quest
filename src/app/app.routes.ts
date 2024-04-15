import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesComponent } from './directives/directives.component';
import { SignUpComponent } from './sign-up/sign-up.component';


export const routes: Routes = [
    { path: 'user', component: UserProfileComponent},
    { path: 'directives', component: DirectivesComponent},
    { path: 'form', component: SignUpComponent}
];
