import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserSignUpLoginComponent} from './component/user-signUp-signIn/user-signUp-signIn.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
{
path:'userAuthentication',
component: UserSignUpLoginComponent
},
{
  path:'forgotpassword',
  component: ForgotPasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
