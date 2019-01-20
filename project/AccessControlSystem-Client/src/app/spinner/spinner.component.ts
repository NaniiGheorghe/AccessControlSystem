import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpinnerService, SpinnerState} from "../service/spinner.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy, OnInit {
  visible = true;

  private spinnerStateChanged: Subscription;

  constructor(private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => {
        console.log(this.visible);
        console.log(state.show);
        this.visible = state.show;
      });
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
