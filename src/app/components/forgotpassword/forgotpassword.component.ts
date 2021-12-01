import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authenticate.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  username = '';
  mailid='';
  invalidLogin = false;
  invalidUser = false;
  switchToLoginPage = true;
  errorMessage = '';
    password: '';
  constructor(private router: Router,private loginservice: AuthenticationService,private toastr: ToastrService) { }

  ngOnInit() {
  
  }

  checkValidLogin(user,mail)
  {
      if(mail.errors || user.errors)
          return true;
      else
          return false;
  }
  checkLogin(user,mail) 
    {
        if(mail.errors || user.errors){
            return;
        }
        
        this.loginservice.forgot(this.username,this.mailid,this.password) 
        .subscribe( 
            data  => { console.log(data)
                        if(data.status==='success')
                        {   
                            this.invalidLogin = false;
                            this.toastr.info('Successully updated');
                            this.router.navigate(['home'])
                        }
                        else
                        {
                            this.errorMessage = "Invalid Credentials";
                            this.invalidLogin = true
                        }
                    },
            error => { 
                        if(error.error.message==="Incorrect credentials" || error.error.message==="User doesn't exist")
                            this.errorMessage = error.error.message;
                        this.invalidLogin = true
                    }
            );     
    }

}
