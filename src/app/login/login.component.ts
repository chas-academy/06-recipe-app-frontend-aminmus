import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { LoginService } from '../login.service';
import { LoginMutationResponse } from '../graphql';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.loginService.login(email, password).subscribe((response: LoginMutationResponse) => {
      localStorage.setItem('token', response.data.login.token);
      console.log('token: ', localStorage.getItem('token'));
    }, (error) => console.log('There was an error sending the query', error),
      () => console.log('completed'));
  }
}
