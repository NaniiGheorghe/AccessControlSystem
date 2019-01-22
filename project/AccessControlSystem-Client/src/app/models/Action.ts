export class Action {

  id : string;
  employeeName : string;
  officeRoom : string;
  direction : string;
  time : string;


  constructor(id: string, employeeName: string, officeRoom: string, direction: string, time: string) {
    this.id = id;
    this.employeeName = employeeName;
    this.officeRoom = officeRoom;
    this.direction = direction;
    this.time = time;
  }
}
