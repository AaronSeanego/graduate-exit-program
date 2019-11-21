import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../Service/auth-guard.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthGuardService) { }


  
  logout(){
    this.authService.signOut();
    }
  
  ngOnInit() {
  }

}
