import {User} from "./User";
import {DoorLock} from "./DoorLock";

export class Access {

  user: User;
  accessibleRoom: string;
  accessibleRoomDoorLock: DoorLock;

  constructor(user: User, accessibleRoom: string, accessibleRoomDoorLock: DoorLock) {
    this.user = user;
    this.accessibleRoom = accessibleRoom;
    this.accessibleRoomDoorLock = accessibleRoomDoorLock;
  }
}
