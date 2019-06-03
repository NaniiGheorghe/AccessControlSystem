import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from "rxjs";
import {User} from "../models/User";
import {SpinnerService} from "../../services/SpinnerService";
import {MessageService} from "../../services/MessageService";
import {UserService} from "../../services/UserService";
import {SelectionModel} from "@angular/cdk/collections";
import {ToastrService} from "ngx-toastr";

import {DialogOverviewCreateEmployee} from "./create-employee/dialog-overview-create-employee";


export interface Role {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptionAction: Subscription;
  employees: User[] = [];
  selection = new SelectionModel<User>(true, []);

  dataSource = new MatTableDataSource(this.employees);
  displayedColumns = ['checkBox', 'id', 'firstName', 'lastName', 'userGroup', 'position', 'departament', 'defaultWorkingRoom', 'image'];

  constructor(private spinnerService: SpinnerService,
              private messageService: MessageService,
              private employeeService: UserService,
              public dialog: MatDialog,
              private toastr: ToastrService) {
    this.messageService.listen().subscribe((event) => {
      if (event == 'users') {
        this.loadAllEmployees();
      }
    })
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.filteredData.forEach(row => this.selection.select(row));
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
      console.log(employees);
      this.dataSource.data = employees;
      var events = document.getElementById('users');
      events.style.display = 'block';
      if (this.spinnerService.isShowing()) {
        this.spinnerService.hide();
      }
    });
  }


  openCreateDialog(): void {
    this.employeeService.getAllEmployees().subscribe(employees => {
      const dialogRef = this.dialog.open(DialogOverviewCreateEmployee, {
        width: '800px',
        height: '600px',
        data: {'data': employees}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.loadAllEmployees();
      });
    });
  }

  deleteSelected() {
    if (this.selection.selected.length > 0) {
      var employee = this.selection.selected[0];
      this.employeeService.removeUser(employee.id)
        .pipe()
        .subscribe(
          data => {
            this.toastr.success("User [" + employee.firstName + " " + employee.lastName + "] was removed successfully!");
            this.selection.deselect(employee);
            this.deleteSelected();
          },
          error => {
            this.toastr.error("Something went wrong!");
            this.loadAllEmployees();
          });
    }
    this.loadAllEmployees();
  }


}
