import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/view/navbar/navbar.component';
import { HomeComponent } from './Home/view/home/home.component';
import { CarouselModule} from 'ngx-owl-carousel-o';
import { FooterComponent } from './Footer/view/footer/footer.component';
import { JobDetailsComponent } from './JobDetails/view/job-details/job-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
