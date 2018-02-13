import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  people: any[] = [
    { "name": "Douglas Pace"},
    { "name": "Mcleaod Mueller"},
    { "name": "Day Meyers"},
    { "name": "Aguirre Ellis"},
    { "name": "Cook Tyson"}
  ];

  peopleByCountry: any[] =
  [
    {
        'country': 'UK',
        'people': [
          {
            "name": "Douglas  Pace"
          }, {
            "name": "Mcleod  Mueller"
          },
        ]
    },
    {
        'country': 'US',
        'people': [
          {
            "name": "Day  Meyers"
          }, {
            "name": "Aguirre  Ellis"
          },{
            "name": "Cook  Tyson"
          } ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
