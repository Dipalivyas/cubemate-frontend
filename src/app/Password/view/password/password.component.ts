import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { password } from '../../model/password';
import { PasswordService } from '../../service/password.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  imgurl = environment.imgurl;
  pass = new password();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private service:PasswordService,private route:Router){}



  change(){
    this.service.newpass(this.pass).subscribe(
      (resp:any)=>{
        this.route.navigate(['/login']);
        this.ngOnInit
      }
    )
  }

  selectUserType(event: any): void {
    const selectedUserType = parseInt(event.target.value, 10); // Convert string to number
    console.log('Selected User Type:', selectedUserType);
    this.pass.userType = selectedUserType;
  }

}
