import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector:    'slt-form-login',
  templateUrl: './form-login.component.html',
  styleUrls:   ['./login.component.scss']
})
export class FormLoginComponent implements OnInit {

  private _currentForm = '';
  private _userName = '';
  private _password = '';

  @Input()
  get userName(): string {
    return this._userName;
  }

  @Output() userNameChange = new EventEmitter();

  set userName(value: string) {
    this._userName = value;
    this.userNameChange.emit(this._userName);
  }

  @Input()
  get password(): string {
    return this._password;
  }

  @Output() passwordChange = new EventEmitter();

  set password(value: string) {
    this._password = value;
    this.passwordChange.emit(this._password);
  }

  @Input()
  get currentForm(): string {
    return this._currentForm;
  }

  @Output() currentFormChange = new EventEmitter();

  set currentForm(value: string) {
    this._currentForm = value;
    this.currentFormChange.emit(this._currentForm);
  }

  @Input() isRecoveryActive = false;
  @Input() isSignUpActive = false;
  @Input() errorUserPwd = false;
  @Input() txtUsername = '';
  @Input() isLoading = false;

  @Output() login = new EventEmitter();

  constructor() {
  }

  public ngOnInit() {
  }

  public doLogin() {
    this.login.emit();
  }

  public goSignUp() {
    this.currentForm = 'signup';
  }

  public goRecovery() {
    this.currentForm = 'recovery';
  }
}
