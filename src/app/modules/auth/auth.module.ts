import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent, AuthComponent
  ],
  imports: [
    AuthRoutingModule, SharedModule, CommonModule
  ]
})
export class AuthModule { }
