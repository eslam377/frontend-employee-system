import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../models/employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../../services/employee.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

   employeeId: any;
   employee: any='' ;

  constructor(private activatedRoute:ActivatedRoute,
              private employeeService: EmployeeService,
              private router : Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.employeeId = param.get('id');
      this.employeeService.getEmployeeById(this.employeeId).subscribe((result)=>{
        this.employee = result ;
      });
    })
  }


  addQuery(id:any) {
    const queryParams = {
      edit: 'true'
    };
    this.router.navigate(['employees/'+id], { queryParams: queryParams });
  }
}
