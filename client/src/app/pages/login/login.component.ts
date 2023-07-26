import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';


declare var $:any;


@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
    test : Date = new Date();
    user = {
        email: '',
        password: ''
    }

    constructor(private authService: AuthService, private router: Router) { }

    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit(){
        this.checkFullPageBackgroundImage();

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }

    signup(){
        this.authService.signIn(this.user).subscribe(
            res => {
                
                if (res.token) {
                    console.log(res.userFound)
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('userId', res.userFound._id);
                    localStorage.setItem('username', res.userFound.name +`  `+res.userFound.lastname);
                    this.router.navigate(['/user/user'])
                    
                }
            },
            err => console.error(err)
        )
    }
}
