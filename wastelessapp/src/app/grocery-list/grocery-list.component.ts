import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GroceryList} from "../models/grocery-list";
import {NgForm} from "@angular/forms";
import {GroceryListService} from "../services/grocery-list.service";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  formModel={
    ListName: '',
  }

  li:GroceryList;

  constructor(private router:Router,
              private service:GroceryListService) { }

  ngOnInit(): void {
  }

  onSubmitList(form:NgForm) {

    this.li = new GroceryList(
      form.controls['ListName'].value.toString()
    )

    this.service.addList(this.li).subscribe(
      (res:any)=>{
        console.log(res);
        this.router.navigateByUrl('/dashboard');
      },
      err=>{
        console.log(err);
      }
    )


  }

}
