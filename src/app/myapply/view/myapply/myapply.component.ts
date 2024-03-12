import { Component, OnInit } from '@angular/core';
import { MyapplyService } from '../../service/myapply.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-myapply',
  templateUrl: './myapply.component.html',
  styleUrls: ['./myapply.component.css']
})
export class MyapplyComponent implements OnInit {


  isClicked: boolean = false;
  JobApplicationStatus:string[] = []
  
imgurl = environment.imgurl;
  ngOnInit(): void {
    this.getapply();
    this.JobApplicationStatus = ['Pending' , 'Applied','Processing','Accepted','Rejected']
  }
constructor(private service:MyapplyService,private router: Router){}

job:any
  getapply(){
    this.service.getdata().subscribe(
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


  mapstatustotext(status:number):string{
    switch (status){
      case 0:
        return 'Pending';
      case 1:
        return 'Applied';
      case 2:
        return 'Processing';
      case 3:
        return 'Accepted';
      case 4:
        return 'Rejected';
      default:
        return 'Unknown';
    }
  }

  mapStatusToClass(status: number): string {
    switch (status) {
      case 0: return 'status-pending';
      case 1: return 'status-applied';
      case 2: return 'status-processing';
      case 3: return 'status-accepted';
      case 4: return 'status-rejected';
      default: return '';
    }
  }

}
