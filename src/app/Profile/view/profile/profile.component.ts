import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../../service/profile.service';
import { education, experience, media, profile, skills } from '../../model/profile';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  imgurl = environment.imgurl;

  skil = new skills();
  prof = new profile();
  edu = new education();
  med = new media();
  exp = new experience();
  @ViewChild("skillform")
  skillform!: NgForm;
  @ViewChild("mediaForm")
  mediaForm!: NgForm;
  @ViewChild("educationForm")
  educationForm!: NgForm;
  @ViewChild("experienceForm")
  experienceForm!: NgForm;

  constructor(private service:ProfileService,private route:ActivatedRoute){
    this.files=[];
  }


  ngOnInit(): void {
    this.getalldata();
  }


  skill(){
    this.service.addskill(this.skil).subscribe(
      (resp:any)=>{
        this.ngOnInit();
        this.skillform.reset();
      }

    )
  }

  profile:any;
  activites:any;
  users:any
  education:any;
  media:any;
  experience:any
  getalldata(){
    this.service.getuserprofiledata().subscribe(
      (resp:any)=>{
        this.users = resp.data.userData;
        this.profile = resp.data.userSkills;
        this.activites = resp.data.userActivities;
        this.education = resp.data.userEducations;
        this.media = resp.data.userMedias
        this.experience = resp.data.userExperience;
      }
    )
  }


  addeducation(){
    this.service.addeducation(this.edu).subscribe(
      (resp:any)=>{
        alert("Education Successfully");
        this.ngOnInit();
        this.educationForm.reset();
      }
    )
  }

  addexperience(){
    this.service.addexperience(this.exp).subscribe(
      (resp:any)=>{
        alert("Experience Add Successfully");
        this.ngOnInit();
        this.experienceForm.reset();
      }
    )
  }

  updatedata(){
    this.service.updateprofile(this.users).subscribe(
      (resp:any)=>{
        alert('User Data Updated Successfully');
        this.ngOnInit();
      },
      error =>{
        console.error("Failed to update profile", error);
        
      }
    )
  }

  currentEducationDetails:any
  loadEducationDetails(userEducationID:number):void{
    this.currentEducationDetails = this.education.find((e: { userEducationID: number; }) => e.userEducationID === userEducationID)
  }


  curretnmediadetails:any
  loadmediaDetails(userMediaID:number):void{
    this.curretnmediadetails = this.media.find((e:{userMediaID:number;})=> e.userMediaID === userMediaID)
  }
  currentexperience:any
  loadexperienceDetails(userExperienceID:number):void{
    this.currentexperience = this.experience.find((e:{userExperienceID:number;})=> e.userExperienceID === userExperienceID)
  }

  addusermedia(){
    this.service.addmedia(this.med).subscribe(
      (resp:any)=>{
        alert("UserMedia Successfully");
        this.ngOnInit()
      }
    )
  }

  deletemedia(id:any){
    Swal.fire({
      title:'Are You Sure?',
      text:'You want to delete this data',
      icon:'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result)=>{
      if(result.isConfirmed){
        this.service.deletemdeia(id).subscribe(
          (resp:any)=>{
           if(resp){
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Data deleted successfully',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-success'
              },
              buttonsStyling: false
            });
           }
          },
          (error: any) => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'An error occurred while deleting the data',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-danger'
              },
              buttonsStyling: false
            });
          }
        )
      }
    })
  }

  deleteedu(id:any){
    Swal.fire({
      title:'Are You Sure?',
      text:'You want to delete this data',
      icon:'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result)=>{
      if(result.isConfirmed){
        this.service.deleteeducation(id).subscribe(
          (resp:any)=>{
           if(resp){
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Data deleted successfully',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-success'
              },
              buttonsStyling: false
            });
           }
          },
          (error: any) => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'An error occurred while deleting the data',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-danger'
              },
              buttonsStyling: false
            });
          }
        )
      }
    })
  }

  deletexpe(id:any){
    Swal.fire({
      title:'Are You Sure?',
      text:'You want to delete this data',
      icon:'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result)=>{
      if(result.isConfirmed){
        this.service.deleteexperience(id).subscribe(
          (resp:any)=>{
           if(resp){
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Data deleted successfully',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-success'
              },
              buttonsStyling: false
            });
           }
          },
          (error: any) => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'An error occurred while deleting the data',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-danger'
              },
              buttonsStyling: false
            });
          }
        )
      }
    })
  }


  file: any = [];
  public files: any[];
  reader: any;

  updimagetobase64() {
    const formData = new FormData();
    for (this.file of this.files) {
      formData.append('file', this.file, this.file.name);
    }
    let dt: string = this.reader.result;
    let data2: string = dt.substring(dt.indexOf('|') + 1);
    let base64: string = data2.substring(data2.indexOf(',') + 1);
    return base64;
  }


  image:any;




  isImage(mediaType: string): boolean {
    return mediaType.startsWith('image');
  }
  
  isVideo(mediaType: string): boolean {
    return mediaType.startsWith('video');
  }
  
  isPDF(mediaType: string): boolean {
    return mediaType === 'application/pdf';
  }

  uploadImg(element: any) {
    const file = element.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e: any) => {
      const dataURL: string = e.target.result; 
      const base64Data = dataURL.split(',')[1];
      const mimeType = dataURL.split(',')[0].split(':')[1].split(';')[0]; 
      
      
      this.med.mediaFileBase64 = base64Data; 
      this.file.push(base64Data); 
      console.log('File MIME type:', mimeType);
      console.log('Base64 Data:', base64Data);
    };
    
    reader.readAsDataURL(file); 
  }
  







 

}
