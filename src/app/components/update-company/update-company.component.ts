import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyModel } from 'src/app/company-model';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
id: number;
company:CompanyModel=new CompanyModel();
  constructor(private getdataservice : GetDataService,private route : ActivatedRoute,private router :Router) { }

  ngOnInit() {

    this.id=this.route.snapshot.params['company_id'];
    this.getdataservice.getCompanyById(this.id).subscribe(data =>{
      this.company=data;
      
    },error=>console.log(error));
    
  }

  onSubmit()
  {
    this.getdataservice.updateCompany(this.id,this.company).subscribe(data =>{
      this.gotoadmin();
    },
   
   error => console.error(error));
    
    console.log(this.company);
  }

  gotoadmin()
  {
    this.router.navigate(['/admin']);
  }

}
