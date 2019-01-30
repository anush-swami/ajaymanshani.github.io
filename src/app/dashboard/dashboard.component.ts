import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {UserDataSharedService} from '../services/user-data.shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userProfile: any = {};
  user: any = {};

  constructor(public auth: AuthService, private userDataSharedService: UserDataSharedService) {
  }

  getProfile() {
    this.auth.getUser().subscribe(profile => {
      console.log(profile);
      this.userProfile = profile;
    });
  }

  ngOnInit() {
    this.user = this.userDataSharedService.user;
    console.log(this.user);
    this.userDataSharedService.getUser.subscribe(
      (data) => {
        this.user = data;
        console.log(data);
      }
    );
    this.getProfile();
  }

  logout() {
    this.auth.logout();
  }

}
