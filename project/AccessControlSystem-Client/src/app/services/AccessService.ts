import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Action} from "../models/Action";
import {map} from "rxjs/operators";
import {User} from "../models/User";
import {CookieService} from "ngx-cookie";
import {Access} from "../models/Access";

@Injectable({
  providedIn: 'root'
})
export class AccessService {


  constructor(private http: HttpClient,
              private cookiesService: CookieService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.cookiesService.get('token')
    })
  };

  getAllAccesses() {
    let actions: Access[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/employee/list/access', this.httpOptions).pipe(
      map(response => {
          for (let entry of response) {

            actions.push(
              new Access(
                new User(JSON.parse(JSON.stringify(entry)).userDTO.id,
                  JSON.parse(JSON.stringify(entry)).userDTO.username,
                  JSON.parse(JSON.stringify(entry)).userDTO.password,
                  JSON.parse(JSON.stringify(entry)).userDTO.firstName,
                  JSON.parse(JSON.stringify(entry)).userDTO.lastName,
                  JSON.parse(JSON.stringify(entry)).userDTO.usergroup,
                  JSON.parse(JSON.stringify(entry)).userDTO.position,
                  JSON.parse(JSON.stringify(entry)).userDTO.departament,
                  JSON.parse(JSON.stringify(entry)).userDTO.defaultWorkingRoom,
                  JSON.parse(JSON.stringify(entry)).userDTO.keys),
                JSON.parse(JSON.stringify(entry)).accessibleRoom,
                JSON.parse(JSON.stringify(entry)).accessibleRoomDoorLock));
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
