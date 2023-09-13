import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {TestComponent} from "../components/test/test.component";
import {EmployeeGuard} from "../gards/employee.guard";

const routes: Routes = [
  {path: '', component:LayoutComponent, canActivateChild:[EmployeeGuard],children: [
      { path: '', loadChildren:()=> import('./pages/home/home.module').then(m=>m.HomeModule)},
      { path: 'home', loadChildren:()=> import('./pages/home/home.module').then(m=>m.HomeModule)},
      { path: 'test',component:TestComponent},
      { path: 'employees', loadChildren:()=> import('./pages/employee-list/employee-list.module').then(m=>m.EmployeeListModule)},
      { path: 'employees', children:[
          { path: 'employee/:id', loadChildren:()=> import('./pages/employee-details/employee-details.module').then(m=>m.EmployeeDetailsModule)}
        ]
      },
      { path: 'departments', loadChildren:()=> import('./pages/department-list/department-list.module').then(m=>m.DepartmentListModule)},
      {
        path: '**', loadChildren:()=> import('./pages/error/error.module').then(m=>m.ErrorModule)
      },
    ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
