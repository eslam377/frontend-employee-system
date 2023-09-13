import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../models/employee";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) {
  }

  employees : Employee[] = []

  baseUrl = 'http://localhost:8080/api/employees'

  getAllEmployees(): Observable<Employee[]>{
    return this._http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this._http.get<Employee>(this.baseUrl+'/'+id);
  }





}
