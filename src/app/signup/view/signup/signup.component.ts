import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder, FormGroup, and Validators
import { SignupService } from '../../service/signup.service';
import { User } from '../../model/signup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  SingData = new User();
  errorMessage: string = '';
  showPassword = false;
  password: string = '';
  showConfirmPassword = false;
  confirmPassword: string = '';
  categories: any[] = [];
  signupForm: FormGroup; // Declare signupForm as FormGroup
  SelectedCategory=false;
  constructor(private formBuilder: FormBuilder, private service: SignupService, private route: Router) {
    this.signupForm = this.formBuilder.group({
      selectedUserType: ['', Validators.required], // Define selectedUserType control
      // Define other form controls here...
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  ngOnInit(): void {
    this.GetAllCategoryRequest();
  }

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
    const selectedUserType = parseInt(event.target.value, 10); 
    console.log('Selected User Type:', selectedUserType);
    this.SingData.userType = selectedUserType;
  }

  onCategorySelect(event: any) {
    const mainCategoryID = parseInt(event.target.value, 10);
    console.log('Selected mainCategoryID:', mainCategoryID);
    this.SingData.mainCategoryID = mainCategoryID;
    
    this.SelectedCategory = !!mainCategoryID; // Set SelectedCategory to true if mainCategoryID is truthy
  }
  signData() {
    if (this.signupForm.valid) {
      // Assuming `this.service.signup` is your method to send data to your backend
      this.service.signup(this.SingData).subscribe({
        next: (res: any) => {
          // Optionally, handle the response data if needed. You might want to reset the form here as well.
          console.log('Registration successful', res);
          
          // Navigate to the login page upon successful registration
          this.route.navigate(['/login']);
        },
        error: (error) => {
          // Handle any errors that occur during the HTTP request.
          console.error('Registration failed', error);
        }
      });
    } else {
      // Trigger form validation
      // this.signupForm.form.markAllAsTouched();
    }
  }
  
}
