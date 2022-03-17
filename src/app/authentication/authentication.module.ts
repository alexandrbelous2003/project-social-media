import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationMaterialModule } from './authentication-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    AuthenticationMaterialModule
  ]
})
export class AuthenticationModule { }
