import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseurl = 'your-base-url'; // Replace with your actual base URL

  constructor(private http: HttpClient) {}

  senddeatils(user: User) {
    return this.http.post(this.baseurl + "Auth/Login" ,user)
  }
}
