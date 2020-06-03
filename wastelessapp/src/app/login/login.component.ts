import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formModel={
  UserName: '',
  Password:''
}
  constructor(private service:UserService,
              private router:Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.router.navigateByUrl('/dashboard');
    }
  }

  onSignUp(): void{
      this.router.navigateByUrl('/registrate');
  }

  onSubmit(form:NgForm) {
    this.service.login(form.value).subscribe(
      (response:any)=>{
        localStorage.setItem('token',response.token);
        this.router.navigateByUrl('/dashboard');
      },
      err=>{
        if (err.status == 400){
          this.toastr.error('Incorrect username or password','Authentication failed');
        }
        else console.log(err);
      }
    );
  }
}
