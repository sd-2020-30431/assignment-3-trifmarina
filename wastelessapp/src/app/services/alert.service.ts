import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Alert, AlertType} from "../models/alert";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  onAlert(id = this.defaultId):Observable<Alert>{
    return this.subject.asObservable().pipe(filter(x => x && x.id == id));
  }


  alert(alert:Alert){
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  clear(id = this.defaultId) {
    this.subject.next(new Alert({id}));
  }

  warn(message:string, options?:any){
    this.alert(new Alert({...options,type:AlertType.Warning,message}));
  }



}
