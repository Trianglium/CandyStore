import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailAddress: "admin@sweetshoppe.com";
  businessAddress: "1234 Candyland cir. Denver, CO.";
  phoneNumber: "111 222 3333";
  facebookPage: "https://facebook.com/";

  constructor() { }

  ngOnInit(): void {
  }

}
