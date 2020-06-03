import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Item} from "../models/item";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  formModel={
    ItemName: '',
    Quantity:0,
    Calories:0,
    PurchaseDate:'',
    ExpirationDate:'',
    ConsumptionDate:''
  }
  i:Item;
  constructor(private router:Router,
              private service:ItemService) {

  }

  ngOnInit(): void {
  }

  onSubmitItem(form:NgForm){


    this.i = new Item(
      form.controls['ItemName'].value.toString(),
      form.controls['Quantity'].value,
      form.controls['Calories'].value,
      form.controls['PurchaseDate'].value.toString(),
      form.controls['ExpirationDate'].value.toString(),
      form.controls['ConsumptionDate'].value.toString(),
      0
    );

    //console.log(this.i);

    this.service.addItem(this.i).subscribe(
      (res:any)=>{
        console.log(res);
        this.router.navigateByUrl('/dashboard');
      },
      err=>{
        console.log(err);
      }
    );


  }
}
