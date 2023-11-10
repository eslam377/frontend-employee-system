import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   username: any;
   firstName: any;
   lastName: any;
   user: any;
   userRoles:String[] = [];

  constructor(private _auth : AuthService,private _router: Router,) {
  }

  items: MenuItem[] =[];
  loggedIn = false;

  ngOnInit() {

    const token: any = localStorage.getItem('token');
    const decodedToken: any = jwt_decode(token);
    const username = decodedToken.sub;

    this.getUserByUserName(username);

    this.items = [

      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Employees',
        icon: 'pi pi-users',
        routerLink: 'employees',
      },
      {
        label: 'Departments',
        icon: 'pi pi-align-left',
        routerLink: 'departments',
      },
      {
        label: 'Test',
        routerLink: 'test',
      }
    ];
  }

  login() {
    this._router.navigate(['login'])
  }


  logout() {
    this._router.navigate(['login'])
    localStorage.removeItem('token')
  }


  getUserByUserName(data:any) {
    this._auth.getUserByUsername(data).subscribe((res)=>{
      this.user = res;
      this.username = res.username ;
      this.firstName = res.firstName;
      this.lastName = res.lastName;
      res.roles.forEach((role: { name: String; }) => {this.userRoles.push(role.name);
      });
      console.log(this.userRoles)
      console.log(this.userRoles.includes('ROLE_SUPER_ADMIN'));
    })
  }



}
