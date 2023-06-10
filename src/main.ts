import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./main.html`,
})
export class App {
  value: number;
  rate: number;
  months: number;


  getInterests(){
    return this.value *
    (1 + this.rate * this.months);
  }


  constructor(){
    this.value = 0;
    this.rate = 0;
    this.months = 0;
  }
}
bootstrapApplication(App);
