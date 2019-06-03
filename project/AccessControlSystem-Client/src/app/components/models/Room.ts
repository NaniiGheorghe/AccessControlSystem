import {Report} from "./Report";
import {DoorLock} from "./DoorLock";

export class Room {
  id: number;
  name: string;
  doorLocks: DoorLock[];
  doorNames: string[];

  constructor(id: number, name: string, doorLocks: DoorLock[], doorNames: string[]) {
    this.id = id;
    this.name = name;
    this.doorLocks = doorLocks;
    this.doorNames = doorNames;
  }

  getName() {
    return this.name;
  }
}
