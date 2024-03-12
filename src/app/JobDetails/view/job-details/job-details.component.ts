import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { JobdetailsService } from '../../service/jobdetails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  imgurl = environment.imgurl;

  workingtype:string[] = [];
  shifttype:string[] = [];
  jobpost:string[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      const jobPostID = +params['id'];
      this.getdata(jobPostID);
    });
    this.workingtype = ['FullTime','PartTime','Freelance'];
    this.shifttype = ['DayTime' , 'NightTime'];
    this.jobpost = ['Active' , 'InActive' ,'Blocked']
  }

  constructor(private service:JobdetailsService,private route: ActivatedRoute,private router: Router){}


  details:any;
  skills:any;
  job:any;
  benifits:any;
  getdata(id:any){
    this.service.getdetailsbyid(id).subscribe(
      (resp:any)=>{
        this.details = resp.data;
        this.skills = resp.data.jobPostSkill;
        this.job = resp.data.jobpost;
        this.benifits = resp.data.jobPostBenifit;
        console.log(resp.data);
        
      }
    )
  }

  navigateToJobDetails(jobPostID: string) {
    this.router.navigate(['/jobapply/',jobPostID], {queryParams:filter, skipLocationChange: true});
    this.scrollToTop();
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
