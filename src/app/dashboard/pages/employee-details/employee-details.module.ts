import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EmployeeDetailsComponent
  ],
    imports: [
        CommonModule,
        EmployeeDetailsRoutingModule,
        FormsModule
    ]
})
export class EmployeeDetailsModule { }
