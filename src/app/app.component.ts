import { User } from './address-card/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular6';
  
  user: User;
  
  constructor() {
    this.user = new User();
    this.user.name = 'Mike Smith';
    this.user.title = 'Manager';
    this.user.address = '12345 Lower Street';
    this.user.phoneNumbers = ['1234567', '7654321', '098765'];
  }
  
}
