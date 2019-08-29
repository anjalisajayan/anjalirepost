import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ApiService {
 

  constructor(private http:HttpClient) { }
  x=12;
  insertData(data){
    return this.http.post("http://localhost:3000/insert",data);
  }
  getData(){
    return this.http.get("http://localhost:3000/getdata");
  }
  serachData(){
    return this.http.post("http://localhost:3000/search");
  }

}


