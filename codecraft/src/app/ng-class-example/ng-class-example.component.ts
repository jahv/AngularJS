import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngclass-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {

  name: string = "NAME";
  people: any[] = [
      {
        "name": "Douglas  Pace",
        "country": 'UK'
      },
      {
        "name": "Mcleod  Mueller",
        "country": 'USA'
      },
      {
        "name": "Day  Meyers",
        "country": 'HK'
      },
      {
        "name": "Aguirre  Ellis",
        "country": 'UK'
      },
      {
        "name": "Cook  Tyson",
        "country": 'MX'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
