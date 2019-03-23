import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {DialogData} from "../../access-management/access-management.component";
import {UserService} from "../../../services/UserService";
import {ToastrService} from "ngx-toastr";
import {first} from "rxjs/operators";
import {CreateEmployeeDialogData} from "../create-employee/dialog-overview-create-employee";
import {FormControl, Validators} from "@angular/forms";
import {Key} from "../../../models/Key";

@Component({
  selector: 'dialog-overview-create-user',
  templateUrl: './dialog-overview-add-finger-print.html',
  styleUrls: ['./dialog-overview-add-finger-print.css']
})
export class DialogOverviewAddFingerPrint {

  selectFormControlRoom = new FormControl('', Validators.required);

  allKeyTypes: string[] = ['Finger Print', 'NFC Key'];
  allScanners: string[] = ["SC0001", "SC0002", "SC0003", "SC0004"];

  selectedScanner: string;
  keyType: string;
  fingerPrintName: string;
  keys: Key[] = [];


  nothingScanned: Boolean;
  firstScanGif: Boolean;
  secondScan: Boolean;
  secondScanGif: Boolean;
  thirdScanGif: Boolean;
  thirdScan: Boolean;
  fourthScan: Boolean;
  fourthScanGif: Boolean;
  successfullyRegistered: Boolean;


  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DialogOverviewAddFingerPrint>,
              @Inject(MAT_DIALOG_DATA) public employeeData: CreateEmployeeDialogData,
              public employeeService: UserService,
              private toastr: ToastrService) {
    this.nothingScanned = true;
    this.firstScanGif = false;
    this.secondScan = false;
    this.secondScanGif = false;
    this.thirdScanGif = false;
    this.thirdScan = false;
    this.fourthScan = false;
    this.fourthScanGif = false;
    this.successfullyRegistered = false;
  }


  onTestFingerClick(): void {
    if (this.nothingScanned) {
      this.nothingScanned = false;
      this.firstScanGif = true;
      setTimeout(() => {
        this.resetAllFrames();
        this.secondScan = true;
      }, 2000);
    }
    if (this.secondScan) {
      this.secondScan = false;
      this.secondScanGif = true;
      setTimeout(() => {
        this.resetAllFrames();
        this.thirdScan = true;
      }, 2000);
    }
    if (this.thirdScan) {
      this.thirdScan = false;
      this.thirdScanGif = true;
      setTimeout(() => {
        this.resetAllFrames();
        this.fourthScan = true;
      }, 2000);
    }
    if (this.fourthScan) {
      this.fourthScan = false;
      this.fourthScanGif = true;
      setTimeout(() => {
        this.resetAllFrames();
        this.successfullyRegistered = true;
      }, 2000);
    }
  }

  resetAllFrames() {
    this.nothingScanned = false;
    this.firstScanGif = false;
    this.secondScan = false;
    this.secondScanGif = false;
    this.thirdScanGif = false;
    this.thirdScan = false;
    this.fourthScan = false;
    this.fourthScanGif = false;
    this.successfullyRegistered = false;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    var newKet = new Key(null, this.fingerPrintName, this.keyType)
    this.keys.push(newKet);
    this.employeeData.employee.keys = this.keys;
    this.employeeService.createNewUser(this.employeeData.employee)
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
  }


}
