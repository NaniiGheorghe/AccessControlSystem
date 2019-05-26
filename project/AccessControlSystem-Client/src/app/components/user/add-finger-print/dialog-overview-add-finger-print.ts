import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSelectChange} from "@angular/material";
import {UserService} from "../../../services/UserService";
import {ToastrService} from "ngx-toastr";
import {first} from "rxjs/operators";
import {CreateEmployeeDialogData} from "../create-employee/dialog-overview-create-employee";
import {FormControl, Validators} from "@angular/forms";
import {Key} from "../../../models/Key";
import {Scanner} from "../../../models/scanner";
import {ScannerService} from "../../../services/ScannerService";
import {ScannerTypeEnum} from "../../../models/ScannerType";

@Component({
  selector: 'dialog-overview-create-user',
  templateUrl: './dialog-overview-add-finger-print.html',
  styleUrls: ['./dialog-overview-add-finger-print.css']
})
export class DialogOverviewAddFingerPrint {

  selectFormControlRoom = new FormControl('', Validators.required);

  allKeyTypes: string[] = ['Finger Print', 'NFC Key'];
  allScanners: Scanner[] = [];

  selectedScanner: Scanner;
  selectedKeyType: string;
  fingerPrintName: string;
  keys: Key[] = [];
  keyValues: number[] = [];


  NFCKeyId: any;

  nothingScanned: Boolean;
  firstScanGif: Boolean;
  secondScan: Boolean;
  secondScanGif: Boolean;
  thirdScanGif: Boolean;
  thirdScan: Boolean;
  fourthScan: Boolean;
  fourthScanGif: Boolean;
  successfullyRegistered: Boolean;

  fingerPrintTypeSelected: Boolean;
  NFCKeyTypeSelected: any;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DialogOverviewAddFingerPrint>,
              @Inject(MAT_DIALOG_DATA) public employeeData: CreateEmployeeDialogData,
              public employeeService: UserService,
              private toastr: ToastrService,
              private scannerService: ScannerService) {
    this.nothingScanned = true;
    this.firstScanGif = false;
    this.secondScan = false;
    this.secondScanGif = false;
    this.thirdScanGif = false;
    this.thirdScan = false;
    this.fourthScan = false;
    this.fourthScanGif = false;
    this.successfullyRegistered = false;

    this.fingerPrintTypeSelected = false;
    this.NFCKeyTypeSelected = false;

    this.scannerService.getAllScannersByType(ScannerTypeEnum.FINGERPRINT_SCANNER).subscribe(scanners => {
      this.allScanners = scanners;
    });
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
    var newKet: Key;
    if (this.NFCKeyTypeSelected) {
      newKet = new Key(null, this.fingerPrintName, this.NFCKeyId, null, null, null, this.selectedKeyType);
      this.keys.push(newKet);
    } else if (this.fingerPrintTypeSelected) {
      if (this.keyValues.length == 4) {
        let newKet = new Key(null, this.fingerPrintName, this.keyValues[0].toString(), this.keyValues[0].toString(), this.keyValues[0].toString(), this.keyValues[0].toString(), this.selectedKeyType);
        this.keys.push(newKet);
      } else {
        console.log("Not 4 times the finger was scanned.")
      }
    }
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


  displyKeyInputType($event: MatSelectChange) {
    console.log($event.source.value == 'Finger Print');
    if ($event.source.value == 'Finger Print') {
      this.fingerPrintTypeSelected = true;
      this.NFCKeyTypeSelected = false;
      this.successfullyRegistered = false;
    } else if ($event.source.value == 'NFC Key') {
      this.NFCKeyTypeSelected = true;
      this.fingerPrintTypeSelected = false;
      this.successfullyRegistered = true;
    }
  }


  displyScanners($event: MatSelectChange) {
    this.switchToScannerMode();
  }

  switchToScannerMode(): void {
    console.log("Selected scanner " + this.selectedScanner.name);
    let scannerId = this.selectedScanner.name;
    this.scannerService.switchScannerToRegistarationMode(scannerId).pipe(first())
      .subscribe(
        data => {
          this.scannerService.waitForScannerEvent().pipe(first())
            .subscribe(
              data => {
                console.log("Received keyValue" + data);
                this.nothingScanned = false;
                this.firstScanGif = true;
                setTimeout(() => {
                  this.resetAllFrames();
                  this.secondScan = true;
                }, 2000);
                this.addKey(data);
                this.scannerService.waitForScannerEvent().pipe(first())
                  .subscribe(
                    data => {
                      console.log("Received keyValue" + data);
                      this.secondScan = false;
                      this.secondScanGif = true;
                      setTimeout(() => {
                        this.resetAllFrames();
                        this.thirdScan = true;
                      }, 2000);
                      this.addKey(data);
                      this.scannerService.waitForScannerEvent().pipe(first())
                        .subscribe(
                          data => {
                            console.log("Received keyValue" + data);
                            this.thirdScan = false;
                            this.thirdScanGif = true;
                            setTimeout(() => {
                              this.resetAllFrames();
                              this.fourthScan = true;
                            }, 2000);
                            this.addKey(data);
                            this.scannerService.switchScannerBackToInitialMode(scannerId).pipe(first())
                              .subscribe(
                                data => {
                                  console.log("Received keyValue" + data);
                                  this.fourthScan = false;
                                  this.fourthScanGif = true;
                                  setTimeout(() => {
                                    this.resetAllFrames();
                                    this.successfullyRegistered = true;
                                  }, 2000);
                                  this.addKey(data);
                                  console.log("Switched scanner to scanning mode!");
                                },
                                error => {
                                  this.toastr.error("Time out!");
                                  this.switchBackToScannningMode(scannerId);
                                  this.dialogRef.close();
                                });
                          },
                          error => {
                            this.toastr.error("Time out!");
                            this.switchBackToScannningMode(scannerId);
                            this.dialogRef.close();
                          });
                    },
                    error => {
                      this.toastr.error("Time out!");
                      this.switchBackToScannningMode(scannerId);
                      this.dialogRef.close();
                    });
              },
              error => {
                this.toastr.error("Time out!");
                this.switchBackToScannningMode(scannerId);
                this.dialogRef.close();
              });
        },
        error => {
          this.toastr.error("Something went wrong with scanner!");
          this.dialogRef.close();
          this.switchBackToScannningMode(scannerId);
        });


  }

  switchBackToScannningMode(scanner: any): void {
    this.scannerService.switchScannerBackToScanningMode(scanner).subscribe(
      data => {
        console.log("Switched scanner to scanning mode!");
      });
  }

  addKey(number: any): void {
    this.keyValues.push(number);
  }
}
