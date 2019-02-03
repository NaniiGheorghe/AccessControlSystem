import {Component, OnInit, NgZone} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/AuthentiticationService";
import {AlertService} from "../../services/AlertService";
import {CookieOptions, CookieService} from "ngx-cookie";

@Component({
  selector: 'login',
  templateUrl: './login.componenet.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  wrongUsernameOrPass = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private zone: NgZone,
    private cookiesService: CookieService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.wrongUsernameOrPass = false;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          let exp = new Date(2040, 12, 21);
          let cookieOptions = {expires: exp} as CookieOptions;
          this.cookiesService.put('token', data, cookieOptions);
          this.zone.run(() => this.router.navigateByUrl(""));
        },
        error => {
          this.wrongUsernameOrPass = true;
          this.alertService.error('Authentitication error');
          this.loading = false;
        });
  }
}
