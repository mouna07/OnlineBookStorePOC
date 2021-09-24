  
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../services/userservice/user.service'

@Component({
    selector: 'app-user-sign-up-login',
    templateUrl: './user-signUp-signIn.component.html',
    styleUrls: ['./user-signUp-signIn.component.css']
  })

  export class UserSignUpLoginComponent implements OnInit {

    hide = true;

   
     constructor(private userService : UserService,private snackBar: MatSnackBar){
      
        
     }
   

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
    register(){

      if(this.fullName.valid && this.email.valid && this.password.valid && this.phoneNo.valid){
       
        let arr = [] as any;

      let reqObject= {
        fullName:this.fullName.value,
        emailID:this.email.value,
        password:this.password.value,
        phoneNumber:this.phoneNo.value
      }

      console.log("the data from requet",reqObject);
      this.userService.register(reqObject).subscribe((response) =>
                                             {
                                               console.log("the rsponse of the resister",response);
                                               arr=response;
                                                this.snackBar.open(arr.message, "Cancel");

                                             })
    }
  }

  login(){
    if(this.email.valid && this.password.valid){

      let arr = [] as any;
      let reqObj = {
        emailID : this.email.value,
        password : this.password.value
      }

      this.userService.login(reqObj).subscribe((res) => {
        console.log(res)
        arr = res
        console.log("the login object",arr)
        this.snackBar.open(arr.message, "Cancel");
        localStorage.setItem('userToken',arr.object);
      },(error) => {
        console.log(error)
        this.snackBar.open(arr.message, "Cancel");

      })
    }
  }


  }