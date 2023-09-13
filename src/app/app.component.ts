import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Employee Management Sys.';

  constructor(private _spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
  }





}
