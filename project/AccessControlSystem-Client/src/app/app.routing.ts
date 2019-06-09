import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {MainNavComponent} from "./components/main-nav/main-nav.component";
import {LoginComponent} from "./components/login/login.componenet";

const routes: Routes = [
  {path: '', component: MainNavComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
})
export class AppRoutingModule {
}
