import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from "rxjs";
import {Employee} from "../../models/Employee";
import {SpinnerService} from "../../services/SpinnerService";
import {MessageService} from "../../services/MessageService";
import {EmployeeService} from "../../services/EmployeeService";
import {Report} from "../../models/Report";
import {ReportService} from "../../services/ReportService";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptionAction: Subscription;
  reports: Report[] = [];

  dataSource = new MatTableDataSource(this.reports);
  displayedColumns = ['id', 'firstName', 'lastName', 'departament', 'position', 'month', 'workedHours', 'moves'];

  constructor(private spinnerService: SpinnerService,
              private messageService: MessageService,
              private reportService: ReportService) {
    this.messageService.listen().subscribe((event) => {
      if (event == 'reports') {
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
    this.subscriptionAction = this.reportService.getAllReports().subscribe(reports => {
      this.dataSource.data = reports;
      var events = document.getElementById('reports');
      events.style.display = 'block';
      if (this.spinnerService.isShowing()) {
        this.spinnerService.hide();
      }
    });

  }

}
