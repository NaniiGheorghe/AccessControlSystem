import {Report} from "./Report";

export class Room {
  id: number;
  name: string;
  doorLocks: number[];

  constructor(id: number, name: string, doorLocks: number[]) {
    this.id = id;
    this.name = name;
    this.doorLocks = doorLocks;
  }
}
