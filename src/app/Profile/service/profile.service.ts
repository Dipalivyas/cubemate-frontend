import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  education, experience, media, profile, skills } from '../model/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseurl = environment.baseurl
  constructor(private http:HttpClient) { }


  addskill(data:skills){
    return this.http.post(this.baseurl + "User/AddUserSkill",data)
  }

  getuserprofiledata(){
    return this.http.post(this.baseurl + "User/GetUserProfileData",null)
  }

  updateprofile(prof:profile){
    return this.http.post(this.baseurl + "User/UpdateUserProfile",prof) 
  }

  addeducation(data:education){
    return this.http.post(this.baseurl + "User/AddUserEducation",data)
  }

  addmedia(data:media){
    return this.http.post(this.baseurl + "User/AddUserMedia",data)
  }

  addexperience(data:experience){
    return this.http.post(this.baseurl + "User/AddUserExperience",data)
  }


  deletemdeia(id:any):Observable<any>{
    return this.http.post(this.baseurl + "User/DeleteUserMedia?MediaID="+id,null);
  }

  deleteeducation(id:any):Observable<any>{
    return this.http.post(this.baseurl + "User/DeleteUserEducation?UserEducationID="+id,null);
  }
  deleteexperience(id:any):Observable<any>{
    return this.http.post(this.baseurl + "User/DeleteUserExperience?ExpId="+id,null)
  }

  deleteskill(id:any):Observable<any>{
    return this.http.post(this.baseurl + "User/DeleteUserSkill?skillID="+id,null)
  }

  deleteactivite(id:any):Observable<any>{
    return this.http.post(this.baseurl + "User/DeleteUserActivity?ActivityID="+id,null)
  }

  


}
