import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompaniesService } from '../../service/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  imgurl = environment.imgurl;
  ngOnInit(): void {
    this.getalldata();
  }

  constructor(private service:CompaniesService){}

  company:any
  getalldata(){
    this.service.getallcompanies().subscribe(
      (resp:any)=>{
        this.company = resp.data;
      }
    )
  }

}
