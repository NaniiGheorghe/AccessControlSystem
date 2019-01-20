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
import { FormsModule } from '@angular/forms';
import {SpinnerComponent} from "./spinner/spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    EventTableComponent,
    AccessManagementComponent,
    ReportComponent,
    SpinnerComponent
  ],
  imports: [
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
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
