import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {ConfigService} from "./services/config.service";
import { LoginComponent} from "./login/login.component";
import { ToastrModule } from 'ngx-toastr';
import {AuthInterceptor} from "./auth/auth.interceptor";
import { ItemComponent } from './item/item.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewListComponent } from './view-list/view-list.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {AlertComponent} from "./alert/alert.component";
import {AlertModule} from "./alert/alert.module";
import { DonateComponent } from './donate/donate.component';
import { ReportComponent } from './report/report.component';
import { RepchangeDirective } from './repchange.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrateComponent,
    DashboardComponent,
    LoginComponent,
    ItemComponent,
    GroceryListComponent,
    ViewListComponent,
    DonateComponent,
    ReportComponent,
    RepchangeDirective
     // AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
