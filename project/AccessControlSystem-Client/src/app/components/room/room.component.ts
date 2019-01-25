import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from "rxjs";
import {Report} from "../../models/Report";
import {SpinnerService} from "../../services/SpinnerService";
import {MessageService} from "../../services/MessageService";
import {ReportService} from "../../services/ReportService";
import {Room} from "../../models/Room";
import {RoomService} from "../../services/RoomService";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptionAction: Subscription;
  reports: Room[] = [];

  dataSource = new MatTableDataSource(this.reports);
  displayedColumns = ['id', 'name', 'doorLocks'];

  constructor(private spinnerService: SpinnerService,
              private messageService: MessageService,
              private roomService: RoomService) {
    this.messageService.listen().subscribe((event) => {
      if (event == 'rooms') {
        this.loadAllReports();
      }
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadAllReports() {
    this.subscriptionAction = this.roomService.getAllRooms().subscribe(room => {
      this.dataSource.data = room;
      var events = document.getElementById('rooms');
      events.style.display = 'block';
      if (this.spinnerService.isShowing()) {
        this.spinnerService.hide();
      }
    });
  }

}
