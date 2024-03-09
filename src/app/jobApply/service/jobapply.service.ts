import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobapplyService {




  baseurl = environment.baseurl
  constructor(private http:HttpClient) { }


  GetDetailsById(id:number){
    return this.http.get(this.baseurl + "Web/GetWebJobPostDetailsByID/" + id)
  }

  GetAllUserMediaByUserOption(){
    return this.http.get(this.baseurl + "App/GetAllUserMediaByUser")
  }

  JobApply(data:any){
    return this.http.post(this.baseurl + 'Jobs/ApplyForJobPost', data);
  }
  

}
