import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GroceryListService} from "../services/grocery-list.service";
import {DataService} from "../services/data.service";
import {FormControl} from "@angular/forms";
import {ItemService} from "../services/item.service";
import {BrowserAnimationsModule} from
    '@angular/platform-browser/animations';
import {GroceryList} from "../models/grocery-list";
import {GroceryModel} from "../models/grocery-model";

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {


  items;
  id:number;
  message:string;
  grList: GroceryList;
  grModel:GroceryModel;
  grItems;

  itemsForm = new FormControl();
  allItems;

  constructor(private router:Router,
              private serviceList: GroceryListService,
              private data: DataService,
              private serviceItem: ItemService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)

    this.serviceItem.getAllItems().subscribe(
      res=>{
        this.allItems = res;
        console.log(res);
      },
      err=>{
        console.log(err);
      }

    );


    this.serviceList.getItemsForList(+this.message).subscribe(
      res=>{
        this.items = res;
      },
      err=>{
        console.log(err);
      }
    );

    let btn = document.getElementById("addItemsToList");
    if (btn){
      btn.addEventListener("click",(e:Event)=> this.addItemsToL())
    }

  }

  addItemsToL(){
    console.log("aici aaa");
    console.log(this.itemsForm.value);
    this.grList = new GroceryList("aa",+this.message);
    this.grItems = this.itemsForm.value;
    this.grModel = new GroceryModel(this.grList,this.itemsForm.value);
    console.log("modelu");
    console.log(this.grModel);
    this.serviceList.addItemsForList(this.grModel);
    this.router.navigate(['/dashboard']);
  }

}
