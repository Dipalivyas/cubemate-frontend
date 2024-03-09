import { Component, OnInit } from '@angular/core';
import { MyapplyService } from '../../service/myapply.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-myapply',
  templateUrl: './myapply.component.html',
  styleUrls: ['./myapply.component.css']
})
export class MyapplyComponent implements OnInit {

imgurl = environment.imgurl;
  ngOnInit(): void {
    this.getapply();
  }
constructor(private service:MyapplyService){}

job:any
  getapply(){
    this.service.getdata().subscribe(
      (resp:any)=>{
        this.job = resp.data
      }
    )
  }

}
