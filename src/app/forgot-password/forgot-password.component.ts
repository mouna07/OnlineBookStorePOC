import { Component, OnInit } from '@angular/core';
import { User } from './forgot-password.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password-component.html',
  styleUrls: ['./forgot-password-component.css']
})
export class ForgotPasswordComponent implements OnInit {


  ngOnInit(): void {
  }

  user = new User()
  message: any
  data: any
  error: any

  /**
   * @description : It takes the email from user and send an email to the particular user
   * @method      : forgot password from UserService
  */


}
