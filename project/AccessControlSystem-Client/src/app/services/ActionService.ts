import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Action} from "../models/Action";
import {map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU0OTA1Mjk2Mn0.Nozz-Vyo9hHyXpqx7VCkxqDW60_3GNH-dEChPrX7hvIjvYZGqm6RXyrQpntpL50BI7GCN_Rn3efOFwC21qjHlw'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) {
  }

  getAllActions() {
    let actions: Action[] = [];
    return this.http.get<Object[]>('http://localhost:8080/user/api/v1/action/list/', httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            actions.push(new Action(JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).employee.firsName + " " + JSON.parse(JSON.stringify(entry)).employee.lastName,
              JSON.parse(JSON.stringify(entry)).officeRoom.name,
              JSON.parse(JSON.stringify(entry)).direction,
              JSON.parse(JSON.stringify(entry)).gendate));
          }
          return actions;
        }
      )
    );
  }
}
