import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Navbar/view/navbar/navbar.component';
import { HomeComponent } from './Home/view/home/home.component';
import { FooterComponent } from './Footer/view/footer/footer.component';
import { JobDetailsComponent } from './JobDetails/view/job-details/job-details.component';
import { LoginComponent } from './Login/view/login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/view/signup/signup.component';
import { AuthGuard } from './Common/auth.guard';
import { JobapplyComponent } from './jobApply/view/jobapply/jobapply.component';
import { SuccessComponent } from './Success/view/success/success.component';
import { ProfileComponent } from './Profile/view/profile/profile.component';
import { MyapplyComponent } from './myapply/view/myapply/myapply.component';
import { JobsComponent } from './JOBS/view/jobs/jobs.component';
import { EmailComponent } from './email/view/email/email.component';
import { OtpverifyComponent } from './otpverify/view/otpverify/otpverify.component';
import { PasswordComponent } from './Password/view/password/password.component';
import { CompaniesComponent } from './companies/view/companies/companies.component';
import { ContactComponent } from './Contact US/view/contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: 'full'
      }
    ]
  },

  {
    path:"navbar",
    component:NavbarComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"footer",
    component:FooterComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"jobDetails/:id",
    component:JobDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"email",
    component:EmailComponent
  },
  {
    path:"signup",
    component:SignupComponent,
  },
  {
    path:"otpverify",
    component:OtpverifyComponent
  },
  {
    path:"password",
    component:PasswordComponent
  },
  {
    path:"jobapply/:id",
    component:JobapplyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"companies",
    component:CompaniesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"success",
    component:SuccessComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"myapply",
    component:MyapplyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"jobs",
    component:JobsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"contact",
    component:ContactComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
