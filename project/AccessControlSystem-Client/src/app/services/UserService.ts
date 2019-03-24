import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Action} from "../models/Action";
import {map} from "rxjs/operators";
import {User} from "../models/User";
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class UserService {


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
    console.log(this.cookiesService.get('token'));
    let actions: User[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/employee/list/', this.httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            actions.push(new User(
              JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).username,
              JSON.parse(JSON.stringify(entry)).password,
              JSON.parse(JSON.stringify(entry)).firstName,
              JSON.parse(JSON.stringify(entry)).lastName,
              JSON.parse(JSON.stringify(entry)).usergroup,
              JSON.parse(JSON.stringify(entry)).position,
              JSON.parse(JSON.stringify(entry)).departament,
              JSON.parse(JSON.stringify(entry)).defaultWorkingRoom,
              JSON.parse(JSON.stringify(entry)).keys,
              JSON.parse(JSON.stringify(entry)).image));
          }
          return actions;
        }
      )
    );
  }

  isValidUsername(username: string) {
    var path = `http://localhost:8080/administrator/api/v1/employee/isValid/` + username + '/';
    console.log(path);
    return this.http.get<boolean>(path, this.httpOptions).pipe(
      map(response => {
          return response;
        }
      )
    );
  }


  createNewUser(emp: User) {
    var path = 'http://localhost:8080/administrator/api/v1/employee';
    console.log('Tring to persist User ' + JSON.stringify(emp));
    return this.http.post(path, emp, this.httpOptions)
      .pipe(map(
        response => {
          return response;
        }
      ));
  }

  removeUser(id: number) {
    var path = 'http://localhost:8080/administrator/api/v1/employee/remove/' + id + '/';
    console.log('Tring to remove User ' + JSON.stringify(id));
    return this.http.post(path, null, this.httpOptions)
      .pipe(map(
        response => {
          return response;
        }
      ));
  }
}
