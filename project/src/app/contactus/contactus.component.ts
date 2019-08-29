import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class  implements OnInit {
  
  getName='';
  getEmail='';
  getMsg='';


  onSubmit(data:NgForm){

    console.log(data.value);
   
    this.apiservice.insertData(data.value).subscribe(Response)=>{
      console.log(data.value);
      alert('successfully inserted');
    
    }
  }
  constructor(private apiservice:ApiService) { }

  ngOnInit() { }
  

}

