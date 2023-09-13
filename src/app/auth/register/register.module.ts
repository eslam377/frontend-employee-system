import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";



@NgModule({
  declarations: [
    RegisterComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        InputTextareaModule,
        ReactiveFormsModule,
        RippleModule,
        ToastModule
    ]
})
export class RegisterModule { }
