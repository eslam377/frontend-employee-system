import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstName: any ;
  lastName: any ;
  country: any;
  subject: any;
  constructor() { }
  ngOnInit(): void {
  }


  isTypedIn() {
    if (this.firstName || this.lastName || this.country || this.subject ) {
      return confirm('Are you sure you want to leave this page ??');
    }else {
      return true;
    }
  }
}
