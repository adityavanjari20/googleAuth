import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyModel } from 'src/app/company-model';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-add-stocks',
  templateUrl: './add-stocks.component.html',
  styleUrls: ['./add-stocks.component.css']
})
export class AddStocksComponent implements OnInit {

  company: CompanyModel = new CompanyModel();
  constructor(private getDataService: GetDataService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.saveCompany();
   
  }

  checkValid(open_rate,close_rate,least_rate,peak_rate,year_low,year_high,p_e_ratio,market_cap,volume,current_rate)
    {
        if(open_rate.errors ||close_rate.errors ||least_rate.errors ||peak_rate.errors ||year_low.errors||year_high.errors ||p_e_ratio.errors ||market_cap.errors ||volume.errors ||current_rate.errors)
            return true;
        else
            return false;
    }


  saveCompany() {
    
    this.getDataService.addCompany(this.company).subscribe(data => {
      if (data.status === 'success') {
        this.route.navigate(['admin']);
      }else{
        console.log(data+"not working");
        
      }
    }

    )
  }
  gotoBack()
  {
    this.route.navigate(['admin']);
  }
}
