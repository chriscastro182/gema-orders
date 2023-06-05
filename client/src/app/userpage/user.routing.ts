import { Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { AuthGuard } from 'app/auth.guard';


export const UserRoutes: Routes = [{
    path: '',
    children: [{
        path: 'pages/user',
        component: UserComponent,
        canActivate: [AuthGuard]
    }]
}];
