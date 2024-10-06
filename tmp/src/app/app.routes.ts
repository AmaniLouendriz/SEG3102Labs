import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

const usersRoutes: Routes = [
    {path: ':id',component: UserComponent}
]

export const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'users', component: UsersComponent,
        children: usersRoutes
     },
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: '**',component: HomeComponent}
];
