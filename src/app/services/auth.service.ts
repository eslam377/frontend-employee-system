import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "../models/login-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) {
  }

  signIn(loginDto:LoginDto): Observable<any>{
    return this._http.post('http://localhost:8080/api/auth/signin', loginDto);
  }

  getUser(data:any):Observable<any>{
    return this._http.get('http://localhost:8080/api/auth/findUser'+'?'+'email='+ data)
  }

  getUserByUsername(data:any):Observable<any>{
    return this._http.get('http://localhost:8080/api/user/' + data)
  }

  getHello(): Observable<string> {
    // Make an HTTP GET request
    return this._http.get<string>('http://localhost:8099/holidays/hello');

  }


}
