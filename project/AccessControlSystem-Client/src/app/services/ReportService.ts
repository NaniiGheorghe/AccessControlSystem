import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Action} from "../models/Action";
import {map} from "rxjs/operators";
import {Employee} from "../models/Employee";
import {Report} from "../models/Report";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class ReportService {


  constructor(private http: HttpClient,
              private cookiesService: CookieService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.cookiesService.get('token')
    })
  };

  getAllReports() {
    let reports: Report[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/employee/list/', this.httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            reports.push(new Report(JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).firsName,
              JSON.parse(JSON.stringify(entry)).lastName,
              JSON.parse(JSON.stringify(entry)).positions,
              JSON.parse(JSON.stringify(entry)).departament,
              'January',
              145,
              2));
          }
          return reports;
        }
      )
    );
  }
}
