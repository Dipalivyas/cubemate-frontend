import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Navbar/view/navbar/navbar.component';
import { HomeComponent } from './Home/view/home/home.component';
import { FooterComponent } from './Footer/view/footer/footer.component';
import { JobDetailsComponent } from './JobDetails/view/job-details/job-details.component';

const routes: Routes = [

  {
    path:"navbar",
    component:NavbarComponent
  }
  ,
  {
    path:"home",
    component:HomeComponent
  },{
    path:"footer",
    component:FooterComponent
  },{
    path:"jobDetails",
    component:JobDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
