export class Key {
  id: number;
  private _keyName: string;
  keyValue: string;
  keyValue2: string;
  keyValue3: string;
  keyValue4: string;
  keyType: string;


  constructor(id: number, keyName: string, keyValue: string, keyValue2: string, keyValue3: string, keyValue4: string, keyType: string) {
    this.id = id;
    this._keyName = keyName;
    this.keyValue = keyValue;
    this.keyValue2 = keyValue2;
    this.keyValue3 = keyValue3;
    this.keyValue4 = keyValue4;
    this.keyType = keyType;
  }

  setKeyName(fingerPrintName: string) {
    this._keyName = fingerPrintName;
  }
}
