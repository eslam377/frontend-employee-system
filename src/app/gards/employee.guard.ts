import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild, CanDeactivate, Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {ContactComponent} from "../pages/contact/contact.component";
import {EmployeeListComponent} from "../dashboard/pages/employee-list/employee-list.component";
import {EmployeeService} from "../services/employee.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate, CanActivateChild{

  constructor(private _authService: AuthService,
              private _router:Router,
              private _employeeService : EmployeeService) {
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute , state)
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('token')){
      return true ;
    }else{
      this._router.navigate(['login']);
      return false ;
    }
  }







}
