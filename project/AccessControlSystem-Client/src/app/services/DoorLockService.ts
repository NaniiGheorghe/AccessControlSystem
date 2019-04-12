import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Action} from "../models/Action";
import {map} from "rxjs/operators";
import {User} from "../models/User";
import {Report} from "../models/Report";
import {CookieService} from "ngx-cookie";
import {Room} from "../models/Room";
import {DoorLock} from "../models/DoorLock";

@Injectable({
  providedIn: 'root'
})
export class DoorLockService {


  constructor(private http: HttpClient,
              private cookiesService: CookieService) {
  }

  getInaccessibleDoorLocks(employeeId: number, roomId: number) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookiesService.get('token')
      })
    };

    let doors: DoorLock[] = [];
    return this.http.get<Object[]>('http://localhost:8080/administrator/api/v1/officeroom/inaccesible_doorLocks/' + employeeId + '/' + roomId + '/', httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            doors.push(new DoorLock(
              JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).name,
              null
            ));
          }
          return doors;
        }
      )
    );

  }

}
