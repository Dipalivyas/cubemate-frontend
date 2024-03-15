import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  baseurl = environment.baseurl
  constructor(private http:HttpClient) { }


  getallcompanies(){
    return this.http.get(this.baseurl + "Web/GetAllWebCompanyProfile")
  }
}
