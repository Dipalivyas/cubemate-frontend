import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl = environment.baseurl

  constructor(private http: HttpClient) {}

  login(data:User){
    return this.http.post(this.baseurl + "Auth/Login",data);
   }
}
