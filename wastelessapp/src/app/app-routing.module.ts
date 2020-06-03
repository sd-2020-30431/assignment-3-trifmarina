import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrateComponent} from "./registrate/registrate.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {ItemComponent} from "./item/item.component";
import {GroceryListComponent} from "./grocery-list/grocery-list.component";
import {ViewListComponent} from "./view-list/view-list.component";
import {DonateComponent} from "./donate/donate.component";
import {ReportComponent} from "./report/report.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  { path: 'registrate', component: RegistrateComponent},
  { path: 'login', component: LoginComponent},
  {path:'item',component:ItemComponent},
  { path: 'grocery-list',component: GroceryListComponent},
  {path: 'view-list',component:ViewListComponent},
  {path: 'donate',component:DonateComponent},
  {path: 'report',component:ReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
