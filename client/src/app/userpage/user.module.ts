import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { TechniciansComponent } from './technicians/technicians.component';
import { AddClientModalComponent } from './clients/add-client-modal/add-client-modal.component';
import { DeleteClientModalComponent } from './clients/delete-client-modal/delete-client-modal.component';
import { AddTechniciansModalComponent } from './technicians/add-technicians-modal/add-technicians-modal.component';
import { DeleteTechniciansModalComponent } from './technicians/delete-technicians-modal/delete-technicians-modal.component';
import { AddUsersModalComponent } from './users/add-users-modal/add-users-modal.component';
import { DeleteUsersModalComponent } from './users/delete-users-modal/delete-users-modal.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
    ],
    declarations: [UserComponent, UsersComponent, ClientsComponent, TechniciansComponent, AddClientModalComponent, DeleteClientModalComponent, AddTechniciansModalComponent, DeleteTechniciansModalComponent, AddUsersModalComponent, DeleteUsersModalComponent]
})

export class UserModule {}
