import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './login/users';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl="http://localhost:8080/user/"
  
  constructor(private http:HttpClient) { }
  
  getUserData(model:Users):Observable<object>{
    console.log(model);
     return this.http.post('${this.baseUrl}',model);
     
  }
}
