import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private signupService: SignupService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    const { name, email, password } = this.signupForm.value;
    this.signupService.signup(name, email, password);
  }
}
