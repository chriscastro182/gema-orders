import { Component, OnInit } from '@angular/core';
import { User } from 'app/Models/User.model';
import { AuthService } from 'app/services/auth.service';
import { UsersService } from 'app/services/users.service';

@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{ 

    user: User;

    constructor(private userService: UsersService, private authService: AuthService){}
    async ngOnInit() {
        const userId = this.authService.getUserId();
        console.log(userId);
        
        await this.userService.getUserById(userId).subscribe(
            res => {
                //console.log(res)
                this.user = res as User;
            },
            err => console.error(err)
           );
    }

}
