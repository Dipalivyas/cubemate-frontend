import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { support } from '../model/support';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseurl = environment.baseurl
  constructor(private http:HttpClient) { }

  addsupport(data:support){
    return this.http.post(this.baseurl + "App/AddSupport",data);
  }

  getallsupport(){
    return this.http.get(this.baseurl + "Admin/GetAllSupportType");
  }
}
