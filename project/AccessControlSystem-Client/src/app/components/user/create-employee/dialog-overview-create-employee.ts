import {Component, ViewChild} from "@angular/core";
import {Room} from "../../models/Room";
import {MatDialog, MatDialogRef} from "@angular/material";
import {RoomService} from "../../../services/RoomService";
import {Role} from "../user.component";
import {User} from "../../models/User";
import {DialogOverviewCreateUser} from "../create-user/dialog-overview-create-user";
import {UploadComponent} from "../../upload-component/upload.component";

export interface CreateEmployeeDialogData {
  employee: User;
}

@Component({
  selector: 'dialog-overview-create-user',
  templateUrl: './dialog-overview-create-employee.html',
  styleUrls: ['./dialog-overview-create-employee.css']
})
export class DialogOverviewCreateEmployee {

  @ViewChild(UploadComponent) uploadComponent;

  roles: Role[] = [
    {value: 0, viewValue: 'Operator'},
    {value: 1, viewValue: 'Administrator'}
  ];
  allRooms: Room[] = [];

  firstName: string = null;
  lastName: string = null;
  department: string = null;
  position: string = null;
  selectedRole: Role = null;
  workingRoom: Room;

  errorMessage: string = null;
  dispalyErrorMessage: Boolean = false;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DialogOverviewCreateUser>,
              public roomService: RoomService) {
    this.loadAllRooms();
  }

  loadAllRooms() {
    this.roomService.getAllRooms().subscribe(
      rooms => {
        this.allRooms = rooms;
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    console.log('Image' + this.uploadComponent.imagePath);

    let emplyee = new User(null,
      null,
      null,
      this.firstName,
      this.lastName,
      this.selectedRole.value,
      this.position,
      this.department,
      this.workingRoom.name,
      null,
      this.uploadComponent.imgURL);

    this.dialog.open(DialogOverviewCreateUser, {
      width: '400px',
      data: {'employee': emplyee}
    });
    this.dialogRef.close();
  }
}
