import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  
  staticDate: string; // Sync One Way Data Binding - Only gets refreshed when the browser is refreshed
  
  dynamicDate: string // Async One Way Data Binding - Gets refreshed at a set interval

  constructor() {
    
    let date: Date = new Date();
    this.staticDate = date.toDateString();
    
    setInterval(() => {
      let date: Date = new Date();
      this.dynamicDate = date.toDateString() + ' : ' + date.toLocaleTimeString();
    }, 1000);
    
  }

  ngOnInit() {
  }
  
  sayHello(): string {
    return 'Date component says hello';
  }

}
