import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Action} from "../components/models/Action";
import {map} from "rxjs/operators";
import {User} from "../components/models/User";
import {Report} from "../components/models/Report";
import {CookieService} from "ngx-cookie";
import {Room} from "../components/models/Room";
import {DoorLock} from "../components/models/DoorLock";

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
