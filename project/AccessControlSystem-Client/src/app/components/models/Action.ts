export class Action {

  id: string;
  employee: string;
  direction: string;
  officeRoom: string;
  doorLock: string[];
  gendate: string;

  constructor(id: string, employee: string, direction: string, officeRoom: string, doorLock: string[], gendate: string) {
    this.id = id;
    this.employee = employee;
    this.direction = direction;
    this.officeRoom = officeRoom;
    this.doorLock = doorLock;
    this.gendate = gendate;
  }
}
