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
    path:"jobDetails",
    component:JobDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"jobapply",
    component:JobapplyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"success",
    component:SuccessComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
