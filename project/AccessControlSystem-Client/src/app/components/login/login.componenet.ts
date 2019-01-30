import {Component, OnInit, NgZone} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.componenet.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private zone: NgZone) {
  }

  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.zone.run(() => this.router.navigateByUrl("user"));
    } else {
      alert("Invalid credentials");
    }
  }
}
