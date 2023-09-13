import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentListRoutingModule } from './department-list-routing.module';
import { DepartmentListComponent } from './department-list.component';


@NgModule({
  declarations: [
    DepartmentListComponent
  ],
  imports: [
    CommonModule,
    DepartmentListRoutingModule
  ]
})
export class DepartmentListModule { }
