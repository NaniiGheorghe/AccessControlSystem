import {Component, NgZone, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {delay, first, map} from 'rxjs/operators';
import {ActionService} from "../../services/ActionService";
import {MessageService} from "../../services/MessageService";
import {SpinnerService} from "../../services/SpinnerService";
import {CookieOptions, CookieService} from "ngx-cookie";
import {AuthenticationService} from "../../services/AuthentiticationService";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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
              private authentiticationService: AuthenticationService,
              private zone: NgZone,
              private router: Router,
              private toastr: ToastrService
               ) {
  }

  ngOnInit() {
    this.authentiticationService.isAuthentiticated()
      .pipe()
      .subscribe(
        data => {
          console.log('Token is valid.')
          this.loadAccessManagementComponent();
        },
        error => {
          console.log('Token is invalid.')
          this.zone.run(() => this.router.navigateByUrl("login"));
        });
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

  loadRoomsComponent() {
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
