import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { otp } from '../../model/otp';
import { OtpverifyService } from '../../service/otpverify.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.css'],
})
export class OtpverifyComponent implements OnInit {
  imgurl = environment.imgurl;
  ot = new otp();
  otpid = sessionStorage.getItem('id');
  otpForm!: NgForm;
  isOtpValid: boolean = false;
  correctOtp: string = '';
  otp: string = '';

  ngOnInit(): void {}

  constructor(private service: OtpverifyService, private route: Router) {}

  checkOtp(): void {
    this.isOtpValid = this.otp === this.correctOtp;
  }
  errorMessage: string = '';

  verifyotp() {
    const otpid = sessionStorage.getItem('id');

    if (otpid !== null) {
      const numericOtpid = Number(otpid);

      if (!isNaN(numericOtpid)) {
        this.ot.otpid = numericOtpid;
      } else {
        console.error('otpid is not a valid number');
        return;
      }
    } else {
      console.error('otpid is full');
    }
    this.service.verifyotp(this.ot).subscribe(
      (resp: any) => {
        if (resp.status) {
          // OTP verified successfully
          console.log("otp>>", resp.message);
          this.route.navigate(['/password']);
          this.ngOnInit(); // Consider if ngOnInit() needs to be called here
        } else {
       
         this.errorMessage = resp.message; 
          
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      
      }
    );
    
  }
}
