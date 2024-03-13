
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule }      from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/view/navbar/navbar.component';
import { HomeComponent } from './Home/view/home/home.component';
import { CarouselModule} from 'ngx-owl-carousel-o';
import { FooterComponent } from './Footer/view/footer/footer.component';
import { JobDetailsComponent } from './JobDetails/view/job-details/job-details.component';
import { LoginComponent } from './Login/view/login/login.component';
import { SignupComponent } from './signup/view/signup/signup.component';
import { JobapplyComponent } from './jobApply/view/jobapply/jobapply.component';
import { SuccessComponent } from './Success/view/success/success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorTokenService } from './Common/interceptor-token.service';
import { FormatNumberPipe } from './format-number.pipe';
import { ProfileComponent } from './Profile/view/profile/profile.component';
import { MyapplyComponent } from './myapply/view/myapply/myapply.component';
import { JobsComponent } from './JOBS/view/jobs/jobs.component';
import { EmailComponent } from './email/view/email/email.component';
import { OtpverifyComponent } from './otpverify/view/otpverify/otpverify.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    JobDetailsComponent,
    LoginComponent,
    SignupComponent,
    JobapplyComponent,
    SuccessComponent,
    FormatNumberPipe,
    ProfileComponent,
    MyapplyComponent,
    JobsComponent,
    EmailComponent,
    OtpverifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS,useClass:InterceptorTokenService,multi:true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
