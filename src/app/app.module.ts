import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http'
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { ViewGradsComponent } from './components/view-grads/view-grads.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
 
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { DisplayGradsComponent } from './display-grads/display-grads.component';
import { Chart } from 'chart.js';

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
    HomeComponent,
    ViewGradsComponent,
    DisplayGradsComponent
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
    MatProgressBarModule,
    MatTableModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    GooglePlaceModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,

    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    ExitProgramService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
