import { Component, OnInit } from '@angular/core';
import { support } from '../../model/support';
import { ContactService } from '../../service/contact.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  suppo = new support();
  types: any[] = [];

  image: any;
  file: any = [];

  ngOnInit(): void {
    this.getallsupport()
  }
  constructor(private service:ContactService) { }


  adddata(){
    this.suppo.supportTypeId = this.testnewstateID;
    this.service.addsupport(this.suppo).subscribe(
      (resp:any)=>{
        alert("support type add successfully")
        this.ngOnInit();
      }
    )
  }

  getallsupport(){
    this.service.getallsupport().subscribe(
      (resp:any)=>{
        this.types = resp.data;
      }
    )
  }

  testnewstateID!:number
  getStateIdbySelect(event: any) {
    const selectedsupportTypeId = event.target.value;
    this.testnewstateID = selectedsupportTypeId;
  }



  uploadImg(element: any) {
    var file = element.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.image = e.target.result;
      let data: string = e.target.result;
      let data2: string = data.substring(data.indexOf('|') + 1);
      let base64 = data2.substring(data2.indexOf(',') + 1);
      this.suppo.attachement = base64;
      this.file.push(this.suppo.attachement);
    };
    reader.readAsDataURL(file);
  }

}
