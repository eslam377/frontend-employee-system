import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './dashboard/header/header.component';
import {MenubarModule} from "primeng/menubar";
import {EmployeeListModule} from "./dashboard/pages/employee-list/employee-list.module";
import { ErrorComponent } from './pages/error/error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeDetailsModule} from "./dashboard/pages/employee-details/employee-details.module";
import { LoginComponent } from './auth/login/login.component';
import {ContactModule} from "./pages/contact/contact.module";
import {HttpClientModule} from "@angular/common/http";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {DashboardModule} from "./dashboard/dashboard.module";

import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {NgxSpinnerModule} from "ngx-spinner";
import {CoreModule} from "./core/core.module";
import {DropdownModule} from "primeng/dropdown";



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    EmployeeListModule,
    EmployeeDetailsModule,
    ContactModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChipsModule,
    ButtonModule,
    DashboardModule,
    ToastModule,
    BrowserAnimationsModule,
    RippleModule,
    CoreModule,
    NgxSpinnerModule.forRoot({type: 'ball-scale-multiple'}),
    DropdownModule,
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
