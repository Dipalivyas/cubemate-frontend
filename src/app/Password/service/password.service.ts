import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { password } from '../model/password';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  baseurl = environment.baseurl
  constructor(private http:HttpClient) { }


  newpass(data:password){
    return this.http.post(this.baseurl + "Auth/NewPassword",data)
  }
}
