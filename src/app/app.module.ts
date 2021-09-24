import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { UserSignUpLoginComponent } from './component/user-signUp-signIn/user-signUp-signIn.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './component/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { VerifyUser } from './component/verify-user/verify-user.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignUpLoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyUser,
    FooterComponent,
    HeaderComponent,
    UserDashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSliderModule,
    MatTabsModule,
    MatSnackBarModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule,

    ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
