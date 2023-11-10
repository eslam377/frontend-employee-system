import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService,ConfirmationService]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  forgetPasswordForm!: FormGroup;
  displayBasic: boolean = false ;
  rememberMe: boolean = false;
  isWrong: boolean = false ;
  result: string='';

  constructor(private _formBuilder:FormBuilder,
              private _authService:AuthService,
              private _messageService: MessageService,
              private _router:Router,
              private _spinner: NgxSpinnerService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.createForgetPasswordForm();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    this.rememberMe = storedUsername !== null && storedPassword !== null;
  }

  createLoginForm(){
    this.loginForm = this._formBuilder.group({
      username:[localStorage.getItem('username'),[Validators.required]],
      password:[localStorage.getItem('password'),[Validators.required]]
    })
  }

  createForgetPasswordForm(){
    this.forgetPasswordForm = this._formBuilder.group({
      email1:['',[Validators.required]]
    })
  }

  login() {
    this._spinner.show();
    this._authService.signIn(this.loginForm.value).subscribe(result => {
      localStorage.setItem('token', result.accessToken)

      if (this.rememberMe) {
        // Save user and password in localStorage
        localStorage.setItem('username', this.loginForm.value.username);
        localStorage.setItem('password', this.loginForm.value.password);
      } else {
        // Clear user and password from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      this._messageService.add({severity:'success', summary: 'Success', detail: 'login successful'});
      this._router.navigate(['home'])
      this._spinner.hide();

    },error => {
      this.isWrong =true;
      this._messageService.add({severity:'error', summary: 'Error', detail: error.error.message});
      console.log(error.error.message);
      this._spinner.hide();
    });
    this.isWrong =false;
  }



  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email1() {
    return this.forgetPasswordForm.get('email1');
  }


  showBasicDialog() {
    this.displayBasic = true;
  }

  forgetPassword() {
     this._spinner.show();
    console.log("hello")
    let displayBasic = true ;
    this._authService.getUser(this.forgetPasswordForm.value.email1).subscribe((res) => {

      this.displayBasic = false;
      setTimeout(() => {this._spinner.hide();},500)
      this._messageService.add({severity:'success', summary: 'Success', detail: 'Password has been successfully sent. Please check your email'});
    },error => {
      setTimeout(() => {this._spinner.hide();},500)
      this._messageService.add({severity:'error', summary: 'Error', detail: 'No user found for this email'});
    })
  }


  toggleRememberMe() {
    this.rememberMe = !this.rememberMe;
  }

}
