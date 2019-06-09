import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {UserService} from "../../../services/UserService";
import {ToastrService} from "ngx-toastr";
import {first} from "rxjs/operators";
import {DialogOverviewAddFingerPrint} from "../dialog-overview-add-finger-print";
import {CreateEmployeeDialogData} from "../create-employee/dialog-overview-create-employee";

@Component({
  selector: 'dialog-overview-create-user',
  templateUrl: './dialog-overview-create-user.html',
  styleUrls: ['./dialog-overview-create-user.css']
})
export class DialogOverviewCreateUser {

  userName: string = null;
  password: string = null;
  confirmedPassword: string = null;

  errorMessage: string = null;
  dispalyErrorMessage: Boolean = false;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DialogOverviewAddFingerPrint>,
              @Inject(MAT_DIALOG_DATA) public employeeData: CreateEmployeeDialogData,
              public employeeService: UserService) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {

    this.employeeService.isValidUsername(this.userName).pipe(first())
      .subscribe(
        data => {
          if (data == true) {
            if (this.password == this.confirmedPassword) {
              this.employeeData.employee.username = this.userName;
              this.employeeData.employee.password = this.password;
              this.dialog.open(DialogOverviewAddFingerPrint, {
                data: {'employee': this.employeeData.employee}
              });
              this.dialogRef.close();
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
