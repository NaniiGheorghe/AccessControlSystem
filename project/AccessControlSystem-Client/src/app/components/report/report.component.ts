import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {ReportDataSource} from './report-datasource';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ReportDataSource;
  public reportSearchKey: string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'departament', 'position', 'month', 'workedHours', 'moves'];

  ngOnInit() {
    this.dataSource = new ReportDataSource(this.paginator, this.sort);
  }
}
