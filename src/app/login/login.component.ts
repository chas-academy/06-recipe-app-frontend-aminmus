import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  async onSubmit() {
    const { email, password } = this.loginForm.value;
    const isSuccessfulLogin = await this.userService.login(email, password);
    if (isSuccessfulLogin) { this.router.navigateByUrl('/'); }
  }
}
