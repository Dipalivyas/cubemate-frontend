import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../service/home.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgurl = environment.imgurl;
  jobs:any;
  company:any


  ngOnInit(): void {
    this.getdata();
  }

  constructor(private service:HomeService){}

  getdata(){
    this.service.getdashboard().subscribe(
      (resp:any) => {
        this.jobs = resp.data.jobPostData;
        this.company = resp.data.companyProfileData
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        // Handle the error appropriately, e.g., display an error message to the user
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
  
  scrollToTop() {
    this.isClicked = true;
    console.log('Scrolling to top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }






}
