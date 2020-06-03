import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {AlertService} from "../services/alert.service";
import {Alert, AlertType} from "../models/alert";
import {Subscription} from "rxjs";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit,OnDestroy {

  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[]=[];
  alertSubscription: Subscription;
  routeSubscription: Subscription;

  itemsToExpire;
  constructor(private router:Router,
              private alertService: AlertService,
              private serviceItem: ItemService) { }





  GetItemsExp(){
    this.alertService.warn('Warning: ');
    this.serviceItem.getExpiringItems().subscribe(
      res=>{
        this.itemsToExpire = res;
      },
      err=>{
        console.log(err);
      }
    );
    // this.getIdealBu(10);
  }

  ngOnInit(): void {

    this.alertSubscription = this.alertService.onAlert(this.id)
      .subscribe(alert =>{
        if (!alert.message){
          this.alerts = this.alerts.filter(x=>x.keepAfterRouteChange);
          this.alerts.forEach(x=>delete x.keepAfterRouteChange);
          return;
        }

        this.alerts.push(alert);

      });



    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        this.alertService.clear(this.id);
      }
    });

    let btn_warn = document.getElementById("coolwarn");
    if (btn_warn) {
      btn_warn.addEventListener("click", (e: Event) => this.GetItemsExp());
    }
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      this.alerts.find(x => x === alert).fade = true;

      setTimeout( ()=>{
          this.alerts = this.alerts.filter(x => x !== alert);
        },250
      );
    } else {
      this.alerts = this.alerts.filter(x => x !== alert);
    }

  }

  cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['alert','alert-dismissable'];
    const alertTypeClasses = {
      [AlertType.Success]:'alert alert-success',
      [AlertType.Error]:'alert alert-danger',
      [AlertType.Info]:'alert alert-info',
      [AlertType.Warning]:'alert alert-warning'
    }

    classes.push(alertTypeClasses[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');

  }

}
