import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = null;
  
  constructor(private authService: AuthService, private router: Router) { }

  signInWithGithub(){
    this.authService.signInWithGithub()
    .then((res) => {
      this.router.navigate(['dashboard'])
      console.log(res)
      Cookie.set('username', res.additionalUserInfo.username);
      this.authService.setUserInfoInLocalStorage(res.additionalUserInfo.username)
    })
    .catch((err) => console.log(err));
  }
  
  ngOnInit() {
  }

}
