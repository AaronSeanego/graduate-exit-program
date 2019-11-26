import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import * as firebase from 'firebase';
import { ExitProgramService} from './Service/exit-program.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var firebaseConfig = {
  apiKey: "AIzaSyDkju7iNCsC27HKxBjDOkNGEWUXY-Pt9eo",
  authDomain: "exitprogramcms.firebaseapp.com",
  databaseURL: "https://exitprogramcms.firebaseio.com",
  projectId: "exitprogramcms",
  storageBucket: "exitprogramcms.appspot.com",
  messagingSenderId: "163400848719",
  appId: "1:163400848719:web:dc1926a682f7c28211213a",
  measurementId: "G-0F5Y2HQG95"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    ExitProgramService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
