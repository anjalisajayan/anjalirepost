import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  getName='';
  getAddress='';
  getGender='';
  getDateofbirth='';
  getDistrict='';
  getPlace='';
  getMobilenumber='';
  getEmailid='';
  getUsername='';
  getPassword='';
  getConfirmpassword='';

  onSubmit



  constructor() { }

  ngOnInit() {
  }

}
