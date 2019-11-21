import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  LogInForm: FormGroup
  constructor(public formGroup:FormBuilder) {
    this.LogInForm = formGroup.group({
      email : ["",[Validators.required]],
      password : ["",[Validators.required]]
    })
  }

  ngOnInit() {
  }

}
