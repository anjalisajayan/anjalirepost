import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

 

  constructor(private http:HttpClient) { }

  insertData(data){
    return this.http.post("http//:localhost:3000/insert",data);
  }

  getData(data){
    return this.http.post("http//:localhost:3000/getdata");
  }

  viewData(data){
    return this.http.post("http//:localhost:3000/view",data);
  }

  deleteData(data){
    return this.http.post("http//:localhost:3000/Delete",data);
  }

  editData(data){
    return this.http.post("http//:localhost:3000/Delete",data);
  }
}


