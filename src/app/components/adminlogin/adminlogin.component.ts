import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  emailId='abc@atyeti.com';
  Password='abc@123';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkAdminLogin(mail,pass)
  {
    console.log(mail);
    if(this.emailId==mail)
    {
      if(this.Password==pass)
      {
          this.router.navigate(['/admin']);
      }
      else
      {
        console.log("invalid password");
      }
    }
    else
    {
      console.log("admin not found");
    }
  }

  checkValidLogin(mail,pass)
    {
        if(mail.errors || pass.errors)
            return true;
        else
            return false;
    }

}
