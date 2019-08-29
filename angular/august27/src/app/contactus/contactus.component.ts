import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  getname='';
  getemail='';
  getmsg='';
  getphno='';

  onclick(data:NgForm){
    console.log(data.value);

    this.apiservice.insertdata(data.value).subscribe(response)=>{
      console.log(data.value);
      alert("successfull..");
    }};
  }

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }


