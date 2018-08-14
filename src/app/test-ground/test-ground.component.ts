import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ground',
  templateUrl: './test-ground.component.html',
  styleUrls: ['./test-ground.component.css']
})
export class TestGroundComponent implements OnInit {

  isBlue = true;

  isRed = true;

  isBold = true;

  parentNumber: number = 1;

  combinedClasses = {
    "red" : this.isRed,
    "bold" : this.isBold
  }

  constructor() { }

  ngOnInit() {
  }

  updateParent(event) {
    this.parentNumber = event;
  }

}
