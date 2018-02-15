import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngstyle-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {

  getColor(country) {
    switch (country) {
      case 'UK': return 'green';
      case 'USA': return 'blue';
      case 'HK': return 'red';
    }
  }

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

  ngOnInit() {
  }

}
