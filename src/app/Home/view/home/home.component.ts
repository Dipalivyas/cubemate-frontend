import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../service/home.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgurl = environment.imgurl;
  jobs:any;
  company:any;
  counter:any
  workingtype:string[] = [];
  shifttype:string[] = [];
  jobpost:string[] = [];



  ngOnInit(): void {
    this.getdata();
    this.workingtype = ['FullTime','PartTime','Freelance'];
    this.shifttype = ['DayTime' , 'NightTime'];
    this.jobpost = ['Active' , 'InActive' ,'Blocked']
  }

  constructor(private service:HomeService,private router: Router){}

  getdata(){
    this.service.getdashboard().subscribe(
      (resp:any) => {
        this.jobs = resp.data.jobPostData;
        this.company = resp.data.companyProfileData
        this.counter = resp.data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    )
  }


  isClicked: boolean = false;
  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    autoplay: true,
    autoplayTimeout: 3500,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false
  }

  navigateToJobDetails(jobPostID: string) {
    this.router.navigate(['/jobDetails/',jobPostID], {queryParams:filter, skipLocationChange: true});
    this.scrollToTop();
  }
  
  scrollToTop() {
    this.isClicked = true;
    console.log('Scrolling to top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



  mapstatustotext(status:number):string{
    switch(status){
      case 0:
        return 'FullTime';
      case 1:
          return 'PartTime';
      case 2:
          return 'Freelancer';
      default:
          return 'Unknown';

    }
  }

  MapStatusText(status:number):string{
    switch(status){
      case 0:
        return 'DayTime';
      case 1:
        return 'NightTime';
      default:
        return 'Unknown';
    }
  }

  Mapsstatustext(status:number):string{
    switch(status){
      case 0:
        return 'Active';
      case 1:
        return 'InActive';
      case 2:
        return 'Blocked';
      default:
        return 'Unknown';
    }
  }





 





}
