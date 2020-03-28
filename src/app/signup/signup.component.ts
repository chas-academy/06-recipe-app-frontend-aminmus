import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }


  onSubmit() {
    console.log(this.signupForm.value);
  }
}
