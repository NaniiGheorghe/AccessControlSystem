export class Key {
  id: number;
  keyName: string;
  keyValue: string;
  keyType: string;


  constructor(id: number, keyName: string, keyValue: string, keyType: string) {
    this.id = id;
    this.keyName = keyName;
    this.keyValue = keyValue;
    this.keyType = keyType;
  }
}
