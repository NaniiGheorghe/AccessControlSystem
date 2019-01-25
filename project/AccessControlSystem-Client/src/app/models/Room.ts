import {Report} from "./Report";

export class Room {
  id: string;
  name: string;
  doorLocks: string[];

  constructor(id: string, name: string, doorLocks: string[]) {
    this.id = id;
    this.name = name;
    this.doorLocks = doorLocks;
  }
}
