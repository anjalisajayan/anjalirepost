import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  getName='';
  getPassword='';
  getMsg='';

  onSubmit(data:NgForm){
    console.log(data.value);
    this.getName=data.value.name;
    this.getPassword=data.value.password;
    this.getMsg=data.value.msg;
    }

  constructor() { }

  ngOnInit() {
  }

}
