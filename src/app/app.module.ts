import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, Validator, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { PicturesComponent } from './pictures/pictures.component';
import { PictureService } from './shared/picture.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PicturesComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, 
    PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
