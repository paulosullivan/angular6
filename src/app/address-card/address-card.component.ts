import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
  user: any;

  constructor() {
    this.user = {
      name: 'Joe Bloggs',
      title: 'Software Developer',
      address: '123 Test Highway',
      phoneNumbers: [
        '123-123-1234',
        '123-222-1235',
        '123-333-1236'
      ] 
    };
  }

  ngOnInit() {
  }

}
