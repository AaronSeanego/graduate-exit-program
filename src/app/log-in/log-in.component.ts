import { Component, OnInit } from '@angular/core';

import { AuthGuardService } from '../Service/auth-guard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  // LogInForm: FormGroup;  public formGroup:FormBuilder,

  mail;
  pass;

  constructor(
    private authService : AuthGuardService,
    private route :Router) {
    // this.LogInForm = formGroup.group({
    //   email : ["",[Validators.required]],
    //   password : ["",[Validators.required]]
    // })
  }
  async login() {
    console.log(this.mail+"  &&   "+this.pass)
    this.authService.signIn(this.mail, this.pass).then(async () => {
      this.route.navigateByUrl('home')
      console.log(this.mail+"  &&   "+this.pass)
    });

  }
  
  // logout(){
  // this.authService.signOut();
  // }
  
  ngOnInit() {
  }

}
