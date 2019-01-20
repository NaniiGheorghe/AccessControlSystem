import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(){
    this.hideAll()
  }

  loadEventsComponent() {
    var events = document.getElementById('events');
    this.hideAll();
    events.style.display = 'block';
  }


  loadHomeComponent() {
    var home = document.getElementById('home');
    this.hideAll();
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
