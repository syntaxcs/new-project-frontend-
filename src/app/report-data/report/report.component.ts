import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SummaryService } from './../../shared/services/summary.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {
  public rows = [];
  public search = [];
 

  constructor(
    private dialog: MatDialog,
    private summaryservice: SummaryService
  ) { }

  ngOnInit() {
    this.summaryservice.getSummary().subscribe(result => {
      this.rows = result;
      this.search = [...result];
    });
  }
  searchFilter(event) {
    const val = event.target.value;
    const temp = this.search.filter((data) => {
      return (this.dateShow(data.date).indexOf(val) !== -1);
    });
    this.rows = temp;
  }
  dateShow(date) {
    let year = String(Number(String(date).substr(0, 4)) + 543);
    let month = String(date).substr(5, 2);
    let day = String(date).substr(8, 2);
    return day + '/' + month + '/' + year;
  }
 
}