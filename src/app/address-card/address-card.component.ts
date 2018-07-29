import { User } from './user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
  @Input('user') user: User;
  
  isCollapsed = true;
  
  isCollapsedText = 'Show';
  
  formInput = 'Enter input here';

  constructor() {
  }

  ngOnInit() {
  }
  
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.isCollapsedText = 'Show';
    } else {
      this.isCollapsedText = 'Hide';
    }
  }

}
