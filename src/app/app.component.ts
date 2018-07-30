import { User } from './address-card/user.model';
import { Component, OnInit } from '@angular/core';
import {TestServiceService} from "./test-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular6';

  user: User;

  constructor(private svc: TestServiceService, private httpClient: HttpClient) {
    this.user = new User();
    this.user.name = 'Mike Smith';
    this.user.title = 'Manager';
    this.user.address = '12345 Lower Street';
    this.user.phoneNumbers = ['1234567', '7654321', '098765'];
    svc.printToConsole(this.user);
  }

  ngOnInit() {
    let observable = this.httpClient.get("https://api.github.com/users/paulosullivan");
    observable.subscribe(response => console.log(response));
  }

}
