export class Employee {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  usergroup: string;
  position: string;
  departament: string;
  defaultWorkingRoom: string;
  accessibleRoom: string;
  accessibleRoomDoorLock: number;
  keys: string;

  constructor(id: number, username: string, password: string, firstName: string, lastName: string, usergroup: string, position: string, departament: string, defaultWorkingRoom: string, accessibleRoom: string, accessibleRoomDoorLock: number, keys: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.usergroup = usergroup;
    this.position = position;
    this.departament = departament;
    this.defaultWorkingRoom = defaultWorkingRoom;
    this.accessibleRoom = accessibleRoom;
    this.accessibleRoomDoorLock = accessibleRoomDoorLock;
    this.keys = keys;
  }
}
