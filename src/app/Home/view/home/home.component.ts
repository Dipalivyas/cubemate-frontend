import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../service/home.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imgurl = environment.imgurl;
  jobs: any;
  company: any;
  workingtype: string[] = [];
  shifttype: string[] = [];
  jobpost: string[] = [];
  @Input() counter: any;

  ngOnInit(): void {
    this.getdata();
    this.workingtype = ['FullTime', 'PartTime', 'Freelance'];
    this.shifttype = ['DayTime', 'NightTime'];
    this.jobpost = ['Active', 'InActive', 'Blocked'];
    // this.animateCounters();
  }

  constructor(private service: HomeService, private router: Router) {}

  getdata() {
    this.service.getdashboard().subscribe(
      (resp: any) => {
        this.jobs = resp.data.jobPostData;

        this.company = resp.data.companyProfileData;
        
        this.counter = resp.data;
        this.animateCounters();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }



  animateCounters() {
    this.animateValue("jobcount", 0, this.counter.jobcount, 1000);
    this.animateValue("companycount", 0, this.counter.companycount, 1000);
    this.animateValue("usercount", 0, this.counter.usercount, 1000);
    this.animateValue("livejobcount", 0, this.counter.livejobcount, 1000);
  }


  animateValue(id: string, start: number, end: number, duration: number) {
    if (start === end) return;
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = this.counter;
    let timer = setInterval(() => {
      current += increment;
      obj[id] = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }


  addressToggleStates: {[key: string]: boolean} = {};
  isAddressShown(jobPostID: string): boolean {
    return !!this.addressToggleStates[jobPostID];
  }

  toggleAddress(jobPostID: string): void {
    if (this.addressToggleStates[jobPostID] === undefined) {
      this.addressToggleStates[jobPostID] = true; // Initialize with true when first clicked
    } else {
      this.addressToggleStates[jobPostID] = !this.addressToggleStates[jobPostID];
    }
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
        items: 1,
      },
      400: {
        items: 1,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: false,
  };

  navigateToJobDetails(jobPostID: string) {
    this.router.navigate(['/jobDetails/', jobPostID], {
      queryParams: filter,
      skipLocationChange: true,
    });
    this.scrollToTop();
  }

  scrollToTop() {
    this.isClicked = true;
    console.log('Scrolling to top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  mapstatustotext(status: number): string {
    switch (status) {
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

  MapStatusText(status: number): string {
    switch (status) {
      case 0:
        return 'DayTime';
      case 1:
        return 'NightTime';
      default:
        return 'Unknown';
    }
  }

  Mapsstatustext(status: number): string {
    switch (status) {
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
  AddressShow: boolean = true;

  AddressShowClick(companyID: number) {
      if (companyID !== undefined) {
          this.AddressShow = !this.AddressShow;
      } else {
          this.AddressShow = false; // Corrected to use this.AddressShow
      }
  }
  
}
