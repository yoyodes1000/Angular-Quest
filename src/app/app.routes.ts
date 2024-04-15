import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesComponent } from './directives/directives.component';

export const routes: Routes = [
    { path: 'user', component: UserProfileComponent},
    { path: 'directives', component: DirectivesComponent}
];
