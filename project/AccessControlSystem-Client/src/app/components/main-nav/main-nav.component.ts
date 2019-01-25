import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {ActionService} from "../../services/ActionService";
import {MessageService} from "../../services/MessageService";
import {SpinnerService} from "../../services/SpinnerService";
import {CookieOptions, CookieService} from "ngx-cookie";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  providers: [CookieService]
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private messageService: MessageService,
              private spinnerService: SpinnerService,
              private cookiesService: CookieService) {
  }

  ngOnInit() {
    let exp = new Date(2040, 12, 21);
    let cookieOptions = {expires: exp} as CookieOptions;
    this.cookiesService.put('token', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU0OTA1Mjk2Mn0.Nozz-Vyo9hHyXpqx7VCkxqDW60_3GNH-dEChPrX7hvIjvYZGqm6RXyrQpntpL50BI7GCN_Rn3efOFwC21qjHlw', cookieOptions);
  }

  ngAfterViewInit() {
    this.loadAccessManagementComponent();
  }

  loadAccessManagementComponent() {
    this.hideAll();
    this.spinnerService.show();
    this.messageService.notify('accessManagement');
  }

  loadUserComponent() {
    this.hideAll();
    this.spinnerService.show();
    this.messageService.notify('users');
  }

  loadRoomsComponent(){
    this.hideAll();
    this.spinnerService.show();
    this.messageService.notify('rooms');
  }

  loadEventsComponent() {
    this.hideAll();
    this.spinnerService.show();
    this.messageService.notify('action');
  }

  loadReportsComponent() {
    this.hideAll();
    this.spinnerService.show();
    this.messageService.notify('reports');
  }


  hideAll() {
    var accessManagement = document.getElementById('accessManagement');
    var users = document.getElementById('users');
    var reports = document.getElementById('reports');
    var events = document.getElementById('events');
    var rooms = document.getElementById('rooms');


    accessManagement.style.display = 'none';
    reports.style.display = 'none';
    events.style.display = 'none';
    users.style.display = 'none';
    rooms.style.display = 'none';
  }


}
