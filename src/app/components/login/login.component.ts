import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthenticationService } from '../../services/authenticate.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username = '';
    password = '';
    mailid = '';
    phone = '';
    invalidLogin = false;
    invalidUser = false;
    switchToLoginPage = true;
    errorMessage = '';
    showImage = true;


    constructor(private router: Router, private loginservice: AuthenticationService,
        private authService: SocialAuthService) { }

    checkValidLogin(mail, pass) {
        if (mail.errors || pass.errors)
            return true;
        else
            return false;
    }

    checkValidUser(mail, user, ph, pass) {
        if (mail.errors || user.errors || ph.errors || pass.errors)
            return true;
        else
            return false;
    }



    checkLogin(mail, pass) {

        if (mail.errors || pass.errors) {
            console.log(mail);
            return;
        }
        if (this.mailid == "abc@atyeti.com") {
            if (this.password == 'abc@123') {


                this.router.navigate(['/admin']);



            }
            else {
                console.log("invalid password");
            }
        }
        else {
            this.loginservice.authenticate(this.mailid, this.password)
                .subscribe(
                    data => {
                        if (data.status === 'success') {
                            localStorage.setItem('username', this.mailid);
                            this.invalidLogin = false;

                            this.router.navigate([''])
                        }
                        else {
                            this.errorMessage = "Invalid Credentials";
                            this.invalidLogin = true
                        }
                    },
                    error => {
                        if (error.error.message === "Incorrect credentials" || error.error.message === "User doesn't exist")
                            this.errorMessage = error.error.message;
                        this.invalidLogin = true
                    }
                );
        }

    }

    registerNewUser() {
        this.loginservice.addNewUser(this.mailid, this.username, this.phone, this.password)
            .subscribe(
                data => {
                    this.switchToLoginPage = true;
                    this.password = '';
                    this.invalidUser = false;
                    this.invalidLogin = false;
                    this.switchToLogin();
                },
                error => {
                    console.log(error);
                    if (error.error.message === "User already exists, please check email.")
                        this.errorMessage = "email already exists";
                    else if (error.error.message === "User already exists, please check phone number.")
                        this.errorMessage = "Phone number already exists";

                    this.invalidUser = true;
                }
            );
    }

    switchToRegister() {
        this.switchToLoginPage = false;
        this.showImage = false;
    }

    switchToLogin() {
        this.switchToLoginPage = true;
        this.showImage = true;
    }

    signInHandler(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
            localStorage.setItem('google_auth', JSON.stringify(data));

            this.loginservice.addNewUser(data.email, data.firstName, this.phone, this.password)
                .subscribe(
                    data => {
                        this.switchToLoginPage = true;
                        this.password = '';
                        this.invalidUser = false;
                        this.invalidLogin = false;
                        // this.switchToLogin();

                    }

                );
            localStorage.setItem('username', data.email);
            this.invalidLogin = false;

            this.router.navigate([''])
            //   this.router.navigateByUrl('/dashboard').then();
        });
    }

}