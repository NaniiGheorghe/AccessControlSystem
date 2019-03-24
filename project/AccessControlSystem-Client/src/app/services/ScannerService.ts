import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {CookieService} from "ngx-cookie";
import {Room} from "../models/Room";
import {Scanner} from "../models/Scanner";
import {ScannerTypeEnum} from "../models/ScannerType";

@Injectable({
  providedIn: 'root'
})
export class ScannerService {


  constructor(private http: HttpClient,
              private cookiesService: CookieService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.cookiesService.get('token')
    })
  };

  getAllScanners() {
    let scanners: Scanner[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/scanner/list/', this.httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            scanners.push(new Scanner(
              JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).name,
              JSON.parse(JSON.stringify(entry)).scannerType));
          }
          return scanners;
        }
      )
    );
  }

  getAllScannersByType(scannerType: ScannerTypeEnum) {
    let scanners: Scanner[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/scanner/list/byType/' + scannerType.valueOf() + "/", this.httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            scanners.push(new Scanner(
              JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).name,
              JSON.parse(JSON.stringify(entry)).scannerType));
          }
          return scanners;
        }
      )
    );
  }

}
