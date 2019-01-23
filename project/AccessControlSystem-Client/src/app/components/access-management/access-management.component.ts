import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MessageService} from "../../services/MessageService";
import {SpinnerService} from "../../services/SpinnerService";
import {ActionService} from "../../services/ActionService";
import {Employee} from "../../models/Employee";
import {Subscription} from "rxjs";
import {EmployeeService} from "../../services/EmployeeService";
import {e} from "@angular/core/src/render3";

@Component({
  selector: 'app-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.css']
})
export class AccessManagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptionAction: Subscription;
  employees: Employee[] = [];

  dataSource = new MatTableDataSource(this.employees);
  displayedColumns = ['id', 'firstName', 'lastName', 'position', 'departament', 'defaultWorkingRoom', 'keys'];

  constructor(private spinnerService: SpinnerService,
              private messageService: MessageService,
              private employeeService: EmployeeService) {
    this.messageService.listen().subscribe((event) => {
      if (event == 'accessManagement') {
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
      var events = document.getElementById('accessManagement');
      events.style.display = 'block';
      if (this.spinnerService.isShowing()) {
        this.spinnerService.hide();
      }
    });

  }

}
