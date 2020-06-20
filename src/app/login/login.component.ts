import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public hide = true;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  async onSubmit() {
    const { email, password } = this.loginForm.value;
    const isSuccessfulLogin = await this.userService.login(email, password);
    if (isSuccessfulLogin) { this.router.navigateByUrl('/'); }
  }

  getEmailErrorMessage() {
    const { email } = this.loginForm.controls;
    if (email.hasError('required')) {
      return 'You must enter a value';
    }

    return email.hasError('email') ? 'Not a valid email' : '';
  }
}
