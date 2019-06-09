import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule, MatCheckboxModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventTableComponent} from './components/event-table/event-table.component';
import {
  AccessManagementComponent,
  DialogOverviewCreateAcMn1
} from './components/access-management/access-management.component';
import {ReportComponent} from './components/report/report.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpinnerComponent} from "./components/spinner/spinner.component";
import {MessageService} from "./services/MessageService";
import {ActionService} from "./services/ActionService";
import {SpinnerService} from "./services/SpinnerService";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {CookieModule} from "ngx-cookie";
import {LoginComponent} from "./components/login/login.componenet";
import {UserComponent} from './components/user/user.component';
import {DialogOverviewCreateRoom, RoomComponent} from './components/room/room.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app.routing";
import {AuthenticationService} from "./services/AuthentiticationService";
import {AlertService} from "./services/AlertService";
import {ToastrModule} from "ngx-toastr";
import {UploadComponent} from "./components/upload-component/upload.component";
import {PortalModule} from "@angular/cdk/portal";
import {DialogOverviewCreateEmployee} from "./components/user/create-employee/dialog-overview-create-employee";
import {DialogOverviewCreateUser} from "./components/user/create-user/dialog-overview-create-user";
import {DialogOverviewAddFingerPrint} from "./components/user/dialog-overview-add-finger-print";
import {ScannerService} from "./services/ScannerService";
import {AccoutDialog} from "./components/main-nav/account-dialog/accout-dialog";

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
    RoomComponent,
    UploadComponent,
    DialogOverviewCreateAcMn1,
    DialogOverviewCreateRoom,
    DialogOverviewCreateEmployee,
    DialogOverviewCreateUser,
    DialogOverviewAddFingerPrint,
    AccoutDialog
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
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    ToastrModule.forRoot(),
    MatCheckboxModule,
    PortalModule],
  entryComponents: [DialogOverviewCreateAcMn1, DialogOverviewCreateRoom, DialogOverviewCreateEmployee, DialogOverviewCreateUser, DialogOverviewAddFingerPrint, AccoutDialog],
  exports: [RouterModule],
  providers: [ActionService, MessageService, SpinnerService, AuthenticationService, AlertService, ScannerService],
  bootstrap: [AppComponent]
})


export class AppModule {
}
