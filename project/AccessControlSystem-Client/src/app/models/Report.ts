export class Report {
  id: number;
  firstName: string;
  lastName: string;
  departament: string;
  position: string;
  month: string;
  workedHours: number;
  moves: number;


  constructor(id: number, firstName: string, lastName: string, departament: string, position: string, month: string, workedHours: number, moves: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.departament = departament;
    this.position = position;
    this.month = month;
    this.workedHours = workedHours;
    this.moves = moves;
  }
}
