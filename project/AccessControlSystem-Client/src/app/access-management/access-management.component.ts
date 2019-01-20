import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AccessManagementDataSource } from './access-management-datasource';

@Component({
  selector: 'app-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.css']
})
export class AccessManagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AccessManagementDataSource;
  public emplyeeSearchKey: string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'position', 'departament', 'defaultWorkingRoom', 'keyType'];

  ngOnInit() {
    this.dataSource = new AccessManagementDataSource(this.paginator, this.sort);
  }
}
