import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: new FormControl('', Validators.compose([
      Validators.required
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required
    ])),
  });
  errorMessage: string;
  validation_messages = {
    'username': [
      { type: 'required', message: 'Email is required.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' }
    ]
  };
  constructor(
      public formBuilder: FormBuilder,
      private _router: Router
    ) { }

  ngOnInit(): void {
  }
  login  ()  {
  if (this.loginForm.value != 'null' ) {
      this._router.navigate(['/dashboard']);
    } else {
      console.log('empty form');
    };
  }

}
