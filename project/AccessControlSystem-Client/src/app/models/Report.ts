export class Report {
  id: number;
  employeeName: string;
  usergroup: string;
  workingRoom: string;
  position: string;
  departament: string;
  month: string;
  workedHours: number;
  moves: number;

  constructor(id: number, employeeName: string, usergroup: string, workingRoom: string, position: string, departament: string, month: string, workedHours: number, moves: number) {
    this.id = id;
    this.employeeName = employeeName;
    this.usergroup = usergroup;
    this.workingRoom = workingRoom;
    this.position = position;
    this.departament = departament;
    this.month = month;
    this.workedHours = workedHours;
    this.moves = moves;
  }
}
