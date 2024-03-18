import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder, FormGroup, and Validators
import { SignupService } from '../../service/signup.service';
import { User } from '../../model/signup';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder, private service: SignupService, private route: Router,private router: ActivatedRoute) {
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

  sign() {
      this.service.signup(this.SingData).subscribe(
        (resp:any)=>{
          this.route.navigate(['/login'])
          this.ngOnInit();
        }
      )
    }
}
  
