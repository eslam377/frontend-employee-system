import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeGuard} from "./gards/employee.guard";


const routes: Routes = [
  { path: 'login', loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)},
  { path: '', loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
