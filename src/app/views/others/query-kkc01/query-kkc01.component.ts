import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

export interface PeriodicElement {
  date: string;
  title: string;
  status: string;
  check: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: '10/08/2565', title: 'Hydrogen',  status: "accept",   check: 'H' },
  { date: '10/08/2565', title: 'Helium',    status: "accept",   check: 'H' },
  { date: '10/08/2565', title: 'Lithium',   status: "draft",    check: 'L' },
  { date: '10/08/2565', title: 'Beryllium', status: "draft",    check: 'Be' },
  { date: '10/08/2565', title: 'Boron',     status: "accept",   check: 'B' },
  { date: '10/08/2565', title: 'Carbon',    status: "draft",    check: 'C' },
  { date: '10/08/2565', title: 'Nitrogen',  status: "accept",   check: 'N' },
  { date: '10/08/2565', title: 'Oxygen',    status: "accept",   check: 'O' },
  { date: '10/08/2565', title: 'Fluorine',  status: "draft",    check: 'F' },
  { date: '10/08/2565', title: 'Neon',      status: "accept",   check: 'Ne' },
];

@Component({
  selector: 'app-query-kkc01',
  templateUrl: './query-kkc01.component.html',
  styleUrls: ['../../../app.component.css']
})
export class QueryKkc01Component implements OnInit {
  displayedColumns: string[] = ['date', 'title', 'status', 'check'];
  dataSource: PeriodicElement[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.dataSource = ELEMENT_DATA;
  }

  ///Function เมื่อกดขอคำร้อง
  goadd(){
    this.router.navigate(['/others/kkc01P01',{}]);
  }

}
