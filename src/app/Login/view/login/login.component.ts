import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import * as CryptoJs from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  errorMessage: string = '';

  constructor(private service: LoginService, private route: Router) {}

  ngOnInit(): void {}

  OnLogin() {
    
    this.service.login(this.user).subscribe(
      (resp: any) => {
        if (resp.status !== true) {
          this.errorMessage = resp.message; // Adjust this based on the actual response structure
        } else {
          sessionStorage.setItem('token', resp.data.token);
          sessionStorage.setItem('firstName', resp.data.firstName);
          sessionStorage.setItem('userid',resp.data.userID);
          console.log('Login successful:', resp);
          this.route.navigate(['/home']);
        }
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = 'An error occurred while processing the login.';
      }
    );
  }
  
}
