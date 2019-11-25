import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import * as firebase from 'firebase';
import { ExitProgramService} from './Service/exit-program.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { HomeComponent } from './components/home/home.component';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {HttpClientModule} from '@angular/common/http'
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
    AngularFireModule,
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    ExitProgramService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
