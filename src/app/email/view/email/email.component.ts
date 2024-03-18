import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { forgetpass } from '../../model/foeget';
import { EmailService } from '../../servcie/email.service';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  imgurl = environment.imgurl;
  pass = new forgetpass();
  forgetForm!:NgForm
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private service:EmailService,private route: Router){}

  forget(){
    this.service.forgetpassword(this.pass).subscribe(
      (resp:any)=>{
        console.log(resp.data);
        sessionStorage.setItem('id',resp.data)
        this.route.navigate(['/otpverify']);
        this.ngOnInit();
        
      }
    )
  }

}
