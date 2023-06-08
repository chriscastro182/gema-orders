import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';
import { UsersComponent } from './users/users.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
    ],
    declarations: [UserComponent, UsersComponent]
})

export class UserModule {}
