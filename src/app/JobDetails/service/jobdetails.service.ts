import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobdetailsService {

  baseurl = environment.baseurl
  constructor(private http:HttpClient) { }


  getdetailsbyid(id:number){
    return this.http.get(this.baseurl + "Web/GetWebJobPostDetailsByID/" + id)
  }
}
