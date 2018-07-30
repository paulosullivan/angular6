import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  printToConsole(arg) {
    console.log(arg);
  }
}
