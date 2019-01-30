import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from "rxjs";
import {Employee} from "../models/Employee";
import {SpinnerService} from "../services/SpinnerService";
import {MessageService} from "../services/MessageService";
import {EmployeeService} from "../services/EmployeeService";

@Component({
  selector: 'app-user',
  templateUrl: '../components/user/user.component.html',
  styleUrls: ['../components/user/user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptionAction: Subscription;
  employees: Employee[] = [];

  dataSource = new MatTableDataSource(this.employees);
  displayedColumns = ['id', 'firstName', 'lastName','userGroup', 'position', 'departament', 'defaultWorkingRoom', 'keys'];

  constructor(private spinnerService: SpinnerService,
              private messageService: MessageService,
              private employeeService: EmployeeService) {
    this.messageService.listen().subscribe((event) => {
      if (event == 'users') {
        this.loadAllEmployees();
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

  loadAllEmployees() {
    this.subscriptionAction = this.employeeService.getAllEmployees().subscribe(employees => {
      this.dataSource.data = employees;
      var events = document.getElementById('users');
      events.style.display = 'block';
      if (this.spinnerService.isShowing()) {
        this.spinnerService.hide();
      }
    });

  }

}
