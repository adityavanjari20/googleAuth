import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetDataService } from 'src/app/services/get-data.service';
import * as XLSX from 'xlsx';
import { Observable } from "rxjs";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  fileName= 'statement.xlsx';
  history: Observable<History[]>;
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
  constructor(private router: Router, private toastr: ToastrService, private getDataservice: GetDataService) { }

  
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.history = this.getDataservice.getHistory(localStorage.getItem('username'));
  }


}
