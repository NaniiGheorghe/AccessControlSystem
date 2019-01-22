import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {ActionService} from "../../services/ActionService";
import {MessageService} from "../../services/MessageService";
import {SpinnerService} from "../../services/SpinnerService";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver,
              private messageService: MessageService,
              private spinnerService: SpinnerService) {
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.hideAll();
    this.spinnerService.hide();
  }

  loadEventsComponent() {
    this.hideAll();
    delay(500);
    this.spinnerService.show();
    this.messageService.notify();
  }


  loadHomeComponent() {
    this.hideAll();
    var home = document.getElementById('home');
    home.style.display = 'block';
  }


  loadAccessManagementComponent() {
    var accessManagement = document.getElementById('accessManagement');
    this.hideAll();
    accessManagement.style.display = 'block';
  }

  loadReportsComponent() {
    var reports = document.getElementById('reports');
    this.hideAll();
    reports.style.display = 'block';
  }

  hideAll() {
    var home = document.getElementById('home');
    var events = document.getElementById('events');
    var accessManagement = document.getElementById('accessManagement');
    var reports = document.getElementById('reports');
    var systemAdministration = document.getElementById('systemAdministration');
    home.style.display = 'none';
    events.style.display = 'none';
    accessManagement.style.display = 'none';
    reports.style.display = 'none';
    // systemAdministration.style.display = 'hidden';
  }


}
