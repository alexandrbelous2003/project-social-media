import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  hide = true;

  public loginForm: FormGroup;


  constructor(

  ) { 
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }
  onSubmit(){
    console.log(this.loginForm)
  }



}
