import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, map, switchAll, tap} from "rxjs/operators";
import {SpinnerService} from "../service/spinner.service";

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource(EXAMPLE_DATA);
  displayedColumns = ['id', 'employee', 'officeRoom', 'direction', 'time'];

  constructor(private spinnerService: SpinnerService) {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

// TODO: Replace this with your own data model type
export interface EventTableItem {
  id: number;
  employee: string;
  officeRoom: string;
  direction: string;
  time: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: EventTableItem[] = [
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
  {id: 1, employee: 'Nanii Gheorghe', officeRoom: 'Dev room', direction: 'IN', time: '01-01-2018'},
];

