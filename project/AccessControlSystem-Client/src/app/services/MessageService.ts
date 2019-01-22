import {Observable, Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private listener = new Subject<any>();

  listen(): Observable<any> {
    return this.listener.asObservable();
  }

  notify() {
    this.listener.next();
  }

}
