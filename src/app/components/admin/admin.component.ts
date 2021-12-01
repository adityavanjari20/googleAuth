import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyModel } from 'src/app/company-model';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  company: Observable<CompanyModel[]>;
  constructor(private getDataservice: GetDataService, private router: Router) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.company = this.getDataservice.getAllCompany();
  }

  goToAddcompany() {
    this.router.navigate(['addCompany'])
  }

  deleteCompany(company_id) {
    this.getDataservice.deleteCompany(company_id).subscribe(data => {
      this.router.navigate(['admin']);
      this.loadData();
    }, error => console.log(error)

    )
  }
  updateCompany(company_id : number)
  {
    this.router.navigate(['/updatecompany',company_id]);
  }

  gotoAllClient()
  {
    this.router.navigate(['/getallclient']);
  }
  goToHome()
  {
    this.router.navigate(['/home'])
  }

}
