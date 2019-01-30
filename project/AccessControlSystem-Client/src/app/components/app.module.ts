import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatButtonToggleModule, MatCardModule, MatGridListModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventTableComponent} from './event-table/event-table.component';
import {AccessManagementComponent} from './access-management/access-management.component';
import {ReportComponent} from './report/report.component'
import {FormsModule} from '@angular/forms';
import {SpinnerComponent} from "./spinner/spinner.component";
import {MessageService} from "../services/MessageService";
import {ActionService} from "../services/ActionService";
import {SpinnerService} from "../services/SpinnerService";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {CookieModule} from "ngx-cookie";
import {LoginComponent} from "./login/login.componenet";
import {UserComponent} from '../test/user.component';
import {RoomComponent} from './room/room.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    EventTableComponent,
    AccessManagementComponent,
    ReportComponent,
    SpinnerComponent,
    LoginComponent,
    UserComponent,
    RoomComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    CookieModule.forRoot(),
    RouterModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [ActionService, MessageService, SpinnerService],
  bootstrap: [AppComponent]
})


export class AppModule {
}
