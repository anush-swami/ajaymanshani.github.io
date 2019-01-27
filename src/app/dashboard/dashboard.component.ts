import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userProfile: any;

  constructor(public auth: AuthService) { }

  getProfile(){
    this.auth.getUser().subscribe(profile =>{
      console.log(profile);
      this.userProfile = profile;
    })
  }

  ngOnInit() {
    this.getProfile();
  }

  logout() {
    this.auth.logout();
  }

}
