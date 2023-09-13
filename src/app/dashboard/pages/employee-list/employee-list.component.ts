import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../../../services/employee.service";
import {SortEvent} from "primeng/api";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: any= [];


  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((result)=>{
      this.employees = result ;
    })
  }

  constructor(private router : Router,
              private employeeService : EmployeeService) {
  }

  showDetails(id:number) {
    this.router.navigate(['employees/employee/'+id])
  }


  customSort($event: any) {

  }
}
