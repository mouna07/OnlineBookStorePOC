  
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-user-sign-up-login',
    templateUrl: './user-signUp-signIn.component.html',
    styleUrls: ['./user-signUp-signIn.component.css']
  })

  export class UserSignUpLoginComponent implements OnInit {

    hide = true;

   

   

    fullName = new FormControl('',[Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('',[Validators.required]);
    phoneNo = new FormControl('',[Validators.required]);

    getErrorMessage() {
        if (this.email.hasError('required')) {
          return 'You must enter a value';
        }
        if(this.password.hasError('required')){
          return 'You must enter a value'
        }
        if(this.fullName.hasError('required')){
          return 'You must enter a value'
        }
        if(this.phoneNo.hasError('required')){
          return 'You must enter a value'
        }
    
        return this.email.hasError('email') ? 'Not a valid email' : '';
      }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }
      
  }