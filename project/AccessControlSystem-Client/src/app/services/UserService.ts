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

  getAllEmployees() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };

    console.log(this.cookiesService.get('token'));
    let actions: User[] = [];
    return this.http.get<Object[]>('http://localhost:8083/administrator/api/v1/employee/list/', httpOptions).pipe(
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
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };
    var path = `http://localhost:8083/administrator/api/v1/employee/isValid/` + username + '/';
    console.log(path);
    return this.http.get<boolean>(path, httpOptions).pipe(
      map(response => {
          return response;
        }
      )
    );
  }


  createNewUser(emp: User) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };
    var path = 'http://localhost:8083/administrator/api/v1/employee';
    console.log('Tring to persist User ' + JSON.stringify(emp));
    return this.http.post(path, emp, httpOptions)
      .pipe(map(
        response => {
          return response;
        }
      ));
  }

  removeUser(id: number) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };
    var path = 'http://localhost:8083/administrator/api/v1/employee/remove/' + id + '/';
    console.log('Tring to remove User ' + JSON.stringify(id));
    return this.http.post(path, null, httpOptions)
      .pipe(map(
        response => {
          return response;
        }
      ));
  }
}
