import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Action} from "../models/Action";
import {map} from "rxjs/operators";
import {Employee} from "../models/Employee";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient,
              private cookiesService: CookieService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.cookiesService.get('token')
    })
  };

  getAllEmployees() {
    let actions: Employee[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/employee/list/', this.httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            actions.push(new Employee(
              JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).username,
              JSON.parse(JSON.stringify(entry)).password,
              JSON.parse(JSON.stringify(entry)).firstName,
              JSON.parse(JSON.stringify(entry)).lastName,
              JSON.parse(JSON.stringify(entry)).usergroup,
              JSON.parse(JSON.stringify(entry)).position,
              JSON.parse(JSON.stringify(entry)).departament,
              JSON.parse(JSON.stringify(entry)).workingRoom,
              JSON.parse(JSON.stringify(entry)).accessibleRoom,
              JSON.parse(JSON.stringify(entry)).accessibleRoomDoorLock,
              JSON.parse(JSON.stringify(entry)).keys));
          }
          return actions;
        }
      )
    );
  }


  getAllAccesses(){
    let actions: Employee[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/employee/list/access', this.httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            actions.push(new Employee(
              JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).username,
              JSON.parse(JSON.stringify(entry)).password,
              JSON.parse(JSON.stringify(entry)).firstName,
              JSON.parse(JSON.stringify(entry)).lastName,
              JSON.parse(JSON.stringify(entry)).usergroup,
              JSON.parse(JSON.stringify(entry)).position,
              JSON.parse(JSON.stringify(entry)).departament,
              JSON.parse(JSON.stringify(entry)).workingRoom,
              JSON.parse(JSON.stringify(entry)).accessibleRoom,
              JSON.parse(JSON.stringify(entry)).accessibleRoomDoorLock,
              JSON.parse(JSON.stringify(entry)).keys));
          }
          return actions;
        }
      )
    );


  }

  registerNewAccess(employeeId: number, doorLockId: number) {
    var path = `http://localhost:8080/administrator/api/v1/employee/give_access/` + employeeId + '/' + doorLockId + '/';
    return this.http.post(path, {}, this.httpOptions)
      .pipe(map(response => {
        return 'Ok';
      }));
  }


  removeAnAccess(employeeId: number, doorLockId: number) {
    var path = `http://localhost:8080/administrator/api/v1/employee/remove_access/` + employeeId + '/' + doorLockId + '/';
    console.log(path);
    return this.http.post(path, {}, this.httpOptions)
      .pipe(map(response => {
        return 'Ok';
      }));
  }


}
