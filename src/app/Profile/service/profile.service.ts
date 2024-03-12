import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  education, media, profile, skills } from '../model/profile';

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


  deletemdeia(id:any){
    return this.http.post(this.baseurl + "User/DeleteUserMedia?MediaID=id/" + id)
  }
}
