import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserSignUpLoginComponent} from './component/user-signUp-signIn/user-signUp-signIn.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent }  from './component/reset-password/reset-password.component';
import { VerifyUser } from './component/verify-user/verify-user.component';
import  {UserDashboardComponent} from './component/user-dashboard/user-dashboard.component';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
{
path:'userAuthentication',
component: UserSignUpLoginComponent
},
{
  path:'forgotpassword',
  component: ForgotPasswordComponent
},

{
 path:'resetpassword',
 component:ResetPasswordComponent

},

{
  path:'verifyuserReg/:token',
  component:VerifyUser
},
{
  path:'dashboard',
  component:UserDashboardComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
