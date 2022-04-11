import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

    TimeInput : string;
    DateInput : string;
  
    constructor() {
    }
    ngOnInit() {
    }
    getDay(userDate: String,userTime: String) : string {
      return String(userDate+'T'+userTime);
    }
  }