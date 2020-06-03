import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {GroceryList} from "../models/grocery-list";
import {GroceryModel} from "../models/grocery-model";


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
export class GroceryListService {

  constructor(private http: HttpClient,
              private conf: ConfigService) { }

  addList(li:GroceryList){
    return this.http.post(`${this.conf.getApiURI()}/api/GroceryList`,li,httpOpt);
  }

  getAllLists(){
    return this.http.get(`${this.conf.getApiURI()}/api/GroceryList/GetAllLists`);
  }

  getItemsForList(id:number){
    return this.http.get(`${this.conf.getApiURI()}/api/GroceryList/GetItemsList/${id}`);
  }

  addItemsForList(gr:GroceryModel){
    console.log(gr);
    return this.http.post(`${this.conf.getApiURI()}/api/GroceryList/AddGroceryListItem`,gr,httpOpt).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );

  }
}
