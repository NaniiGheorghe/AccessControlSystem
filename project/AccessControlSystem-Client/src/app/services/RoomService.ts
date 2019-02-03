import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Action} from "../models/Action";
import {map} from "rxjs/operators";
import {Employee} from "../models/Employee";
import {Report} from "../models/Report";
import {CookieService} from "ngx-cookie";
import {Room} from "../models/Room";

@Injectable({
  providedIn: 'root'
})
export class RoomService {


  constructor(private http: HttpClient,
              private cookiesService: CookieService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.cookiesService.get('token')
    })
  };

  getAllRooms() {
    let rooms: Room[] = [];
    return this.http.get<Object[]>('http://localhost:8080/user/api/v1/officeroom/list/', this.httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            var doorNames: string[] = [];

            for (let name of JSON.parse(JSON.stringify(entry)).doorLocks) {
              doorNames.push(name.name);
            }

            rooms.push(new Room(
              JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).name,
              JSON.parse(JSON.stringify(entry)).doorLocks,
              doorNames
            ));
          }
          return rooms;
        }
      )
    );
  }

  getInaccesibleRoomsForEmployee(employeeId: number) {
    let rooms: Room[] = [];
    return this.http.get<Object[]>('http://localhost:8080/user/api/v1/officeroom/inaccesible_rooms/' + employeeId + '/', this.httpOptions).pipe(
      map(response => {
          for (let entry of response) {
            rooms.push(new Room(
              JSON.parse(JSON.stringify(entry)).id,
              JSON.parse(JSON.stringify(entry)).name,
              JSON.parse(JSON.stringify(entry)).doorLocks,
              JSON.parse(JSON.stringify(entry)).doorLocks.name
            ));
          }
          return rooms;
        }
      )
    );
  }

  deleteRoom(roomId: number) {
    let rooms: Room[] = [];
    return this.http.post('http://localhost:8080/administrator/api/v1/officeroom/delete/' + roomId + '/',{}, this.httpOptions).pipe(
      map(response => {
          return 'Ok';
        }
      )
    );
  }

  createRoom(roomName: string, doorIdentifier: string) {
    console.log('http://localhost:8080/administrator/api/v1/officeroom/' + roomName + '/' + doorIdentifier + '/',);
    return this.http.post('http://localhost:8080/administrator/api/v1/officeroom/' + roomName + '/' + doorIdentifier + '/', {}, this.httpOptions).pipe(
      map(response => {
          return response;
        }
      )
    );
  }

}
