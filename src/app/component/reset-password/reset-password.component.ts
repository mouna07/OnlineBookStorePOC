import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
  })

  export class ResetPasswordComponent implements OnInit {

    ngOnInit(): void {
    }


    password = new FormControl('', Validators.required);


  passwordErrorMessage() {
    return (this.password.hasError('required')) ? 'You must enter a value' : 
    'Must have One Capital, one small latter and one number and a symbol';
  }

  
  message: any
  data: any
  error: any


  }