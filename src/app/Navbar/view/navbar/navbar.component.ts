import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.getUserData();
    if (this.title == null || this.title == "")
      this.title = "DashBoard";
  }

  constructor(private router: Router){}

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  @Input() title: string = "";
  firstName: string | null = "";

  getUserData() {
    this.firstName = sessionStorage.getItem('firstName');
  }
}
