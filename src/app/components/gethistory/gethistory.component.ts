import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Clienthistory } from 'src/app/clienthistory';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-gethistory',
  templateUrl: './gethistory.component.html',
  styleUrls: ['./gethistory.component.css']
})
export class GethistoryComponent implements OnInit {
  
email;
  history;
  constructor(private getDataservice: GetDataService, private router: Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {

   
    this._Activatedroute.paramMap.subscribe(params => { 
      this.email = params.get('email'); 
      });
   
      this.reloadData(this.email);
  }

  reloadData(email) {
    this.history = this.getDataservice.getHistory(email);
  }

  goToclients()
  {
    this.router.navigate(['getallclient'])
  }

}
