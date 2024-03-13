import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseurl = environment.baseurl

  constructor(private http:HttpClient) { }


  getalljob(){
    return this.http.get(this.baseurl + "Web/GetAllWebJobPost")
  }
}
