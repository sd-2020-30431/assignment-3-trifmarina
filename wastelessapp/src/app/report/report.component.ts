import {Component, Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ItemService} from "../services/item.service";






@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  itemReport;
  color:string;
  constructor(
    private router:Router,
    private service: ItemService
  ) { }

  ngOnInit(): void {

    this.service.getReport().subscribe(
      res=>{
        this.itemReport = res;
        console.log(this.itemReport);
      },
      err=>{
        console.log(err);
      }
    );
    this.color = 'yellow';

  }

  mouseEnter(div : string){
    console.log("mouse enter : " + div);

    if(+this.itemReport.itemsExpired <= +this.itemReport.nrItems/2){
      this.color = 'green';
    } else{
      this.color = 'red';
    }
  }

}
