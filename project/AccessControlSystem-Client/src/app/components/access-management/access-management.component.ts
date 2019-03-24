import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MessageService} from "../../services/MessageService";
import {SpinnerService} from "../../services/SpinnerService";
import {Subscription} from "rxjs";
import {UserService} from "../../services/UserService";
import {FormControl, Validators} from "@angular/forms";
import {Room} from "../../models/Room";
import {RoomService} from "../../services/RoomService";
import {first} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {DoorLock} from "../../models/DoorLock";
import {DoorLockService} from "../../services/DoorLockService";
import {SelectionModel} from "@angular/cdk/collections";
import {Access} from "../../models/Access";
import {User} from "../../models/User";
import {AccessService} from "../../services/AccessService";

export interface DialogData {
  data: Access[];
}

@Component({
  selector: 'app-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.css']
})
export class AccessManagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptionAction: Subscription;
  accesses: Access[] = [];

  dataSource = new MatTableDataSource<Access>(this.accesses);
  displayedColumns = ['checkBox', 'firstNameLastName', 'position', 'departament', 'defaultWorkingRoom', 'accessibleRoom', 'doorLock'];
  selection = new SelectionModel<Access>(true, []);


  constructor(private spinnerService: SpinnerService,
              private messageService: MessageService,
              private accessService: AccessService,
              private userService: UserService,
              public dialog: MatDialog,
              private toastr: ToastrService) {
    this.messageService.listen().subscribe((event) => {
      if (event == 'accessManagement') {
        this.loadAllAccesses();
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

  loadAllAccesses() {
    this.subscriptionAction = this.accessService.getAllAccesses().subscribe(access => {
      this.dataSource.data = access;
      var events = document.getElementById('accessManagement');
      events.style.display = 'block';
      if (this.spinnerService.isShowing()) {
        this.spinnerService.hide();
      }
    });

  }

  openCreateDialog(): void {
    this.userService.getAllEmployees().subscribe(employees => {
      const dialogRef = this.dialog.open(DialogOverviewCreateAcMn1, {
        width: '400px',
        data: {'data': employees}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.loadAllAccesses();
      });
    });
  }

  deleteSelected() {
    if (this.selection.selected.length > 0) {
      var access: Access = this.selection.selected[0];
      this.accessService.removeAnAccess(access.user.id, access.accessibleRoomDoorLock.id)
        .pipe()
        .subscribe(
          data => {
            this.toastr.success("Access removed successfully for user ["
              + access.user.firstName + " " + access.user.lastName + "] to room ["
              + access.accessibleRoom + "], door [" + access.accessibleRoomDoorLock.name + "]");
            this.selection.deselect(access);
            this.deleteSelected();
          },
          error => {
            this.toastr.error("Something went wrong!");
            this.loadAllAccesses();
          });
    }
    this.loadAllAccesses();
  }
}

@Component({
  selector: 'dialog-overview-create-acmn',
  templateUrl: './dialog-overview-create-acmn-1.html',
})
export class DialogOverviewCreateAcMn1 {

  selectFormControlEmp = new FormControl('', Validators.required);
  selectFormControlRoom = new FormControl('', Validators.required);
  selectFormControlDoor = new FormControl('', Validators.required);
  selectedEmployee: User;
  selectedRoom: Room;
  selectedDoor: DoorLock;
  allRooms: Room[] = [];
  allDoors: DoorLock[] = [];

  userHasAccessToAllRooms: boolean = false;


  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DialogOverviewCreateAcMn1>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public roomService: RoomService,
              public accessService: AccessService,
              private toastr: ToastrService,
              private doorLockService: DoorLockService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  loadAllRooms(event) {
    this.userHasAccessToAllRooms = false;
    console.log(event.source.value);
    if (event.source.value instanceof User) {
      this.roomService.getInaccesibleRoomsForEmployee((<User>event.source.value).id).subscribe(
        rooms => {
          if (rooms.length == 0) {
            this.userHasAccessToAllRooms = true;
          } else {
            this.allRooms = rooms;
          }
        }
      );
    }
  }

  loadDoorLocks(event) {
    if (event.source.value instanceof Room) {
      this.doorLockService.getInaccessibleDoorLocks(this.selectedEmployee.id, (<Room>event.source.value).id).subscribe(response => {
          this.allDoors = response;
        }
      )
    }
  }


  onOkClick(): void {
    this.accessService.registerNewAccess(this.selectedEmployee.id, this.selectedDoor.id)
      .pipe(first())
      .subscribe(
        data => {
          this.toastr.success("Access registered successfully for user ["
            + this.selectedEmployee.firstName + " " + this.selectedEmployee.lastName + "] to room ["
            + this.selectedRoom.name + "], door [" + this.selectedDoor.name + "]");
          this.dialogRef.close();
        },
        error => {
          this.toastr.error("Something went wrong!");
          this.dialogRef.close();
        });

  }
}
