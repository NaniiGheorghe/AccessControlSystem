import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from "rxjs";
import {SpinnerService} from "../../services/SpinnerService";
import {MessageService} from "../../services/MessageService";
import {Room} from "../../models/Room";
import {RoomService} from "../../services/RoomService";
import {SelectionModel} from "@angular/cdk/collections";
import {DialogData} from "../access-management/access-management.component";
import {DoorLock} from "../../models/DoorLock";
import {ToastrService} from "ngx-toastr";
import {DoorLockService} from "../../services/DoorLockService";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptionAction: Subscription;
  reports: Room[] = [];

  dataSource = new MatTableDataSource(this.reports);
  displayedColumns = ['checkBox', 'id', 'name', 'doorLocks'];

  selection = new SelectionModel<Room>(true, []);


  constructor(private spinnerService: SpinnerService,
              private messageService: MessageService,
              private roomService: RoomService,
              private toastr: ToastrService,
              public dialog: MatDialog) {
    this.messageService.listen().subscribe((event) => {
      if (event == 'rooms') {
        this.loadAllRooms();
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


  loadAllRooms() {
    this.subscriptionAction = this.roomService.getAllRooms().subscribe(room => {
      this.dataSource.data = room;
      var events = document.getElementById('rooms');
      events.style.display = 'block';
      if (this.spinnerService.isShowing()) {
        this.spinnerService.hide();
      }
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewCreateRoom, {
      width: '400px',
      data: {'data': 'data'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllRooms();
    });
  }

  deleteSelected() {
    if (this.selection.selected.length > 0) {
      var room = this.selection.selected[0];
      this.roomService.deleteRoom(room.id)
        .pipe()
        .subscribe(
          data => {
            this.toastr.success("Room ["
              + room.name + "] was removed sucessfully!");
            this.selection.deselect(room);
            this.deleteSelected();
          },
          error => {
            this.toastr.error("Something went wrong!");
            this.loadAllRooms();
          });
    }
    this.loadAllRooms();
  }
}

@Component({
  selector: 'dialog-overview-create-room',
  templateUrl: './dialog-overview-create-room.html',
})
export class DialogOverviewCreateRoom {

  room: Room = new Room(undefined, undefined, undefined, undefined);
  door: DoorLock = new DoorLock(undefined, undefined);

  doorIdentifierAlreadyExist: boolean = false;
  roomNameAlreadyExist: boolean = false;


  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DialogOverviewCreateRoom>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public roomService: RoomService,
              private toastr: ToastrService,
              private doorLockService: DoorLockService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  onOkClick(): void {
    this.roomService.createRoom(this.room.name, this.door.name)
      .pipe(first())
      .subscribe(
        data => {
          this.toastr.success("The combination room ["
            + this.room.name + "] - door ["+this.door.name+"] was created sucessfully.");
          this.dialogRef.close();
        },
        error => {
          if(error == null){
            this.toastr.error("Something went wrong!");
          }else{
            this.toastr.error(JSON.parse(JSON.stringify(error)).error);
          }
          this.dialogRef.close();
        });
  }
}
