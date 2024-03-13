import { Component, OnInit } from '@angular/core';
import { JobapplyService } from '../../service/jobapply.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JobApplyData } from '../../model/jobApply';

@Component({
  selector: 'app-jobapply',
  templateUrl: './jobapply.component.html',
  styleUrls: ['./jobapply.component.css'],
})
export class JobapplyComponent implements OnInit {
  isClicked: boolean = false;

  scrollToTop() {
    this.isClicked = true;
    console.log('Scrolling to top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  details: any;
  skills: any;
  job: any;
  benifits: any;
  imgurl = environment.imgurl;

  constructor(
    private service: JobapplyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const jobPostID = +params['id'];
      this.getdata(jobPostID);
    });
    this.GetOptionByUser();
  }

  getdata(id: any) {
    this.service.GetDetailsById(id).subscribe((resp: any) => {
      this.details = resp.data;
      this.skills = resp.data.jobPostSkill;
      this.job = resp.data.jobpost;
      this.benifits = resp.data.jobPostBenifit;
      console.log('demoData>>', resp.data.companyID);
      this.JobData.jobPostID=resp.data.companyID
      console.log("iss>",this.JobData.jobPostID);
    });
  }
  userMediaOptions: any[] = [];

  GetOptionByUser() {
    this.service.GetAllUserMediaByUserOption().subscribe((resp: any) => {
      console.log('option Data||', resp.data);
      this.userMediaOptions = resp.data;
    });
  }
  isOptionSelected: boolean =  true;

  onMediaSelect(event: any) {
    const selectedMediaUrl = event.target.value;
    console.log('Selected userMediaUrl:', selectedMediaUrl);
    this.isOptionSelected = false;
    this.JobData.attachmentPath = selectedMediaUrl;
    console.log("JobData.attachmentPath=", this.JobData.attachmentPath);

    // After processing the event, call JobApplyData() to submit the data
    this.JobApplyData();
}
  resetReader() {
    this.reader = null;
  }
  reader: any;
  image: string | undefined;
  sliderImage?: string[]
  files: File[] = []; 
  image1: string | undefined;
  onFileSelected(event: any): void {
    this.files = Array.from(event.target.files || []);
  
    this.resetReader();
    if (this.files.length > 0) {
        const file = this.files[0];
  
        this.reader = new FileReader();
        this.reader.onload = (e: any) => {
            this.image1 = e.target.result;
        };
  
        this.reader.readAsDataURL(file);
    }
  }
    


  JobData = new JobApplyData();
  applicationBrief: string = '';
// attachmentFileBase64: string = 'demo IMg show';
JobApplyData() {
  
  this.JobData.isAttachmentSelected = this.isOptionSelected;
  
  this.service.JobApply(this.JobData).subscribe((res: any) => {
      this.JobData = res.data;
      console.log('add', res);
      alert('update');
  });
}

  
}
