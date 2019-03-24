import {Key} from "./Key";

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  usergroup: number;
  position: string;
  departament: string;
  defaultWorkingRoom: string;
  keys: Key[];
  image: string;

  constructor(id: number, username: string, password: string, firstName: string, lastName: string, usergroup: number, position: string, departament: string, defaultWorkingRoom: string, keys: Key[], image: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.usergroup = usergroup;
    this.position = position;
    this.departament = departament;
    this.defaultWorkingRoom = defaultWorkingRoom;
    this.keys = keys;
    this.image = image;
  }
}
