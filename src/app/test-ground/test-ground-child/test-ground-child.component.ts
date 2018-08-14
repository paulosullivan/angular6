import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-ground-child',
  templateUrl: './test-ground-child.component.html',
  styleUrls: ['./test-ground-child.component.css']
})
export class TestGroundChildComponent implements OnInit {

  @Input("initialValue")
  counter: number;

  @Output()
  update = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.counter++;
    this.update.emit(this.counter);
  }

  decrement() {
    this.counter--;
    this.update.emit(this.counter);
  }

}
