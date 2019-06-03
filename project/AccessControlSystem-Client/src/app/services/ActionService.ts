import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Action} from "../components/models/Action";
import {map} from "rxjs/operators";
import {CookieService} from "ngx-cookie";


@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient,
              private cookiesService: CookieService) {
  }

  getAllActions() {
   var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };
    let actions: Action[] = [];
    return this.http.get<Object[]>('http://localhost:8080/user/api/v1/action/list/', httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            actions.push(new Action(
              JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).employee,
              JSON.parse(JSON.stringify(entry)).direction,
              JSON.parse(JSON.stringify(entry)).officeRoom,
              JSON.parse(JSON.stringify(entry)).doorLock,
              JSON.parse(JSON.stringify(entry)).gendate
            ));
          }
          return actions;
        }
      )
    );
  }
}
