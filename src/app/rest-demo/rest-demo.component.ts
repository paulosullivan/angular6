import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-rest-demo',
  templateUrl: './rest-demo.component.html',
  styleUrls: ['./rest-demo.component.css']
})
export class RestDemoComponent implements OnInit {

  username: string;

  result: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  handleSubmitClick() {
    this.httpClient.get(`https://api.github.com/users/${this.username}`).subscribe(response => {
      this.result = response;
      console.log(this.result);
    });
  }

}
