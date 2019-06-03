import {Scanner} from "./Scanner";

export class DoorLock {
  id: number;
  name: string;
  scanner: Scanner;


  constructor(id: number, name: string, scanner: Scanner) {
    this.id = id;
    this.name = name;
    this.scanner = scanner;
  }
}
