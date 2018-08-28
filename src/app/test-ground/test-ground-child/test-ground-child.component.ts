import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-test-ground-child',
  templateUrl: './test-ground-child.component.html',
  styleUrls: ['./test-ground-child.component.css']
})
export class TestGroundChildComponent implements OnInit, OnChanges {

  @Input("initialValue")
  counter: number;

  @Output()
  update = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  /*
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges() method");
    let change: SimpleChange = changes.counter;
    console.log(change.currentValue);
    console.log(change.previousValue);
  }
  */

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    // for-in is a JS iteration expression (where prop is the property name and not the value)
    for(let prop in changes) {
      console.log(`property name = ${prop}`);
      // Access the name using the bracket notation as opposed to the dot notation
      console.log(`current value = ${changes[prop].currentValue}`);
      console.log(`previous value = ${changes[prop].previousValue}`);
    }

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
