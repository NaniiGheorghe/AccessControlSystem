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

  getAllScanners() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };

    let scanners: Scanner[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/scanner/list/', httpOptions).pipe(
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
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };
    let scanners: Scanner[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/scanner/list/byType/' + scannerType.valueOf() + "/", httpOptions).pipe(
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


  switchScannerToRegistarationMode(scannerId: String) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };
    let url = 'http://localhost:8080/administrator/api/v1/scanner/switchMode/registration/' + scannerId + '/';
    console.log(url);
    return this.http.post('http://localhost:8080/administrator/api/v1/scanner/switchMode/registration/' + scannerId + '/', {}, httpOptions).pipe(
      map(response => {
          return response;
        }
      )
    );
  }


  waitForScannerEvent() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };
    return this.http.post('http://localhost:8080/administrator/api/v1/scanner/waitForScan', {}, httpOptions).pipe(
      map(response => {
          return response;
        }
      )
    );
  }

  switchScannerBackToInitialMode(scannerId: String) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };
    let url = 'http://localhost:8080/administrator/api/v1/scanner/switchMode/scanning/' + scannerId + '/';
    console.log(url);
    return this.http.post(url, {}, httpOptions).pipe(
      map(response => {
          return response;
        }
      )
    );
  }


}
