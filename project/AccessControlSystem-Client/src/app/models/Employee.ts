export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  departament: string;
  defaultWorkingRoom: string;
  keys: string;

  constructor(id: number, firstName: string, lastName: string, position: string, departament: string, defaultWorkingRoom: string, keys: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.departament = departament;
    this.defaultWorkingRoom = defaultWorkingRoom;
    this.keys = keys;
  }
}
