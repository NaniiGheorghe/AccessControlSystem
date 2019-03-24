import {Component, Inject, NgZone} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {UserService} from "../../../services/UserService";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'account-dialog',
  templateUrl: './accout-dialog.html',
  styleUrls: ['./accout-dialog.css']
})
export class AccoutDialog {


  constructor(private zone: NgZone,
              private router: Router,
              private cookiesService: CookieService,
              public dialogRef: MatDialogRef<AccoutDialog>) {
  }

  signOut() {
    this.cookiesService.remove('token');
    this.zone.run(() => this.router.navigateByUrl("login"));
    this.dialogRef.close();
  }
}

