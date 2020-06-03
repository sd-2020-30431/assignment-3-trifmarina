import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ItemService} from "../services/item.service";
import {GroceryListService} from "../services/grocery-list.service";
import {DataService} from "../services/data.service";
import {AlertService} from "../services/alert.service";
import {AlertComponent} from "../alert/alert.component";
import {Item} from "../models/item";
// import {AlertModule} from "../alert/alert.module";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetails;
  items: any;
  gLists;
  message: string;

  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

  itemsToExpire;

  constructor(private router:Router,
              private service:UserService,
              private serviceItem: ItemService,
              private serviceList: GroceryListService,
              private serviceData: DataService,
              public alertService: AlertService) {

  }

  goToAddItem (){
    this.router.navigate(['/item']);
  }

  goToAddList (){
    this.router.navigate(['/grocery-list']);
  }

  onReport(){
    this.router.navigate(['/report']);
  }
  showBurnRates(){
    console.log("aaaaa");
    console.log(this.getIdealBu(10));

    for(let key in this.items) {

      console.log(+this.items[key].itemId);
      this.items[key]._ideal = this.getIdealBu(this.items[key].itemId);
    }
  }

  getIdealBu(id:number): number {
    let itemRate: number;
    this.serviceItem.getIdeal(id).subscribe(
      res => {
        itemRate = +res;
        console.log(itemRate);
      },
      err => {
        console.log(err);
      }
    );
    return itemRate;
  }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res=>{
        this.userDetails = res;
      },
      err=>{
        console.log(err);
      }
    );

    this.serviceItem.getAllItems().subscribe(
      res=>{
        this.items = res;
        console.log(res);
      },
        err=>{
        console.log(err);
        }

    );

    //console.log(this.items._ideal);
    // this.showBurnRates();



    this.serviceList.getAllLists().subscribe(
      resLists=>{
        this.gLists = resLists;
      },
      err=>{
        console.log(err);
      }
    );

    // this.alertService.warn('Warning: ',this.options);



    let btn_item = document.getElementById("coolbutton");
    let btn_list = document.getElementById("coolbuttonlist");
    // let btn_warn = document.getElementById("coolwarn");
    if (btn_item) {
      btn_item.addEventListener("click", (e: Event) => this.goToAddItem());
    }
    if (btn_list) {
      btn_list.addEventListener("click", (e: Event) => this.goToAddList());
    }

    // if (btn_warn) {
    //   btn_warn.addEventListener("click", (e: Event) => this.GetItemsExp());
    // }

    this.serviceData.currentMessage.subscribe(message => this.message = message)
    // this.alertService.warn('See the items that are going to expire tomorrow',this.options);

  }

  onLogout (){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  OnClickPlus(id: number){
    this.serviceData.changeMessage(id.toString());
    this.router.navigate(['/view-list'])
  }

  onDonate(){
    this.router.navigate(['/donate']);
  }


  // newMessage() {
  //   this.serviceData.changeMessage()
  // }

}
