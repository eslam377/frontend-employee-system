import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentListComponent} from "../department-list/department-list.component";
import {EmployeeListComponent} from "./employee-list.component";

const routes: Routes = [
  {path: '', component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeListRoutingModule { }
