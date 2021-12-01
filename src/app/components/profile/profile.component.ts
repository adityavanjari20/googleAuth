import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
switchToPage=true;
switchTowithdraw=true;
amount;

  constructor( 
    private getDataservice: GetDataService, 
    private _Activatedroute:ActivatedRoute,
    private toastr: ToastrService) { }
  userDetails;
  ngOnInit() {
    this.switchToPage=false;
    this.getDataservice.getUserDeatils(localStorage.getItem('username'))
    .subscribe(
      data => {
          this.userDetails = data;
      },
      error => { }
    )
  }
  switchTo(){
    this.switchToPage=true;
    if(!isNaN(Number(this.amount))){
    this.addfund();}
  }
  switchTowi(){
    this.switchToPage=true;
    if(!isNaN(Number(this.amount))){
    this.withdraw();}
  }

  addfund() 
  {
    this.getDataservice.addfund( localStorage.getItem('username'), this.amount)
      .subscribe(
        data => {console.log(data)
          if(data.status=="success"){
	    alert("The amount successfully added"); 
      window.location.reload();
     }        
          else
            this.toastr.error("",'error',{positionClass:"toast-bottom-center"});
        },
        error => {
            console.log(error)
        }
      )
  }
  withdraw() 
  {
    this.getDataservice.withdraw( localStorage.getItem('username'), this.amount)
      .subscribe(
        data => {console.log(data)
          if(data.status=="success"){
	    alert("The amount successfully withdraw");
      window.location.reload();
     }        
          else
            this.toastr.error("",'error',{positionClass:"toast-bottom-center"});
        },
        error => {
            console.log(error)
        }
      )
  }
}
