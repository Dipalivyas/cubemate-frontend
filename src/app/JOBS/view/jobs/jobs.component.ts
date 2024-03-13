import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JobsService } from '../../service/jobs.service';
import { filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  imgurl = environment.imgurl;
  
  job:any;
  workingtype: string[] = [];
  shifttype: string[] = [];
  jobpost: string[] = [];
  isClicked: boolean = false;

  ngOnInit(): void {
    this.getalldata();
    this.workingtype = ['FullTime', 'PartTime', 'Freelance'];
    this.shifttype = ['DayTime', 'NightTime'];
    this.jobpost = ['Active', 'InActive', 'Blocked'];
  }

  constructor(private service:JobsService, private router: Router){}

  getalldata(){
    this.service.getalljob().subscribe(
      (resp:any)=>{
        this.job = resp.data
      }
    )
  }



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
}
