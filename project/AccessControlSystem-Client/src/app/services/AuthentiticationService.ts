import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";
import {CookieService} from "ngx-cookie";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient,
              private cookiesService: CookieService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.cookiesService.get('token')
    })
  };

  login(username: string, password: string) {
    return this.http.post(`http://localhost:8080/login`, {username: username, password: password})
      .pipe(map(user => {
        console.log('Token' + JSON.parse(JSON.stringify(user)).token);
        return JSON.parse(JSON.stringify(user)).token;
      }));
  }

  logout() {
  }

  isAuthentiticated() {
    return this.http.get(`http://localhost:8080/users/validateToken`, this.httpOptions)
      .pipe(map(user => {
        return 'Ok';
      }));
  }
}
