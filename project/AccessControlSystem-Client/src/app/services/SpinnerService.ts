import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

export interface SpinnerState {
  show: boolean

}

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerSubject = new Subject();
  public isProgressShowing: boolean = false;

  spinnerState = <Observable<SpinnerState>>this.spinnerSubject.asObservable();

  show() {
    console.log('Spinner show');
    this.isProgressShowing = true;
    this.spinnerSubject.next(<SpinnerState>{ show: true });
  }

  hide() {
    this.isProgressShowing = false;
    this.spinnerSubject.next(<SpinnerState>{ show: false });
  }

  isShowing() {
    return this.isProgressShowing;
  }
}
