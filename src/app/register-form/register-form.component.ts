import { Component, OnInit } from '@angular/core';
import { ExitProgramService } from '../Service/exit-program.service';

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
  
  constructor(public RegisterService:ExitProgramService) { }

  ngOnInit() {
  }

  CreateAccount() {
  }
}
