import { Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { AuthGuard } from 'app/auth.guard';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { TechniciansComponent } from './technicians/technicians.component';
import { AdminGuard } from 'app/admin.guard';


export const UserRoutes: Routes = [{
    path: '',
    children: [{
        path: 'user/user',
        component: UserComponent,
        canActivate: [AuthGuard]
    },{
        path: 'user/users',
        component: UsersComponent,
        canActivate: [AuthGuard, AdminGuard]
    },{
        path: 'user/clients',
        component: ClientsComponent,
        canActivate: [AuthGuard, AdminGuard]
    },{
        path: 'user/technicans',
        component: TechniciansComponent,
        canActivate: [AuthGuard, AdminGuard]
    }]
}];
