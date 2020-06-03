import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {ConfigService} from "./config.service";

const httpOpt = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient,
              private conf: ConfigService) {
  }



  register(user: User) {
    return this.http.post(`${this.conf.getApiURI()}/api/User/Register`, user,  httpOpt);
  }

  login(formData) {
    return this.http.post(`${this.conf.getApiURI()}/api/User/Login`, formData,  httpOpt);
  }

  getUserProfile(){
    // var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    // return this.http.get(`${this.conf.getApiURI()}/api/UserProfile`,{headers : tokenHeader});
    return this.http.get(`${this.conf.getApiURI()}/api/UserProfile`);
  }

}


