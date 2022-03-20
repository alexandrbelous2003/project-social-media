import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  hide = true;
  public signUpForm: FormGroup;


  constructor(

  ) { 
    this.signUpForm = new FormGroup({
      name: new FormControl(''),
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }
  onSubmit(){
    console.log(this.signUpForm)
  }
}
