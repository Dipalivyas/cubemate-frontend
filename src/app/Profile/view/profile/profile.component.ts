import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../../service/profile.service';
import { education, media, profile, skills } from '../../model/profile';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  @ViewChild("skillform")
  skillform!: NgForm;
  @ViewChild("CategoryForm")
  CategoryForm!: NgForm;

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
  media:any
  getalldata(){
    this.service.getuserprofiledata().subscribe(
      (resp:any)=>{
        this.users = resp.data.userData;
        this.profile = resp.data.userSkills;
        this.activites = resp.data.userActivities;
        this.education = resp.data.userEducations;
        this.media = resp.data.userMedias
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

  addusermedia(){
    this.service.addmedia(this.med).subscribe(
      (resp:any)=>{
        alert("UserMedia Successfully");
        this.ngOnInit()
      }
    )
  }

  deletemedia(id:any){
    this.service.deletemdeia(id).subscribe(
      (resp:any)=>{
        this.ngOnInit();
        alert("Delete Sucessfull")
      },(err:any)=>{
        console.log(err);
      }
    )
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

  // uploadImg(element: any) {

  //   var file = element.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (e: any) => {      
  //     this.image=e.target.result;
  //     let data: string = e.target.result;
  //     //let extension:string=data.substring("data:image/".length, data.indexOf(";base64"))
  //     let data2: string = data.substring(data.indexOf('|') + 1);
  //     let base64 = data2.substring(data2.indexOf(',') + 1);
  //     this.med.mediaFileBase64 = base64;
  //     // this.themes.imageextention = extension;
  //     this.file.push(this.med.mediaFileBase64);
  //     // this.ext.push(this.themes.imageextention);
  //   };
  //   reader.readAsDataURL(file);
  // }


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
    // Get the file from the input
    const file = element.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      // e.target.result contains the Base64 DataURL
      const dataURL: string = e.target.result;
  
      // Extract the Base64 encoded data, discard the DataURL metadata
      const base64Data = dataURL.split(',')[1];
  
      // Optionally, extract MIME type as well
      const mimeType = dataURL.split(',')[0].split(':')[1].split(';')[0];
  
      // Store the base64 encoded data in your model, assuming you want to use it for saving or display purposes
      this.med.mediaFileBase64 = base64Data;
  
      // If needed, store the MIME type as well for future reference or use
      // this.med.mediaType = mimeType;
  
      // Handling multiple files, if 'this.file' is an array intended to store multiple files' Base64 strings
      this.file.push(base64Data); // Storing the base64 encoded data
      // this.mimeTypes.push(mimeType); // If you're keeping track of MIME types as well
  
      // Debug or verify the file's MIME type and base64 data
      console.log('File MIME type:', mimeType);
      console.log('Base64 Data:', base64Data);
    };
  
    // Read the file as a DataURL, works for any file type
    reader.readAsDataURL(file);
  }
  







 

}
