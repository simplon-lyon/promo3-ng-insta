import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { PicturesComponent } from './pictures/pictures.component';
import { PictureService } from './shared/picture.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, 
    PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
