import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SpinnerService} from "../../services/SpinnerService";
import {MessageService} from "../../services/MessageService";
import {ActionService} from "../../services/ActionService";
import {Action} from "../../models/Action";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptionAction: Subscription;
  actions: Action[] = [];

  dataSource = new MatTableDataSource(this.actions);
  displayedColumns = ['id', 'employeeName', 'officeRoom', 'direction', 'time'];

  constructor(private spinnerService: SpinnerService,
              private messageService: MessageService,
              private actionService: ActionService) {
    this.messageService.listen().subscribe(() => {
      this.loadAllActions();
    })
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

  loadAllActions() {
    this.subscriptionAction = this.actionService.getAllActions().subscribe(actions => {
      this.dataSource.data = actions;
      var events = document.getElementById('events');
      events.style.display = 'block';
      if (this.spinnerService.isShowing()) {
        this.spinnerService.hide();
      }
    });

  }

}
