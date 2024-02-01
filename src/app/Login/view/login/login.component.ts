import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private service: LoginService, private route: Router) {}

  ngOnInit(): void {
  }

  OnLogin() {
    this.service.senddeatils(this.user).subscribe(
      (resp: any) => {
        if (resp.status !== true) {
          alert('Requested phone number does not exist. Please sign up.');
        } else {
          sessionStorage.setItem('token', resp.data.token);
          sessionStorage.setItem('userEmail', resp.data.userEmail);
          this.route.navigate(['/home']);
          console.log(resp.data);
        }
      },
      (error: any) => {
        console.error(error);  // Log the error to the console for debugging
        alert('Error occurred during login. Check console for details.');
      }
    );
  }
  
}
