import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from "rxjs";
import {Employee} from "../../models/Employee";
import {SpinnerService} from "../../services/SpinnerService";
import {MessageService} from "../../services/MessageService";
import {EmployeeService} from "../../services/EmployeeService";
import {DialogData, DialogOverviewCreateAcMn1} from "../access-management/access-management.component";
import {SelectionModel} from "@angular/cdk/collections";
import {ToastrService} from "ngx-toastr";
import {FormControl, Validators} from "@angular/forms";
import {Room} from "../../models/Room";
import {DoorLock} from "../../models/DoorLock";
import {RoomService} from "../../services/RoomService";
import {DoorLockService} from "../../services/DoorLockService";
import {first} from "rxjs/operators";

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
  employees: Employee[] = [];
  selection = new SelectionModel<Employee>(true, []);


  dataSource = new MatTableDataSource(this.employees);
  displayedColumns = ['checkBox', 'id', 'firstName', 'lastName', 'userGroup', 'position', 'departament', 'defaultWorkingRoom', 'keys'];

  constructor(private spinnerService: SpinnerService,
              private messageService: MessageService,
              private employeeService: EmployeeService,
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
      const dialogRef = this.dialog.open(DialogOverviewCreateUser, {
        width: '400px',
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
      this.employeeService.removeAnAccess(employee.id, employee.accessibleRoomDoorLock.id)
        .pipe()
        .subscribe(
          data => {
            this.toastr.success("Access removed successfully for user ["
              + employee.firstName + " " + employee.lastName + "] to room ["
              + employee.accessibleRoom + "], door [" + employee.accessibleRoomDoorLock.name + "]");
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


@Component({
  selector: 'dialog-overview-create-user',
  templateUrl: './dialog-overview-create-user.html',
})
export class DialogOverviewCreateUser {

  roles: Role[] = [
    {value: 0, viewValue: 'Operator'},
    {value: 1, viewValue: 'Administrator'}
  ];



  firstName: string = null;
  lastName: string = null;
  userName: string = null;
  department: string = null;
  workingRoom: string = null;
  password: string = null;
  confirmedPassword: string = null;
  position: string = null;
  selectedRole: Role = null;

  errorMessage: string = null;
  dispalyErrorMessage: Boolean = false;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DialogOverviewCreateUser>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public spinnerService: SpinnerService,
              public roomService: RoomService,
              public employeeService: EmployeeService,
              private toastr: ToastrService,
              private doorLockService: DoorLockService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  loadAllRooms(event) {

  }


  onOkClick(): void {

    this.employeeService.isValidUsername(this.userName).pipe(first())
      .subscribe(
        data => {
          if (data == true) {
            if (this.password == this.confirmedPassword) {
              this.employeeService.createNewUser(this.firstName, this.lastName, this.userName, this.department, this.workingRoom, this.password, this.confirmedPassword, this.position, this.selectedRole.value)
                .pipe(first())
                .subscribe(
                  data => {
                    this.toastr.success("A new user was created successfully");
                    this.dialogRef.close();
                  },
                  error => {
                    this.toastr.error("Something went wrong!");
                    this.dialogRef.close();
                  });
            } else {
              this.dispalyErrorMessage = true;
              this.errorMessage = "The password doesn't match."
            }
          } else {
            this.dispalyErrorMessage = true;
            this.errorMessage = "This username is already used."
          }
        },
        error => {
          this.dispalyErrorMessage = true;
          this.errorMessage = error;
        });

  }
}
