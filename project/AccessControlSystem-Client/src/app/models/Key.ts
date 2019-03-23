export class Key {
  id: number;
  keyName: string;
  keyType: string;

  constructor(id: number, keyName: string, keyType:string) {
    this.id = id;
    this.keyName = keyType;
    this.keyType = keyType;
  }
}
