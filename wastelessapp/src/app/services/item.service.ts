import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {Item} from "../models/item";

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
export class ItemService {

  constructor(private http: HttpClient,
              private conf: ConfigService) {

  }

  addItem(it:Item){
    return this.http.post(`${this.conf.getApiURI()}/api/Item/Add`,it,httpOpt);
  }

  getAllItems(){
    return this.http.get(`${this.conf.getApiURI()}/api/Item`);
  }

  getExpiringItems(){
    return this.http.get(`${this.conf.getApiURI()}/api/Item/expire`);
  }

  getIdeal(id:number){
    return this.http.get(`${this.conf.getApiURI()}/api/Item/ideal/${id}`);
  }

  getReport(){
    return this.http.get(`${this.conf.getApiURI()}/api/Item/Report`);
  }

}
