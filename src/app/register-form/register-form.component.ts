import { Component, OnInit } from '@angular/core';
import { ExitProgramService } from '../Service/exit-program.service';
import { AuthGuardService } from '../Service/auth-guard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  name;
  surname;
  email;
  contact;
  password;
  confirm_password;
  
  constructor(
    public RegisterService:ExitProgramService,
    private authService : AuthGuardService,
    private route :Router) { }
  

       logout(){
        this.authService.signOut();
        }
  ngOnInit() {
  }

  CreateAccount() {
  }
}
