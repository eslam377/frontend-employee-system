import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentListComponent} from "../department-list/department-list.component";
import {EmployeeListComponent} from "../employee-list/employee-list.component";
import {EmployeeDetailsComponent} from "./employee-details.component";

const routes: Routes = [
  {path: '', component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }
