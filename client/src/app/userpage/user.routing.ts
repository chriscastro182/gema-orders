import { Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { AuthGuard } from 'app/auth.guard';
import { UsersComponent } from './users/users.component';


export const UserRoutes: Routes = [{
    path: '',
    children: [{
        path: 'user/user',
        component: UserComponent,
        canActivate: [AuthGuard]
    },{
        path: 'user/users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    }]
}];
