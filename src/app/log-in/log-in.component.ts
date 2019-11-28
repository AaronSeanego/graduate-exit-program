import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthGuardService } from '../Service/auth-guard.service';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  // LogInForm: FormGroup;  public formGroup:FormBuilder,

  // validations_form: FormGroup;
  // errorMessage: string = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.compose([Validators.minLength(5),Validators.required]));

  hide = true;
  
  mail;
  pass;

  constructor(
    private authService : AuthGuardService,
    private route :Router,) {
    // this.LogInForm = formGroup.group({
    //   email : ["",[Validators.required]],
    //   password : ["",[Validators.required]]
    // })
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorMessages() {
    return this.password.hasError('required') ? 'You must enter a value' :
        this.password.hasError('password') ? 'Not a valid password' :
            '';
  }
  async login() {
    console.log(this.mail+"  &&   "+this.pass)
    this.authService.signIn(this.mail, this.pass).then(async () => {
      // this.errorMessage = "";
      this.route.navigateByUrl('home')
      console.log(this.mail+"  &&   "+this.pass)
    });

  }
  
  // logout(){
  // this.authService.signOut();
  // }
  
  ngOnInit() {
    // this.validations_form = this.formBuilder.group({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required
    //   ])),
    // });
  
  }
  // validation_messages = {
  //   'email': [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Please enter a valid email.' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required.' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
  //   ]
  // };
  
  }


