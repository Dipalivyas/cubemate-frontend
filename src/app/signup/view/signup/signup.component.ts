import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../service/signup.service';
import { User } from '../../model/signup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errorMessage: string = '';
  showPassword = false;
  password: string = '';

  showConfirmPassword = false;
  confirmPassword: string = '';
  // categories: any;

  ngOnInit(): void {
    this.GetAllCategoryRequest();
  }
  constructor(private service: SignupService, private route: Router) {}
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  categories: any[] = [];
  GetAllCategoryRequest() {
    this.service.GetAllCategory().subscribe(
      (resp: any) => {
        console.log('red[psidsnd', resp);
        this.categories = resp.data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  
  selectUserType(event: any): void {
    const selectedUserType = parseInt(event.target.value, 10); // Convert string to number
    console.log('Selected User Type:', selectedUserType);
    this.SingData.userType = selectedUserType;
  }
  
  onCategorySelect(event: any) {
    const mainCategoryID = parseInt(event.target.value, 10); // Convert string to number
    console.log('Selected mainCategoryID:', mainCategoryID);
    this.SingData.mainCategoryID = mainCategoryID;
  }
  
  SingData = new User();

  signData() {
    this.service.signup(this.SingData).subscribe((res: any) => {
      this.SingData = res.data;
      console.log('add', res);
      this.route.navigate(['/home']);
    })
  }
}
