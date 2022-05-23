import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailAddress: "admin@sweetshoppe.com";
  businessAddress: "1234 Candyland cir. Denver, CO.";
  phoneNumber: "111 222 3333";
  facebookPage: "https://facebook.com/";

  constructor() { }

  ngOnInit(): void {
  }

}
