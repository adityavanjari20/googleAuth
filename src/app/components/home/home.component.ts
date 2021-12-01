import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetDataService } from '../../services/get-data.service';
import { AuthenticationService } from '../../services/authenticate.service'
import { Company } from 'src/app/company';
import { interval, Observable } from "rxjs";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companyes: Observable<Company[]>;
  name:any;
  num:number;
  max_price:number;
  min_price:number;
  amount:number;
  data:number=Math.floor(Math.random() * 10);
 

@Input()git
  companyDetails;
  private _Activatedroute: any;
  companyId: any;
  
  constructor(private router: Router, 
              private getDataservice: GetDataService, 
              private toastr: ToastrService,
              private loginService:AuthenticationService) {}
              watchList;
  ngOnInit() {
    // const obs$=interval(2000);
    // obs$.subscribe((d)=>{
    //     this.data=this.getDataservice.getRandomNum(this.max_price,this.min_price);
    //     // this.getAmount(this.data,this.quantity);
    //   });
    this.loadData();
    this.reloadData();
  }


  reloadData() {
    this.companyes = this.getDataservice.getAllCompany();
  }

  loadData()
  {
    this.getDataservice.getWatchList(localStorage.getItem('username'))
    .subscribe(
      data => {
        if(data.length)
          this.watchList = data;
          // this.max_price=this.companyDetails.year_high;
          // this.min_price=this.companyDetails.year_low;
      },
      error => {
          console.log(error)
      }
    )
  }

  addToWatchlist(companyId, companyName)
  {
    this.getDataservice.addWatchList(localStorage.getItem('username'),companyId)
    .subscribe(
      data => {console.log(data)
        if(data.status=='company exist')
          this.toastr.error('Already Exsist to your watchlist', companyName,{positionClass:"toast-bottom-center"});
        else
          this.toastr.info('Successfully added to your Watch list', companyName,{positionClass:"toast-bottom-center"});
      },
      error => {
          console.log(error)
      }
    )
  }

  goToBuyPage(companyId)
  {    
    this.router.navigate(['buy',companyId])
  }
  goToDetailedView(companyId)
  {    
    this.router.navigate(['view',companyId])
  }

 
}
