import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { otp } from '../model/otp';

@Injectable({
  providedIn: 'root'
})
export class OtpverifyService {

  baseurl = environment.baseurl
  constructor(private http:HttpClient) { }


  verifyotp(data:otp){
    return this.http.post(this.baseurl + "Auth/VerifyOTP",data)
  }
}
