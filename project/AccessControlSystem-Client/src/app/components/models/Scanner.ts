export class Scanner {
  id: number;
  name: string;
  scannerType: string;

  constructor(id: number, name: string, scannerType: string) {
    this.id = id;
    this.name = name;
    this.scannerType = scannerType;
  }
}
